import { Router } from "express";
import { getRepository } from 'typeorm';
import { RegistredTime } from "../entity/RegistredTime";
import User from "../entity/User";

const login = require("../middleware/login")

const classRouter = Router();
const bcrypt = require("bcrypt");
const jwt = require('jsonwebtoken');

classRouter.post('/',login, async(req, res)=>{
  try{
    const token = req.headers.authorization.split(" ")[1]
    const decode = jwt.verify(token, process.env.JWT_KEY);
    if(decode.usuario.role !== 'ADM'){
      const resposta = await getRepository(RegistredTime).save(req.body);
      return res.status(201).json(resposta);
    }else{
      return res.status(403).json("Acesso negado!");
    }
  }catch(err){
    return res.status(400).json("Erro ao executar " + err);
  }
})
classRouter.get('/',login ,async(req, res)=>{
  try{ 
    const token = req.headers.authorization.split(" ")[1]
    const decode = jwt.verify(token, process.env.JWT_KEY);
    if(decode.usuario.role === 'ADM'){
      const resposta = await getRepository(RegistredTime).find();
      return res.status(200).json(resposta);
    }else{
      return res.status(403).json("Acesso negado!");
    }

  }catch(err){
    return res.status(400).json("Erro ao executar " + err);
  }

})



export default classRouter;
