import NavBar from "./NavBar";
import { useEffect, useState } from "react";
import Link from "next/link";

export default function Header() {
  const basePath = process.env.NODE_ENV === "production" ? "/isac" : "";
  // const [isScrolled, setIsScrolled] = useState(false);

  // useEffect(() => {
  //   const handleScroll = () => {
  //     const element = document.getElementById("movieList");
  //     if (element) {
  //       const offset = element.offsetTop - 200;

  //       const scrollTop = window.scrollY;
  //       setIsScrolled(scrollTop > offset);
  //     }
  //   };

  //   window.addEventListener("scroll", handleScroll);

  //   return () => {
  //     window.removeEventListener("scroll", handleScroll);
  //   };
  // }, []);

  const handleButton = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <header>
      <button onClick={() => handleButton()}>
        <img
          src={`${basePath}/logoWithText.png`}
          alt="bild på Smartvärds logotyp"
        />
      </button>
      <NavBar />
    </header>
  );
}
