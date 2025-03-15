class ResumeComponent extends HTMLElement {
    static observedAttributes = ["config", "data"];

    defaultConfig = {
        wrapper: 'resume-wrapper',
        background: 'resume-background',
        titleClass: 'resume-title',
        contactClass: 'resume-contact',
        summaryHeadingClass: 'resume-summary-heading',
        summaryTextClass: 'resume-summary-text',
        experienceHeadingClass: 'resume-experience-heading',
        experienceTextClass: 'resume-experience-text',
        consultancyHeadingClass: 'resume-consultancy-heading', 
        consultancyTextClass: 'resume-consultancy-text', 
        educationHeadingClass: 'resume-education-heading', 
        educationTextClass: 'resume-education-text',
        skillsHeadingClass: 'resume-skills-heading', 
        skillsTextClass: 'resume-skills-text'
       
    };

    defaultData = {
        name: 'Charles Boomberg',
        mobile: '+91 234 567 890',
        location: 'New York, USA',
        gmail: 'charles.boomberg@gmail.com',
        summary: 'Experienced software engineer with a passion for building scalable web applications.',
        experience: [
            {title: 'Senior Software Engineer',company: 'XYZ Corp',duration: '2018 - Present',description: 'Developed and maintained high-performance web applications using JavaScript, React, and Node.js. Led a team of developers to implement innovative features, improving user engagement by 25%.'},
            {title: 'Software Developer',company: 'ABC Technologies',duration: '2015 - 2018',description: 'Designed and optimized backend services using Python and AWS. Reduced API response time by 40% and improved scalability by migrating to microservices architecture.'},
            {title: 'Junior Developer',company: 'Startup Labs',duration: '2013 - 2015',description: 'Worked on UI/UX design and front-end development for multiple startup projects. Developed interactive dashboards that enhanced user experience and data visualization.'}
        ],
        consultancy: 'Worked as an independent consultant for multiple Fortune 500 companies, providing expertise in software architecture, performance optimization, and cloud migration strategies.',
        education: 'Master of Science in Computer Science - MIT (2014 - 2016). Bachelor of Science in Information Technology - Stanford University (2010 - 2014).',
        skills: 'JavaScript, React, Node.js, Python, AWS'
    };

    constructor() {
        super();
        this.config = { ...this.defaultConfig };
        this.data = { ...this.defaultData };
        this.loadStyles();
        
    }

    connectedCallback() {
        this.renderComponent();
    }
    attributeChangedCallback(name, oldValue, newValue) {
        if (oldValue !== newValue) {
            try {
                if (name === 'config' && typeof newValue === 'string') {
                    this.config = Object.assign(this.config, JSON.parse(newValue));
                }
                if (name === 'data' && typeof newValue === 'string') {
                    this.data = Object.assign(this.data, JSON.parse(newValue));
                }
            } catch (e) {
                console.log(e);
            }

            this.renderComponent();
        }
    }



    createElement(tag, className, innerHTML) {
        const element = document.createElement(tag);
        if (className) element.className = className;
        if (innerHTML) element.innerHTML = innerHTML;
        return element;
    }

    renderComponent() {
        this.innerHTML = ""; // Clear previous content
        

        const wrapper = this.createElement("div", this.config.wrapper);
        const title = this.createElement("h1", this.config.titleClass, this.data.name);
        wrapper.appendChild(title);

        // Contact info section
        const contactInfo = this.createElement("ul", this.config.contactClass);
        contactInfo.innerHTML = `
            <li>${this.data.mobile}</li>
            <li>${this.data.location}</li>
            <li>${this.data.gmail}</li>
        `;
        wrapper.appendChild(contactInfo);

        // Professional Summary Section
        const summaryHeading = this.createElement("h2", this.config.summaryHeadingClass, "Professional Summary");
        const summaryText = this.createElement("p", this.config.summaryTextClass, this.data.summary);
        wrapper.appendChild(summaryHeading);
        wrapper.appendChild(summaryText);

        // Professional Experience (UPDATED)
        const experienceHeading = this.createElement("h2", this.config.experienceHeadingClass, "Professional Experience");
        wrapper.appendChild(experienceHeading);

        this.data.experience.forEach(job => {
            const jobTitle = this.createElement("h3", "resume-job-title", job.title);
            const jobCompany = this.createElement("h4", "resume-job-company", `${job.company} | ${job.duration}`);
            const jobDescription = this.createElement("p", this.config.experienceTextClass, job.description);

            wrapper.appendChild(jobTitle);
            wrapper.appendChild(jobCompany);
            wrapper.appendChild(jobDescription);
        });

        // Consultancy Section (NEW)
        const consultancyHeading = this.createElement("h2", this.config.consultancyHeadingClass, "Consultancy");
        const consultancyText = this.createElement("p", this.config.consultancyTextClass, this.data.consultancy);
        wrapper.appendChild(consultancyHeading);
        wrapper.appendChild(consultancyText);

        const educationHeading = this.createElement("h2", this.config.educationHeadingClass, "Education");
        const educationText = this.createElement("p", this.config.educationTextClass, this.data.education);
        wrapper.appendChild(educationHeading);
        wrapper.appendChild(educationText);

        
        const skillsHeading = this.createElement("h2", this.config.skillsHeadingClass, "Skills");
        const skillsList = this.createElement("ul", this.config.skillsTextClass);
        const skillsArray = this.data.skills.split(", ").map(skill => `<li>${skill}</li>`).join(""); // Converts CSV to list items
        skillsList.innerHTML = skillsArray;

        wrapper.appendChild(skillsHeading);
        wrapper.appendChild(skillsList);

        const background = this.createElement("div", this.config.background);

        

        wrapper.appendChild(background);
        this.appendChild(wrapper);
    }

    loadStyles() {
        if (!document.querySelector('link[href="css/style.css"]')) {
            const link = document.createElement("link");
            link.rel = "stylesheet";
            link.href = "css/style.css";
            document.head.appendChild(link);
        }
    }
}

// Define the custom element
customElements.define("resume-component", ResumeComponent);
