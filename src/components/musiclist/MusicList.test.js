import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux'
import renderer from 'react-test-renderer'
import {createStore} from 'redux'
import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
configure({ adapter: new Adapter() });
import { MusicList } from './MusicList';
import { shallow, mount } from 'enzyme';
import configureStore from 'redux-mock-store'
import Modal from 'react-modal';

describe('>>>MusicList --- Shallow Render REACT COMPONENTS',()=>{
  let wrapper
  const mockStore = configureStore()
  const musicList = [
    {'id':1, 'title':'Dropbox'},
    {'id':2, 'title':'Mega'}
  ]
  const initialState = {test: musicList}
  const baseProps = {
    getMusicList: jest.fn(),
  };
  let store,container

  beforeEach(()=>{
    store = mockStore(initialState)
    wrapper = shallow(<MusicList {...baseProps} />)
  })

  it('+++ render the DUMB component', () => {
    expect(wrapper.length).toEqual(1)
  });

  it('+++ contains header - "Test page"', () => {
    expect(wrapper.contains('Test page')).toBe(true)
  });

  it('+++ contains header - "<h2>Test page</h2>"', () => {
    expect(wrapper.contains(<h2>Test page</h2>)).toBe(true)
  });

  it('+++ should have Modal ', () => {
    expect(wrapper.find(Modal).length).toEqual(1)
  });

  it('+++ should have 2 musicList when props setted', () => {
    wrapper.setProps({musicList})
    expect(wrapper.find('.eachMusic').length).toEqual(2)
  });

  it('+++ check first musicList No', () => {
    wrapper.setProps({musicList})
    expect(wrapper.find('span').first().props().children).toEqual([ 'No ', 1, ': ' ]);
  });

  it('+++ check first musicList ID', () => {
    wrapper.setProps({musicList})
    expect(wrapper.find('span').at(1).props().children).toEqual([ 'ID ', 1, ': ' ]);
  });

  it('+++ first musicList title should "Dropbox"', () => {
    wrapper.setProps({musicList})
    expect(wrapper.find('span').at(2).props().children).toEqual('Dropbox');
  });

  it('+++ check second musicList No', () => {
    wrapper.setProps({musicList})
    expect(wrapper.find('span').at(3).props().children).toEqual([ 'No ', 2, ': ' ]);
  });

  it('+++ check second musicList ID', () => {
    wrapper.setProps({musicList})
    expect(wrapper.find('span').at(4).props().children).toEqual([ 'ID ', 2, ': ' ]);
  });

  it('+++ second musicList title should "Mega"', () => {
    wrapper.setProps({musicList})
    expect(wrapper.find('span').at(5).props().children).toEqual('Mega');
  });

  it('+++ after click delete btn of first MusicList item, only second MusicList should be left', () => {
    wrapper.setProps({musicList})
    wrapper.find('button').at(1).simulate('click', { preventDefault() {} });
    expect(wrapper.find('span').at(0).props().children).toEqual([ 'No ', 1, ': ' ]);
    expect(wrapper.find('span').at(1).props().children).toEqual([ 'ID ', 2, ': ' ]);
    expect(wrapper.find('span').at(2).props().children).toEqual('Mega');
  });

  it('+++ after click delete btn of second MusicList item, only first MusicList should be left', () => {
    wrapper.setProps({musicList})
    wrapper.find('button').at(3).simulate('click', { preventDefault() {} });
    console.log("@@@ - 1", wrapper.debug());
    expect(wrapper.find('span').at(0).props().children).toEqual([ 'No ', 1, ': ' ]);
    expect(wrapper.find('span').at(1).props().children).toEqual([ 'ID ', 1, ': ' ]);
    expect(wrapper.find('span').at(2).props().children).toEqual('Dropbox');
  });

});
