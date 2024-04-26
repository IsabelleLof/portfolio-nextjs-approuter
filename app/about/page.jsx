"use client";

export default function About() {
  return (
    <main className="min-h-[790px] max-w-[2000px] flex flex-col items-center justify-center px-36">
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
        <p className="font-thin text-3xl mb-16 mt-4">
          My recently position was at a start-up company Flow Lobby where i
          worked on buildning react components and, a livestreaming feature with
          LivePeer and a chatfeature where we used getStream.io. I learned a lot
          from my SEO Sebastian Kirch and enjoyed the positivity he wanted to
          show the employers! I also had the oppertunity to do an internship at
          Gaddr, also a start-up company here in Stockholm. I did research and
          planning how to build a phone exchange for their office.
        </p>
        <p className="font-thin text-3xl mb-16 mt-2">
          I am <strong>eager</strong> to learn and show my skills for a new position!
        </p>
      </div>
    </main>
  );
}
