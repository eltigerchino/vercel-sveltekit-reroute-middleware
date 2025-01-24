import type { Reroute } from "@sveltejs/kit";

export const reroute: Reroute = ({ url }) => {
  if (url.pathname.endsWith('/about')) {
    return "/about";
  }

  if (url.pathname === "/wordle") {
    return "/sverdle";
  }
};
