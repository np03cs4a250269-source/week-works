import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./pages/Login";
import RecipeList from "./pages/RecipeList";
import ViewRecipe from "./pages/ViewRecipe";
import AddEditRecipe from "./pages/AddEditRecipe";
import IngredientList from "./pages/IngredientList";
import AddEditIngredient from "./pages/AddEditIngredient";
import Navbar from "./components/Navbar";
import "./App.css";

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/recipes" element={<RecipeList />} />
        <Route path="/recipes/:id" element={<ViewRecipe />} />
        <Route path="/recipes/add" element={<AddEditRecipe />} />
        <Route path="/recipes/edit/:id" element={<AddEditRecipe />} />
        <Route path="/ingredients" element={<IngredientList />} />
        <Route path="/ingredients/add" element={<AddEditIngredient />} />
        <Route path="/ingredients/edit/:id" element={<AddEditIngredient />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
