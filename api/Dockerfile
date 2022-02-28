FROM python:3.8-slim

RUN apt-get update && \
    apt-get install -y sudo

RUN adduser --disabled-password --gecos '' ecommerce
RUN adduser ecommerce sudo
RUN echo '%sudo ALL=(ALL) NOPASSWD:ALL' >> /etc/sudoers

USER ecommerce
WORKDIR /home/ecommerce/app

ENV PATH="/home/ecommerce/.local/bin:$PATH"

VOLUME [ "/data" ]

COPY requirements.txt requirements.txt

RUN pip install --upgrade pip && \
    pip install -r requirements.txt

COPY . /home/ecommerce/app

RUN sh migrate.sh
STOPSIGNAL SIGKILL

CMD ["sh", "entry-point.sh"]
