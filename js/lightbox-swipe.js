// === LIGHTBOX SWIPE TOUCH ===
(function () {
  const lightbox = document.getElementById('lightbox');
  const img = document.getElementById('lightbox-img');

  let touchStartX = 0;
  let touchDeltaX = 0;
  let isSwiping = false;

  lightbox.addEventListener('touchstart', e => {
    touchStartX = e.touches[0].clientX;
    touchDeltaX = 0;
    isSwiping = true;
    img.classList.add('swiping');
  }, { passive: true });

  lightbox.addEventListener('touchmove', e => {
    if (!isSwiping) return;
    touchDeltaX = e.touches[0].clientX - touchStartX;
    img.style.transform = `translateX(${touchDeltaX * 0.4}px)`;
  }, { passive: true });

  lightbox.addEventListener('touchend', () => {
    if (!isSwiping) return;
    isSwiping = false;
    img.classList.remove('swiping');
    img.style.transform = '';

    if (touchDeltaX < -60) {
      // Swipe gauche → image suivante
      currentIndex = (currentIndex + 1) % currentPhotos.length;
      updateLightbox();
    } else if (touchDeltaX > 60) {
      // Swipe droite → image précédente
      currentIndex = (currentIndex - 1 + currentPhotos.length) % currentPhotos.length;
      updateLightbox();
    }
  });
})();