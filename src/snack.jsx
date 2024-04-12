import { useParams } from 'react-router-dom'
import coke from './assets/coke.png'
import sprite from './assets/sprite.png'
import kitkat from './assets/kitkat.png'
import mentos from './assets/mentos.png'
import pringles from './assets/pringles.png'

import './snack.css';


const url = {
    coke,
    sprite,
    kitkat,
    mentos,
    pringles
}

export default function Snack() {
    const name = useParams().name;

    if (!name) {
        return <h1>No snack selected</h1>
    }

    if (!url[name]) {
        return <h1>Invalid snack</h1>
    }

    return (
        <div className="grid-container">
            <div className="image">
                <h1>{name}</h1>
                <img src={url[name]} alt={name}  />
            </div>
        </div>

    )
}