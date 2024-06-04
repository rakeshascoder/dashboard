import React, { useEffect, useState } from "react";

const Delete = () => {
  let [data, setdata] = useState([]);
  let [first_name, set_first_name] = useState("");
  let [last_name, set_last_name] = useState("");
  let [email, set_email] = useState("");
  let [phone_no, set_phone_no] = useState("");
  let [city, set_city] = useState("");
  let [state, set_state] = useState("");

  useEffect(() => {
    let myfunc = async () => {
      let get_api = await fetch(
        "https://crud-django-c7ri.onrender.com/api/user/"
      ).then((res) => res.json());
      // console.log(get_api)
      console.log(get_api.data);
      setdata(get_api.data);
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
        phone_no: phone_no,
        city: city,
        state: state,
      }),
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((res) => res.json())
      .then((json) => console.log(json));
  };

  return (
    <div>
      <form onSubmit={submit}>
        <input
          onChange={(e) => {
            set_first_name(e.target.value);
          }}
          type="text"
          value={first_name}
          placeholder="fname"
        />{" "}
        <br />
        <input
          onChange={(e) => {
            set_last_name(e.target.value);
          }}
          type="text"
          value={last_name}
          placeholder="lname"
        />{" "}
        <br />
        <input
          onChange={(e) => {
            set_email(e.target.value);
          }}
          type="text"
          value={email}
          placeholder="email"
        />{" "}
        <br />
        <input
          onChange={(e) => {
            set_phone_no(e.target.value);
          }}
          type="text"
          value={phone_no}
          placeholder="phone no."
        />{" "}
        <br />
        <input
          onChange={(e) => {
            set_city(e.target.value);
          }}
          type="text"
          value={city}
          placeholder="city"
        />{" "}
        <br />
        <input
          onChange={(e) => {
            set_state(e.target.value);
          }}
          type="text"
          value={state}
          placeholder="state"
        />{" "}
        <br />
        <button>Add</button>
      </form>

      {/* Using "{data && (...)}" in React is a common pattern to conditionally render content based on the truthiness of a variable. Even if data is not null or undefined, it may still be an empty string, which is considered truthy in JavaScript.
By using "{data && (...)}", you are explicitly checking if data is truthy before rendering the content inside the parentheses. This is a defensive programming approach to ensure that the content is only rendered when data actually contains meaningful data that you want to display. */}

      {data && (
        <div>
          {data.map((item, i) => {
            return (
              <div key={i}>
                <h1>First name: {item.first_name} </h1>
                <h1>Last name: {item.last_name} </h1>
                <h1>Email: {item.email} </h1>
                <h1>Phone no.: {item.phone_no} </h1>
                <h1>City: {item.city} </h1>
                <h1>State: {item.state} </h1>
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
};

export default Delete;
