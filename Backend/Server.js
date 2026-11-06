// const express = require('express');
// const mongoose = require('mongoose');
// const cors = require('cors');
// const CustomerModel = require('./models/customerschema');
// const LaptopModel = require('./models/laptopschema'); // Ensure this schema matches your MongoDB collection

// const app = express();
// app.use(express.json());
// app.use(cors());

// mongoose.connect("mongodb://127.0.0.1:27017/Gadgets", {
//   useNewUrlParser: true,
//   useUnifiedTopology: true,
// })
// .then(() => console.log("Connected to MongoDB"))
// .catch(err => console.error("Could not connect to MongoDB:", err));

// // POST route for login
// app.post("/login", async (req, res) => {
//   const { email, password } = req.body;
//   try {
//     const user = await CustomerModel.findOne({ email });
//     if (user) {
//       if (user.password === password) {
//         res.json("success");
//       } else {
//         res.status(401).json("Incorrect password");
//       }
//     } else {
//       res.status(404).json("User not found");
//     }
//   } catch (err) {
//     res.status(500).json(err);
//   }
// });

// // POST route for registration
// // POST route for registration
// app.post("/register", async (req, res) => {
//   try {
//     const user = await CustomerModel.create(req.body); // This saves the user to the database
//     res.json(user); // Send back the created user data
//   } catch (err) {
//     res.status(500).json(err); // Send back an error message if something goes wrong
//   }
// });


// // GET route for laptops
// app.get('/api/laptops', async (req, res) => {
//   try {
//     const laptops = await LaptopModel.find();
//     res.json(laptops);
//   } catch (err) {
//     res.status(500).json(err);
//   }
// });


// // Start the server
// app.listen(3001, () => {
//   console.log("Server is running on port 3001");
// });
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
require('dotenv').config(); // Load environment variables

const cartRoutes = require('./routes/CartRoutes'); // Import cart route

const app = express();
app.use(express.json());
app.use(cors());

// MongoDB Connection
mongoose.connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then(() => console.log("MongoDB Connected"))
  .catch(err => console.log("MongoDB Connection Error:", err));

// Use the cart route
app.use('/cart', cartRoutes); // 👈 Mounting the router

// Start the server
const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
