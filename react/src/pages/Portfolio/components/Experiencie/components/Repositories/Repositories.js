import { useEffect, useState } from 'react'
/* Custom components. */
import Carousel  from 'components/Carousel'
import Card from '../Card'

const Repositories = () => {

    const [ ctfs, setCtfs ] = useState([])
    const [ currentPage, setCurrentPage ] = useState(0)
    const limit = 4

    useEffect(() => {
        fetch(`http://localhost:3000/projects/von?limit=${limit}&offset=${(currentPage*limit)}`)
            .then(res => res.json())
            .then(res => setCtfs(res))
    }, [currentPage])

    return(
        <Carousel 
            currentPage={currentPage}
            onChange={(currentIndicator) => setCurrentPage(currentIndicator)}
            autoPlay={false}
            numberPages={ctfs.total/limit}>
            { ctfs.results && ctfs.results.map((ctf) => 
                <Card data={ctf}/>
            )}
        </Carousel>
    )
}

export default Repositories