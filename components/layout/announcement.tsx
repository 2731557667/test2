"use client";
import React, { use, useEffect, useState } from "react";
import { ExpandableCard } from "../ui/expandable-card";
import { getAnnouncements, getImgLink } from "@/lib/data";
import { BellOff, BellRing, BookUser, CalendarDays, School, ScrollText, TreePalm, TriangleAlert } from "lucide-react";
import Loading from "@/app/loading";
import { Skeleton } from "../ui/skeleton";


type Card = {
  date: string;
  title: string;
  icon: string;
  content: string;
  important: boolean;
  image: string | null;
};


const Announcement = () => {
  const [cards, setCards] = useState<Card[]>([]);
  const [loading, setLoading] = useState(true);
  const [popup, setPopup] = useState<string | null>(null);

  useEffect(() => {
    getAnnouncements().then((data) => {
      const temp: Card[] = []
      data.map((item) => {
        temp.push({
          date: item[0],
          title: item[3],
          icon: item[2],
          content: item[4],
          important: item[5]=="Yes" ? true : false,
          image: item[6]!= "" ? getImgLink(item[6]) : null,
        })

      });
      setLoading(false);
      setCards(temp);
    });
  },[])


  return (
    <div className="w-full max-w-7xl mx-auto">
      <div className="grid md:grid-cols-2 gap-8 md:gap-12 animate-slideUp">
        {/* Left side announcement area */}
        <div className="bg-white rounded-lg p-6 shadow-sm border border-gray-100 card-hover">
          <h2 className="text-2xl md:text-3xl font-bold flex items-center mb-6 text-gray-800">
            <span className="w-1.5 h-6 bg-blue-600 rounded-full mr-3 animate-pulse"></span> 
            Ανακοινώσεις
            <BellRing className="ml-2 text-blue-600" size={24} />
          </h2>
          
          {loading ? (
            <div className="space-y-4">
              <Skeleton className="w-full h-24 rounded-lg bg-gray-100" />
              <Skeleton className="w-full h-24 rounded-lg bg-gray-100" />
            </div>
          ) : cards.length == 0 ? (
            <div className="flex justify-center items-center flex-col gap-4 py-8 text-gray-500"> 
              <BellOff size={48} strokeWidth={1.5} />
              <p className="text-lg">Δεν υπάρχουν ανακοινώσεις</p>
            </div>
          ) : (
            <div className="overflow-hidden">
              <ExpandableCard cards={cards} />
            </div>
          )}
        </div>

        {/* Right side introduction area */}
        <div className="bg-white rounded-lg p-6 shadow-sm border border-gray-100 card-hover flex flex-col">
          <h2 className="text-2xl md:text-3xl font-bold flex items-center mb-6 text-gray-800">
            <span className="w-1.5 h-6 bg-blue-600 rounded-full mr-3"></span> 
            Σχετικά με εμάς
            <School className="ml-2 text-blue-600" size={24} />
          </h2>
          
          <div className="space-y-4 text-gray-600 flex-grow">
            <p className="text-justify text-base md:text-lg">
              Το Πολυτεχνείο ιδρύθηκε το 2018 και βρίσκεται στο κεντρικό συγκρότημα της Αθήνας στην περιοχή Ιλίσια. 
              Το ίδρυμα κερδίζει γρήγορα φήμη για την υψηλή ποιότητα εκπαίδευσης και την εξαιρετική σχέση μεταξύ καθηγητών και φοιτητών.
            </p>
            <p className="text-justify text-base md:text-lg">
              Με φοιτητές που επιδεικνύουν μεγάλο ταλέντο σε ακαδημαϊκές, τεχνικές, αθλητικές και πολιτιστικές δραστηριότητες, 
              και με την ενεργή υποστήριξη του Πανεπιστημίου, το Πολυτεχνείο βρίσκεται στο σωστό δρόμο για να γίνει σύντομα 
              ένα από τα καλύτερα τεχνικά ιδρύματα της χώρας.
            </p>
          </div>
          
          <div className="mt-6">
            <a 
              href="/about" 
              className="inline-flex items-center text-blue-600 hover:text-blue-800 font-medium"
            >
              Μάθετε περισσότερα 
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Announcement;
