import Image from "next/image";

export default function Home() {
  return (
    <div className="text-center relative min-h-screen flex flex-col justify-between">
      <div>
        <h1 className="text-6xl font-extrabold text-white mt-8">Navya Nori</h1>
        <p className="text-xl text-white mt-4">
          Atlanta // Georgia Tech <br />
          I'm a CS student at Georgia Tech, broadly interested in machine learning, interpretable & safe AI, and AI for molecular discovery. <br />
          <span className="text-lg text-gray-300 animate-fill-text">
            "Those who can imagine anything can create the impossible." - Alan Turing
          </span>
        </p>
      </div>
    </div>
  );
}
