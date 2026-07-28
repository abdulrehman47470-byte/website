// Page components are bundled directly into the main chunk (see App.tsx), so
// navigating never waits on a separate JS fetch. The one thing that still
// needs warming ahead of a click is route-specific image bytes not already
// covered by index.html's global preloads — warming on pointer enter (mouse
// hover, fires well before click) and pointer down (mouse press or touch
// start, fires just before a tap completes) means the image is usually
// already in cache by the time React Router swaps the route in.
export const routePrefetchers: Record<string, () => void> = {
  '/book': () => {
    warmImage('/images/book/cover.avif');
  },
};

const warmedImages = new Set<string>();
function warmImage(src: string) {
  if (warmedImages.has(src)) return;
  warmedImages.add(src);
  const img = new Image();
  img.src = src;
}
