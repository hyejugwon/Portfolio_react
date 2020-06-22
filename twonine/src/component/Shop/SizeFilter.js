import React from 'react';
import Dropdown from 'react-dropdown';

const SizeFilter = () =>{
    const options = ['SIZE', 'XXS', 'XS', 'S', 'M', 'L', 'XL', 'XXL'];

    return(
        <div>
            <Dropdown options={options}  placeholder="SIZE" />
        </div>
    )
}

export default SizeFilter;