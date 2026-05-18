const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

const app = express();

app.use(cors());
app.use(express.json());



app.use(express.json());

const FoodModel = require("./Music/Song");


mongoose.connect("mongodb+srv://admin:admin@cluster0.lsxuxwt.mongodb.net/Song")

  .then(() => console.log("MongoDB Connected"))
  .catch(err => console.log(err));


const UserSchema = new mongoose.Schema({
  name: String,
  email: String,
  phone: String,
  eventType: String,
  location: String,
  message: String
});

const User = mongoose.model("User", UserSchema);

app.post("/event", async (req, res) => {

  try {

    const data = new User(req.body);

    await data.save();

    res.status(200).json({
      message: "Booking Added Successfully"
    });

  } catch (err) {

    res.status(500).json({
      message: "Server Error"
    });

  }

});





// GET 
app.get("/event", async (req, res) => {

  try {

    const data = await User.find();

    res.status(200).json(data);

  } catch (err) {

    res.status(500).json({
      message: "Server Error"
    });
  }
});


// DELETE 
app.delete("/event/:id", async (req, res) => {

  try {

    await User.findByIdAndDelete(req.params.id);

    res.status(200).json({
      message: "Booking Deleted Successfully"
    });

  } catch (err) {

    res.status(500).json({
      message: "Server Error"
    });

  }

});




app.listen(3000, () => {
  console.log("Server running on port 3000");
});