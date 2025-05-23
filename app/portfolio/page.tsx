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
          <div className="relative w-80 h-96 transform-style-preserve-3d group-hover:rotate-y-180 transition-transform duration-500">
            {/* Front Face */}
            <div className="absolute w-full h-full bg-white text-black flex flex-col items-center justify-start backface-hidden p-4 shadow-lg rounded">
              <h3 className="text-xl font-bold mb-4">ML-Based Virtual Screening for Biodegradable Polyesters</h3>
              <img src="/project1.jpg" alt="Project 1" className="w-full h-64 object-cover rounded" />
            </div>
            {/* Back Face */}
            <div className="absolute w-full h-full bg-white text-black flex flex-col items-start justify-center rotate-y-180 backface-hidden p-4 shadow-lg rounded">
              <p className="text-sm">
                - Developed a machine learning model to screen AI-generated polymers for biodegradable polyesters. <br />
                - Accepted for the Symposium on Democratizing AI in Materials Science: A Pathway to Broaden the Impact of Materials Research on Dec 3, 2024, at the 2024 Materials Research Society (Fall Meeting) in Boston, MA. <br />
                - Top 10% out of 300 projects at the Georgia Science and Engineering Fair. <br />
                - Top 10 out of 100 projects at the Georgia Junior Science and Humanities Symposium. <br />
                <a href="10.4236/msce.2024.128001" className="text-blue-400 underline">Read Paper</a>
              </p>
            </div>
          </div>
        </div>

        {/* Card 2 */}
        <div className="group perspective">
          <div className="relative w-80 h-96 transform-style-preserve-3d group-hover:rotate-y-180 transition-transform duration-500">
            {/* Front Face */}
            <div className="absolute w-full h-full bg-white text-black flex flex-col items-center justify-start backface-hidden p-4 shadow-lg rounded">
              <h3 className="text-xl font-bold mb-4">AI-based System to Predict High-Risk Pregnancies</h3>
              <img src="/project2.jpg" alt="Project 2" className="w-full h-64 object-cover rounded" />
            </div>
            {/* Back Face */}
            <div className="absolute w-full h-full bg-white text-black flex flex-col items-start justify-center rotate-y-180 backface-hidden p-4 shadow-lg rounded">
              <p className="text-sm">
                - Investigated which factors contribute to a high-risk pregnancy. <br />
                - Built a machine learning model to calculate a patient’s risk score based on demographic, clinical, and lab information. <br />
                - Compared several different methods, including linear regression, tree-based models, and neural networks, to see which produced the most interpretable and accurate results. <br />
                - Presented at the 2023 Emory Southeastern Pediatric Research Conference. <br />
                <a href="https://drive.google.com/file/d/1fiTjIG2zItXHmOg3MzMWM8jyIt9VGoLl/view?usp=sharing" className="text-blue-400 underline">Read Paper</a>
              </p>
            </div>
          </div>
        </div>

        {/* Card 3 */}
        <div className="group perspective">
          <div className="relative w-80 h-96 transform-style-preserve-3d group-hover:rotate-y-180 transition-transform duration-500">
            {/* Front Face */}
            <div className="absolute w-full h-full bg-white text-black flex flex-col items-center justify-start backface-hidden p-4 shadow-lg rounded">
              <h3 className="text-xl font-bold mb-4">Sustainable AI for Energy Optimization</h3>
              <img src="/project3.jpg" alt="Project 3" className="w-full h-64 object-cover rounded" />
            </div>
            {/* Back Face */}
            <div className="absolute w-full h-full bg-white text-black flex flex-col items-start justify-center rotate-y-180 backface-hidden p-4 shadow-lg rounded">
              <p className="text-sm">
                - Designed an AI-powered system to optimize energy consumption in smart homes. <br />
                - Reduced energy usage by 20% through predictive modeling and real-time adjustments. <br />
                - Presented findings at the 2024 IEEE International Conference on Sustainable Computing. <br />
                <a href="https://example.com" className="text-blue-400 underline">Read Paper</a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}