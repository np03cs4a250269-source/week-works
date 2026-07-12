import { useState } from "react";
import { Link } from "react-router-dom";

function AddEditRecipe() {
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [instructions, setInstructions] = useState("");
  const [category, setCategory] = useState("");
  const [difficulty, setDifficulty] = useState("");
  const [image, setImage] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Recipe submitted:", {
      name,
      description,
      instructions,
      category,
      difficulty,
      image,
    });
  };

  return (
    <div className="page-container">
      <Link to="/recipes" className="back-btn">
        ← Back to Recipes
      </Link>
      <h1>Add New Recipe</h1>

      <form onSubmit={handleSubmit} className="form-container">
        <div className="form-group">
          <label>Recipe Name</label>
          <input
            type="text"
            placeholder="Enter recipe name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>

        <div className="form-group">
          <label>Category</label>
          <input
            type="text"
            placeholder="e.g. Nepali, Italian"
            value={category}
            onChange={(e) => setCategory(e.target.value)}
          />
        </div>

        <div className="form-group">
          <label>Difficulty</label>
          <select
            value={difficulty}
            onChange={(e) => setDifficulty(e.target.value)}
          >
            <option value="">Select difficulty</option>
            <option value="Easy">Easy</option>
            <option value="Medium">Medium</option>
            <option value="Hard">Hard</option>
          </select>
        </div>

        <div className="form-group">
          <label>Description</label>
          <textarea
            placeholder="Enter description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />
        </div>

        <div className="form-group">
          <label>Instructions</label>
          <textarea
            placeholder="Enter instructions step by step"
            value={instructions}
            onChange={(e) => setInstructions(e.target.value)}
          />
        </div>

        <div className="form-group">
          <label>Recipe Image</label>
          <input
            type="file"
            accept="image/*"
            onChange={(e) => setImage(e.target.files[0])}
          />
        </div>

        <button type="submit">Save Recipe</button>
      </form>
    </div>
  );
}

export default AddEditRecipe;
