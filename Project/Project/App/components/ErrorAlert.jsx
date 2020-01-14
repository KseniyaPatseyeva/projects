import React from "react";

export class ErrorAlert extends React.Component {
    render() {
        return (
            <div className="alert alert-dismissible alert-danger">
                <strong>Error occurred while loading data.</strong> <a href="./" className="alert-link">Try reload page</a>
            </div>
        )
    }
}