import { useEffect, useState } from 'react'
/* Material-ui. */
import Carousel  from 'react-material-ui-carousel'
/* Custom components. */
import { Container } from './Container'

const CustomCarousel = ( { fetchData, numberPages, children, ...rest } ) => {
    
    const containers = []
    for (let index = 0; index < numberPages; index++) {
        if (index === 0){
            containers.push(<Container key={index}>{children}</Container>)
            continue
        }
        containers.push(null)
    }

    return(
        <Carousel
            next={ (next, active) => fetchData(next)}
            prev={ (prev, active) => fetchData(prev)}
            {...rest}
        >
            {containers}
        </Carousel>
    )
}

export default CustomCarousel