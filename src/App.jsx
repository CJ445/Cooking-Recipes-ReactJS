import React, { useState } from 'react';
import './App.css';

const recipes = [
  { 
    id: 1, 
    name: 'Spaghetti Carbonara', 
    type: 'Italian', 
    difficulty: 'Easy',
    ingredients: [
      '200g spaghetti',
      '100g pancetta or bacon',
      '2 large eggs',
      '50g parmesan cheese',
      '1 garlic clove',
      'Salt and black pepper to taste'
    ],
    steps: [
      'Cook spaghetti according to package instructions',
      'Fry the pancetta with minced garlic until crispy',
      'Beat eggs with grated parmesan',
      'Drain pasta and mix with pancetta while still hot',
      'Quickly stir in the egg mixture to create a creamy sauce',
      'Season with salt and black pepper'
    ],
    prepTime: '10 minutes',
    cookTime: '15 minutes',
    image: 'https://images.unsplash.com/photo-1600803907087-f56d462fd26b?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60'
  },
  { 
    id: 2, 
    name: 'Chicken Tikka Masala', 
    type: 'Indian', 
    difficulty: 'Medium',
    ingredients: [
      '500g chicken breast',
      '200ml yogurt',
      '1 onion',
      '2 garlic cloves',
      '1 tbsp ginger',
      '2 tbsp garam masala',
      '1 can tomato sauce',
      'Fresh coriander',
      'Salt to taste'
    ],
    steps: [
      'Marinate chicken in yogurt and half the spices for at least 1 hour',
      'Grill chicken until slightly charred but not fully cooked',
      'In a pan, sauté onions, garlic, and ginger',
      'Add remaining spices and tomato sauce',
      'Add grilled chicken and simmer for 15-20 minutes',
      'Garnish with fresh coriander'
    ],
    prepTime: '1 hour 10 minutes',
    cookTime: '30 minutes',
    image: 'https://images.unsplash.com/photo-1565557623262-b51c2513a641?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60'
  },
  { 
    id: 3, 
    name: 'Sushi', 
    type: 'Japanese', 
    difficulty: 'Hard',
    ingredients: [
      '2 cups sushi rice',
      '3 cups water',
      '1/4 cup rice vinegar',
      '2 tbsp sugar',
      '1 tsp salt',
      'Nori sheets',
      'Fresh fish (salmon, tuna)',
      'Cucumber',
      'Avocado'
    ],
    steps: [
      'Cook rice and let it cool',
      'Mix rice vinegar, sugar, and salt; fold into rice',
      'Place nori on bamboo mat and cover with thin layer of rice',
      'Add thin strips of fish, cucumber, and avocado',
      'Roll tightly using the bamboo mat',
      'Cut into 6-8 pieces with a wet knife'
    ],
    prepTime: '30 minutes',
    cookTime: '20 minutes',
    image: 'https://images.unsplash.com/photo-1579584425555-c3ce17fd4351?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60'
  },
  { 
    id: 4, 
    name: 'Tacos', 
    type: 'Mexican', 
    difficulty: 'Easy',
    ingredients: [
      '500g ground beef',
      '1 onion',
      '2 garlic cloves',
      '2 tbsp taco seasoning',
      'Taco shells',
      'Lettuce',
      'Tomatoes',
      'Cheese',
      'Sour cream'
    ],
    steps: [
      'Brown ground beef in a pan',
      'Add diced onion and garlic',
      'Mix in taco seasoning and a splash of water',
      'Simmer for 5 minutes',
      'Warm taco shells',
      'Fill shells with meat and toppings'
    ],
    prepTime: '10 minutes',
    cookTime: '15 minutes',
    image: 'https://images.unsplash.com/photo-1565299585323-38d6b0865b47?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60'
  },
  { 
    id: 5, 
    name: 'Croissant', 
    type: 'French', 
    difficulty: 'Hard',
    ingredients: [
      '500g all-purpose flour',
      '10g salt',
      '55g sugar',
      '10g yeast',
      '300ml cold milk',
      '250g cold butter'
    ],
    steps: [
      'Mix flour, salt, sugar, yeast, and milk to form dough',
      'Rest dough for 1 hour',
      'Roll dough into rectangle and place butter in center',
      'Fold dough over butter and roll out',
      'Fold into thirds and refrigerate for 1 hour',
      'Repeat folding and chilling 3 times',
      'Shape into croissants and let rise',
      'Bake at 200°C for 15-20 minutes'
    ],
    prepTime: '3 hours',
    cookTime: '20 minutes',
    image: 'https://images.unsplash.com/photo-1555507036-ab1f4038808a?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60'
  },
  // ... existing recipes with detailed information added
];

