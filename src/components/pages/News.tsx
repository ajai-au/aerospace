import React, { useState, useEffect } from 'react';
import { Calendar, User, Tag, Search, Filter, Plus, CreditCard as Edit, Trash2, Eye } from 'lucide-react';
import { supabase, BlogPost } from '../../lib/supabase';

export const News: React.FC = () => {
  const [posts, setPosts] = useState<BlogPost[]>([]);
  const [loading, setLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [isAdmin, setIsAdmin] = useState(false);
  const [showAdminPanel, setShowAdminPanel] = useState(false);
  const [editingPost, setEditingPost] = useState<BlogPost | null>(null);

  const categories = ['all', 'technology', 'industry', 'updates', 'tutorials', 'announcements'];

  // Mock data for demo purposes (replace with actual Supabase queries when database is set up)
  const mockPosts: BlogPost[] = [
    {
      id: '1',
      title: 'Revolutionary AI Flight Control System Launched',
      content: 'We are excited to announce the launch of our new AI-powered flight control system that enhances drone stability and autonomous navigation capabilities. This groundbreaking technology represents years of research and development, bringing unprecedented precision to commercial drone operations...',
      excerpt: 'New AI flight control system enhances drone stability and autonomous navigation capabilities.',
      image_url: 'https://images.pexels.com/photos/2050718/pexels-photo-2050718.jpeg',
      author: 'Dr. Sarah Chen',
      category: 'technology',
      tags: ['AI', 'Flight Control', 'Innovation'],
      published: true,
      created_at: '2025-01-08',
      updated_at: '2025-01-08'
    },
    {
      id: '2',
      title: 'AeroDyne Expands to European Markets',
      content: 'We\'re thrilled to announce our expansion into the European market with new offices in London, Berlin, and Paris. This strategic move allows us to better serve our European clients and partners while maintaining our commitment to excellence in drone technology and support services...',
      excerpt: 'New offices in London, Berlin, and Paris mark our European expansion.',
      image_url: 'https://images.pexels.com/photos/442587/pexels-photo-442587.jpeg',
      author: 'Michael Rodriguez',
      category: 'announcements',
      tags: ['Expansion', 'Europe', 'Business'],
      published: true,
      created_at: '2025-01-05',
      updated_at: '2025-01-05'
    },
    {
      id: '3',
      title: 'Drone Maintenance Best Practices Guide',
      content: 'Proper maintenance is crucial for optimal drone performance and longevity. In this comprehensive guide, we cover everything from pre-flight checks to seasonal storage recommendations. Learn how to keep your AeroDyne drone in peak condition with these expert tips and techniques...',
      excerpt: 'Essential maintenance tips to keep your drone in peak condition.',
      image_url: 'https://images.pexels.com/photos/724921/pexels-photo-724921.jpeg',
      author: 'James Wilson',
      category: 'tutorials',
      tags: ['Maintenance', 'Tips', 'Guide'],
      published: true,
      created_at: '2025-01-03',
      updated_at: '2025-01-03'
    },
    {
      id: '4',
      title: 'Industry Report: Commercial Drone Market 2025',
      content: 'The commercial drone industry continues to grow at an unprecedented rate. Our latest industry report reveals key trends, market opportunities, and technological advances that are shaping the future of unmanned aerial systems across various sectors...',
      excerpt: 'Latest industry trends and market insights for commercial drones in 2025.',
      image_url: 'https://images.pexels.com/photos/1034662/pexels-photo-1034662.jpeg',
      author: 'Lisa Park',
      category: 'industry',
      tags: ['Market Report', 'Industry', 'Trends'],
      published: true,
      created_at: '2025-01-01',
      updated_at: '2025-01-01'
    }
  ];

  useEffect(() => {
    // For demo purposes, use mock data
    // In production, this would fetch from Supabase
    setTimeout(() => {
      setPosts(mockPosts);
      setLoading(false);
    }, 1000);
  }, []);

  const filteredPosts = posts.filter(post => {
    const matchesSearch = post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         post.excerpt.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         post.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase()));
    const matchesCategory = selectedCategory === 'all' || post.category === selectedCategory;
    return matchesSearch && matchesCategory && post.published;
  });

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  };

  if (loading) {
    return (
      <div className="min-h-screen pt-16 bg-gray-50 dark:bg-gray-900 flex items-center justify-center">
        <div className="text-center">
          <div className="w-12 h-12 border-4 border-cyan-400 border-t-transparent rounded-full animate-spin mx-auto mb-4"></div>
          <p className="text-gray-600 dark:text-gray-400">Loading articles...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen pt-16">
      {/* Header */}
      <section className="py-20 bg-gradient-to-r from-gray-900 via-black to-gray-900">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            <span className="bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
              News & Updates
            </span>
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
            Stay informed with the latest drone technology news, industry insights, and company updates.
          </p>
          
          {/* Admin Panel Toggle */}
          <button
            onClick={() => setShowAdminPanel(!showAdminPanel)}
            className="inline-flex items-center px-4 py-2 bg-purple-600/20 border border-purple-400/30 rounded-full text-purple-400 hover:bg-purple-600/30 transition-all duration-200"
          >
            <Plus className="h-4 w-4 mr-2" />
            Admin Panel
          </button>
        </div>
      </section>

      {/* Search and Filter */}
      <section className="py-8 bg-gray-50 dark:bg-gray-900 sticky top-16 z-40 border-b border-gray-200 dark:border-gray-700">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row gap-4 justify-between items-center">
            {/* Search */}
            <div className="relative flex-1 max-w-md">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
              <input
                type="text"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                placeholder="Search articles..."
                className="w-full pl-10 pr-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-800 text-gray-900 dark:text-white focus:ring-2 focus:ring-cyan-400 focus:border-transparent"
              />
            </div>

            {/* Category Filter */}
            <div className="flex flex-wrap gap-2">
              {categories.map((category) => (
                <button
                  key={category}
                  onClick={() => setSelectedCategory(category)}
                  className={`px-4 py-2 rounded-full font-medium transition-all duration-200 capitalize ${
                    selectedCategory === category
                      ? 'bg-gradient-to-r from-cyan-600 to-purple-600 text-white'
                      : 'bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-300 border border-gray-200 dark:border-gray-600 hover:bg-gray-100 dark:hover:bg-gray-700'
                  }`}
                >
                  {category === 'all' ? 'All' : category}
                </button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Admin Panel */}
      {showAdminPanel && (
        <section className="py-8 bg-purple-50 dark:bg-purple-900/20 border-b border-purple-200 dark:border-purple-800">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="bg-white dark:bg-gray-800 rounded-lg p-6 shadow-lg border border-purple-200 dark:border-purple-700">
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">Content Management</h3>
              <div className="flex flex-wrap gap-4">
                <button className="inline-flex items-center px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors duration-200">
                  <Plus className="h-4 w-4 mr-2" />
                  New Article
                </button>
                <button className="inline-flex items-center px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors duration-200">
                  <Filter className="h-4 w-4 mr-2" />
                  Manage Categories
                </button>
                <button className="inline-flex items-center px-4 py-2 bg-purple-600 text-white rounded-lg hover:bg-purple-700 transition-colors duration-200">
                  <Eye className="h-4 w-4 mr-2" />
                  Draft Articles
                </button>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* Articles Grid */}
      <section className="py-16 bg-gray-50 dark:bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {filteredPosts.length === 0 ? (
            <div className="text-center py-16">
              <p className="text-xl text-gray-600 dark:text-gray-400 mb-4">No articles found</p>
              <p className="text-gray-500 dark:text-gray-500">Try adjusting your search criteria</p>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredPosts.map((post) => (
                <article
                  key={post.id}
                  className="group bg-white dark:bg-gray-800 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden border border-gray-200 dark:border-gray-700"
                >
                  {/* Image */}
                  <div className="relative overflow-hidden">
                    <img
                      src={post.image_url || 'https://images.pexels.com/photos/442587/pexels-photo-442587.jpeg'}
                      alt={post.title}
                      className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    <div className="absolute top-4 left-4">
                      <span className="px-3 py-1 bg-cyan-600/80 text-white text-xs font-medium rounded-full capitalize">
                        {post.category}
                      </span>
                    </div>
                    {showAdminPanel && (
                      <div className="absolute top-4 right-4 flex space-x-2">
                        <button className="p-2 bg-blue-600/80 text-white rounded-full hover:bg-blue-700/80 transition-colors duration-200">
                          <Edit className="h-4 w-4" />
                        </button>
                        <button className="p-2 bg-red-600/80 text-white rounded-full hover:bg-red-700/80 transition-colors duration-200">
                          <Trash2 className="h-4 w-4" />
                        </button>
                      </div>
                    )}
                  </div>

                  {/* Content */}
                  <div className="p-6">
                    {/* Meta */}
                    <div className="flex items-center text-sm text-gray-500 dark:text-gray-400 mb-3">
                      <Calendar className="h-4 w-4 mr-1" />
                      <span className="mr-4">{formatDate(post.created_at)}</span>
                      <User className="h-4 w-4 mr-1" />
                      <span>{post.author}</span>
                    </div>

                    {/* Title */}
                    <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3 group-hover:text-cyan-600 dark:group-hover:text-cyan-400 transition-colors duration-200">
                      {post.title}
                    </h3>

                    {/* Excerpt */}
                    <p className="text-gray-600 dark:text-gray-300 mb-4 line-clamp-3">
                      {post.excerpt}
                    </p>

                    {/* Tags */}
                    <div className="flex flex-wrap gap-2 mb-4">
                      {post.tags.slice(0, 3).map((tag, index) => (
                        <span
                          key={index}
                          className="inline-flex items-center px-2 py-1 bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 text-xs rounded-full"
                        >
                          <Tag className="h-3 w-3 mr-1" />
                          {tag}
                        </span>
                      ))}
                    </div>

                    {/* Read More */}
                    <button className="text-cyan-600 dark:text-cyan-400 font-medium hover:text-cyan-700 dark:hover:text-cyan-300 transition-colors duration-200">
                      Read more →
                    </button>
                  </div>
                </article>
              ))}
            </div>
          )}

          {/* Load More */}
          {filteredPosts.length > 0 && (
            <div className="text-center mt-12">
              <button className="px-8 py-3 bg-gradient-to-r from-cyan-600 to-purple-600 text-white rounded-full font-semibold hover:shadow-lg transition-all duration-300">
                Load More Articles
              </button>
            </div>
          )}
        </div>
      </section>
    </div>
  );
};