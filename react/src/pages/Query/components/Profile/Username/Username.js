/* Custom components. */
import H5 from 'components/H5'
import Bold from 'components/Bold'

const Username = ({ username, name }) =>
    <H5>
        <Bold>
            @{username} / {name}
        </Bold>
    </H5>

export default Username