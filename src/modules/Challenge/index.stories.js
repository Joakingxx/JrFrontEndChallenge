import React from "react";
import { storiesOf } from "@storybook/react";
import { Grid, Typography, Divider } from "@material-ui/core";

import Categorias from "../../components/Categorias";
import Top10 from "../../components/Top10";

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
                    <div>
                        <Categorias />
                    </div>
                    <div style={{ marginLeft: "-15px" }}>
                        <Top10 />
                    </div>
                </Grid>
            </Grid>
        </Provider>
    );
});
