import { ArrowRight } from 'lucide-react';

const objectives = [
  {
    title: 'Research & Revive Sthapathya Veda and Agamas',
    description: 'Conduct deep studies to preserve, interpret, and revive ancient temple architecture and Agamic traditions for modern relevance.',
  },
  {
    title: 'Train Architects, Sculptors, and Scholars',
    description: 'Provide comprehensive education in traditional design principles and craftsmanship.',
  },
  {
    title: 'Publish Books, Journals, and Translations',
    description: 'Share knowledge through scholarly publications and accessible resources.',
  },
  {
    title: 'Collaborate with Universities and Temples Worldwide',
    description: 'Build global partnerships to promote and preserve sacred architecture.',
  },
  {
    title: 'Protect and Renovate Ancient Temples and Monuments',
    description: 'Lead conservation efforts to safeguard cultural heritage.',
  },
  {
    title: 'Conduct Seminars, Exhibitions, and Awareness Programs',
    description: 'Engage communities through educational initiatives and cultural events.',
  },
  {
    title: 'Empower Artisans and Promote Livelihoods',
    description: 'Support traditional craftspeople and ensure sustainable practices.',
  },
];

const Objectives = () => {
  return (
    <div className="min-h-screen bg-[#4a3820]">
      <div className="bg-[#3a2810] text-white py-16 border-b-4 border-[#4a88b3]">
        <div className="container mx-auto px-4">
          <h1 className="text-5xl font-serif text-center tracking-wide">Objectives</h1>
          <p className="text-center text-[#d5c8b5] mt-4 text-xl">
            Reviving the timeless principles of temple design for future generations
          </p>
        </div>
      </div>

      <div className="container mx-auto px-4 py-16">
        <div className="max-w-5xl mx-auto space-y-6">
          {objectives.map((objective, index) => (
            <div
              key={index}
              className="bg-[#6a5a48]/30 p-8 rounded-lg hover:bg-[#6a5a48]/50 transition-colors group cursor-pointer border border-[#8a7a60]"
            >
              <div className="flex items-start justify-between gap-6">
                <div className="flex-1">
                  <h3 className="text-2xl font-serif text-white mb-3">{objective.title}</h3>
                  <p className="text-[#d5c8b5] leading-relaxed">{objective.description}</p>
                </div>
                <ArrowRight
                  className="text-[#d5c8b5] flex-shrink-0 group-hover:translate-x-2 transition-transform mt-2"
                  size={28}
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Objectives;
