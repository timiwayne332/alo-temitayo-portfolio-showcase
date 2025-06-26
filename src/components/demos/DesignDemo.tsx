
export const DesignDemo = () => {
  const designs = [
    {
      title: "Modern Logo Design",
      image: "https://images.unsplash.com/photo-1634942537034-2531766767d1?w=400",
      description: "Clean, minimalist logo with modern typography"
    },
    {
      title: "Brand Color Palette", 
      image: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?w=400",
      description: "Carefully selected colors that represent brand values"
    },
    {
      title: "Event Poster",
      image: "https://images.unsplash.com/photo-1581833971358-2c8b550f87b3?w=400", 
      description: "Eye-catching poster design for tech conference"
    }
  ];

  return (
    <div className="max-w-4xl mx-auto">
      <h3 className="text-2xl font-bold text-slate-800 mb-6 text-center">
        Design Portfolio Showcase
      </h3>
      
      <div className="grid md:grid-cols-3 gap-6">
        {designs.map((design, index) => (
          <div key={index} className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
            <div className="relative overflow-hidden">
              <img
                src={design.image}
                alt={design.title}
                className="w-full h-48 object-cover transition-transform duration-300 hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300">
                <div className="absolute bottom-4 left-4 text-white">
                  <p className="text-sm font-medium">View Details</p>
                </div>
              </div>
            </div>
            
            <div className="p-4">
              <h4 className="font-bold text-slate-800 mb-2">{design.title}</h4>
              <p className="text-sm text-slate-600">{design.description}</p>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-8 p-6 bg-gradient-to-r from-purple-50 to-pink-50 rounded-xl">
        <h4 className="text-lg font-bold text-slate-800 mb-4">Design Process</h4>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
          <div className="text-center">
            <div className="w-12 h-12 bg-purple-600 text-white rounded-full flex items-center justify-center mx-auto mb-2 font-bold">
              1
            </div>
            <p className="text-sm font-medium text-slate-800">Research</p>
          </div>
          <div className="text-center">
            <div className="w-12 h-12 bg-blue-600 text-white rounded-full flex items-center justify-center mx-auto mb-2 font-bold">
              2
            </div>
            <p className="text-sm font-medium text-slate-800">Concept</p>
          </div>
          <div className="text-center">
            <div className="w-12 h-12 bg-green-600 text-white rounded-full flex items-center justify-center mx-auto mb-2 font-bold">
              3
            </div>
            <p className="text-sm font-medium text-slate-800">Design</p>
          </div>
          <div className="text-center">
            <div className="w-12 h-12 bg-orange-600 text-white rounded-full flex items-center justify-center mx-auto mb-2 font-bold">
              4
            </div>
            <p className="text-sm font-medium text-slate-800">Refine</p>
          </div>
        </div>
      </div>
    </div>
  );
};
