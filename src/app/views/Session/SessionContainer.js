import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'
import { Session } from './Session'

const mapStateToProps = () => {
  return {
    parts: []
  }
}

const mapDispatchToProps = dispatch => {
  return {
    handleSubmit: text => dispatch(text)
    // toggleAllTodos: toggleStatus => dispatch(toggleAllTodos(toggleStatus))
  }
}

// const id = match.params.id

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Session))
