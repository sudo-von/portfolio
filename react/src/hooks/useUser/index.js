import { useEffect, useState } from 'react'
import { getData } from '../../adapters'

/* Gets user's data from the API. */
const useUser = () => {
    
    const [ username, setUsername ] = useState('')
    const [ name, setName ] = useState('')
    const [ profilePicture, setProfilePicture ] = useState('')
    const [ email, setEmail ] = useState('')
    const [ description, setDescription ] = useState([])

    useEffect(() => {

        const id = '60603a5aaa037f0008ed81f9'
        const url = `users/${id}`

        getData(url)
            .then(res => {
                setUsername(res.username)
                setName(res.name)
                setProfilePicture(res.profile_picture)
                setEmail(res.email)
                setDescription(res.description)
            })
            .catch(err => console.log(err))

    }, [])

    return {
        username,
        name,
        profilePicture,
        email,
        description
    }
}

export default useUser