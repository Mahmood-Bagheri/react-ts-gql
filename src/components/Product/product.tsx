import React, { FunctionComponent } from "react";

/* internal components */
import { ProductBody } from "./product-body";
import { ProductFooter } from "./product-footer";

/* styles */
import { ProductWrapper } from "./styles/product.styles";
import styled, { keyframes } from "styled-components";

const progress = keyframes`
   0% {
    transform: translate3d(-100%, 0, 0);
  }
  100% {
    transform: translate3d(100%, 0, 0);
  }
`;

const Shine = styled.div`
    position: relative;
    overflow: hidden;
    width: 40px;
    height: 40px;
    background: #f0f0f0;
    border-radius: 100%;
    &::after {
        content: "";
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background: linear-gradient(90deg, #f0f0f0, #ffffff, #f0f0f0);
        animation: ${progress} 1s ease-in-out infinite;
    }
`;

const Bar = styled.div`
    position: relative;
    overflow: hidden;
    width: 400px;
    height: 40px;
    background: #f0f0f0;
    &::after {
        content: "";
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background: linear-gradient(90deg, #f0f0f0, #ffffff, #f0f0f0);
        animation: ${progress} 2s ease-in-out infinite;
    }
`;

type ProductProps = {};

export const Product: FunctionComponent<ProductProps> = props => {
    return (
        <ProductWrapper>
            <div className="flex mb-4 space-x-3">
                <Shine /> <Bar />
            </div>
        </ProductWrapper>
    );
};
