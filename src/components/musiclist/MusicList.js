import React, { Component } from 'react'
import { connect } from 'react-redux'
import { getMusicList } from '../../actions/test.actions.js'
import Modal from 'react-modal';

const customStyles = {
  content : {
    top                   : '50%',
    left                  : '50%',
    right                 : 'auto',
    bottom                : 'auto',
    marginRight           : '-50%',
    transform             : 'translate(-50%, -50%)'
  }
};

class MusicList extends Component {
  constructor (props) {
    super(props)

    this.state = {
      musicList: [],
      isOpen: false,
      curID: 0,
      newTitle: '',
		}
  }

  componentDidMount() {
    this.props.getMusicList();
  }

  componentWillReceiveProps (newProps) {
    const musicList = newProps.musicList;
    this.setState({ musicList: musicList });
  }

  onEdit(no, id) {
    console.log("edit no - ", no);
    console.log("edit id - ", id);
    const musicList = this.state.musicList;
    console.log("edit title - ", musicList[no].title);
    this.setState({ isOpen: true, newTitle: musicList[no].title, curID: id });
  }

  onAfterOpen () {
    console.log("onAfterOpen");
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

  onOk () {
    console.log("Ok newTitle - ", this.state.newTitle);
    const musicList = this.state.musicList;
    var curID = this.state.curID;
    var newTitle = this.state.newTitle;
    for(var i = 0; i < musicList.length; i++){
      if(musicList[i].id == curID){
        musicList[i].title = newTitle;
        console.log("###", musicList);
      }
    }
    this.setState({ isOpen: false, curID: 0, newTitle: '', musicList: musicList });
  }

  updateInputValue(evt) {
    console.log("onChange value - ", evt.target.value);
    this.setState({
      newTitle: evt.target.value
    });
  }

  showEditModal () {
    var initVal = this.state.newTitle;
    return(
      <Modal
        isOpen={this.state.isOpen}
        onAfterOpen={()=>this.onAfterOpen()}
        onRequestClose={()=>{this.setState({ isOpen: false })}}
        closeTimeoutMS={100}
        style={customStyles}
        contentLabel="Modal"
      >
        <label>
          ID: {this.state.curID}
        </label><p></p>
        <label>
          Text: <input type="text" value={initVal} onChange={evt => this.updateInputValue(evt)} name="title" />
        </label>
        <button onClick={()=>this.onOk()}>Ok</button>
        <button onClick={()=>{this.setState({ isOpen: false })}}>Cancel</button>
      </Modal>
    );
  }

  showMusicList () {
    if (this.state.musicList && this.state.musicList.length > 0) {
      return this.state.musicList.map((eachMusic, index) => {
        return(
          <div>
            <p><span>No {index + 1}: </span>
            <span>ID {eachMusic.id}: </span>
            <span>{eachMusic.title}</span>
            <button onClick={(no, id)=>this.onEdit(index, eachMusic.id)}>Edit</button>
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
        { this.showEditModal() }
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
    getMusicList: () => dispatch(getMusicList()),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(MusicList)
