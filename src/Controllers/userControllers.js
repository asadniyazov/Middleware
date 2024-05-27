import { Kitten } from "../Models/userModel.js"
import bcrypt from "bcrypt"
export const GetUserAll=async (req, res) => {
    console.log("all");
    const kitten = await Kitten.find()
    res.send(kitten)
}
export const GetUserById=async (req, res) => {
  try {
    const { id } = req.params
    const kitten = await Kitten.findById(id)
    res.send(kitten)
  } catch (error) {
    
    res.send(error)
  }
}
export const UserUpdateById=async (req, res) => {
    const { id } = req.params
    const body = req.body
    const kitten = await Kitten.findByIdAndUpdate(id, body)
    res.send(kitten)

}

export const UserSign=async (req, res) => {
    console.log("assdsds");
    try {
        const { email, pasword } = req.body
        const hassedPassword = await bcrypt.hash(pasword, 10)
        const kitten = new Kitten({ email, pasword: hassedPassword })
        await kitten.save()
        res.send(kitten)
        
    } catch (error) {
        res.send(error)
    }
}


 export const UserLogin=async (req, res) => {
    const { email, pasword } = req.body
    const user = await Kitten.findOne({ email: email })
    if (!user) {
        return res.send("bu email yoxdur")
    }
    const paswordright = await bcrypt.compare(pasword, user.pasword)
    if (!paswordright) {
        return res.send("pasword wrong")
    }
    res.send("xos gelmisiniz")
}

export const UserDeleteById=async (req, res) => {
    const { id } = req.params
    const kitten = await Kitten.findByIdAndDelete(id)
    res.send(kitten)
}

