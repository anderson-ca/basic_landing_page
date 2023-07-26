import Image from "next/image";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <div className="flex flex-col">
      <section className="relative">
        <video
          className="w-full h-[100vh] object-cover"
          src="/hero.mp4"
          autoPlay
          loop
          muted
          type="video/mp4"
        />
        <button className="absolute bg-gray-900 text-gray-300 rounded-sm px-7 py-4 uppercase text-[1.1rem] z-10 top-[50vh] right-[42vw] flex gap-5 items-center font-edu leading-loose shadow-md font-thin">
          <Image src="/bag.png" height={50} width={50} />
          <p>get yours today</p>
        </button>
      </section>
      <section className="w-full h-full py-5 flex flex-col justify-center text-lg gap-5 items-center">
        <div className="flex flex-row w-[70vw] gap-5 my-[10vh]">
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
