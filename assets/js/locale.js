'use strict';

function localeDetect() {
  let locale = navigator.language || navigator.browserLanguage || navigator.systemLanguage || navigator.userLanguage;

  return locale.toLowerCase().substr(0, 2);
}

function localeRedirect() {
  let locale = localeDetect();

  switch (locale) {
    case 'en':
      window.location.href = '/en/';
      break;
    case 'ru':
      window.location.href = '/ru/';
      break;
    default:
      window.location.href = '/ru/';
  }
}

document.addEventListener('DOMContentLoaded', function () {
  localeRedirect();
});
