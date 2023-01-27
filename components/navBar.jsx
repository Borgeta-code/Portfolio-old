import Image from "next/image";
import logo from "../public/img/logo.svg";

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
        <a
          href="https://www.canva.com/design/DAFR80w_In4/tsvs5SI924m5z3pEbHa1hA/view?utm_content=DAFR80w_In4&utm_campaign=designshare&utm_medium=link&utm_source=publishsharelink"
          target="_blank"
          rel="noopener noreferrer"
        >
          <span className="text-gray text-sm ">
            <span className="text-roxo text-sm font-bold"> | </span>
            Currículo
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
