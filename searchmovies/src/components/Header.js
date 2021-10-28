import React from 'react'

const Header = ({ children }) => {
    return (
        <div>
            <header>
                <h1 className="title">{children}</h1>
            </header>
        </div>
    )
}

export default Header
