const dropdownButton = document.querySelector("#dropdown-button");
const sidebarCloseButton = document.querySelector("#sidebar-button-close");
const sidebarEl = document.querySelector("#sidebar");

const sidebar = () => {
  dropdownButton.addEventListener("click", () => {
    sidebarEl.classList.add("open");
  });
  sidebarCloseButton.addEventListener("click", () => {
    sidebarEl.classList.remove("open");
  });
};

export { sidebar };
