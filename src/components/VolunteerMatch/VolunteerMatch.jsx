import React, {useEffect, useState} from "react";
import VolunteeringForm from "./VolunteeringForm";
import MatchingTable from "./MatchingTable";
import Addresses from "./Addresses";


// pure component syntax
const VolunteerMatch = () => {
  const [addresses, setAddresses] = useState(Addresses);
  const [cityInput, setCity] = useState("");
  const [checkboxes, setCheckboxes] = useState({
    kosher: false,
    parve: false,
    vegan: false,
    sugerfree: false,
    lactosefree: false,
    glutenfree: false,
    peanutfree: false,
    nutsfree: false,
  });

  function filterAddresses() {
    const filteredAddresses = Addresses.filter((address) =>{
      console.log(address.city , cityInput);
          return address.city.includes(cityInput) &&
          (!address.kosher || checkboxes["kosher"]) &&
          (!address.parve || checkboxes['parve']) &&
          (!address.vegan || checkboxes['vegan']) &&
          (!address.sugerfree || checkboxes['sugerfree']) &&
          (!address.lactosefree || checkboxes['lactosefree']) &&
          (!address.glutenfree || checkboxes['glutenfree']) &&
          (!address.peanutfree || checkboxes['peanutfree']) &&
          (!address.nutsfree || checkboxes['nutsfree'])
    }
    );
    setAddresses(filteredAddresses);
  }

  useEffect(() => {
    filterAddresses();
  },[cityInput,checkboxes])

  const onCityChange = (event) => {
    const cityInput = event.target.value;
    setCity(cityInput);
  };

  const onCheckboxChange = (event, checkboxId) => {
    setCheckboxes({
      ...checkboxes,
      [checkboxId]: event.target.checked
    })
  };

  return (
    <div>
      <VolunteeringForm
        onCityChange={onCityChange}
        onCheckboxChange={onCheckboxChange}
      />
      <br></br>
      <MatchingTable addresses={addresses} />
    </div>
  );
};


export default VolunteerMatch;
