import axios from "axios";
import { GET_CAT, CATEGORIAS_URL } from "../../../const";

export function getCats(dispatch) {
    return axios
        .get(CATEGORIAS_URL)
        .then((categorias) => {
            dispatch({
                type: GET_CAT,
                payload: categorias.data.data,
            });
        })
        .catch((error) => {
            return { msg: error };
        });
}
