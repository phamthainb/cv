import * as Types from './types';
var init={
    User : {
        isAuthenticated: false,
        avatar:'',
        name:'',
        id:''
    }
}


//Reset lại giá trị về ban đầu
const resetValueInitial = (state) => {
    state.showModalCreateOrUpdate = initialState.showModalCreateOrUpdate;
    state.rowEditing = initialState.rowEditing;
    state.isView = initialState.isView;
    return state;
}

// check row
const funcCheckRow = (arrValue) => {
    let newSelected = [];
    let selectedIndex = -1;
    if (arrValue && arrValue.length > 0) {
        arrValue.map(item => {
            selectedIndex = newSelected.indexOf(item);
            if (selectedIndex === -1) {
                newSelected.push(item);
            } else {
                newSelected.splice(selectedIndex, 1);
            }
        });
    }
    return newSelected;
}

const reducer = (state = init, action) => {
    switch (action.type) {
        case Types.LOGIN:
            state.User.isAuthenticated = action.isAuthenticated;
            state.User.avatar = action.avatar;
            state.User.id=action.id;
            state.User.name=action.name;
            return { ...state };

        case Types.LOGOUT:
            state.isAuthenticated = action.isAuthenticated
            return { ...state };
    }
    return { ...state };
}

export default reducer