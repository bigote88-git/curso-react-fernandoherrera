import { useEffect, useState } from "react"

export const useFetch = (dependency)=> {
    
    const apiUrl = 'https://randomuser.me/api/'
    
    const [info, setInfo] = useState({
        data: {},
        isLoading: false,
        hasError: false,
        error: null
    })
    
    useEffect(()=> {        
        getEndPointData()
    }, [dependency])
    
    const getEndPointData = async () => {
        
        setInfo({
            ...info,
            isLoading: true            
        })
        
        const resp = await fetch(apiUrl)
        
        if(!resp.ok){
            setInfo({
                data: null,
                isLoading: false,
                hasError: true,
                error: {
                    code: resp.status,
                    message: resp.statusText
                }
            })
            
            return;
        }
        
        
        const json = await resp.json()
        
        setInfo({
            data: {
                ...json.results.at(0).name
            },
            isLoading: false,
            hasError: false,
            error: null
        })        
    }
    
    return {
        data: info.data,
        isLoading: info.isLoading,
        error: info.error
    }
    
}