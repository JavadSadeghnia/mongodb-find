const mongoose = require('mongoose')
const User = require("./User")

mongoose.connect("mongodb://localhost/testdb")

run()
async function run() {

////CREATE 
//    try{
//         const user = await User.create({ walletAddress: "0x8cb72A8D2fb86bEB75ECED30C957F7aA8F839AA4", slackID:"U0462BKP8QK"})
//         console.log(user)
//     } catch (e) {
//       console.log(e.message)
//     }

// //UPDATE 
    // try{
    //     const user = await User.findById("63676347380cac12d24d9801")
    //     user.walletAddress = "UPDATEDA8D2fb86bEB75ECED30C957F7aA8F839AA4"
    //     await user.save() 
    //     console.log(user)
    // } catch (e) {
    //   console.log(e.message) 
    // }

////find
    try{
        const user = await User.findById("63676397cc77f5ea2d84b29a")
        //const user = await User.find({ slackID: "U0462BKP8QK" })
        //const user = await User.find()
        console.log(user)
    } catch (e) {
      console.log(e.message) 
    }

///DELETE
    // try{
    //     await User.deleteOne({ walletAddress: "0x8cb72A8D2fb86bEB75ECED30C957F7aA8F839AA4"})
    //     await User.deleteMany({ walletAddress: "0x8cb72A8D2fb86bEB75ECED30C957F7aA8F839AA4"})
    //     await User.findByIdAndDelete("6366b2f1d1e92c1b3223c5c6")
    // } catch (e) {
    //   console.log(e.message) 
    // }
    
}