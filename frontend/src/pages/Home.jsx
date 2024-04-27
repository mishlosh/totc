import React, { useState } from "react";
import "./CaribbeanMap.css";

import trinidadIcon from "./Images/Trinidad.png";
import barbadosIcon from "./Images/Barbados.png";
import jamaicaIcon from "./Images/Jamaica.png";
import cubaIcon from "./Images/Cuba.png";
import drIcon from "./Images/DR.png";
import haitiIcon from "./Images/Haiti.png";
import bahamasIcon from "./Images/Bahamas.png";
import puertoricoIcon from "./Images/PuertoRico.png";
import guyanaIcon from "./Images/Guyana.png";
import logo from "./Images/logo.png";

const CaribbeanMap = () => {
  const [selectedCountry, setSelectedCountry] = useState("");
  const [countryInfo, setCountryInfo] = useState("");

  const icons = [
    {
      name: "Trinidad and Tobago",
      icon: trinidadIcon,
      style: { top: "78%", left: "85%" },
      info: "Port of Spain is the capital city of Trinidad and Tobago. The national dish of Trinidad and Tobago is called 'roti,' a delicious flatbread typically filled with curried meat, vegetables, or chickpeas.",
    },
    {
      name: "Barbados",
      icon: barbadosIcon,
      style: { top: "60%", left: "89%" },
      info: "Bridgetown is the capital city of Barbados. The national dish of Barbados is 'cou-cou and flying fish,' a savory dish made from cornmeal and okra, served with seasoned flying fish.",
    },
    {
      name: "Jamaica",
      icon: jamaicaIcon,
      style: { top: "41%", left: "35%" },
      info: "Kingston is the capital city of Jamaica. The national dish of Jamaica is 'ackee and saltfish,' a flavorful dish made from salted codfish and ackee fruit, typically served with fried plantains and dumplings.",
    },
    {
      name: "Cuba",
      icon: cubaIcon,
      style: { top: "26%", left: "37%" },
      info: "Havana is the capital city of Cuba. The national dish of Cuba is 'ropa vieja,' a hearty stew made from shredded beef, tomatoes, onions, and peppers, often served with rice and black beans.",
    },
    {
      name: "Dominican Republic",
      icon: drIcon,
      style: { top: "33%", left: "55%" },
      info: "Santo Domingo is the capital city of the Dominican Republic. The national dish of the Dominican Republic is 'mangu,' a mashed plantain dish served with sautéed onions, cheese, and fried eggs.",
    },
    {
      name: "Haiti",
      icon: haitiIcon,
      style: { top: "35%", left: "49%" },
      info: "Port-au-Prince is the capital city of Haiti. The national dish of Haiti is 'joumou,' a pumpkin soup traditionally served on Independence Day, January 1st.",
    },
    {
      name: "Bahamas",
      icon: bahamasIcon,
      style: { top: "3%", left: "30%" },
      info: "Nassau is the capital city of the Bahamas. The national dish of the Bahamas is 'conch salad,' a refreshing salad made from conch meat, peppers, onions, and citrus juice.",
    },
    {
      name: "Puerto Rico",
      icon: puertoricoIcon,
      style: { top: "37%", left: "65%" },
      info: "San Juan is the capital city of Puerto Rico. The national dish of Puerto Rico is 'mofongo,' a savory dish made from mashed fried plantains, garlic, and pork cracklings, often served with a garlic or tomato-based sauce.",
    },
    {
      name: "Guyana",
      icon: guyanaIcon,
      style: { top: "90%", left: "90%" },
      info: "Georgetown is the capital city of Guyana. The national dish of Guyana is 'pepperpot,' a rich and spicy meat stew made with cassareep (a thick, black sauce made from cassava), spices, and various meats such as beef, pork, or chicken.",
    },
  ];

  const selectCountry = (country, info) => {
    setSelectedCountry(country);
    setCountryInfo(info);
  };

  return (
    <div className="map-container">
      <div className="logo-container">
        <img src={logo} alt="Logo" className="logo" />
      </div>
      <div className="info-box">{selectedCountry && <p>{countryInfo}</p>}</div>
      {icons.map((country, index) => (
        <div
          key={index}
          style={{
            position: "absolute",
            top: country.style.top,
            left: country.style.left,
          }}
        >
          <img
            src={country.icon}
            alt={country.name}
            className="icon"
            onClick={() => selectCountry(country.name, country.info)}
          />
        </div>
      ))}
    </div>
  );
};

export default CaribbeanMap;
