import React from "react";
import PropTypes from "prop-types";
import {FaCompass, FaBriefcase, FaUsers, FaUserFriends, FaCode, FaUser} from 'react-icons/fa'
import Tooltip from './Tooltip'
import { styles } from './Tooltip';


class ProfileList extends React.Component {
    constructor(props){
        super(props)

        this.state = {
            hoveringLocation: false,
            hoveringCompany: false
        }
        this.mouseOut = this.mouseOut.bind(this)
        this.mouseOver = this.mouseOver.bind(this)

    }

    mouseOver(id){
        this.setState({
            [id]: true
        })
    }

    mouseOut(id){
        this.setState({
            [id]: false
        })
    }

    render() {
        const { hoveringLocation, hoveringCompany } = this.state;
        const { profile } = this.props;

        return(
            <ul className='card-list'>
                <li>
                    <FaUser color='rgb(239, 115, 115)' size={22}/>
                    {profile.name}
                </li>
                {profile.location && (
                    <li
                        onMouseOver={() => this.mouseOver('hoveringLocation')}
                        onMouseOut={() => this.mouseOut('hoveringLocation')}
                        style={styles.container}
                    >
                        {hoveringLocation === true && <div style={styles.tooltip}>User's Location</div>}
                        <FaCompass color='rgb(144, 115, 255)' size={22}/>
                        {profile.location}
                    </li>
                )}
                {profile.company && (
                    <li
                        onMouseOver={() => this.mouseOver('hoveringCompany')}
                        onMouseOut={() => this.mouseOut('hoveringCompany')}
                        style={styles.container}
                    >
                        {hoveringCompany === true && <div style={styles.tooltip}>User's Company</div>}
                        <FaBriefcase color='#795548' size={22}/>
                        {profile.company}
                    </li>
                )}
                <li>
                    <FaUsers color='rgb(129, 195, 245)' size={22}/>
                    {profile.followers.toLocaleString()} followers
                </li>
                <li>
                    <FaUserFriends color='rgb(64, 183, 95)' size={22}/>
                    {profile.following.toLocaleString()} following
                </li>
                <li>
                    <FaCode color='black' size={22}/>
                    {profile.public_repos.toLocaleString()} repositories
                </li>
            </ul>

        )
    }
}

export default ProfileList;

ProfileList.propTypes = {
    profile: PropTypes.object.isRequired,
}