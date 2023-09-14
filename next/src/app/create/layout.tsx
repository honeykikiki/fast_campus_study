import { ReactElement, JSXElementConstructor, ReactNode, ReactPortal, PromiseLikeOfReactNode } from "react";

export default function Layout(props: { children: ReactElement<any, string | JSXElementConstructor<any>> }) {
  return (
    <div>
      <h2>Create</h2>
      {/* <div className=""></div> */}
      {props.children}
    </div>
  );
}
