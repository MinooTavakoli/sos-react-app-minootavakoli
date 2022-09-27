import React from "react";
import Link from "next//link";
import Image from "next/image";
import profileIcon from "../public/man.png";
import menuIcon from "../public/menu.png";
import closeIcon from "../public/close.png";
import navStyles from "../styles/Nav.module.css";

const Navbar = () => {
  const [openMenu, setOpenMenu] = React.useState(false);

  return (
    <nav className={navStyles.nav}>
      <div className={navStyles.navWrapper}>
        <div
          className={navStyles.menuIcon}
          onClick={() => {
            setOpenMenu(!openMenu);
          }}
        >
          <Image
            src={menuIcon}
            alt="menu_icon"
            className={navStyles.menuIcon}
          />
        </div>
        <ul>
          <li>
            <h3>لوگو</h3>
          </li>
          <li>
            <Link href="/">صفحه اصلی</Link>
          </li>
          <li>
            <Link href="/todo-list">تودولیست</Link>
          </li>
        </ul>
        <Image
          src={profileIcon}
          alt="profile_icon"
          className={navStyles.profileIcon}
        />
      </div>
      {openMenu && (
        <div className={navStyles.menuDrop}>
          <div className={navStyles.menuItemWrapper}>
            <Link href="/">صفحه اصلی</Link>
            <Link href="/todo-list">تودولیست</Link>
          </div>

          <div
            className={navStyles.closeIcon}
            onClick={() => {
              setOpenMenu(false);
            }}
          >
            <Image src={closeIcon} alt="close_icon" />
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
