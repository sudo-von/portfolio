/* Custom components. */
import Loader from 'components/Loader'

export const withLoading = (WrappedComponent, loadingMessage) => ({isLoading, ...rest}) => {
    if(isLoading){
        return(
            <Loader>{loadingMessage}</Loader>
        )
    }
    return (
        <WrappedComponent {...rest}/>
    )
}

export default withLoading