const pixelConfig = {
  siteId: "7ec7ead1-c21a-4eab-beb8-35d75e28425e",
  pixelApiUrl: "https://circle-pixel-project.vercel.app/api/pixel",
};
function injectPixel() {
  if (typeof window === "undefined") return;

  const script = document.createElement("script");
  script.type = "text/javascript";
  script.async = true;
  script.src = `${pixelConfig.pixelApiUrl}?siteId=${encodeURIComponent(
    pixelConfig.siteId
  )}&path=${encodeURIComponent(
    window.location.pathname + window.location.search
  )}`;

  // Add a custom attribute to identify our script
  script.setAttribute("data-pixel-id", pixelConfig.siteId);

  // Remove only our existing pixel script
  const existingScript = document.querySelector(
    `script[data-pixel-id="${pixelConfig.siteId}"]`
  );
  if (existingScript) {
    existingScript.remove();
  }

  document.body.appendChild(script);
}

function updatePixelConfig(newConfig) {
  Object.assign(pixelConfig, newConfig);
}

function setupPixelInjection() {
  if (typeof window === "undefined") return;

  // Initial injection
  injectPixel();

  // Set up navigation event listeners
  window.addEventListener("popstate", injectPixel);
  window.addEventListener("hashchange", injectPixel);

  // For single-page applications using custom routing
  const originalPushState = history.pushState;
  history.pushState = function () {
    originalPushState.apply(this, arguments);
    injectPixel();
  };

  // Re-inject on tab focus
  window.addEventListener("focus", injectPixel);

  // For frameworks that have their own routing events (optional)
  if (typeof document.addEventListener === "function") {
    document.addEventListener("DOMContentLoaded", injectPixel);
  }
}

export { injectPixel, updatePixelConfig, setupPixelInjection };
