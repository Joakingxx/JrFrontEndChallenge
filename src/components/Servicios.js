import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

export default function Servicios() {
    const state = useSelector((state) => state.serviciosReducer);

    return <div>{state}</div>;
}
