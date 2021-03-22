import React from 'react'
/* Custom components. */
import HighlightedText from '../Shared/HighlightedText'

const styles = {
    div: {
        lineHeight: .4,
        fontSize: '1em'
    },
    p: {
        textAlign: 'center'
    }
}

const Description = () => 
    <div style={styles.div}>
        <HighlightedText>Desarrollador web</HighlightedText> y de
        <HighlightedText> aplicaciones móviles</HighlightedText>.
        <p style={styles.p}>Apasionado del <HighlightedText>hacking ético</HighlightedText>.</p>
    </div>

export default Description