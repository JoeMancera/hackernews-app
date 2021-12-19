import React, {useState} from 'react'

const Context = React.createContext({})

export function FavoritesContextProvider({ children }) {
  const [favorites, setFavorites] = useState([])
  console.log('Context' , favorites)
  return <Context.Provider value={{ favorites, setFavorites }}>
    {children}
  </Context.Provider>
}

export default Context