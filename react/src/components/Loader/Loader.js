/* Material-ui. */
import Box from '@material-ui/core/Box'
import CircularProgress from '@material-ui/core/CircularProgress'

const Loader = ({children, ...rest}) => 
    <Box display='flex' flexDirection='column' alignItems='center' justifyContent='center'>
        <CircularProgress size={100} className='secondary' {...rest}/>
        <p className='secondary'>{children}</p>
    </Box>

export default Loader