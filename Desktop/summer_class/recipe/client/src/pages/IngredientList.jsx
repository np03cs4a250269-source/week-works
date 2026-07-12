import { Link } from "react-router-dom";

function IngredientList() {
  // fake data for now
  const ingredients = [
    { id: 1, name: "Flour", unit: "grams" },
    { id: 2, name: "Salt", unit: "teaspoon" },
    { id: 3, name: "Oil", unit: "ml" },
    { id: 4, name: "Minced Meat", unit: "grams" },
  ];

  return (
    <div className="page-container">
      <div className="page-header">
        <h1>All Ingredients</h1>
        <Link to="/ingredients/add" className="btn-add-ing">
          + Add Ingredient
        </Link>
      </div>

      <table className="data-table">
        <thead>
          <tr>
            <th>#</th>
            <th>Ingredient Name</th>
            <th>Unit</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {ingredients.map((ing) => (
            <tr key={ing.id}>
              <td>{ing.id}</td>
              <td>{ing.name}</td>
              <td>{ing.unit}</td>
              <td>
                <Link to={`/ingredients/edit/${ing.id}`} className="btn-edit">
                  Edit
                </Link>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default IngredientList;
