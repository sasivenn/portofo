import profile from "./sasi.png";
import {
  faAppStore,
  faGithub,
  faGooglePlay,
} from "@fortawesome/free-brands-svg-icons";
import {} from "@fortawesome/free-solid-svg-icons";

export const navigation = {
  name: "Sasi Kalyan Vennamaneni",
  links: [
    {
      title: "About",
      link: "#about",
    },
    {
      title: "Projects",
      link: "#projects",
    },
    {
      title: "Contact",
      link: "#contact",
    },
    {
      title: "Links",
      link: "/links",
    },
  ],
};
export const intro = {
  title: "Hey, I'm Sasi Kalyan Vennamaneni",
  description:
    "Experienced web developer and software engineer with a Master's in Computer Science from the University of Texas in Arlington.",
  image: profile.src,
  buttons: [
    {
      title: "Contact Me",
      link: "#contact",
      isPrimary: true,
    },
    {
      title: "Resume",
      link: "https://drive.google.com/file/d/1n45pNj1ABxRhhMOjguaClck3dQw_bjDb/view?usp=share_link",
      isPrimary: false,
    },
  ],
};

export const about = {
  title: "Who I am",
  description: [
    "I have a Master's in Computer Science from the University of Texas at Arlington and am an experienced web developer and software engineer. I have led the move to Sitecore and have experience creating web sites for many departments using Cascade CMS.",
    "I also have skills in Java Script, Angular JS, Node JS, React JS, PHP, HTML5, CSS3, and Laravel. ",
    "I excel at creating full-stack web applications and deploying them on cloud platforms like AWS, Azure, and GCP due to his strong expertise in programming languages like Java, Python, C, and C++ and databases like MySQL, Oracle, and MongoDB.",
  ],
};

export const projects = {
  title: "Projects",
  cards: [
    {
      title: "Laundry Management",
      description:
        "Online web application for placing the laundry orders and avail the services.",
      icons: [
        {
          icon: faGithub,
          link: "https://github.com/sasivenn/Laundry-Management",
        },
      ],
    },
    {
      title: "Covid 19 Visualization",
      description:
        "Covid 19 Visualisation using D3.js Library with global data.",
      icons: [
        {
          icon: faGithub,
          link: "https://github.com/sasivenn/Covid-19-Analysis-using-d3.js-",
        },
      ],
    },
    {
      title: "Portfolio",
      description:
        "A portfolio website template that helps you showcase your work, projects and skills as a software developer.",
      icons: [
        {
          icon: faGithub,
          link: "https://github.com/sasivenn/portofo",
        },
      ],
    },
  ],
};

export const contact = {
  title: "Get in touch",
  description: "Reach me out through Email at vsasikalyan@gmail.com",
  buttons: [
    {
      title: "Email Me",
      link: "mailto:vsasikalyan@gmail.com",
      isPrimary: true,
    },
  ],
};

// SEARCH ENGINE
export const SEO = {
  // 50 - 60 char
  title:
    "Sasi Kalyan Vennamaneni | Software Engineer | Web Developer | Master's Student",
  description:
    "Highly skilled web developer and Software Engineer with experience in developing robust websites and cloud-based applications. He also holds a Master's degree in Computer Science.",
  image: profile.src,
};

export const links = {
  image: profile.src,
  title: "@sasikalyanvennamaneni",
  description:
    "Sasi Kalyan Vennamaneni | Software Engineer | Web Developer | Master's Student",
  cards: [
    {
      title: "My website",
      link: "http://sasikalyanvennamaneni.com/",
    },
    {
      title: "My GitHub",
      link: "https://github.com/sasivenn",
    },
    {
      title: "My LinkedIn",
      link: "https://www.linkedin.com/in/sasi-kalyan-vennamaneni/",
    },
  ],
};
