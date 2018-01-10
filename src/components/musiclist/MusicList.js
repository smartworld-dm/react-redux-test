import React, { Component } from 'react'
import { connect } from 'react-redux'
import { getMusicList } from '../../actions/test.actions.js'
import store from '../../store';
import Fa from 'react-fontawesome'

class MusicList extends Component {
  constructor (props) {
    super(props)

    this.state = {
      musicList: [],
		}
  }

  componentDidMount() {
    this.props.getMusicList();
  }

  componentWillReceiveProps (newProps) {
    const musicList = newProps.musicList;
    this.setState({ musicList: musicList });
  }

  onEdit(){
    console.log("edit");
  }

  onDelete(id){
    console.log("delete", id);
    const oldMusicList = this.state.musicList;
    const musicList = [];
    for(var i = 0; i < oldMusicList.length; i++){
      if(oldMusicList[i].id != id)
        musicList.push(oldMusicList[i]);
    }
    this.setState({ musicList: musicList });
  }

  showMusicList () {
    if (this.state.musicList && this.state.musicList.length > 0) {
      return this.state.musicList.map((eachMusic, index) => {
        return(
          <div>
            <p><span>No {index + 1}: </span>
            <span>ID {eachMusic.id}: </span>
            <span>{eachMusic.title}</span>
            <button onClick={()=>this.onEdit()}>Edit</button>
            <button onClick={(id)=>this.onDelete(eachMusic.id)}>Delete</button>
            </p>
          </div>
        )
      });
    }
  }

  render() {
    return(
      <div>
        Test page
        <div>
        { this.showMusicList() }
        </div>
      </div>
    )
  }
}

function mapStateToProps(state) {
  return {
    musicList: state.test.musicList,
  }
}

function mapDispatchToProps(dispatch) {
  return {
    getMusicList: () => store.dispatch(getMusicList()),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(MusicList)
