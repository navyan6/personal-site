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
      <div className="grid grid-cols-3 gap-8 mt-8 justify-center mx-auto max-w-5xl">
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
                <a href="https://www.scirp.org/journal/paperinformation?paperid=135410" className="text-blue-400 underline">Read Paper</a>
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
              <h3 className="text-xl font-bold mb-4">MediCast: Model & App to Predict and Prevent Hospital Readmissions</h3>
              <img src="/project3.jpg" alt="Project 3" className="w-full h-64 object-cover rounded" />
            </div>
            {/* Back Face */}
            <div className="absolute w-full h-full bg-white text-black flex flex-col items-start justify-center rotate-y-180 backface-hidden p-4 shadow-lg rounded">
              <p className="text-sm">
              - This project focused on predicting hospital readmission risk using machine learning. <br />

- Georgia Science and Engineering Fair Pinnacle Award winner 1st place in State out of 200 projects<br />

- Congressional App Challenge 2nd place winner in Georgia’s 6th congressional district, recognized by Congresswoman Lucy McBath<br />

- Georgia State Technology Competition (GASTC) 1st place in the state in the Mobile Applications category <br />


                <a href="https://drive.google.com/file/d/1ye8ETj37gKOBUYQ-E16Ril4G1f1vobK8/view?usp=sharing" className="text-blue-400 underline">View Slides</a>
              </p>
            </div>
          </div>
        </div>

        {/* Card 4 */}
        <div className="group perspective">
          <div className="relative w-80 h-96 transform-style-preserve-3d group-hover:rotate-y-180 transition-transform duration-500">
            {/* Front Face */}
            <div className="absolute w-full h-full bg-white text-black flex flex-col items-center justify-start backface-hidden p-4 shadow-lg rounded">
              <h3 className="text-xl font-bold mb-4">SupportED: Emotional and Physiological Analysis of Anorexia Warning Signs</h3>
              <img src="/project4.jpg" alt="Project 4" className="w-full h-64 object-cover rounded" />
            </div>
            {/* Back Face */}
            <div className="absolute w-full h-full bg-white text-black flex flex-col items-start justify-center rotate-y-180 backface-hidden p-4 shadow-lg rounded">
              <p className="text-sm">
              - This project focused on the two facets of Anorexia progression: mental and physical manifestations.<br />

- Given the high prevalence of this condition in adolescents and their social media presence, I conducted AI-based sentiment analysis on Instagram post captions to identify and quantify the relative importance of words and phrases indicative of Anorexia Nervosa<br />

- For physiological monitoring, I determined the carbohydrate starvation level at which the gut microbiome deteriorates <br />

- Presented at the 2023 Emory Southeastern Pediatric Research Conference <br />
                <a href="https://drive.google.com/file/d/129odrIA77rdhNqRDpQ-bPLHPxnA0rtD1/view?usp=sharing" className="text-blue-400 underline">View Poster</a>
              </p>
            </div>
          </div>
        </div>

        {/* Card 5 */}
        <div className="group perspective">
          <div className="relative w-80 h-96 transform-style-preserve-3d group-hover:rotate-y-180 transition-transform duration-500">
            {/* Front Face */}
            <div className="absolute w-full h-full bg-white text-black flex flex-col items-center justify-start backface-hidden p-4 shadow-lg rounded">
              <h3 className="text-xl font-bold mb-4">Intellidose: Model & App to Calculate Personalized Antibiotic Dosages</h3>
              <img src="/project5.jpg" alt="Project 5" className="w-full h-64 object-cover rounded" />
            </div>
            {/* Back Face */}
            <div className="absolute w-full h-full bg-white text-black flex flex-col items-start justify-center rotate-y-180 backface-hidden p-4 shadow-lg rounded">
              <p className="text-sm">
              - This project focused on calculating personalized antibiotic dosages to prevent antibiotic resistance using machine learning methods. <br />

- I built machine learning models to compute the minimum inhibitory concentration (MIC) of an antibiotic required to inhibit bacterial growth.<br />

- I translated my results into a mobile app, where a clinician can input information about the patient, infection type, and materials on hand, and the app will compute a personalized dosage. <br />

- Georgia State Technology Competition (GASTC) 1st place in the state in the Mobile Applications category <br />
                <a href="https://drive.google.com/file/d/1C5Ojl1_h9lkNH-cWkrpMtvEtB9wRi0ey/view?usp=sharing" className="text-blue-400 underline">View Slides</a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}