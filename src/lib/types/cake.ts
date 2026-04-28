export type CakeLocale = "en" | "ar";

export interface Cake {
  ID: number;
  Name: string;
  Description: string;
  Image: string;
  Price: string;
  NewPrice: string;
}

export interface ApiResponse<T> {
  data: T | null;
  error: string | null;
}
