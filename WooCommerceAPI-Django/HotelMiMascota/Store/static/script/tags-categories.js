// Categories

const categories = document.querySelectorAll(".categorie_checkbox");
const hidden = document.querySelectorAll(".categoriesHidden");
const text = [];

hidden.forEach((e) => {
  let cadena = e.innerHTML.replace(/\n/g, "").replace(/\s+/g, " ").trim();
  text.push(cadena);
});

const idlist = text[0].split(" ");

categories.forEach((categorie) => {
  idlist.forEach((e) => {
    if (categorie.id.replace("categorie", "") == e) {
      categorie.checked = true;
    }
  });
});

// Tags

const tags = document.querySelectorAll(".tag_checkbox");
const hidden_tags = document.querySelectorAll(".tagsHidden");
const text_tags = [];

hidden_tags.forEach((e) => {
  let cadena2 = e.innerHTML.replace(/\n/g, "").replace(/\s+/g, " ").trim();
  text_tags.push(cadena2);
});

const idlist_tags = text_tags[0].split(" ");

tags.forEach((tag) => {
  idlist_tags.forEach((e) => {
    if (tag.id.replace("tag", "") == e) {
      tag.checked = true;
    }
  });
});
