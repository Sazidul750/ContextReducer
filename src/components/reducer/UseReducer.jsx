
export const initialState={
    users:[
        {id:1,userName:'sazidul islam'},
        {id:2,userName:' khan'},
    ]
}

export const reducer=(state,action)=>{
    switch (action.type) {
        case "ADD_USER":
           return{
            ...state,
            users:[...state.users,action.payload]
           } 
        case "DELETE_USER":
            const filterUser=state.users.filter(user=>user.id!==action.payload)
           return{
            ...state,
            users:filterUser
           } 
        
    
        default:
           return state
    }
}