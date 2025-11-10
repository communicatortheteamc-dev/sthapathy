const About = () => {
  return (
    <div className="min-h-screen bg-[#f5f0e8]">
      <div className="bg-[#4a3820] text-white py-16">
        <div className="container mx-auto px-4">
          <h1 className="text-5xl font-serif text-center tracking-wide">About Us</h1>
        </div>
      </div>

      <div className="container mx-auto px-4 py-16">
        <div className="max-w-4xl mx-auto space-y-12">
          <section>
            <h2 className="text-3xl font-serif text-[#3a3020] mb-6">Our Mission</h2>
            <p className="text-[#5a4a38] leading-relaxed text-lg">
              The Sthapathya Veda Research Foundation (SVRF) is dedicated to preserving and reviving the timeless wisdom of Vedic architecture, temple sculpture, and cultural heritage. Rooted in the ancient knowledge of Sthapathya Veda and Shilpa Shastra, the foundation serves as a bridge between tradition and modernity.
            </p>
          </section>

          <section>
            <h2 className="text-3xl font-serif text-[#3a3020] mb-6">Our Vision</h2>
            <p className="text-[#5a4a38] leading-relaxed text-lg">
              To ensure that sacred design principles continue to inspire future generations through research, education, and practice in the field of Indian temple architecture.
            </p>
          </section>

          <section>
            <h2 className="text-3xl font-serif text-[#3a3020] mb-6">Our Approach</h2>
            <p className="text-[#5a4a38] leading-relaxed text-lg">
              Guided by revered mentors, traditional Sthapathis, and cultural scholars, SVRF stands as a beacon for research, education, and practice. We empower artisans, scholars, and seekers of sacred knowledge through comprehensive programs and initiatives.
            </p>
          </section>

          <section className="bg-[#9a8a70] p-8 rounded-lg">
            <h2 className="text-3xl font-serif text-white mb-6">Core Values</h2>
            <ul className="space-y-4 text-white text-lg">
              <li className="flex items-start gap-3">
                <span className="text-2xl">•</span>
                <span>Preservation of ancient wisdom and traditional knowledge</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-2xl">•</span>
                <span>Bridge between traditional practices and modern applications</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-2xl">•</span>
                <span>Education and empowerment of artisans and scholars</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-2xl">•</span>
                <span>Global collaboration and knowledge sharing</span>
              </li>
            </ul>
          </section>
        </div>
      </div>
    </div>
  );
};

export default About;
