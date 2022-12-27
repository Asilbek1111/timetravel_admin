import react, { useState, useEffect } from "react";
import Head from "next/head";
import SignIn from "./SignIn";
import Sidebar from "../components/Sidebar/Sidebar";
import AdminNavbar from "../components/Navbars/AdminNavbar";
import FooterAdmin from "../components/Footers/FooterAdmin";
import { useRouter } from "next/router";
import axios from "../axios";
const Home = (props) => {
  const [isLoading, setIsLoading] = useState(false);
  const [token, setToken] = useState(false);
  const checkout =
    typeof window !== "undefined" ? localStorage.getItem("token") : null;
  useEffect(() => {
    if (checkout) {
      setToken(true);
    } else {
      setToken(false);
    }
  }, []);
  return (
    <div>
      <Head>
        <title>Adminka</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="csrf-token" content="{{ csrf_token() }}" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        {token ? (
          <>
            <div>
              <Sidebar />
              <div className="relative md:ml-64 bg-blueGray-100">
                <AdminNavbar colors={props.colors} />
                <div className="relative md:pt-32 pb-32 pt-12"></div>
                <div className="px-4 md:px-10 mx-auto w-full">
                  {props.children}
                  {/* <Settings/> */}
                  {/* <Table/> */}
                  <FooterAdmin />
                </div>
              </div>
            </div>
          </>
        ) : (
          <SignIn />
        )}
      </main>
    </div>
  );
};
export default Home;
