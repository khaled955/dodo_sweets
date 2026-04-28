/*
  NOTE: This file should not exist alongside app/page.tsx.
  Both files resolve to "/" causing a route conflict.
  The home page is handled exclusively by app/page.tsx.
  Safe to delete this file.
*/
import { notFound } from "next/navigation";

export default function WebsiteRootPage() {
  notFound();
}
