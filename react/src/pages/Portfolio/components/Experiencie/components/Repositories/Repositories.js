/* Custom components. */
import Carousel  from 'components/Carousel'
import Card from '../Card'
/* High order components. */
import withLoading from 'hocs/withLoading'

const Repositories = ({ data, currentPage, setCurrentPage }) => 
    <Carousel 
        currentPage={currentPage}
        onChange={(currentIndicator) => setCurrentPage(currentIndicator)}
        autoPlay={false}
        numberPages={data.total/4}>
        { data.results && data.results.map((data) => 
            <Card key={data.id} data={data}/>
        )}
    </Carousel>

export default withLoading(Repositories, 'Cargando proyectos...')