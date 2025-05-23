import Image from "next/image";

export default function Home() {
  return (
    <div className="text-center relative min-h-screen flex flex-col justify-between">
      <div>
        <h1 className="text-6xl font-extrabold text-white mt-8">navya nori</h1>
        <p className="text-xl text-white mt-4">
          atlanta // georgia tech <br />
          i like to think about, and write about, specific problems. come along with
          me as i learn about the world and write about the anthropocene!
        </p>
      </div>

      {/* Alan Turing Quote */}
      <div className="text-white text-2xl font-semibold mb-8">
        <p className="overflow-hidden whitespace-nowrap w-full inline-block">
          <span className="inline-block animate-fill-text-slow">
            "those who can imagine anything, can create the impossible"
          </span>
        </p>
        <p className="text-sm text-gray-400 mt-2">- alan turing</p>
      </div>
    </div>
  );
}
