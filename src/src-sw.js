import { precacheAndRoute } from 'workbox-precaching';

precacheAndRoute(self.__WB_MANIFEST);
workbox.precaching.precacheAndRoute(self.__precacheManifest);
