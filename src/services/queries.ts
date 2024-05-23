"use client"
import { Cart } from "@/types/cart";
import { Post } from "@/types/post";
import { Product } from "@/types/product";
import { User } from "@/types/user";
import useSWR from "swr";

export function useUser(){
    return useSWR<User>("/user")
}

export function  useCart(){
    const {data} = useUser()
    return useSWR<Cart>( data? "/cart": null)
}

export function usePost(){
    return useSWR<Post[]>("/posts")
}

export function useProduct(){
    return useSWR<Product[]>("/products")
}