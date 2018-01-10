import React, { Component } from 'react'
import { connect } from 'react-redux'
import { getMusicList } from '../../actions/test.actions.js'

class MusicList extends Component {
  componentDidMount() {
    getMusicList()
  }

  render() {
    return(
      <div>
        We are here
      </div>
    )
  }
}

const mapStateToProps = (state, ownProps) => ({
  musicList: state.musicList,
})

const mapDispatchToProps = {
  getMusicList,
}

export default connect(mapStateToProps, mapDispatchToProps)(MusicList)
