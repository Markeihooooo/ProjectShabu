
export const fetchCategories = async () => {
    try {
      const response = await fetch('http://localhost:3001/food');
      const data = await response.json();
      
      // ตรวจสอบว่า data มีคีย์ catagoryName และเป็นอาร์เรย์หรือไม่
      if (data.catagoryName && Array.isArray(data.catagoryName)) {
        return data.catagoryName; // คืนค่าหมวดหมู่ที่เป็นอาร์เรย์
        
      } else {
        console.error('Data format is not correct:', data);
        return []; // ถ้าโครงสร้างข้อมูลไม่ถูกต้อง ให้ส่งอาร์เรย์ว่างกลับไป
      }
    } catch (error) {
      console.error('Error fetching categories:', error);
      return [];
    }
  };

  export const fetchMeat = async () => {
    try {
      const response = await fetch('http://localhost:3001/meat');
      const data = await response.json();
      
      // ตรวจสอบว่า data เป็นอาร์เรย์หรือไม่
      if (Array.isArray(data)) {
        return data; // คืนค่าอาร์เรย์ของข้อมูล
      } else {
        console.error('Data format is not correct:', data);
        return []; // ถ้าโครงสร้างข้อมูลไม่ถูกต้อง ให้ส่งอาร์เรย์ว่างกลับไป
      }
    } catch (error) {
      console.error('Error fetching meat:', error);
      return [];
    }
  };
  
