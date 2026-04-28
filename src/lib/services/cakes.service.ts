import type { ApiResponse, Cake, CakeLocale } from "@/lib/types/cake";

const FIREBASE_BASE = "https://dodossweets-users-default-rtdb.firebaseio.com/cake";

/* Server-side fetch — called only inside Route Handlers or Server Components */
export async function getCakesService(locale: CakeLocale): Promise<ApiResponse<Cake[]>> {
  try {
    const res = await fetch(`${FIREBASE_BASE}/${locale}.json`, {
      next: { revalidate: 60 * 10 }, // ISR: revalidate every 10 minutes
    });

    if (!res.ok) {
      return { data: null, error: `Firebase responded with ${res.status}` };
    }

    const raw: unknown = await res.json();

    // Firebase may return a keyed object or a sparse array — normalise to Cake[]
    const cakes: Cake[] = Array.isArray(raw)
      ? (raw.filter(Boolean) as Cake[])
      : Object.values(raw as Record<string, Cake>);

    return { data: cakes, error: null };
  } catch (err) {
    return {
      data: null,
      error: err instanceof Error ? err.message : "Unknown error",
    };
  }
}
