export function NavBar() {
  const smoothScrollTo = (e) => {
    e.preventDefault();
    const element = document.getElementById("contact");
    element.scrollIntoView({
      block: "start",
      behavior: "smooth",
    });
  };

  return (
    <div className="flex justify-center items-center absolute top-2 right-4">
      <div className="flex justify-center items-center gap-6">
        <a href="/Cv Matheus Borges.pdf" download>
          <span className="text-gray text-sm ">
            <span className="text-roxo text-sm font-bold"> | </span>
            Download CV
          </span>
        </a>
        <a href="" onClick={smoothScrollTo}>
          <span className="text-gray text-sm ">
            <span className="text-roxo text-sm font-bold"> | </span>
            Contato
          </span>
        </a>
      </div>
    </div>
  );
}
