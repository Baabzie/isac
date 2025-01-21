import NavBar from "./NavBar";
import { useEffect, useState } from "react";
import Link from "next/link";

export default function Header() {
  const basePath = process.env.NODE_ENV === "production" ? "/isac" : "";
  const [isVisible, setIsVisible] = useState(false);

  const handleScroll = () => {
    const scrollPosition = window.scrollY;
    setIsVisible(scrollPosition > 1000); // Adjust threshold as needed
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const handleButton = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <header>
      <button
        onClick={() => handleButton()}
        className={isVisible ? "visible" : "hidden"}
      >
        <img
          className="desktopImg"
          src={`${basePath}/logoWithText.png`}
          alt="bild på Smartvärds logotyp"
        />
        <img
          className="mobileImg"
          src={`${basePath}/logo.png`}
          alt="bild på Smartvärds logotyp"
        />
      </button>
      <NavBar />
    </header>
  );
}
