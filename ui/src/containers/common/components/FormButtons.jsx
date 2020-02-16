import React from 'react';
import { Button } from 'reactstrap';

function FormButtons(props) {
    return (
        <React.Fragment>
            <Button className="button-main" onClick={props.handleSubmit}>Submit</Button>
            <Button onClick={ () => { window.location = `/${props.Cancelpath}` } }>Cancel</Button>
        </React.Fragment>
    )
}

export default FormButtons
