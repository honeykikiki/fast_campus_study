"use client";
import { useEffect, useState } from "react";
import { useParams, useRouter } from "next/navigation";
import { Topic } from "@/app/layout";

export default function Update() {
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");
  const router = useRouter();
  const params = useParams();
  const id = params.id;

  useEffect(() => {
    fetch(`http://localhost:9999/topic/${id}`)
      .then((res) => res.json())
      .then((result) => {
        setTitle(result.title);
        setBody(result.body);
      });
  }, [id]);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const options = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ title, body }),
    };

    fetch(`http://localhost:9999/topic`, options)
      .then((res) => res.json())
      .then((result) => {
        location.href = `topic/${result.id}`;
        router.refresh();
        router.push(`/read/${result.id}`);
      });
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <p>
          <input type="text" name="title" id="title" placeholder="title" value={title ?? ""} onChange={(e) => setTitle(e.target.value)} />
        </p>
        <p>
          <textarea
            name="body"
            id="body"
            placeholder="body"
            cols={30}
            rows={5}
            value={body ?? ""}
            onChange={(e) => setBody(e.target.value)}
          ></textarea>
        </p>
        <p>
          <input type="submit" value="update" />
        </p>
      </form>
    </>
  );
}
