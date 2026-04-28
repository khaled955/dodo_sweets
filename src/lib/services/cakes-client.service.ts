import type { ApiResponse, Cake, CakeLocale } from "@/lib/types/cake";

/* Client-side fetch — hits the internal Next.js Route Handler */
export async function getCakesClientService(locale: CakeLocale): Promise<ApiResponse<Cake[]>> {
  const res = await fetch(`/api/cakes?locale=${locale}`);

  if (!res.ok) {
    return { data: null, error: `Request failed with ${res.status}` };
  }

  return res.json() as Promise<ApiResponse<Cake[]>>;
}
