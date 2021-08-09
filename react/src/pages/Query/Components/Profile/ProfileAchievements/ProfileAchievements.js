import PropTypes from 'prop-types'

const ProfileAchievements = ({ id, achievements }) =>
    <ul style={styles.ul}>
        {achievements && achievements.map(achievment =>
            <li key={`${id}-${achievment}`}>{achievment}.</li>
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
