import { useState } from 'react'
import Axios from 'axios'
import '../styles/Home.module.css'
import Dice from './dice'

export default function App() {

    function sendMessage() {
        Axios.get('http://localhost:5000/')
        .then(function (response) {
            console.log('response successfully received, response below')
            console.log(response)

            //set message to be response we get from backend
            setRolls([...rolls, response.data])
        }).catch(function (error) {
            console.log('response unsusccessfully received, error below')
            console.log(error)
        }).finally(function (){
            console.log("This part is always executed no matter what")
        }) 

    }

    // const [message, setMessage] = useState("No Current Message")
    const [rolls, setRolls] = useState([]);

    return (
        <div className='container'>
            <div>
                {rolls.map(roll => (
                    <Dice roll={roll} />
                ))}
            </div>
            {/* <p>{message}</p> */}
            <button
            onClick={() => {sendMessage()}}
            >Send Message</button>
        </div>
    )
}