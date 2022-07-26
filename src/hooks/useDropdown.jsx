function useDropdown() {
  function showMenu(e) {
    const menu = e.target.nextElementSibling.classList;

    if (menu.contains("show")) {
      hideMenu();
      return;
    } else {
      hideMenu();

      menu.remove("hidden");
      menu.add("show");

      setTimeout(() => {
        menu.remove("opacity-0", "h-0");
      }, 50);
    }
  }

  function hideMenu() {
    const openMenu = document.querySelector(".menu.show");

    if (openMenu) {
      openMenu.classList.remove("show");

      openMenu.classList.add("hidden");
      openMenu.classList.add("opacity-0", "h-0");
    }
  }

  return {
    showMenu,
    hideMenu,
  };
}

export default useDropdown;
