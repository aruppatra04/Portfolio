// projects pic :
import project1 from "../assets/projects/project1.jpg";
import project2 from "../assets/projects/project2.jpeg";
import project3 from "../assets/projects/project3.jpg";
import project4 from "../assets/projects/project4.png";
// education pic:
import kiit from "../assets/education/kiit.png"
import bbhi from "../assets/education/bbhi.jpg"
// coding :
import lc from "../assets/coding/lc.png"
import cf from "../assets/coding/cf.png"
import cc from "../assets/coding/cc.png"
import gfg from "../assets/coding/gfg.png"
import cn from "../assets/coding/cn.png"
import ac from "../assets/coding/ac.png"

export const HERO_CONTENT = `I specialize in building dynamic web applications using React, Node.js, Express, MongoDB, and MySQL. With a strong foundation in Java, I actively solve algorithmic problems on platforms like LeetCode, constantly sharpening my problem-solving skills. Whether it's backend architecture or crafting responsive UIs, I bring a balanced approach to software development with a passion for clean, efficient code.`;

export const ABOUT_TEXT1 = `I am a passionate competitive programmer with a solid grasp of algorithms, data structures, and problem-solving strategies. I regularly practice on platforms like LeetCode, where I’ve tackled hundreds of problems ranging from dynamic programming to graph theory. My commitment to coding excellence has helped me develop the speed, accuracy, and logical thinking essential for tackling real-world technical challenges.`

export const ABOUT_TEXT2 = `On the development side, I’m a full-stack web developer skilled in building scalable, end-to-end applications using technologies like React, Node.js, Express, MongoDB, and MySQL. I focus on writing clean, maintainable code, and designing user-friendly interfaces. Whether I’m working on backend APIs, authentication systems, or interactive UIs, I strive to bridge performance with great user experience.`;


export const EXPERIENCES = [
  {
    year: "May 2025 - Present",
    role: "Web Developer Intern",
    company: "CodClause",
    description: `Developing a full-stack video streaming application using Node.js, Express.js, and MongoDB. Implemented video upload, storage, and playback features using Multer, GridFS, and video streaming APIs. Built an intuitive user interface with React.js and Tailwind CSS. Enabled secure user authentication with JWT and managed protected routes. Focused on optimizing video delivery, handling large files efficiently, and ensuring smooth playback.`,
    technologies: ["Javascript", "React.js", "Express.js", "MongoDB", "GridFS", "Tailwind"],
  },
  {
    year: "Apr 2025 - May 2025",
    role: "Web Developer Intern",
    company: "CodSoft",
    description: `Designed and developed user blogging interfaces for web applications using React. Worked closely with backend developers to integrate frontend components with Node.js APIs. Implemented responsive designs and optimized frontend performance.`,
    technologies: ["React.js", "Node.js", "Express.js", "MongoDb", "Tailwind"],
  },
];

export const PROJECTS = [
  {
    title: "Contacts Manager",
    image: project4,
    description:
      "A RESTful backend application for managing contacts, developed using Node.js, Express, and MongoDB. It includes secure JWT authentication.",
    technologies: ["Node.js", "Express.js", "MongoDb", "Postman", "REST API"],
    previewLink: "",
    sourceCodeLink: "https://github.com/aruppatra04/Contacts-Manager",
  },
  {
    title: "Portfolio Website",
    image: project3,
    description:
      "A personal portfolio website showcasing projects, skills, coding journey and contact information.",
    technologies: ["HTML", "CSS", "React", "Tailwind"],
    previewLink: "https://arup-patra.vercel.app/",
    sourceCodeLink: "https://github.com/aruppatra04/Portfolio",
  },
  {
    title: "Image Search App",
    image: project2,
    description:
      "A web application that uses an API to search and display images, built with HTML, CSS, and JavaScript.",
    technologies: ["HTML", "CSS", "Javascipt"],
    previewLink: "https://aruppatra04.github.io/Image-Search-App/",
    sourceCodeLink: "https://github.com/aruppatra04/Image-Search-App",
  },
  {
    title: "Food Recipe App",
    image: project1,
    description:
      "A web application that uses an API to fetch recipes based on ingredients, built with HTML, CSS, and JavaScript.",
    technologies: ["HTML", "CSS", "Javascript"],
    previewLink: "https://aruppatra04.github.io/Food-Recipe-by-Ingredients/",
    sourceCodeLink: "https://github.com/aruppatra04/Food-Recipe-by-Ingredients",
  },
];


export const EDUCATIONS = [
  {
    year: "2022 - 2026",
    degree: "B.Tech in Computer Science and System Engineering",
    institution: "KIIT University",
    logo: kiit, 
    perc: "CGPA : 8.38",
    description: "Studying Data Structure and Algorithm, Full-stack development, ML, and Object Oriented programing.",
    subjects: ["DSA", "Web Dev", "DBMS", "OS", "CN"],
  },
  {
    year: "2020 - 2022",
    degree: "Higher Secondary Education (WBCHSE)",
    institution: "Balichak Bhajahari Institution",
    logo: bbhi,
    perc: "Percentage : 84.7 %",
    description: "Focused on PCM and Biology.",
    subjects: ["Physics", "Math", "Chemistry", "Biology"],
  },
  {
    year: "2018 - 2020",
    degree: "Secondary Education (WBBSE)",
    institution: "Balichak Bhajahari Institution",
    logo: bbhi,
    perc: "Percentage : 92.6 %",
    description: "Built a strong foundation in science and logic.",
    subjects: ["Science", "Math", "English"],
  },
];

export const CODING_PLATFORMS = [
  {
    name: "LeetCode",
    logo: lc,
    maxRating: "1550+",
    totalSolved: "300+",
    achievements: [
      "Among the top 34.9% of 89383 users.",
      "Weekly Contest 445 : Rank 4514 out of 30K participants.",
    ],
    profileLink: "https://leetcode.com/u/arup04",
  },
  {
    name: "Codeforces",
    logo: cf,
    maxRating: "655 (Newbie)",
    totalSolved: "100+",
    achievements: [
    // upcoming
    ],
    profileLink: "https://codeforces.com/profile/arup-04",
  },
  {
    name: "CodeChef",
    logo: cc,
    maxRating: "1356",
    totalSolved: "100+",
    achievements: [
      "1⭐ Coder",
      "STARTERS 159 : Rank 3006 out of 28K participants."
    ],
    profileLink: "https://www.codechef.com/users/arup04",
  },
  {
    name: "GeeksforGeeks",
    logo: gfg,
    maxRating: "1700+",
    totalSolved: "100+",
    achievements: [
      "3⭐ Coder",
      "Global Rank : 6809",
      "Among the top 19.2% of 35471 users."
    ],
    profileLink: "https://www.geeksforgeeks.org/user/iarup04",
  },
  {
    name: "Coding Ninjas",
    logo: cn,
    maxRating: "1500+",
    totalSolved: "300+",
    achievements: [
      "Weekly Contest 177 : Rank 87.",
      "Top Performer in IITM Pravartak Advanced DSA Scholarship Test."
    ],
    profileLink: "https://www.naukri.com/code360/profile/arup_cn_04",
  },
  {
    name: "AtCoder",
    logo: ac,
    maxRating: "93 - 11Kyu",
    totalSolved: "-",
    achievements: [
      "AtCoder Beginner Contest 394 : Rank 4842 out of 10K participants.",
    ],
    profileLink: "https://atcoder.jp/users/arup04",
  }
];



export const CONTACT = {
  address: "767 Fifth Avenue, New York, NY 10153 ",
  phoneNo: "+12 4555 666 00 ",
  email: "me@example.com",
};
