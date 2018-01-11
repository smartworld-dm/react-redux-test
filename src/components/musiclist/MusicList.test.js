import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux'
import renderer from 'react-test-renderer'
import {createStore} from 'redux'
import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
configure({ adapter: new Adapter() });
import MusicList from './MusicList';
import { shallow } from 'enzyme';
import configureStore from 'redux-mock-store'

// Snapshot for MusicList React Component
describe('>>>MusicList --- Snapshot',()=>{
    const mockStore = configureStore()
    const musicList = [
      ['id':1, 'title':'Dropbox'],
      ['id':2, 'title':'Mega']
    ]
    const initialState = {test: musicList}
    let store,container
    store = mockStore(initialState)

    it('+++capturing Snapshot of MusicList', () => {
        const renderedValue =  renderer.create(<MusicList store={store}/>).toJSON()
        expect(renderedValue).toMatchSnapshot();
    });

});
