import {Router}  from "express"

const router = Router();

//router.get('/',(req,res) => res.send("hello world"))

router.get('/',(req,res) => res.render("index",{title:'Inicio'}))
router.get('/about',(req,res) => res.render("about"))
router.get('/contacto',(req,res) => res.render("contacto"))

export default router