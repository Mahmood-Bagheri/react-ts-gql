import React, { FunctionComponent } from "react";

/* styles */
import { Div } from "./styles/product-body.styles";

type ProductBodyProps = {
    onChange: () => void;
    onSelect: () => void;
    onSomeEvent: () => void;
} & React.HtmlHTMLAttributes<HTMLDivElement>;

export const ProductBody: FunctionComponent<ProductBodyProps> = props => {
    return <Div>product body</Div>;
};
