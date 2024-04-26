import Image from "next/image";
//mport IMG from "./assets/IMG.jpeg";
//import IMG_0996 from "./assets/IMG_0996.jpeg";

//import { Avatar, AvatarGroup, AvatarIcon } from "@nextui-org/react";

import IMG from "@/public/assets/IMG.jpeg";
import Link from "next/link";

export default function Home() {
  return (
    <main className=" text-white flex flex-col items-center justify-center px-36 min-h-screen">
      <div className="app">
        {[...Array(20)].map((_, index) => (
          <span key={index} className={`span-${index}`} />
        ))}
      </div>
      <div className="flex h-[400px] w-auto md:space-x-16 mb-16">
        <div className="flex h-full w-fit items-center justify-center">
          <Image
            className="hidden md:flex opacity-40 contrast-200 rounded-3xl via-white mix-blend-hard-light"
            src={IMG}
            alt="Description of your image"
            // Ange höjden på din bild
            // Ange bredden på din bild
          ></Image>
        </div>

        {/* <img
            src="./assets/IMG.jpg" // Ändra sökvägen till din bild
            alt="Description of your image"
            width={300} // Ange bredden på din bild
            height={200} // Ange höjden på din bild
          /> */}
        <div className="flex flex-col justify-center text-6xl w-fit">
          <h1 className="text-6xl font-normal mb-4">Welcome.</h1>
          <p className="font-thin text-5xl">
            My name is{""} Isabelle, I'm a Fullstack developer.
          </p>
        </div>
      </div>
      <border className="mb-16">
        __________________________________________________________________________
      </border>
      <div className="flex flex-col justify-center text-6xl w-fit">
        <h2 className="text-6xl font-normal mb-4 mt-4">Get to know me</h2>
        <p className="font-thin text-3xl ">
          Hi, i am a passionate <strong>Fullstack Developer</strong> from
          Stockholm, Sweden. I am studying Fullstack development at Chas Academy
          Vocational Education with a focus on Frontend. I have also completed a
          bootcamp in Web Development, Mimo Bootcamp. I have mostly done
          projects in React.js, Next.js. In backend I have worked with
          Express.js (Node) and MySQL, and I have combined it with frontend for
          fullstack projects. Regarding fullstack projects, I have deployed them
          using Amazon AWS EC2 instances, PM2, and Docker.
        </p>
        <p className=" font-thin text-3xl mb-12 mt-4">
          My recently position was at a start-up company Flow Lobby where i
          worked on buildning react components and, a livestreaming feature with
          LivePeer and a chatfeature where we used getStream.io. I learned a lot
          from my SEO Sebastian Kirch and enjoyed the positivity he wanted to
          show the employers!
        </p>
        <p className="font-thin text-3xl mb-14 mt-4">
          I also had the oppertunity to do an internship at Gaddr, also a
          start-up company here in Stockholm. I did research and planning how to
          build a phone exchange for their office.
        </p>
        <p className="font-thin text-3xl mb-16 mt-2">
          I am <strong>eager</strong> to learn and show my skills for a new
          position!
        </p>
      </div>
      <div className="flex mb-8 gap-4">
        <Link href={"./experience"}>
          <button className="bg-slate-900 hover:bg-slate-700 focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50 text-white font-semibold h-12 px-6 rounded-lg w-full flex items-center justify-center sm:w-auto">
            Experience
          </button>
        </Link>
        <Link href={"./upcoming"}>
          <button className="bg-slate-900 hover:bg-slate-700 focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50 text-white font-semibold h-12 px-6 rounded-lg w-full flex items-center justify-center sm:w-auto">
            Projects
          </button>
        </Link>
      </div>
    </main>
  );
}
