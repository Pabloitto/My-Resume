module.exports = function () {
  const yearOfBirth = 1989;
  const carrierStartYear = 2011;
  const currentYear = new Date().getFullYear();

  function fetchProfile(req, res) {
    res.send({
      name: "Juan Pablo Itto",
      profileImage:
        "data:image/jpeg;base64,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",
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
      } years of experience designing and developing innovative solutions using Web Technologies such .NET, Node JS and Javascript and React JS.`,
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
