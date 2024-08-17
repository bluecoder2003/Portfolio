import React from "react";
import { FloatingNav } from "../ui/floating-navbar"; // Adjust the import path as needed

export default function Navbar() {
  const navItems = [
    { name: "Home", link: "/home" },
    { name: "Work", link: "/work" },
    { name: "About", link: "/about" },
    // { name: "Projects", link: "/projects" },
  ];

  return (
    <div>
      {/* Call FloatingNav with the provided navItems */}
      <FloatingNav navItems={navItems} />
    </div>
  );
}
