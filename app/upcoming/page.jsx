"use client";

import UpcomingProjects from "../UpcomingProjects";

export default function Upcoming() {
  return (
    <main className=" text-white flex justify-center min-h-screen items-center">
      <div className="flex-col">
        <h1 className="text-xl font-normal mt-4">Recent projects</h1>
        <UpcomingProjects />
      </div>
    </main>
  );
}
