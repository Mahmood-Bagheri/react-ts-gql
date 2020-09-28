import React, { FunctionComponent } from "react";

import { ThemeProvider } from "styled-components";
/* constants */
import { theme } from "./global";

export const ThemeService: FunctionComponent = props => {
    const { children } = props;
    return <ThemeProvider theme={theme}>{children}</ThemeProvider>;
};
