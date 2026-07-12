import { Link } from "react-router-dom";
function RecipeList() {
  const recipes = [
    { id: 1, name: "Momo", category: "Nepali", difficulty: "medium" },
    { id: 1, name: "pasta", category: "Italian", difficulty: "easy" },
    { id: 1, name: "Dal bhat", category: "Nepali", difficulty: "easy" },
  ];
  return (
    <div className="page-container">
      <div className="page-header">
        <h1>All Recipes</h1>
        <Link to="/recipes/add" className="btn-add">
          + Add Recipe
        </Link>
      </div>

      {/* Search bar */}
      <input
        type="text"
        placeholder="Search recipes..."
        className="search-bar"
      />

      {/* Recipe cards */}
      <div className="recipe-grid">
        {recipes.map((recipe) => (
          <div key={recipe.id} className="recipe-card">
            <div className="recipe-image">🍽️</div>
            <h3>{recipe.name}</h3>
            <p>Category: {recipe.category}</p>
            <p>Difficulty: {recipe.difficulty}</p>
            <Link to={`/recipes/${recipe.id}`}>View Recipe</Link>
          </div>
        ))}
      </div>
    </div>
  );
}

export default RecipeList;
