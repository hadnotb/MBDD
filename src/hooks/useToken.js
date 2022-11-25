import { useEffect, useState } from "react"

export const useToken = (token) => {
    
    const [hasToken, setHasToken] = useState(false);
    
    useEffect(() => {
        
        if (token != null){
            setHasToken(true);
        }

    },[])

    return {
        hasToken : hasToken,
        
    }
}