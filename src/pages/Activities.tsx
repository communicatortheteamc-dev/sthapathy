import { ArrowRight } from 'lucide-react';

const activities = [
  {
    title: 'Workshops & Training Camps',
    description: 'Workshops & Training: Sculpture camps, architectural design courses, and temple site visits.',
    icon: '📚',
  },
  {
    title: 'Publications & Knowledge Sharing',
    description: 'Publications: Authoritative texts on Vaastu, Mandala, temple architecture, and illustrated guides.',
    icon: '📖',
  },
  {
    title: 'Cultural Outreach & Heritage Walks',
    description: 'Cultural Outreach: Heritage tours, exhibitions, and lectures to promote awareness of sacred art',
    icon: '🏛️',
  },
  {
    title: 'Social Service & Artisan Welfare',
    description: 'Social Service: Scholarships, artisan welfare programs, and community empowerment. ',
    icon: '🤝',
  },
  {
    title: 'Temple Projects & Conservation',
    description: 'Temple Projects: Active participation in major Indian and international temple projects.Conservation Work: Documentation, restoration, and revival of heritage temples.',
    icon: '🕉️',
  },
  {
    title: 'International Collaborations',
    description: 'Building partnerships with universities, research institutions, and temples worldwide to promote sacred architecture.',
    icon: '🌍',
  },
  {
    title: 'Seminars & Exhibitions',
    description: 'Hosting seminars, exhibitions, and awareness programs to engage scholars and the public in cultural preservation.',
    icon: '🎭',
  },
  {
    title: 'Documentation & Archives',
    description: 'Creating comprehensive archives of temple drawings, historical records, and traditional knowledge systems.',
    icon: '📜',
  },
];

const Activities = () => {
  return (
    <div className="min-h-screen bg-[#9a8a70]">
      <div className="bg-[#8a7a60] text-white py-16 border-b-4 border-[#4a88b3]">
        <div className="container mx-auto px-4">
          <h1 className="text-5xl font-serif text-center tracking-wide">Activities</h1>
          <p className="text-center text-white/90 mt-4 text-lg max-w-4xl mx-auto">
            SVRF conducts workshops, training camps, publications, heritage walks, temple projects,
            international collaborations, conservation work, cultural outreach, social service,
            and artisan welfare to preserve and promote sacred traditions.
          </p>
        </div>
      </div>

      <div className="container mx-auto px-4 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto">
          {activities.map((activity, index) => (
            <div
              key={index}
              className="bg-[#b5a185] border-2 border-white p-8 rounded-lg hover:bg-[#c5b195] transition-all hover:scale-105 cursor-pointer group min-h-[280px] flex flex-col items-center justify-center text-center"
            >
              <div className="text-6xl mb-6">{activity.icon}</div>
              <h3 className="font-serif text-[#3a3020] text-xl mb-3 leading-snug">
                {activity.title}
              </h3>
              <p className="text-[#4a3820] text-sm leading-relaxed opacity-0 group-hover:opacity-100 transition-opacity">
                {activity.description}
              </p>
              <div className="mt-4 opacity-0 group-hover:opacity-100 transition-opacity">
                <ArrowRight className="text-[#3a3020]" size={24} />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Activities;
