import React, { useEffect, useState } from "react";

const Post_api = () => {
  let [data, setdata] = useState([]);
  let [first_name, setfirst_name] = useState("");
  let [last_name, setlast_name] = useState("");
  let [email, setemail] = useState("");
  let [phone, setphone] = useState("");
  let [city, setcity] = useState("");
  let [state, setstate] = useState("");

  useEffect(() => {
    let myfunc = async () => {
      let apidata = await fetch(
        "https://crud-django-c7ri.onrender.com/api/user/"
      ).then((res) => res.json());
      console.log(apidata);
      setdata(apidata.data);
    };
    myfunc();
  }, []);

  let submit = (e) => {
    e.preventDefault();
    fetch("https://crud-django-c7ri.onrender.com/api/user/", {
    

      method: "POST",
      body: JSON.stringify({
        first_name: first_name,
        last_name: last_name,
        email: email,
        phone_no: phone,
        city: city,
        state: state,
      }),
      headers: { "Content-Type": "application/json" },
    })
      .then((res) => res.json())
      .then((json) => console.log(json));
  };

  return (
    <div>
      <div className="w-50 m-auto">
        <form onSubmit={submit}>
          <label htmlFor="first_name">First Name</label>
          <input
            type="text"
            value={first_name}
            name="first_name"
            id="first_name"
            onChange={(e) => setfirst_name(e.target.value)}
          />{" "}
          <br />
          <label htmlFor="last_name">Last Name</label>
          <input
            type="text"
            value={last_name}
            name="last_name"
            id="last_name"
            onChange={(e) => setlast_name(e.target.value)}
          />{" "}
          <br />
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            value={email}
            name="email"
            id="email"
            onChange={(e) => setemail(e.target.value)}
          />
          <br />
          <label htmlFor="phone_no">Phone no.</label>
          <input
            type="number"
            value={phone}
            name="phone_no"
            id="phone_no"
            onChange={(e) => setphone(e.target.value)}
          />
          <br />
          <label htmlFor="city">City</label>
          <input
            type="text"
            value={city}
            name="city"
            id="city"
            onChange={(e) => setcity(e.target.value)}
          />
          <br />
          <label htmlFor="State">State</label>
          <input
            type="text"
            value={state}
            name="State"
            id="State"
            onChange={(e) => setstate(e.target.value)}
          />
          <br />
          <button>add</button>
        </form>
      </div>
      {data && (
        <div>
          {data.map((item, i) => {
            return (
              <div key={i}>
                <h1>id:{item.id}</h1>
                <h1>name:{item.first_name}</h1>
                <h1>lname:{item.last_name}</h1>
                <h1>email:{item.email}</h1>
                <h1>phone:{item.phone_no}</h1>
                <h1>city:{item.city}</h1>
                <h1>state:{item.state}</h1>
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
};

export default Post_api;
