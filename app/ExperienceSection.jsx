"use client";
import Link from "next/link";

//import Image from "next/image";
//import { exampleWebsiteUrl } from "./urls"
import React, { useState } from "react";

import Card from "./Card";
import fake_store from "@/public/assets/fake_store.jpeg";
import youtube_clone from "@/public/assets/youtube_clone.jpg";
import flow_lobby from "@/public/assets/flow_lobby.jpg";
import gaddr from "@/public/assets/gaddr.jpg";

function ExperienceSection() {
  //have a toggle to the info text to the cards
//   const [showFullContent, setShowFullContent] = useState(false);

//   const toggleContent = () => {
//     setShowFullContent(!showFullContent);
//   };

  return (
    <div className="max-w-screen-xl grid sm:grid-cols-2 lg:grid-cols-3 items-center gap-16 mt-4">
      <Card
        title="Fullstack dev/Frontend at Flow Lobby"
        imgSrc={flow_lobby}
        href="https://www.flowlobby.app/"
        alt="Flow Lobby"
        className="hover:bg-blue-700"
        projectLink="https://www.flowlobby.app/"
      >
        Worked as a Fullstack developer/Frontend dev, helping with livestreaming
        of videos in LivePeer and components structuring.
      </Card>

      <Card
        title="Internship at Gaddr as a Fullstack/Frontend dev"
        imgSrc={gaddr}
        href={""}
        projectLink=""
      >
        {/* <p>
        {showFullContent ? (
          "I helped Gaddr to research and plan how to build a phone exchange to their office with a Raspberry Pi, to setup locally. Studied linux and SQL and how to build a database. Had meetings every week with a fantastic team and SEO Oscar-Francisco Andreasson Padilla. I also planned a Woman in Tech event with the other interns and HR staff."
        ) : (
          "I helped Gaddr to research and plan how to build a phone exchange to their office with a Raspberry Pi, to setup locally. Studied linux and SQL and how to build a database. Had meetings every week with a fantastic team and SEO Oscar-Francisco Andreasson Padilla."
        )}
        <button onClick={toggleContent}>
          {showFullContent ? 'Read Less' : 'Read More'}
        </button>
      </p> */}
        Helped Gaddr to research/plan how to build a phone exchange with a Raspberry Pi. Studied linux, SQL, databaser. Meetings
        every week with a fantastic team and SEO Oscar-Francisco Andreasson
        Padilla.
      </Card>
      <Card
        title="Youtube Clone in ReactJS Mui design"
        imgSrc={youtube_clone}
        href={"https://project-youtube-clone-vert.vercel.app"}
        //projectLink="https://project-youtube-clone-vert.vercel.app/"
      >
        <p>
          This is my modified version of a youtube clone app. In this project i
          have learned to build components and fetching data from an API, using
          states in useState and how to build a project from scratch in React!
        </p>
      </Card>
      <Card
        title="Fake-store"
        imgSrc={fake_store}
        //projectLink={"https://github.com/IsabelleLof/fake-store"}
        href="https://fake-store-red-eight.vercel.app/products"
      >
        Frontend in ReactJS, using fake store API, React structure with React
        routes
      </Card>
    </div>
  );
}

export default ExperienceSection;
