import React from 'react';
import '../Clubs/Clubs.css'
import { Button, Card } from 'react-bootstrap';
import { Link, useHistory } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAngleDoubleRight} from '@fortawesome/free-solid-svg-icons'


const Clubs = (props) => {
    const {idTeam, strTeam, strSport, strTeamBadge} = props.club;
    // console.log(props.club);

    // track of each clubs id
    const history = useHistory();
    const showDetails = idTeam => {
        const url = `clubdetails/${idTeam}`; 
        history.push(url);
    }
    return (
        <div className="clubs">
            <Card style={{ padding: '30px', marginBottom: '1rem', width: '18rem', textAlign: 'center' }}>
                <Card.Img variant="top" src={strTeamBadge} />
                <Card.Body>
                    <Card.Title>{strTeam}</Card.Title>
                    <Card.Text className="text-gray">Sports Type: {strSport}</Card.Text>
                    <Button variant="primary" onClick={()=> showDetails(idTeam)}>Explore <FontAwesomeIcon icon={faAngleDoubleRight}/></Button>
                </Card.Body>
            </Card>
        </div>
    );
};

export default Clubs;