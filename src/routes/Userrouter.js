import express from "express"
import { myLogger } from "../Middleware/MyLogger.js"
import { LoggerBySecond } from "../Middleware/LoggerBySecond.js"


import { GetUserAll, GetUserById, UserDeleteById, UserLogin, UserSign, UserUpdateById } from "../Controllers/userControllers.js"
export const Userrouter = express.Router()
Userrouter.use(myLogger)


Userrouter.get('/', LoggerBySecond,GetUserAll)


Userrouter.get('/:id', LoggerBySecond, GetUserById)



Userrouter.put('/:id',UserUpdateById)



Userrouter.post('/sign', UserSign)



Userrouter.delete('/:id', LoggerBySecond, UserDeleteById)



Userrouter.post('/login', UserLogin)