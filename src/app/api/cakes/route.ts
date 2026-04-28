import { NextRequest } from "next/server";
import { getCakesService } from "@/lib/services/cakes.service";
import type { CakeLocale } from "@/lib/types/cake";

export async function GET(request: NextRequest) {
  const locale = (request.nextUrl.searchParams.get("locale") ?? "en") as CakeLocale;

  if (locale !== "en" && locale !== "ar") {
    return Response.json({ data: null, error: "Invalid locale" }, { status: 400 });
  }

  const result = await getCakesService(locale);

  if (result.error) {
    return Response.json(result, { status: 500 });
  }

  return Response.json(result);
}
