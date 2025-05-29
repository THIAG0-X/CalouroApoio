import '../MotivationalMsg/MotivationalMsg.css'
import { useState, useEffect } from "react"

function MotivationalMsg() {
    const messages = [
    "Você é capaz de superar qualquer desafio!",
    "Acredite no seu potencial!",
    "Cada pequeno passo conta!",
    "Seu esforço de hoje é seu sucesso de amanhã!",
    "Confie no processo, você está aprendendo!",
]

    const [currentIndex, setCurrentIndex] = useState(0)

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentIndex((prevIndex) =>
                prevIndex === messages.length - 1 ? 0 : prevIndex + 1
            )
        }, 30000)

        return () => clearInterval(interval);
    }, [messages.length]) 

    return (
        <div className="Motivational_msg">
            {messages[currentIndex]}
        </div>
    )

}


export default MotivationalMsg