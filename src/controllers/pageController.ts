import { Request, Response } from 'express'
import { createMenuObject } from '../helpers/createMenuObjects'
import { pets } from '../models/pets'

export const home = (req: Request, res: Response) => {
    let list = pets.getAll
    res.render('pages/page', {
        banner: {
            title: 'Todos os animais',
            background: 'allanimals.jpg'
        },
        menu: createMenuObject('all'),
        list
    })
}

export const dogs = (req: Request, res: Response) => {
    let list = pets.getFromType('dog')
    res.render('pages/page', {
        banner: {
            title: 'Cachorros',
            background: 'banner_dog.jpg'
        },
        menu: createMenuObject('dogs'),
        list
    })
} 

export const cats = (req: Request, res: Response) => {
    let list = pets.getFromType('cat')
    res.render('pages/page', {
        banner: {
            title: 'Gatos',
            background: 'banner_cat.jpg'
        },
        menu: createMenuObject('cats'),
        list
    })
}

export const fishes = (req: Request, res: Response) => {
    let list = pets.getFromType('fish')
    res.render('pages/page', {
        banner: {
            title: 'Peixes',
            background: 'banner_fish.jpg'
        },
        menu: createMenuObject('fishes'),
        list
    })
}