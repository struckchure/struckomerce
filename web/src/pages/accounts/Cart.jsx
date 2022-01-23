import React from "react";
import { connect } from "react-redux";

import CartItem from "../../components/cart/CartItem";
import BaseLayout from "../../layouts/BaseLayout";

import user_image from "../../assets/img/user2-160x160.jpg";
import paypal_image from "../../assets/img/paypal.png";
import visa_image from "../../assets/img/visa.png";
import master_card_image from "../../assets/img/mastercard.png";

export const Cart = (props) => {
  return (
    <BaseLayout>
      {/* navbar */}
      <BaseLayout.Navbar show_search_bar={false} />

      <BaseLayout.Container className="p-2 container mx-auto">
        <div className="flex sm:flex-row flex-col gap-4 w-full py-4 px-6">
          <div className="basis-2/3 w-full col-span-2">
            <div className="flex justify-between items-end">
              <div>
                <h3 className="font-bold">Shopping Cart</h3>
                <small>You have 4 items in your cart</small>
              </div>

              <div>
                <span className="text-gray-300">Sort by: </span>
                <select className="font-bold bg-transparent">
                  <option>Price</option>
                </select>
              </div>
            </div>

            {/* cart items */}
            <div className="flex flex-col gap-2 py-4">
              <CartItem />
              <CartItem />
              <CartItem />
              <CartItem />
              <CartItem />
              <CartItem />
              <CartItem />
            </div>
          </div>

          <div className="basis-1/3 bg-gray-800 rounded-3xl w-full h-fit col-span-1 sticky top-[15%] p-6">
            <div className="flex flex-row items-center justify-between">
              <span className="font-bold text-xl">Card Details</span>
              <img
                src={user_image}
                className="object-fit w-10 h-10 rounded-md"
                alt=""
              />
            </div>

            <div className="flex flex-col gap-2 py-4">
              <small>Card type</small>
              <div className="flex flex-row gap-4 my-2">
                <button className="bg-transparent rounded-none p-0 h-fit">
                  <img
                    src={master_card_image}
                    className="object-fit w-14 h-auto"
                    alt=""
                  />
                </button>

                <button className="bg-transparent rounded-none p-0 h-fit">
                  <img
                    src={visa_image}
                    className="object-fit w-14 h-auto"
                    alt=""
                  />
                </button>

                <button className="bg-transparent rounded-none p-0 h-fit">
                  <img
                    src={paypal_image}
                    className="object-fit w-14 h-auto"
                    alt=""
                  />
                </button>
              </div>
            </div>

            <hr className="my-4" />

            <div className="flex flex-col gap-2">
              <div className="flex flex-row justify-between items-center">
                <span className="font-bold">Subtotal</span>
                <span className="font-bold">$500</span>
              </div>

              <div className="flex flex-row justify-between items-center">
                <span className="font-bold">Shipping</span>
                <span className="font-bold">$20</span>
              </div>

              <div className="flex flex-row justify-between items-center">
                <span className="font-bold">Total</span>
                <span className="font-bold">$520</span>
              </div>

              <div>
                <button className="w-full flex flex-row justify-between">
                  <span className="font-bold">$520</span>

                  <span>
                    Checkout
                    <i className="mx-2 icon arrow right"></i>
                  </span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </BaseLayout.Container>
    </BaseLayout>
  );
};

const mapStateToProps = (state) => ({});

const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(Cart);
