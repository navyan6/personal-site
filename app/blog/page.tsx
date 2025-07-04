export default function Blog() {
  return (
    <div className="text-center">
      <h1 className="text-4xl font-bold text-white">welcome!</h1>
      <p className="text-lg text-white mt-4">
        this is more or less a stream of consciousness as i unpack my ideas. feel free to read, agree, disagree, or reach out.
      </p>
      {/* Sixth Blog Post */}
      <div className="mt-8 text-left max-w-3xl mx-auto">
        <h2 className="text-2xl font-bold text-white">thoughts on human thought</h2>
        <p className="text-sm text-gray-400">July 4th, 2025</p>
        <div className="mt-4 text-white space-y-6">
          <p>
            on a recent road trip, i found myself listening with curiosity as my friend confidently named all the types of trees we passed along the way. initially, i was impressed by the sheer volume of information she stored in her brain concerning a subject i don’t find particularly riveting. as i listened to her claim that we first passed an oak, then ginko, then magnolia, etc identified due to leaf shape/color/count, i had two general concerns. (1) i feel as though i have gotten considerably more gullible over time. short of claiming she saw a carrot tree, i would have consumed any amount of misinformation, not because i lack the ability to verify, but because when information is presented to us, our first thought is to accept it as given. it doesn’t take much effort to ensure accuracy, but lately, with the transition of knowledge gain shifting from search engines to agentic tools, i’ve felt the activation energy to do so increase. (2) this goes far beyond my disinterest in foliage. the power of information dissemination has grown considerably since the rise of algorithmic social media, and continues to build with the rise of LLM agents. simply put, it’s mind control. social media algorithms alter our opinions on everything from politics to religion to healthcare, pushing that 20 second video that will provide the perfect dopamine rush. scrolling platforms embody the ideal low effort high reward package. who would spend 15 minutes reading a cnn article when tiktok can feed a 15 second summary? who would search the internet to read a political platform when claude can generate an understandable, human-sounding explanation in miliseconds? 
          </p>
          <p>
            as a techno-optimist, i am the first to agree that these tools are very very cool and are making the world spectacular. but when we consume generated information, we inherently consume bias. in the spirit of moderating content safety, there has been a rush towards <a href="https://alignment.anthropic.com/" className="text-blue-400 underline" target="_blank" rel="noopener noreferrer">alignment science</a> — essentially controlling, altering, or limiting content for the sake of upholding human values. 
          </p>
          <p>
            simply put, LLMs compute probability distributions for coming words given preceding text, and alignment research aims to mess with that, increasing the likelihood of an HHH (harmless, helpful, honest) response. this could very easily be seen as censorship when taken too far, and is mainly carried out in the following ways.
          </p>
          <p>
            (1) data preparation. <a href="https://arxiv.org/pdf/2405.04434" className="text-blue-400 underline" target="_blank" rel="noopener noreferrer">during DeepSeek training</a>,  ‘controversial’ information about regional cultures was removed, and the model then understandably performed worse on test sets associated with those cultures. (2) post training alignment. (imo the most valid, and the core of anthropic’s constitutional AI methods). this technique adds additional training steps to a base model, usually adding a reinforcement learning from human feedback (rlhf) layer. this means that human crowdworkers have chosen between two model outputs as more helpful/harmless, and the model is rewarded for choosing the ‘more HHH’ response. 
          </p>
          <p>
            at the surface level, ‘aligning with human values’ seems like a noble goal and a step towards AI safety. i worry, however, that techniques like data cleaning and rule-based query refusal will only serve as information control in the hands of a bad actor. examples follow. leading up to the u.s. election, chatGPT refused all queries about polling data and voter facts. in china, DeepSeek currently refuses queries asking about the public opinion of xi xinping. 
          </p>
          <p>
            post-training alignment, however, imo holds great promise. if we can break down muddy ‘value’ based issues into technical problems, we move one step closer to a more transparent information flow. questions like “should the response focus on being more helpful or harmless?” are inherently philosophical and discussion-heavy. i don’t deny that there are long-standing frameworks for healthy debate of such issues in many fields (and conversations like that are imperative!), but i believe that if we can leverage mathematical models to analyze tradeoffs, there will be significant improvements in the short term.           </p>
          <p>
            additionally, aside from simple request refusal, part of the issue with knowledge consumption is the lack of a clear ‘thought process.’ if consumers could understand the exact chain of thought a model uses when answering a query, they are far more likely to (1) understand why the query may be considered unsafe and modify it or clarify their intentions, (2) find potential reasoning errors and the cause of a wonky output, and (3) simply increase trust in the tools they rely on. 
          </p>
          <p>
            eventually, i posit that alignment will be so heavily integrated into policy that we will have a separate ‘constitution’ simply for ai tools. i eagerly await this era, but meanwhile, in the spirit of independence day, i encourage the revival of independent thinking. 
          </p>
        </div>
      </div>
      {/* Fifth Blog Post */}
      <div className="mt-8 text-left max-w-3xl mx-auto">
        <h2 className="text-2xl font-bold text-white">designer genes, biotech races, & open source science</h2>
        <p className="text-sm text-gray-400">June 12, 2025</p>
        <div className="mt-4 text-white space-y-6">
          <p>
            in 2018, chinese scientist he jiankui created the first ever crispr edited human embryos (twin girls made resistant to HIV), and spent the following three years in jail. regarded by some as a fraud and others as a frankenstein-like visionary, he was indisputably the first to pull something this radical, no matter how it was received by the scientific community.
          </p>
          <p>
            fast forward 7 years to June 4, 2025, when nucleus genomics, led by kian sadeghi, officially launched their genetic optimization service for embryos. parents can choose traits to reduce risks for preventable conditions as well as optimize for ‘ideal’ characteristics, like intelligence (slippery slope).
          </p>
          <p>
            in 7 years, the same science that sent a man to jail has now become somewhat commoditized, and that is both fascinating (biotech moves so quickly!) and terrifying (are we building a new race of humans?)
          </p>
          <p>
            right now, one week post nucleus genomics launch, this field has never been under more fire. as a cautious supporter of this space, i believe that gene editing has immeasurable benefits in principle, but fundamentally boils down to 4 (ish) important tenants: interdisciplinary science/explainability, global competition in biotech, timing, & unbounded frivolousness. in 5 years, i may eat my words when this technology emerges as the ultimate pandora’s box, but for now, my thoughts are as follows.
          </p>
          <p>
            we have to remember that these advances are in biotech, not just tech. part of the criticism jiankui received came from the fact that neither he nor his few team members had a background in genetics/medicine, but were virtually conducting clinical trials. when reading about this problem online, i came across two broad perspectives, one coming from ‘bio’ and the other from ‘tech.’ the former emphasized moral ambiguity and avoided adoption, while the latter optimistically emphasized preventative medicine, fitting evolution to a classic optimization problem. problems arise when these two sides cannot find a safe overlap. i believe that casting new technology entirely as unethical only builds unfounded fear, rather than defining a safe bounded space to test and regulate it. currently, the u.s. gov has no regulations on gene editing (the eu does!), the pioneers are mostly people with math/cs/physics backgrounds, and scientists have not been transparent with results (how are those twin girls doing now?). of course people are scared! (sidenote: i actually think nucleus harnesses this idea very well — they have strong clinical teams/transparency. but might be too early for their time, will discuss later)
          </p>
          <p>
            why haven’t results been collaborative and transparent? imo, a sense of global competition in biotech. although it wasn’t well received at the time, jiankui (and therefore china) was first. first to pioneer this technology, first to get people talking, and first to inspire research in other labs. in order for this field to flourish, we need to learn from the mistakes made. so much is unknown about the human genome, so why conceal what we do know?
          </p>
          <p>
            before a company like nucleus/orchid can successfully take off, i believe we need much more trust and testing. crispr on embryos can make edits in unintended locations, not edit all cells uniformly, and lacks safe delivery mechanisms. at best, i posit that we are at least 5 years from tested trusted use. what scares me is that affluent parents can choose ‘optimal’ traits <i>right now</i> with long-term side effects that are fundamentally unknowable. and many of these are probability based. well-off parents may be tempted to pay for editing out a gene which increases risk of breast cancer by 25%, for example, but is that worth a potential shorter life expectancy, lowered immunity to other diseases, and countless other side effects? it’s easy to get lost in one side of this coin when the other side’s results only become clear a lifetime later.
          </p>
          <p>
            this process costs approx $6000 currently, which for many families seems worth it to relieve themselves of long term pain. this is slightly less ambiguous for single-gene traits (ex tay sachs), but becomes a lot more tricky when companies claim they can conduct ‘probability scoring assessments’ for polygenic (and 90% nurture driven imo) traits like intelligence. suddenly, we have well-off parents picking the brightest embryos with the most longevity, and this for me brings up 2 main concerns. (1) we have successfully messed with the one canonically random process in <i>nature</i> (mutation, yay us) (2) have we created a system where genetic advantages concentrate within the upper class? where richer people are somehow smarter by <i>nature</i>? quite a dystopian thought.
          </p>
          <p>
            so if we facilitate collaborations between clinicians and ai scientists, conduct comprehensive and transparent research, and define and regulate a first small (but slowly increasing) space we deem ethical, in 5 years or so, we may have something both trusted and revolutionary. of course, like it is with all new biotech, this process will be slow and full of fire. i’m sure when it was first suggested to inject people with a concoction of dead viral bits, people thought vaccines were batshit crazy, but here we are.
          </p>
          <p>
            question i am currently thinking about: if parents select the same ‘ideal’ traits for their embryos and this process remains legal, will we be in worse shape overall than how we started? genetic diversity serves as insurance to unforeseen challenges, and narrowing the gene pool may unintentionally put us back to square one..just food for thought, only time will tell.
          </p>
        </div>
      </div>

      {/* Fourth Blog Post */}
      <div className="mt-8 text-left max-w-3xl mx-auto">
        <h2 className="text-2xl font-bold text-white">thoughts before i write next post</h2>
        <p className="text-sm text-gray-400">June 9, 2025</p>
        <div className="mt-4 text-white space-y-6">
          <p>
            when this blog was a seed of an idea, i assumed i would have a theme (impact of ai in various industries at the time). as time (approx 4 days) went by, i resorted to writing about absolutely anything which piqued my interest, usually inspired by some article or reel i saw. the more i think about it, i realize that this deviation from my original plan actually supports my underlying goal, which is just to build my brain. sure, i want to be knowledgeable and critical of topics within the field i want to enter, but underneath that, i aim to be mentally sharp. i identify roughly 3 params in mental acuity (there are def more, but these are the three i think can be built intentionally, rather than gaining intelligence from lived experience). (1) problem-solving (best developed through math/programming imo, yay matiks), (2) conversation (learning from people, being able to adapt/respond, arguably highest weight), (3) writing (clear communication, synthesizing information before we lose this capability to llms). generally after covid/the chatgpt boom, i felt critical thinking in schools decline. i believe solving difficult problems is a muscle we have to build, so this is my method of pursuing (3) and consequently (2).
          </p>
        </div>
      </div>
      
      {/* Third Blog Post */}
      <div className="mt-8 text-left max-w-3xl mx-auto">
        <h2 className="text-2xl font-bold text-white">what we can learn from the manhattan project</h2>
        <p className="text-sm text-gray-400">June 4, 2025</p>
        <div className="mt-4 text-white space-y-6">
          <p>
            "now i am become death, the destroyer of worlds" - from the bhagavad gita, quoted by oppenheimer after the first ever deployment of the atomic bomb.
          </p>
          <p>
            in 1945, the culmination of the manhattan project resulted in approximately a quarter million lives lost. that number is difficult to comprehend, but what is even more fundamentally inscrutable about this tragedy is the question of its necessity.
          </p>
          <p>
            most historical retellings and perspectives from scientists involved in the manhattan project reflect the following view: regardless of the consequences, building the atomic bomb served as a means to an end, defeating nazi germany. however, evidence like interception of japanese wires revealed their plans to surrender, and u.s. intelligence determined that germany was nowhere near developing a weapon of similar scale.
          </p>
          <p>
            i think 2 scientists (yes, 2, even though we only have a movie about the first), are key to understanding this problem's relevance in today's world. (1) robert oppenheimer and (2) joseph rotblat. originally, both physicists were committed to the cause - building to defeat germany. when rotblat came to know that the technology would have negligible effect in a competitive ww2 advantage and instead be useful for one-upping the soviets, he left, spending the rest of his life working to denuclearize the world (1995 winner of nobel peace prize; ironic to me since alfred nobel invented dynamite). oppenheimer, however, saw through the production of the atomic bomb while grappling with moral indecision (portrayed beautifully by the movie in my opinion). he later promoted denuclearization and opposed hydrogen bomb proliferation, but this proved to be too little too late.
          </p>
          <p>
            with the increasing role of ai in defense, this fundamental dichotomy of values is interesting to apply to perspectives today.
          </p>
          <p>
            rotblat-like individuals appear to be the highest form of moral being -- refusing to build potentially destructive technology no matter the political/economic gain. (note: i say 'potentially' not in the context of the bomb, which predictably led to loss of life, but referring to modern developing technology with untested/unknown applications. ex. ask an engineer to build a tool for the designated purpose of killing others and most will object, but when the dod offers oodles of funding for robotics research for vague future militaristic advantages, it's more difficult to turn away). i respect this stance deeply.
          </p>
          <p>
            however, i believe that building (not! dropping!) the atomic bomb was quite a crucial step for america to thrive as the world power it is today. choosing to avoid militaristic innovation in a political climate where eight other nations are making it a priority would be incredibly naive. choosing how and when to use these technologies, however, remains the key moral question.
          </p>
          <p>
            ai can be useful for military operations in the following ways. minimizing civilian casualties through greater precision in combat, increasing cyber security, supporting/advising human decision-making, integrating dozens of live data feeds, etc. i think the biggest benefits ai brings lie simply within providing a full picture of all data available, adding some <a href="https://blog.palantir.com/safeguarding-freedom-87080c30a712" className="text-blue-400 underline" target="_blank" rel="noopener noreferrer">nuance/strategy</a> which may elude the human mind. the key here imo is to embrace ai in the military like we aim to do in healthcare: as a decision support tool to improve efficiency but never replace human decision-making (like google, openai, etc have adopted). these types of advancements are not entirely different from the increases in efficiency gained from the adoption of radio, internet, etc.
          </p>
          <p>
            enter autonomous robotics.
          </p>
          <p>
            the ukraine-russia war brought the arrival of autonomous weapons used in combat primarily in the form of drones. these drones were capable of autonomous flight and targeting, reducing the role of human oversight. russia additionally deployed autonomous ground vehicles, which could benefit human life by removing people from the direct line of combat, but could also result in unintended civilian casualties. this marked the world’s first 'robot war.' the pentagon wants to catch up with russia/china. they aim to produce autonomous ground vehicles by <strong>2026</strong>, as well as fully autonomous lethal weapons in a few more years to come.
          </p>
          <p>
            as young scientists and engineers, it's hard to ignore the opportunities that come from aligning with defense goals, but also important to understand that the creators of technology rarely determine how it’s used on the battlefield. i.e. was it oppenheimer's fault for building the bomb or truman's for deploying it? unknowable.
          </p>
          <p>
            apologies to my 2 readers for the long post..much gratitude to you both.
          </p>
        </div>
      </div>

      {/* Second Blog Post */}
      <div className="mt-8 text-left max-w-3xl mx-auto">
        <h2 className="text-2xl font-bold text-white">overview of rape crisis in india + indian american action?</h2>
        <p className="text-sm text-gray-400">May 27, 2025</p>
        <div className="mt-4 text-white space-y-6">
          <p>
            i caved into the propaganda and bought zarna garg's memoir, <em>this american woman</em> (i ran to amazon). after experiencing quite an emotional range, finishing the book in one sitting, and leaving a 5/5 <a href="https://www.goodreads.com/review/show/7596945412?book_show_action=false" className="text-blue-400 underline" target="_blank" rel="noopener noreferrer">goodreads</a> review, i went down a rabbit hole about one of the more difficult topics zarna touches on -- violence against women.
          </p>
          <p>
            one line stuck with me in particular.
          </p>
          <p className="italic">
            "in india, even the youngest girls were taught exactly what rape was and to fear it"
          </p>
          <p>
            i put the book down. as an indian-american girl, i subscribed to the mentality towards assault taught in american schools: not mentioned in elementary school (for the sake of peace of mind), and warned about in health class later on. i don't want to downplay the magnitude of this problem in america. violence against women happens everywhere; here, i moreso want to (1) discuss its severity and stigma in india and (2) clarify what i believe to be the role of indian americans (such as yours truly) regarding this crisis.
          </p>
          <p>
            however much media attention this issue has gained (largely through landmark cases like <a href="https://www.bbc.com/news/world-asia-india-51969961" className="text-blue-400 underline" target="_blank" rel="noopener noreferrer">2012 nirbhaya</a>, <a href="https://www.npr.org/sections/goats-and-soda/2024/08/26/g-s1-18366/rape-murder-doctor-india-sexual-violence-protests" className="text-blue-400 underline" target="_blank" rel="noopener noreferrer">2024 doctor's protests</a> in kolkata, etc), it remains a silent epidemic. there is rampant underreporting for a number of reasons -- difficulty gaining justice in corrupt police systems, social stigma, economic/religious disadvantages, etc. not to mention that a large fraction of assault cases are not eligible to be reported, given that indian gov has <a href="https://www.bbc.com/news/articles/c80r38yeempo" className="text-blue-400 underline" target="_blank" rel="noopener noreferrer">not criminalized marital rape</a>.
          </p>
          <p>
            reading about and understanding the complexities of this issue was eye-opening, and i encourage anyone reading this to <a href="https://www.cnn.com/interactive/asequals/india-rape-crisis-justice-failures-as-equals-intl-cmd/" className="text-blue-400 underline" target="_blank" rel="noopener noreferrer">do the same</a>.
          </p>
          <p>
            after much reflection, i came to observe the following: (1) the indian diaspora in the united states has done well, reaching high median household incomes and around 40% earning graduate degrees (general heuristics, not insinuating that these are by any means the best indicators of success), (2) many indians have reached prominent positions in large corporations & u.s. gov, leading to a potential for significant influence.
          </p>
          <p>
            aforementioned success results in responsibility. we must use resources and wealth to enact positive change. at the corporate/older/wealthier level, that may entail donating to indian orgs like <a href="https://sayfty.com/" className="text-blue-400 underline" target="_blank" rel="noopener noreferrer">sayfty</a> or pressuring indian gov officials to enact policies ending sexual violence.  5.2mil indian americans vs 1.3bil indians may seem steep, but america is a world power. as students, we should learn & educate. i believe that is the most powerful action we can take at this stage of our lives. whether its reading more news, posting on social media, starting difficult conversations, whatever. be mindful that as indian-americans, we are lucky to not be subject to the same threat of violence that we just as easily could have been, had we been born into different circumstances.
          </p>
          <p>
            india is said to be the largest democracy in the world, but half their population is not truly free.
          </p>
          <p>
            thanks for lifting the veil over my eyes, zarna.
          </p>
        </div>
      </div>

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