import React from 'react';
import { Button, ControlLabel, FormControl, FormGroup } from 'react-bootstrap';

class AddSongForm extends React.Component {
    render() {
        return (
            <form>
                <FormGroup>
                    <ControlLabel>Song Title</ControlLabel>
                    {' '}
                    <FormControl type="text" placeholder="song title" />
                </FormGroup>
                <FormGroup>
                    <ControlLabel>Artist</ControlLabel>
                    {' '}
                    <FormControl type="text" placeholder="artist" />
                </FormGroup>
                <FormGroup>
                    <ControlLabel>Album</ControlLabel>
                    {' '}
                    <FormControl type="text" placeholder="album" />
                </FormGroup>
                <FormGroup>
                    <ControlLabel>Year</ControlLabel>
                    {' '}
                    <FormControl type="text" placeholder="year" />
                </FormGroup>

                <FormGroup controlId="formControlsSelect">
                    <ControlLabel>Genre</ControlLabel>
                    <FormControl componentClass="select" placeholder="select">
                        <option value="classical">Classical</option>
                        <option value="electronic">Electronic</option>
                        <option value="folk">Folk</option>
                        <option value="metal">Metal</option>
                        <option value="rock">Rock</option>
                    </FormControl>
                </FormGroup>

                <Button type="submit">
                    Add Song
                </Button>
            </form>
        );
    }
}

export default AddSongForm;
