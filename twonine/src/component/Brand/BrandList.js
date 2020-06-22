import React from 'react';

const BrandList = ({ item }) => {
    const transType = type => {
        switch(type) {
            case 1: return 'WOMEN';
            case 2: return 'ACC';
            case 3: return 'MEN';
            case 4: return 'HOME';
            case 5: return 'BEAUTY';
            case 6: return 'TECH';
            case 7: return 'CULTRUE';
        }
    };

    return(
        <div className="brandBox">
            <p className="enBrand">{item.name2}</p>
            <p className="krBrand">{item.name1}</p>
        </div>
    )
}

export default BrandList;
