"use client";
import { useCreateProduct } from "@/services/mutations";
import { useProduct } from "@/services/queries";
import { useState } from "react";

const Product = () => {
  const { data } = useProduct();
  const { trigger, isMutating} = useCreateProduct()

  const [inputValue, setInputValue] = useState("");
  const handleUpdateInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value);
  };

  const handleCreatePost = async () => {
    trigger({title : inputValue} , {
      optimisticData : data && [
        ...data,{title : `${inputValue}`}
      ],
      rollbackOnError : true
    })
    setInputValue("")
  };

  return (
    <div>
      <ul>
        {data?.map((product) => (
          <li key={product.id}>{product.title}</li>
        ))}
      </ul>
      <input type="text" value={inputValue} onChange={handleUpdateInput} />
      <button onClick={handleCreatePost}>create</button>
    </div>
  );
};

export default Product;
