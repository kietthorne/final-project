// import PropTypes from "prop-types";
import PageProductDetails from "../../pages/PageProductDetails/PageProductDetails";
import { useEffect } from "react";

// MenuPopup.propTypes = {
//   menuItems: PropTypes.array.any,
//   className: (PropTypes.string = "")
// };

export default function MenuPopup({ menuItems, className, onLeaveMenu }) {
  console.log("menuItems", menuItems);
  useEffect(() => console.log("useEffect menuItems", menuItems), [menuItems]);
  return (
    <div className={`menu-popup ${className}`} onMouseLeave={onLeaveMenu}>
      {menuItems &&
        menuItems.map((i) => (
          <div className={"item-menu"} key={i.id}>
            <a href={i.path} alt={i.title}>
              <span className={"title"}>{i.title}</span>
            </a>
            <div className={"menu-items"}>
              {i.menuItems &&
                i?.menuItems.map((a) => (
                  <a href={a.path} key={a.key}>
                    {a.title}
                  </a>
                ))}
            </div>
          </div>
        ))}
    </div>
  );
}
