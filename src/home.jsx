import machine from './assets/machine.png'
import './home.css'
export default function Home() {


    return (
        <div className='home'>
            <h1>Vending Machine</h1>
            <p>Welcome to the Vending Machine, select a snack to get started</p>

            <img src={machine} alt="vending" width={400} height={600} />
        </div>
    )
}
