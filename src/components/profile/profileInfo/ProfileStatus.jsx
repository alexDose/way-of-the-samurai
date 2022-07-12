import React from "react";

export class ProfileStatus extends React.Component {
    state = {
        editMode: false
    }

    ativateEditMode() {
        this.setState({editMode: true})
    }

    deactivateEditMode() {
        this.setState({editMode: false})
    }

    render() {
        return (
            <div>
                {!this.state.editMode &&
                    <div>
                        <span onClick={this.ativateEditMode.bind(this)}>{this.props.status}</span>
                    </div>
                }
                {this.state.editMode &&
                    <div>
                        <input autoFocus={true} onBlur={this.deactivateEditMode.bind(this)} type="text" value={this.props.status}/>
                    </div>
                }
            </div>
        );
    }
}