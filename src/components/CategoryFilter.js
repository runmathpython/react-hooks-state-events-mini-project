import React from "react";

function CategoryFilter({categories, selectedCategory, onSelectCategory}) {
  const categoryButtons = categories.map((category) => {
    let className = null;
    if(category === selectedCategory){
      className = "selected"
    }
    return(
      <button key={category} className={className}
       onClick={() => onSelectCategory(category)}>{category}</button>
    )
  })
  return (
    <div className="categories">
      <h5>Category filters</h5>
      {/* render <button> elements for each category here */}
      {categoryButtons}
    </div>
  );
}

export default CategoryFilter;
