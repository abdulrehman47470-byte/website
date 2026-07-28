// Nav links across the site fire navigation on click alone, so without this
// a route's lazy JS chunk (and any image inside it) doesn't start
// downloading until the click has already happened — the gap users perceive
// as page-open delay. Warming on pointer enter (mouse hover, fires well
// before click) and pointer down (mouse press or touch start, fires just
// before a tap completes) means the chunk — and the one hero image not
// already covered by index.html's global preloads — is usually already in
// cache by the time React Router actually swaps the route in.
export const routePrefetchers: Record<string, () => void> = {
  '/about': () => {
    import('../pages/About');
  },
  '/book': () => {
    import('../pages/Book');
    warmImage('/images/book/cover.avif');
  },
  '/contact': () => {
    import('../pages/Contact');
  },
  '/help': () => {
    import('../pages/HelpCenter');
  },
  '/faq': () => {
    import('../pages/FAQ');
  },
  '/privacy': () => {
    import('../pages/PrivacyPolicy');
  },
  '/terms': () => {
    import('../pages/TermsOfService');
  },
};

const warmedImages = new Set<string>();
function warmImage(src: string) {
  if (warmedImages.has(src)) return;
  warmedImages.add(src);
  const img = new Image();
  img.src = src;
}
