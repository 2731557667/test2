"use client";
import React from 'react';
import { useRouter } from 'next/navigation';

const MorePSW = () => {
  const router = useRouter();

  return (
    <div className=' bg-white'>
    <div className="bg-[#2D3E50] py-10 text-center ">
      <h2 className="text-3xl font-bold text-white mb-4">Σημαντικοί Σύνδεσμοι</h2>
      <div className="flex justify-center items-center ">
        <span className="block w-20 h-1 bg-blue-500 "></span>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 px-10 py-5 md:py-0 justify-center gap-4 mt-8">
        <button onClick={()=>router.push("/admissions/btech")} className="text-white border border-white rounded-lg px-6 py-3 flex items-center justify-between hover:bg-white hover:text-blue-900 transition duration-300">
          Εισαγωγή <span className="ml-2">&rarr;</span>
        </button>
        <button onClick={()=> router.push("/about/disclosures")} className="text-white border border-white rounded-lg px-6 py-3 flex items-center justify-between hover:bg-white hover:text-blue-900 transition duration-300">
          Πληροφορίες <span className="ml-2">&rarr;</span>
        </button>
        <button onClick={()=> router.push("/about/office")} className="text-white border border-white rounded-lg px-6 py-3 flex items-center justify-between hover:bg-white hover:text-blue-900 transition duration-300">
          Γραφείο <span className="ml-2">&rarr;</span>
        </button>
        <button onClick={()=> router.push("/about/principal")} className="text-white border border-white rounded-lg px-6 py-3 flex items-center justify-between hover:bg-white hover:text-blue-900 transition duration-300">
          Διευθυντής <span className="ml-2">&rarr;</span>
        </button>
        <button onClick={()=> router.push("/faculties")} className="text-white border border-white rounded-lg px-6 py-3 flex items-center justify-between hover:bg-white hover:text-blue-900 transition duration-300">
          Καθηγητές <span className="ml-2">&rarr;</span>
        </button>
        <button onClick={()=> router.push("/about/achievements")} className="text-white border border-white rounded-lg px-6 py-3 flex items-center justify-between hover:bg-white hover:text-blue-900 transition duration-300">
          Επιτεύγματα <span className="ml-2">&rarr;</span>
        </button>
      </div>
    </div>
    </div>
  );
};

export default MorePSW;
