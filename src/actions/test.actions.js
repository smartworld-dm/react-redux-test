import axios from 'axios'

export function getMusicList() {
  console.log("debug - 01");
  return (dispatch) => axios.get(`https://jsonplaceholder.typicode.com/posts/1`)
      .then(response => {
        dispatch({
          type: 'GET_MUSICLIST_SUCCESS',
          payload: [{
              Name: 'username',
              Value: 'test@user.com'
          }, {
              Name: 'name',
              Value: 'Test'
          }]
        })
        return response
      })
}
