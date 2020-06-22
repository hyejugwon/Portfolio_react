import React, { useState, useEffect } from 'react';
import EVENT from '../component/Event/event.json';
import './Event.css';
import EventList from '../component/Event/EventList.js';

const EVENTFILTER = [
    {
		"id": 0,
		"path": "all",
		"label": "ALL"
	},
    {
		"id": 1,
		"path": "promotion",
		"label": "Promotion"
	},
	{
		"id": 2,
		"path": "women",
		"label": "Women"
	},
	{
		"id": 3,
		"path": "acc",
		"label": "Acc"
	},
	{
		"id": 4,
		"path": "men",
		"label": "Men"
	},
	{
		"id": 5,
		"path": "home",
		"label": "Home"
	},
	{
		"id": 6,
		"path": "beauty",
		"label": "Beauty"
	},
	{
		"id": 7,
		"path": "tech",
		"label": "Tech+"
	},
	{
		"id": 8,
		"path": "culture",
		"label": "Culture"
	},
	{
		"id": 9,
		"path": "store",
		"label": "Store"
	},
	{
		"id": 10,
		"path": "editorial",
		"label": "Editorial"
	},
	{
		"id": 11,
		"path": "weekend",
		"label": "주간옷"
	},
	{
		"id": 12,
		"path": "sandal",
		"label": "#샌들"
	},
	{
		"id": 13,
		"path": "guide",
		"label": "ShoppingGuide"
	}
]

const Event = () => {
    const [ view, setView ] = useState([EVENT]);
    const [onType, setOnType] = useState(0);
    const [category, setCategory] = useState(0);

    const sortItem = (filter) => {
        let _id  = 0;
        switch (filter) {
            case 'all' : _id = 0; break;
            case 'promotion' : _id = 1; break;
            case 'women' : _id = 2; break;
            case 'acc' : _id = 3; break;
            case 'men' : _id = 4; break;
            case 'home' : _id = 5; break;
            case 'beauty' : _id = 6; break;
            case 'tech' : _id = 7; break;
            case 'culture' : _id = 8; break;
            case 'store' : _id = 9; break;
            case 'editorial' : _id = 10; break;
            case 'weekend' : _id = 11; break;
            case 'sandal' : _id = 12; break;
            case 'guide' : _id = 13; break;
        }

        setOnType(_id);
        if (_id === 0) {
            setView(EVENT);
        } else {
            const sort = EVENT.filter(event => {
                return event.type === _id;
            });
            setView(sort);
        }

    }

    
    
    useEffect(() => {
        const _event = EVENT.filter(event => event.type === category);
        setView(_event);
    }, [category]);

    useEffect(() => {
        setView(EVENT);
    });
    
    return (
        <div className="Event">
            <div className="eventTop">
                <div className="eventing"></div>
                <div className="eventing">.</div>
            </div>
            <div className="eventFilter">
                <ul className="evnetCate">
                    {EVENTFILTER.map(event => (
                        <li
                            className={`label ${ onType === event.id ? 'select' : ''}`}
                            key={`category${event.id}`}
                            onClick={() => setCategory(event.id)}
                        >
                            {event.label}
                        </li>
                    ))}
                </ul>
            </div>
            <div className="eventList">
                {view.map(event => (
                    <EventList key={event.id} event={event}/>
                ))}
            </div>
        </div>
    )
};

export default Event;
