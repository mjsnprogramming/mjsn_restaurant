import HeaderMenu from './Headers/HeaderMenu.js';
import '../styles/Menu.scss';
function Menu() {
    return (
        <div className = "Menu">
            <HeaderMenu/>    
            <div id = "menuHeaderImg">
                <span>Menu</span>
            </div>
            <div id = "menuNavbar">
                <ul>
                    <li><button tabIndex={0}>All</button></li>
                    <li><button tabIndex={0}>Breakfast</button></li>
                    <li><button tabIndex={0}>Lunch</button></li>
                    <li><button tabIndex={0}>Dinner</button></li>
                    <li><button tabIndex={0}>Drinks</button></li>
                    <li><button tabIndex={0}>Our Special Recipes</button></li>
                    <li><button tabIndex={0}>Others</button></li>
                </ul>
            </div>
        </div>
    )
}

export default Menu;