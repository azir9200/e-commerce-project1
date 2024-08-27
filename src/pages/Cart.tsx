/* eslint-disable @typescript-eslint/no-explicit-any */
// import { useAppSelector } from "../redux/hooks";
import CartDetails from "../components/ShareComponents/CartDetails";
import OrderSummary from "../components/ShareComponents/OrderSummary";
import { useAppSelector } from "../redux/hooks";

const Cart = () => {
  // const products = getAllProducts();
  // console.log("products azir =>", products);
  const products = useAppSelector((store) => store.cart.products);
  return (
    <div className="container mt-10 mx-auto">
      <div className="flex lg:flex-row flex-col-reverse justify-center lg:space-x-40 ">
        <div className="space-y-5 lg:mt-0 mt-5">
          {products.length ? (
            products.map((product: any) => (
              <CartDetails key={product.id} product={product} />
            ))
          ) : (
            <p className="text-2xl text-red-500"> not product found</p>
          )}
        </div>
        <OrderSummary />
      </div>
    </div>
  );
};

export default Cart;
