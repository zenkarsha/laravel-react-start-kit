import { useEffect, useRef } from "react";

interface UseInfiniteScrollProps {
    hasMore: boolean;
    loading: boolean;
    loadMore: () => void;
}

export default function useInfiniteScroll({
    hasMore,
    loading,
    loadMore,
}: UseInfiniteScrollProps) {
    const loaderRef = useRef<HTMLDivElement>(null);
    const observerRef = useRef<IntersectionObserver | null>(null);

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

        return () => {
            if (observerRef.current) {
                observerRef.current.disconnect();
            }
        };
    }, [loaderRef, hasMore, loading, loadMore]);

    return loaderRef;
}
