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
            <div className="absolute w-full h-full bg-gray-800 text-white flex flex-col items-center justify-start backface-hidden p-4">
              <h3 className="text-xl font-bold mb-4">ML-Based Virtual Screening for Biodegradable Polyesters</h3>
              <img src="/project1.jpg" alt="Project 1" className="w-full h-64 object-cover rounded" />
            </div>
            {/* Back Face */}
            <div className="absolute w-full h-full bg-gray-900 text-white flex flex-col items-center justify-center rotate-y-180 backface-hidden p-4">
              <p className="text-sm">
                - Developed a machine learning model to screen AI-generated polymers for biodegradable polyesters
                - Accepted for the Symposium on Democratizing AI in Materials Science: A Pathway to Broaden the Impact of Materials Research on Dec 3, 2024, at the 2024 Materials Research Society (Fall Meeting) in Boston, MA 
                - Top 10% out of 300 projects at the Georgia Science and Engineering Fair
                - Top 10 out of 100 projects at the Georgia Junior Science and Humanities Symposium
                <a href="10.4236/msce.2024.128001" className="text-blue-400 underline">Read Paper</a>
              </p>
            </div>
          </div>
        </div>

        {/* Card 2 */}
        <div className="group perspective">
          <div className="relative w-80 h-96 transform-style-preserve-3d group-hover:rotate-y-180 transition-transform duration-500">
            {/* Front Face */}
            <div className="absolute w-full h-full bg-gray-800 text-white flex flex-col items-center justify-start backface-hidden p-4">
              <h3 className="text-xl font-bold mb-4">AI-based System to Predict High-Risk Pregnancies</h3>
              <img src="/project2.jpg" alt="Project 2" className="w-full h-64 object-cover rounded" />
            </div>
            {/* Back Face */}
            <div className="absolute w-full h-full bg-gray-900 text-white flex flex-col items-center justify-center rotate-y-180 backface-hidden p-4">
              <p className="text-sm">
                - Investigated which factors contribute to a high risk pregnancy
                - Built a machine learning model to calculate a patient’s risk score based on demographic, clinical, and lab information
                - Compared several different methods, including linear regression, tree-based models, and neural networks, to see which produced the most interpretable and accurate results
                - Presented at the 2023 Emory Southeastern Pediatric Research Conference
                <a href="https://drive.google.com/file/d/1fiTjIG2zItXHmOg3MzMWM8jyIt9VGoLl/view?usp=sharing" className="text-blue-400 underline">Read Paper</a>
              </p>
            </div>
          </div>
        </div>

        {/* Card 3 */}
        <div className="group perspective">
          <div className="relative w-80 h-96 transform-style-preserve-3d group-hover:rotate-y-180 transition-transform duration-500">
            {/* Front Face */}
            <div className="absolute w-full h-full bg-gray-800 text-white flex flex-col items-center justify-start backface-hidden p-4">
              <h3 className="text-xl font-bold mb-4">MediCast: Model & App to Predict Hospital Readmissions</h3>
              <img src="/project3.jpg" alt="Project 3" className="w-full h-64 object-cover rounded" />
            </div>
            {/* Back Face */}
            <div className="absolute w-full h-full bg-gray-900 text-white flex flex-col items-center justify-center rotate-y-180 backface-hidden p-4">
              <p className="text-sm">
                - This project focused on predicting hospital readmission risk using machine learning.
                - Georgia Science and Engineering Fair Pinnacle Award winner 1st place in State out of 200 projects
                - Congressional App Challenge 2nd place winner in Georgia’s 6th congressional district, recognized by Congresswoman Lucy McBath
                - Georgia State Technology Competition (GASTC) 1st place in the state in the Mobile Applications category
                <a href="https://drive.google.com/file/d/1ye8ETj37gKOBUYQ-E16Ril4G1f1vobK8/view?usp=sharing" className="text-blue-400 underline">Slides</a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}