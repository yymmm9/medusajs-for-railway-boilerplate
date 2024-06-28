import { Metadata } from "next"

export const metadata: Metadata = {
  title: "Inspiration",
  description: "",
}

export const revalidate = 2592000 // 30 days;
export default async function Page() {
  // const { sortBy, page } = searchParams
  const imageArray = Array.from(
    { length: 9 },
    (_, i) => `/inspiration/${i + 1}.jpeg`
  )
  // http://localhost:8000/inspiration/1.jpeg

  function getRandomWidthClass(min: number, max: number): string {
    // 生成介于 min 和 max 之间的随机整数
    const randomWidth = Math.floor(Math.random() * (max - min + 1)) + min
    // 返回 CSS 类名字符串
    return randomWidth + ""
    // return ` w-[${randomWidth}%]`
  }

  return (
    <div className="flex flex-col gap-4 max-w-3xl mx-auto items-center">
      {imageArray.map((image, index) => (
        <img
          // className={"w-full "}
          style={{ width: getRandomWidthClass(70, 100) + "%" }}
          key={index}
          src={image}
        />
      ))}
    </div>
  )
}
