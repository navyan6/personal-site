import Image from "next/image";

export default function Home() {
  return (
    <div className="text-center relative">
      <h1 className="text-8xl font-extrabold text-white mt-8">navya nori</h1>
      <p className="text-xl text-white mt-4">
        atlanta // georgia tech <br />
        i like to think about, and write about, specific problems. come along with
        me as i learn about the world and write about the anthropocene!
      </p>
      <div className="mt-16">
        <svg
          className="w-full max-w-4xl mx-auto animate-draw"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 800 200"
          fill="none"
          stroke="white"
          strokeWidth="2"
        >
          {/* Replace this path with an actual Atlanta skyline SVG path */}
          <path
            d="M10 150 L50 50 L90 150 L130 100 L170 150 L210 50 L250 150"
            strokeDasharray="1000"
            strokeDashoffset="1000"
          />
        </svg>
      </div>

      {/* Yellow Jackets Animation */}
      <div className="absolute bottom-0 left-0 w-full h-40 overflow-hidden">
        <svg className="absolute w-full h-full">
          {/* Path 1 */}
          <path
            d="M50,150 C150,50 300,200 400,100"
            stroke="black"
            strokeWidth="2"
            strokeDasharray="5,5"
            fill="none"
          />
          <image
            href="/yellow-jacket.svg"
            width="30"
            height="30"
            className="animate-fly1"
          />
          {/* Path 2 */}
          <path
            d="M100,180 C200,80 350,250 500,150"
            stroke="black"
            strokeWidth="2"
            strokeDasharray="5,5"
            fill="none"
          />
          <image
            href="/yellow-jacket.svg"
            width="30"
            height="30"
            className="animate-fly2"
          />
          {/* Path 3 */}
          <path
            d="M150,200 C250,100 400,300 600,200"
            stroke="black"
            strokeWidth="2"
            strokeDasharray="5,5"
            fill="none"
          />
          <image
            href="/yellow-jacket.svg"
            width="30"
            height="30"
            className="animate-fly3"
          />
        </svg>
      </div>
    </div>
  );
}
