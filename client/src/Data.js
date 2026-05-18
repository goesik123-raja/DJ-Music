import { useEffect, useState } from "react";
import axios from "axios";

const Data = () => {

    const [events, setEvents] = useState([]);

    // Fetch Data
    const fetchData = async () => {

        try {

            const res = await axios.get("http://localhost:3000/event");

            setEvents(res.data);

        } catch (err) {

            console.log(err);

        }

    };

    // Delete Data
    const deleteData = async (id) => {

        try {

            await axios.delete(`http://localhost:3000/event/${id}`);

            alert("Deleted Successfully");

            fetchData();

        } catch (err) {

            console.log(err);

        }

    };

    useEffect(() => {

        fetchData();

    }, []);

    return (
        <>
            <div className="container">

                <h1 className="title">Event Bookings</h1>

                <div className="card-container">

                    {
                        events.map((item) => (
                            <div className="card" key={item._id}>

                                <h2>{item.name}</h2>

                                <p><strong>Email:</strong> {item.email}</p>

                                <p><strong>Phone:</strong> {item.phone}</p>

                                <p><strong>Event:</strong> {item.eventType}</p>

                                <p><strong>Location:</strong> {item.location}</p>

                                <p><strong>Message:</strong> {item.message}</p>

                                <button
                                    onClick={() => deleteData(item._id)}
                                    className="delete-btn"
                                >
                                    Cancel Event
                                </button>

                            </div>
                        ))
                    }

                </div>

            </div>
        </>
    )
}

export default Data;