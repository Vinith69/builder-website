import Image from "next/image";
import Link from "next/link";

const navLinks = ["Home", "Projects", "About", "Contact Us", "ENQUIRE NOW"];

const Navbar = () => {
  return (
    <nav className="flex">
      <div className="logo-container">
        <Image
          src="/logos/logo.png"
          width={200}
          height={54}
          alt="Picture of the author"
        />
      </div>

      <div>
        {navLinks.map((e) => {
          <Link href={`#`}>Home</Link>;
        })}
      </div>
    </nav>
  );
};

export default Navbar;
