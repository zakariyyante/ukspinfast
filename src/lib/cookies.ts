import Cookies from "js-cookie";

export const GCLID_COOKIE_NAME = "gclid";

export function setStoredGclid(value: string) {
  Cookies.set(GCLID_COOKIE_NAME, value, {
    expires: 30,
    secure: true,
    sameSite: "strict",
  });
}

export function getStoredGclid(): string | undefined {
  return Cookies.get(GCLID_COOKIE_NAME);
}

export function deleteStoredGclid() {
  Cookies.remove(GCLID_COOKIE_NAME);
}
