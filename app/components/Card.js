import React from 'react';
import PropTypes from 'prop-types';
import { ThemeConsumer } from '../../contexts/theme'


export default function Card ({ header, avatar, name, subheader, href, children }) {
    return (
        <ThemeConsumer>
            {({ theme }) => (
            <div className={`card bg-${theme}`}>
                <h4 className='header-lg center-text'>
                    {header}
                </h4>
                <img
                    className='avatar'
                    src={avatar}
                    alt={`Avatar for ${name}`}
                />
                {subheader && (
                    <h4 className='center-text'>
                        {subheader}
                    </h4>
                )}
                <h2 className='center-text'>
                    <a className='link' href={href}>
                        {name}
                    </a>
                </h2>
                {children}
            </div>
            )}
        </ThemeConsumer>
    )
}

Card.propTypes = {
    header: PropTypes.string.isRequired,
    avatar: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    subheader: PropTypes.string,
    href: PropTypes.string.isRequired,
}