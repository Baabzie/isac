export default function NavBar() {
  const handleButton = (elementInput: string) => {
    const element = document.getElementById(elementInput);

    if (element) {
      const offset = element.offsetTop - 50;

      window.scrollTo({
        top: offset,
        behavior: "smooth",
      });
    }
  };

  return (
    <nav>
      <ul>
        <li>
          <button
            className="nav-btn"
            onClick={() => handleButton("firstSection")}
          >
            Om oss
          </button>
          <div className="underline"></div>
        </li>
        <li>
          <button
            className="nav-btn"
            onClick={() => handleButton("secondSection")}
          >
            Vår vision
          </button>
          <div className="underline"></div>
        </li>
        <li>
          <button
            className="nav-btn"
            onClick={() => handleButton("thirdSection")}
          >
            Kontakt
          </button>
          <div className="underline"></div>
        </li>
      </ul>
    </nav>
  );
}
