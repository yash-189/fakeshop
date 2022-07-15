import React, { createContext, useContext, useReducer, useEffect, useState } from 'react'
import axios from 'axios';

const AppContext = createContext();

const Context = ({ children }) => {


    const initialState = {
        isLoading: true,
        Data: [],
        productData: []
    }

    const reducer = (state, action) => {

        switch (action.type) {
            case 'is_Loading': {
                return {
                    ...state,
                    isLoading: true
                }
            }
            case 'Api_Data': {
                return {
                    ...state,
                    isLoading: false,
                    Data: action.payload.Api
                } 
            }
            case 'Product_Data': {
                return {
                    ...state,
                    isLoading: false,
                    productData: action.payload.Data
                }
            }

            default:
                break;

        }
        return

    }




    const [state, dispatch] = useReducer(reducer, initialState)


// Fetching data from api for page 1

    const getData = (url) => {
        dispatch({type: 'is_Loading'})

        axios.get(url)
            .then((res) => {
                // console.log(res.data);
                dispatch({
                    type: 'Api_Data',
                    payload: {
                        Api: res.data
                    }
                })

            })
            .catch((err) => {
                console.log(err);
            })

    }
    useEffect(() => {
        getData(`https://fakestoreapi.com/products`)

    }, [])




// Product details page 2 //

    const [productId, setproductId] = useState("1")



    const handleClick = (productId) => {
        setproductId(productId)
        // console.log(productId);


        axios.get(`https://fakestoreapi.com/products/${productId}`)
            .then((res) => {
                // console.log(res.data)
                dispatch({
                    type:"Product_Data",
                    payload:{
                        Data: res.data
                    }
                })
                    .catch((err) => {
                        console.log(err);
                    })
            })

    }









    return (
        <AppContext.Provider value={{ ...state, handleClick }}>
            {children}
        </AppContext.Provider>
    )
}

const useGlobalContext = () => {
    return useContext(AppContext)
}

export { AppContext, Context, useGlobalContext }