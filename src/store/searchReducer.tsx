
const INITIAL_STATE = { 
  description: '', 
  userList: [{fullName: 'Rodrigo Miqui', userName: 'rodrigomiqui', avatar: 'teste'}],
}

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case 'DESCRIPTION_CHANGED':
      return { ...state, description: action.payload }        
    case 'USER_SEARCHED':
      return { ...state, userList: action.payload }        
    default:
      return state;
  }
}
