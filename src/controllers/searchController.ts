import { Request, Response } from 'express'
import { pets } from '../models/pets'
import { createMenuObject } from '../helpers/createMenuObjects'

export const search = (req: Request, res: Response) => {
    let query: string = req.query.q as string //pegar o que o usuário digitou
    let list = pets.getFromName(query) //filtrar pelo que o usuário digitou
    res.render('pages/page', {
        menu: createMenuObject(''),
        list,
        query
    })
}