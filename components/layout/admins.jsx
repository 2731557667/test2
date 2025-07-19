import React from "react";
import Image from "next/image";

import Principal from "@/public/img/administrative/principal.png";
import Chancellor from "@/public/img/administrative/chancellor.jpg";
import ProChancellor from "@/public/img/administrative/pro_chancellor.jpg";
import ViceChancellor from "@/public/img/administrative/vice_chancellor.jpg";
import Registrar from "@/public/img/administrative/registrar.jpg";

const data = {
  administrationPanel: [
    {
      id: 2,
      src: Chancellor,
      name: "Καθ. Δρ. Νικόλαος Παπαδάκης",
      position: "Πρύτανης",
      org: "Πολυτεχνείο Αθηνών Καινοτομίας",
    },
    {
      id: 3,
      src: ProChancellor,
      name: "Καθ. Δρ. Ελένη Κωνσταντίνου",
      position: "Αντιπρύτανης",
      org: "Πολυτεχνείο Αθηνών Καινοτομίας",
    },
    {
      id: 4,
      src: ViceChancellor,
      name: "Καθ. Δρ. Δημήτριος Γεωργίου",
      position: "Κοσμήτορας",
      org: "Πολυτεχνείο Αθηνών Καινοτομίας",
    },
    {
      id: 5,
      src: Registrar,
      name: "Δρ. Μαρία Αθανασίου",
      position: "Γραμματέας",
      org: "Πολυτεχνείο Αθηνών Καινοτομίας",
    },
    {
      id: 1,
      src: Principal,
      name: "Δρ. Αναστάσιος Παπαδόπουλος",
      position: "Διευθυντής",
      org: "Πολυτεχνείο Αθηνών Καινοτομίας",
    },
  ],
};

const AdministrationPanel = () => {
  return (
    <div className="pt-4 bg-white">
    </div>
  );
};

export default AdministrationPanel;
