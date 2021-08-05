import React from 'react'

const Achievements = ({ achievements=[] }) =>
    <ul style={styles.ul}>
        {achievements.map(achievment =>
            <li key={achievment}>{achievment}.</li>
        )}
    </ul>

const styles = {
    ul : {
        listStyle: 'none', 
        padding: 0
    }
}

export default Achievements
