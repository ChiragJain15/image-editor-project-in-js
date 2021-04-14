var foto;
window.onload = function () {
  foto = new Foto();
};

function selectImage() {
  document.getElementById("foto-file").click();
}
// function loadFile() {
//   const photo = document.getElementById("foto-image");
//   var file = document.querySelector("input[type=file]").files[0];
//   var reader = new FileReader();

//   reader.onloadend = function () {
//     photo.src = reader.result;
//   };

//   if (file) {
//     reader.readAsDataURL(file);
//   } else {
//     photo.src = "";
//   }
// }

function makeGreyScale() {
  foto.grayscale();
}

function makeBlur() {
  foto.applyBlurFilter();
}

function download() {
  foto.export();
}

function makeDark() {
  foto.makeDark();
}

function makeBright() {
  foto.makeBright();
}

function makeSharp() {
  foto.applySharpFilter();
}

function makeEmboss() {
  foto.applyEmbossFilter();
}

