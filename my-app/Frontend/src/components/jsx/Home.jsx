import React, { useEffect, useState } from 'react';
import './stylehome.css';
import { fetchCategories, fetchMeat } from '../function/home.js'; // นำเข้าฟังก์ชัน

const Home = () => {
  const [categories, setCategories] = useState([]);
  const [activeCategory, setActiveCategory] = useState(null);
  const [categoryData, setCategoryData] = useState({});
  const [meatData, setMeatData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const getCategories = async () => {
      const data = await fetchCategories();
      setCategories(data);
    };

    getCategories();
  }, []);

  useEffect(() => {
    const getCategoryData = async () => {
      if (activeCategory) {
        const data = await fetchCategoryData(activeCategory);
        setCategoryData(prevData => ({
          ...prevData,
          [activeCategory]: data
        }));
      }
    };

    getCategoryData();
  }, [activeCategory]);

  useEffect(() => {
    const loadMeatData = async () => {
      const data = await fetchMeat();
      setMeatData(data);
      setLoading(false);
    };

    loadMeatData();
  }, []);

  const handleCategoryClick = (category) => {
    setActiveCategory(category);
  };

  return (
    <div className="container">
      <header>
        <div className="header-content">
          <img
            src="https://scontent.fbkk13-2.fna.fbcdn.net/v/t39.30808-6/296123974_1096341914627508_5219895537905772823_n.jpg?_nc_cat=107&ccb=1-7&_nc_sid=6ee11a&_nc_ohc=2cAgqwCgKVMQ7kNvgHE4_ym&_nc_ht=scontent.fbkk13-2.fna&_nc_gid=ARkghowasc0mlVxJyfUa40O&oh=00_AYCQJWTvwcrpxTKdnU0MgruqBmptfOGpvUBKqnRf-v9THg&oe=66E78BC6"
            alt="Logo"
          />
          <h1>Shabu</h1>
        </div>
      </header>

      <div className='containerBody'>
        <div className="menu">
          {categories.map((category, index) => (
            <button
              key={index}
              className="menu-tab"
              onClick={() => handleCategoryClick(category)}
            >
              {category}
            </button>
          ))}
        </div>

        <div className="bodymenu">
          {categories.map((category, index) => (
            <div
              key={index}
              className={category === activeCategory ? 'visible' : 'hidden'}
            >
              <h1>{category}</h1>
              <ul>
                {loading ? (
                  <p>Loading data...</p>
                ) : (
                  meatData.length > 0 ? (
                    meatData.map((item) => (
                      <li key={item.menu_id}>
                        {item.menu_name} - {item.availability}
                      </li>
                    ))
                  ) : (
                    <p>No data available</p>
                  )
                )}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Home;