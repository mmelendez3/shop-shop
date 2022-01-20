//This is a lot to take in, and it takes some developers years to grasp it and put it to use. But in short, what we did here was create our own functionality to manage state at a global level and make it available to all of our other components through a special <Provider> component. The last thing we need to do is create the custom function using the useContext() Hook to be used by the components that actually need the data our <StoreProvider> will be, well . . . providing!

import React, { createContext, useContext } from "react";
import { useProductReducer } from './reducers';

const StoreContext = createContext();
const { Provider } = StoreContext;



const StoreProvider = ({ value = [], ...props }) => {
    const [state, dispatch] = useProductReducer({
      products: [],
      categories: [],
      currentCategory: '',
    });
    // use this to confirm it works!
    console.log(state);
    return <Provider value={[state, dispatch]} {...props} />;
  };

  const useStoreContext = () => {
    return useContext(StoreContext);
  };

  export { StoreProvider, useStoreContext };