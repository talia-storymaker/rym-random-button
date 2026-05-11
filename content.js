let beTopNavLink = false;
let beAfterSearchLink = true;

function applyChanges() {
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
    clone.className = "rym-random-button-extension";
    clone.style.float = "left";
    clone.style.padding = "0 16px";
    document.querySelector(".header_profile_logged_in")?.prepend(clone);
    // document.querySelector(".header_profile_logged_out")?.prepend(clone);
  }
}

chrome.storage.sync.get(["beTopNavLink", "beAfterSearchLink"], (opts) => {
  beTopNavLink = opts.beTopNavLink ?? false;
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
