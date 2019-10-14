import React, { useEffect } from "react";
import { connect } from "react-redux";
import { fetchSmurf } from "../actions/index";
import { postSmurf } from "../actions/indexAgain";
import Thing from "./Thing";
//import styles

export const Smurf = props => {
        useEffect(() => {
            props.fetchSmurf(props.smurf);
        }, []);

        useEffect(() => {
            props.postSmurf(props.name);
        }, []);

    return (
        <div>
            <div>
                {props.error && <p>{props.error}</p>}
            </div>
            <div>
                {props.smurf.map(banana => {
                    return <Thing banana={banana} />
                })}
            </div>
        </div>
    )
}

export const mapStateToProps = state => {
    return {
        smurf: state.smurf,
        isFetching: state.isFetching,
        error: state.error,
        name: state.name,
        age: state.age,
        height: state.height,
        isPosting: state.isPosting,
    };
};

export default connect(mapStateToProps, { fetchSmurf, postSmurf })(Smurf);