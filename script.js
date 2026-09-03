/* =========================================
   CẤU HÌNH FACEBOOK
   =========================================

   Khi có link Facebook, điền vào giữa 2 dấu "":
   
   Ví dụ:
   const FACEBOOK_URL = "https://www.facebook.com/ducmanh";

   Nếu để trống:
   const FACEBOOK_URL = "";

   => Nút Facebook sẽ tự động ẩn.
*/

const FACEBOOK_URL = "https://web.facebook.com/llllllllllvllllllllll/";


/* =========================================
   FACEBOOK
   ========================================= */

const facebookLink = document.getElementById("facebookLink");

if (facebookLink) {

  if (FACEBOOK_URL.trim() !== "") {

    // Có link Facebook => hiện nút
    facebookLink.href = FACEBOOK_URL;
    facebookLink.style.display = "flex";

  } else {

    // Chưa có link => ẩn nút Facebook
    facebookLink.style.display = "none";

  }

}


/* =========================================
   QR THANH TOÁN NGÂN HÀNG
   ========================================= */

const bankModal = document.getElementById("bankModal");
const bankBtn = document.getElementById("bankBtn");
const closeBtn = document.getElementById("closeBtn");
const closeModal = document.getElementById("closeModal");


/* Mở QR ngân hàng */

function openBankQR() {

  if (!bankModal) return;

  bankModal.classList.add("show");

  bankModal.setAttribute(
    "aria-hidden",
    "false"
  );

  // Không cho cuộn trang phía sau popup
  document.body.style.overflow = "hidden";

}


/* Đóng QR ngân hàng */

function hideBankQR() {

  if (!bankModal) return;

  bankModal.classList.remove("show");

  bankModal.setAttribute(
    "aria-hidden",
    "true"
  );

  // Cho phép cuộn trang trở lại
  document.body.style.overflow = "";

}


/* Nút Thanh toán */

if (bankBtn) {

  bankBtn.addEventListener(
    "click",
    openBankQR
  );

}


/* Nút X */

if (closeBtn) {

  closeBtn.addEventListener(
    "click",
    hideBankQR
  );

}


/* Bấm ra ngoài popup */

if (closeModal) {

  closeModal.addEventListener(
    "click",
    hideBankQR
  );

}


/* =========================================
   PHÍM ESC ĐỂ ĐÓNG POPUP
   ========================================= */

document.addEventListener(
  "keydown",
  function (event) {

    if (event.key === "Escape") {

      hideBankQR();

    }

  }
);
