import React, { useEffect, useState } from 'react';
import './stylehome.css';
import { useNavigate } from 'react-router-dom';
import { fetchCategories } from '../function/home.js'; // นำเข้าฟังก์ชัน


const Home = () => {
  const [categories, setCategories] = useState([]);
  const navigate = useNavigate();



 

  useEffect(() => {
    // ดึงข้อมูลหมวดหมู่
    const getCategories = async () => {
      const data = await fetchCategories();
      setCategories(data);
    };

    getCategories();
  }, []);

  

  const handleCategoryClick = (category) => {
    // นำทางไปยังหมวดหมู่ที่เลือก
    

    if (category == categories[0]){
      console.log(category)
    }else if (category==categories[1]){
      console.log(category)
    }
    else if (category==categories[2]){
      console.log(category)
    }
    else if (category==categories[3]){
      console.log(category)
    }
    else if (category==categories[4]){
      console.log(category)
    }

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
  <div>
      <h1>{categories[0]}</h1>
    </div>
    <div>
      <h1>{categories[1]}</h1>
    </div>
  
  </div>{/*ปิด bodymenu*/}



</div>{/*ปิด containerBody*/}
</div>
  );
}
export default Home;
{/*ปิด container*/}


{/*<div className="menu">
        {categories.length > 0 ? (
          categories.map((category, index) => (
            <div key={index}>
              <p>{category}</p>
            </div>
          ))
        ) : (
          <p>Loading categories...</p>
        )}
      </div>
    </div>
  );
};*/}  
