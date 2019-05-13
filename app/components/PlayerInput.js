import React from 'react';
import PropTypes from "prop-types";


class PlayerInput extends React.Component {
    constructor(props){
        super(props)

        this.state = {
            username: ''
        }
        this.handleChange = this.handleChange.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)

    }

    handleSubmit(e){
        e.preventDefault(e);

        this.props.onSubmit(this.state.username);
    }

    handleChange(e){
        this.setState({
            username: e.target.value
        })
    }

    render() {
        return(
            <form className='column player' onSubmit={this.handleSubmit}>
                <label htmlFor='username' className='player-label'>
                    {this.props.label}
                </label>
                <div className='row player-inputs'>
                    <input
                        value={this.state.username}
                        type='text'
                        id='username'
                        className='input-light'
                        autoComplete='off'
                        onChange={this.handleChange}
                        placeholder="github username"
                    />
                    <button
                        className='btn dark-btn'
                        type='submit'
                        disabled={!this.state.username}
                    >
                        Submit
                    </button>
                </div>
            </form>
        )
    }

}

PlayerInput.propTypes = {
    label: PropTypes.string.isRequired,
    onSubmit: PropTypes.func.isRequired
};



export default PlayerInput;