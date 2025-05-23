export default function Portfolio() {
  return (
    <div className="text-center">
      <h1 className="text-4xl font-bold text-white">project archive</h1>
      <p className="text-lg text-white mt-4">
        currently interested in machine learning for materials science and sustainability. 
        <br />
        <br />
        previously worked on AI-based solutions for various diseases in an effort to make healthcare more equitable. 
        <br />
        <br />
        check out my work below!
      </p>

      {/* Project Cards */}
      <div className="grid grid-cols-3 gap-8 mt-8 justify-center">
        {/* Card 1 */}
        <div className="group perspective">
          <div className="relative w-64 h-64 transform-style-preserve-3d group-hover:rotate-y-180 transition-transform duration-500">
            {/* Front Face */}
            <div className="absolute w-full h-full bg-gray-800 text-white flex flex-col items-center justify-center backface-hidden">
              <img src="/project1.jpeg" alt="Project 1" className="w-full h-40 object-cover" />
              <h3 className="text-lg font-bold mt-4">ML-based Virtual Screening for Biodegradable Polyesters</h3>
            </div>
            {/* Back Face */}
            <div className="absolute w-full h-full bg-gray-900 text-white flex flex-col items-center justify-center rotate-y-180 backface-hidden">
              <p className="text-sm px-4">
              - Developed a machine learning model to screen AI-generated polymers for biodegradable polyesters <a href="10.4236/msce.2024.128001" className="text-blue-400 underline">Read Paper</a>
              </p>
            </div>
          </div>
        </div>

        {/* Repeat for other cards */}
        {/* Card 2 */}
        <div className="group perspective">
          <div className="relative w-64 h-64 transform-style-preserve-3d group-hover:rotate-y-180 transition-transform duration-500">
            <div className="absolute w-full h-full bg-gray-800 text-white flex flex-col items-center justify-center backface-hidden">
              <img src="/project2.jpg" alt="Project 2" className="w-full h-40 object-cover" />
              <h3 className="text-lg font-bold mt-4">AI-based System to Predict High Risk Pregnancies</h3>
            </div>
            <div className="absolute w-full h-full bg-gray-900 text-white flex flex-col items-center justify-center rotate-y-180 backface-hidden">
              <p className="text-sm px-4">
              - Investigated which factors contribute to a high risk pregnancy.Built a machine learning model to calculate a patient’s risk score based on demographic, clinical, and lab information. <a href="https://drive.google.com/file/d/1fiTjIG2zItXHmOg3MzMWM8jyIt9VGoLl/view?usp=sharing" className="text-blue-400 underline">Read Paper</a>
              </p>
            </div>
          </div>
        </div>

        {/* Add more cards as needed */}
      </div>
    </div>
  );
}