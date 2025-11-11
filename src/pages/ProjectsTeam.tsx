const team = [
  {
    name: 'Dr. Rajesh Kumar',
    role: 'Director & Chief Architect',
    bio: 'Renowned scholar in Sthapathya Veda with over 30 years of experience in temple architecture and traditional design.',
    image: 'https://images.pexels.com/photos/4427430/pexels-photo-4427430.jpeg?auto=compress&cs=tinysrgb&w=400',
  },
  {
    name: 'Shilpi Devi',
    role: 'Head of Sculpture & Training',
    bio: 'Master sculptor from a lineage of traditional craftspeople, specializing in stone carving and iconography.',
    image: 'https://images.pexels.com/photos/3785079/pexels-photo-3785079.jpeg?auto=compress&cs=tinysrgb&w=400',
  },
  {
    name: 'Prof. Anand Sharma',
    role: 'Research Director',
    bio: 'Academic scholar focused on Agamic traditions and ancient construction methodologies.',
    image: 'https://images.pexels.com/photos/4427618/pexels-photo-4427618.jpeg?auto=compress&cs=tinysrgb&w=400',
  },
  {
    name: 'Meera Krishnan',
    role: 'Publications Head',
    bio: 'Editor and translator specializing in ancient texts and scholarly publications on temple architecture.',
    image: 'https://images.pexels.com/photos/3778603/pexels-photo-3778603.jpeg?auto=compress&cs=tinysrgb&w=400',
  },
];

const projects = [
  {
    title: 'Statue of Equality – 216 ft. Sri Ramanujacharya Monument',
    location: 'Telangana, India',
    description: ' ',
    status: ' ',
  },
  {
    title: '108 Divya Desam Replicas, Shamshabad',
    location: 'Telangana, India ',
    description: ' ',
    status: ' ',
  },
  {
    title: 'Swarnagiri Sri Venkateswara Temple, Hyderabad',
    location: ' Telangana, India',
    description: ' ',
    status: ' ',
  },
  {
    title: 'Various conservation initiatives across India and international temple projects in USA, Australia, and New Zealand.',
    location: 'Globally',
    description: ' ',
    status: ' ',
  },
];

const ProjectsTeam = () => {
  return (
    <div className="min-h-screen bg-[#f5f0e8]">
      <div className="bg-[#4a3820] text-white py-16 border-b-4 border-[#4a88b3]">
        <div className="container mx-auto px-4">
          <h1 className="text-5xl font-serif text-center tracking-wide">Projects & Team</h1>
          <p className="text-center text-[#d5c8b5] mt-4 text-lg max-w-4xl mx-auto">
            The trust is led by a panel of traditional Sthapathis, cultural experts, and spiritual advisors. Their combined expertise ensures authenticity, innovation, and devotion in every project undertaken.

          </p>
        </div>
      </div>

      <div className="container mx-auto px-4 py-16">
        <div className="max-w-6xl mx-auto space-y-20">
          <section>
            <h2 className="text-4xl font-serif text-[#3a3020] mb-12 text-center">Our Team</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {team.map((member, index) => (
                <div
                  key={index}
                  className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow"
                >
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-full h-64 object-cover"
                  />
                  <div className="p-6">
                    <h3 className="text-xl font-serif text-[#3a3020] mb-2">{member.name}</h3>
                    <p className="text-[#4a88b3] text-sm font-semibold mb-3">{member.role}</p>
                    <p className="text-[#5a4a38] text-sm leading-relaxed">{member.bio}</p>
                  </div>
                </div>
              ))}
            </div>
          </section>

          <section>
            <h2 className="text-4xl font-serif text-[#3a3020] mb-12 text-center">
                Projects
            </h2>
            <div className="space-y-6">
              {projects.map((project, index) => (
                <div
                  key={index}
                  className="bg-white rounded-lg shadow-md p-8 hover:shadow-lg transition-shadow"
                >
                  <div className="flex items-start justify-between gap-6">
                    <div className="flex-1">
                      <h3 className="text-2xl font-serif text-[#3a3020] mb-2">
                        {project.title}
                      </h3>
                      <p className="text-[#4a88b3] text-sm font-semibold mb-3">
                        {project.location}
                      </p>
                      <p className="text-[#5a4a38] leading-relaxed">{project.description}</p>
                    </div>
                    {/* <span
                      className={`px-4 py-2 rounded-full text-sm font-semibold ${
                        project.status === 'Ongoing'
                          ? 'bg-[#4a88b3] text-white'
                          : 'bg-[#9a8a70] text-white'
                      }`}
                    >
                      {project.status}
                    </span> */}
                  </div>
                </div>
              ))}
            </div>
          </section>
        </div>
      </div>
    </div>
  );
};

export default ProjectsTeam;
