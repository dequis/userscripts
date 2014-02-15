[USO link](http://userscripts.org/scripts/show/136736)

# LastFM auto-refresher (dx fork)

AJAX auto-Refreshes recent tracks, shouts, and artists / dx fork with a few changes including prepending (!) to the title as a shout notification

Fork of [this userscript](http://userscripts.org/scripts/show/64780) with the following changes:

 * Notify the user when a shout arrives by prepending a (!) to the title
 * Avoid changing the last.fm interface by moving all the options and settings to the "User script commands" greasemonkey submenu.
 * Bugfix: use node.replaceWith() instead of html(), because the latter created an `<ul id="shoutList">` inside the other `<ul id="shoutList">`. Same applies to the artistLarge ul and the recentTracks table

A diff between the base version (1.07) and this one is available [here](http://pastebin.com/HjhEuGgU)

The default notification title prefix can be changed in line 13: `var titlePrefix = "(!) ";`

I made this for a friend who needed the first two things, so it's pretty specific and he didn't need the exact number of shouts on the title, or similar functionality for the recent tracks, etc.
