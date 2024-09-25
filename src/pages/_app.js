import "../styles/globals.css";
import { useEffect, useRef } from "react";
import { useRouter } from "next/router";

function MyApp({ Component, pageProps }) {
  const router = useRouter();
  const pixelLoadedRef = useRef(false);

  useEffect(() => {
    function loadPixel(siteId, pixelApiUrl) {
      const existingScript = document.querySelector(
        `script[src^="${pixelApiUrl}"]`
      );
      if (existingScript) {
        existingScript.remove();
      }

      const script = document.createElement("script");
      script.type = "text/javascript";
      script.src = `${pixelApiUrl}?siteId=${encodeURIComponent(
        siteId
      )}&path=${encodeURIComponent(router.asPath)}`;
      script.async = true;
      document.body.appendChild(script);
    }

    const siteId = "3c68908d-9af1-48fe-bccd-fa6cdfc4c3ba";
    const pixelApiUrl = "https://circle-pixel-project.vercel.app/api/pixel";

    if (!pixelLoadedRef.current) {
      loadPixel(siteId, pixelApiUrl);
      pixelLoadedRef.current = true;
    }

    // Set up event listener for route changes
    const handleRouteChange = (url) => {
      loadPixel(siteId, pixelApiUrl);
    };

    router.events.on("routeChangeComplete", handleRouteChange);

    return () => {
      router.events.off("routeChangeComplete", handleRouteChange);
    };
  }, [router]);

  return <Component {...pageProps} />;
}

export default MyApp;
