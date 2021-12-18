import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getCats } from "../store/actions/categoriasActions";
import { Grid, makeStyles, Typography } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
    ctasCount: {
        marginRight: "10px",
        color: "#000000",
        padding: "4px 15px 4px 15px",
        borderRadius: "9px",
        fontSize: "15px",
    },
}));

export default function Categorias() {
    const categorias = useSelector((state) => state.CategoriasReducer);
    const classes = useStyles();
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getCats);
    }, [dispatch]);

    return (
        <div>
            <Grid container spacing={1}>
                <Grid container item xs={12} spacing={3}>
                    {categorias?.map((e) => (
                        <Grid item xs={4}>
                            <Typography>
                                <span
                                    style={{ backgroundColor: `${e.color}` }}
                                    className={classes.ctasCount}
                                >
                                    {e.ctasCount}
                                </span>
                                {e.name}
                            </Typography>
                        </Grid>
                    ))}
                </Grid>
            </Grid>
        </div>
    );
}