function App() {
  const [filter, setFilter] = useState('');
  const [typeFilter, setTypeFilter] = useState('');
  const [difficultyFilter, setDifficultyFilter] = useState('');
  const [selectedRecipe, setSelectedRecipe] = useState(null);

  const filteredRecipes = recipes.filter((recipe) => {
    return (
      recipe.name.toLowerCase().includes(filter.toLowerCase()) &&
      (typeFilter === '' || recipe.type === typeFilter) &&
      (difficultyFilter === '' || recipe.difficulty === difficultyFilter)
    );
  });

  const handleRecipeClick = (recipe) => {
    setSelectedRecipe(selectedRecipe && selectedRecipe.id === recipe.id ? null : recipe);
  };

  const closeRecipe = () => {
    setSelectedRecipe(null);
  };

  return (
    <div className="app">
      <header className="app-header">
        <nav className="navbar">
          <h1>Cooking Recipes</h1>
        </nav>
        <div className="filters">
          <input
            type="text"
            placeholder="Search recipes..."
            value={filter}
            onChange={(e) => setFilter(e.target.value)}
          />
          <select
            value={typeFilter}
            onChange={(e) => setTypeFilter(e.target.value)}
          >
            <option value="">All Types</option>
            <option value="Italian">Italian</option>
            <option value="Indian">Indian</option>
            <option value="Japanese">Japanese</option>
            <option value="Mexican">Mexican</option>
            <option value="French">French</option>
            <option value="Thai">Thai</option>
            <option value="Spanish">Spanish</option>
          </select>
          <select
            value={difficultyFilter}
            onChange={(e) => setDifficultyFilter(e.target.value)}
          >
            <option value="">All Difficulties</option>
            <option value="Easy">Easy</option>
            <option value="Medium">Medium</option>
            <option value="Hard">Hard</option>
          </select>
        </div>
      </header>
      <main>
        <ul className="recipe-list">
          {filteredRecipes.map((recipe) => (
            <li 
              key={recipe.id} 
              className={`recipe-item ${selectedRecipe && selectedRecipe.id === recipe.id ? 'flipped' : ''}`}
              onClick={() => handleRecipeClick(recipe)}
            >
              {selectedRecipe && selectedRecipe.id === recipe.id ? (
                <div className="recipe-details">
                  <button className="close-button" onClick={(e) => {
                    e.stopPropagation();
                    closeRecipe();
                  }}>✕</button>
                  <h2>{recipe.name}</h2>
                  <div className="recipe-info">
                    <p><strong>Type:</strong> {recipe.type}</p>
                    <p><strong>Difficulty:</strong> {recipe.difficulty}</p>
                    <p><strong>Prep Time:</strong> {recipe.prepTime}</p>
                    <p><strong>Cook Time:</strong> {recipe.cookTime}</p>
                  </div>
                  
                  <div className="recipe-content">
                    <div className="ingredients">
                      <h3>Ingredients</h3>
                      <ul>
                        {recipe.ingredients.map((ingredient, index) => (
                          <li key={index}>{ingredient}</li>
                        ))}
                      </ul>
                    </div>
                    
                    <div className="steps">
                      <h3>Cooking Steps</h3>
                      <ol>
                        {recipe.steps.map((step, index) => (
                          <li key={index}>{step}</li>
                        ))}
                      </ol>
                    </div>
                  </div>
                </div>
              ) : (
                <>
                  <div className="recipe-image">
                    <img src={recipe.image} alt={recipe.name} />
                  </div>
                  <h3>{recipe.name}</h3>
                  <p>Type: {recipe.type}</p>
                  <p>Difficulty: {recipe.difficulty}</p>
                </>
              )}
            </li>
          ))}
        </ul>
      </main>
    </div>
  );
}

export default App;
