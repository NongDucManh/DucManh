const VCF = `BEGIN:VCARD
VERSION:3.0
FN:Đức Mạnh
N:Mạnh;Đức;;;
TEL;TYPE=CELL:0949408394
URL:https://zalo.me/0949408394
NOTE:Tư vấn & đăng ký gói Data / Combo Viettel, VinaPhone, MobiFone
END:VCARD`;

document.getElementById("year").textContent = new Date().getFullYear();

document.getElementById("saveContact").addEventListener("click", () => {
  const blob = new Blob([VCF], {type: "text/vcard;charset=utf-8"});
  const url = URL.createObjectURL(blob);
  const a = document.createElement("a");
  a.href = url;
  a.download = "Duc-Manh.vcf";
  a.click();
  URL.revokeObjectURL(url);
});

document.getElementById("sharePage").addEventListener("click", async () => {
  const data = {title:"Đức Mạnh - Gói Data & Combo", text:"Tư vấn & đăng ký gói Data / Combo", url:location.href};
  if (navigator.share) {
    try { await navigator.share(data); } catch(e) {}
  } else {
    await navigator.clipboard.writeText(location.href);
    alert("Đã sao chép đường dẫn trang.");
  }
});

// QR tự động trỏ tới URL hiện tại của GitHub Pages.
if (window.QRCode) {
  new QRCode(document.getElementById("pageQr"), {
    text: location.href,
    width: 180,
    height: 180,
    correctLevel: QRCode.CorrectLevel.M
  });
}
