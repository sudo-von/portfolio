import React from 'react'
import styled from 'styled-components'

const Picture = styled.img`
    width: 150px;
    height: 150px;
    border-radius: 150px;
    box-shadow: 0 2px 2px 0 rgba(0,0,0,0.14),0 3px 1px -2px rgba(0,0,0,0.12),0 1px 5px 0 rgba(0,0,0,0.2);
`

const ProfilePicture = ({url}, ...props) => {
    const src = url ? url : 'https://i0.wp.com/static.tvtropes.org/pmwiki/pub/images/amputeekun.png'
    return (
        <Picture {...props} src={src} alt='Profile picture'/>
    )
}

export default ProfilePicture