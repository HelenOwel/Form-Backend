import {Login, signUp} from '../Controller/User.js'
import express from 'express'
const router = express.Router();

 router.post('/signup', signUp)
 router.post('/login', Login)

 export default router;