import React, { useEffect } from "react";
// import { Switch, Route, Redirect } from "react-router-dom";
import { InertiaLink } from "@inertiajs/inertia-react";
// components

import Navbar from "../Navbars/AuthNavbar.js";
import FooterSmall from "../Footers/FooterSmall.js";

// views

import Login from "../../Pages/Auth/Login.js";

export default function Auth({ title, children }) {

  useEffect(() => {
    document.title = title;
  }, [title]);

  return (
    <>
      <main>
        <section className="relative w-full h-full py-40 min-h-screen">
          <div
            className="absolute top-0 w-full h-full bg-blueGray-800 bg-no-repeat bg-full"
            style={{
              backgroundImage:
                "https://d2wvwvig0d1mx7.cloudfront.net/data/org/194/media/img/cache/551x0/2132919_551x0.jpg",
            }}
          ></div>
          <article className="py-12">
            {children}
          </article>
          <FooterSmall absolute />
        </section>
      </main>
    </>
  );
}
