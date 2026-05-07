import { useState } from "react";
import { useNavigate } from "react-router-dom";

const User = () => {

  const navigate = useNavigate();

  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    eventType: "",
    date: "",
    location: "",
    message: ""
  });

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {

      const res = await fetch("http://localhost:3000/event", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(form)
      });

      const data = await res.json();

      if (res.ok) {
        alert("Booking successful!");
        console.log(data);
        navigate("/");
      } else {
        alert(data.message || "Booking failed!");
      }

    } catch (err) {
      console.log(err);
      alert("Server Error!");
    }
  };

  return (
    <div className="event-container">

      <form className="event-form" onSubmit={handleSubmit}>

        <h2>Book Your Event</h2>

        <input
          type="text"
          name="name"
          placeholder="Your Name"
          onChange={handleChange}
          required
        />

        <input
          type="email"
          name="email"
          placeholder="Your Email"
          onChange={handleChange}
          required
        />

        <input
          type="text"
          name="phone"
          placeholder="Phone Number"
          onChange={handleChange}
          required
        />

        <select
          name="eventType"
          onChange={handleChange}
          required
        >
          <option value="">Select Event Type</option>
          <option>Wedding</option>
          <option>Club Party</option>
          <option>Birthday</option>
          <option>Corporate Event</option>
        </select>

        <input
          type="text"
          name="location"
          placeholder="Event Location"
          onChange={handleChange}
          required
        />

        <textarea
          name="message"
          placeholder="Additional Details..."
          onChange={handleChange}
        ></textarea>

        <button type="submit">
          SEND BOOKING
        </button>

      </form>

    </div>
  );
};

export default User;