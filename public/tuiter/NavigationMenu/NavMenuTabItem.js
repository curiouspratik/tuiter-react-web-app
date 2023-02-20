const NavMenuTabItem = (tab, active) => {
    return(`
        <li class="nav-item ${tab.last ? "d-none d-md-block" : ""}">
            <a class="nav-link ${active}" href="${tab.hyperlink}">
                ${tab.name ? tab.name[0].toUpperCase() + tab.name.slice(1) : ""}
            </a>
        </li>
    `)
}

export default NavMenuTabItem;