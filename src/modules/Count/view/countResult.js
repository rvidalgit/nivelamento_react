import React from "react";
import {connect} from "react-redux";
import {subtract, sum} from '../redux/action';

const Count = (props) => {

    return (
        <div>
            <h1>{props.numero}</h1>
            <button onClick={props.sum}>Somar</button>
            <button onClick={props.subtract}>Subtrair</button>
        </div>
    );
};

const mapStateToProps = (store) => {
    return {
        numero: store.COUNT.value,
    };
};

const mapToDispatchToProps = (dispatch) => {
    return {
        sum: () => dispatch(sum()),
        subtract: () => dispatch(subtract()),
    };
};

export default connect(mapStateToProps, mapToDispatchToProps)(Count);