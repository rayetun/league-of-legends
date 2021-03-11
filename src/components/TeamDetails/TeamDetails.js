import React, {useState, useEffect} from 'react';
import { useParams } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMapMarkerAlt,faFlag,faFutbol,faMars} from '@fortawesome/free-solid-svg-icons'
import { faTwitter,faFacebookF,faYoutube } from '@fortawesome/free-brands-svg-icons'
import './TeamDetails.css';


const TeamDetails = () => {
    const {teamId} = useParams();
    const [teams, setTeams] = useState([]);
    const iconMap = <FontAwesomeIcon icon={faMapMarkerAlt} />
    const iconFlag = <FontAwesomeIcon icon={faFlag} />
    const iconBall = <FontAwesomeIcon icon={faFutbol} />
    const iconGender = <FontAwesomeIcon icon={faMars} />
    const iconFacebook = <FontAwesomeIcon icon={faFacebookF} />
    const iconTwitter = <FontAwesomeIcon icon={faTwitter} />
    const iconYoutube = <FontAwesomeIcon icon={faYoutube} />
    useEffect(() => {
        const url = `https://www.thesportsdb.com/api/v1/json/1/lookupteam.php?id=${teamId}`;
        fetch(url)
        .then(res => res.json())
        .then(data => setTeams(data.teams[0]))
    }, [teamId])
    const {strTeamBanner,strTeamBadge,strTeam,strGender,intFormedYear,strCountry,strSport,strDescriptionEN,strTwitter,strFacebook,strYoutube} = teams;
    const teamStyle = {
        backgroundImage:`url(${strTeamBanner})`,
    }
    const teamImage = strGender ? <img src="/male.png" alt="Male"></img> : <img src="/female.png" alt="Female"></img>
    
    return (
        <div>
            <div style={teamStyle} className="banner-area">
                <div className="container">
                    <div className="row">
                        <div className="col-md-2">
                            <div className="logo-area">
                                <img className="logo" src={strTeamBadge} alt="Logo"></img>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="container pt-5">
                <div className="row team-information">
                    <div className="col-md-6 col-12">
                        <div className="single-info">
                            <h3>{strTeam}</h3>
                            <p><span>{iconMap}</span>Founded : {intFormedYear}</p>
                            <p><span>{iconFlag}</span>Country : {strCountry}</p>
                            <p><span>{iconBall}</span>Sports Type : {strSport}</p>
                            <p><span>{iconGender}</span>Gender : {strGender}</p>
                        </div>
                    </div>
                    <div className="col-md-6 col-12">
                        {teamImage}
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-12">
                        <div className="single-details">
                            <p>{strDescriptionEN}</p>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-12">
                        <div className="social-area text-center">
                            <a href={`https://${strTwitter}`} target="_blank" rel="noreferrer"><span>{iconTwitter}</span></a>
                            <a href={`https://${strFacebook}`} target="_blank" rel="noreferrer"><span>{iconFacebook}</span></a>
                            <a href={`https://${strYoutube}`} target="_blank" rel="noreferrer"><span>{iconYoutube}</span></a>  
                        </div>
                    </div>
                </div>
            </div>
        </div>
        
    );
};

export default TeamDetails;