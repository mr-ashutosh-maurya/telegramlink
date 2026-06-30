import { useState, useMemo } from "react";

export default function usePagination(items, pageSize) {
  const [visibleCount, setVisibleCount] = useState(pageSize);

  const visibleItems = useMemo(() => items.slice(0, visibleCount), [items, visibleCount]);
  const hasMore = visibleCount < items.length;

  const loadMore = () => setVisibleCount((prev) => prev + pageSize);
  const reset = () => setVisibleCount(pageSize);

  return { visibleItems, hasMore, loadMore, reset };
}