import Link from "next/link";

const right_arrow_icon = ({demoLink="#"}) => {
  return (
    <Link href={demoLink}>
      <svg
        className="text-gray-400 hover:text-black duration-500"
        fill="none"
        height="20"
        shapeRendering="geometricPrecision"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.5"
        viewBox="0 0 24 24"
        width="20"
      >
        <path d="M18 13v6a2 2 0 01-2 2H5a2 2 0 01-2-2V8a2 2 0 012-2h6"></path>
        <path d="M15 3h6v6"></path>
        <path d="M10 14L21 3"></path>
      </svg>
    </Link>
  );
};

export default right_arrow_icon;
