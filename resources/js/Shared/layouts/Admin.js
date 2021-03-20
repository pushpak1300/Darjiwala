import React, { useEffect } from "react";
// import { Switch, Route, Redirect } from "react-router-dom";
import { InertiaLink } from "@inertiajs/inertia-react";

// components

import AdminNavbar from "../Navbars/AdminNavbar.js";
import Sidebar from "../Sidebar/Sidebar.js";
import HeaderStats from "../Headers/HeaderStats.js";
import FooterAdmin from "../Footers/FooterAdmin.js";

// views

export default function Admin({ title, children }) {

  useEffect(() => {
    document.title = title;
  }, [title]);

  return (
    <>
      <Sidebar />
      <div className="relative md:ml-64 bg-blueGray-100">
        <AdminNavbar />
        {/* Header */}
        <HeaderStats />
        <div className="px-4 md:px-10 mx-auto w-full -m-24">
          <InertiaLink href="/">Dashboard</InertiaLink>
          <InertiaLink href="/customers">Customers</InertiaLink>

          <article>
            {children}
          </article>
          <FooterAdmin/>
        </div>
      </div>
    </>
  );
}
