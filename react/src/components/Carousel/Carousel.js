import { useEffect, useState } from 'react'
/* Material-ui. */
import Carousel  from 'react-material-ui-carousel'
/* Custom components. */
import { Container } from './Container'

const CustomCarousel = ( { currentPage, numberPages, children, ...rest } ) => {
    
    const containers = []
    for (let index = 0; index < numberPages; index++) {
        if (index === currentPage){
            containers.push(<Container>{children}</Container>)
            continue
        }
        containers.push(null)
    }

    return(
        <Carousel
            {...rest}
        >
            {containers}
        </Carousel>
    )
}

export default CustomCarousel