import React, { FunctionComponent } from "react";

/* internal components */
import { ProductBody } from "./product-body";
import { ProductFooter } from "./product-footer";

/* styles */
import { ProductWrapper } from "./styles/product.styles";

type ProductProps = {};

export const Product: FunctionComponent<ProductProps> = props => {
    return (
        <ProductWrapper {...props}>
            <ProductFooter />
        </ProductWrapper>
    );
};
