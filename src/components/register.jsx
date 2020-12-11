import React from "react";
import '../CSSFiles/register.css';

function Register() {
  return (
    <div class="container Register">          
        <h2>טופס הצטרפות</h2> 
        <form>
            <div class="form-row">
                <div class="col-md-2 mb-3">
                    <label for="Age">גיל</label>
                    <input type="number" class="form-control" id="Age" required></input>
                </div>
                <div class="col-md-4 mb-3">
                    <label for="PhoneNumber">מספר טלפון</label>
                    <input type="Phone" class="form-control text-right" id="PhoneNumber" placeholder="ישמש להתחברות" required></input>
                </div>
                <div class="col-md-3 mb-3">
                    <label for="LasttName">שם משפחה</label>
                    <input type="text" class="form-control" id="LastName" required></input>
                </div>
                <div class="col-md-3 mb-3">
                    <label for="FirstName">שם פרטי</label>
                    <input type="text" class="form-control" id="FirstName" required></input>
                </div>
            </div>   
            <div class="form-row">
                <div class="col-md-4 mb-3">
                    <label for="StreetNumber">רחוב, מספר</label>
                    <input type="text" class="form-control" id="LastName"></input>
                </div>
                <div class="col-md-4 mb-3">
                    <label for="AptNumber">מספר דירה</label>
                    <input type="Phone" class="form-control" id="PhoneNumber"></input>
                </div>
                <div class="col-md-4 mb-3">
                    <label for="City">עיר</label>
                    <input type="text" class="form-control" id="City"></input>
                </div>
            </div>    
            <div class="marg text-center">
                <a><button type="button" class="btn btn-outline-secondary">שלח</button></a>
            </div> 
            <br></br>     
        </form>
        </div>          
  );
}

export default Register;