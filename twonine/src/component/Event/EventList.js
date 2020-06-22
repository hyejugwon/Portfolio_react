import React from 'react';

const EventList = ({ event }) => {
    const transType = type => {
        switch(type) {
            case 1: return 'Promotion';
            case 2: return 'Women';
            case 3: return 'Acc';
            case 4: return 'Men';
            case 5: return 'Home';
            case 6: return 'Beauty';
            case 7: return 'Tech+';
            case 8: return 'Culture';
            case 9: return 'Store';
            case 10: return 'Editorial';
            case 11: return 'Weekend';
            case 12: return 'Sandal';
            case 13: return 'Guide';
        }
    };

    return(
        <div className="list">
            <img src={event.src}/>
            <div className="eventTitle">{event.title}</div>
            <div className="eventDate">{event.date}</div>
        </div>
    )
}

export default EventList;
