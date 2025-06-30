import React from "react";
import whybg from "@/public/img/whyucek.jpg";
import { Award, BarChart3, Book, Calendar, CheckCircle, GraduationCap, Users } from "lucide-react";

const WhyPSW = () => {
  // Feature data
  const stats = [
    {
      value: "A+",
      label: "Akreditaciona ocena",
      icon: <Award className="h-6 w-6 mb-2" />
    },
    {
      value: "20+",
      label: "Obrazovni programi",
      icon: <Book className="h-6 w-6 mb-2" />
    },
    {
      value: "95%",
      label: "Zadovoljstvo studenata",
      icon: <BarChart3 className="h-6 w-6 mb-2" />
    },
    {
      value: "24/7",
      label: "Pristup platformi",
      icon: <Calendar className="h-6 w-6 mb-2" />
    },
  ];

  return (
    <div
      className="relative bg-cover bg-fixed bg-center h-auto md:min-h-screen py-16 text-white" 
      style={{ backgroundImage: `url(${whybg.src})` }}
    >
      <div className="absolute inset-0 bg-black/70 backdrop-blur-sm"></div>
      
      <div className="relative z-10 container mx-auto px-4 py-8 md:py-16">
        <div className="max-w-4xl mx-auto text-center mb-12 animate-fadeIn">
          <div className="flex items-center justify-center mb-4">
            <div className="w-20 h-1 bg-blue-500 rounded"></div>
            <h2 className="text-4xl md:text-5xl font-bold px-4">Zašto BTIA?</h2>
            <div className="w-20 h-1 bg-blue-500 rounded"></div>
          </div>
          <p className="text-xl text-blue-200 mt-2">Zašto izabrati Београдски технички институт за аутоматизацију?</p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 max-w-6xl mx-auto">
          {/* Left content */}
          <div className="space-y-6 animate-slideIn">
            <div className="bg-white/10 backdrop-blur-md p-6 rounded-lg border border-white/20 hover:bg-white/15 transition-all">
              <h3 className="text-2xl font-bold flex items-center mb-4">
                <CheckCircle className="mr-2 text-blue-400" />
                Visok kvalitet obrazovanja
              </h3>
              <p className="text-gray-100 text-lg">
                Београдски технички институт за аутоматизацију (BTIA) je vodeća institucija za online obrazovanje u Srbiji, nudeći inovativne programe i savremene metode nastave. Naša platforma omogućava vrhunsko obrazovanje bez geografskih ograničenja, dostupno u svakom trenutku.
              </p>
            </div>
            
            <div className="bg-white/10 backdrop-blur-md p-6 rounded-lg border border-white/20 hover:bg-white/15 transition-all">
              <h3 className="text-2xl font-bold flex items-center mb-4">
                <Users className="mr-2 text-blue-400" />
                Snažna zajednica
              </h3>
              <p className="text-gray-100 text-lg">
                Naša studentska zajednica je najveća snaga BTIA-a. Studenti razvijaju komunikacione i timske veštine kroz zajedničke projekte. Naš centar je kao velika porodica u kojoj se svaki glas čuje.
              </p>
            </div>
          </div>
          
          {/* Right content */}
          <div className="space-y-6 pt-0 md:pt-16 animate-slideUp">
            <div className="bg-white/10 backdrop-blur-md p-6 rounded-lg border border-white/20 hover:bg-white/15 transition-all">
              <h3 className="text-2xl font-bold flex items-center mb-4">
                <GraduationCap className="mr-2 text-blue-400" />
                Fleksibilni kursevi
              </h3>
              <p className="text-gray-100 text-lg">
                BTIA nudi raznovrsne interesne grupe uključujući programiranje, dizajn igara, robotiku i strane jezike. Naši napredni alati i interaktivne metode čine online učenje zanimljivim i efikasnim, pripremajući studente za izazove savremenog sveta.
              </p>
            </div>
            
            <div className="bg-white/10 backdrop-blur-md p-6 rounded-lg border border-white/20 hover:bg-white/15 transition-all">
              <h3 className="text-2xl font-bold flex items-center mb-4">
                <CheckCircle className="mr-2 text-blue-400" />
                Inovativne metode nastave
              </h3>
              <p className="text-gray-100 text-lg">
                BTIA je idealan izbor za one koji cene slobodu učenja i žele da se razvijaju u inspirativnom okruženju. Prilagođavamo plan učenja svakom studentu prema individualnim potrebama i tempu.
              </p>
            </div>
          </div>
        </div>
        
        {/* Statistics */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto mt-16">
          {stats.map((stat, index) => (
            <div 
              key={index}
              className="bg-white/5 backdrop-blur p-6 rounded-lg border border-white/10 text-center hover:bg-white/15 transition-all transform hover:-translate-y-1 duration-300"
            >
              {stat.icon}
              <p className="text-3xl md:text-4xl font-bold text-white">{stat.value}</p>
              <p className="text-blue-300 text-sm md:text-base">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default WhyPSW;
