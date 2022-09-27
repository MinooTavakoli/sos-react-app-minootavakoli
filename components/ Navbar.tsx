import Link from "next//link";
import Image from "next/image";
import profileIcon from "../public/man.png";
import navStyles from "../styles/Nav.module.css";

const Navbar = () => {
  return (
    <nav className={navStyles.nav}>
      <div className={navStyles.navWrapper}>
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
    </nav>
  );
};

export default Navbar;
