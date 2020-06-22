import React from 'react';
import Dropdown from 'react-dropdown';

const SetFilter = () =>{
    const options = ['SET', '01', '02', '03', '04'];

    return(
        <div>
            <Dropdown options={options}  placeholder="SET" />
        </div>
    )
}

export default SetFilter;