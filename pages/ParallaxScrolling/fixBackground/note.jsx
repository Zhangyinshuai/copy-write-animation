import Link from "next/link"
import Right_arrow_icon from "../../../components/elements/right_arrow_icon"
import { getPostData } from '../../../lib/posts'

const note = ({ postData }) => {
  return (
    <div className="mt-10 p-4 max-w-screen-xl mx-auto flex flex-col md:flex-row">
      <div className="flex-auto  md:pr-10 md:border-r border-gray-200">
        <Link href="/">
          <a className="block py-4">← Back to Templates</a>
        </Link>
        <div className="my-10 ">
          <h1 className="text-4xl font-bold my-10">有哪些网站用到过</h1>
          <div className="border-b border-gray-200 my-4 flex justify-between">
            <p>石头科技海外官网</p>
            <Link href="https://us.roborock.com/pages/roborock-s7-maxv">
              <a target="_blank" className="text-base pb-4 text-blue-800 inline-block">Roborock-s7-maxv</a>
            </Link>
          </div>
          <div className="border-b border-gray-200 my-4 flex justify-between">
            <p>追觅扫地机</p>
            <Link href="https://www.dreame.tech/home/product/product_h12.html?id=10">
              <a target="_blank" className="text-base pb-4 text-blue-800 inline-block">H12</a>
            </Link>
          </div>
          <div className="border-b border-gray-200 my-4 flex justify-between">
            <p>Youtube日本博主</p>
            <Link href="https://margelo.io/">
              <a target="_blank" className="text-base pb-4 text-blue-800 inline-block">软件公司官网margelo</a>
            </Link>
          </div>
        </div>
      </div>
      <div className="flex-auto w-full md:w-2/3 md:pl-10">
        <div className="shadow-2xl rounded-lg ">
          <video
            src="/fix-bg.mp4"
            autoPlay
            loop
            muted
            className="rounded-tl-lg rounded-tr-lg"
          />
          <div className="p-4">
            <Link href="/">
              <a className="rounded-lg bg-white flex items-center justify-center w-32 h-10 shadow-2xl">
                <Right_arrow_icon />
                <p className="px-2 ">View Demo</p>
              </a>
            </Link>
          </div>
        </div>
        <div className="my-10">
          <h1 className="text-4xl font-bold">分析笔记</h1>
          <article className="prose">
            <div dangerouslySetInnerHTML={{ __html: postData.contentHtml }} /> 
          </article>
        </div>
      </div>
    </div>
  )
}

export default note

export async function getStaticProps() {
  const postData = await getPostData("fixBackground")
  return {
    props: {
      postData
    }
  }
}