import { useEffect, useState } from 'react'
import { getUserByID } from '../../adapters/user.adapter'

/* Gets user's data from the API. */
const useUser = () => {
    
    const [ user, setUser ] = useState({
        username: '',
        name: '',
        profilePicture: '',
        email: '',
        description: []
    })
    const [ loading, setLoading ] = useState(true)
    const [ error, setError ] = useState(null)

    useEffect(() => {

        const userID = `60603a5aaa037f0008ed81f9`
        getUserByID(userID)
            .then(res => {
                setLoading(false)
                setUser({
                    username : res.username,
                    name : res.name,
                    profilePicture : res.profile_picture,
                    email : res.email,
                    description : res.description
                })
            })
            .catch(err => {
                setLoading(false)
                setError(true)
            })
    }, [])

    return {
        user, loading, error
    }
}

export default useUser