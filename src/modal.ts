import { useReducer } from "react"

export interface Todo{
    id: number,
    todo: string,
    isDone: boolean
}
// type Actions =
//    | {type:'add',payload:string}
//    | {type:'remove',id:number}
//    | {type:'done',payload:number}

// const TodoReducer =(state:Todo[], action:Actions)=>{
//     switch(action.type){
//         case 'add':
//             return [
//                 ...state,
//                 { id: Date.now(), todo: action.payload, isDone:false}
//             ]
//     }
// }
// const ReducerExample = () => {
//     const [state, dispatch] = useReducer(TodoReducer,[])
//   return (
//     <div>ReducerExample</div>
//   )
// }

// export default ReducerExample