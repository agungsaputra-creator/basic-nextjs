import { ReactNode } from "react";
import Header from "../Header";
import Footer from "../Footer";
import styles from "./Layout.module.css";
import Head from "next/head";

const Layout = ({ children, pageTitle }) => {
  return (
    <>
      <Head>
        <title>NextJS Basic | {pageTitle}</title>
        <meta name="description" content="Website NextJS Basic" />
      </Head>
      <div className={styles.container}>
        <Header />
        <div className={styles.content}>{children}</div>
        <Footer />
      </div>
    </>
  );
};

export default Layout;
