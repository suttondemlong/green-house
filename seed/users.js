const db = require("../db/connection")
const User = require("../models/user")

db.on("error", console.error.bind(console, "MongoDB connection error:"))

const main = async () => {
  const users = [
    {
      name: "Sherie Jones",
      email: "eco-curious@gmail.com",
      password: "greenhouse1",
      imgURL: "https://raw.githubusercontent.com/suttondemlong/green-house/develop/client/src/assets/userpic.png",
      socialmedia: [{
        facebook: "https://github.com/suttondemlong/green-house/blob/develop/client/src/assets/social-media/Facebook.png",
        instagram: "https://github.com/suttondemlong/green-house/blob/develop/client/src/assets/social-media/Instagram.png",
      }]
    }
  ]
  await User.insertMany(users)
  console.log("Created a user!")
}
const run = async () => {
  await main()
  db.close()
}

run()