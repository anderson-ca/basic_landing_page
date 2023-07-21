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
        <button className="absolute bg-black text-white rounded-md px-3 py-2 uppercase text-md z-10 top-[50vh] right-[45vw]">
          get yours today
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
