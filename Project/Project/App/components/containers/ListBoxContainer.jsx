import connect from "react-redux/lib/connect/connect";
import React, {PureComponent} from "react";
import * as listAction from "../../actions/listActions";

class ListBox extends PureComponent {

    handleSubmit(e){
        // e.preventDefault();
        // let  = {
        //     name: this.state.name
        // }
        // this.setState({
        //     name: ''
        // });
        this.props.addCarInfo();
    }

    listView(data, index) {
        return (
            <div>
                <div>
                    <li key={index}>
                        {data.name}
                    </li>
                </div>
                <div>
                    <button onClick={(e) => this.deleteItem(e, index)}>
                        Remove
                    </button>
                </div>
            </div>
        )
    }

    deleteItem(e, index) {
        e.preventDefault();
        this.props.deleteCarInfo(index);
    }

    render() {
        return (
            <div className="ListBox">
                <div className="ListBox-Title">
                    <b>Last Actions</b>
                </div>
            </div>
        )
    }

}

function mapStateToProps(state) {
    return {}
}

const mapDispatchToProps = dispatch => ({
    addCarInfo: (licensePlate, datetime) => dispatch(listAction.addCarInfo(licensePlate, datetime)),
    deleteCarInfo: index => dispatch(listAction.deleteCarInfo(index))
});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(ListBox)