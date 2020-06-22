import React from 'react'
import { NavLink } from 'react-router-dom'

const activeStyle = {
    color: 'rgb(187, 46, 31)'
}

import ThemeContext from '../contexts/theme'

export default function Nav() {

    const { theme, toggleTheme } = React.useContext(ThemeContext)

    return (
        <nav className="row space-between">
            <ul className='row nav'>
                <li>
                    <NavLink
                        exact
                        to='/'
                        className='nav-link'
                        activeStyle={activeStyle}
                    >Favs
                    </NavLink>
                </li>
                <li>
                    <NavLink
                        exact
                        to='/battle'
                        className='nav-link'
                        activeStyle={activeStyle}
                    >Battle
                    </NavLink>
                </li>
            </ul>
            <button
                style={{ fontSize: 30 }}
                className="btn-clear"
                onClick={toggleTheme}
            >
                {theme === 'light' ? '🕶' : '🔅'}
            </button>
        </nav>
    )
}
