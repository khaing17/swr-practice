"use client"
import useSWRMutation from "swr/mutation";
import { useProduct } from "./queries";
import { createProduct } from "./api";

export function useCreateProduct() {
  const { mutate } = useProduct();

  return useSWRMutation("/products", createProduct, {
    onError() {
      console.log("error");
    },
    onSuccess() {
      mutate();
    },
  });
}
