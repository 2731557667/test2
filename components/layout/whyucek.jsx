import React from "react";
import whybg from "@/public/img/whyucek.jpg";
import { Award, BarChart3, Book, Calendar, CheckCircle, GraduationCap, Users } from "lucide-react";

const WhyPSW = () => {
  // Feature data
  const stats = [
    {
      value: "A+",
      label: "Διαπίστευση αξιολόγησης",
      icon: <Award className="h-6 w-6 mb-2" />
    },
    {
      value: "20+",
      label: "Εκπαιδευτικά προγράμματα",
      icon: <Book className="h-6 w-6 mb-2" />
    },
    {
      value: "95%",
      label: "Ικανοποίηση φοιτητών",
      icon: <BarChart3 className="h-6 w-6 mb-2" />
    },
    {
      value: "24/7",
      label: "Πρόσβαση στην πλατφόρμα",
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
            <h2 className="text-4xl md:text-5xl font-bold px-4">Γιατί API;</h2>
            <div className="w-20 h-1 bg-blue-500 rounded"></div>
          </div>
          <p className="text-xl text-blue-200 mt-2">Γιατί να επιλέξετε το Πολυτεχνείο Αθηνών Καινοτομίας;</p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 max-w-6xl mx-auto">
          {/* Left content */}
          <div className="space-y-6 animate-slideIn">
            <div className="bg-white/10 backdrop-blur-md p-6 rounded-lg border border-white/20 hover:bg-white/15 transition-all">
              <h3 className="text-2xl font-bold flex items-center mb-4">
                <CheckCircle className="mr-2 text-blue-400" />
                Υψηλή ποιότητα εκπαίδευσης
              </h3>
              <p className="text-gray-100 text-lg">
                Το Πολυτεχνείο Αθηνών Καινοτομίας (API) είναι ένα κορυφαίο ίδρυμα για online εκπαίδευση στην Ελλάδα, προσφέροντας καινοτόμα προγράμματα και σύγχρονες μεθόδους διδασκαλίας. Η πλατφόρμα μας επιτρέπει κορυφαία εκπαίδευση χωρίς γεωγραφικούς περιορισμούς, διαθέσιμη οποιαδήποτε στιγμή.
              </p>
            </div>
            
            <div className="bg-white/10 backdrop-blur-md p-6 rounded-lg border border-white/20 hover:bg-white/15 transition-all">
              <h3 className="text-2xl font-bold flex items-center mb-4">
                <Users className="mr-2 text-blue-400" />
                Ισχυρή κοινότητα
              </h3>
              <p className="text-gray-100 text-lg">
                Η φοιτητική μας κοινότητα είναι η μεγαλύτερη δύναμη του API. Οι φοιτητές αναπτύσσουν επικοινωνιακές και ομαδικές δεξιότητες μέσω κοινών έργων. Το κέντρο μας είναι σαν μια μεγάλη οικογένεια όπου κάθε φωνή ακούγεται.
              </p>
            </div>
          </div>
          
          {/* Right content */}
          <div className="space-y-6 pt-0 md:pt-16 animate-slideUp">
            <div className="bg-white/10 backdrop-blur-md p-6 rounded-lg border border-white/20 hover:bg-white/15 transition-all">
              <h3 className="text-2xl font-bold flex items-center mb-4">
                <GraduationCap className="mr-2 text-blue-400" />
                Ευέλικτα μαθήματα
              </h3>
              <p className="text-gray-100 text-lg">
                Το API προσφέρει ποικίλες ομάδες ενδιαφέροντος συμπεριλαμβανομένων προγραμματισμού, σχεδιασμού παιχνιδιών, ρομποτικής και ξένων γλωσσών. Τα προηγμένα εργαλεία και οι διαδραστικές μέθοδοί μας κάνουν την online μάθηση ενδιαφέρουσα και αποτελεσματική, προετοιμάζοντας τους φοιτητές για τις προκλήσεις του σύγχρονου κόσμου.
              </p>
            </div>
            
            <div className="bg-white/10 backdrop-blur-md p-6 rounded-lg border border-white/20 hover:bg-white/15 transition-all">
              <h3 className="text-2xl font-bold flex items-center mb-4">
                <CheckCircle className="mr-2 text-blue-400" />
                Καινοτόμες μέθοδοι διδασκαλίας
              </h3>
              <p className="text-gray-100 text-lg">
                Το API είναι η ιδανική επιλογή για όσους εκτιμούν την ελευθερία της μάθησης και θέλουν να αναπτυχθούν σε ένα εμπνευσμένο περιβάλλον. Προσαρμόζουμε το πλάνο μάθησης για κάθε φοιτητή σύμφωνα με τις ατομικές ανάγκες και τον ρυθμό του.
              </p>
            </div>
          </div>
        </div>
        
        {/* Statistics */}
        <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
          {stats.map((stat, index) => (
            <div key={index} className="bg-white/10 backdrop-blur-md p-6 rounded-lg text-center border border-white/20 hover:bg-white/15 transition-all">
              <div className="flex justify-center text-blue-400 mb-3">
                {stat.icon}
              </div>
              <div className="text-3xl font-bold text-white mb-2">{stat.value}</div>
              <div className="text-sm text-blue-200">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default WhyPSW;
