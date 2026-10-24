// let student = {
//   name: "Ali",
//   age: 15,
//   // sayHello(){
//   //     console.log("salom");

//   // }
//   skills: ["HTML", "CSS", "JS"],
// };
// console.log(student.skills?.[5]);

let students = [
  {
    img: "https://img.magnific.com/premium-vector/happy-young-girl-with-school-uniform_505024-1712.jpg?semt=ais_hybrid&w=740&q=80",
    name: "Dilnoza",
    age: 16,
    skills: ["HTML", "CSS", "JS"],
    sayHello(){
        return "Salom Mening ismim Dilnoza"
    }
  },
  {
    img: "https://img.magnific.com/premium-vector/happy-young-girl-with-school-uniform_505024-1712.jpg?semt=ais_hybrid&w=740&q=80",
    name: "Zilola",
    age: 16,
  },
  {
    img: "https://img.magnific.com/premium-vector/happy-young-girl-with-school-uniform_505024-1712.jpg?semt=ais_hybrid&w=740&q=80",
    name: "Lola",
    age: 16,
  },
  {
    img: "https://img.magnific.com/premium-vector/happy-young-girl-with-school-uniform_505024-1712.jpg?semt=ais_hybrid&w=740&q=80",
    name: "Eshmat",
    age: 16,
    skills: ["HTML", "CSS", "JS"],
  },
];

let container = document.querySelector(".container");

students.forEach((student) => {
  container.innerHTML += `
    <div id="profile-card">
        <img id="student-img"   src="${student.img}" alt="">
        <h2 id="student-name">${student.name}</h2>
        <p id="student-age">${student.age}</p>
        <p id="student-skills">${student?.skills ?? "Ko'rsatilmagan"}</p>
        <p>${student.sayHello?.() ?? "Malumot yo'q"}</p>
    </div>

    `;
});
