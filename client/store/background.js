import axios from 'axios'

//ACTION TYPES
const SET_BACKGROUND = 'SET_BACKGROUND'

//ACTION CREATORS
const setBackground = background => ({type: SET_BACKGROUND, background})

//INITIAL STATE
const initialBackground = {
  name: 'forest lake',
  imageUrl: 'forest_lake.jpg'
}

export default function(state = initialBackground, action) {
  switch (action.type) {
    case SET_BACKGROUND:
      return action.background
    default:
      return state
  }
}
