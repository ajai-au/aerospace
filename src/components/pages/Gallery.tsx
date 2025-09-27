import React, { useState } from 'react';
import { Play, ExternalLink, ZoomIn } from 'lucide-react';

export const Gallery: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [selectedItem, setSelectedItem] = useState<any>(null);

  const categories = [
    { id: 'all', label: 'All Products' },
    { id: 'commercial', label: 'Commercial' },
    { id: 'military', label: 'Military' },
    { id: 'recreational', label: 'Recreational' },
    { id: 'industrial', label: 'Industrial' },
  ];

  const galleryItems = [
    {
      id: 1,
      title: 'AeroDyne X1 Pro',
      category: 'commercial',
      type: 'image',
      image: 'https://images.pexels.com/photos/442587/pexels-photo-442587.jpeg',
      description: 'Professional-grade drone for aerial photography and surveying',
      specs: ['4K HDR Camera', '45min Flight Time', 'GPS Navigation', '10km Range'],
    },
    {
      id: 2,
      title: 'Stealth Recon Unit',
      category: 'military',
      type: 'image',
      image: 'https://images.pexels.com/photos/1034662/pexels-photo-1034662.jpeg',
      description: 'Advanced reconnaissance drone with stealth capabilities',
      specs: ['Night Vision', '2hr Flight Time', 'Silent Operation', '50km Range'],
    },
    {
      id: 3,
      title: 'Skybird Mini',
      category: 'recreational',
      type: 'image',
      image: 'https://images.pexels.com/photos/724921/pexels-photo-724921.jpeg',
      description: 'Compact drone perfect for beginners and casual flying',
      specs: ['1080p Camera', '25min Flight Time', 'Auto-stabilization', '2km Range'],
    },
    {
      id: 4,
      title: 'Industrial Titan',
      category: 'industrial',
      type: 'video',
      image: 'https://images.pexels.com/photos/3862132/pexels-photo-3862132.jpeg',
      videoUrl: '#',
      description: 'Heavy-duty drone for construction and inspection tasks',
      specs: ['Thermal Camera', '60min Flight Time', '15kg Payload', '20km Range'],
    },
    {
      id: 5,
      title: 'AeroDyne Swarm System',
      category: 'commercial',
      type: 'video',
      image: 'https://images.pexels.com/photos/2050718/pexels-photo-2050718.jpeg',
      videoUrl: '#',
      description: 'Coordinated drone swarm for large-scale operations',
      specs: ['AI Coordination', '8 Unit System', 'Real-time Sync', '100km Coverage'],
    },
    {
      id: 6,
      title: 'Rescue Angel',
      category: 'commercial',
      type: 'image',
      image: 'https://images.pexels.com/photos/1092730/pexels-photo-1092730.jpeg',
      description: 'Search and rescue drone with emergency response capabilities',
      specs: ['Medical Payload', '90min Flight Time', 'Weather Resistant', '30km Range'],
    },
  ];

  const filteredItems = selectedCategory === 'all' 
    ? galleryItems 
    : galleryItems.filter(item => item.category === selectedCategory);

  return (
    <div className="min-h-screen pt-16">
      {/* Header */}
      <section className="py-20 bg-gradient-to-r from-gray-900 via-black to-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            <span className="bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
              Drone Gallery
            </span>
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Explore our complete range of cutting-edge drone technology, from commercial solutions to military-grade systems.
          </p>
        </div>
      </section>

      {/* Category Filter */}
      <section className="py-8 bg-gray-50 dark:bg-gray-900 sticky top-16 z-40 border-b border-gray-200 dark:border-gray-700">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap justify-center gap-4">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setSelectedCategory(category.id)}
                className={`px-6 py-3 rounded-full font-medium transition-all duration-300 ${
                  selectedCategory === category.id
                    ? 'bg-gradient-to-r from-cyan-600 to-purple-600 text-white shadow-lg'
                    : 'bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 border border-gray-200 dark:border-gray-600'
                }`}
              >
                {category.label}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery Grid */}
      <section className="py-16 bg-gray-50 dark:bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredItems.map((item) => (
              <div
                key={item.id}
                className="group bg-white dark:bg-gray-800 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden border border-gray-200 dark:border-gray-700"
              >
                <div className="relative overflow-hidden">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  
                  {/* Overlay */}
                  <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                    <div className="flex space-x-4">
                      <button
                        onClick={() => setSelectedItem(item)}
                        className="p-3 bg-white/20 backdrop-blur-sm rounded-full text-white hover:bg-white/30 transition-all duration-200"
                      >
                        <ZoomIn className="h-6 w-6" />
                      </button>
                      {item.type === 'video' && (
                        <button className="p-3 bg-white/20 backdrop-blur-sm rounded-full text-white hover:bg-white/30 transition-all duration-200">
                          <Play className="h-6 w-6" />
                        </button>
                      )}
                      <button className="p-3 bg-white/20 backdrop-blur-sm rounded-full text-white hover:bg-white/30 transition-all duration-200">
                        <ExternalLink className="h-6 w-6" />
                      </button>
                    </div>
                  </div>

                  {/* Type Badge */}
                  <div className="absolute top-4 right-4">
                    <span className={`px-3 py-1 rounded-full text-xs font-medium ${
                      item.type === 'video' 
                        ? 'bg-red-500/80 text-white' 
                        : 'bg-blue-500/80 text-white'
                    }`}>
                      {item.type === 'video' ? 'Video' : 'Image'}
                    </span>
                  </div>
                </div>

                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
                    {item.title}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-400 mb-4">
                    {item.description}
                  </p>
                  
                  {/* Specifications */}
                  <div className="grid grid-cols-2 gap-2">
                    {item.specs.map((spec, index) => (
                      <div key={index} className="text-sm text-cyan-600 dark:text-cyan-400 bg-cyan-50 dark:bg-cyan-900/20 px-2 py-1 rounded">
                        {spec}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Modal */}
      {selectedItem && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm">
          <div className="max-w-4xl max-h-[90vh] mx-4 bg-white dark:bg-gray-800 rounded-2xl overflow-hidden">
            <div className="relative">
              <img
                src={selectedItem.image}
                alt={selectedItem.title}
                className="w-full h-96 object-cover"
              />
              <button
                onClick={() => setSelectedItem(null)}
                className="absolute top-4 right-4 p-2 bg-black/50 rounded-full text-white hover:bg-black/70 transition-all duration-200"
              >
                ✕
              </button>
            </div>
            <div className="p-6">
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">
                {selectedItem.title}
              </h3>
              <p className="text-gray-600 dark:text-gray-400 mb-4">
                {selectedItem.description}
              </p>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-2">
                {selectedItem.specs.map((spec: string, index: number) => (
                  <div key={index} className="text-sm text-cyan-600 dark:text-cyan-400 bg-cyan-50 dark:bg-cyan-900/20 px-3 py-2 rounded text-center">
                    {spec}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};