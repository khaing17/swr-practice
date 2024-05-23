"use client";
import { usePost } from "@/services/queries";

export default function Old() {
  const {data,isLoading} = usePost();

  if (isLoading) return <div>Loading...</div>;
  return (
    <ul>
      {data?.map((d : any) => (
        <li key={d.id}>{d.title}</li>
      ))}
    </ul>
  );
}
