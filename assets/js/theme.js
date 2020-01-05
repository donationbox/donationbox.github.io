'use strict';

function clipBoard(element = '.ext-clipboard') {
  let clipboard = new ClipboardJS(element);

  clipboard.on('success', function (e) {
    e.clearSelection();
  });
}

function qrCode(id, text, width = '150') {
  let element = document.getElementById(id);
  let data = element.getAttribute(text);

  QRCode.toCanvas(element, data, {
    width: width,
  });
}

$(function () {
  clipBoard();
  qrCode('bitcoin-wallet-qr', 'data-wallet', '200');
  qrCode('ethereum-wallet-qr', 'data-wallet', '200');
  qrCode('monero-wallet-qr', 'data-wallet', '200');
});