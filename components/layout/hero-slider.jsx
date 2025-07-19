import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselApi,
  CarouselPrevious,
  CarouselNext
} from "@/components/ui/carousel";
import Link from "next/link";
import Autoplay from "embla-carousel-autoplay";
import { useEffect, useState } from "react";
import Image from "next/image";
import { ChevronLeft, ChevronRight } from "lucide-react";

export function HeroSlider() {
  const [api, setApi] = useState();
  const [current, setCurrent] = useState(0);
  const [count, setCount] = useState(0);
  
  // Warsaw University of Technology image URL
  const warsawUniversityImageUrl = "https://urk.edu.pl/m/YDHEYVjU-WSwnDHV1RwMMDl91GVU6AwRdbgNSICwWBxwrfABDPThZFxJHZRNZR0FVBCVWK2U9FVsrVRk1LSZNXUdhQGw_Mk8AEkcjLgRQXWgcOUcUIANSGW5fGSogWFhNGSEqAn89SBRsRHUjF1lTFVJuUBloTlJWI1cENCoWDgoFcU8RPzJPAGxEdT8XUFFoASgXTXtOUkE1SRVkf1gLAhY0EBF9dUsaNA11dVQVSQ/nr_1.webp";
  
  // Create 5 carousel items with different titles and appropriate images
  const customSlides = [
    { 
      image: warsawUniversityImageUrl, 
      title: "Κορυφαίο Ερευνητικό Κέντρο", 
      description: "Κορυφαίο πολυτεχνείο καινοτομίας στην Ελλάδα" 
    },
    { 
      image: "https://www.polsl.pl/wp-content/uploads/2025/05/slider_3.jpg", 
      title: "Προηγμένη Έρευνα", 
      description: "Καινοτόμες τεχνολογίες και έρευνα" 
    },
    { 
      image: "https://urk.edu.pl/m/6DHEGWDgnZwM8ASEmGlJTUhtuDwM4FxUZblQVIiwbPQYTcU8CYmEMR39EdT8XQ1wVUm5THiYHA2ljTAAqKhsGM1hhKRwhIlofJwsLYClSWlAEJUYfFk0DWS1TFCM3WE5NEToZVnNtGh4vATkQG1ZGXA04agQmCxRQPhcaNiJYTk0bMhtUc20aFiBKe20VWFpDGiNZGy8QUg9uShwvIR8QTVtxAUohMhpJbAE6LhFSFhtKP1wNL0BKFy9BQX93ShpZR2NXTg/main_market_slider.webp", 
      title: "Διεθνής Συνεργασία", 
      description: "Παγκόσμια εταιρικά σχήματα στην εκπαίδευση" 
    },
    { 
      image: "https://urk.edu.pl/m/sDHEGWDgnZwM8ASEmGlJTUhtuDwM4FxUZblQVIiwbPQYTcU8CZGYBQXlEdT8XQ1wVUm5THiYHA2ljTAAqKhsGM1hhKRwhIlofJwsLYClSWlAEJUYfFk0DWS1TFCM3WE5NEToZVnNtGhgvBSc6BWhZVgITBCh7W0IFEw9AdmsQEghVf1dfMDlfUXRKMiFUGxZUByJBBSUOHFA-G0pkNhYLCxIhVx9zI0EDK0ptbR9aVVANbhlVOQsKUG4DUiU9S1tdRytDA2F1RQ/kampus_maj_1_1920_600.webp", 
      title: "Ακαδημαϊκή Αριστεία", 
      description: "Επιδίωξη της γνώσης και της καινοτομίας" 
    },
    { 
      image: "https://lh3.googleusercontent.com/-eYfrt0LhZxA/VDJ0i6_2OII/AAAAAAAArxk/pM84NH1eSuc/s912/SvecaniPrijemBrucosaPFB-060.JPG", 
      title: "Μέλλον της Τεχνολογίας", 
      description: "Τεχνολογία που διαμορφώνει το αύριο" 
    }
  ];

  useEffect(() => {
    if (!api) {
      return;
    }

    setCount(api.scrollSnapList().length);
    setCurrent(api.selectedScrollSnap() + 1);

    api.on("select", () => {
      setCurrent(api.selectedScrollSnap() + 1);
    });
  }, [api]);

  const handleDotClick = (index) => {
    if (api) {
      api.scrollTo(index);
    }
  };

  return (
    <section className="w-full relative">
      <Carousel
        setApi={setApi}
        opts={{
          align: "start",
          loop: true,
        }}
        className="w-full"
        plugins={[
          Autoplay({
            delay: 5000,
          }),
        ]}
      >
        {/* Custom navigation buttons */}
        <div className="absolute left-4 md:left-8 top-1/2 -translate-y-1/2 z-20">
          <button 
            onClick={() => api?.scrollPrev()}
            className="bg-black/30 hover:bg-black/50 text-white rounded-full p-2 backdrop-blur-sm transition-all"
            aria-label="Προηγούμενη εικόνα"
          >
            <ChevronLeft className="h-6 w-6" />
          </button>
        </div>
        
        <div className="absolute right-4 md:right-8 top-1/2 -translate-y-1/2 z-20">
          <button 
            onClick={() => api?.scrollNext()}
            className="bg-black/30 hover:bg-black/50 text-white rounded-full p-2 backdrop-blur-sm transition-all"
            aria-label="Επόμενη εικόνα"
          >
            <ChevronRight className="h-6 w-6" />
          </button>
        </div>
        
        {/* Dot navigation */}
        <div className="flex absolute bottom-6 md:bottom-10 z-20 w-full items-center justify-center gap-2">
          {Array(customSlides.length + 1)
            .fill(0)
            .map((_, index) => (
              <button
                key={index}
                onClick={() => handleDotClick(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  current === index + 1 
                    ? "bg-white w-6" 
                    : "bg-white/50 hover:bg-white/80"
                }`}
                aria-label={`Μετάβαση στην εικόνα ${index + 1}`}
              ></button>
            ))}
        </div>
        
        <CarouselContent>
          {/* First carousel slide */}
          <CarouselItem className="overflow-hidden">
            <div className="relative">
              <Image
                src="https://img95.699pic.com/photo/50123/0481.jpg_wh860.jpg"
                width={1920}
                height={1080}
                alt="Πολυτεχνείο Αθηνών Καινοτομίας"
                className="h-[75vh] w-full object-cover transition-transform duration-500"
                priority={true}
                unoptimized={true}
              />
              <div className="absolute inset-0 flex flex-col items-center justify-center space-y-4 bg-gradient-to-t from-black/70 to-transparent">
                <div className="space-y-4 text-center text-white max-w-4xl px-6 animate-fadeIn">
                  <h2 className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight">
                    {"Πολυτεχνείο Αθηνών Καινοτομίας"}
                  </h2>
                  <p className="text-xl md:text-2xl font-light">Αθήνα, Ελλάδα</p>
                  <div className="pt-4">
                    <Link 
                      href="/about" 
                      className="inline-flex items-center justify-center rounded-md bg-white px-6 py-3 text-lg font-medium text-black shadow transition-colors hover:bg-blue-600 hover:text-white"
                    >
                      Μάθετε περισσότερα
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </CarouselItem>
          
          {/* Render custom carousel items */}
          {customSlides.map((slide, index) => (
            <CarouselItem key={index} className="overflow-hidden">
              <div className="relative">
                <Image
                  src={slide.image}
                  width={1920}
                  height={1080}
                  alt={slide.title}
                  className="h-[75vh] w-full object-cover transition-transform duration-500"
                  unoptimized={true} // Allow external image URLs
                  loading={index < 2 ? "eager" : "lazy"}
                />
                <div className="absolute inset-0 flex flex-col items-center justify-center space-y-4 bg-gradient-to-t from-black/70 to-transparent">
                  <div className="space-y-4 text-center text-white max-w-4xl px-6 animate-fadeIn">
                    <h2 className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight">
                      {slide.title}
                    </h2>
                    <p className="text-xl md:text-2xl font-light">{slide.description}</p>
                    <div className="pt-4">
                      <Link 
                        href="/programs" 
                        className="inline-flex items-center justify-center rounded-md bg-white px-6 py-3 text-lg font-medium text-black shadow transition-colors hover:bg-blue-600 hover:text-white"
                      >
                        Εξερευνήστε προγράμματα
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
      </Carousel>
    </section>
  );
}
