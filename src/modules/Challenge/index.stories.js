import React from "react";
import { storiesOf } from "@storybook/react";
import { Grid, Typography, Divider } from "@material-ui/core";

import Categorias from "../../components/Categorias";

import { Provider } from "react-redux";

import configureStore from "../../store/configureAppStore";

const store = configureStore();

storiesOf("Challenge", module).add("Component", () => {
    return (
        <Provider store={store}>
            <Grid container spacing={4}>
                <Grid item xs={12}>
                    <Typography variant="h3">
                        Jr. Front End Challenge
                    </Typography>
                    <Divider />
                </Grid>
                <Grid item>
                    <Categorias />
                </Grid>
            </Grid>
        </Provider>
    );
});
