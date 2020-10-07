import React, { FunctionComponent } from "react";

/* components */
import { Container } from "styles/global";
import { Form } from "components/Form";

const Intro: FunctionComponent = props => {
    return (
        <Container>
            <Form
                onSubmit={e => {
                    e.preventDefault();
                }}
            />
        </Container>
    );
};

export default Intro;
