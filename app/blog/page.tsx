export default function Blog() {
  return (
    <div className="text-center">
      <h1 className="text-4xl font-bold text-white">navyapper</h1>
      <p className="text-lg text-white mt-4">
        this is more or less a stream of consciousness as i unpack my ideas. feel free to read, agree, disagree, or reach out -- i enjoy productive conversations.
      </p>

      {/* First Blog Post */}
      <div className="mt-8 text-left max-w-3xl mx-auto">
        <h2 className="text-2xl font-bold text-white">climate doom & industrial revolutions</h2>
        <p className="text-sm text-gray-400">May 23, 2025</p>
        <div className="mt-4 text-white space-y-6">
          <p>
            i spend more time than i should thinking. i suppose i enjoy (1) ruminating over information i already know, as well as (2) consuming as much media as i possibly can.
            in my journey of pursuing (2), i came across john green's podcast The Anthropocene Reviewed, where he evaluates human-centered contributions to the planet with painful honesty. one segment in particular which has led to at least 10 (?) spinoff conversations, was "humanity's temporal range." modern humans have spent less time on earth (250,000 years) than any other species. yet, we have caused ecological catastrophe and the ending of other species, which saddens me deeply. i spent a fair bit of time mourning this definite loss, but later grew to realize that this problem is one that we both exacerbate and have the greatest capacity to repair, which intrigues me.
          </p>

          <p>
            in conversation with [vr], i discovered an important divergence in mindset concerning industrial revolutions -- context below.
          </p>

          <p>
            ai increases the productivity of virtually every task, but LLMs also cause significant environmental damage. (i personally don't see proportional scales in productivity, but i'll discuss that in a later post). each query to chatGPT consumes 10x more energy than a google search, and significant water quantities must be used to cool hardware.
          </p>

          <p>
            even so, i have never been more excited to enter this field. i believe that the overwhelming democratization of knowledge is the most powerful, beautiful, equitable revolution to happen thus far.
          </p>

          <p>
            i identify 3 (?) main environmental problems due to the AI boom. (1) energy consumption, (2) carbon emissions, and (3) water usage. current solutions point to techniques like pruning and knowledge distillation to reduce computational load, as well as sustainable hardware and data centers. but the thing is, we need to harness the idea that (1) ai is improving the present in real-time, not just the future, and (2) sustainable ai is a ball already in motion, not one that needs to be pushed off the ground. i posit that in 5 years, both energy consumption and carbon emissions will reduce by 10-fold -- here's why. Be.Ta labs recently built the first entirely solar-powered LLM, <a href="https://huggingface.co/blog/Severian/powering-the-future-beta-labs-revolutionary-100-so" className="text-blue-400 underline">Aegis</a>. aside from fully sustainable training and lower computational costs, Be.Ta labs actively puts pressure on other tech giants to emphasize eco-AI and encourages more informed consumer choices.
          </p>

          <p>
            i just wrote a bunch of words, but i want to take a moment to appreciate the gravity of this accomplishment. the landmark paper that transformed (lol) this movement, "attention is all you need," was published in 2017. <strong>this field is an 8-year old</strong>: a remarkable 3rd-grader that built its first GPT at 1 year old, grew it from 117 million to 1.76 trillion parameters, and gained environmental conciousness by grade school. i am in awe of what humans can do with the right combination of problem-solving, brilliance, and conscientiousness.
          </p>

          <p>
            all this to say -- i believe that the two perspectives emerging from the conscientious consumer are as follows. (1) limit technological use, forgoing some degree of productivity, but making the most 'green' choice, or (2) take advantage of said productivity to maximize current benefit. i am not speaking only to/for ML enthusiasts when i say this -- imagine how healthcare, education, and infrastructure would boom if everyone truly learned and maximized the potential of ai. and this will only grow :) 100 years ago, our planet may have been in better shape, but our average lifespan was 50 years.
            i am a firm believer that all informed decisions are valid ones, and while i personally don’t carry perspective (1), i respect those who do for living in the present.
          </p>

          <p>
            https://arxiv.org/html/2412.04782v1
          </p>
        </div>
      </div>
    </div>
  );
}