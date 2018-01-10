export function getMusicList() {
    return function (dispatch) {
        dispatch({ type: 'MUSICLIST_PENDING' });
        dispatch({
            type: 'USER_CURRENT_FULFILLED', payload: [{
                Name: 'username',
                Value: 'test@user.com'
            }, {
                Name: 'name',
                Value: 'Test'
            }, {
                Name: 'family_name',
                Value: 'User'
            }, {
                Name: 'email',
                Value: 'test@user.com'
            }, {
                Name: 'phone_number',
                Value: '555-11111'
            }]
        });
    }
}
