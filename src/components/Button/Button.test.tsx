import React from "react";
import {
    cleanup,
    fireEvent,
    render,
    RenderResult,
} from "@testing-library/react";

import { Button, ButtonProps } from "./Button";

describe("<DangerButton />", () => {
    let wrapper: RenderResult;
    const onClickHandler = jest.fn();
    const buttonText = "button";

    const buttonProps: ButtonProps = {
        onClick: onClickHandler,
        type: "danger",
        size: "lg",
    };

    beforeEach(() => {
        wrapper = render(<Button {...buttonProps}>{buttonText}</Button>);
    });
    afterAll(cleanup);

    it("Should render the button correctly", () => {
        const { getByTestId } = wrapper;
        const button = getByTestId("btn");
        expect(button).toBeInTheDocument();
    });

    it("Should fire the onClickHandler on click ", () => {
        const { getByTestId } = wrapper;
        const button = getByTestId("btn");
        fireEvent.click(button);
        /* to have beed called */
        expect(onClickHandler).toHaveBeenCalled();
        /* to have beed called only one time */
        expect(onClickHandler).toHaveBeenCalledTimes(1);
    });

    it("Should have the lg specified classnames", () => {
        const { queryByText } = wrapper;
        const button = queryByText("button") as HTMLButtonElement;
        expect(button.className).toContain("p-8 py-4 text-lg");
    });
});
