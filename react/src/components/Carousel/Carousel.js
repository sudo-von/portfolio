import { useState } from 'react'
/* Material-ui. */
import { Box, Grid } from '@material-ui/core'
/* Custom components. */
import { CarouselButton }  from './CarouselButton'

const Carousel = ( { setPagination, pages, children } ) => {

    const [ page, setPage ] = useState(0)
    const changePage = (page) => {
        setPage(page)
        setPagination(page)
    }

    const buttons = []
    for (let i=0; i < pages; i++) {
        if(i === page){
            buttons.push(<CarouselButton active={true} onClick={() => changePage(i)}></CarouselButton>)
            continue
        }
        buttons.push(<CarouselButton onClick={() => changePage(i)}></CarouselButton>)
    }

    return(
        <Grid container spacing={2}>
            {children}
            <Grid item xs={12}>
                <Box display='flex' justifyContent='center' alignItems='center'>
                    {buttons}
                </Box>
            </Grid>
        </Grid>
    )
}

export default Carousel