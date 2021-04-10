import React from 'react'
/* React router. */
import { Link } from 'react-router-dom'

const styles = {
        link: {
                textDecoration: 'none', 
                marginRight: 20
        }
}

const NavbarRoute = ( { to, name } ) => 
    <Link to={`/${to}`} style={styles.link}>
        <h4>{name.toUpperCase()}</h4>
    </Link>

export default NavbarRoute