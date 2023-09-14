import { Topic } from "@/app/layout";
import { ReactElement, JSXElementConstructor, ReactNode, ReactPortal, PromiseLikeOfReactNode } from "react";

export default async function Read(props: {
  params: {
    id:
      | string
      | number
      | boolean
      | ReactElement<any, string | JSXElementConstructor<any>>
      | Iterable<ReactNode>
      | ReactPortal
      | PromiseLikeOfReactNode
      | null
      | undefined;
  };
}) {
  const res = await fetch(`http://localhost:9999/topic/${props.params.id}`);
  const topics: Topic = await res.json();

  return (
    <>
      <div className="">
        <h2>Read</h2>
        <h3>{props.params.id}</h3>
        <h4>{topics.title ?? "없음"}</h4>
        <h4>{topics.body ?? "없음"}</h4>
      </div>
    </>
  );
}
