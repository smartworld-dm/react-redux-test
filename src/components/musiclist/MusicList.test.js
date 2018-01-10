import React from 'react';
import ReactDOM from 'react-dom';

import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

configure({ adapter: new Adapter() });

import MusicList from './MusicList';
import { shallow } from 'enzyme';
import store from '../../store';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<MusicList store={store}/>, div);
});
