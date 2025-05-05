import React, { createContext, useContext, useState } from 'react';
export const RecipeContext=createContext();

export const RecipeProvider=({children})=>{
    const [recipes, setRecipes]=useState();
    return(<RecipeContext.Provider value={{recipes, setRecipes}}>
        {children}
    </RecipeContext.Provider>)
}
export const useRecipeContext=()=>useContext(RecipeContext)