import react, { createContext, useContext, useReducer } from 'react'
const CartStateContext=createContext();
const CartDispatchContext=createContext();

const reducer=(state,action)=>{
    switch(action.type){
        case "ADD":
            
            return [...state,{id:action.id,name:action.name,price:action.price,qty:action.qty,size:action.size,img:action.img}]

        case "REMOVE":
            let newarr=[...state]
            newarr.splice(action.index,1);
            return newarr

            case "UPDATE":
                let arr=[...state]
                
                arr.find((food,index)=>{
                    if(food.id===action.id){
                        // console.log(action.qty)
                        arr[index]={...food,qty:parseInt(action.qty)+food.qty,price:(action.price + food.price)}
                    }
                    
                    
                    return arr
                })
                console.log(arr)
                return arr
                case "DROP":
                    
                    return []  


        default:
        console.log("error in reducer")
    }


    
}
export const CardProvider=(({children})=>{
const[state,dispatch]=useReducer(reducer,[]);

    return (
        <CartDispatchContext.Provider value={dispatch}>
            <CartStateContext.Provider value={state}>
                {children}
            </CartStateContext.Provider>


        </CartDispatchContext.Provider>
    )
})
export const useCart=()=>useContext(CartStateContext);
export const useDispatchCart=()=>useContext(CartDispatchContext);