import { Fragment } from 'react'
import PropTypes from 'prop-types'
/* Custom components. */
import H2 from 'components/H2/'
import Bold from 'components/Bold/'

const Description = ({ title, bold, children}) =>
    <Fragment>
        <H2>{ bold ? <Bold>{title}</Bold> : title }</H2>
        <div>
            {children}
        </div>
    </Fragment>

Description.propTypes = {
    title: PropTypes.string,
    bold: PropTypes.bool,
    children: PropTypes.node.isRequired
}

Description.defaultProps = {
    title: '',
    bold: false
}

export default Description