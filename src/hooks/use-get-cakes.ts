"use client";

import { useQuery } from "@tanstack/react-query";
import { getCakesClientService } from "@/lib/services/cakes-client.service";
import type { CakeLocale } from "@/lib/types/cake";

export function useGetCakes(locale: CakeLocale) {
  return useQuery({
    queryKey: ["cakes", locale],
    queryFn: () => getCakesClientService(locale),
    select: (res) => res.data ?? [],
  });
}
