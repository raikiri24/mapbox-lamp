import React from 'react'
import {MapContextProvider} from './MapContext'
import Main from '../components/Main'

function ContextProviders() {
  return (

        <MapContextProvider>
          <Main/>
        </MapContextProvider>

  )
}

export default ContextProviders