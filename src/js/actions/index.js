import { ADD_ARTICLE } from "../constants/action-types"

export function addArticle(payload){
    console.log('add article called', payload)
    return {
        type: ADD_ARTICLE,
        payload
    }
}