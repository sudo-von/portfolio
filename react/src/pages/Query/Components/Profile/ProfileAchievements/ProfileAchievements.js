import PropTypes from 'prop-types'
/* Custom components. */
import Small from 'components/Small'

const ProfileAchievements = ({ id, achievements }) =>
    <ul style={styles.ul}>
        {achievements && achievements.map(achievment =>
            <li key={`${id}-${achievment}`}><Small>{achievment}.</Small></li>
        )}
    </ul>

const styles = {
    ul : {
        listStyle: 'none', 
        padding: 0
    }
}

ProfileAchievements.propTypes = {
    achievements: PropTypes.array
}

ProfileAchievements.defaultProps = {
    id: '',
    achievements: []
}

export default ProfileAchievements
