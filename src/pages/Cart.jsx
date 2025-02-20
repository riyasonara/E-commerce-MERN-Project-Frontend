import { useContext, useEffect, useState } from "react";
import { ShopContext } from "../context/ShopContext";
import Title from "../components/Title";
import { assets } from "../assets/frontend_assets/assets";
import CartTotal from "../components/CartTotal";

const Cart = () => {
  const { products, currency, cartItems, updateQuantity ,navigate} =
    useContext(ShopContext);

  const [cartData, setCartData] = useState([]);

  useEffect(() => {
    const tempData = {};

    for (const productId in cartItems) {
      const sizes = cartItems[productId];

      for (const size in sizes) {
        if (sizes[size]) {
          if (!tempData[productId]) {
            tempData[productId] = { _id: productId, sizes: [] };
          }
          tempData[productId].sizes.push({
            size,
            quantity: sizes[size],
          });
        }
      }
    }

    setCartData(Object.values(tempData));
  }, [cartItems]);

  return (
    <div className="border-t pt-14 ">
      <div className="text-2xl mb-3">
        <Title text1={"YOUR"} text2={"CART"} />
      </div>
      <div>
        {cartData.map((item, index) => {
          const productData = products.find(
            (product) => product._id === item._id
          );

          return (
            <div
              key={index}
              className="py-4 border-t border-b text-gray-700 grid grid-cols-[4fr_0.5fr] sm:grid-cols-[4fr_2fr] items-center gap-4"
            >
              <div className="flex items-start gap-6">
                <img
                  className="w-16 sm:w-20"
                  src={productData.image[0]}
                  alt="product"
                />
                <div>
                  <p className="text-xs sm:text-lg font-medium">
                    {productData.name}
                  </p>
                  <p className="text-sm text-gray-600 mt-1">
                    {currency}
                    {productData.price}
                  </p>

                  {/* Display all sizes for this product */}
                  <div className="mt-2">
                    {item.sizes.map((sizeItem, idx) => (
                      <div key={idx} className="flex items-center gap-3 mt-1">
                        <p className="px-2 sm:px-3 sm:py-1 border bg-slate-50">
                          {sizeItem.size}
                        </p>
                        <input
                          onChange={(e) =>
                            e.target.value === "" || e.target.value === "0"
                              ? null
                              : updateQuantity(
                                  item._id,
                                  sizeItem.size,
                                  Number(e.target.value)
                                )
                          }
                          type="number"
                          min={1}
                          className="border max-w-10 sm:max-w-20 px-1 sm:px-2 py-1"
                          defaultValue={sizeItem.quantity}
                        />
                        <img
                          onClick={() =>
                            updateQuantity(item._id, sizeItem.size, 0)
                          }
                          className="w-4 sm:w-5 cursor-pointer"
                          src={assets.bin_icon}
                          alt="Remove"
                        />
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
      <div className="flex justify-end my-20">
        <div className="w-full sm:w-[450px]">
          <CartTotal />
          <div className="w-full text-end">
            <button onClick={()=>navigate('/place-order')} className="bg-black text-white text-sm my-8 px-8 py-3">PROCEED TO CHECKOUT</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;
