import React from 'react';
import Dropdown from 'react-dropdown';

const ColorFilter = () =>{
    const options = ['COLOR', 'White', 'Red', 'Peach', 'Blue', 'Yellow', 'Gray', 'Black'];

    return(
        <div>
            <Dropdown options={options}  placeholder="COLOR" />
        </div>
    )
}

export default ColorFilter;