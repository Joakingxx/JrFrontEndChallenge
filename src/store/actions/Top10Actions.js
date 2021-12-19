import axios from "axios";
import { GET_TOP10, TOP10_URL } from "../../../const";

export function getTop10(dispatch) {
  return axios
    .get(TOP10_URL)
    .then((top10) => {
      dispatch({
        type: GET_TOP10,
        payload: top10.data.data,
      });
    })
    .catch((error) => {
      return { msg: error };
    });
}
