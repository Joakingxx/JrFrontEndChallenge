import React, { useEffect, useState } from "react";
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
    const categorias = useSelector((state) => state.CategoriasReducer);
    const dispatch = useDispatch();
    const [selectedIndex, setSelectedIndex] = useState();

    const handleListItemClick = (event, index) => {
        setSelectedIndex(index);
    };

    useEffect(() => {
        dispatch(getTop10);
    }, [dispatch]);

    return (
        <List>
            {top10.map((e, i) => (
                <ListItem
                    button
                    selected={selectedIndex === i}
                    onClick={(event) => handleListItemClick(event, i)}
                >
                    <ListItemAvatar>
                        <Avatar
                            style={{
                                backgroundColor: `${
                                    categorias[e.categoryId - 1].color
                                }`,
                            }}
                        >
                            {e.customerName.charAt(0)}
                        </Avatar>
                    </ListItemAvatar>
                    <ListItemText
                        primary={e.customerName + " " + e.customerLastName}
                        secondaryTypographyProps={{
                            style: {
                                color: `${categorias[e.categoryId - 1].color}`,
                            },
                        }}
                        secondary={e.title + ": " + e.groupDescription}
                    />
                </ListItem>
            ))}
        </List>
    );
}
