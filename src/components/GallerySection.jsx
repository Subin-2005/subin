import { useState, useEffect, useCallback } from 'react'
import { Image as ImageIcon, Maximize2, X, ChevronLeft, ChevronRight, Calendar, Tag, Sparkles } from 'lucide-react'

export function GallerySection({ gallery }) {
  const [activeCategory, setActiveCategory] = useState('All')
  const [lightboxIndex, setLightboxIndex] = useState(null)

  if (!gallery || gallery.length === 0) return null

  // Extract unique categories
  const categories = ['All', ...Array.from(new Set(gallery.map((item) => item.category)))]

  // Filter gallery items by active category
  const filteredItems =
    activeCategory === 'All'
      ? gallery
      : gallery.filter((item) => item.category === activeCategory)

  // Lightbox handlers
  const handleOpenLightbox = (index) => {
    setLightboxIndex(index)
  }

  const handleCloseLightbox = () => {
    setLightboxIndex(null)
  }

  const handlePrevImage = useCallback(() => {
    if (lightboxIndex === null) return
    setLightboxIndex((prev) => (prev > 0 ? prev - 1 : filteredItems.length - 1))
  }, [lightboxIndex, filteredItems.length])

  const handleNextImage = useCallback(() => {
    if (lightboxIndex === null) return
    setLightboxIndex((prev) => (prev < filteredItems.length - 1 ? prev + 1 : 0))
  }, [lightboxIndex, filteredItems.length])

  // Keyboard navigation for lightbox (Escape, ArrowLeft, ArrowRight)
  useEffect(() => {
    if (lightboxIndex === null) return

    const handleKeyDown = (e) => {
      if (e.key === 'Escape') {
        handleCloseLightbox()
      } else if (e.key === 'ArrowLeft') {
        handlePrevImage()
      } else if (e.key === 'ArrowRight') {
        handleNextImage()
      }
    }

    window.addEventListener('keydown', handleKeyDown)
    return () => window.removeEventListener('keydown', handleKeyDown)
  }, [lightboxIndex, handlePrevImage, handleNextImage])

  const currentItem = lightboxIndex !== null ? filteredItems[lightboxIndex] : null

  return (
    <section id="gallery" className="content-section" aria-label="Photo and Project Gallery">
      <div className="section-sticky-header">
        <h2 className="section-title">
          <span className="section-title-num">05.</span>
          Gallery
        </h2>
      </div>

      {/* Category Filter Pills */}
      <div className="gallery-filter-bar" role="tablist" aria-label="Gallery category filters">
        {categories.map((category) => {
          const isActive = activeCategory === category
          const count =
            category === 'All'
              ? gallery.length
              : gallery.filter((item) => item.category === category).length

          return (
            <button
              key={category}
              type="button"
              role="tab"
              aria-selected={isActive}
              onClick={() => setActiveCategory(category)}
              className={`gallery-filter-btn ${isActive ? 'active' : ''}`}
            >
              <span>{category}</span>
              <span className="gallery-filter-count">{count}</span>
            </button>
          )
        })}
      </div>

      {/* Gallery Grid */}
      <div className="gallery-grid">
        {filteredItems.map((item, idx) => (
          <div
            key={item.id || idx}
            className="gallery-card card-interactive"
            onClick={() => handleOpenLightbox(idx)}
            role="button"
            tabIndex={0}
            aria-label={`View ${item.title}`}
            onKeyDown={(e) => {
              if (e.key === 'Enter' || e.key === ' ') {
                e.preventDefault()
                handleOpenLightbox(idx)
              }
            }}
          >
            <div className="gallery-thumbnail-wrapper">
              <img
                src={item.image}
                alt={item.title}
                className="gallery-image"
                loading="lazy"
              />
              <div className="gallery-overlay">
                <div className="gallery-overlay-badge">
                  <Maximize2 size={16} />
                  <span>Expand</span>
                </div>
              </div>

              {/* Category pill over image */}
              <div className="gallery-category-pill">
                <span>{item.category}</span>
              </div>
            </div>

            <div className="gallery-card-content">
              <div className="gallery-card-meta">
                <span className="gallery-date">
                  <Calendar size={12} style={{ color: 'var(--accent-teal)' }} />
                  <span>{item.date}</span>
                </span>
              </div>

              <h3 className="gallery-card-title">{item.title}</h3>
              <p className="gallery-card-caption">{item.caption}</p>

              {item.tags && item.tags.length > 0 && (
                <ul className="tech-tags-list" style={{ marginTop: '0.4rem' }}>
                  {item.tags.map((tag) => (
                    <li key={tag} className="tech-pill" style={{ fontSize: '0.6875rem', padding: '0.15rem 0.5rem' }}>
                      {tag}
                    </li>
                  ))}
                </ul>
              )}
            </div>
          </div>
        ))}
      </div>

      {/* Fullscreen Lightbox Modal */}
      {currentItem && (
        <div
          role="dialog"
          aria-modal="true"
          aria-label={currentItem.title}
          className="gallery-lightbox-backdrop"
          onClick={handleCloseLightbox}
        >
          <div
            className="gallery-lightbox-container"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Top Toolbar */}
            <div className="gallery-lightbox-header">
              <div className="gallery-lightbox-counter">
                <ImageIcon size={16} style={{ color: 'var(--accent-teal)' }} />
                <span>
                  {lightboxIndex + 1} / {filteredItems.length}
                </span>
                <span className="gallery-lightbox-badge">{currentItem.category}</span>
              </div>

              <button
                type="button"
                onClick={handleCloseLightbox}
                className="gallery-lightbox-close-btn"
                aria-label="Close gallery preview (Escape)"
                title="Close (Esc)"
              >
                <X size={20} />
              </button>
            </div>

            {/* Main Stage with Navigation */}
            <div className="gallery-lightbox-stage">
              {filteredItems.length > 1 && (
                <button
                  type="button"
                  onClick={handlePrevImage}
                  className="gallery-lightbox-nav-btn prev"
                  aria-label="Previous photo (Left Arrow)"
                  title="Previous (Left Arrow)"
                >
                  <ChevronLeft size={24} />
                </button>
              )}

              <div className="gallery-lightbox-media-wrapper">
                <img
                  src={currentItem.image}
                  alt={currentItem.title}
                  className="gallery-lightbox-img"
                />
              </div>

              {filteredItems.length > 1 && (
                <button
                  type="button"
                  onClick={handleNextImage}
                  className="gallery-lightbox-nav-btn next"
                  aria-label="Next photo (Right Arrow)"
                  title="Next (Right Arrow)"
                >
                  <ChevronRight size={24} />
                </button>
              )}
            </div>

            {/* Footer / Caption Details */}
            <div className="gallery-lightbox-footer">
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: '1rem', flexWrap: 'wrap' }}>
                <h3 className="gallery-lightbox-title">{currentItem.title}</h3>
                <span className="gallery-lightbox-date">
                  <Calendar size={13} style={{ color: 'var(--accent-teal)' }} />
                  <span>{currentItem.date}</span>
                </span>
              </div>

              <p className="gallery-lightbox-caption">{currentItem.caption}</p>

              {currentItem.tags && currentItem.tags.length > 0 && (
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.4rem', flexWrap: 'wrap', marginTop: '0.5rem' }}>
                  <Tag size={13} style={{ color: 'var(--text-muted)' }} />
                  {currentItem.tags.map((tag) => (
                    <span key={tag} className="tech-pill" style={{ fontSize: '0.6875rem' }}>
                      {tag}
                    </span>
                  ))}
                </div>
              )}
            </div>
          </div>
        </div>
      )}
    </section>
  )
}
