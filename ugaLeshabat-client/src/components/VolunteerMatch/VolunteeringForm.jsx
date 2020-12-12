import React, { useState } from "react";
import '../../CSSFiles/VolunteerMatch.css';

const VolunteeringForm = ({ onCityChange, onCheckboxChange }) => {
  return (
    <div className="container midbackground volunteering">
      <h3>מצאו כתובת להתנדבות</h3>
      <form className="text-right midbackground tc">
        <div className="form-row marg tc">
          <div className="col-md-6 mb-3">
            <label for="FirstName">עיר</label>
            <input
              onChange={onCityChange}
              type="search"
              class="form-control"
              id="FirstName"
              required
            />
          </div>
        </div>
        <div>
          <label class="marg">
            מה מהעוגות הבאות ניתן להכין במטבח שלך?
          </label>
          <div>
            <div class="col-md-5 form-check form-check-inline">
              <input
                class="form-check-input"
                type="checkbox"
                id="kosher"
                value="option1"
                onChange={(e) => onCheckboxChange(e, "kosher")}
              />
              <label
                class="form-check-label pad-small"
                for="inlineCheckbox1"
              >
                עוגה כשרה
              </label>
            </div>
            <div class="col-md-5 form-check form-check-inline">
              <input
                class="form-check-input"
                type="checkbox"
                id="parve"
                value="option2"
                onChange={(e) => onCheckboxChange(e, "parve")}
              />
              <label
                class="form-check-label pad-small"
                for="inlineCheckbox2"
              >
                עוגה פרווה
              </label>
            </div>
            <div class="col-md-5 form-check form-check-inline">
              <input
                class="form-check-input"
                type="checkbox"
                id="veganCake"
                value="option3"
                onChange={(e) => onCheckboxChange(e, "vegan")}
              />
              <label
                class="form-check-label pad-small"
                for="inlineCheckbox3"
              >
                עוגה טבעונית
              </label>
            </div>
            <div class="col-md-5 form-check form-check-inline">
              <input
                class="form-check-input"
                type="checkbox"
                id="sugarFreeCake"
                value="option3"
                onChange={(e) => onCheckboxChange(e, "sugerfree")}
              />
              <label
                class="form-check-label pad-small"
                for="inlineCheckbox3"
              >
                עוגה ללא סוכר
              </label>
            </div>
          </div>
          <div>
            <div class="col-md-5 form-check form-check-inline">
              <input
                class="form-check-input"
                type="checkbox"
                id="lactoseFreeCake"
                value="option3"
                onChange={(e) => onCheckboxChange(e, "lactosefree")}
              />
              <label
                class="form-check-label pad-small"
                for="inlineCheckbox3"
              >
                עוגה ללא לקטוז
              </label>
            </div>
            <div class="col-md-5 form-check form-check-inline">
              <input
                class="form-check-input"
                type="checkbox"
                id="glutenFreeCake"
                value="option3"
                onChange={(e) => onCheckboxChange(e, "glutenfree")}
              />
              <label
                class="form-check-label pad-small"
                for="inlineCheckbox3"
              >
                עוגה ללא גלוטן
              </label>
            </div>
            <div class="col-md-5 form-check form-check-inline">
              <input
                class="form-check-input"
                type="checkbox"
                id="penutsFreeCake"
                value="option3"
                onChange={(e) => onCheckboxChange(e, "peanutfree")}
              />
              <label
                class="form-check-label pad-small"
                for="inlineCheckbox3"
              >
                עוגה ללא בוטנים
              </label>
            </div>
            <div class="col-md-5 form-check form-check-inline">
              <input
                class="form-check-input"
                type="checkbox"
                id="nutsFreeCake"
                value="option3"
                onChange={(e) => onCheckboxChange(e, "nutsfree")}
              />
              <label
                class="form-check-label pad-small"
                for="inlineCheckbox3"
              >
                עוגה ללא אגוזים
              </label>
            </div>
          </div>
        </div>
        <div class="marg text-center">
        <br></br>
        </div>
      </form>
    </div>
  );
};

export default VolunteeringForm;
