module.exports = function () {

    function fetchProfile(req, res) {
        res.send({
            name: "Juan Pablo Itto",
            profileImage: "https://media.licdn.com/dms/image/C5603AQG3vrucnKQEiA/profile-displayphoto-shrink_200_200/0?e=1545264000&v=beta&t=Tw3yqklyHtF5wHvdD_p8BVtiBZqt2k3DoLOXyRbcvNI",
            age: 29,
            contactList: [
                { name: "Email", url: "mailto:pabloitto@gmail.com", className: "email", contact: "pabloitto@gmail.com", icon: "fa-envelope" },
                { name: "Skype", url: "javascript:void(0)", className: "email", contact: "pablo_itto", icon: "fa-skype" },
                { name: "Phone", url: "tel:6621396800", className: "phone", contact: "6621396800", icon: "fa-phone" },
                { name: "Linkedin", url: "https://mx.linkedin.com/in/juan-pablo-itto-dominguez-50473846", className: "linkedin", contact: "Linkedin", icon: "fa-linkedin" },
                { name: "Github", url: "https://github.com/Pabloitto", className: "github", contact: "Gihub", icon: "fa-github" },
            ],
            title: "Sr. Software Engineer",
            summary: "I'm fullstack developer with experience in designing and developing innovative solutions using .NET, Java and Javascript . I'm enthusiastic of technology and I'm always trying do the best. I believe in the power of the software as a way to improve the lifes of the people. I really love program especially using Javascript and C#, I love to feel the freedom and creativity sense when I'm programing. I like create video games just because is fun. I automate the repetitive tasks in my current day trying to save all the possible time, because is boring spend time doing trivial things than can be automated easily.",
            talks: [
                { title: "React Native Development", url: "", year: 2018, url: ""},
                { title: "Javascript as C# developer", url: "", year: 2017, url: "https://www.facebook.com/LifeatTiempo/videos/1299043733522234/"},
                { title: "Videogames Development with HTML 5 and Javascript", url: "https://www.facebook.com/LifeatTiempo/videos/1065194936907116/", year: 2016 }
            ],
            education: [
                { title: "Computational Systems Enineer", place: "ITESCA", period: "2007-2011" }
            ],
            certifications: [
                { title: "Oracle Certified Professional, Java SE 6 Programmer", place: "Oracle", period: "2013" }
            ],
            courses: [
                { title: "Introduction to Angular JS", place: "Tiempo Development", period: "2015" },
                { title: "Build Web Apps with React JS and Flux", place: "Udemy", period: "2016" },
                { title: "Build Web Video Games with JavaScript and HTML5 (Phaser)", place: "Udemy", period: "2016" },
                { title: "Node JS (Express 4.0, Client and Server, RESTful Web Services, Testing Strategies, Application Patterns)", place: "Pluralsight", period: "2016" },
                { title: "Introduction to React JS", place: "Tiempo Development", period: "2016" },
                { title: "Building Your First Xamarin.Android App from Start to Store", place: "Pluralsight", period: "2016" }
            ],
            languages: [
                { name: "Spanish", level: "Native" },
                { name: "English", level: "Conversational" }
            ],
            interest: ["Video Games", "Programming", "Movies"],
            experiencies: [
                { jobTitle: "Team Lead & Sr. Software Engineer", company:"UnoSquare", period: "May 2017 - Current Job", description:"Developing different mobile application on React native and Support and maintenance for node rest APIs and background services for Foundation Medicine"},
                { jobTitle: "Senior Software Developer", company:"Sonata Services", period: "March 2017 - May - 2017", description:"I'm doing a migration with a private tool to improve an ETL process for account payment checks."},
                { jobTitle: "Software Engineer III", company: "Tiempo Development", period: "Sep 2016 - March 2017", description: "I developed applications using .NET Technologies. Design the architecture and structure of the code, organizing the team to use the best practices, create and maintain the unit test suite, always in constant communication with the customer using agile methodologies." },
                { jobTitle: "Software Engineer II", company: "Tiempo Development", period: "Nov 2013 - Sep 2016", description: "I'm responsible for designing and developing new features and functionality for software applications with the customer specifications using agile methodologies, Identifying, troubleshooting and debugging defects in designated application code." },
                { jobTitle: "Analyst", company: "ITSON", period: "May 2013 - Nov 2013", description: "Support and maintenance for ITSON software applications additionally I'm developer for new web  and Desktop applications in .NET Technologies." },
                { jobTitle: "QA Engineer", company: "Geniutec", period: "March 2013 - April 2013", description: "Developing automation suites for the SDC product line" },
                { jobTitle: "Software Engineer", company: "Novutek", period: "Sep 2011 - March 2013", description: "Analyzes, designs and software applications using the Java EE platform and .NET`." }
            ],
            projects: [
                { title: "Smart Clinical Trials Product", technologies: ["Docker", "Node JS", "Hapi JS", "Handlebars", "React", "Jest", "Enzyme", "Jasmine", "Mongo", "Oracle", "MSSQL", "AWS"], description: "A program consisting of numerous products, services, and offerings, that all aim to get more patients access to targeted clinical trials after FMI Testing" },
                { title: "Precision Enrollment Engine", technologies: ["Docker","Node JS", "Express", "Jade", "JQuery", "React", "Jasmine", "Mongo"], description: "Enabling peer-to-peer outreach from FMI staff oncologists to Ordering physicians when patients with rare findings are identified, to build awareness of clinical trial opportunities." },
                { title: "FMI - Mobile order tracking", technologies: ["Node JS", "React Native", "React", "Jest", "Enzime"], description: "IOS Application for issue resolution and sample tracking through mobile.", link: 'https://itunes.apple.com/us/app/foundation-medicine/id1319002478?mt=8.' },
                { title: "Notification Service", technologies: ["Docker", "Node JS", "Hapi JS", "mocha", "Handlebars" ,"Mailtrap", "Mongo", "ActiveMQ", "Redis", "Mandrill"], description: "Responsible to migrate legacy code to a micro service to handle FMI external and internal emails" },
                { title: "Middleware Migration", technologies: ["C#", "Azure Storage", "WebJobs", "Worker Roles", "SQL Server 2014", "EntityFramework"], description: "Responsible to migrate legacy code to cloud services on azure" },
                { title: "Datawarehousing Support", technologies: ["C#", "Java", "Postgress", "SQL Server 2012"], description: "Responsible to create scripts for ETL process" },
                { title: "Reports Engine", technologies: ["C#", "Java", "EvoPDF", "Web API 2", "Angular JS", "Javascript", "EntityFramework"], description: "Responsible to create a new engine to automate the generation of reports for the customers." },
                { title: "Simulation Engine", technologies: ["C#", "MVC4", "Javascript", "JQuery"], description: "HTML 5 Interprteter based on json configuration files to create job interviews simulations." },
                { title: "Simulation Builder", technologies: ["C#", "SQL Server 2012", "Zurb Foundation", "Automapper", "JQuery", "Javascript", "EntityFramework"], description: "HTML 5 portal to create layouts and workflows for the job interview simulation" },
                { title: "Tiempo Skills", technologies: ["C#", "Bootstrap", "MongoDB", "Angular JS", "Javascript"], description: "Portal to store the information about the employees such a Skills and technologies", link: 'https://github.com/Pabloitto/TiempoSkills' },
                { title: "Ramen \"Notaria 99\"", technologies: ["C#", "SQL Server 2012", "React JS", "EntityFramework", "Javascript"], description: "Portal to store the information about the tramits for the Notaria in order to have more control and statistics about the clients." },
                { title: "HUM System", technologies: ["C#", "MySQL", "JQuery", "NHibernate", "Javascript"], description: "Portal to store the information about the tools and budgets of the mechanical workshop" },
                { title: "Tennacle Alert System", technologies: ["C#", "DevExpress", "JQuery", "Javascript", "SQL Server 2012", "EntityFramework"], description: "System to allow to create reports using a UI to drag and drop tables from the databases such MySQL or MS SQL, scheduling and dispatch." },
                { title: "ITSON Help Desk", technologies: ["C#", "NHibernate", "WebForms", "JQuery", "SQL Server 2008", "Javascript"], description: "New Portal to handle the tickets for the IT Support team." },
                { title: "ITSON Block System", technologies: ["C#", "WPF"], description: "Desktop application to manage the control of the computers in the lab" },
                { title: "Payment System CONAGUA", technologies: ["C#", "MVC3", "SQL Server 2008", "NHibernate", "JQuery", "Javascript"], description: "Portal to allow to the customers for water use statements" },
                { title: "Daycare System ISSSTE", technologies: ["Java", "Java Server Faces", "Spring/Spring Security", "Hibernate", "Informix", "Javascript", "JQuery"], description: "Portal to take assistance for the childrens." },
                { title: "Crazy Reports", technologies: ["Node JS", "Angular JS", "Ace.js", "Express", "Gulp", "Javascript"], description: "Personal proyect for create dynamic reports based on html and json datasources", link: 'https://github.com/Pabloitto/CrazyReports' },
                { title: "Ultimate Scrum Poker", technologies: ["Node JS", "Angular JS", "Express", "Gulp", "Socket.IO", "Javascript"], description: "Scrum poker game to work with remote teams", link: 'https://github.com/Pabloitto/ultimatescrumpoker' },
                { title: "Angular Tools boilerplate", technologies: ["Node JS", "Angular JS", "Express", "Gulp", "Javascript", "Browser sync"], description: "Boilerplate for angular projects based on gulp tasks and Browser sync", link: 'https://github.com/Pabloitto/angular-tools' },
                { title: "Maze Engine", technologies: ["Node JS", "Vanilla Javascript", "Express", "Gulp"], description: "Puzzle game to help the people learn javascript", link: 'https://github.com/Pabloitto/Maze-Engine'},
                { title: "Surviving The Elements", technologies: ["Vanilla Javascript"], description: "Game created to participate in the JS13K contest on 2014", link: 'https://github.com/Pabloitto/Surviving-elements' }
            ],
            skills: [
                { name: "C#(7 years)", level: 90 },
                { name: "Java(7 years)", level: 90 },
                { name: "Javascript(7 years)", level: 90 },
                { name: "React(4 year)", level: 90 },
                { name: "Node JS(4 years)", level: 90 },
                { name: "Git(4 years)", level: 80 },
                { name: "Angular JS(3 years)", level: 80 },
                { name: "SQL(7 years)", level: 80 },
                { name: "Mongo(2 year)", level: 80 },
                { name: "Oracle(2 year)", level: 80 },
                { name: "Docker(2 year)", level: 70 }
            ]
        });
    }

    return {
        fetchProfile: fetchProfile
    }
}