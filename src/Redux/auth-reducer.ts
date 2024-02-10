export type ProfileReducerActionType =
    FollowActionCreatorType
    | UnFollowActionCreatorType
    | SetUsersActionCreatorType
    | SetCurrentPageActionCreatorType
    | SetTotalCountActionCreatorType
    | IsFetchingActionCreatorType


type FollowActionCreatorType = ReturnType<typeof follow>
type UnFollowActionCreatorType = ReturnType<typeof unFollow>
type SetUsersActionCreatorType = ReturnType<typeof setUsers>
type SetCurrentPageActionCreatorType = ReturnType<typeof setCurrentPage>
type SetTotalCountActionCreatorType = ReturnType<typeof setTotalCount>
type IsFetchingActionCreatorType = ReturnType<typeof toggleSetIsFetching>

export type RootObject = {
    users: RootObjectItems[];
    totalCount: number;
    pageSize:number;
    currentPage: number
    isFetching: boolean
    error?: any;
}
export type RootObjectItemsPhotos = {
    small?: any;
    large?: any;
}
export type RootObjectItems = {
    name: string;
    id: number;
    photos: RootObjectItemsPhotos;
    status?: any;
    followed: boolean;
}


const initialState: RootObject = {
    users: [],
    pageSize: 5,
    totalCount: 0,
    currentPage: 1,
    isFetching: false

}

export const usersReducer = (state = initialState, action: ProfileReducerActionType) => {
    switch (action.type) {
        case "FOLLOW":
            return {...state, users: state.users.map(el => el.id === action.userID ? { ...el, followed: true } : el)};
        case "UNFOLLOW":
            return {...state, users: state.users.map(el => el.id === action.userID ? { ...el, followed: false } : el)};
        case "SET-USERS":
            return {...state, users: action.users}
        case "SET-CURRENT-PAGE":
            return {...state, currentPage: action.currentPage}
        case "SET-TOTAL-COUNT":
            return {...state, totalCount: action.totalCount}
        case "TOGGLE-IS-FETCHING":
            return {...state, isFetching: action.isFetching}
        default:
            return state;
    }
}


export const follow = (userID: number) => ({type: 'FOLLOW', userID} as const)
export const unFollow = (userID: number) => ({type: 'UNFOLLOW', userID} as const)
export const setUsers = (users: Array<RootObjectItems>) => ({type: 'SET-USERS', users} as const)
export  const setCurrentPage = (currentPage:number) => ({type: 'SET-CURRENT-PAGE',currentPage}as const)
export const setTotalCount = (totalCount:number) => ({type: 'SET-TOTAL-COUNT', totalCount}as const)
export const toggleSetIsFetching = (isFetching: boolean) => ({type: 'TOGGLE-IS-FETCHING', isFetching}as const)
