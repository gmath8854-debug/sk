import { animate } from 'animejs';

/**
 * Animate a flying product thumbnail from clicked card image directly into the Cart icon in the header!
 * Creates a luxury ecommerce delight effect.
 */
export const triggerFlyingCartAnimation = (imageElement) => {
  if (!imageElement || typeof window === 'undefined') return;

  const cartButton = document.querySelector('button[aria-label="View cart"]') || document.querySelector('.cart-header-icon');
  if (!cartButton) return;

  const imgRect = imageElement.getBoundingClientRect();
  const cartRect = cartButton.getBoundingClientRect();

  // Create floating cloned particle element
  // Start from bottom of card, zoom out to center, then fly smoothly into cart
  const initialWidth = Math.min(Math.max(imgRect.width * 0.55, 110), 140);
  const initialHeight = Math.min(Math.max(imgRect.height * 0.55, 110), 140);

  const startX = imgRect.left + (imgRect.width - initialWidth) / 2;
  const startY = imgRect.top + (imgRect.height - initialHeight) / 2;

  const targetX = cartRect.left + cartRect.width / 2 - initialWidth / 2;
  const targetY = cartRect.top + cartRect.height / 2 - initialHeight / 2;

  const flyer = document.createElement('div');
  flyer.style.position = 'fixed';
  flyer.style.top = `${startY}px`;
  flyer.style.left = `${startX}px`;
  flyer.style.width = `${initialWidth}px`;
  flyer.style.height = `${initialHeight}px`;
  flyer.style.zIndex = '40'; // Below header navbar (which is z-[100])
  flyer.style.pointerEvents = 'none';
  flyer.style.borderRadius = '18px';
  flyer.style.overflow = 'hidden';
  flyer.style.boxShadow = '0 16px 36px rgba(252, 60, 30, 0.5)';
  flyer.style.border = '3px solid #FC3C1E';
  flyer.style.backgroundColor = '#ffffff';

  const clonedImg = document.createElement('img');
  clonedImg.src = imageElement.src;
  clonedImg.style.width = '100%';
  clonedImg.style.height = '100%';
  clonedImg.style.objectFit = 'cover';
  flyer.appendChild(clonedImg);

  document.body.appendChild(flyer);

  const deltaX = targetX - startX;
  const deltaY = targetY - startY;

  try {
    // Stage 1: Zoom out & lift effect from bottom to center (scale from 1 -> 1.15 -> 0.75 -> 0.15)
    animate(flyer, {
      scale: [0.85, 1.2, 0.8, 0.18],
      translateX: [0, deltaX * 0.25, deltaX * 0.65, deltaX],
      translateY: [0, deltaY * 0.35, deltaY * 0.75, deltaY],
      rotateZ: [0, -6, 8, 0],
      opacity: [1, 1, 0.85, 0],
      duration: 850,
      ease: 'inOutCubic',
      onComplete: () => {
        if (flyer.parentNode) {
          flyer.parentNode.removeChild(flyer);
        }

        // Animate cart button bounce when item lands
        animate(cartButton, {
          scale: [1, 1.3, 1],
          duration: 350,
          ease: 'outBack'
        });
      }
    });
  } catch (e) {
    if (flyer.parentNode) flyer.parentNode.removeChild(flyer);
  }
};

