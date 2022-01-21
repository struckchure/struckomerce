from rest_framework import serializers

from store.models import Image, Product, Tag


class CreateProductSerializer(serializers.ModelSerializer):
    images = serializers.ListField(child=serializers.FileField())
    tags = serializers.ListField(child=serializers.CharField())

    class Meta:
        model = Product
        fields = "__all__"
        read_only_fields = ["store", "slug"]

    def create(self, validated_data):
        images = validated_data.pop("images")
        tags = validated_data.pop("tags")

        product = Product.objects.create(**validated_data)
        product.save()

        bulk_create_images = Image.objects.bulk_create(
            [Image(image=image) for image in images]
        )

        bulk_create_tags = []

        for __tag in tags:
            tag, created = Tag.objects.get_or_create(name=__tag)
            if not created:
                tag.save()
            bulk_create_tags.append(tag)

        product.images.set(bulk_create_images)
        product.tags.set(bulk_create_tags)

        return product

    def update(self, instance, validated_data):
        instance.name = validated_data.get("name", instance.name)
        instance.description = validated_data.get("description", instance.description)
        instance.price = validated_data.get("price", instance.price)

        # set category

        if validated_data.get("category"):
            instance.set_category(validated_data.get("category"))

        # add images

        images = validated_data.get("images")

        if images:
            bulk_create_images = Image.objects.bulk_create(
                [Image(image=image) for image in images]
            )

            instance.images.set(bulk_create_images)

        # add tags

        tags = validated_data.get("tags")
        if tags:
            instance.add_tags(*tags)

        instance.save()

        return instance


class ImageSerializer(serializers.ModelSerializer):

    image = serializers.SerializerMethodField()

    class Meta:
        model = Image
        fields = ["image", "description"]

    def get_image(self, obj):
        return obj.image_url


class TagSerializer(serializers.ModelSerializer):
    class Meta:
        model = Tag
        fields = ["name", "description"]


class ProductSerializer(serializers.ModelSerializer):
    images = serializers.SerializerMethodField()
    tags = TagSerializer(many=True)
    store = serializers.SerializerMethodField()

    class Meta:
        model = Product
        fields = "__all__"
        read_only_fields = ["store", "slug"]

    def get_images(self, obj):
        return ImageSerializer(obj.images.all(), many=True).data

    def get_store(self, obj):
        return obj.store.name
