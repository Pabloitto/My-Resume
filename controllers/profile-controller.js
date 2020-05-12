module.exports = function () {
  const yearOfBirth = 1989;
  const carrierStartYear = 2011;
  const currentYear = new Date().getFullYear();

  function fetchProfile(req, res) {
    res.send({
      name: "Juan Pablo Itto",
      age: currentYear - yearOfBirth,
      contactList: [
        {
          name: "Email",
          url: "mailto:pabloitto@gmail.com",
          className: "email",
          contact: "pabloitto@gmail.com",
          icon: "fa-envelope",
        },
        {
          name: "Skype",
          url: "javascript:void(0)",
          className: "email",
          contact: "pablo_itto",
          icon: "fa-skype",
        },
        {
          name: "Phone",
          url: "tel:6621396800",
          className: "phone",
          contact: "6621396800",
          icon: "fa-phone",
        },
        {
          name: "Linkedin",
          url: "https://mx.linkedin.com/in/juan-pablo-itto-dominguez-50473846",
          className: "linkedin",
          contact: "Linkedin",
          icon: "fa-linkedin",
        },
        {
          name: "Github",
          url: "https://github.com/Pabloitto",
          className: "github",
          contact: "Gihub",
          icon: "fa-github",
        },
      ],
      title: "Sr. Software Engineer",
      summary: `I'm fullstack developer enthusiastic of technology with almost ${
        currentYear - carrierStartYear + 1
      } years of experience designing and developing innovative solutions using Web Technologies such .NET, Node JS, Javascript and React JS.`,
      talks: [
        {
          title: "Backend As C# developer using Nest JS",
          url: "",
          year: 2020,
          url: "",
        },
        { title: "React Native Development", url: "", year: 2018, url: "" },
        {
          title: "Javascript as C# developer (Spanish)",
          url: "",
          year: 2017,
          url: "https://www.facebook.com/LifeatTiempo/videos/1299043733522234/",
        },
        {
          title: "Videogames Development with HTML 5 and Javascript (Spanish)",
          url: "https://www.facebook.com/LifeatTiempo/videos/1065194936907116/",
          year: 2016,
        },
      ],
      education: [
        {
          title: "Bachelor of Software Engineering",
          place: "Instituto Tecnológico Superior de Cajeme",
          period: `2007-${carrierStartYear}`,
        },
      ],
      certifications: [
        {
          title: "Exam 483: Programming in C#",
          place: "Microsoft",
          period: "2019",
        },
        {
          title: "Oracle Certified Professional, Java SE 6 Programmer",
          place: "Oracle",
          period: "2013",
        },
      ],
      courses: [
        {
          title: "React: Securing Applications",
          place: "Linked in",
          period: "2020",
        },
        {
          title: "Implementing and securing an API with ASP.NET Core",
          place: "Pluralsight",
          period: "2017",
        },
        {
          title: "Understanding TypeScript",
          place: "Udemy",
          period: "2016",
        },
        {
          title: "C# Design Patterns",
          place: "Linked In",
          period: "2016",
        },
        {
          title: "Build Web Apps with React JS and Flux",
          place: "Udemy",
          period: "2016",
        },
        {
          title:
            "Node JS (Express 4.0, Client and Server, RESTful Web Services, Testing Strategies, Application Patterns)",
          place: "Pluralsight",
          period: "2016",
        },
        {
          title: "Introduction to React JS",
          place: "Tiempo Development",
          period: "2016",
        },
      ],
      languages: [
        { name: "Spanish", level: "Native" },
        { name: "English", level: "Conversational" },
      ],
      interest: ["Video Games", "Programming", "Movies"],
      experiences: [
        {
          jobTitle: "Software engineer lead",
          company:
            "Tiempo Development (Consultant company with more than 400 employees)",
          period: "October 2019 - Current Job",
          description:
            "Developing financial tools for an insurance company, using web technologies such React JS in the front end and Node JS and .NET on the backend.",
        },
        {
          jobTitle: "Team Lead & Sr. Software Engineer",
          company:
            "Unosquare (Consultant company with more than 600 employees)",
          period: "May 2017 - October 2019",
          description:
            "Developing and maintain software for Foundation Medicine, a molecular insights company, which is connecting physicians and their patients to the latest cancer treatment approaches, using many technologies like React JS, React Native and Node JS.",
        },
        {
          jobTitle: "Senior Software Developer",
          company:
            "Sonata Services (Consultant company with more than 200 employees)",
          period: "March 2017 - May - 2017",
          description:
            "Improve an internal ETL process for account payment checks.",
        },
        {
          jobTitle: "Software Engineer",
          company:
            "Tiempo Development  (Consultant company with more than 400 employees)",
          period: "Sep 2013 - March 2017",
          description:
            "I developed applications using Web Technologies like ASP.NET, Angular JS and JQuery. Designing architecture and structure of the code, organizing the team to use the best practices, create and maintain the unit test suite, always in constant communication with the customer using agile methodologies.",
        },
        {
          jobTitle: "Software Engineer",
          company:
            "Instituto Tecnológico de Sonora (Mexican public university based in Ciudad Obregón, Sonora)",
          period: "May 2013 - Nov 2013",
          description:
            "Support and maintenance for ITSON software applications additionally I'm developer for new web  and Desktop applications in Web technologies like ASP.NET, JQuery.",
        },
        {
          jobTitle: "QA Engineer",
          company:
            "Geniutec (Software development company that operates as an entirely virtual organization to create development tools.)",
          period: "March 2013 - April 2013",
          description: "Developing automation suites for the SDC product line",
        },
        {
          jobTitle: "Software Engineer",
          company: "Novutek (Provider of IT services in Mexico)",
          period: "Sep 2011 - March 2013",
          description:
            "Analyzes, designs and software applications using the Java EE platform and .NET.",
        },
      ],
      projects: [
        {
          title: "Annexus - Illustrators",
          technologies: [
            "Node JS",
            "ASP.NET Core",
            "React JS",
            "JS Reports",
            "Puppeteer",
          ],
          description:
            "At Annexus, we are driven by one guiding vision — to create innovative retirement income products that help you realize the retirement you’ve worked so hard to achieve",
          link: "https://www.annexus.com/financial-solutions/",
        },
        {
          title: "Brandio Music Player",
          technologies: ["Node JS", "React JS", "Electron"],
          description:
            "Desktop player for royalty-free background music for businesses in Mexico.",
        },
        {
          title: "Smart Clinical Trials Product",
          technologies: [
            "Docker",
            "Node JS",
            "Hapi JS",
            "Handlebars",
            "React JS",
            "Jest",
            "Enzyme",
            "Jasmine",
            "Mongo",
            "Oracle",
            "MSSQL",
            "AWS",
          ],
          description:
            "A program consisting of numerous products, services, and offerings, that all aim to get more patients access to targeted clinical trials after Foundation Medicine Testing",
          link:
            "https://www.foundationmedicine.com/insights-and-trials/foundation-smarttrials#trial-solutions",
        },
        {
          title: "Precision Enrollment Engine",
          technologies: [
            "Docker",
            "Node JS",
            "Express",
            "Jade",
            "JQuery",
            "React",
            "Jasmine",
            "Mongo",
          ],
          description:
            "Enabling peer-to-peer outreach from Foundation Medicine staff oncologists to Ordering physicians when patients with rare findings are identified, to build awareness of clinical trial opportunities.",
          link: "https://www.foundationmedicine.com/insights-and-trials/foundation-smarttrials#enrollment"
        },
        {
          title: "Foundation Medicine - Mobile order tracking",
          technologies: [
            "Node JS",
            "React Native",
            "React JS",
            "Jest",
            "Enzime",
          ],
          description:
            "Mobile app from Foundation Medicine for issue resolution and sample tracking through mobile.",
          link:
            "https://itunes.apple.com/us/app/foundation-medicine/id1319002478?mt=8.",
        },
        {
          title: "Notification Service",
          technologies: [
            "Docker",
            "Node JS",
            "Hapi JS",
            "mocha",
            "Handlebars",
            "Mailtrap",
            "Mongo",
            "ActiveMQ",
            "Redis",
            "Mandrill",
          ],
          description:
            "Responsible to migrate legacy code to a micro service to handle Foundation Medicine external and internal emails",
        },
        {
          title: "Ultimate Scrum Poker",
          technologies: [
            "Node JS",
            "Angular JS",
            "Express",
            "Gulp",
            "Socket.IO",
            "Javascript",
          ],
          description: "Scrum poker game to work with remote teams",
          link: "https://ultimatescrumpoker.herokuapp.com",
        },
        {
          title: "Maze Engine",
          technologies: ["Node JS", "Vanilla Javascript", "Express", "Gulp"],
          description: "Puzzle game to help the people learn javascript",
          link: "https://maze-engine.herokuapp.com",
        },
        {
          title: "Surviving The Elements",
          technologies: ["Javascript, CSS"],
          description:
            "Game created to participate in the JS13K contest on 2014",
          link: "https://js13kgames.com/entries/surviving-the-elements",
        },
        {
          title: 'Ramen "Notaria 99"',
          technologies: [
            "C#",
            "SQL Server 2012",
            "React JS",
            "EntityFramework",
            "Javascript",
          ],
          description:
            "Portal to store the information about the procedures for the Notaria in order to have more control and statistics about the clients.",
        },
        {
          title: 'My Resume',
          technologies: [
            "Node JS",
            "Angular JS",
            "Puppeteer",
            "Javascript",
          ],
          description:
            "Website hosted on heroku to show my resume using node js and web technologies.",
          link: 'https://github.com/Pabloitto/My-Resume'
        },
      ],
      skills: [
        { name: "C#(9 years)", level: 90 },
        { name: "Javascript(9 years)", level: 90 },
        { name: "React JS(5 year)", level: 90 },
        { name: "Node JS(5 years)", level: 90 },
        { name: "GIT(5 years)", level: 80 },
        { name: "SQL(9 years)", level: 80 },
        { name: "Mongo(3 year)", level: 80 },
        { name: "Docker(3 year)", level: 70 },
      ],
    });
  }

  return {
    fetchProfile: fetchProfile,
  };
};
