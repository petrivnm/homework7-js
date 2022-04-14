// - Створити функцію конструктор для об'єктів User з полями id, name, surname , email, phone

// function User(id, name, surname, email, phone) {
//     this.id = id,
//         this.name = name,
//         this.surname = surname,
//         this.email = email,
//         this.phone = phone
// }

// створити пустий масив, наповнити його 10 об'єктами new User(....)

// function User(id,name,surname,email,phone) {
//     this.id = id,
//     this.name = name,
//     this.surname = surname,
//     this.email = email,
//     this.phone= phone
// }
// const userArr = [
//     new User(1,'Stepan', 'Giga', 'sg@gmail.com', 30680000001),
//     new User(2, 'Olko', 'Atb', 'av@gmail.com', 30680000002),
//     new User(3, 'Nina', 'Ola', 'ddf@gmail.com', 30680000003),
//     new User(4, 'Stepan', 'Btn', 'gtr@gmail.com', 30680000004),
//     new User(5, 'Stecia', 'Luziv', 'sde@gmail.com', 30680000005),
//     new User(6, 'Stepan', 'Misko', 'ashh@gmail.com', 30680000006),
//     new User(7, 'Yozef', 'Liga', 'uj7@gmail.com', 30680000007)
// ];
// console.log(userArr);


// - Взяти масив з  User[] з попереднього завдання, та відфільтрувати , залишивши тільки об'єкти з парними id (filter)

// let filterUser = userArr.filter((item) => {
//     if (item.id % 2 === 0){
//     return item
//     }});
// console.log(filterUser);


// - Взяти масив з  User[] з попереднього завдання, та відсортувати його по id. по зростанню (sort)

// console.log(userArr.sort((a,b) => a.id - b.id));

// - створити класс для об'єктів Client з полями id, name, surname , email, phone, order (поле є масивом зі списком товарів)

// class Client{
//     constructor(id, name, surname, email, phone, order) {
//         this.id = id;
//         this.name = name;
//         this.surname = surname;
//         this.email = email;
//         this.phone = phone;
//         this.order = order;
//     }
// }

// створити пустий масив, наповнити його 10 об'єктами Client
// class Client{
//     constructor(id, name, surname, email, phone, order) {
//         this.id = id;
//         this.name = name;
//         this.surname = surname;
//         this.email = email;
//         this.phone = phone;
//         this.order = order;
//     }
// }
// function Client(id, name, surname, email, phone, order) {
//     this.id = id,
//     this.name = name,
//     this.surname = surname,
//     this.email = email,
//     this.phone = phone,
//     this.order = order
// }
//
// let emptyArray = [
//     new Client(4,'yra','pupkin','@kid', 06789900,['milk','bread','kofee']),
//     new Client(1,'ira','pan','@kid',06789900,['soks','bread','kofee','napkins','kandls']),
//     new Client(5,'yra','dad','@kid',06789900,['meet','toast','kofee','tomato']),
//     new Client(2,'vanya','bigman','@kid',06789900,['milk','bread','kapuchino','kukumber','stravberry']),
//     new Client(9,'koks','x','@kid',0678888,['sosiska','fish','kofee','cherry']),
//     new Client(10,'olya','pupkin','@kid',06789900,['milk','bread','kofee','kokonat']),
//     new Client(3,'naz','pupkin','@kid',06789900,['milk','bread','kofee']),
//     new Client(6,'diana','pupkin','@kid',06799999,['milk','bread','kofee']),
//     new Client(7,'lesya','pupkin','@kid',06711111111,['milk','bread','kofee']),
//     new Client(8,'zorya','pupkin','@kid',1111189900,['milk','bread','kofee'])
// ]
// console.log(emptyArray);

// - Взяти масив (Client [] з попереднього завдання).Відсортувати його по кількості товарів в полі order по зростанню. (sort)
// let sortClients = emptyArray.sort((a,b,) => a.order.length - b.order.length);
// console.log(sortClients);

// console.log(emptyArray.sort((a,b) => a.order.length - b.order.length));

// let sortCLients = emptyArray.sort((a, b) => a.order.length - b.order.length);
// console.log(sortCLients)