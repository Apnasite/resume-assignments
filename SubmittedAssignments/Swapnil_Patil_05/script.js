class ResumeComponent extends HTMLElement {
    // Default configuration and data
    defaultConfig = {

      backgroundClass:"background",
        headerClass:"header",
        titleClass:"title",
        postClass:"post",
        navClass:"nav",
        numberClass:"number",
        emailClass:"email",
        locationClass:"location",
        linkdinClass:"linkdin",
        objectiveClass:"objective",
        careerClass:"career",
        rClass:"hr",
        para1Class:"paragraph",
        para2Class:"paragraph",
        para3Class:"paragraph",
        sectionClass:"section",
        educationClass:"education",
        hr2Class:"hr2",
        hscClass:"hsc",
        dateClass:"date",
        workClass:"work",
        footerClass:"footer",
        li2Class:"li2",
        li1Class:"li1"
    };
    defaultData = {
      title : "SWAPNIL PATIL",
      post : "SOFTWARE DEVELOPER",
      number:"+91 9856478655 |",
      email:"swapnil25@gmail.com |",
      location : "Pune |",
      linkdin : "www.swapnil.com",
      career : "CAREER OBJECTIVE",
      para1:"A career objective is a statement that describes your professional goals, aspirations, and what you hope to achieve in your career. Its typically included at the top of your resume to give employers an idea of what youre looking for in a job and how you can contribute to the organization Results-oriented executive with a deep expertise in [specific industry/field], known for delivering transformative solutions and fostering strong teams.",
      education:"EDUCATION",
      work:"WORK EXPERIENCE",
      degree1:"HSC | SFJC Chinchwad",
      degree2:"Mechanical | JSPMs RSCOE Tathawade",
      year1:"2021",
      year2:"2025",
      dateClass:"date3",
      workExperience:"Software Engineer at Tech Solutions Ltd Jan 2020 - Present Focused on developing web applications and managing backend systems. As a Software Engineer at Tech Solutions Ltd., I am primarily responsible for developing and maintaining complex web applications. I work closely with the development team to design scalable systems and ensure efficient database management. My role involves creating robust backend services and optimizing performance to ensure smooth user experiences. I also collaborate with the frontend team to integrate APIs and ensure seamless functionality. Additionally, I have helped migrate legacy systems to modern frameworks, improving both system performance and user satisfaction.",
      workExperience2:"Software Engineer at Tech Solutions Ltd Jan 2020 - Present Focused on developing web applications and managing backend systems. As a Software Engineer at Tech Solutions Ltd., I am primarily responsible for developing and maintaining complex web applications. I work closely with the development team to design scalable systems and ensure efficient database management. My role involves creating robust backend services and optimizing performance to ensure smooth user experiences. I also collaborate with the frontend team to integrate APIs and ensure seamless functionality. Additionally, I have helped migrate legacy systems to modern frameworks, improving both system performance and user satisfaction."
    };
  
    constructor() {
      super();
      this.config = this.defaultConfig;
      this.data = this.defaultData;
  
      // Attach a shadow root
      const shadow = this.attachShadow({ mode: 'open' });
  
      // Load external CSS file
      const linkElement = document.createElement('link');
      linkElement.setAttribute('rel', 'stylesheet');
      linkElement.setAttribute('href', 'style.css');
      shadow.appendChild(linkElement);
  
      // wrapper div created  for the menu card
      this.wrapper = document.createElement('div');
      shadow.appendChild(this.wrapper); 
    }
  
    static get observedAttributes() {
      return ['config', 'data'];
    }
  
    attributeChangedCallback(name, oldValue, newValue) {
      if (oldValue !== newValue) {
        try {
          if (name === 'config') {
            this.config = { ...this.defaultConfig, ...JSON.parse(newValue) };
          }
          if (name === 'data') {
            this.data = { ...this.defaultData, ...JSON.parse(newValue) };
          }
        } catch (e) {
          console.error(`Invalid JSON for ${name}:`, e);
        }
        this.render();
      }
    }
  
    connectedCallback() {
      this.render();
    }
  
    render() {
      this.wrapper.innerHTML = ''; // Clear previous content
      const config = this.config || this.defaultConfig;
      const data = this.data || this.defaultData;
  
      // Background
      const background = document.createElement('div');
      background.classList.add(config.backgroundClass);
      this.wrapper.appendChild(background);
      
      //header
      const header = document.createElement('div');
      header.classList.add(config.headerClass);
      background.appendChild(header);

      const title = document.createElement('h1');
      title.classList.add(config.titleClass);
      title.textContent = (data.title);
      header.appendChild(title);

      const post = document.createElement('h2');
      post.classList.add(config.postClass);
      post.textContent = (data.post);
      header.appendChild(post);

      //nav
      const nav = document.createElement('div');
      nav.classList.add(config.navClass);
      background.appendChild(nav);

      const number = document.createElement('h3');
      number.classList.add(config.numberClass);
      number.textContent = (data.number);
      nav.appendChild(number);

      const email = document.createElement('h3');
      email.classList.add(config.emailClass);
      email.textContent = (data.email);
      nav.appendChild(email);

      const location = document.createElement('h3');
      location.classList.add(config.locationClass);
      location.textContent = (data.location);
      nav.appendChild(location);

      const linkdin = document.createElement('h3');
      linkdin.classList.add(config.linkdinClass);
      linkdin.textContent = (data.linkdin);
      nav.appendChild(linkdin);

      //content

      //content section 1
      const objective = document.createElement('div');
      objective.classList.add(config.objectiveClass);
      background.appendChild(objective);
      
      var career = document.createElement('h1');
      career.classList.add(config.careerClass);
      career.textContent = (data.career);
      objective.appendChild(career);
      
      var hr = document.createElement('hr');
      hr.classList.add(config.hrClass);
      objective.appendChild(hr);

      var para1 = document.createElement('p');
      para1.classList.add(config.para1Class);
      para1.textContent = (data.para1);
      objective.appendChild(para1);

      //content section 2
      const section = document.createElement('div');
      section.classList.add(config.sectionClass);
      background.appendChild(section);

      var education = document.createElement('h1');
      education.classList.add(config.educationClass);
      education.textContent = (data.education);
      section.appendChild(education);

      var hr = document.createElement('hr');
      hr.classList.add(config.hr2Class);
      section.appendChild(hr);

      const college = document.createElement('div');
      college.classList.add(config.collegeClass);
      section.appendChild(college);

      const date = document.createElement('div');
      date.classList.add(config.dateClass);
      section.appendChild(date);

      var hsc = document.createElement('p');
      hsc.classList.add(config.hscClass);
      hsc.textContent = (data.degree1);
      college.appendChild(hsc);

      var mechanical = document.createElement('p');
      mechanical.classList.add(config.hscClass);
      mechanical.textContent = (data.degree2);
      college.appendChild(mechanical);

      var date1 = document.createElement('p');
      date1.classList.add(config.dateClass);
      date1.textContent = (data.year1);
      date.appendChild(date1);

      var date2 = document.createElement('p');
      date2.classList.add(config.dateClass);
      date2.textContent = (data.year2);
      date.appendChild(date2);
 
      // work experince

      const footer = document.createElement('div');
      footer.classList.add(config.footerClass);
      background.appendChild(footer);

      var work = document.createElement('h1');
      work.classList.add(config.workClass);
      work.textContent = (data.work);
      footer.appendChild(work);

      var hr = document.createElement('hr');
      hr.classList.add(config.hr2Class);
      footer.appendChild(hr);

      const ul = document.createElement('ul');
      ul.classList.add(config.ulClass);
      footer.appendChild(ul);

      const li1 = document.createElement('li');
      li1.textContent =(data.workExperience);
      li1.classList.add(config.li1Class);
      ul.appendChild(li1);

      const li2 = document.createElement('li');
      li2.textContent =(data.workExperience2);
      li2.classList.add(config.li2Class);
      ul.appendChild(li2);

  }
}
  customElements.define('resume-component', ResumeComponent);