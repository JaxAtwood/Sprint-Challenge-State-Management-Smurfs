import React, { useEffect } from "react";
import { connect } from "react-redux";
import { fetchSmurf } from "../actions/index";
// import Thing from "./Thing";
//import styles

export const Smurf = props => {
    console.log("SMURF", props); 
    useEffect(() => {
        props.fetchSmurf();
    }, []);

    if (props.isFetching) {
        return <h2> Loading Smurf... </h2>
    }
    return (
        <div>
            {/* <h1>SMURF TEST</h1> */}
            <div>
                {props.error && <p>{props.error}</p>}
            </div>
            <div>
                <p>TEST{props.smurf.name}</p>
                {/* <p>{props.smurf}</p> */}
                {/* // .map(thing => (
                    // <Thing key={thing.id}/>
                ))} */}
            </div>
        </div>
    )
}

export const mapStateToProps = state => {
    return {
        smurf: state.smurf,
        isFetching: state.isFetching,
        error: state.error
    };
};

export default connect(mapStateToProps, {fetchSmurf})(Smurf);