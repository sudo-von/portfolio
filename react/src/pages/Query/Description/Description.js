import React from 'react'
/* Custom components. */
import HighlightedText from '../../../components/HighlightedText/'

const styles = {
    div: {
        margin: '10px 0'
    },
    highlightedText: {
        textAlign: 'center',
        margin: '10px 0 10px 0'
    },
    username: {
        fontSize: 18
    },
    name: {
        fontSize: 16,
        fontWeight: '400'
    },
    description: {
        fontSize: 14,
        margin: 4,
    }
}

const Description = ({username, name, description}, ...props) => 
    <div style={styles.div}>
        <p style={styles.highlightedText}>
            <HighlightedText>
                @
                <span style={styles.username}> {username} </span>
                /
                <span style={styles.name}> {name} </span>
            </HighlightedText>
        </p>
        {description.map((description, i) =>
            <p key={i} style={styles.description}>{description}.</p>
        )}
    </div>

export default Description