// const express =  require('express');
// const User = require('./user.model');
// const jwt = require('jsonwebtoken');

// const router =  express.Router();

// const JWT_SECRET = process.env.JWT_SECRET_KEY

// router.post("/admin", async (req, res) => {
//     const {username, password} = req.body;
//     try {
//         const admin =  await User.findOne({username});
//         if(!admin) {
//             res.status(404).send({message: "Admin not found!"})
//         }
//         if(admin.password !== password) {
//             res.status(401).send({message: "Invalid password!"})
//         }
        
//         const token =  jwt.sign(
//             {id: admin._id, username: admin.username, role: admin.role}, 
//             JWT_SECRET,
//             {expiresIn: "1h"}
//         )

//         return res.status(200).json({
//             message: "Authentication successful",
//             token: token,
//             user: {
//                 username: admin.username,
//                 role: admin.role
//             }
//         })
        
//     } catch (error) {
//        console.error("Failed to login as admin", error)
//        res.status(401).send({message: "Failed to login as admin"}) 
//     }
// })

// module.exports = router;
// const express = require('express');
// const User = require('./user.model');
// const jwt = require('jsonwebtoken');
// require('dotenv').config();

// const router = express.Router();

// const JWT_SECRET = process.env.JWT_SECRET_KEY;

// router.get("/ping", (req, res) => {
//   res.send("User route working ✅");
// });



// router.post("/admin", async (req, res) => {
//     console.log("ADMIN LOGIN HIT ✅");
//     const { username, password } = req.body;
//     //console.log("Received:", username, password); 

//     try {
//         // Find the admin user by username
//         const admin = await User.findOne({ username ,role:'admin'});
//         if (!admin) {
//             return res.status(404).json({ message: "Admin not found!" });
//         }

//         // Check the password
//         if (admin.password !== password) {
//             return res.status(401).json({ message: "Invalid password!" });
//         }

//         // Generate JWT token
//         const token = jwt.sign(
//             { id: admin._id, username: admin.username, role: admin.role },
//             JWT_SECRET,
//             { expiresIn: "1h" }
//         );

//         // Send success response
//         return res.status(200).json({
//             message: "Authentication successful",
//             token: token,
//             user: {
//                 username: admin.username,
//                 role: admin.role
//             }
//         });

//     } catch (error) {
//         console.error("Failed to login as admin:", error);
//         return res.status(500).json({ message: "Internal server error" });
//     }
// });

// module.exports = router;


const express = require('express');
const User = require('./user.model');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');
require('dotenv').config();

const router = express.Router();
const JWT_SECRET = process.env.JWT_SECRET_KEY;

router.get("/ping", (req, res) => {
  res.send("User route working ✅");
});

router.post("/admin", async (req, res) => {
    console.log("ADMIN LOGIN HIT ✅");
    const { username, password } = req.body;

    try {
        const admin = await User.findOne({ username, role: 'admin' }); // ✅ FIXED here
        if (!admin) {
            return res.status(404).json({ message: "Admin not found!" });
        }

        const isMatch = await bcrypt.compare(password, admin.password); // ✅ Password check
        if (!isMatch) {
            return res.status(401).json({ message: "Invalid password!" });
        }

        const token = jwt.sign(
            { id: admin._id, username: admin.username, role: admin.role },
            JWT_SECRET,
            { expiresIn: "1h" }
        );

        return res.status(200).json({
            message: "Authentication successful",
            token: token,
            user: {
                username: admin.username,
                role: admin.role
            }
        });

    } catch (error) {
        console.error("Failed to login as admin:", error);
        return res.status(500).json({ message: "Internal server error" });
    }
});

module.exports = router;
