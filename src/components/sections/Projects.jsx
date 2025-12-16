// ==================== PROJECTS.JSX (100% Working – Fixed Import) ====================
import { useState, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';
import { ChevronLeft, ChevronRight } from 'lucide-react';  // ← Correct import
import Section from '../ui/Section';
import { projects } from '../../data/projects';

const PROJECTS_PER_PAGE = 6;

const Projects = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [currentPage, setCurrentPage] = useState(1);

  const categories = ['all', 'frontend', 'backend', 'fullstack'];

  const filteredProjects = useMemo(() => {
    if (selectedCategory === 'all') return projects;
    return projects.filter(p => p.category.toLowerCase() === selectedCategory);
  }, [selectedCategory]);

  const totalPages = Math.ceil(filteredProjects.length / PROJECTS_PER_PAGE);
  const startIndex = (currentPage - 1) * PROJECTS_PER_PAGE;
  const displayedProjects = filteredProjects.slice(startIndex, startIndex + PROJECTS_PER_PAGE);

  const handlePageChange = (page) => {
    setCurrentPage(page);
    window.scrollTo({ top: 500, behavior: 'smooth' });
  };

  const getPageNumbers = () => {
    const pages = [];
    if (totalPages <= 7) {
      for (let i = 1; i <= totalPages; i++) pages.push(i);
    } else {
      if (currentPage <= 4) {
        pages.push(1, 2, 3, 4, 5, '...', totalPages);
      } else if (currentPage >= totalPages - 3) {
        pages.push(1, '...', totalPages - 4, totalPages - 3, totalPages - 2, totalPages - 1, totalPages);
      } else {
        pages.push(1, '...', currentPage - 1, currentPage, currentPage + 1, '...', totalPages);
      }
    }
    return pages;
  };

  return (
    <Section id="projects" title="Featured Projects" subtitle="Some of my favorite work — built with passion and precision">
      {/* Category Filter */}
      <div className="flex flex-wrap justify-center gap-4 mb-12 ">
        {categories.map(cat => (
          <button
            key={cat}
            onClick={() => {
              setSelectedCategory(cat);
              setCurrentPage(1);
            }}
            className={`px-8 py-3 rounded-full font-medium capitalize transition-all duration-300 backdrop-blur-xl border
              ${selectedCategory === cat
                ? 'bg-gradient-to-r from-violet-600 to-blue-600 text-white shadow-lg shadow-purple-500/25 border-transparent'
                : 'bg-white/5 border-white/10 text-gray-300 hover:bg-white/10 hover:border-white/20'
              }`}
          >
            {cat === 'all' ? 'All Projects' : cat}
          </button>
        ))}
      </div>

      {/* Projects Grid */}
      <motion.div layout className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 ">
        <AnimatePresence mode="popLayout">
          {displayedProjects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              transition={{ duration: 0.5, delay: index * 0.05 }}
              className="group relative overflow-hidden rounded-2xl backdrop-blur-xl bg-white/5 border border-white/10 hover:bg-white/10 hover:border-white/20 transition-all duration-500"
            >
              {/* Image + Hover Links */}
              <div className="relative h-56 overflow-hidden">
                <img
                  src={project.image || '/placeholder.jpg'}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                <div className="absolute inset-0 flex items-center justify-center gap-6 opacity-0 group-hover:opacity-100 transition-opacity">
                  <a href={project.link} target="_blank" rel="noopener noreferrer" className="p-4 bg-black/60 backdrop-blur-md rounded-full hover:bg-black/80 transition">
                    <FaGithub className="w-6 h-6 text-white" />
                  </a>
                  {project.demo && (
                    <a href={project.demo} target="_blank" rel="noopener noreferrer" className="p-4 bg-black/60 backdrop-blur-md rounded-full hover:bg-black/80 transition">
                      <FaExternalLinkAlt className="w-6 h-6 text-white" />
                    </a>
                  )}
                </div>
              </div>

              {/* Content */}
              <div className="p-6 space-y-4">
                <h3 className="text-2xl font-bold text-white group-hover:text-blue-400 transition-colors">
                  {project.title}
                </h3>
                <p className="text-gray-400 line-clamp-2">{project.description}</p>

                <div className="flex flex-wrap gap-2">
                  {project.tags.map(tag => (
                    <span key={tag} className="px-3 py-1 text-xs font-medium bg-gradient-to-r from-blue-500/20 to-purple-500/20 border border-white/10 rounded-full text-gray-200">
                      {tag}
                    </span>
                  ))}
                </div>

                <div className="hidden sm:flex items-center justify-between pt-4 border-t border-white/10">
                  <a href={project.link} className="text-sm text-blue-400 hover:text-blue-300 flex items-center gap-2">
                    <FaGithub /> Code
                  </a>
                  {project.demo && (
                    <a href={project.demo} className="text-sm text-blue-400 hover:text-blue-300 flex items-center gap-2">
                      <FaExternalLinkAlt /> Live Demo
                    </a>
                  )}
                </div>
              </div>

              <div className="pointer-events-none absolute -inset-1 bg-gradient-to-r from-blue-600/10 to-purple-600/10 opacity-0 group-hover:opacity-100 blur-xl transition duration-700 -z-10" />
            </motion.div>
          ))}
        </AnimatePresence>
      </motion.div>

      {/* Beautiful Pagination – Exactly Like Your Screenshot */}
      {totalPages > 1 && (
        <div className="flex items-center justify-center gap-3 mt-16">
          <button
            onClick={() => handlePageChange(currentPage - 1)}
            disabled={currentPage === 1}
            className={`p-2.5 rounded-full transition ${currentPage === 1 ? 'text-gray-600' : 'text-gray-400 hover:text-white hover:bg-white/10'}`}
          >
            <ChevronLeft size={20} />
          </button>

          {getPageNumbers().map((page, idx) =>
            page === '...' ? (
              <span key={idx} className="px-3 text-gray-500">...</span>
            ) : (
              <motion.button
                key={page}
                onClick={() => handlePageChange(page)}
                className="relative w-11 h-11 rounded-full font-medium"
                whileHover={{ scale: 1.15 }}
                whileTap={{ scale: 0.95 }}
              >
                {currentPage === page && (
                  <motion.div
                    layoutId="activePaginationCircle"
                    className="absolute inset-0 rounded-full bg-gradient-to-r from-blue-500 to-purple-600 shadow-lg shadow-blue-500/40"
                  />
                )}
                <span className={`relative z-10 ${currentPage === page ? 'text-white' : 'text-gray-400'}`}>
                  {page}
                </span>
              </motion.button>
            )
          )}

          <button
            onClick={() => handlePageChange(currentPage + 1)}
            disabled={currentPage === totalPages}
            className={`p-2.5 rounded-full transition ${currentPage === totalPages ? 'text-gray-600' : 'text-gray-400 hover:text-white hover:bg-white/10'}`}
          >
            <ChevronRight size={20} />
          </button>
        </div>
      )}
    </Section>
  );
};

export default Projects;