/* Custom components. */
import Carousel  from 'components/Carousel'
import Card from '../Card'
/* High order components. */
import withLoading from 'hocs/withLoading'

const Repositories = ({ data, fetchData}) => 
    <Carousel 
        fetchData={fetchData}
        numberPages={data.total/4}>
        { data.results && data.results.map((data) => 
            <Card key={data.id} data={data}/>
        )}
    </Carousel>

export default withLoading(Repositories, 'Cargando proyectos...')