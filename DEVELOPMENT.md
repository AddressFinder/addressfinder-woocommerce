# Development

Follow the setup instructions in [BUILD.md](BUILD.md).

# Developing and testing

Test changes on a throwaway WooCommerce server, following [TEST_STORE.md](TEST_STORE.md). It covers creating the server, installing a build of your branch, and switching between the classic and block checkouts.

## Trouble Shooting

### Debugging
  If you are debugging a customer site, you can type `addressfinderDebugMode()` into the javascript console. This will reinitialise the widget,
  with the debug flag set to true, so you can see console logs from the addressfinder-webpage-tools npm package.
  This works in Chrome and FireFox

### Legacy packages
Depending on the machine packages you have installed it is possible you may run into OpenSSL implementations of algorithms that have been deemed legacy.
Simply run `export NODE_OPTIONS=--openssl-legacy-provider` in your terminal.
