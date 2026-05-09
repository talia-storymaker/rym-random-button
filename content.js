let beTopNavLink = true;
let beAfterSearchLink = true;

function applyChanges() {
  // clear existing injected elements if needed
  document.querySelectorAll(".rym-random-button-extension").forEach((el) => el.remove());

  const randomLink = document.createElement("a");
  randomLink.textContent = "random";
  randomLink.href = "http://rateyourmusic.com/misc/random";
  randomLink.className = "header_item rym-random-button-extension";

  if (beTopNavLink) {
    document
      .querySelector(".header_links_inner > a.header_item:last-of-type")
      ?.insertAdjacentElement("beforebegin", randomLink);
  }

  if (beAfterSearchLink) {
    const clone = randomLink.cloneNode(true);
    clone.textContent = "!?";
    clone.classList.add("rym-random-button-extension");
    document.querySelector(".header_search")?.appendChild(clone);
  }
}

chrome.storage.sync.get(["beTopNavLink", "beAfterSearchLink"], (opts) => {
  beTopNavLink = opts.beTopNavLink ?? true;
  beAfterSearchLink = opts.beAfterSearchLink ?? true;
  applyChanges();
});

chrome.storage.onChanged.addListener((changes, area) => {
  if (area !== "sync") return;

  if (changes.beTopNavLink) {
    beTopNavLink = changes.beTopNavLink.newValue;
  }

  if (changes.beAfterSearchLink) {
    beAfterSearchLink = changes.beAfterSearchLink.newValue;
  }

  applyChanges();
});
