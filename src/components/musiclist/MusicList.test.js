import React from 'react';
import ReactDOM from 'react-dom';
import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
configure({ adapter: new Adapter() });
import MusicList from './MusicList';
import { shallow } from 'enzyme';
import configureStore from 'redux-mock-store'

describe('>>>MusicList --- REACT-REDUX (Shallow + passing the {store} directly)',()=>{
  const initialState = {output:100}
  const mockStore = configureStore()
  let store,container

  beforeEach(()=>{
      store = mockStore(initialState)
      container = shallow(<MusicList store={store} /> )
  })

  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<MusicList store={store}/>, div);
  });
});
