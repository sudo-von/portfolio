/* Material-ui. */
import Grid from '@material-ui/core/Grid'

export const Container = ({ children }) => 
    <Grid container spacing={2}>
        {children.map((child, i) => 
            <Grid key={i} item xs={12} sm={12} md={6}>
                {child}
            </Grid>
        )}
    </Grid>