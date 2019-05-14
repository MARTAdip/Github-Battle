import React from 'react';
import {FaUserFriends, FaFighterJet, FaTrophy, FaTimesCircle} from 'react-icons/fa'
import PlayerInput from "./PlayerInput";
import Results from "./Results";
import PropTypes from "prop-types";
import {ThemeConsumer} from '../../contexts/theme'
import {Link} from 'react-router-dom'


function Instructions() {
    return (
        <ThemeConsumer>
            {({theme}) => (
                <div className='instructions-container'>
                    <h1 className='center-text header-lg'>
                        Instructions
                    </h1>
                    <ol className='container-sm grid center-text battle-instructions'>
                        <li>
                            <h3 className='header-sm'>Enter two Github users</h3>
                            <FaUserFriends className={`bg-${theme}`} color='rgb(255, 191, 116)' size={140}/>
                        </li>
                        <li>
                            <h3 className='header-sm'>Battle</h3>
                            <FaFighterJet className={`bg-${theme}`} color='#727272' size={140}/>
                        </li>
                        <li>
                            <h3 className='header-sm'>See the winners</h3>
                            <FaTrophy className={`bg-${theme}`} color='rgb(255, 115, 0)' size={140}/>
                        </li>
                    </ol>
                </div>

            )}
        </ThemeConsumer>
    )
}


function PlayerPreview({username, onReset, label}) {
    return (
        <ThemeConsumer>
            {({theme}) => (
                <div className='column player'>
                    <h3 className='player-label'>{label}</h3>
                    <div className={`row bg-${theme}`}>
                        <div className='player-info'>
                            <img
                                className='avatar-small'
                                src={`https://github.com/${username}.png?size=200`}
                                alt={`Avatar for ${username}`}
                            />
                            <a
                                href={`https://github.com/${username}`}
                                className='link'>
                                {username}
                            </a>
                        </div>
                        <button className='btn-clear flex-center' onClick={onReset}>
                            <FaTimesCircle color='rgb(194, 57, 42)' size={26}/>

                        </button>
                    </div>
                </div>
            )}
        </ThemeConsumer>
    )
}

PlayerPreview.propTypes = {
    username: PropTypes.string.isRequired,
    onReset: PropTypes.func.isRequired,
    label: PropTypes.string.isRequired
};


class Battle extends React.Component {

    state = {
        playerOne: null,
        playerTwo: null,
    }


    handleSubmitPlayer = (id, player) => {
        this.setState({
            [id]: player
        })
    }

    handleResetPlayer = (id) => {
        this.setState({
            [id]: null,
        })
    }

    render() {
        const {playerOne, playerTwo} = this.state;


        return (
            <React.Fragment>
                <Instructions/>
                <div className='players-container'>
                    <h1 className='center-text header-lg'>Players</h1>
                    <div className='row space-around'>
                        {playerOne === null
                            ? <PlayerInput
                                label='Player One'
                                onSubmit={(player) => this.handleSubmitPlayer('playerOne', player)}
                            />
                            : <PlayerPreview
                                label='Player One'
                                onReset={() => this.handleResetPlayer('playerOne')}
                                username={playerOne}
                            />
                        }

                        {playerTwo === null
                            ? <PlayerInput
                                label='Player Two'
                                onSubmit={(player) => this.handleSubmitPlayer('playerTwo', player)}
                            />
                            : <PlayerPreview
                                label='Player Two'
                                onReset={() => this.handleResetPlayer('playerTwo')}
                                username={playerTwo}
                            />
                        }

                    </div>
                    {playerOne && playerTwo && (
                        <Link
                            className='btn dark-btn btn-space'
                            to={{
                                pathname: '/battle/results',
                                search: `?playerOne=${playerOne}&playerTwo=${playerTwo}`
                            }}
                        >
                            Battle
                        </Link>
                    )}
                </div>

            </React.Fragment>
        )
    }

}

export default Battle;