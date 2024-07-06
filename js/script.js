const navId = document.getElementById("nav_menu"),
  ToggleBtnId = document.getElementById("toggle_btn"),
  CloseBtnId = document.getElementById("close_btn");

// show menu
ToggleBtnId.addEventListener("click", () => {
  navId.classList.add("show");
});

// hide menu
CloseBtnId.addEventListener("click", () => {
  navId.classList.remove("show");
});

AOS.init();

// logo
gsap.from(".logo", {
  opacity: 0,
  y: -10,
  delay: 1,
  duration: 0.5,
});

// nav menu
gsap.from(".nav_menu_list .nav_menu_items", {
  opacity: 0,
  y: -10,
  delay: 1,
  duration: 0.5,
  stagger: 0.3,
});

// toggle btn
gsap.from(".toggle_btn", {
  opacity: 0,
  y: -10,
  delay: 1,
  duration: 0.5,
});

// main heading
gsap.from(".main-heading", {
  opacity: 0,
  y: 20,
  delay: 2,
  duration: 0.5,
});

// btn
gsap.from(".btn-wrapper", {
  opacity: 0,
  y: 20,
  delay: 1.8,
  duration: 0.5,
});

// image
gsap.from(".team_img_wrapper img", {
  opacity: 0,
  y: 20,
  delay: 1.8,
  duration: 0.5,
});

// info text
gsap.from(".info-text", {
  opacity: 0,
  y: 20,
  delay: 1.8,
  duration: 0.5,
});

// Fasilitas
gsap.from(".fasilitas", {
  opacity: 0,
  y: 20,
  delay: 1.8,
  duration: 0.5,
});

// tentang kami
gsap.from(".tentang", {
  opacity: 0,
  y: 20,
  delay: 1.8,
  duration: 0.5,
});

// kontak
gsap.from(".kontak", {
  opacity: 0,
  y: 20,
  delay: 1.8,
  duration: 0.5,
});

// tipe rumah
gsap.from(".title_tipe_rumah", {
  opacity: 0,
  y: 20,
  delay: 1.8,
  duration: 0.5,
});

gsap.from(".tipe_rumah", {
  opacity: 0,
  y: 20,
  delay: 1.8,
  duration: 0.5,
});

window.addEventListener("scroll", (e) => {
  const nav = document.querySelector(".header");
  if (window.pageYOffset >= 30) {
    nav.classList.add("shadow-header");
  } else {
    nav.classList.remove("shadow-header");
  }
});

// LOAD ALL TYPE RUMAH

const jsonData = {
  rumah: [
    {
      tipe: "A",
      gambar_rumah: "./image/house-1.png",
      nama: "Case Verde",
      luas_bangunan: 120,
      luas_tanah: 200,
      kamar_mandi: 2,
      kamar_tidur: 3,
      deskripsi:
        "Case Verde, Rumah dengan desain modern dan luas tanah yang cukup untuk kehidupan keluarga. Dengan dua kamar mandi dan tiga kamar tidur, rumah ini memberikan kenyamanan dan kehangatan bagi keluarga anda.",
    },
    {
      tipe: "B",
      gambar_rumah: "./image/house-2.png",
      nama: "Sky Villa",
      luas_bangunan: 180,
      luas_tanah: 250,
      kamar_mandi: 3,
      kamar_tidur: 4,
      deskripsi:
        "Sky Villa, Rumah dengan desain modern dan luas tanah yang cukup untuk kehidupan keluarga. Dengan dua kamar mandi dan tiga kamar tidur, rumah ini memberikan kenyamanan dan kehangatan bagi keluarga anda.",
    },
    {
      tipe: "C",
      gambar_rumah: "./image/house-3.png",
      nama: "Lakeview Mansion",
      luas_bangunan: 220,
      luas_tanah: 300,
      kamar_mandi: 4,
      kamar_tidur: 5,
      deskripsi:
        "Lakeview Mansion, Rumah dengan desain modern dan luas tanah yang cukup untuk kehidupan keluarga. Dengan dua kamar mandi dan tiga kamar tidur, rumah ini memberikan kenyamanan dan kehangatan bagi keluarga anda.",
    },
    {
      tipe: "D",
      gambar_rumah: "./image/house-4.png",
      nama: "Garden Retreat",
      luas_bangunan: 150,
      luas_tanah: 180,
      kamar_mandi: 2,
      kamar_tidur: 3,
      deskripsi:
        "Garden Retreat, Rumah dengan desain modern dan luas tanah yang cukup untuk kehidupan keluarga. Dengan dua kamar mandi dan tiga kamar tidur, rumah ini memberikan kenyamanan dan kehangatan bagi keluarga anda.",
    },
  ],
};

// funtion dynamic create html for each house
function createHouseCard(house, index, isMobileView) {
  const isOdd = index % 2 === 1;

  const penjelasan = `
  <div class="col-md-6 mt-4 mb-4">
  <h2>${house.nama}</h2>
  <p>${house.deskripsi}</p>
  <div class="row">
    <div class="col-md-5 mb-3">
      <div class="card justify-content-center align-self-center p-3 tipe_rumah_item">
          <i class="fa fa-briefcase"></i>
          <h3>${house.luas_bangunan}</h3>
          <p>Luas Bangunan</p>
      </div>
    </div>
    <div class="col-md-5 mb-3">
      <div class="card justify-content-center align-self-center p-3 tipe_rumah_item">
          <i class="fa fa-briefcase"></i>
          <h3>${house.luas_tanah}</h3>
          <p>Luas tanah</p>
      </div>
    </div>
    <div class="col-md-5 mb-3">
      <div class="card justify-content-center align-self-center p-3 tipe_rumah_item">
          <i class="fa fa-shower"></i>
          <h3>${house.kamar_mandi}</h3>
          <p>Kamar Mandi</p>
      </div>
    </div>
    <div class="col-md-5 mb-3">
      <div class="card justify-content-center align-self-center p-3 tipe_rumah_item">
          <i class="fa fa-bed"></i>
          <h3>${house.kamar_tidur}</h3>
          <p>Kamar Tidur</p>
      </div>
    </div>
  </div>
  <button class="btn_home view_more_btn mt-1">Selengkapnya</button>
  </div>
  `;

  const gambar_rumah = `
  <div class="col-md-6 mt-4 mb-4">
    <img src="${house.gambar_rumah}" alt="${house.nama}" class="img-fluid" />
  </div>
  `;

  var html = ``;
  if (isOdd) {
    html = gambar_rumah + penjelasan;
  } else {
    html = penjelasan + gambar_rumah;
  }

  // handle mobile view
  if (isMobileView) {
    html = gambar_rumah + penjelasan;
  }

  return html;
}

// load data into html (web view)
const rumahContainer = document.getElementById("rumahContainer");
jsonData.rumah.forEach((house, index) => {
  // TODO: Mapping all view house
  const houseCard = createHouseCard(house, index, false);
  rumahContainer.innerHTML += houseCard;
});

// load data into html (mobile view)
const rumahContainerMobile = document.getElementById("rumahContainerMobile");
jsonData.rumah.forEach((house, index) => {
  // TODO: Mapping all view house
  const houseCard = createHouseCard(house, index, true);
  rumahContainerMobile.innerHTML += houseCard;
});
