import { useEffect, useRef } from "react";

export default function useInfiniteScroll({ hasMore, loading, loadMore }) {
  const loaderRef = useRef(null);
  const observerRef = useRef(null);

  useEffect(() => {
    if (!loaderRef.current || !hasMore) return;
    if (observerRef.current) observerRef.current.disconnect();

    observerRef.current = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting && !loading) {
          loadMore();
        }
      },
      { threshold: 1 }
    );

    observerRef.current.observe(loaderRef.current);

    return () => observerRef.current.disconnect();
  }, [loaderRef, hasMore, loading]);

  return loaderRef;
}
