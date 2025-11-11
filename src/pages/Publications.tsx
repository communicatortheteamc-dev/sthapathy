import { BookOpen, FileText, Archive } from 'lucide-react';

const publications = [
  {
    title: 'Monthly Journal "Sthapathya Veda"',
    author: 'By Sthapathya Veda Research Foundation',
    date: '24.09.2025',
    description: 'A comprehensive monthly publication featuring research articles, traditional texts, and contemporary insights into temple architecture and Vedic design principles.',
    icon: BookOpen,
  },
  {
    title: 'Research Papers and Translations',
    author: 'By Sthapathya Veda Research Foundation',
    date: '24.09.2025',
    description: 'Scholarly translations of ancient Shilpa Shastra texts, research papers on temple architecture, and academic studies on traditional construction methodologies.',
    icon: FileText,
  },
  {
    title: 'Online Resources: Temple Drawings, Archives',
    author: 'By Sthapathya Veda Research Foundation',
    date: '24.09.2025',
    description: 'Digital archives containing detailed temple drawings, historical records, photographic documentation, and comprehensive resources for researchers and practitioners.',
    icon: Archive,
  },
];

const books = [
  {
    title: 'Vaastu Shastra: Principles of Sacred Design',
    description: 'Comprehensive guide to Vedic architecture principles and their application in modern contexts.',
  },
  {
    title: 'Shilpa Shastra: Art of Temple Sculpture',
    description: 'Detailed exploration of traditional stone carving techniques and iconography.',
  },
  {
    title: 'Agamic Traditions in Temple Architecture',
    description: 'Study of Agamic texts and their influence on South Indian temple construction.',
  },
  {
    title: 'Ancient Construction Methodologies',
    description: 'Technical analysis of traditional building techniques and materials.',
  },
];

const Publications = () => {
  return (
    <div className="min-h-screen bg-[#4a3820]">
      <div className="bg-[#3a2810] text-white py-16 border-b-4 border-[#4a88b3]">
        <div className="container mx-auto px-4">
          <h1 className="text-5xl font-serif text-center tracking-wide">Publications & Resources</h1>
          <p className="text-center text-[#d5c8b5] mt-4 text-lg max-w-4xl mx-auto   ">
           <p> SVRF is committed to knowledge sharing through:</p>
               <p> •	Research publications and coffee-table books.</p>
	             <p> •	Translations of ancient Agama texts.</p>
	             <p>•	The monthly journal “Sthapathya Veda”.</p>
	             <p> •	Temple photo archives, site maps, and architectural drawings.</p>

          </p>
        </div>
      </div>

      <div className="container mx-auto px-4 py-16">
        <div className="max-w-6xl mx-auto space-y-16">
          <section>
            <h2 className="text-3xl font-serif text-white mb-8 text-center">
              Journals & Research
            </h2>
            <div className="space-y-6">
              {publications.map((pub, index) => {
                const Icon = pub.icon;
                return (
                  <div
                    key={index}
                    className="bg-[#9a8a70] p-8 rounded-lg hover:bg-[#8a7a60] transition-colors cursor-pointer"
                  >
                    <div className="flex gap-6 items-start">
                      <div className="w-24 h-24 bg-[#6a5a48] rounded flex items-center justify-center flex-shrink-0">
                        <Icon size={40} className="text-[#d5c8b5]" />
                      </div>
                      <div className="flex-1">
                        <h3 className="text-2xl font-serif text-white mb-2">{pub.title}</h3>
                        <p className="text-[#d5c8b5] text-sm mb-3">
                          {pub.author} • {pub.date}
                        </p>
                        <p className="text-white/90 leading-relaxed">{pub.description}</p>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </section>

          <section>
            <h2 className="text-3xl font-serif text-white mb-8 text-center">Published Books</h2>
            <div className="grid md:grid-cols-2 gap-6">
              {books.map((book, index) => (
                <div
                  key={index}
                  className="bg-[#6a5a48] p-6 rounded-lg hover:bg-[#7a6a58] transition-colors cursor-pointer"
                >
                  <h3 className="text-xl font-serif text-white mb-3">{book.title}</h3>
                  <p className="text-[#d5c8b5] leading-relaxed">{book.description}</p>
                </div>
              ))}
            </div>
          </section>
        </div>
      </div>
    </div>
  );
};

export default Publications;
