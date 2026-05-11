# RYM (Rate Your Music) Random Button WebExtension

Rate Your Music has a hidden "random release" functionality.
Using this extension, you can add a random release link to the navigation
in either or both of the following locations (you choose):

* As an item in the top/main navigation (not available on mobile)
* After the search bar (shows as an interrobang: !?)

This works on rateyourmusic.com and rym.fm (the forums).

The randomization functionality is a little odd and may give you
the same release multiple times in a row if you don't wait long
enough. This is just the nature of how it works. I suppose I could
eventually try to make my own client-side randomization functionality
in this extension, but for now I'm just using RYM's functionality.

I don't recommend using this on mobile if you're not signed in; you
may need to scroll horizontally to see the whole navigation. (Will
probably fix later, but I assume most people who use this have RYM
accounts.)

## Load in browser

### Chrome

1. Open `chrome://extensions`
2. Enable "Developer mode"
3. Click "Load unpacked"
4. Select the `rym-random-button` folder

### Firefox

1. Open `about:debugging#/runtime/this-firefox`
2. Click "Load Temporary Add-on"
3. Select `manifest.json` from the `rym-random-button` folder
