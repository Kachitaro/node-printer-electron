const assert = require('assert/strict');
const { test, beforeEach } = require('node:test');

let addon;
let template;
beforeEach(() => {
  addon = require('../lib');
  template = "N\nS4\nD15\nq400\nR\nB20,10,0,1,2,30,173,B,\"barcode\"\nP0\n";
});

test('Ensure printDirect function exists', (t) => {
  assert.ok(addon.printDirect, 'printDirect function should exist');
  assert.strictEqual(typeof addon.printDirect, 'function', 'printDirect should be a function');
});

test('Ensure printDirect throws error when no arguments are passed', (t) => {
  assert.throws(() => {
    addon.printDirect();
  }, /Error/, 'printDirect should throw an error when no arguments are passed');
});

test('Ensure printDirect works properly', (t) => {
  let barcode_text = "123";
  const text =
    "[C]   <font size='big'>PHIẾU THANH TOÁN</font>\n[C] ----------------------------------------\n[L]    Ngày:                         2025-09-11\n[L]    Giờ vào:                           15:18\n[L]    Hoá đơn#                           DNN83\n[L]    Nhân viên:                         ngant\n[C] ----------------------------------------\n[L]    SL  ĐG                    TT         SGG\n[L]    TRÊN 1M4 - CỔNG CHÍNH                   \n[L]    1   220,000          220,000     220,000\n[C] ----------------------------------------\n[L]    THÀNH TIỀN:                  220,000 VND\n[L]    PHIẾU MUA HÀNG :                   0 VND\n[L]    GIẢM GIÁ :                         0 VND\n[C] ----------------------------------------\n[L]    THANH TOÁN:                  220,000 VND\n[L]    PHƯƠNG THỨC THANH TOÁN:         TIỀN MẶT\n[C] -----------------------------------------\n" +
    "[C]<barcode type='128' width='40' text='above'>{BDantSu</barcode>\n" +
    "[C]       Quét QR & xuất hoá đơn\n[C]   \n[C]<qrcode size='30'>https://inv.dev.nexbus.net/DNN83/cwvcfcu4vagnes1e</qrcode>\n\n[C]     Lưu ý: Cập nhật thông tin xuất hóa đơn   \n[C]     trong vòng 120 phút kể từ lúc mua hàng   \n[C]     và chỉ áp dụng trong ngày (trước 17:00)    \n\n[C]        Cảm ơn và hẹn gặp lại quý khách          \n\n" +
    '[C]   \nN\nS4\nD15\nq400\nR\nB20,10,0,1,2,30,173,B,"barcode"\nP0\n';
  let printer_name = addon.getDefaultPrinterName();
  const data = template.replace("barcode", barcode_text + "\n" + text);
  addon.printDirect(
    data,
    printer_name,
    'TestJob',
    'RAW',
    function (jobID) {
      assert.ok(jobID, 'Job ID should be returned on success');
    }
  );
});