import { ApiLandingPage, ApiPageBrand, mockLandingPages, mockPartners } from "./mockDev";

const API_URL = process.env.NEXT_PUBLIC_API_URL;
const ACCOUNT_ID = process.env.ACCOUNT_ID;

export async function getLandingPageData(): Promise<ApiLandingPage | null> {
  try {
    const res = await fetch(`${API_URL}/public/landing-pages/account/${ACCOUNT_ID}`);
    if (!res.ok) throw new Error("Failed to fetch landing page data");
    const data: ApiLandingPage[] = await res.json();
    const activePages = data.filter((p) => p.isActive);
    return activePages.find((p) => p.order === 1) || activePages[0] || null;
  } catch (error) {
    console.error("API Error (Landing Page):", error);
    return mockLandingPages.find((p) => p.isActive && p.order === 1) || null;
  }
}

export async function getPageBrands(landingPageId: string, isMobile: boolean, hasGclid: boolean): Promise<ApiPageBrand[]> {
  try {
    const res = await fetch(`${API_URL}/public/page-brands/landing-page/${landingPageId}`);
    if (!res.ok) throw new Error("Failed to fetch brands");
    const data: ApiPageBrand[] = await res.json();

    let filtered = data;
    if (isMobile && hasGclid) {
      const mobileBrands = data.filter((b) => b.isMobile);
      filtered = mobileBrands.length > 0 ? mobileBrands : data.filter((b) => !b.isMobile);
    } else {
      filtered = data.filter((b) => !b.isMobile);
    }

    return filtered.sort((a, b) => (a.order || 999) - (b.order || 999));
  } catch (error) {
    console.error("API Error (Brands):", error);
    // Fallback logic for mock data
    let filtered = mockPartners;
    if (isMobile && hasGclid) {
      const mobileBrands = mockPartners.filter((b) => b.isMobile);
      filtered = mobileBrands.length > 0 ? mobileBrands : mockPartners.filter((b) => !b.isMobile);
    } else {
      filtered = mockPartners.filter((b) => !b.isMobile);
    }
    return filtered.sort((a, b) => (a.order || 999) - (b.order || 999));
  }
}

export function getImageUrl(filename: string | null | undefined): string {
  if (!filename) return "/placeholder.svg";
  if (filename.startsWith("http")) return filename;
  if (filename.startsWith("/")) return filename;
  // According to the Next.js config rewrite rule, only for /images/:
  return `/images/${filename}`;
}
