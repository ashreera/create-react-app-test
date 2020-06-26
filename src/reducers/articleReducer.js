const INITIAL_STATE = {
  articles: [
    { id: '0', title: 'Over and Above after Corona ', desc: 'Newsdesk' },
    { id: '1', title: 'Over and Above after Corona ', desc: 'Newsdesk' },
    { id: '2', title: 'Over and Above after Corona ', desc: 'Newsdesk' },
    { id: '3', title: 'Over and Above after Corona ', desc: 'Newsdesk' },
    { id: '4', title: 'Over and Above after Corona ', desc: 'Newsdesk' },
    { id: '5', title: 'Over and Above after Corona ', desc: 'Newsdesk' },
    { id: '6', title: 'Over and Above after Corona ', desc: 'Newsdesk' },
   
  ],
  searchTerm :""
};

function articleReducer(state = INITIAL_STATE, action) {
  switch (action.type) {
    case 'GET_ARTICLE' :
      return {
        ...state
      };
      case 'ADD_ARTICLE':    
      return {    
          ...state,    
          articles: state.articles.concat(action.payload)    
      }; 
      case 'SEARCH_ARTICLE':
         return { ...state, searchTerm: action.searchTerm };
        
    default: return state;
  }
}

export default articleReducer;
