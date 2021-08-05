/* Custom components. */
import Image from 'components/Image'

const ProfilePicture = ({ src='https://giffiles.alphacoders.com/191/191571.gif'}) =>
    <Image 
        borderRadius={20} 
        src={src}
    />


export default ProfilePicture