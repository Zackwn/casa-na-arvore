import { Request, Response } from "express"
import bcrypt from "bcryptjs"

import knex from "../database/connection"

class UserController {
    async index(req: Request, res: Response) {
        const { page = 1, limit = 5 } = req.query

        try {
            const users = await knex("users")
                .limit(Number(limit))
                .offset((Number(page) - 1) * Number(limit))

            if (users.length === 0)
                return res.json("No users")

            return res.json(users)
        } catch (err) {
            return res.status(500).send()
        }
    }

    async create(req: Request, res: Response) {
        const {
            name,
            email,
            password
        } = req.body

        const data = {
            name,
            foto_url: "https://a-static.mlcdn.com.br/1500x1500/livro-o-pequeno-principe/bookmarket/127036/7ad933c8b51d77690e51fd55b80b0211.jpg",
            email,
            password,
            pontos: 0,
            nozes: 20
        }

        try {
            const isEmailValid = await knex("users")
                .where({email})
                .first() === undefined

            if (!isEmailValid)
                return res.status(400).send("Email já está sendo")

            if (!/@/.test(email))
                return res.status(400).send("Email inválido")

            
            const hash = await bcrypt.hash(password, 10)
            data.password = hash

            const user = await knex("users").insert(data)

            return res.send(user)
        } catch (err) {
            return res.status(500).send()
        }
    }
}

export default new  UserController
