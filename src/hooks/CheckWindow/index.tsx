import { useEffect, useState } from "react";

function useIsMobile(query = "(max-width: 767px)") {
  const [isMobile, setIsMobile] = useState(false);
  useEffect(() => {
    const mql = window.matchMedia(query);
    const onChange = (e: MediaQueryListEvent | MediaQueryList) =>
      setIsMobile("matches" in e ? e.matches : (e as MediaQueryList).matches);

    // initial
    setIsMobile(mql.matches);

    // listener
    try {
      mql.addEventListener("change", onChange as any);
      return () => mql.removeEventListener("change", onChange as any);
    } catch {
      // Safari fallback
      mql.addListener(onChange as any);
      return () => mql.removeListener(onChange as any);
    }
  }, [query]);

  return isMobile;
}

export default useIsMobile;