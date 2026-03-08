import React from "react";
import Link from "next/link";
import {
  PATH_CATALOG,
  PATH_ABOUT_US,
  PATH_LOGIN,
  PATH_SIGN_UP,
} from "@/app/path/path";
export default function NavBar() {
  return (
    <div>
      <Link href={PATH_CATALOG}>Catalog</Link>
      <Link href={PATH_ABOUT_US}>About Us</Link>
      <Link href={PATH_LOGIN}>Login</Link>
      <Link href={PATH_SIGN_UP}>Sign Up</Link>
    </div>
  );
}
