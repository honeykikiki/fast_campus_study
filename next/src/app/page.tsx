import Image from "next/image";

export default function Home() {
  return (
    <div>
      <h2>WellCome</h2>
      <p>Hello, WEB</p>
      <div className="">
        <Image src="/img.png" width={100} height={100} alt={"대표 이미지"}></Image>
      </div>
    </div>
  );
}
