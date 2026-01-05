"use client";

import { useEffect } from "react";
import { usePathname, useSearchParams } from "next/navigation";
import NProgress from "nprogress";
import "nprogress/nprogress.css";
import "../app/nprogress.css";

// Configure NProgress
NProgress.configure({
  showSpinner: false,
  trickleSpeed: 200,
  minimum: 0.08,
  easing: 'ease',
  speed: 500,
});

export default function ProgressBar() {
  const pathname = usePathname();
  const searchParams = useSearchParams();

  // Complete progress when route changes
  useEffect(() => {
    NProgress.done();
  }, [pathname, searchParams]);

  // Setup click listener for navigation
  useEffect(() => {
    const handleClick = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      const anchor = target.closest("a");

      if (!anchor) return;

      const href = anchor.getAttribute("href");
      if (!href) return;

      // Skip hash links, external links, and modified clicks
      if (href.startsWith("#")) return;
      if (href.startsWith("http://") || href.startsWith("https://")) return;
      if (href.startsWith("mailto:") || href.startsWith("tel:")) return;
      if (anchor.hasAttribute("target")) return;
      if (e.metaKey || e.ctrlKey || e.shiftKey || e.altKey) return;
      if (e.defaultPrevented) return;

      // Start progress for internal navigation
      if (href.startsWith("/")) {
        // Skip if clicking on the current page
        if (href === pathname) return;

        NProgress.start();
      }
    };

    document.addEventListener("click", handleClick, true);

    return () => {
      document.removeEventListener("click", handleClick, true);
    };
  }, [pathname]);

  return null;
}
