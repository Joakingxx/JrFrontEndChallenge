import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getTop10 } from "../store/actions/Top10Actions";

import {
    List,
    ListItem,
    ListItemText,
    ListItemAvatar,
    Avatar,
} from "@material-ui/core";

export default function Top10() {
    const top10 = useSelector((state) => state.Top10Reducer);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getTop10);
    }, [dispatch]);

    return (
        <div>
            <List>
                {top10.map((e) => (
                    <ListItem>
                        <ListItemAvatar>
                            <Avatar>A</Avatar>
                        </ListItemAvatar>
                        <ListItemText
                            primary="Photos"
                            secondary="Jan 9, 2014"
                        />
                    </ListItem>
                ))}
            </List>
        </div>
    );
}
