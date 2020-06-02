const addCart = item => {
    return {
        type: 'addCart',
        data: item
    };
};
const removeCart = item => {
    return {
        type: 'removeCart',
        data: item
    };
};
const removeAll = () => {
    return {
        type: 'removeAll'
    };
};

const onCheck = id => {
    return {
        type: 'onCheck',
        data: id //뭘 눌렀는지 알아야 하니까
    };
};

const checkAll = () => {
    return {
        type: 'checkAll',
    };
};

const removeCheck = () => {
    return {
        type: 'removeCheck',
    };
};

export default {
    onCheck,
    removeCheck,
    checkAll,
    addCart,
    removeCart,
    removeAll
};