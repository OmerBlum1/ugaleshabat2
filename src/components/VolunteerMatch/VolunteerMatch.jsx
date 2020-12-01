import React, {useEffect, useState} from "react";
import VolunteeringForm from "./VolunteeringForm";
import MatchingTable from "./MatchingTable";
import Addresses from "../../MockData/MockAddresses";

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
    console.log("Addresses:", Addresses.length);
    const filteredAddresses = Addresses.filter((address) =>{
          return address.city.includes(cityInput) &&
              (!address.parve || checkboxes['parve'])&&
              (!address.glutenfree || checkboxes['glutenfree'])&&
              (!address.lactosefree || checkboxes['lactosefree'])&&
              (!address.sugerfree || checkboxes['sugerfree'])&&
              (!address.vegan || checkboxes['vegan'])&&
              (!address.peanutfree || checkboxes['peanutfree'])&&
              (!address.kosher || checkboxes['kosher'])&&
              (!address.nutsfree || checkboxes['nutsfree'])
    }
    );
    console.log("Filterred Addresses:", filteredAddresses.length);
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
