"use client";
import { Post } from "@/types/post";
import { useEffect, useState } from "react";

export default function Old() {
  const [post, setPost] = useState<Post[]>([]);

  useEffect(() => {
    fetch("http://localhost:8080/posts")
      .then((res) => res.json())
      .then((data) => setPost(data))
      .catch((error) => console.error(error));
  });

  if (!post.length) return <p>Loading .....</p>;

  return (
    <ul>
      {post.map((p) => (
        <li key={p.id}>{p.title}</li>
      ))}
    </ul>
  );
}
