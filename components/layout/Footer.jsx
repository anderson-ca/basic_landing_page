import Image from "next/image";

const Footer = () => {
  return (
    <footer className="bg-gray-900 flex flex-col items-end p-3">
      <ul className="flex gap-5 p-2">
        <li>
          <Image
            src="/facebook-icon.png"
            height={35}
            width={35}
            alt="footer icon"
          />
        </li>
        <li>
          <Image
            src="/insta-icon.png"
            height={35}
            width={35}
            alt="footer icon"
          />
        </li>
        <li>
          <Image
            src="/twitter-icon.png"
            height={35}
            width={35}
            alt="footer icon"
          />
        </li>
        <li className="flex items-center">
          <div className="border border-gray-400 w-[200px] h-0"></div>
        </li>
      </ul>
    </footer>
  );
};

export default Footer;
