"use client";

import { useRouter } from "next/navigation";
import { FormEvent } from "react";

export default function Create() {
  const router = useRouter();

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        const titleInput = e.currentTarget.elements.namedItem("title") as HTMLInputElement;
        const bodyInput = e.currentTarget.elements.namedItem("body") as HTMLTextAreaElement;

        const title = titleInput.value;
        const body = bodyInput.value;
        console.log(title);
        console.log(body);

        return;
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
      }}
    >
      <p>
        <input type="text" name="title" id="title" placeholder="title" />
      </p>
      <p>
        <textarea name="body" id="body" placeholder="body" cols={30} rows={5}></textarea>
      </p>
      <p>
        <input type="submit" value="create" />
      </p>
    </form>
  );
}
