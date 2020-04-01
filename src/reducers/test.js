const initialState = {
  }
  
  export default function reducer(state = initialState, action) {
      switch (action.type) {
        case 'Test':
          return {...state, test: action.payload}
        default:
          return state;
      }
    }