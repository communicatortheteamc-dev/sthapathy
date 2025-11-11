const programs = [
  {
    title: 'Student Internships in temple design and research.',
    description: 'Offer students internships and temple site studies to gain practical exposure in sacred architectural traditions. Students work directly with traditional Sthapathis and scholars on live projects.',
    image: 'https://images.pexels.com/photos/1007025/pexels-photo-1007025.jpeg?auto=compress&cs=tinysrgb&w=800',
  },
  {
    title: 'Priest & Sculptor Training Camps rooted in Agama and Shilpa Shastra traditions.',
    description: 'Comprehensive training for temple priests and sculptors in Agamic traditions, ritualistic practices, and traditional stone carving techniques passed down through generations.',
    image: 'https://images.pexels.com/photos/3408354/pexels-photo-3408354.jpeg?auto=compress&cs=tinysrgb&w=800',
  },
  {
    title: 'Research Fellowships for scholars of Indian art, architecture, and Indology.',
    description: 'Providing research fellowships for scholars to conduct in-depth studies on Sthapathya Veda, temple architecture, and ancient construction methodologies.',
    image: 'https://images.pexels.com/photos/301703/pexels-photo-301703.jpeg?auto=compress&cs=tinysrgb&w=800',
  },
  {
    title: 'Heritage Tours & Walks for devotees, researchers, and cultural enthusiasts.',
    description: 'Guided heritage tours and cultural immersion programs that offer participants direct experience of temple architecture, traditional craftsmanship, and sacred rituals.',
    image: 'https://images.pexels.com/photos/2739666/pexels-photo-2739666.jpeg?auto=compress&cs=tinysrgb&w=800',
  },
];

const Programs = () => {
  return (
    <div className="min-h-screen bg-[#f5f0e8]">
      <div className="bg-[#4a3820] text-white py-16 border-b-4 border-[#4a88b3]">
        <div className="container mx-auto px-4">
          <h1 className="text-5xl font-serif text-center tracking-wide">Programs</h1>
          <p className="text-center text-[#d5c8b5] mt-4 text-lg max-w-4xl mx-auto">
            SVRF offers student internships, priest and sculptor training, research fellowships,
            and heritage tours, enabling practical learning, cultural immersion, and scholarly
            growth in temple architecture and traditions.
          </p>
        </div>
      </div>

      <div className="container mx-auto px-4 py-16">
        <div className="max-w-5xl mx-auto space-y-12">
          {programs.map((program, index) => (
            <div
              key={index}
              className={`grid md:grid-cols-2 gap-8 items-center ${
                index % 2 === 1 ? 'md:flex-row-reverse' : ''
              }`}
            >
              <div className={index % 2 === 1 ? 'md:order-2' : ''}>
                <img
                  src={program.image}
                  alt={program.title}
                  className="w-full h-80 object-cover rounded-lg shadow-xl"
                />
              </div>
              <div className={`space-y-4 ${index % 2 === 1 ? 'md:order-1' : ''}`}>
                <h3 className="text-3xl font-serif text-[#3a3020]">{program.title}</h3>
                <p className="text-[#5a4a38] leading-relaxed text-lg">{program.description}</p>
                {/* <button className="bg-[#4a3820] hover:bg-[#5a4830] text-white px-6 py-3 rounded-full uppercase text-sm tracking-wider transition-colors">
                  Learn More
                </button> */}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Programs;
