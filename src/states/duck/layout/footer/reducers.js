import * as Types from './types';

var initialState = {
    rows: [],
    Facebook: {},
    Fanpage: {},
    Contact: {},
    Geography: {},
    Policy: {},
    Secret: {},
    Hotline: {},
    Agency: {},
    Product: {},
    News: {},
    Timer:{}
};

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case Types.LOAD_FOOTER_ALL:
            state.rows = action.rows;
            state.Facebook = { ...action.rows.find(m => m.uniquecode == "Facebook") };
            state.Fanpage = { ...action.rows.find(m => m.uniquecode == "Fanpage") };
            state.Contact = { ...action.rows.find(m => m.uniquecode == "Contact") };
            state.Geography = { ...action.rows.find(m => m.uniquecode == "Geography") };
            state.Policy = { ...action.rows.find(m => m.uniquecode == "Policy") };
            state.Secret = { ...action.rows.find(m => m.uniquecode == "Secret") };
            state.Hotline = { ...action.rows.find(m => m.uniquecode == "Hotline") };
            state.Agency = { ...action.rows.find(m => m.uniquecode == "Agency") };
            state.Product = { ...action.rows.find(m => m.uniquecode == "Product") };
            state.News = { ...action.rows.find(m => m.uniquecode == "News") };
            state.Timer = { ...action.rows.find(m => m.uniquecode == "Timer") };

            break;
    }
    return { ...state };
}

export default reducer