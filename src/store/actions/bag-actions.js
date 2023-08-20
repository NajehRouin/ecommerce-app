

export const addProduct =(product) => {
    return {
        type: 'Add_To_Bag',
        payload: product
    }
}

export const removeProduct =(product) => {
    return {
        type: 'Remove_From_Card',
        payload:product
    }
}