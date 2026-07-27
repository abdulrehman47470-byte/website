import { useCallback, useEffect, useRef, useState } from 'react';
import { ChevronLeft, ChevronRight, Lock } from 'lucide-react';

export interface FlipBookPage {
  avif?: string;
  webp: string;
  jpg: string;
  alt: string;
}

interface BookFlipperProps {
  pages: FlipBookPage[];
  /** width / height, e.g. 1592 / 2060 */
  ratio: number;
  badgeLabel?: string;
}

const FLIP_DURATION = 700;

const BookFlipper = ({ pages, ratio, badgeLabel = 'Preview Only' }: BookFlipperProps) => {
  const [currentPage, setCurrentPage] = useState(0);
  const [turning, setTurning] = useState<{ index: number; dir: 'next' | 'prev' } | null>(null);
  const touchStartX = useRef<number | null>(null);
  const timeoutRef = useRef<number | null>(null);

  const total = pages.length;
  const canPrev = currentPage > 0;
  const canNext = currentPage < total - 1;

  useEffect(() => {
    return () => {
      if (timeoutRef.current) window.clearTimeout(timeoutRef.current);
    };
  }, []);

  const goNext = useCallback(() => {
    if (turning || !canNext) return;
    setTurning({ index: currentPage, dir: 'next' });
    timeoutRef.current = window.setTimeout(() => {
      setCurrentPage((p) => p + 1);
      setTurning(null);
    }, FLIP_DURATION);
  }, [turning, canNext, currentPage]);

  const goPrev = useCallback(() => {
    if (turning || !canPrev) return;
    setTurning({ index: currentPage - 1, dir: 'prev' });
    timeoutRef.current = window.setTimeout(() => {
      setCurrentPage((p) => p - 1);
      setTurning(null);
    }, FLIP_DURATION);
  }, [turning, canPrev, currentPage]);

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'ArrowRight') goNext();
    if (e.key === 'ArrowLeft') goPrev();
  };

  const handleTouchStart = (e: React.TouchEvent) => {
    touchStartX.current = e.touches[0].clientX;
  };

  const handleTouchEnd = (e: React.TouchEvent) => {
    if (touchStartX.current === null) return;
    const delta = e.changedTouches[0].clientX - touchStartX.current;
    if (Math.abs(delta) > 50) {
      if (delta < 0) goNext();
      else goPrev();
    }
    touchStartX.current = null;
  };

  return (
    <div className="w-full flex flex-col items-center select-none">
      <div className="relative w-full max-w-[480px] sm:max-w-[620px] md:max-w-[720px] lg:max-w-[820px]">
        {/* Ambient glow behind the book */}
        <div className="absolute -inset-8 bg-purple/10 blur-3xl rounded-full -z-10" aria-hidden="true" />

        <div className="flex items-center gap-3 sm:gap-5">
          {/* Prev button */}
          <button
            type="button"
            onClick={goPrev}
            disabled={!canPrev}
            aria-label="Previous page"
            className="flex-shrink-0 w-11 h-11 sm:w-14 sm:h-14 rounded-full bg-white border border-slate-100 shadow-lg flex items-center justify-center text-navy hover:bg-purple hover:text-white hover:-translate-x-0.5 transition-all disabled:opacity-25 disabled:pointer-events-none disabled:hover:translate-x-0"
          >
            <ChevronLeft className="w-5 h-5 sm:w-6 sm:h-6" strokeWidth={3} />
          </button>

          {/* Book stage */}
          <div
            role="group"
            aria-label="Table of contents preview"
            tabIndex={0}
            onKeyDown={handleKeyDown}
            onTouchStart={handleTouchStart}
            onTouchEnd={handleTouchEnd}
            className="relative flex-1 rounded-[1.75rem] sm:rounded-[2.25rem] shadow-2xl border-[8px] sm:border-[12px] border-white bg-white overflow-hidden outline-none focus-visible:ring-4 focus-visible:ring-purple/30"
            style={{ aspectRatio: `${ratio}`, perspective: '2400px' }}
          >
            {/* Protection badge */}
            <div className="absolute top-3 right-3 sm:top-4 sm:right-4 z-[999] flex items-center gap-1.5 bg-navy/90 backdrop-blur-sm text-white text-[9px] sm:text-xs font-black uppercase tracking-widest px-3 py-1.5 sm:px-4 sm:py-2 rounded-full shadow-lg pointer-events-none">
              <Lock className="w-3 h-3 sm:w-3.5 sm:h-3.5" strokeWidth={3} />
              {badgeLabel}
            </div>

            {/* Spine shadow (left gutter) */}
            <div
              className="absolute inset-y-0 left-0 w-[8%] z-[500] pointer-events-none"
              style={{ background: 'linear-gradient(to right, rgba(22,20,64,0.22), transparent)' }}
              aria-hidden="true"
            />

            {/* Right edge page-stack shading */}
            <div
              className="absolute inset-y-0 right-0 w-[3%] z-[500] pointer-events-none"
              style={{ background: 'linear-gradient(to left, rgba(22,20,64,0.15), transparent)' }}
              aria-hidden="true"
            />

            <div className="absolute inset-0" style={{ transformStyle: 'preserve-3d' }}>
              {pages.map((page, i) => {
                const isTurning = turning?.index === i;
                const restRotation = i < currentPage ? -180 : 0;
                const zIndex = isTurning
                  ? total + 10
                  : i < currentPage
                  ? i
                  : total - i;

                return (
                  <div
                    key={page.jpg}
                    className={
                      isTurning
                        ? turning!.dir === 'next'
                          ? 'book-page book-page--turn-next'
                          : 'book-page book-page--turn-prev'
                        : 'book-page'
                    }
                    style={{
                      zIndex,
                      transform: isTurning ? undefined : `rotateY(${restRotation}deg)`,
                    }}
                  >
                    <picture>
                      {page.avif && <source srcSet={page.avif} type="image/avif" />}
                      <source srcSet={page.webp} type="image/webp" />
                      <img
                        src={page.jpg}
                        alt={page.alt}
                        loading={i === 0 ? 'eager' : 'lazy'}
                        fetchPriority={i === 0 ? 'high' : undefined}
                        decoding="async"
                        draggable={false}
                        className="w-full h-full object-cover"
                      />
                    </picture>
                    {isTurning && (
                      <div
                        className={
                          turning!.dir === 'next'
                            ? 'book-page-shadow book-page-shadow--next'
                            : 'book-page-shadow book-page-shadow--prev'
                        }
                      />
                    )}
                  </div>
                );
              })}
            </div>

            {/* Invisible edge hit-zones for click-to-flip */}
            <button
              type="button"
              onClick={goPrev}
              aria-hidden="true"
              tabIndex={-1}
              disabled={!canPrev}
              className="absolute left-0 top-0 h-full w-[18%] z-[600] cursor-pointer disabled:cursor-default"
              style={{ background: 'transparent' }}
            />
            <button
              type="button"
              onClick={goNext}
              aria-hidden="true"
              tabIndex={-1}
              disabled={!canNext}
              className="absolute right-0 top-0 h-full w-[18%] z-[600] cursor-pointer disabled:cursor-default"
              style={{ background: 'transparent' }}
            />
          </div>

          {/* Next button */}
          <button
            type="button"
            onClick={goNext}
            disabled={!canNext}
            aria-label="Next page"
            className="flex-shrink-0 w-11 h-11 sm:w-14 sm:h-14 rounded-full bg-white border border-slate-100 shadow-lg flex items-center justify-center text-navy hover:bg-purple hover:text-white hover:translate-x-0.5 transition-all disabled:opacity-25 disabled:pointer-events-none disabled:hover:translate-x-0"
          >
            <ChevronRight className="w-5 h-5 sm:w-6 sm:h-6" strokeWidth={3} />
          </button>
        </div>
      </div>

      {/* Page indicator + dots */}
      <div className="mt-8 flex flex-col items-center gap-3">
        <p className="text-xs sm:text-sm font-black text-slate-400 uppercase tracking-[0.2em]">
          Table of Contents &middot; Page {currentPage + 1} of {total}
        </p>
        <div className="flex items-center gap-1.5">
          {pages.map((_, i) => (
            <span
              key={i}
              className={`h-1.5 rounded-full transition-all duration-300 ${
                i === currentPage ? 'w-6 bg-purple' : 'w-1.5 bg-slate-200'
              }`}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default BookFlipper;
