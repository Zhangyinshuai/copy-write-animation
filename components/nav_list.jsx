import Right_arrow_icon from "./elements/right_arrow_icon";
import Link from "next/link";

const list = [
  {
    href: "./ParallaxScrolling/fixBackground/note",
    demo_href: "./ParallaxScrolling/fixBackground/example",
    video: "/fix-bg.mp4",
    title: "固定背景",
    sub_title: "固定背景，用途广泛，需要设计稿整个都有底色，不然会变成透明色",
    author: "孤灯侠影",
  },
  {
    href: "./ParallaxScrolling/fixBackground/note",
    demo_href: "./ParallaxScrolling/fixBackground/example",
    video: "/fix-bg.mp4",
    title: "固定背景",
    sub_title: "固定背景，用途广泛，需要设计稿整个都有底色，不然会变成透明色",
    author: "孤灯侠影",
  },
  {
    href: "./ParallaxScrolling/fixBackground/note",
    demo_href: "./ParallaxScrolling/fixBackground/example",
    video: "/fix-bg.mp4",
    title: "固定背景",
    sub_title: "固定背景，用途广泛，需要设计稿整个都有底色，不然会变成透明色",
    author: "孤灯侠影",
  },
  {
    href: "./ParallaxScrolling/fixBackground/note",
    demo_href: "./ParallaxScrolling/fixBackground/example",
    video: "/fix-bg.mp4",
    title: "固定背景",
    sub_title: "固定背景，用途广泛，需要设计稿整个都有底色，不然会变成透明色",
    author: "孤灯侠影",
  },
];
const Item = ({ preview }) => (
  <Link href={preview.href}>
    <a className="shadow-xl w-full h-full flex flex-col rounded-lg cursor-pointer hover:shadow-2xl duration-700">
      <video
        src={preview.video}
        autoPlay
        loop
        muted
        className="rounded-tl-lg rounded-tr-lg"
      />
      <div className="p-4">
        <p className="text-xl font-bold">{preview.title}</p>
        <p className="text-sm text-gray-400">{preview.sub_title}</p>
        <div className="flex items-center mt-4 justify-between">
          <p className="text-sm text-gray-400">by {preview.author}</p>
          <Right_arrow_icon demoLink={preview.demo_href} />
        </div>
      </div>
    </a>
  </Link>
);
const nav_list = () => {
  return (
    <div className="px-4">
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4">
        {list.map((nav, index) => (
          <Item preview={nav} key={nav.author + index} />
        ))}
      </div>
    </div>
  );
};

export default nav_list;
