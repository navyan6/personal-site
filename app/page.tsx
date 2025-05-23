import Image from "next/image";

export default function Home() {
  return (
    <div className="text-center relative min-h-screen flex flex-col justify-between">
      <div>
        <h1 className="text-6xl font-extrabold text-white mt-8">navya nori</h1>
        <p className="text-xl text-white mt-4">
          atlanta // georgia tech <br />
          i'm a cs student at georgia tech interested in machine learning, sustainable AI, reading, & running. <br />
          come along with me as i learn about the world and write about the anthropocene!
        </p>
      </div>

      {/* Alan Turing Quote */}
      <div className="text-lg text-gray-300 mt-6 animate-fill-text">
        "those who can imagine anything can create the impossible" - alan turing
      </div>
    </div>
  );
}
