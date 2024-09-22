admin {
    Id: admin
    password: 1135
}
user สมัคร test ได้เลย

<Route path="/" element={<Login />} />                      //หน้า login
<Route path="/register" element={<Register />} />           //หน้า register
<Route path="/home" element={<Home />} />                   //หน้าโชว์ของ user
<Route path="/admin" element={<Test />} />                  //หน้าโชว์ของ admin

front 
-react
-reactDOM
-reaft router

back
"axios"
"bcrypt"
"cors":
"dotenv"
"express"
"jsonwebtoken"
"pg": 
"Nodemon"


CREATE TABLE employee (
    EmployeeID SERIAL PRIMARY KEY,
    Username VARCHAR(50) NOT NULL UNIQUE,
    Password VARCHAR(255) NOT NULL,
    Tel_No VARCHAR(15),
    Role VARCHAR(20) NOT NULL CHECK (Role IN ('user', 'admin'))
);

INSERT INTO employee (Username, Password, Tel_No, Role) VALUES
('admin', '1135', '9999999', 'admin');