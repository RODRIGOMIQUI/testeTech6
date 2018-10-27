
const INITIAL_STATE = { 
  loginSearch: ''
}

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case 'LOGIN_SEARCH_CHANGED':
      return { ...state, loginSearch: action.payload }        
    default:
      return state;
  }
}
