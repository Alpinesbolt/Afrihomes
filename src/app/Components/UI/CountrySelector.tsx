"use client";

import React, { useState } from "react";
import Select from "react-select";
import countries from "world-countries";
import statesData from "../../lib/states.json"; 
import localGovtData from "../../lib/localGovernments.json"; 
import { MapPin } from "lucide-react";

type OptionType = {
  value: string;
  label: string;
};


const countryOptions: OptionType[] = countries.map((country) => ({
  value: country.name.common,
  label: country.name.common,
}));

export default function LocationSelector  () {
  const [selectedCountry, setSelectedCountry] = useState<OptionType | null>(null);
  const [selectedState, setSelectedState] = useState<OptionType | null>(null);
  const [selectedLGA, setSelectedLGA] = useState<OptionType | null>(null);

  const handleCountryChange = (selectedOption: OptionType | null) => {
    setSelectedCountry(selectedOption);
    setSelectedState(null);
    setSelectedLGA(null);
  };

  const handleStateChange = (selectedOption: OptionType | null) => {
    setSelectedState(selectedOption);
    setSelectedLGA(null);
  };

  // Get states based on selected country
  const stateOptions = selectedCountry && statesData[selectedCountry.value]
    ? statesData[selectedCountry.value].map((state: string) => ({
        value: state,
        label: state,
      }))
    : [];

  // Get LGAs based on selected state
  const lgaOptions = selectedState && localGovtData[selectedState.value]
    ? localGovtData[selectedState.value].map((lga: string) => ({
        value: lga,
        label: lga,
      }))
    : [];

  return (
    <div style={{ display: "flex", gap: "20px" }}>
      <div>
      
        <Select
          className="w-48"
          options={countryOptions}
          value={selectedCountry}
          onChange={handleCountryChange}
          placeholder="Country..."
        />
      </div>
      <div className="text-gray-300">_ _ _ _</div>
      <div>
        <Select
          className="w-48"
          options={stateOptions}
          value={selectedState}
          onChange={handleStateChange}
          placeholder="State"
          isDisabled={!selectedCountry}
        />
      </div>
      <div className="text-gray-300">_ _ _ _</div>
      <div>
        <Select
          className="w-48"
          options={lgaOptions}
          value={selectedLGA}
          onChange={setSelectedLGA}
          placeholder="Local Govt. Area"
          isDisabled={!selectedState}
        />
      </div>
      <div className="text-gray-300">_ _ _ _ _ _ _ _ _ _ _ _ _ _</div>
    </div>
  );
};

