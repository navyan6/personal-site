export async function register() {
  // Cursor/Node can inject a broken localStorage (--localstorage-file without valid path).
  // Next.js (e.g. font optimization) may call localStorage during SSR; ensure it's a valid stub.
  if (typeof window === "undefined") {
    const g = globalThis as typeof globalThis & { localStorage?: Storage };
    if (g.localStorage && typeof g.localStorage.getItem !== "function") {
      g.localStorage = {
        getItem: () => null,
        setItem: () => {},
        removeItem: () => {},
        clear: () => {},
        get length() {
          return 0;
        },
        key: () => null,
      } as Storage;
    }
  }
}
