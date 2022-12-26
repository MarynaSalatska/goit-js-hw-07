import { galleryItems } from "./gallery-items.js";
// Change code below this line

const galleryEl = document.querySelector(".gallery");

function createMarkup(arr) {
  const markup = arr
    .map(({ preview, original, description }) => {
      return `<div class="gallery__item">
  <a class="gallery__link" href="${original}">
    <img
      class="gallery__image"
      src="${preview}"
      data-source="${original}"
      alt="${description}"
    />
  </a>
</div>`;
    })
    .join("");
  return markup;
}

const imagesMarkup = createMarkup(galleryItems);
galleryEl.insertAdjacentHTML("beforeend", imagesMarkup);

galleryEl.addEventListener("click", onClick);

function onClick(event) {
  event.preventDefault();
  const containGallery = event.target.classList.contains("gallery__image");
  if (!containGallery) {
    return;
  }
  const imgUrl = event.target.dataset.source;
  const instance = basicLightbox.create(
    `<img src="${imgUrl}" width="800" height="600">`
  );
  instance.show();

  window.addEventListener("keydown", onEscPress);
  function onEscPress(event) {
    if (event.code === "Escape") {
      instance.close();
      window.removeEventListener("keydown", onEscPress);
    }
  }
}

console.log(galleryItems);
