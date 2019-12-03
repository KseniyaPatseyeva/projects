import React from 'react'
// import {FormattedDate} from "react-intl";

const ListBox = () => (
    <React.Fragment>
        <div className="ListBox">
            <div className="ListBox-Title">
                <b>Last Actions</b>
            </div>
            <ListBoxItem/>
            <ListBoxItem/>
        </div>
    </React.Fragment>
);

function ListBoxItem(props) {
    return (
        <div className="ListBoxItem">
            <p className="ListBoxItem-Date">
                {/*<FormattedDate value={new Date()} format="short"/>*/}
            </p>
            <p className="ListBoxItem-Text"/>
        </div>

    )

}

export default ListBox;