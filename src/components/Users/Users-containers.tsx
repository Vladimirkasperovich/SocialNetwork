
import {ReducersType} from "../../Redux/redux-store";
import {Dispatch} from "redux";
import {connect} from "react-redux";
import {
    followAC,
    RootObjectItems,
    setCurrentPageAC,
    setTotalCountAC,
    setUsersAC,
    unFollowAC
} from "../../Redux/users-reducer";
import {Users} from "../Users/Users";


const mapStateToProps = (state: ReducersType) => {
    return {
        users: state.usersPage.users,
        pageSize: state.usersPage.pageSize,
        totalCount: state.usersPage.totalCount,
        currentPage: state.usersPage.currentPage,



    }
}

const mapDispatchToProps = (dispatch: Dispatch) => {
    return {
        follow: (userId:number) => {
            dispatch(followAC(userId))
        },
        unFollow : (userID:number) => {
            dispatch(unFollowAC(userID))
        },
        setUsers: (users: Array<RootObjectItems>) => {
            dispatch(setUsersAC(users))
        },
        setCurrentPage: (currentPage:number) =>{
            dispatch(setCurrentPageAC(currentPage))
        },
        setTotalCount:(totalCount:number) => {
             dispatch(setTotalCountAC(totalCount))
        }

    };


}

export const UsersContainer = connect(mapStateToProps, mapDispatchToProps)(Users)