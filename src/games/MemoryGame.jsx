import React, { useState, useEffect } from 'react';
import Card from './components/Card';

const MemoryGame = () => {
    const cardsdata = [
        {
            id: 0, 
            data:'nesto1'
        },
        {
            id: 1, 
            data:'nesto2'
        },
        {
            id: 2, 
            data:'nesto3'
        },
        {
            id: 3, 
            data:'nesto4'
        },
        {
            id: 4, 
            data:'nesto5'
        }
    ]

    const copy = [...cardsdata,...cardsdata]

    function shuffleArray(cards){
        let tmp = [...cards]
        return tmp.sort(() => 0.5 - Math.random())
    }

    const [cards, setCards] = useState(shuffleArray(copy))
    const [selected, setSelected] = useState([])
    const [correct, setCorrect] = useState([])

    const onCardClick = (index) => {
        console.log(index)
        if(selected.length === 0){
            setSelected([index])
        }
        else if(selected.length === 1){
            if(cards[selected[0]].data === cards[index].data){
                console.log("NASAO ISTE")
                setCorrect(correct.concat(selected[0],index))
                setSelected([])
            }
            else{
                console.log("NAPRAVIO TAJMAUT")
                setSelected([selected[0],index])
                setTimeout(() => {
                    setSelected([])
                },850)
            }
        }
    }

    return (
        <div>
            {cards.map((card,index) => {
                return <Card 
                        key={index} 
                        isFlipped={correct.includes(index) || selected.includes(index)} 
                        card={card} 
                        onClick={() => onCardClick(index)} 
                        />
            })}
        </div>
    )

}

export default MemoryGame 

