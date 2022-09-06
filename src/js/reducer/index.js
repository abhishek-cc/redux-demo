import { ADD_ARTICLE } from "../constants/action-types";

const initialState = {
    articles: []
}

function rootReducer(state=initialState, action){
    console.log(ADD_ARTICLE, action);
    if(action.type === ADD_ARTICLE){
        console.log('action hitted')
        // state.articles.push(action.payload)
        return Object.assign({}, state, {
            articles: state.articles.concat(action.payload)
        })
    }
    return state;
}

export default rootReducer