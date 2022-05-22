import startApp from './modules/startApp.js';

if ('serviceWorker' in navigator) {
  window.addEventListener('load', () => {
    navigator.serviceWorker.register('/sw.js').then(
      registration => {
        console.log(`Service Worker registered! Scope: ${registration.scope}`);
      },
      error => {
        console.error(`Service Worker registration failed: ${error}`);
      },
    );
  });
}

startApp();