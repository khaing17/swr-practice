"use client"
import { Cart } from "@/types/cart";
import useSWR from "swr";

export function  useCart(){
    return useSWR<Cart>("/cart")
}