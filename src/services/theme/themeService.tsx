import React, { FunctionComponent } from "react";

import { ThemeProvider } from "styled-components";
/* constants */
import { __THEME__ } from "./global";

export const ThemeService: FunctionComponent = props => {
    const { children } = props;
    return <ThemeProvider theme={__THEME__}>{children}</ThemeProvider>;
};
