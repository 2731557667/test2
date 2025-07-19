// app/[slug]/page.js

import fs, { link } from "fs";
import path from "path";
import Topnav from "@/components/header/topnav";
import Nav from "@/components/header/nav";
import Footer from "@/components/layout/footer";

import Image from "next/image";
import ucekImage from "@/public/img/ucek.jpeg";
import Markdown from "react-markdown";
import remarkGfm from "remark-gfm";
import rehypeRaw from "rehype-raw";
import Link from "next/link";
import { BookOpenCheck, CodeXml, Cpu, LinkIcon, Network } from "lucide-react";
import { notFound } from "next/navigation";

export const metadata = {
  title: "Καθηγητές",
  description: "Πολυτεχνείο Αθηνών Καινοτομίας, Αθήνα, Ελλάδα",
};

export default async function Post({
  params,
}: {
  params: { id: string; section: string };
}) {
  return (
    <>
      <Topnav />
      <Nav />
      <div className="h-[30%] relative text-center -z-20">
        <Image
          src={ucekImage}
          width={1920}
          height={1080}
          alt="Εικόνα σλάιντερ 1"
          className="h-[300px] w-full object-cover brightness-50"
        />
        <div className="absolute w-full top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-white">
          <h1 className="text-3xl font-bold text-primary-foreground sm:text-4xl md:text-5xl">
            Καθηγητές
          </h1>
          <p className="text-xs md:text-lg text-slate-200">
            Πολυτεχνείο Αθηνών Καινοτομίας, Αθήνα, Ελλάδα
          </p>
        </div>
      </div>
      <div className="z-20 w-full p-5 md:p-10 grid gap-10 justify-center grid-cols-1 md:grid-cols-2">
        <Link
          href={`/faculties/cse`}
          className="flex bg-[#dbdbdb62] border text-center shadow-lg flex-col justify-center py-20 scale-100 rounded hover:scale-105  transition-transform items-center gap-3"
        >
          <CodeXml size={40} />
          Računarstvo i programiranje
        </Link> 
        <Link
          href={`/faculties/ece`}
          className="flex bg-[#dbdbdb62] border text-center shadow-lg flex-col  py-20 scale-100 rounded hover:scale-105 transition-transform items-center gap-3"
        >
          <Cpu size={40} />
          Elektronika i telekomunikacije
        </Link>
        <Link
          href={`/faculties/it`}
          className="flex bg-[#dbdbdb62] border text-center shadow-lg flex-col py-20 scale-100 rounded hover:scale-105 transition-transform items-center gap-2"
        >
          <Network size={40} />
          Informacione tehnologije
        </Link>
        <Link
          href={`/faculties/gen`}
          className="flex bg-[#dbdbdb62] border text-center shadow-lg flex-col py-20 scale-100 rounded hover:scale-105 transition-transform items-center gap-2"
        >
          <BookOpenCheck size={40} />
          Opšti smerovi
        </Link>
      </div>

      <Footer />
    </>
  );
}
