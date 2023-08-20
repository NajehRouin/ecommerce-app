const initialState = {
    bagItems:[],
    totalPrice:0,
}

export const bagReducer =(state =initialState ,action) => {
    switch (action.type) {

        case 'Add_To_Bag' : 

            const isProductExist = state.bagItems.some((product) => product.id === action.payload.id)

            if (isProductExist) {
              const productIndex = state.bagItems.findIndex((product) => product.id === action.payload.id)

                const newAmount = state.bagItems[productIndex].amount +1

                const updateAmount = [
                    ...state.bagItems.slice(0,productIndex),
                    {...state.bagItems[productIndex], amount:newAmount},
                    ...state.bagItems.slice(productIndex + 1)
                    
                ]
                
                return {
                    bagItems:updateAmount,
                    totalPrice: state.totalPrice + (action.payload.price * action.payload.amount )
                }
                
            }else {
                return {
                    ...state,
                    bagItems:[...state.bagItems,action.payload],
                    totalPrice: state.totalPrice + (action.payload.price * action.payload.amount )
                }
            }
        case 'Remove_From_Card' :
            const newProduct = state.bagItems.filter((product) => product.id !== action.payload.id )
            return {
                bagItems:newProduct,
                totalPrice: state.totalPrice - (action.payload.price * action.payload.amount )
                
            }

        default:
             return state;
    }
    
}