"use client";

import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { useState, type ReactNode } from "react";

export function QueryProvider({ children }: { children: ReactNode }) {
  // State — one QueryClient per browser session, created lazily
  const [client] = useState(
    () =>
      new QueryClient({
        defaultOptions: {
          queries: {
            staleTime: 1000 * 60 * 10,  // 10 min — serve from cache before re-fetching
            gcTime: 1000 * 60 * 60,      // 60 min — keep entry after component unmounts
            refetchOnWindowFocus: false,  // no silent re-fetch when tab regains focus
            retry: 2,
          },
        },
      }),
  );

  return <QueryClientProvider client={client}>{children}</QueryClientProvider>;
}
