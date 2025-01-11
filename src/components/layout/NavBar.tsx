export default function NavBar() {
  const handleButton = (elementInput: string) => {
    const element = document.getElementById(elementInput);

    if (element) {
      // Calculate the offset by subtracting 100 pixels from the top of the element
      const offset = element.offsetTop - 50;

      // Scroll to the calculated offset position
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
        </li>
        <li>
          <button
            className="nav-btn"
            onClick={() => handleButton("secondSection")}
          >
            Kontakt
          </button>
        </li>
        {/* <li>
          <button
            className="nav-btn"
            onClick={() => handleButton("thirdSection")}
          >
            Third Section
          </button>
        </li> */}
      </ul>
    </nav>
  );
}
