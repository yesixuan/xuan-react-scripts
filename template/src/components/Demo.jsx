import React from 'react';
import { bindActionCreators } from "redux";
import { connect } from 'react-redux'
import { add, minus } from '../store/demo.reducer'

function Demo({ count, add, minus }) {
  return (
    <div className="App">
      <header className="App-header">
        <h3 onClick={minus.bind(null, 2)}>减2</h3>
        <h3 onClick={() => minus(3)}>减3</h3>
      </header>
    </div>
  )
}

const mapState = ({ demo }) => demo // 最终注入到 props 中的是 demo 中的每一个属性
// const mapDispatch = dispatch => ({
//   add: () => dispatch(add()),
//   minus: num => dispatch(minus(num))
// })
const mapDispatch = dispatch => bindActionCreators({ add, minus }, dispatch)

export default connect(mapState, mapDispatch)(Demo);
