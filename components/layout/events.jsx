"use client";
import { getImgLink, getUpcomingEvents, getRecentEvents } from "@/lib/data";
import React, { useEffect, useState } from "react";
import Marquee from "react-fast-marquee";
import moment from "moment";
import { CalendarDays, Clock, SquareArrowOutUpRight } from "lucide-react";
import { Skeleton } from "@/components/ui/skeleton";
import Image from "next/image";
import { resolveClubIcon } from "@/lib/utils";
import { color } from "framer-motion";
import { useQuery } from '@tanstack/react-query';



const NewsEvents = () => {
  const [upcomingData, setUpcomingData] = useState([]);
  const [recentData, setRecentData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const upcoming = await getUpcomingEvents();
        setUpcomingData(Array.isArray(upcoming) ? upcoming : []);

        // Only fetch recent events if there are no upcoming events
        if (upcoming.length === 0) {
          const recent = await getRecentEvents();
          setRecentData(Array.isArray(recent) ? recent : []);
        }

        setLoading(false);
      } catch (error) {
        console.error("An error occurred:", error);
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  // Determine which data to display
  const displayData = upcomingData.length > 0 ? upcomingData : recentData;
  const isRecentEvents = upcomingData.length === 0 && recentData.length > 0;

  const marqParams = {
    autoFill: displayData.length >= 3,
    pauseOnHover: true,
    speed: 80,
    play: displayData.length >= 3,
  };

  if (!loading && displayData.length === 0) {
    return null;
  }

  return (
    <div className="py-2 bg-white">
    </div >
  );
};

export default NewsEvents;