/* Material-ui components. */
import Alert from '@material-ui/lab/Alert'

export const withError = (WrappedComponent, errorMessage) => (props) => {
    if(props.error){
        return(
            <Alert severity="error" style={styles.alert}>{errorMessage}</Alert>
        )
    }
    return (
        <WrappedComponent {...props}/>
    )
}

const styles = {
    alert : {
        marginTop: 20,
        marginBottom: 20
    }
}

export default withError