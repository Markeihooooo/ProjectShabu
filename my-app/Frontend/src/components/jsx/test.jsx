import React, { useState } from 'react';

const categories = ['เนื้อสัตว์', 'อาหารทะเล', 'ผักสด', 'ของทานเล่น', 'เครื่องดื่ม'];

const Menu = () => {
  const [selectedCategory, setSelectedCategory] = useState(null);

  const handleCategoryClick = (category) => {
    setSelectedCategory(category);
  };

  return (
    <div>
      <div className="category-menu">
        {categories.map((category, index) => (
          <button key={index} onClick={() => handleCategoryClick(category)}>
            {category}
          </button>
        ))}
      </div>

      <div className="bodymenu">
        {categories.map((category, index) => (
          category === selectedCategory && (
            <div key={index}>
              <h1>{category}</h1>
            </div>
          )
        ))}
      </div>
    </div>
  );
};

export default Menu;