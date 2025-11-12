import Image from "next/image";

export default function MainMatch() {
  return (
    <>
      <div className="flex flex-col max-w-xl">
        <h1 className="text-2xl font-bold">El partido del día</h1>
        <Image
          width={1000}
          height={1000}
          src="https://media.cnn.com/api/v1/images/stellar/prod/gettyimages-2243440812.jpg?q=w_1110,c_fill"
          alt="Barcelona vs Real Madrid"
          className="w-150 h-80 object-cover rounded-lg"
        ></Image>
        <h2 className="text-xl font-bold">Barcelona vs Real Madrid</h2>
        <p className="text-md mt-2">
          Ad est commodo non ea dolor incididunt consequat eu elit quis velit
          aliquip. Commodo quis dolor ea qui sunt mollit exercitation est fugiat
          consequat ipsum occaecat. Commodo pariatur sit ad aute cupidatat et
          tempor ut ex. Non officia ullamco consectetur mollit consectetur
          ullamco magna nulla duis mollit qui culpa nulla. Eu sunt ad irure
          laboris labore ad ex nisi elit pariatur.
        </p>
      </div>
    </>
  );
}
