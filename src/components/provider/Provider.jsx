import React, { createContext, useState } from 'react';
export const authContext = createContext(null);
const Provider = ({ children }) => {
    const [loading, setLoading] = useState(true)
    const [user, setUser] = useState(null)



    const authInfo = {
        loading, user
    }

    return (<authContext.Provider value={authInfo}>
        {children}
    </authContext.Provider>
    )



};

export default Provider;