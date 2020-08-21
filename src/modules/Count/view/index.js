//@flow
import React from "react";
import {connect} from "react-redux";
import {subtract, sum} from '../redux/action';
import {push} from "connected-react-router";
import type {Store} from "../../../shared/flowTypes";

type Props = {
    numero: number,
    sum: () => void,
    subtract: () => void,
    nextPage: () => void,
}

const Count = (props: Props) => {

    return (
        <div style={{margin: '20px 40%'}}>
            <h1 style={{fontWeight: 'bold'}}>Utilize os botões abaixo: </h1>
            <h2 style={{
                margin: '15px',
                border: '1px solid #000000',
                display: 'inline-block',
                padding: '10px',
                borderRadius: '5px'
            }}>{props.numero}</h2>

            <div>
                <button onClick={props.sum}>Somar</button>
                <button onClick={props.subtract}>Subtrair</button>
                <button onClick={props.nextPage}>Next page</button>
            </div>
        </div>
    );
};

const mapStateToProps = (store: Store) => {
    return {
        numero: store.COUNT.value,
    };
};

const mapToDispatchToProps = (dispatch) => {
    return {
        sum: () => dispatch(sum()),
        subtract: () => dispatch(subtract()),
        nextPage: () => dispatch(push("/teste")),
    };
};

export default connect(mapStateToProps, mapToDispatchToProps)(Count);