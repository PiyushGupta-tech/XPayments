import { useEffect, useRef, useState } from "react";

export function useScrollReveal(
  threshold = 0.15,
  rootMargin = "0px 0px -40px 0px",
  initialVisible = false
) {
  const ref = useRef<HTMLDivElement>(null);
  const [isInView, setIsInView] = useState(initialVisible);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => setIsInView(entry.isIntersecting),
      { threshold, rootMargin }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, [threshold, rootMargin]);

  return { ref, isInView };
}
