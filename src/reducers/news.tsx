// Config import
import * as constants from './../constants';

const initialState = {
    news: [],
    links: {},
    exploreNews:[],
};


const newsReducer = (state = initialState, action: any) => {
    switch (action.type) {
        case constants.SUCCESS_GET_NEWS:
            return {
                ...state,
                news: action.payload,
                links: action.links
            };
        default:
            return state;
    }
};

export default newsReducer;