import React from "react";
import MySkill from "./MySkill";

const MySkills = () => {
  const skills = [
    {
      _id: 1,
      name: "HTML5",
      img: "https://cdn-icons-png.flaticon.com/512/732/732212.png",
    },
    {
      _id: 2,
      name: "CSS3",
      img: "https://cdn-icons-png.flaticon.com/512/732/732190.png",
    },
    {
      _id: 3,
      name: "BootStrap5",
      img: "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b2/Bootstrap_logo.svg/602px-Bootstrap_logo.svg.png",
    },
    {
      _id: 4,
      name: "Tailwind",
      img: "https://w7.pngwing.com/pngs/293/485/png-transparent-tailwind-css-hd-logo.png",
    },
    {
      _id: 5,
      name: "JavaScript",
      img: "https://www.clipartmax.com/png/middle/470-4707396_javascript-icon-html-css-js-icons.png",
    },
    {
      _id: 6,
      name: "ES6",
      img: "https://www.martinkwan.com/img/techstack/es6-icon.png",
    },
    {
      _id: 7,
      name: "React JS",
      img: "https://play-lh.googleusercontent.com/AFY95yFw1P4ErzREpYWiSRyy6GyFA34pc70dP7MuHfkP12alfktC0Rp2ht-LbPAvO5sg",
    },
    {
      _id: 8,
      name: "Node Js",
      img: "https://cdn-icons-png.flaticon.com/512/919/919825.png",
    },
    {
      _id: 9,
      name: "Express JS",
      img: "https://w7.pngwing.com/pngs/925/447/png-transparent-express-js-node-js-javascript-mongodb-node-js-text-trademark-logo.png",
    },
    {
      _id: 10,
      name: "Mongo DB",
      img: "https://w7.pngwing.com/pngs/768/167/png-transparent-mongodb-nosql-document-oriented-database-nosql-icon-leaf-grass-business.png",
    },
    {
      _id: 11,
      name: "Stripe",
      img: "https://cdn-icons-png.flaticon.com/512/5968/5968312.png",
    },
    {
      _id: 12,
      name: "Firebase Auth",
      img: "https://e7.pngegg.com/pngimages/119/167/png-clipart-firebase-cloud-messaging-google-developers-software-development-kit-google-angle-triangle-thumbnail.png",
    },
    {
      _id: 13,
      name: "JWT",
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTBPd30ZtaeyZ29OgKHwREx0417XHaMlw9VWRh2kowtVp5LOYl83l3ZJSLazfq9nW7m-1Q&usqp=CAU",
    },
    {
      _id: 14,
      name: "VS Code",
      img: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/9a/Visual_Studio_Code_1.35_icon.svg/2048px-Visual_Studio_Code_1.35_icon.svg.png",
    },
    {
      _id: 15,
      name: "Git",
      img: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/3f/Git_icon.svg/1200px-Git_icon.svg.png",
    },
    {
      _id: 16,
      name: "Heroku",
      img: "https://www.nicepng.com/png/detail/223-2233246_heroku-logo-salesforce-heroku.png",
    },
  ];
  return (
    <div className="pb-20 mt-16">
      <h1 className="text-8xl text-white uppercase font-bold py-4 text-center">
        <span className="text-red-600 ">MY</span> Skills
      </h1>

      <div class="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 px-10">
        {skills.map((skill) => (
          <MySkill key={skill._id} skill={skill}></MySkill>
        ))}
      </div>
    </div>
  );
};

export default MySkills;
