import { useState } from 'react'
import Loader from 'components/Loader'

export const IsLoadingHOC = (WrappedComponent, loadingMessage) => {
    const HOC = (props) => {

        if(props.isLoading){
            return(
                <Loader>{loadingMessage}</Loader>
            )
        }
        return (
            <WrappedComponent {...props}/>
        )
    }
    return HOC
}

export default IsLoadingHOC