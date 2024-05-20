"use client"
import { useCart } from "@/services/queries"

const Cart = () => {
    const cartQuery = useCart()
  return (
    <div>{cartQuery.data?.totalCost}</div>
  )
}

export default Cart