import React,{createContext,useReducer,useContext} from 'react';
import {reducer,initialState} from './MapState';

const MapContext = createContext()

function MapContextProvider({children}) {

    const [state,dispatch] = useReducer(reducer,initialState);
  
    const {volts,luminosity,power,current,place} = state
    const handleChangeLamp = async(lampData)=>{
        dispatch({type:"FETCHING",payload:lampData})
        dispatch({type: "FETCHED"})
       
    }
    return(
        <MapContext.Provider value={{volts,luminosity,power,current,place,handleChangeLamp}}>
            {children}
        </MapContext.Provider>
    )
}

const useMapContext = () => {
    return useContext(MapContext);
}

export default MapContextProvider

export {MapContext,MapContextProvider,useMapContext}