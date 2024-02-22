import Link from "next/link";
import { usePathname } from "next/navigation";
const Navbar = () => {
  const pathname = usePathname();

  const Nav = ({ name, url }) => {
    return (
      <div>
        <Link
          className={pathname === url ? "text-[#5649e4] " : " text-[#b1b1b1] "}
          href={url}
        >
          {name}
        </Link>
      </div>
    );
  };
  return (
    <div className=" flex justify-evenly h-[80px] items-center fixed w-full font-bold z-50 bg-white ">
      <Nav name={"Pagina 1"} url={"/"} />
      <Nav name={"Pagina 2"} url={"/Pagina2"} />
      <Nav name={"Pagina 3"} url={"/Pagina3"} />
    </div>
  );
};

export default Navbar;
