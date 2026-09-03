/* =========================================
   FACEBOOK
   ========================================= */

// DÁN LINK FACEBOOK CỦA BẠN VÀO ĐÂY
const FACEBOOK_URL = "https://web.facebook.com/llllllllllvllllllllll/";


/* =========================================
   HIỂN THỊ FACEBOOK
   ========================================= */

const facebookLink = document.getElementById("facebookLink");

if (facebookLink) {

    if (FACEBOOK_URL.trim() !== "") {

        // Có link Facebook
        facebookLink.href = FACEBOOK_URL;
        facebookLink.style.display = "flex";

    } else {

        // Chưa có link Facebook
        facebookLink.style.display = "none";

    }

}


/* =========================================
   QR NGÂN HÀNG
   ========================================= */

const bankModal = document.getElementById("bankModal");
const bankBtn = document.getElementById("bankBtn");
const closeBtn = document.getElementById("closeBtn");
const closeModal = document.getElementById("closeModal");


/* Mở QR */

if (bankBtn) {

    bankBtn.addEventListener("click", function () {

        bankModal.classList.add("show");

        bankModal.setAttribute(
            "aria-hidden",
            "false"
        );

        document.body.style.overflow = "hidden";

    });

}


/* Đóng QR bằng X */

if (closeBtn) {

    closeBtn.addEventListener("click", function () {

        bankModal.classList.remove("show");

        bankModal.setAttribute(
            "aria-hidden",
            "true"
        );

        document.body.style.overflow = "";

    });

}


/* Đóng QR khi bấm bên ngoài */

if (closeModal) {

    closeModal.addEventListener("click", function () {

        bankModal.classList.remove("show");

        bankModal.setAttribute(
            "aria-hidden",
            "true"
        );

        document.body.style.overflow = "";

    });

}


/* Đóng QR bằng phím ESC */

document.addEventListener("keydown", function (event) {

    if (event.key === "Escape") {

        if (bankModal) {

            bankModal.classList.remove("show");

            bankModal.setAttribute(
                "aria-hidden",
                "true"
            );

            document.body.style.overflow = "";

        }

    }

});
