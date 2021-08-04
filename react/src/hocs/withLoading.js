/* Custom components. */
import Loader from 'components/Loader'

export const withLoading = (WrappedComponent, loadingMessage) => (props) => {
    if(props.isLoading){
        return(
            <Loader>{loadingMessage}</Loader>
        )
    }
    return (
        <WrappedComponent {...props}/>
    )
}

export default withLoading