import Axios from "axios";
import { GET_TODOS } from "../reducer/taskreducer";

export const getTodoList = () => {
  return (dispatch) => {
    Axios.get("https://todos-react.hasura.app/api/rest/get-todos")
      .then((result) => {
        dispatch(GET_TODOS(result.data.todos));
      })
      .catch((err) => {
        alert("Terjadi kesalahan");
        console.log(err);
      });
  };
};
