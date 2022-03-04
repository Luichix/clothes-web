export const noteReducer = (state = [], action) => {
  console.log('ACTION', action)

  if (action.type === '@notes/created'){
    return [...state, action.payload]
  }
  return state

}