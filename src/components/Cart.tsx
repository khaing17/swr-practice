"use client";
import { useCart, useUser } from "@/services/queries";

const Cart = () => {
  const userQuery = useUser();
  const cartQuery = useCart();
  return (
    <div>
      <p>
        User Name: {''} {userQuery.isLoading? "Loading" : userQuery.data?.userName}
      </p>
      <p>
        Total Cost : {''} {cartQuery.isLoading ? "Loading" : cartQuery.data?.totalCost}
      </p>
    </div>
  )
};

export default Cart;
