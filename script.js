const selectAllCheckbox = document.getElementById("all");
const pageCheckboxes = Array.from(
  document.querySelectorAll(".cb__input")
).filter((checkbox) => checkbox !== selectAllCheckbox);

const syncSelectAll = () => {
  const allChecked = pageCheckboxes.every((checkbox) => checkbox.checked);
  selectAllCheckbox.checked = allChecked;
};

const toggleAllPages = (checked) => {
  pageCheckboxes.forEach((checkbox) => {
    if (!checkbox.disabled) {
      checkbox.checked = checked;
    }
  });
  syncSelectAll();
};

selectAllCheckbox.addEventListener("change", (event) => {
  toggleAllPages(event.target.checked);
});

pageCheckboxes.forEach((checkbox) => {
  checkbox.addEventListener("change", syncSelectAll);
});

syncSelectAll();
