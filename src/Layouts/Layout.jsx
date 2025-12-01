import React from "react";
import styles from "./Layout.module.css";

function Layout({children}) {
  return (
    <>

    <header className={styles.header}>
      <h1>Book App</h1>
      <p> <a href="https://botostart.ir/">Botostart | React.js Full Course</a></p>
    </header>
    {children}
    <footer className={styles.footer}>
      <p>Developed by Milad with 💖 </p>
    </footer>

    </>
  );
}

export default Layout;