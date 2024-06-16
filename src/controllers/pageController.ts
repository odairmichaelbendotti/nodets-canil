import { Request, Response } from 'express'

export const home = (req: Request, res: Response) => {
    res.send('Home controller')
}

export const dogs = (req: Request, res: Response) => {
    res.send('Cachorros')
}

export const cats = (req: Request, res: Response) => {
    res.send('Gatos')
}

export const fishes = (req: Request, res: Response) => {
    res.send('Peixes')
}