import { ArrowRight } from "lucide-react";
import { motion } from "framer-motion";

export default function LatestProjectsAndTeam() {
    const teamMembers = [
  {
    id: 1,
    name: "Sri Chinna Jeeyar Swamiji",
    role: "Founder & Spiritual Leader",
    image: "/team1.jpg",
  },
  {
    id: 2,
    name: "Sri Tridandi Srimannarayana Ramanuja Swamiji",
    role: "Chief Advisor",
    image: "/team2.jpg",
  },
  {
    id: 3,
    name: "Sri Ahobila Ramanuja Jeeyar Swamiji",
    role: "Cultural Director",
    image: "/team3.jpg",
  },
  {
    id: 4,
    name: "Sri Varaha Lakshmi Narasimha Swamiji",
    role: "Project Coordinator",
    image: "/team4.jpg",
  },
  {
    id: 5,
    name: "Smt. Sridevi Ranganathan",
    role: "Design Consultant",
    image: "/team5.jpg",
  },
  {
    id: 6,
    name: "Sri Venkat Ramana",
    role: "Architectural Advisor",
    image: "/team6.jpg",
  },
  {
    id: 7,
    name: "Smt. Anuradha Reddy",
    role: "Cultural Researcher",
    image: "/team7.jpg",
  },
  {
    id: 8,
    name: "Sri Nageshwar Rao",
    role: "Heritage Documentation Head",
    image: "/team8.jpg",
  },
  {
    id: 9,
    name: "Sri Suryanarayana",
    role: "Temple Project Coordinator",
    image: "/team9.jpg",
  },
];

    return (
        <div className="bg-[#b6a789]">
            {/* Latest Projects Section */}
           <section className="relative overflow-hidden bg-[#A89D82] py-12 sm:py-16 md:py-20">
  {/* Background Image */}
  <div className="absolute inset-0 z-0">
    <img
      src="/objectivebg.png"
      alt="Background Vector"
      className="w-full h-full object-cover opacity-70"
    />
  </div>

  <div
    className="absolute inset-0 opacity-30"
    style={{
      backgroundImage: "url('/pattern-bg.png')",
      backgroundRepeat: "repeat",
      backgroundSize: "auto",
    }}
  />

  <div className="relative z-10 container mx-auto px-4 sm:px-6 max-w-7xl">
    <h3 className="text-[#463f2f] text-lg sm:text-xl font-bold mb-4 tracking-wide text-center md:text-left">
      LATEST PROJECTS
    </h3>

    <div className="flex flex-col lg:flex-row justify-between items-center lg:items-start mb-12 max-w-7xl gap-10">
      <div className="text-center lg:text-left">
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif text-[#f5f0e6] leading-tight mb-3">
          Statue of Equality
        </h2>
        <h4 className="text-xl sm:text-2xl md:text-3xl text-[#f5f0e6] mb-6">
          216 Ft. Sri Ramanujacharya Monument
        </h4>
        <p className="text-[#f5f0e6] text-sm sm:text-base max-w-3xl leading-relaxed mb-6 mx-auto lg:mx-0">
          The Statue of Equality is a statue of the 11th-century Indian philosopher Ramanuja,
          located on the premises of the Chinna Jeeyar Trust at Muchintal, Ranga Reddy district
          in the outskirts of Hyderabad.
        </p>

        <button className="px-5 py-2 bg-[#463f2f] text-[#f5f0e6] text-sm tracking-wide rounded-full mb-10">
          READ MORE
        </button>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          <motion.div
            whileHover={{ y: -4 }}
            className="relative h-40 sm:h-48 rounded-xl bg-[#9D9276]/60 border border-[#9d8c73] backdrop-blur-sm shadow-[0_4px_10px_rgba(0,0,0,0.2)] flex items-end p-4 sm:p-6"
          >
            <div className="relative z-10 flex justify-between w-full items-center">
              <h4 className="text-[#f5f0e6] text-xs sm:text-sm font-medium uppercase tracking-wide">
                108 Divya Desam Replicas
              </h4>
              <div className="w-7 h-7 sm:w-8 sm:h-8 rounded-full bg-[#f5f0e6]/90 flex items-center justify-center">
                <ArrowRight className="w-3 h-3 sm:w-4 sm:h-4 text-[#7a6a53]" />
              </div>
            </div>
          </motion.div>

          <motion.div
            whileHover={{ y: -4 }}
            className="relative h-40 sm:h-48 rounded-xl bg-[#9D9276]/60 border border-[#9d8c73] backdrop-blur-sm shadow-[0_4px_10px_rgba(0,0,0,0.2)] flex items-end p-4 sm:p-6"
          >
            <div className="relative z-10 flex justify-between w-full items-center">
              <h4 className="text-[#f5f0e6] text-xs sm:text-sm font-medium uppercase tracking-wide">
                Swarnagiri
              </h4>
              <div className="w-7 h-7 sm:w-8 sm:h-8 rounded-full bg-[#f5f0e6]/90 flex items-center justify-center">
                <ArrowRight className="w-3 h-3 sm:w-4 sm:h-4 text-[#7a6a53]" />
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Right Side Shape */}
      <div className="relative flex justify-center md:justify-start">
        <div className="w-64 sm:w-80 md:w-[470px] h-60 sm:h-80 md:h-[420px] bg-[#9D9276] rounded-lg"></div>
      </div>
    </div>

    <div className="flex justify-center">
      <button className="px-6 py-2 bg-[#463f2f] text-[#f5f0e6] rounded-full text-sm tracking-wide">
        VIEW ALL PROJECTS
      </button>
    </div>
  </div>
</section>


            {/* Our Team Section */}
            <section className="relative bg-[#f5f0e6] py-20 overflow-hidden">
                {/* Background image */}
                <div className="absolute inset-0 z-0">
                    <img
                        src="/aboutbackground.png"
                        alt="Background Vector"
                        className="w-full h-full object-cover"
                    />
                </div>
                <div
                    className="absolute inset-0 opacity-30"
                    style={{
                        backgroundImage: "/ourgroup.png",
                        backgroundRepeat: "repeat",
                        backgroundSize: "auto",
                    }}
                />
                <div className="relative z-10 container mx-auto px-6 max-w-7xl text-center">
                    <h2 className="text-[#5B533D] text-3xl font-serif mb-6 uppercase">
                        Our Team
                    </h2>
                    <p className="text-[#5B533D] max-w-3xl mx-auto text-sm md:text-base leading-relaxed mb-16">
                        The trust is led by a panel of traditional Sthapathis, cultural
                        experts, and spiritual advisers. Their combined expertise ensures
                        authenticity, innovation, and devotion in every project undertaken.
                    </p>

                   <div className="flex flex-wrap justify-center gap-8">
  {teamMembers.map((_, i) => (
   <div key={i} className="flex flex-col items-center">
  <div className="relative w-40 h-40 flex items-center justify-center mb-3">
    <img src="/ourgroup.png" alt="Frame" className="absolute inset-0 w-full h-full object-contain" />
    <img src={`/team${i + 1}.jpg`} alt="" className="relative w-24 h-24 rounded-full object-cover border-2 border-[#f5f0e6] shadow-md" />
  </div>
  <p className="text-[#463f2f] font-medium text-sm">Member Name</p>
  <p className="text-[#7a6a53] text-xs">Role / Title</p>
</div>
  ))}
</div>

                </div>
            </section>
        </div>
    );
}
