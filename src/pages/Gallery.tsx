const galleryImages = [
  {
    url: 'https://images.pexels.com/photos/3408354/pexels-photo-3408354.jpeg?auto=compress&cs=tinysrgb&w=800',
    title: 'Temple Architecture',
    category: 'Architecture',
  },
  {
    url: 'https://images.pexels.com/photos/1007025/pexels-photo-1007025.jpeg?auto=compress&cs=tinysrgb&w=800',
    title: 'Stone Sculpture',
    category: 'Sculpture',
  },
  {
    url: 'https://images.pexels.com/photos/2739666/pexels-photo-2739666.jpeg?auto=compress&cs=tinysrgb&w=800',
    title: 'Temple Complex',
    category: 'Architecture',
  },
  {
    url: 'https://images.pexels.com/photos/301703/pexels-photo-301703.jpeg?auto=compress&cs=tinysrgb&w=800',
    title: 'Heritage Site',
    category: 'Heritage',
  },
  {
    url: 'https://images.pexels.com/photos/2166711/pexels-photo-2166711.jpeg?auto=compress&cs=tinysrgb&w=800',
    title: 'Traditional Craftsmanship',
    category: 'Sculpture',
  },
  {
    url: 'https://images.pexels.com/photos/1007024/pexels-photo-1007024.jpeg?auto=compress&cs=tinysrgb&w=800',
    title: 'Ancient Monument',
    category: 'Heritage',
  },
  {
    url: 'https://images.pexels.com/photos/2166553/pexels-photo-2166553.jpeg?auto=compress&cs=tinysrgb&w=800',
    title: 'Sacred Architecture',
    category: 'Architecture',
  },
  {
    url: 'https://images.pexels.com/photos/3844796/pexels-photo-3844796.jpeg?auto=compress&cs=tinysrgb&w=800',
    title: 'Temple Details',
    category: 'Architecture',
  },
  {
    url: 'https://images.pexels.com/photos/1007026/pexels-photo-1007026.jpeg?auto=compress&cs=tinysrgb&w=800',
    title: 'Cultural Heritage',
    category: 'Heritage',
  },
];

const Gallery = () => {
  return (
    <div className="min-h-screen bg-[#f5f0e8]">
      <div className="bg-[#4a3820] text-white py-16 border-b-4 border-[#4a88b3]">
        <div className="container mx-auto px-4">
          <h1 className="text-5xl font-serif text-center tracking-wide">Gallery</h1>
          <p className="text-center text-[#d5c8b5] mt-4 text-lg">
            Explore our collection of temple architecture, sculptures, and cultural heritage
          </p>
        </div>
      </div>

      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto">
          {galleryImages.map((image, index) => (
            <div
              key={index}
              className="group relative overflow-hidden rounded-lg shadow-lg hover:shadow-2xl transition-all cursor-pointer aspect-square"
            >
              <img
                src={image.url}
                alt={image.title}
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <span className="inline-block px-3 py-1 bg-[#4a88b3] text-white text-xs rounded-full mb-2">
                    {image.category}
                  </span>
                  <h3 className="text-white text-xl font-serif">{image.title}</h3>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Gallery;
