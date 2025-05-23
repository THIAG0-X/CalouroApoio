import { useState } from 'react'
import Card from '../../components/Card/Card'
import TextCard from '../../components/TextCard/TextCard'
import { FaPlus, FaMinus } from 'react-icons/fa6'
import '../ExpandCard/ExpandCard.css'

function ExpandableCard({ title, summary, details, emoji }) {
    const [isExpanded, setIsExpanded] = useState(false)

    const toggleExpand = () => {
        setIsExpanded(!isExpanded)
    }

    return (
        <div className={`card_group ${isExpanded ? 'expanded' : ''}`}>
            <Card>
                <div className="emoji">{emoji}</div>
                <TextCard>
                    <p className="title_card">{title}</p>
                    <p>{summary}</p>
                </TextCard>
                {isExpanded ? (
                    <FaMinus className="plus_icon" onClick={toggleExpand} />
                ) : (
                    <FaPlus className="plus_icon" onClick={toggleExpand} />
                )}
            </Card>

            <div className={`box_text ${isExpanded ? 'show' : ''}`}>
                <p>{details}</p>
            </div>
        </div>
    )
}

export default ExpandableCard