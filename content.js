chrome.storage.sync.get(
  ["beTopNavLink", "beAfterSearchLink"],
  (opts) => {
    const beTopNavLink = opts.beTopNavLink ?? true;
    const beAfterSearchLink = opts.beAfterSearchLink ?? true;

    const randomLink = document.createElement("a");
    randomLink.textContent = "random";
    randomLink.href = "http://rateyourmusic.com/misc/random";
    randomLink.className = "header_item";

    if (beTopNavLink) {
      document
        .querySelector(".header_links_inner > a.header_item:last-of-type")
        ?.insertAdjacentElement("beforebegin", randomLink);
    }

    if (beAfterSearchLink) {
      const clone = randomLink.cloneNode(true);
      clone.textContent = "!?";
      document.querySelector(".header_search")?.appendChild(clone);
    }
  }
);
