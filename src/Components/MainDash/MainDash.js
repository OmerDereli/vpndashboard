import React, {useState,useEffect} from 'react';
import './MainDash.css';
import '../Card/Card'
import Card from "../Card/Card";
/*import almanya from "../../assets/images/almanya.png"
import amerika from "../../assets/images/amerika.png"*/

//const cards = []

const MainDash = () => {
    const [cards, setCards] = useState([])
    const [activeUserCount, setActiveUserCount] = useState(0)

    useEffect(()=>  {
        setCards(fetchCards())
        fetchActiveUser()
    }, [])


    const fetchActiveUser = () => {
        fetch('https://api.charmy.app/main/total')
            .then((response) => response.json())
            .then((data) => setActiveUserCount(data));
    }


    const send = (card) => {
        const cards = localStorage.getItem("omerx")
        if (!cards) {
            localStorage.setItem("omerx", JSON.stringify([]))
        }

        localStorage.setItem("omerx", JSON.stringify([card, ...JSON.parse(cards)]))
        setCards(fetchCards())
    }


    const fetchCards = () => {
        const cards = localStorage.getItem("omerx");
        return JSON.parse(cards)
    }


    return (
        <div className="Maindash" id="mahmut">
            {cards.map((card) => {
                return (
                    <Card title={card.title} subtitle={activeUserCount} src={card.src} onClick={() => {
                        send(card)
                    }}/>
                )
            })}
        </div>
    );
};

export default MainDash;