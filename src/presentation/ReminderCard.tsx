import React from "react";
import './ReminderCard.css';

type ReminderCardProps = {
    title: string;
}

const ReminderCard: React.FC<ReminderCardProps> = ({ title }) => {
    return(
        <div className="card"> 
            <h1 className="card-title">{title}</h1>
        </div>
    )
};

export default ReminderCard;