const topNavCheckbox = document.getElementById('topNav');
const afterSearchCheckbox = document.getElementById('afterSearch');

chrome.storage.sync.get(['beTopNavLink', 'beAfterSearchLink'], (result) => {
  topNavCheckbox.checked = result.beTopNavLink !== false;
  afterSearchCheckbox.checked = result.beAfterSearchLink !== false;
});

topNavCheckbox.addEventListener('change', () => {
  chrome.storage.sync.set({ beTopNavLink: topNavCheckbox.checked });
});

afterSearchCheckbox.addEventListener('change', () => {
  chrome.storage.sync.set({ beAfterSearchLink: afterSearchCheckbox.checked });
});
