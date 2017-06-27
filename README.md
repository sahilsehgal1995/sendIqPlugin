Stanza.io

Modern XMPP in the browser, with a JSON API.
Reference: https://github.com/legastero/stanza.io

What is this?

Stanza.io is a library for using modern XMPP in the browser, and it does that by exposing everything as JSON. Unless you insist, you have no need to ever see or touch any XML when using stanza.io.


Stanza.io plugin to send custom IQ

Steps:
1. Include sendIqPlugin.js file in lib/plugins/ folder of your stanza.io node module.
2. Open index-browser.js file in lib/plugins/ folder.
3. Write client.use(require('./sendIqPlugin')); to include your plugin.
4. run make command to build stanza.bundle.js file again.

Usage:
Use client.sendMyStanza("dev.chat.eazespot.com") to send iq stanza