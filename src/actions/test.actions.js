import axios from 'axios'

export function getMusicList() {
  console.log("debug - 00");
  return function (dispatch){
    console.log("debug - 01");
    axios.get(`https://jsonplaceholder.typicode.com/posts`)
      .then(function(respond) {
        dispatch({
          type: 'GET_MUSICLIST_SUCCESS',
          payload: respond.data
        })
        console.log("debug - 02", respond);
      })
      .catch(function (error) {
        console.log("debug - 03 Error Occur");
      });
    }
}
