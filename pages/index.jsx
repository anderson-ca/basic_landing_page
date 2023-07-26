import Image from "next/image";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <div className="flex flex-col bg-[#f7e4e1]">
      <section className="relative">
        <video
          className="w-full h-[100vh] object-cover"
          src="/hero.mp4"
          autoPlay
          loop
          muted
          type="video/mp4"
        />
        <button className="absolute bg-gray-900 text-gray-300 px-7 py-4 uppercase text-[1.1rem] z-9 top-[50vh] right-[42vw] flex gap-5 items-center font-edu leading-loose font-thin hover:text-pink-300 hover:font-bold w-[20rem] h-[5rem] justify-center rounded-md shadow-pink-bottom-left hover:shadow-pink-bottom-left-active">
          <>
            <Image src="/bag.png" height={50} width={50} />
          </>
          <p>get it today</p>
        </button>
      </section>
      <section className="relative w-full h-full py-5 flex flex-col justify-center text-lg gap-5 items-center">
        <div className=" absolute right-0 bottom-0">
          <Image
            src="/about-bg.png"
            height={400}
            width={400}
            alt="about background image"
          />
        </div>
        <div className="h-[60vh] w-[60vw] gap-8 my-[10vh] flex flex-col justify-center items-center font-edu text-[1.5rem] leading-relaxed">
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Similique,
            doloribus distinctio. Culpa, accusamus placeat voluptates beatae rem
            dolore, inventore distinctio quasi ex expedita necessitatibus
            corrupti, aperiam optio sint ipsam id! Lorem ipsum dolor, sit amet
            consectetur adipisicing elit. Similique, doloribus distinctio.
            Culpa, accusamus placeat voluptates beatae rem dolore, inventore
            distinctio quasi ex expedita necessitatibus corrupti, aperiam optio
            sint ipsam id!
          </p>
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Similique,
            doloribus distinctio. Culpa, accusamus placeat voluptates beatae rem
            dolore, inventore distinctio quasi ex expedita necessitatibus
            corrupti, aperiam optio sint ipsam id! Lorem ipsum dolor, sit amet
            consectetur adipisicing elit. Similique, doloribus distinctio.
            Culpa, accusamus placeat voluptates beatae rem dolore, inventore
            distinctio quasi ex expedita necessitatibus corrupti, aperiam optio
            sint ipsam id!
          </p>
        </div>
      </section>
    </div>
  );
}
