module.exports = function () {
  const yearOfBirth = 1989
  const carrierStartYear = 2011
  const currentYear = new Date().getFullYear()

  function fetchProfile (req, res) {
    res.send({
      name: 'Juan Pablo Itto',
      age: currentYear - yearOfBirth,
      contactList: [
        {
          name: 'Email',
          url: 'mailto:pabloitto@gmail.com',
          className: 'email',
          contact: 'pabloitto@gmail.com',
          icon: 'fa-envelope'
        },
        {
          name: 'Phone',
          url: 'tel:6621396800',
          className: 'phone',
          contact: '6621396800',
          icon: 'fa-phone'
        },
        {
          name: 'Linkedin',
          url: 'https://mx.linkedin.com/in/juan-pablo-itto-dominguez-50473846',
          className: 'linkedin',
          contact: 'Linkedin',
          icon: 'fa-linkedin'
        },
        {
          name: 'Github',
          url: 'https://github.com/Pabloitto',
          className: 'github',
          contact: 'Gihub',
          icon: 'fa-github'
        }
      ],
      title: 'Sr. Software Engineer',
      summary: `I'm full-stack developer enthusiastic of technology with ${currentYear - carrierStartYear} years of experience designing and developing innovative solutions using Web Technologies`,
      talks: [
        {
          title: 'Backend As C# developer using Nest JS',
          year: 2020,
          url: ''
        },
        {
          title: 'React Native Development',
          year: 2018,
          url: ''
        },
        {
          title: 'Javascript as C# developer (Spanish)',
          year: 2017,
          url: 'https://www.facebook.com/LifeatTiempo/videos/1299043733522234/'
        },
        {
          title: 'Videogames Development with HTML 5 and Javascript (Spanish)',
          url: 'https://www.facebook.com/LifeatTiempo/videos/1065194936907116/',
          year: 2016
        }
      ],
      education: [
        {
          title: 'Bachelor of Computer Systems Engineer',
          place: 'Instituto Tecnológico Superior de Cajeme',
          period: `2007-${carrierStartYear}`
        }
      ],
      certifications: [
        {
          title: 'Exam 483: Programming in C#',
          place: 'Microsoft',
          period: '2019'
        },
        {
          title: 'Oracle Certified Professional, Java SE 6 Programmer',
          place: 'Oracle',
          period: '2013'
        }
      ],
      courses: [
        {
          title: 'React: Securing Applications',
          place: 'Linked in',
          period: '2020'
        },
        {
          title: 'Implementing and securing an API with ASP.NET Core',
          place: 'Pluralsight',
          period: '2017'
        },
        {
          title: 'Understanding TypeScript',
          place: 'Udemy',
          period: '2016'
        },
        {
          title: 'C# Design Patterns',
          place: 'Linked In',
          period: '2016'
        },
        {
          title: 'Build Web Apps with React JS and Flux',
          place: 'Udemy',
          period: '2016'
        },
        {
          title:
            'Node JS (Express 4.0, Client and Server, RESTful Web Services, Testing Strategies, Application Patterns)',
          place: 'Pluralsight',
          period: '2016'
        }
      ],
      languages: [
        { name: 'Spanish' },
        { name: 'English' }
      ],
      interest: ['Video Games', 'Programming', 'Movies'],
      experiences: [
        {
          jobTitle: 'Consulting Senior Software Developer',
          company: 'Foundation Medicine',
          period: 'August 2020 - Current Job',
          description: "Leader of Scrum team responsible for feature development and maintenance of FMI's Universal API integrations service.",
          achievements: [
            'Mentoring junior developers',
            'Improving the setup and on boarding process'
          ]
        },
        {
          jobTitle: 'Software engineer lead',
          company:
            'Tiempo Development (Consultant company with more than 400 employees)',
          period: 'October 2019 - August 2020',
          description: 'Developing financial tools for an insurance company, using web technologies such as React JS on the front end and Node JS and .NET on the backend.',
          achievements: [
            'Mentoring - Recognition, and Promotion for junior developers',
            'Improving the code review workflow.',
            'Improving the performance of the Illustration PDF reports generator',
            'Improving the log tracking for troubleshooting.',
            'Improving the Development workflow for the Illustration PDF Reports'
          ]
        },
        {
          jobTitle: 'Team Lead & Sr. Software Engineer',
          company: 'Unosquare (Consultant company with more than 600 employees)',
          period: 'March 2017 - October 2019',
          description: 'Developing and maintain software for Foundation Medicine, a molecular insights company, which is connecting physicians and their patients to the latest cancer treatment approaches, using many technologies like React JS, React Native and Node JS.',
          achievements: [
            'Mentoring - Recognition, and Promotion for junior developers',
            'Improving our testing workflow run the automated tests with codecept js',
            'Release to apple store a mobile application to track orders'
          ]
        },
        {
          jobTitle: 'Software Engineer',
          company: 'Tiempo Development  (Consultant company with more than 400 employees)',
          period: 'Nov 2013 - March 2017',
          description: 'I developed applications using Web Technologies like ASP.NET, Angular JS and JQuery. Designing architecture and structure of the code, organizing the team to use the best practices, create and maintain the unit test suite, always in constant communication with the customer using agile methodologies.'
        },
        {
          jobTitle: 'Software Engineer',
          company:
            'Instituto Tecnológico de Sonora (Mexican public university based in Ciudad Obregón, Sonora)',
          period: 'March 2013 - Nov 2013',
          description:
            "Support and maintenance for ITSON software applications additionally I'm developer for new web  and Desktop applications in Web technologies like ASP.NET, JQuery."
        },
        {
          jobTitle: 'Software Engineer',
          company: 'Novutek (Provider of IT services in Mexico)',
          period: 'Sep 2011 - March 2013',
          description:
            'Analyzes, designs and software applications using the Java EE platform and .NET.'
        }
      ],
      projects: [
        {
          title: 'Integrations Universal API',
          technologies: [
            'Node JS',
            'AWS',
            'AMQ',
            'Jasmine',
            'Okta',
            'Postgres'
          ],
          description: 'API for additional handle multiple workflows/notifications and data integrations, place patient orders, receive status notifications and reports',
          link: 'https://www.foundationmedicine.com/info/detail/online-ordering-and-report-integrations'
        },
        {
          title: 'Optima V4',
          technologies: [
            'Node JS',
            'Azure',
            'React JS',
            'Nest JS',
            'Auth0'
          ],
          description: 'E-Manifest compliance solution used by traders to report imports and exports to U.S. Customs and Border Protection (CBP).',
          link: 'https://optimacommerce.com/'
        },
        {
          title: 'Annexus - Illustrators',
          technologies: [
            'Node JS',
            'ASP.NET Core',
            'React JS',
            'JS Reports',
            'Puppeteer'
          ],
          description: 'At Annexus, we are driven by one guiding vision — to create innovative retirement income products that help you realize the retirement you’ve worked so hard to achieve',
          link: 'https://www.annexus.com/financial-solutions/'
        },
        {
          title: 'Brandio Music Player',
          technologies: ['Node JS', 'React JS', 'Electron'],
          description:
            'Desktop player for royalty-free background music for businesses in Mexico.'
        },
        {
          title: 'Smart Clinical Trials Product',
          technologies: [
            'Docker',
            'Node JS',
            'Hapi JS',
            'Handlebars',
            'React JS',
            'Jest',
            'Enzyme',
            'Jasmine',
            'Mongo',
            'Oracle',
            'MSSQL',
            'AWS'
          ],
          description:
            'A program consisting of numerous products, services, and offerings, that all aim to get more patients access to targeted clinical trials after Foundation Medicine Testing',
          link:
            'https://www.foundationmedicine.com/insights-and-trials/foundation-smarttrials#trial-solutions'
        },
        {
          title: 'Foundation Medicine - Mobile order tracking',
          technologies: [
            'Node JS',
            'React Native',
            'React JS',
            'Jest',
            'Enzime'
          ],
          description:
            'Mobile app from Foundation Medicine for issue resolution and sample tracking through mobile.',
          link:
            'https://itunes.apple.com/us/app/foundation-medicine/id1319002478?mt=8.'
        },
        {
          title: 'Ultimate Scrum Poker',
          technologies: [
            'Node JS',
            'Angular JS',
            'Express',
            'Gulp',
            'Socket.IO',
            'Javascript'
          ],
          description: 'Scrum poker game to work with remote teams',
          link: 'https://ultimatescrumpoker.herokuapp.com'
        },
        {
          title: 'Maze Engine',
          technologies: ['Node JS', 'Vanilla Javascript', 'Express', 'Gulp'],
          description: 'Puzzle game to help the people learn javascript',
          link: 'https://maze-engine.herokuapp.com'
        },
        {
          title: 'Surviving The Elements',
          technologies: ['Javascript, CSS'],
          description:
            'Game created to participate in the JS13K contest on 2014',
          link: 'https://js13kgames.com/entries/surviving-the-elements'
        }
      ],
      skills: [
        { name: 'Javascript' },
        { name: 'Typescript' },
        { name: 'React JS' },
        { name: 'React Native' },
        { name: 'Redux' },
        { name: 'Mobx' },
        { name: 'Node JS' },
        { name: 'Unit Testing' },
        { name: 'Automation Testing' },
        { name: 'Jasmine' },
        { name: 'Mocha/Chai/Sinon' },
        { name: 'Jest/Enzyme' },
        { name: '.NET C#' },
        { name: 'Java' },
        { name: 'GIT' },
        { name: 'MSSQL' },
        { name: 'PostgresSQL' },
        { name: 'Mongo' },
        { name: 'Oracle' },
        { name: 'Docker' },
        { name: 'AWS' },
        { name: 'Azure' },
        { name: 'Jenkins' },
        { name: 'Azure Devops' },
        { name: 'CI/CD' }
      ]
    })
  }

  return {
    fetchProfile: fetchProfile
  }
}
