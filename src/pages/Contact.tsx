import { Mail, Phone, MapPin } from 'lucide-react';
import { FaInstagram, FaWhatsapp } from 'react-icons/fa';

const Contact = () => {
  return (
    <div className="min-h-screen bg-[#f5f0e8]">
      <div className="bg-[#4a3820] text-white py-16 border-b-4 border-[#4a88b3]">
        <div className="container mx-auto px-4">
          <h1 className="text-5xl font-serif text-center tracking-wide">Contact Us</h1>
          <p className="text-center text-[#d5c8b5] mt-4 text-lg">
            Get in touch with us to learn more about our programs and initiatives
          </p>
        </div>
      </div>

      <div className="container mx-auto px-4 py-16">
        <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-12">
          <div className="space-y-8">
            <section>
              <h2 className="text-3xl font-serif text-[#3a3020] mb-6">Get In Touch</h2>
              <p className="text-[#5a4a38] leading-relaxed mb-8">
                Join us in preserving and promoting the sacred science of Sthapathya Veda.
	<p> •	Volunteer with our heritage projects.</p>
	<p>•	Collaborate through academic and cultural partnerships.</p>
	<p>•	Support artisans and research initiatives through donations.</p>

              </p>

              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-[#4a88b3] rounded-full flex items-center justify-center flex-shrink-0">
                    <MapPin className="text-white" size={24} />
                  </div>
                  <div>
                    <h3 className="font-semibold text-[#3a3020] mb-1">Address</h3>
                    <p className="text-[#5a4a38]">
                      Sthapathya Veda Research Foundation
                      <br />
                      123 Temple Street
                      <br />
                      Chennai, Tamil Nadu 600001
                      <br />
                      India
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-[#4a88b3] rounded-full flex items-center justify-center flex-shrink-0">
                    <Phone className="text-white" size={24} />
                  </div>
                  <div>
                    <h3 className="font-semibold text-[#3a3020] mb-1">Phone</h3>
                    <p className="text-[#5a4a38]">+91 44 1234 5678</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-[#4a88b3] rounded-full flex items-center justify-center flex-shrink-0">
                    <Mail className="text-white" size={24} />
                  </div>
                  <div>
                    <h3 className="font-semibold text-[#3a3020] mb-1">Email</h3>
                    <p className="text-[#5a4a38]">info@sthapathyaveda.org</p>
                  </div>
                  <div className="absolute right-6 bottom-10 flex flex-col gap-4 z-10">
                          <a
                            href="https://www.instagram.com/"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="w-10 h-10 bg-[#4a3820] hover:bg-[#5a4830] text-white flex items-center justify-center rounded-full shadow-md transition-colors"
                            aria-label="Instagram"
                          >
                            <FaInstagram size={20} />
                          </a>
                  
                          <a
                            href="https://wa.me/919876543210"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="w-10 h-10 bg-[#4a3820] hover:bg-[#5a4830] text-white flex items-center justify-center rounded-full shadow-md transition-colors"
                            aria-label="WhatsApp"
                          >
                            <FaWhatsapp size={22} />
                          </a>
                        </div>
                </div>
              </div>
            </section>
          </div>

          <div className="bg-white rounded-lg shadow-lg p-8">
            <h3 className="text-2xl font-serif text-[#3a3020] mb-6">Send Us a Message</h3>
            <form className="space-y-4">
              <div>
                <label htmlFor="name" className="block text-[#3a3020] mb-2 font-semibold">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  className="w-full px-4 py-2 border border-[#b5a185] rounded-lg focus:outline-none focus:ring-2 focus:ring-[#4a88b3]"
                  placeholder="Your Name"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-[#3a3020] mb-2 font-semibold">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  className="w-full px-4 py-2 border border-[#b5a185] rounded-lg focus:outline-none focus:ring-2 focus:ring-[#4a88b3]"
                  placeholder="your.email@example.com"
                />
              </div>

              <div>
                <label htmlFor="subject" className="block text-[#3a3020] mb-2 font-semibold">
                  Subject
                </label>
                <input
                  type="text"
                  id="subject"
                  className="w-full px-4 py-2 border border-[#b5a185] rounded-lg focus:outline-none focus:ring-2 focus:ring-[#4a88b3]"
                  placeholder="Subject"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-[#3a3020] mb-2 font-semibold">
                  Message
                </label>
                <textarea
                  id="message"
                  rows={5}
                  className="w-full px-4 py-2 border border-[#b5a185] rounded-lg focus:outline-none focus:ring-2 focus:ring-[#4a88b3] resize-none"
                  placeholder="Your message..."
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full bg-[#4a3820] hover:bg-[#5a4830] text-white py-3 rounded-lg uppercase text-sm tracking-wider transition-colors"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
