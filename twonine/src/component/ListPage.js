import React, { useState, useEffect } from 'react';
import WomenNavi from './WomenNavi';

const ITEMS = [
	{id: 1, name: 'name1', type: 1, src: 'dd.jpg'},
	{id: 1, name: 'name1', type: 1, src: 'dd.jpg'},
	{id: 1, name: 'name1', type: 1, src: 'dd.jpg'},
	{id: 1, name: 'name1', type: 2, src: 'dd.jpg'},
	{id: 1, name: 'name1', type: 2, src: 'dd.jpg'},
	{id: 1, name: 'name1', type: 2, src: 'dd.jpg'},
	{id: 1, name: 'name1', type: 3, src: 'dd.jpg'},
	{id: 1, name: 'name1', type: 3, src: 'dd.jpg'},
	{id: 1, name: 'name1', type: 3, src: 'dd.jpg'},
	{id: 1, name: 'name1', type: 3, src: 'dd.jpg'},
	{id: 1, name: 'name1', type: 3, src: 'dd.jpg'}
];

// best: 1
// new: 2
// top: 3

const ListPage = ({ path }) => {
	const [title, setTitle] = useState('');
	const [items, setItems] = useState([]);

	const transPath = val => {
		switch(val) {
			case 'best' : return 1;
			case 'new' : return 2;
			case 'top' : return 3;
		}
	}

	useEffect(() => {
		setTitle(path);
		const _type = transPath(path);
		const _items = ITEMS.filter(item => item.type === _type);
		setItems(_items);
	}, [path]);

	return (
		<div>
			<WomenNavi />
			<h1>{title}</h1>
		</div>
	)
};

export default ListPage;