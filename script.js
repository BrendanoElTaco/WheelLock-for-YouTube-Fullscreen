(() => {
  "use strict";

  const LOCK_CLASS = "yt-dsf-lock";
  const STYLE_ID = "yt-dsf-style";

  function isVideoPage() {
    const path = window.location.pathname;
    return (
      path === "/watch" ||
      path.startsWith("/shorts/") ||
      path.startsWith("/live/")
    );
  }

  function isFullscreenActive() {
    return !!document.fullscreenElement;
  }

  function shouldBlockWheel() {
    return isVideoPage() && isFullscreenActive();
  }

  function injectStyle() {
    if (document.getElementById(STYLE_ID)) return;

    const style = document.createElement("style");
    style.id = STYLE_ID;
    style.textContent = `
      html.${LOCK_CLASS},
      body.${LOCK_CLASS},
      ytd-app.${LOCK_CLASS} {
        overflow: hidden !important;
        scrollbar-width: none !important;
      }

      .ytp-fullerscreen-edu-button {
        display: none !important;
      }
    `;

    const target = document.head || document.documentElement;
    if (target) {
      target.appendChild(style);
    } else {
      document.addEventListener(
        "DOMContentLoaded",
        () => document.head?.appendChild(style),
        { once: true }
      );
    }
  }

  function updateLockedState() {
    const locked = shouldBlockWheel();

    document.documentElement?.classList.toggle(LOCK_CLASS, locked);
    document.body?.classList.toggle(LOCK_CLASS, locked);
    document.querySelector("ytd-app")?.classList.toggle(LOCK_CLASS, locked);
  }

  function onWheel(event) {
    if (!shouldBlockWheel()) return;

    event.preventDefault();
    event.stopImmediatePropagation();
    event.stopPropagation();
  }

  injectStyle();

  window.addEventListener("wheel", onWheel, {
    capture: true,
    passive: false,
  });

  document.addEventListener("wheel", onWheel, {
    capture: true,
    passive: false,
  });

  document.addEventListener("fullscreenchange", updateLockedState, true);
  window.addEventListener("yt-navigate-finish", updateLockedState, true);
  window.addEventListener("popstate", updateLockedState, true);

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", updateLockedState, {
      once: true,
    });
  } else {
    updateLockedState();
  }

  setTimeout(updateLockedState, 250);
})();