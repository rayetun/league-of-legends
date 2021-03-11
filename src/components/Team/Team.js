import React from 'react';
import { Link } from 'react-router-dom';
import './Team.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowRight} from '@fortawesome/free-solid-svg-icons'

const Team = (props) => {
    const {idTeam,strTeam,strTeamBadge,strSport} = props.team;
    return (
        <div className="col-md-4 col-12">
            <div className="card text-center">
                <img className="card-img-top" src={strTeamBadge} alt={strTeam}></img>
                <div className="card-body">
                    <h5 className="card-title">{strTeam}</h5>
                    <p className="card-text">Sports Type: {strSport}</p>
                    <Link to={`/teamdetails/${idTeam}`}><button className="btn btn-primary">Explore <span><FontAwesomeIcon icon={faArrowRight} /></span></button></Link>
                </div>
            </div>
        </div>
    );
};

export default Team;