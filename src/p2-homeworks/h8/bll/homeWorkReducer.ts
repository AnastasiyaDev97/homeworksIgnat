import {UserType} from "../HW8";

export const homeWorkReducer = (state: UserType[], action: ActionsType): UserType[]=> { // need to fix any
    switch (action.type) {
        case 'sort': {
          let sortState=[...state.map(m=>m)]
            return sortState.sort((a, b) =>
            action.payload==='up'? a.name.localeCompare(b.name):b.name.localeCompare(a.name))
        }
        case 'check': {
            return state.filter(f=>f.age>action.payload)
        }
        default: return state
    }
}

export const sortUsers=(payload:string)=>({
    type:'sort',
    payload,
}) as const

export const checkAge=(payload:number)=>({
    type:'check',
    payload,
}) as const

type ActionsType=ReturnType<typeof sortUsers> |
    ReturnType<typeof checkAge>