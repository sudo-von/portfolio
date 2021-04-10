import { useEffect, useState } from 'react'
import { getData } from '../../adapters'

/* Gets user's data from the API. */
const useUser = () => {
    
    const [ data, setData ] = useState({
        username: '',
        name: '',
        profilePicture: '',
        email: '',
        description: []
    })
    const [ loading, setLoading ] = useState(false)
    const [ error, setError ] = useState(null)

    useEffect(() => {

        const id = '60603a5aaa037f0008ed81f9'
        const url = `users/${id}`
        setLoading(true)
        
        getData(url)
            .then(res => {
                setData({
                    username : res.username,
                    name : res.name,
                    profilePicture : res.profile_picture,
                    email : res.email,
                    description : res.description
                })
            })
            .catch(err => {
                console.log(err)
                setError(true)
            })
        setLoading(false)

    }, [])

    return {
        data, loading, error
    }
}

export default useUser