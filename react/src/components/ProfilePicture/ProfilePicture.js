import React from 'react'

const styles = {
    img: {
        width: '150px',
        height: '150px',
        borderRadius: '150px',
        boxShadow: '0 2px 2px 0 rgba(0,0,0,0.14),0 3px 1px -2px rgba(0,0,0,0.12),0 1px 5px 0 rgba(0,0,0,0.2)'
    }
}

const ProfilePicture = ( { src } ) =>
    <img
        src={src ? src : 'https://i0.wp.com/static.tvtropes.org/pmwiki/pub/images/amputeekun.png'} 
        style={styles.img} 
        alt='Portfolio'
    />


export default ProfilePicture