import React from "react";

function Footer() {
  return (
    <footer className="bg-gray-200 text-center text-xs p-3 absolute bottom-0 w-full">
      <p>&copy; {new Date().getFullYear()} My Portfolio</p>
    </footer>
  );
}

export default Footer;
