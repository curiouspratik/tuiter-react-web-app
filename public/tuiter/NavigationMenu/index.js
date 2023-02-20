import tabs from "./tabs.js";
import NavMenuTabItem from "./NavMenuTabItem.js";

const NavigationTab = (active) => {
    return(`
        <ul class="nav mb-2 nav-tabs mt-2">     
            ${tabs.map(tab => {
                return(`
                    ${NavMenuTabItem(tab, active === tab.name ? "active" : "")}
                `)
            }).join('')}
        </ul>
    `)
}

export default NavigationTab;