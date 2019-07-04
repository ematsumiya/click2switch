* When opening a `_blank` link, main functionality will not work (i.e. tab query
does not kick in)
* I initially wanted it to happen only when some key press was activated, e.g.:

  I  ap alt+shift+click link to activate functionality

  This is not the current case. It applies to every link clicked (caveat: with
  either ctrl pressed or middle mouse button click)
* Maybe introduce an option to select the first matched tab (i.e. the first opened
  tab with the target URL, and close all other duplicates)
* Currently, the API I used will first effectively open a new tab before it
  identifies that it's a duplicate, then will close this new opened tab. Ideally,
  this should not happen; we should intercept the clicked link and just cancel
  the new tab opening.

  However, I have to confirm this is techinically possible.
* Publish it
