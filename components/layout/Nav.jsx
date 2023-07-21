import Image from "next/image";
import Link from "next/link";

const Nav = () => {
  return (
    <nav className="flex flex-col bg-black text-white p-2 items-center text-sm font-light fixed z-10 w-full">
      <ul className="w-[70%] flex flex-row gap-5 justify-end p-1 items-center">
        <li className="mr-auto flex flex-row gap-3 items-center">
          <>
            <Image
              src="/makeup-icon.png"
              height={25}
              width={25}
              alt="nav icon"
            />
          </>
          Home
        </li>
        <li className="">About</li>
        <li className="">Contact</li>
      </ul>
    </nav>
  );
};

export default Nav;
