/*
=========================================
FACEBOOK
=========================================

DÁN LINK FACEBOOK CỦA BẠN VÀO ĐÂY.

Ví dụ:

const FACEBOOK_URL =
  "https://www.facebook.com/ten.facebook.cua.ban";

*/

const FACEBOOK_URL = "";


/* ======================================
   FACEBOOK BUTTON
====================================== */

const facebookLink =
  document.getElementById("facebookLink");


if (FACEBOOK_URL.trim()) {

  facebookLink.href =
    FACEBOOK_URL;

} else {

  facebookLink.addEventListener(
    "click",
    function (event) {

      event.preventDefault();

      alert(
        "Bạn chưa điền link Facebook."
      );

    }
  );

}


/* ======================================
   QR NGÂN HÀNG
====================================== */

const modal =
  document.getElementById(
    "bankModal"
  );

const bankBtn =
  document.getElementById(
    "bankBtn"
  );

const closeBtn =
  document.getElementById(
    "closeBtn"
  );

const closeModal =
  document.getElementById(
    "closeModal"
  );


/* Mở QR */

function openModal() {

  modal.classList.add("show");

  modal.setAttribute(
    "aria-hidden",
    "false"
  );

}


/* Đóng QR */

function hideModal() {

  modal.classList.remove(
    "show"
  );

  modal.setAttribute(
    "aria-hidden",
    "true"
  );

}


/* Click Thanh toán */

bankBtn.addEventListener(
  "click",
  openModal
);


/* Click X */

closeBtn.addEventListener(
  "click",
  hideModal
);


/* Click ra ngoài */

closeModal.addEventListener(
  "click",
  hideModal
);


/* Nhấn ESC */

document.addEventListener(
  "keydown",
  function (event) {

    if (event.key === "Escape") {

      hideModal();

    }

  }
);
