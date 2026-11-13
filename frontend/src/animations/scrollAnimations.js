import { animate } from 'animejs';

/**
 * Scroll reveal animations using IntersectionObserver + Anime.js v4
 * Adds high-end agency feel to section entrances across the site.
 */
export const initScrollReveal = (selector = '.reveal-on-scroll', options = {}) => {
  if (typeof window === 'undefined' || !('IntersectionObserver' in window)) return;

  const elements = document.querySelectorAll(selector);
  if (!elements.length) return;

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const target = entry.target;
          const animationType = target.dataset.reveal || 'fadeUp';

          if (animationType === 'fadeUp') {
            animate(target, {
              opacity: [0, 1],
              translateY: [24, 0],
              duration: 650,
              ease: 'outCubic',
              delay: Number(target.dataset.delay) || 0
            });
          } else if (animationType === 'staggerChildren') {
            const children = target.querySelectorAll('.reveal-child');
            if (children.length) {
              animate(children, {
                opacity: [0, 1],
                translateY: [20, 0],
                delay: (el, i) => i * 60,
                duration: 500,
                ease: 'outCubic'
              });
            }
          }

          observer.unobserve(target);
        }
      });
    },
    {
      threshold: options.threshold || 0.15,
      rootMargin: options.rootMargin || '0px 0px -40px 0px'
    }
  );

  elements.forEach((el) => observer.observe(el));

  return () => {
    elements.forEach((el) => observer.unobserve(el));
    observer.disconnect();
  };
};

