import { Request, Response } from "express"
import knex from "../database/connection"

class commentsController {
    async CommentsUser(req: Request, res: Response) {
        try {
            const UserComments = await knex("users_livros_avaliacoes")
                .join("users_livros","users_livros.id","=","users_livros_avaliacoes.users_livros_id")
                .join("users","users.id","=","users_livros.user_id")
                .select("users_livros_avaliacoes.*")
                .where("users.id",req.User_id)
            return res.json({UserComments})
        } catch (err) {
            return res.status(500).send()
        }
    }

    async CommentsLivro(req: Request, res: Response) {
        const { livroId } = req.params
        try {
            const LivroComments = await knex("users_livros_avaliacoes")
                .join("users_livros","users_livros.id","=","users_livros_avaliacoes.users_livros_id")
                .join("livros","livros.id","=","users_livros.livros_id")
                .select("users_livros_avaliacoes.*")
                .where("livros.id", Number(livroId))
            return res.json({LivroComments})
        } catch (err) {
            return res.status(500).send()
        }
    }
}

export default new commentsController