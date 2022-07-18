import React from "react";
class ProfileStatus extends React.Component {
  state = {
    editMode: false,
    emptyStatus: "Enter your status",
    status: this.props.status,
  };
  activateEditMode = () => {
    this.setState({
      editMode: true,
    });
  };
  deactivateEditMode = () => {
    this.setState({
      editMode: false,
    });
    this.props.updateStatusTC(this.state.status);
  };
  render() {
    let onChange = (e) => {
      this.setState({
        status: e.target.value
      })
     
    };
    if (!this.props.status) {
      this.props.editStatusAC(this.state.emptyStatus);
      this.deactivateEditMode(this.state.status);
    }

    return (
      <>
        {!this.state.editMode && (
          <div>
            <span onDoubleClick={this.activateEditMode}>
              {this.props.status}
            </span>
          </div>
        )}
        {this.state.editMode && (
          <div>
            <input
              autoFocus={true}
              onBlur={this.deactivateEditMode}
              onChange={onChange}
              value={this.state.status}
            />
          </div>
        )}
      </>
    );
  }
}

export default ProfileStatus;
