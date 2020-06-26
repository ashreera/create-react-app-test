export function getActricle() {  
    return dispatch => {  
        return dispatch({  
            type: 'GET_ARTICLE'  
        });  
    }  
};  
  
export function addArticle(data) {  
    return dispatch => {  
        return dispatch({  
            type: 'ADD_ARTICLE',  
            payload: data  
        });  
    }  
};  
 export function searchArticle(value){
 return dispatch =>{
 return dispatch({
     type: 'SEARCH_ARTICLE',
     payload : value
 });
}
 }