import deepFreeze from 'deep-freeze';
import testReducer from './testReducer';

const musicList = [
  {'id':1, 'title':'Dropbox'},
  {'id':2, 'title':'Mega'}
]

// *------------------- states--------------------------- */
const test_initial_state = {
    musicList: []
};

const test_final_state = {
    ...test_initial_state,
    musicList: musicList
};

const test_action = {
  type: 'GET_MUSICLIST_SUCCESS',
  payload: [
    {'id':1, 'title':'Dropbox'},
    {'id':2, 'title':'Mega'}
  ]
};

// *------------- Making sure that our reducer won't mutate our states------------ */
deepFreeze(test_initial_state);
deepFreeze(test_final_state);

it('should not touch state on irrelevant actions', () => {
    expect(testReducer(test_initial_state,
    {
        type: 'IRRELEVANT_ACTION',
        payload: undefined
    })).toEqual(test_initial_state);
});

describe('test_final_state', () => {
    it('should have an intial state in case of the state was undefined', () => {
        expect(testReducer(undefined, test_action))
            .toEqual(test_final_state);
    });
});
