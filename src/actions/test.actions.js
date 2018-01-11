import axios from 'axios'

export function getMusicList() {
  console.log("debug - 0");
  return function action(dispatch) {
    dispatch({ type: 'GET_MUSICLIST_SUCCESS' })

    const request = axios({
      method: 'GET',
      url: `https://jsonplaceholder.typicode.com/posts`,
      headers: []
    });

    return request.then(
      response => dispatch(getMusicListSuccess(response)),
      err => dispatch(getMusicListError(err))
    );
  }
}

export function getMusicListSuccess(response) {
	return {
		type: 'GET_MUSICLIST_SUCCESS',
		payload: response.data
	};
}

export function getMusicListError(error) {
	console.log("Failed to load JSON Data");
}
