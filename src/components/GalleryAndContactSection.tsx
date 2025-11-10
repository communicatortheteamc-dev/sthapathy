import { ArrowRight } from "lucide-react";

export default function GalleryAndContactSection() {
  return (
    <div className="w-full">
      {/* -------------------- GALLERY SECTION -------------------- */}
 <section className="relative bg-[#5c5037] py-12 sm:py-16 md:py-20 overflow-hidden">
  {/* Background Image */}
  <div className="absolute inset-0 z-0">
    <img
      src="/objectivebg.png"
      alt="Background Vector"
      className="w-full h-full object-cover opacity-70"
    />
  </div>

  <div className="relative z-10 container mx-auto px-4 sm:px-6 max-w-7xl text-center">
    <h2 className="text-xl sm:text-2xl md:text-3xl font-serif text-[#f5f0e6] mb-4 uppercase">
      Gallery
    </h2>

    <p className="text-[#f5f0e6] text-xs sm:text-sm md:text-base max-w-3xl mx-auto mb-8 leading-relaxed">
      SVRF shares knowledge through books on Vaastu and temple design, monthly journals,
      research papers, translations, and online archives, ensuring sacred wisdom remains
      accessible for global learners.
    </p>

    {/* Gallery Tabs */}
    <div className="flex flex-wrap justify-center gap-4 sm:gap-6 md:gap-10 mb-10 md:mb-12 text-[#f5f0e6] font-medium">
      <a
        href="#"
        className="text-[#b1a27e] underline underline-offset-4 text-xs sm:text-sm md:text-base"
      >
        TEMPLE PROJECTS IN PROGRESS
      </a>
      <a
        href="#"
        className="hover:text-[#b1a27e] text-xs sm:text-sm md:text-base"
      >
        SCULPTURAL WORKSHOPS
      </a>
      <a
        href="#"
        className="hover:text-[#b1a27e] text-xs sm:text-sm md:text-base"
      >
        HERITAGE CONSERVATION EFFORTS
      </a>
      <a
        href="#"
        className="hover:text-[#b1a27e] text-xs sm:text-sm md:text-base"
      >
        EVENTS & TRAINING PROGRAMS
      </a>
    </div>

    {/* Gallery Cards */}
    <div className="flex flex-wrap justify-center gap-4 sm:gap-6 items-center">
      {[1, 2, 3, 4, 5].map((_, i) => (
        <div
          key={i}
          className="relative w-32 h-44 sm:w-40 sm:h-56 md:w-48 md:h-64 bg-[#a89d82]/80 rounded-2xl shadow-lg border border-[#9c9077]"
        ></div>
      ))}
    </div>

    {/* Pagination Dots */}
    <div className="flex justify-center gap-2 mt-6">
      <div className="w-2.5 h-2.5 sm:w-3 sm:h-3 bg-white rounded-full"></div>
      <div className="w-2.5 h-2.5 sm:w-3 sm:h-3 bg-[#8b7c5f] rounded-full"></div>
      <div className="w-2.5 h-2.5 sm:w-3 sm:h-3 bg-[#8b7c5f] rounded-full"></div>
    </div>
  </div>
</section>


      {/* -------------------- CONTACT SECTION -------------------- */}
      <section className="relative bg-[#f5f0e6] py-20 overflow-hidden">
        <div
          className="absolute inset-0 opacity-20"
          style={{
            backgroundImage: "url('/pattern-bg.png')",
            backgroundRepeat: "repeat",
            backgroundSize: "auto",
          }}
        ></div>

        <div className="relative z-10 container mx-auto px-6 max-w-7xl">
          <h2 className="text-center text-[#463f2f] text-2xl md:text-3xl font-serif mb-4 uppercase">
            Contact Us
          </h2>
          <p className="text-center text-[#463f2f] mb-10 text-sm md:text-base">
            Contact form for collaboration, volunteering, and support
          </p>

          <div className="grid md:grid-cols-2 gap-10 items-start">
            {/* Map Section */}
            <div className="flex justify-center items-center bg-[#a89d82]/80 rounded-lg h-80">
              <p className="text-[#f5f0e6] text-lg tracking-wide uppercase">
                Location Map
              </p>
            </div>

            {/* Contact Form */}
            <form className="flex flex-col gap-4 text-sm">
              <div className="flex flex-col md:flex-row md:items-center gap-4">
                <label className="w-28 text-[#463f2f] font-medium">Name</label>
                <input
                  type="text"
                  className="flex-1 border border-[#b6a789] rounded-sm px-3 py-2 outline-none"
                />
              </div>

              <div className="flex flex-col md:flex-row md:items-center gap-4">
                <label className="w-28 text-[#463f2f] font-medium">Mobile No</label>
                <input
                  type="text"
                  className="flex-1 border border-[#b6a789] rounded-sm px-3 py-2 outline-none"
                />
              </div>

              <div className="flex flex-col md:flex-row md:items-center gap-4">
                <label className="w-28 text-[#463f2f] font-medium">Email ID</label>
                <input
                  type="email"
                  className="flex-1 border border-[#b6a789] rounded-sm px-3 py-2 outline-none"
                />
              </div>

              <div className="flex flex-col md:flex-row md:items-center gap-4">
                <label className="w-28 text-[#463f2f] font-medium">Address</label>
                <input
                  type="text"
                  className="flex-1 border border-[#b6a789] rounded-sm px-3 py-2 outline-none"
                />
              </div>

              <div className="flex flex-col md:flex-row md:items-start gap-4">
                <label className="w-28 text-[#463f2f] font-medium">Message</label>
                <textarea
                  rows={4}
                  className="flex-1 border border-[#b6a789] rounded-sm px-3 py-2 outline-none resize-none"
                ></textarea>
              </div>

              <div className="flex justify-end mt-4">
                <button
                  type="submit"
                  className="px-6 py-2 bg-[#463f2f] text-[#f5f0e6] text-sm rounded-full"
                >
                  Submit
                </button>
              </div>
            </form>
          </div>
        </div>
      </section>
    </div>
  );
}
