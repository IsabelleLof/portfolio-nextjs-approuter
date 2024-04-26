"use client";

import Card from "./Card";
import ocean_game_sunset from "@/public/assets/ocean_game_sunset.png";
import component_library_webdesign from "@/public/assets/component_library_webdesign.jpg";
import bank_app_express_nodeJS from "@/public/assets/bank_app_express_nodeJS.jpg";

function CardSection() {
  return (
    <div className="max-w-screen-xl grid sm:grid-cols-2 lg:grid-cols-3 items-center gap-16 mt-4">
      <Card
        imgSrc={ocean_game_sunset}
        //href={"https://github.com/IsabelleLof/ocean-game"}
        href={"https://ocean-game-mocha.vercel.app/"}
        title="Ocean Game"
        alt="Ocean Game Sunset"
      >
        <p>
          This is my first attempt to change or modify a three.js - project! My
          work-in-progress features: Get a day and night mode, with a sun that
          goes... "
        </p>
      </Card>
      <Card
        title="Component Library"
        imgSrc={component_library_webdesign}
        //projectLink={"https://github.com/IsabelleLof/component-library-isabelle"}
        href={"https://component-library-isabelle.vercel.app/"}
      >
        In the beginning of building a componet library, using props, responsive
        design in tailwind and React-router for navigating.
      </Card>
      <Card
        title="Bank App"
        imgSrc={bank_app_express_nodeJS}
        href={"https://github.com/IsabelleLof/bank_aws"}
        //href={"https://component-library-isabelle.vercel.app/"}
      >
        A project using NextJS as frontend and express and NodeJS as a server,
        deployed using an Amazon AWS EC2 instance.
      </Card>
    </div>
  );
}

export default CardSection;
