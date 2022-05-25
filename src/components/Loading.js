import React from "react";
import ClipLoader from "react-spinners/ClipLoader";

function Loading({ loading }) {
    return (
        <div className="loading-spinner">
            <ClipLoader color={"#F2F2F2"} loading={loading} size={100} />
        </div>
    );
}

export default Loading;
