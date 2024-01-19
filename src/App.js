import { useEffect, useState } from "react";
// import reactLogo from "./assets/react.svg";
// import viteLogo from "/vite.svg";
import "./App.css";
import Myform from "./components/Myform";
import axios from "axios";

function App() {
  const [data, setData] = useState([]);

  useEffect(() => {
    axios
      .get("https://backend-vpatrol.onrender.com/api/details")
      .then((response) => setData(response.data))
      .catch((err) => console.log(err));
  });


  return (
    <>
      <div className="conatiner">
        <Myform />
        <div>
          <h2>Total User: {data.length}</h2>
          <div className="box">
            {data.slice(0).reverse().map((userDetails, index) => (
              <div className="box-inside" key={index}>
                <div>
                  <h2>user details</h2>
                  <p>
                    <strong>user_id </strong>: {userDetails.user_id}
                  </p>
                  <p>
                    <strong> Name:</strong> {userDetails.user_name}
                  </p>
                  <p>
                    <strong> Account:</strong>{" "}
                    {userDetails.bank_accounts.map((bankdetails) => (
                      <>
                        <div>
                          <p>{bankdetails}</p>
                        </div>
                      </>
                    ))}
                  </p>
                </div>
                <div>
                  <h2>Weather Details</h2>
                  <p>
                    <strong>Temp:</strong> {userDetails.weather.temp}
                  </p>
                  <p>
                    <strong>Humidity:</strong> {userDetails.weather.humidity}
                  </p>
                </div>
                <div className="bank-details">
                  <h2>Bank Details</h2>
                  {userDetails.accounts.map((bankdata, index) => (
                    <>
                      <div key={index}>
                        <h2>Bank:{index + 1} details </h2>
                        <p>
                          <strong> Name :</strong> {bankdata.bank}
                        </p>
                        <p>
                          <strong> Branch :</strong> {bankdata.branch}
                        </p>
                        <p>
                          <strong> Address :</strong> {bankdata.address}
                        </p>
                        <p>
                          <strong>City :</strong> {bankdata.city}
                        </p>
                        <p>
                          <strong> District :</strong> {bankdata.district}
                        </p>
                        <p>
                          <strong> State :</strong> {bankdata.state}
                        </p>
                        <p>
                          <strong> Bank_code :</strong> {bankdata.bank_code}
                        </p>
                      </div>
                    </>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
