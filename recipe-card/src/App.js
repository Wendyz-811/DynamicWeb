import React, { useState } from 'react'
import './components/RecipeCard.css'
import RECIPE_IMG from './assets/pancake.png'
import { RECIPE } from './components/recipe-data'
import { ReactComponent as Heart } from '@material-design-icons/svg/filled/favorite.svg'

const App = () => {
  const [hearts, setHearts] = useState(0)
  const maxHearts = 5

  const addHeart = () => {
    if (hearts < maxHearts) setHearts(hearts + 1)
  }

  const removeHeart = () => {
    if (hearts > 0) setHearts(hearts - 1)
  }

  return (
    <div className="app-wrapper">
      {/* Header */}
      <header className="app-header">
        <h1>My Recipe</h1>
      </header>

      {/* Content wrapper */}
      <main className="content">
        <div className="card">
          <img src={RECIPE_IMG} alt="yummy pancake" />

          <h2>{RECIPE.title}</h2>
          <p>{RECIPE.description}</p>

          <h3>Ingredients</h3>
          <ul>
            {RECIPE.ingredients.map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          </ul>

          <h3>Instructions</h3>
          <ol>
            {RECIPE.instructions.map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          </ol>

          {/* Heart rating */}
          <div className="rating">
            <h3>Rate this Recipe</h3>
            <div className="buttons">
              {hearts > 0 ? (
                <button onClick={removeHeart}>-</button>
              ) : (
                <span className="placeholder" />
              )}

              <span className="hearts">
                {Array.from({ length: hearts }, (_, i) => (
                  <Heart key={i} className="heart-icon" />
                ))}
              </span>

              {hearts < maxHearts ? (
                <button onClick={addHeart}>+</button>
              ) : (
                <span className="placeholder" />
              )}
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}

export default App
