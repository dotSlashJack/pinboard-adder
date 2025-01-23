# Firefox plugin to add a website to pinboard.in on click

## steps to test

Go to firefox, and type in "about:debugging#/runtime/this-firefox"

Click "load temporary add-ons..." then select the manifrest.json file.

Ensure you're logged into pinboard.in (warning about this TBA in a future release hopefully)

Once laoded, it shoud show as a plugin in your plugins menu in the toolbar. Clicking it should open a new pinboard.in page with the URL and title filled in for you to add a bookmark (assuming you are logged into pinboard.in)

## notes

You need to create a folder called icons with a 16x16, 32x32, and 48x48 px icon named icon16.png, icon32.png, and icon48.png respectively. I have not added them here yet because the images I used for testing are not in the public domain
