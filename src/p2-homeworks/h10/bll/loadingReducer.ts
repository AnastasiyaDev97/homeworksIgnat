const initState = {
    loadingStatus: false
}
export type initStateType = {
    loadingStatus: boolean
}

export const loadingReducer = (state: initStateType = initState, action: ActionsType): initStateType => {
    switch (action.type) {
        case 'LOADING-STATUS': {
            return {...state, loadingStatus: action.loadingStatus}
        }
        default:
            return state
    }
}

export const loadingAC = (loadingStatus: boolean) => ({
    type: 'LOADING-STATUS',
    loadingStatus,
}) as const

type ActionsType = LoadingACType
type LoadingACType = ReturnType<typeof loadingAC>