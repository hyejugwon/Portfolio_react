const CartReducer = (state, {type, data}) => {
    switch(type) {
        case 'ADD_CART': {
            const flag = state.cart.some(sample => sample.id === data.id);
            let after = [];
            if (flag) {
                after = state.cart.map(sample => (
                    sample.id === data.id ? ({ ...sample, count: sample.count + 1}) : sample
                ));
            } else {
                after = state.cart.concat({...data, count: 1, check: false });
            }
            state.cart = after;
            return {...state}
        }
        
        case 'REMOVE_ALL': {
            state.cart = [];
            return { ... state };
        }
        
        case 'SET_COUNT': {
            const after = state.cart.map(sample => {
                sample.id === data.id ? ({ ...sample, count: data.count }) : sample
            });
            state.cart = after;
            return { ... state };
        }
    }
}

export default CartReducer;