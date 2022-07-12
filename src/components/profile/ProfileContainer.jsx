import React from "react";
import {connect} from "react-redux";
import {getStatus, getUserProfile, updateStatus} from "../../redux/profile-reducer";
import Profile from "./Profile";
import {Navigate, useParams} from "react-router-dom";
import {compose} from "redux";

export function withRouter(Children) {

    return(props)=>{

        const match  = {params: useParams()};
        return <Children {...props}  match = {match}/>
    }
}

class ProfileContainer extends React.Component {

    componentDidMount() {

        let userId = this.props.match.params.userId
        if (!userId) {
            userId = 23450
        }
        this.props.getUserProfile(userId)
        this.props.getStatus(userId)
    }

    render() {
/*
        if (!this.props.isAuth) return  <Navigate to={"/login"}/>
*/

        return (
           <Profile {...this.props} status={this.props.status} updateStatus={this.props.updateStatus}/>
        )
    }
}

let mapStateToProps = (state) => ({
    profile: state.profilePage.profile,
    status: state.profilePage.status
})

export default compose(
    connect(mapStateToProps, {getUserProfile, getStatus, updateStatus}),
    withRouter,
)(ProfileContainer)



