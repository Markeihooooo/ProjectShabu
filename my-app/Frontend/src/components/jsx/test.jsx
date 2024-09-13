import React, { useState } from 'react';

function MyComponent() {
  // สร้าง state เพื่อจัดการกับการซ่อน/แสดง
  const [isHidden, setIsHidden] = useState(false);

  // ฟังก์ชันที่จะถูกเรียกเมื่อกดปุ่ม
  const toggleVisibility = () => {
    setIsHidden(!isHidden); // เปลี่ยนค่า state เพื่อซ่อน/แสดง
  };

  return (
    <div>
      {/* ปุ่มที่ใช้ในการกดเพื่อซ่อนหรือแสดง */}
      <button onClick={toggleVisibility}>
        {isHidden ? 'Show' : 'Hide'}
      </button>

      {/* องค์ประกอบที่จะซ่อนหรือแสดง */}
      <div className={isHidden ? 'hidden' : ''}>
        This content will be hidden or shown.
      </div>

      {/* สไตล์สำหรับการซ่อน */}
      <style jsx>{`
        .hidden {
          display: none;
        }
      `}</style>
    </div>
  );
}

export default MyComponent;