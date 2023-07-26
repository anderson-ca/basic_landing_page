import Image from "next/image";
import Link from "next/link";

const Nav = () => {
  return (
    <nav className="flex flex-col bg-gray-900 text-white items-center text-sm font-light fixed z-10 w-full pt-[5vh]">
      <i className="absolute left-0 top-0 h-full w-[20vw] overflow-clip">
        <Image src="/makeup-bg.png" height={250} width={250} alt="nav icon" />
      </i>
      <ul className="w-[30%] grid grid-cols-3 grid-rows-2 text-center items-center font-edu p-2">
        <li className=" col-span-3">
          <div className="flex justify-center">
            <i className="pb-3">
              <Image
                src="/nav-icon.png"
                height={70}
                width={70}
                alt="nav icon"
              />
            </i>
          </div>
        </li>
        <li className="p-1 text-[1.2rem] font-light text-gray-400 tracking-widest hover:text-pink-300 hover:font-bold">
          Home
        </li>
        <li className="border-x border-gray-500 p-1 text-[1.2rem] font-light text-gray-400 tracking-widest hover:text-pink-300 hover:font-bold">
          About
        </li>
        <li className="text-[1.2rem] font-thin text-gray-400 tracking-widest hover:text-pink-300 hover:font-bold">
          Contact
        </li>
      </ul>
    </nav>
  );
};

export default Nav;
