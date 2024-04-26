import Image from "next/image";
// Import the desired icon
import { CiGlobe } from "react-icons/ci";
//import urls from "./urls";

function Card({ href, imgSrc, children, title }) {
  //const projectLink = "https://www.example.com";

  // const handleClick = () => {
  //   window.open(projectLink);
  // };

  // const handleClickHref = () => {
  //   window.open(href);
  // };

  return (
    <div className="card rounded-lg w-[360px] mb-10 flex-shrink-0 shadow-2xl overflow-hidden">
      {" "}
      <h2 className="text-2l font-normal mb-4">{title}</h2>
      {/* Change bg-blue-200 to the desired background color class */}
      <div className="h-60 w-full">
        <Image
          className="h-full w-full object-cover"
          src={imgSrc}
          // alt={imgAlt}
          width={450}
          height={500}
          //placeholder="blur"
          //imgLink={imgLink}
          //onClick={handleClickHref}
        />
      </div>
      <div className="h-28 p-8 pt-4 text-sm"> {children} </div>
      <div className=" px-8 pb-8 pt-4 flex justify-between text-sm">
        {" "}
          <a href={href} className="hover:text-black">
            <CiGlobe size={25} />
          </a>
      </div>
    </div>
  );
}

export default Card;
