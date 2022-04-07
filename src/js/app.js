
import 'bootstrap';

import AccessibleMenu from "accessible-menu-bootstrap-5";

if (document.querySelector(".menu-examples-container") !== null) {

    // Initiliaze the menus

    const menuSingleLevel = new AccessibleMenu.Bootstrap5DisclosureMenu({
        menuElement: document.querySelector("#main-nav-single-level .navbar-nav"),
    });

    const menuSingleLevelToggle = new AccessibleMenu.Bootstrap5DisclosureMenu({
        menuElement: document.querySelector("#main-nav-single-level-menu-with-toggle .navbar-nav"),
        controllerElement: document.querySelector("#main-nav-single-level-menu-with-toggle .navbar-toggler"),
        containerElement: document.querySelector("#main-nav-single-level-menu-with-toggle .navbar-collapse"),
    });

    const menuTwoLevelToggle = new AccessibleMenu.Bootstrap5DisclosureMenu({
        menuElement: document.querySelector("#main-nav-two-level-menu-with-toggle .navbar-nav"),
        controllerElement: document.querySelector("#main-nav-two-level-menu-with-toggle .navbar-toggler"),
        containerElement: document.querySelector("#main-nav-two-level-menu-with-toggle .navbar-collapse"),
    });

    const menuTwoLevelToggleMenubar = new AccessibleMenu.Bootstrap5Menubar({
        menuElement: document.querySelector("#main-nav-two-level-menu-with-toggle-menubar .navbar-nav"),
        controllerElement: document.querySelector("#main-nav-two-level-menu-with-toggle-menubar .navbar-toggler"),
        containerElement: document.querySelector("#main-nav-two-level-menu-with-toggle-menubar .navbar-collapse"),
    });

}