import { useLayoutEffect } from "react";
import { useLocation } from "react-router-dom";

export default function ScrollToTop() {
  const { pathname, hash } = useLocation();

  useLayoutEffect(() => {
    const html = document.documentElement;
    const previousScrollBehavior = html.style.scrollBehavior;

    // Disable smooth scrolling during route navigation.
    html.style.scrollBehavior = "auto";

    if (hash) {
      const elementId = decodeURIComponent(hash.slice(1));

      const animationFrame = window.requestAnimationFrame(() => {
        const targetElement = document.getElementById(elementId);

        if (targetElement) {
          targetElement.scrollIntoView({
            behavior: "auto",
            block: "start",
          });
        } else {
          window.scrollTo(0, 0);
        }

        html.style.scrollBehavior = previousScrollBehavior;
      });

      return () => {
        window.cancelAnimationFrame(animationFrame);
        html.style.scrollBehavior = previousScrollBehavior;
      };
    }

    window.scrollTo(0, 0);

    const animationFrame = window.requestAnimationFrame(() => {
      html.style.scrollBehavior = previousScrollBehavior;
    });

    return () => {
      window.cancelAnimationFrame(animationFrame);
      html.style.scrollBehavior = previousScrollBehavior;
    };
  }, [pathname, hash]);

  return null;
}
