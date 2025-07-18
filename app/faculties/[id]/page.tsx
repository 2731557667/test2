import fs from "fs";
import path from "path";
import Topnav from "@/components/header/topnav";
import Nav from "@/components/header/nav";
import Footer from "@/components/layout/footer";

import Image from "next/image";
import ucekImage from "@/public/img/ucek.jpeg";
import Markdown from "react-markdown";
import remarkGfm from "remark-gfm";
import rehypeRaw from "rehype-raw";
import { useEffect, useState } from "react";
import { notFound } from "next/navigation";
import { FACULTY_SHEET_ID, getImgLink } from "@/lib/data";
import Papa from "papaparse";

const contentDir = path.join(process.cwd(), "contents");

export async function generateStaticParams() {
  return [{ id: "cse" }, { id: "ece" }, { id: "it" }, { id: "gen" }];
}

export async function generateMetadata({
  params,
}: {
  params: { id: string; section: string };
}) {
  return {
    title: "Καθηγητές",
    description:
      (params.id == "cse" && "Επιστήμη Υπολογιστών και Μηχανική") ||
      (params.id == "ece" && "Ηλεκτρονικά και Τηλεπικοινωνίες") ||
      (params.id == "it" && "Τεχνολογίες Πληροφοριών") ||
      (params.id == "gen" && "Γενικές Επιστήμες"),
  };
}

export default async function Post({
  params,
}: {
  params: { id: string; section: string };
}) {
  if (
    params.id != "cse" &&
    params.id != "ece" &&
    params.id != "it" &&
    params.id != "gen"
  ) {
    return notFound();
  }
  const faculties = await getFacultyDetais(params.id);

  return (
    <>
      <Topnav />
      <Nav />
      <div className="h-[30%] relative text-center -z-20">
        <Image
          src={ucekImage}
          width={1920}
          height={1080}
          alt="Slider Image 1"
          className="h-[300px] w-full object-cover brightness-50"
        />
        <div className="absolute w-full top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-white">
          <h1 className="text-2xl font-bold text-primary-foreground sm:text-4xl md:text-5xl">
            Καθηγητές
          </h1>
          <p className="text-xs md:text-lg text-slate-200">
            Τμήμα{" "}
            {params.id == "cse" && "Επιστήμης Υπολογιστών και Μηχανικής"}
            {params.id == "ece" && "Ηλεκτρονικών και Τηλεπικοινωνιών"}
            {params.id == "it" && "Τεχνολογιών Πληροφοριών"}
            {params.id == "gen" && "Γενικών Επιστημών"}
          </p>
        </div>
      </div>
      <div className="z-20 w-full p-10 flex justify-center">
        <div className="w-full md:w-3/4 lg:w-1/2 md:grid-cols-2 grid grid-cols-1 gap-6">
          {faculties &&
            faculties.map((faculty, index) => (
              <div className="flex" key={`id-${index}`}>
                <Image
                  src={getImgLink(faculty[3])}
                  width={150}
                  height={150}
                  alt={faculty[0]}
                  className="rounded-lg aspect-4/5"
                />
                <div className="ml-5">
                  <h1 className="text-xl font-bold">{faculty[0]}</h1>
                  <p className="text-sm">{faculty[1]}</p>
                  {params.id == "gen" && <p className="text-sm text-gray-700 mt-1">{faculty[4]}</p>}
                  <p className=" text-sm mt-2 text-gray-500">
                    Qualification: {faculty[2]}
                  </p>
                </div>
              </div>
            ))}
        </div>
      </div>

      <Footer />
    </>
  );
}

function getData(url: string): Promise<string[][]> {
  return new Promise((resolve, reject) => {
    fetch(url)
      .then((response) => {
        if (!response.ok) {
          reject(response.statusText);
        }
        return response.text();
      })
      .then((text) => {
        Papa.parse(text, {
          skipEmptyLines: true,
          complete(results: { data: any }) {
            let d = results.data;
            d.shift();
            resolve(d);
          },
          error(error: any) {
            reject(error);
          },
        });
      })
      .catch((error) => {
        reject(error);
      });
  });
}

function getFacultyDetais(id: string): Promise<string[][]> {
  const url =
    "https://docs.google.com/spreadsheets/d/" +
    FACULTY_SHEET_ID +
    `/gviz/tq?tqx=out:csv&sheet=${id}&tq=` +
    encodeURIComponent(`select C, D, E, F${id == "gen" ? ", G" : ""}`)
  return getData(url);
}
