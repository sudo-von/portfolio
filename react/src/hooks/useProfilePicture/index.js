import { useEffect, useState } from 'react'
import { getData } from '../../adapters/'

/* Gets user's profile picture from the API. */
const useProfilePicture = () => {
    
    const [ profilePicture, setProfilePicture ] = useState('')
    
    useEffect(() => {

        const id = '60603a5aaa037f0008ed81f9'
        const url = `users/${id}`

        getData(url)
            .then(res => setProfilePicture(res.profile_picture))
            .catch(err => console.log(err))

    }, [])

    return {
        profilePicture
    }
}

export default useProfilePicture