import React, { FunctionComponent } from "react";
import { StyledForm, StyledFormGroup } from "./styles";

type FormProps = React.HtmlHTMLAttributes<HTMLFormElement>;

export const Form: FunctionComponent<FormProps> = props => {
    return (
        <StyledForm {...props}>
            <h1>Form Title</h1>
            <StyledFormGroup>
                <label htmlFor="">Username</label>
                <input type="text" />
            </StyledFormGroup>
            <StyledFormGroup>
                <label htmlFor="">Password</label>
                <input type="text" />
            </StyledFormGroup>
            <button>Hi!</button>
        </StyledForm>
    );
};
