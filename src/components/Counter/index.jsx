import React from 'react';
import { connect } from 'react-redux';
import { addCount, subCount } from './../../store/counterSlice';

const Counter = (props) => {
  console.log(props);
  const {counter:{count}, addCount, subCount} = props;
  const handleAdd = ()=>addCount()
  const handleSub = ()=>subCount()
  return (
    <section>
      <h2>Count: {count}</h2>
      <button onClick={handleAdd}>+</button>
      <button onClick={handleSub}>-</button>
    </section>
  );
};

const mapStateToProps = (state) => ({ counter: state.counter });

const mapDispatchToProps = (dispatch) => ({
  addCount: () => dispatch(addCount()),
  subCount: () => dispatch(subCount()),
});
export default connect(mapStateToProps, mapDispatchToProps)(Counter);
