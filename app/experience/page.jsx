"use client"

//import ExperienceSection from "../CardSection";
import ExperienceSection from '../ExperienceSection';

export default function Projects() {
  return (
    <main className="flex justify-center min-h-screen px-16 items-center">
      <div className="flex-col">
        <h1 className="text-xl font-normal mt-4">Recent projects</h1>
        <ExperienceSection />
      </div>
    </main>
  );
}