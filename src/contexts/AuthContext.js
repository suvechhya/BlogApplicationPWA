import React, { createContext, useState } from 'react';

const AuthContext = createContext();

const AuthProvider = ({ children }) => {
    const [isAuthenticated, setIsAuthenticated] = useState(false);
    const [userDetails, setUserDetails] = useState(null);

    const context = [isAuthenticated, setIsAuthenticated, userDetails, setUserDetails];

    return <AuthContext.Provider value={context}>{children}</AuthContext.Provider>;
}

// AuthProvider.propTypes = {
//     children: element.isRequired
// };

export { AuthContext, AuthProvider };