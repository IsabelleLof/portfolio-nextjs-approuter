"use client";

//import Link from "next/link";
import Card from "./Card";
//import cat from "@/app/assets/cat.jpg";
//import fake_store from "@/app/assets/fake_store.jpeg";
//import youtube_clone from "@/app/assets/youtube_clone.jpg";
//import flow_lobby from "@/app/assets/flow_lo

function CardSection({}) {
  return (
    <div className="max-w-screen-xl grid sm:grid-cols-2 lg:grid-cols-3 items-center gap-16 mt-4">
      <Card
        title="Flow Lobby"
        imgSrc={"/flow_lobby.jpg"}
        href={"https://www.flowlobby.app/"}
        projectVercel={"https://component-library-isabelle.vercel.app/"}
      >
        Worked as a Fullstack developer/Frontend dev, helping with livestreaming
        of videos in LivePeer and components structuring.
      </Card>
      <Card
        title="Fake-store"
        imgSrc={"/fake_store.jpg"}
        href={"https://github.com/IsabelleLof/fake-store"}
        projectLank={"https://fake-store-red-eight.vercel.app/products"}
      >
        Frontend in ReactJS, using fake store API, React structure with React
        routes
      </Card>

      <Card
        title="Youtube Clone in ReactJS and Mui design"
        imgSrc={"/youtube_clone.jpg"}
        href={"https://github.com/IsabelleLof/project-youtube-clone"}
        projectLank={"https://project-youtube-clone-vert.vercel.app/"}
      >
        <p>
          This is my modified version of a youtube clone app. In this project i
          have learned to build components and fetching data from an API, using
          states in useState and how to build a project from scratch in React!
        </p>
      </Card>
    </div>
  );
}

export default CardSection;
