import React, { Component } from 'react'
import {Button, Card} from "react-bootstrap";

/**
 * @props film, onClick()
 */
class FilmCard extends Component {

    render() {
        const film = this.props.film;
        return (
            <Card style={{ minWidth: '300px', margin: '5px', border: 'solid 1px lightgrey'}} >
                <Card.Img variant="top" src="" />
                <Card.Body>

                    <Card.Title>
                        {film.title}
                    </Card.Title>

                    <Card.Subtitle className="mb-2 text-muted">
                        {film.releaseDate}
                    </Card.Subtitle>

                    <Card.Text>
                        {film.description}
                    </Card.Text>

                </Card.Body>
                <Card.Footer style={{display: 'flex', justifyContent: 'space-evenly'}}>
                    <Button style={{width: '25%'}} size="sm" variant="secondary" onClick={ () => this.props.onClick(film, 'view') }>View</Button>
                    <Button style={{width: '25%'}} size="sm" variant="secondary" onClick={ () => this.props.onClick(film, 'edit') }>Edit</Button>
                    <Button style={{width: '25%'}} size="sm" variant="secondary" onClick={ () => this.props.onClick(film, 'delete') }>Delete</Button>
                </Card.Footer>
            </Card>
        );
    }
}

export default FilmCard;