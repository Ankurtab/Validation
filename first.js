const bcrypt = require("bcrypt");

const password = "Ankur@123";

async function Hashing() {
    const salt = await bcrypt.genSalt(10);
    const hashpass = await bcrypt.hash(password,salt);
    console.log(salt);
    console.log(hashpass);
}
Hashing();