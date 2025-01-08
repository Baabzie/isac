export default function NavBar() {
  const handleButton = (elementInput: string) => {
    const element = document.getElementById(elementInput);

    if (element) {
      // Calculate the offset by subtracting 100 pixels from the top of the element
      const offset = element.offsetTop - 20;

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
            Varför Smartvärd?
          </button>
        </li>
        <li>
          <button
            className="nav-btn"
            onClick={() => handleButton("secondSection")}
          >
            Second Section
          </button>
        </li>
        <li>
          <button
            className="nav-btn"
            onClick={() => handleButton("thirdSection")}
          >
            Third Section
          </button>
        </li>
      </ul>
    </nav>
  );
}
