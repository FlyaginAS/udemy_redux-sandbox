import  {createStore, bindActionCreators} from 'redux';
import * as actions from "./actions";
import reducer from './reducer';
import Counter from './counter';
import  React from 'react';
import ReactDOM from 'react-dom';

const store = createStore(reducer);
const { dispatch } = store;

const {inc, dec, rnd}=bindActionCreators(actions, dispatch);



const update=()=>{
    ReactDOM.render(
        <Counter
            inc={inc}
            dec={dec}
            rnd={()=>{
                const value=Math.floor(Math.random()*10);
                rnd(value);
            }}
            counter={store.getState()}/>,
        document.querySelector('#root'));
};
update();

store.subscribe(update);
