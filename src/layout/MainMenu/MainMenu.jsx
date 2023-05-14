import { useCallback, useState } from "react";
import { menuItems } from "../../constants/menu";
import MenuPopup from "../MenuPopup/MenuPopup";
import { Outlet} from "react-router-dom";
import "../MainMenu/mainMenu.less";


export default function MainMenu() {
  const [menuItemPopup, setMenuItemsPopup] = useState(null);

  const onHoverItemMenu = (menuItems) => {
    console.log("menu", menuItems);
    setMenuItemsPopup(menuItems);
  };
  const onLeaveItemMenu = () => {
    setMenuItemsPopup(null);
  };

  return (
    <>
      <div className={"main-menu"}>
      {menuItems.map((i) => (
        <a
          onMouseEnter={() => onHoverItemMenu(i?.menuItems)}
          href={i.path}
          alt={i.title}
          key={i.id}
          className={"menu-item-parent"}
        >
          <i
            className={"icon"}
            dangerouslySetInnerHTML={{ __html: i.icon }}
          ></i>
          <span className={"title"}>{i.title}</span>
        </a>
      ))}
      <MenuPopup
        className={menuItemPopup ? "active" : ""}
        menuItems={menuItemPopup}
        onLeaveMenu={onLeaveItemMenu}
      />
    </div>
     <main>
      <Outlet />
      </main>
    </>
  );
}
