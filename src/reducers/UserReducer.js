const initialState = {
  name: 'Visitante',
  contador: 0
}

const UserReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case 'SET_NAME':
      return { ...state, name: payload.name }

    case 'INCREMENT':
      let newCount = state.contador + 1
      return { ...state, contador: newCount }

    case 'DECREMENT':
      let newCountLess = state.contador - 1
      return { ...state, contador: newCountLess }

    default:
      return state
  }
}

export default UserReducer
