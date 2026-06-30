import { useMemo } from "react";
import { CHANNELS, ALL } from "../utils/constants";

export default function useFilteredChannels(query, category, sort) {
  return useMemo(() => {
    const q = query.trim().toLowerCase();
    let list = CHANNELS.filter((c) => {
      const matchesCategory = category === ALL || c.category === category;
      const matchesQuery =
        !q ||
        c.name.toLowerCase().includes(q) ||
        c.description.toLowerCase().includes(q) ||
        c.category.toLowerCase().includes(q);
      return matchesCategory && matchesQuery;
    });

    if (sort === "members") {
      list = [...list].sort((a, b) => b.members - a.members);
    } else if (sort === "new") {
      list = [...list].sort((a, b) => a.addedDaysAgo - b.addedDaysAgo);
    } else {
      // trending: blend of size and recency
      list = [...list].sort((a, b) => b.members / (b.addedDaysAgo + 1) - a.members / (a.addedDaysAgo + 1));
    }
    return list;
  }, [query, category, sort]);
}