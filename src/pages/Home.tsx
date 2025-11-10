import HeroSlider from '../components/HeroSlider';
import { ArrowRight } from 'lucide-react';
import { ArrowUpRight } from "lucide-react";
import { motion } from "framer-motion";
import LatestProjectsAndTeam from '../components/LatestProjectsAndTeam';
import GalleryAndContactSection from '../components/GalleryAndContactSection';

const activities = [
  { title: "Workshops & Training Camps" },
  { title: "Publications & Knowledge Sharing" },
  { title: "Cultural Outreach & Heritage Walks" },
  { title: "Social Service & Artisan Welfare" },
];

const Home = () => {


  const ObjectiveCard = ({ title, description, active }: any) => (
    <div
      className={`group relative transition-all duration-300 ${active
        ? "bg-gradient-to-r from-[#5B533D] to-[#A89D82] p-5 rounded-md"
        : "hover:bg-[#a89b7c]/30 rounded-lg p-2"
        }`}
    >
      <div className="flex items-start justify-between">
        <div>
          <h4
            className={`font-semibold uppercase text-[13px] ${active ? "text-white" : "text-[#d5c8b5]"
              }`}
          >
            {title}
          </h4>
          {active && (
            <p className="text-sm text-white mt-2 leading-relaxed">
              {description}
            </p>
          )}
        </div>
        <ArrowUpRight
          size={18}
          className={`transition-opacity ${active ? "text-white opacity-100" : "opacity-70"
            }`}
        />
      </div>
      {active && (
        <button className="mt-3 text-[11px] uppercase tracking-wider underline text-white">
          Read More
        </button>
      )}
    </div>
  );

  return (
    <div>
      <HeroSlider />

 {/* About Us Section */}
<section className="relative py-16 sm:py-20 overflow-hidden bg-[#F5F5F5]">
  {/* Background image */}
  <div className="absolute inset-0 z-0">
    <img
      src="/aboutbackground.png"
      alt="Background Vector"
      className="w-full h-full object-cover"
    />
  </div>

  <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8">
    {/* Section Title */}
    <h2 className="text-3xl sm:text-4xl font-serif text-center text-[#494433] mb-10 sm:mb-16 tracking-wide">
      About Us
    </h2>

    <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-6 items-center max-w-6xl mx-auto">
      {/* Text Section */}
      <div className="space-y-6 text-center md:text-left px-2 sm:px-0">
        <h3 className="text-xl sm:text-2xl md:text-3xl font-serif text-[#494433] leading-snug sm:leading-tight">
          Empowering artisans, scholars, and seekers of sacred knowledge.
        </h3>
        <p className="text-[#000000] text-sm sm:text-base leading-relaxed">
          The Sthapathya Veda Research Foundation (SVRF) is dedicated to preserving and reviving the timeless wisdom of Vedic architecture, temple sculpture, and cultural heritage. Rooted in the ancient knowledge of{" "}
          <span className="font-semibold">
            Sthapathya Veda and Shilpa Shastra
          </span>, the foundation serves as a bridge between tradition and modernity, ensuring that sacred design principles continue to inspire future generations.
        </p>
        <p className="text-[#000000] text-sm sm:text-base leading-relaxed">
          Guided by revered mentors, traditional Sthapathis, and cultural scholars, SVRF stands as a beacon for research, education, and practice in the field of Indian temple architecture.
        </p>
      </div>

      {/* Image Section */}
      <div className="relative flex justify-center md:justify-end">
        {/* Arch background container */}
        <div className="w-[280px] sm:w-[350px] md:w-[450px] h-64 sm:h-80 md:h-96 bg-[#d5c8b5] rounded-t-full flex items-center justify-center relative shadow-md">
          {/* Main image inside the arch */}
          <img
            src="/main-inside-arch.png"
            alt=""
            className="w-full h-full object-cover rounded-md shadow-lg rounded-t-full"
          />

          {/* Bottom-left emblem image (outside arch) */}
          <div className="absolute -bottom-8 sm:-bottom-10 -left-3 sm:-left-6 w-28 sm:w-32 md:w-38 h-28 sm:h-32 bg-[#A89984] rounded-md flex items-center justify-center shadow-lg">
            <img
              src="/sthapathylogocut.png"
              alt="Emblem Icon"
              className="w-16 sm:w-20 md:w-24 h-16 sm:h-20 md:h-24 object-contain"
            />
          </div>
        </div>
      </div>
    </div>
  </div>
</section>



    {/* Objectives Section */}
<section className="relative py-16 sm:py-20 overflow-hidden bg-[#494433] font-serif">
  {/* Pattern Background */}
  <div className="absolute inset-0 z-0">
    <img
      src="/objectivebg.png"
      alt="Background Vector"
      className="w-full h-full object-cover opacity-80"
    />
  </div>

  <div className="container relative z-10 mx-auto px-4 sm:px-6 lg:px-8">
    <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-20 items-center max-w-7xl mx-auto">
      {/* Left Shape Section */}
      <div className="relative flex justify-center md:justify-end">
        {/* Arch background container */}
        <div className="w-[260px] sm:w-[320px] md:w-[400px] h-[400px] sm:h-[500px] md:h-[600px] bg-[#d5c8b5] rounded-t-full flex items-center justify-center relative shadow-md">
          {/* Main image inside the arch */}
          <img
            src="/main-inside-arch.png"
            alt=""
            className="w-full h-full object-cover rounded-md shadow-lg rounded-t-full"
          />

          {/* Bottom-right emblem image (outside arch) */}
          <div className="absolute -bottom-8 sm:-bottom-10 -right-3 sm:-right-5 md:-right-6 w-[120px] sm:w-[160px] md:w-[200px] h-[120px] sm:h-[160px] md:h-[200px] bg-[#A89984] rounded-md flex items-center justify-center shadow-lg">
            <img
              src="/sthapathylogocut.png"
              alt="Emblem Icon"
              className="w-16 sm:w-20 md:w-24 h-16 sm:h-20 md:h-24 object-contain"
            />
          </div>
        </div>
      </div>

      {/* Right Text Section */}
      <div className="text-[#f5f5f5] space-y-6 px-2 sm:px-0 text-center md:text-left">
        <h3 className="text-2xl sm:text-3xl md:text-[40px] font-semibold uppercase tracking-wider">
          Objectives
        </h3>

        <h2 className="text-lg sm:text-xl md:text-[25px] leading-snug">
          Reviving the timeless principles of temple design for{" "}
          <span className="block text-3xl sm:text-4xl md:text-[50px] mt-1 font-bold uppercase tracking-wider">
            Future Generations.
          </span>
        </h2>

        <div className="pt-4 space-y-4 text-[#F5F5F5]">
          <ObjectiveCard
            title="Research & Revive Sthapathya Veda and Agamas"
            description="Conduct deep studies to preserve, interpret, and revive ancient temple architecture and Agamic traditions for modern relevance."
            active
          />
          <ObjectiveCard title="Train Architects, Sculptors, and Scholars" />
          <ObjectiveCard title="Publish Books, Journals, and Translations" />
          <ObjectiveCard title="Collaborate with Universities and Temples Worldwide" />
          <ObjectiveCard title="Protect and Renovate Ancient Temples and Monuments" />
          <ObjectiveCard title="Conduct Seminars, Exhibitions, and Awareness Programs" />
          <ObjectiveCard title="Empower Artisans and Promote Livelihoods" />
        </div>
      </div>
    </div>
  </div>
</section>


      {/* Activities Section */}
      <section className="relative overflow-hidden bg-[#c7b79e] py-20">
        <div className="absolute inset-0 z-0">
          <img
            src="/activitiesbg.png"
            alt="Background Vector"
            className="w-full h-full object-cover opacity-80"
          />
        </div>
        <div className="relative z-10 container mx-auto px-6">
          <h2 className="text-center text-2xl md:text-3xl font-serif text-[#f5f0e6] tracking-wider mb-4">
            ACTIVITIES
          </h2>
          <p className="text-center text-[#f5f0e6] text-sm md:text-base max-w-4xl mx-auto leading-relaxed mb-12">
            SVRF conducts workshops, training camps, publications, heritage walks,
            temple projects, international collaborations, conservation work,
            cultural outreach, social service, and artisan welfare to preserve and
            promote sacred traditions.
          </p>

          <div className="flex flex-wrap justify-center gap-6">
            {activities.map((item, i) => (
              <motion.div
                key={i}
                whileHover={{ y: -5 }}
                className={`relative w-60 h-80 rounded-2xl bg-[#bcae94]/60 backdrop-blur-md border border-[#9d8c73] shadow-[0_4px_10px_rgba(0,0,0,0.2)] flex flex-col justify-end p-6 transition-all duration-300 ${i === 0 ? "border-2 border-[#f5f0e6]" : ""
                  }`}
              >
                <div className="absolute inset-0 rounded-2xl bg-[#b8a782]/30" />
                <div className="relative z-10 flex  items-center">
                  <h3 className="text-[#f5f0e6] text-sm font-medium leading-snug mb-3 uppercase tracking-wide">
                    {item.title}
                  </h3>
                  <div className="w-8 h-8 rounded-full bg-[#f5f0e6]/90 flex items-center justify-center">
                    <ArrowRight className="w-4 h-4 text-[#7a6a53]" />
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          <div className="flex justify-center mt-12 gap-2">
            <span className="w-2.5 h-2.5 rounded-full bg-[#f5f0e6]" />
            <span className="w-2.5 h-2.5 rounded-full bg-[#a39278]" />
            <span className="w-2.5 h-2.5 rounded-full bg-[#a39278]" />
          </div>
        </div>
      </section>

      {/* Programs Section */}
      <section className="py-20 bg-[#f5f0e8] relative overflow-hidden">
        {/* Top Border Image */}
      <div className="absolute top-0 w-full z-30 mt-">
        <img
          src="/navborder.png"
          alt="Top Border"
          className="w-full object-cover"
        />
      </div>
        {/* Background image */}
        <div className="absolute inset-0 z-0">
          <img
            src="/aboutbackground.png"
            alt="Background Vector"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-serif text-center text-[#3a3020] mb-8 tracking-wide">
            Programs
          </h2>
          <p className="text-center text-[#5a4a38] max-w-4xl mx-auto mb-16 leading-relaxed">
            SVRF offers student internships, priest and sculptor training, research fellowships, and heritage tours, enabling practical learning, cultural immersion, and scholarly growth in temple architecture and traditions.
          </p>
          <div className="max-w-4xl mx-auto">
            <div className="bg-[#5B533D] p-10 rounded-lg text-white">
              <h3 className="text-2xl font-serif mb-4">
                Student Programs – Internships, temple site studies
              </h3>
              <p className="mb-6 text-[#d5c8b5] leading-relaxed">
                Offer students internships and temple site studies to gain practical exposure in sacred architectural traditions.
              </p>
              <button className="bg-[#A89D82] hover:bg-[#8a7a60] text-white px-6 py-2 rounded-full uppercase text-sm tracking-wider transition-colors">
                Read More
              </button>
            </div>
          </div>
          <div className="flex justify-center gap-3 mt-12">
            <div className="w-3 h-3 rounded-full bg-[#4a3820]"></div>
            <div className="w-3 h-3 rounded-full bg-[#b5a185]"></div>
            <div className="w-3 h-3 rounded-full bg-[#b5a185]"></div>
          </div>
        </div>
         <div className="absolute bottom-0 w-full z-10" style={{ marginBottom: "-5px" }}>
          <img src="/heroborder.png" alt="Bottom Border" className="w-full object-cover" />
        </div>
      </section>

     {/* Publications Section */}
<section className="relative overflow-hidden py-16 md:py-20 bg-[#4a3820] text-white font-serif">
  {/* Background Image */}
  <div className="absolute inset-0 z-0">
    <img
      src="/objectivebg.png"
      alt="Background Vector"
      className="w-full h-full object-cover opacity-70"
    />
  </div>

  {/* Content */}
  <div className="container relative z-10 mx-auto px-4 sm:px-6 lg:px-8">
    {/* Title & Subtitle */}
    <div className="text-center mb-10 md:mb-16 max-w-4xl mx-auto px-2">
      <h2 className="text-2xl sm:text-3xl md:text-5xl font-semibold tracking-wide mb-4">
        Publications & Resources
      </h2>
      <p className="text-[#d5c8b5] text-sm sm:text-base leading-relaxed px-1 sm:px-6">
        SVRF shares knowledge through books on Vaastu and temple design, monthly journals,
        research papers, translations, and online archives — ensuring sacred wisdom remains
        accessible for global learners.
      </p>
    </div>

    {/* Content Grid */}
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 max-w-6xl mx-auto items-center">
      {/* Left Illustration / Shape */}
      <div className="relative flex justify-center md:justify-start">
        {/* Arched background shape */}
        <div className="w-[270px] sm:w-[350px] md:w-[470px] h-[250px] sm:h-[320px] md:h-[420px] bg-[#9D9276] rounded-lg"></div>
      </div>

      {/* Right Publication List */}
      <div className="space-y-6">
        <PublicationCard
          title='Monthly Journal "Sthapathya Veda"'
          author="By Sthapathya Veda"
          date="24.09.2025"
        />
        <PublicationCard
          title="Research Papers and Translations"
          author="By Sthapathya Veda"
          date="24.09.2025"
        />
        <PublicationCard
          title="Online Resources: Temple Drawings, Archives"
          author="By Sthapathya Veda"
          date="24.09.2025"
        />
      </div>
    </div>

    {/* Footer box */}
    <div className="py-4 sm:py-5 mx-auto items-center text-center mt-10 md:mt-16 bg-[#6a5a48] max-w-full sm:max-w-4xl rounded-lg px-3">
      <span className="text-base sm:text-lg md:text-xl font-bold block">
        Featured books on Vaastu, Temple Design, Mandala Principles
      </span>
      <span className="text-sm sm:text-base">By Sthapathya | Veda 24:09:2025</span>
    </div>
  </div>
</section>

<LatestProjectsAndTeam />
<GalleryAndContactSection />
    </div>
  );
};



const ActivityCard = ({ title, icon }: { title: string; icon: string }) => (
  <div className="bg-[#b5a185] border-2 border-white p-8 rounded-lg hover:bg-[#c5b195] transition-colors cursor-pointer group h-64 flex flex-col items-center justify-center text-center">
    <div className="text-5xl mb-4">{icon}</div>
    <h4 className="font-serif text-[#3a3020] text-lg leading-snug">{title}</h4>
    <div className="mt-4 opacity-0 group-hover:opacity-100 transition-opacity">
      <ArrowRight className="text-[#3a3020]" size={24} />
    </div>
  </div>
);

const PublicationCard = ({ title, author, date }: { title: string; author: string; date: string }) => (
  <div className="bg-[#9a8a70] p-6 rounded-lg flex gap-4 items-center hover:bg-[#8a7a60] transition-colors cursor-pointer">
    <div className="w-20 h-20 bg-[#6a5a48] rounded flex-shrink-0"></div>
    <div>
      <h4 className="font-serif text-lg mb-2">{title}</h4>
      <p className="text-[#d5c8b5] text-sm">{author}</p>
      <p className="text-[#d5c8b5] text-sm">{date}</p>
    </div>
  </div>
);

export default Home;
