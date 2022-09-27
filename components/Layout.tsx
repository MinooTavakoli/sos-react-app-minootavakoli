import { ReactNode } from "react";
import styles from "../styles/Layout.module.css";
import Navbar from "./ Navbar";
import Header from "./ Header";

interface PropType {
  children: ReactNode;
}

const Layout = ({ children }: PropType) => {
  return (
    <>
      <Navbar />
      <div className={styles.container}>
        <main className={styles.main}>
          <Header />
          {children}
        </main>
      </div>
    </>
  );
};

export default Layout;
