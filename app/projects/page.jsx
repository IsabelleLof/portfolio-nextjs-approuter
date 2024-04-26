"use client"

import CardSection from "../CardSection";

export default function Projects() {
  return (
    <main className="flex justify-center">
      <div className="flex-col">
        <h1 className="text-xl font-normal mt-4">Recent projects</h1>
        <CardSection />
      </div>
    </main>
  );
}