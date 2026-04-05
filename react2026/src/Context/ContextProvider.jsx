import React, { createContext} from 'react';

 export const DataContext  = createContext()
const ContextProvider = (props) => {

    const user = 'Shubham'
  return (
    <div>
        <DataContext.Provider value={user}>

      {props.children}

        </DataContext.Provider>
    </div>
  );
}

export default ContextProvider;
