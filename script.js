const all = document.querySelector("#all");
const pages = [...document.querySelectorAll(".cb__input:not(#all)")];

function syncAll(){
  const checkedCount = pages.filter(x => x.checked).length;
  all.checked = checkedCount === pages.length;
  all.indeterminate = checkedCount > 0 && checkedCount < pages.length;
}

all.addEventListener("change", () => {
  pages.forEach(p => (p.checked = all.checked));
  syncAll();
});

pages.forEach(p => p.addEventListener("change", syncAll));
syncAll();
