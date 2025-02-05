// class ResumeComponent extends HTMLElement {
//     static observedAttributes = ["config", "data"];
  
//     defaultConfig = {
//         wrapper: "resume-wrapper",
//         background: "resume-background",
//         line: "line1",
//         profilePhoto: "Profile-photo",
//         name: "name",
//         surname: "surname",
//         profession: "profession",
//         sideBlack: "sideblack",
//         objectives: "objectives",
//         contactInfo: "contact-info",
//         experience: "experience",
//         education: "education",
//         skills: "skills",
//         languages: "languages",
//         interests: "interests",
//     };
  
//     defaultData = {
//         profilePhoto: "Dipak uniq.jpg",
//         name: "Richard",
//         surname: "Parker",
//         profession: "Developer",
//         aboutMe:
//             "To secure a challenging position in a reputable organization to expand my learnings, knowledge, and skills. To bring my strong sense of dedication, motivation, and responsibility to your organization.",
//         contact: {
//             phone: "+91 8546856958",
//             email: "spidy@gmail.com",
//             location: "Spidy Villa, New York",
//         },
//         languages: ["English", "Hindi", "Marathi"],
//         interests: ["Reading", "Traveling", "Cooking", "Photography",],
//         experience: [
//             {
//                 year: "2024 - Present",
//                 company: "XYZ Corporation",
//                 role: "Software Developer",
//                 responsibilities: [
//                     "Developing and maintaining web applications",
//                     "Collaborating with cross-functional teams",
//                     "Ensuring code quality",
//                 ],
//             },
//             {
//                 year: "2022 - 2024",
//                 company: "ABC Technologies",
//                 role: "Junior Developer",
//                 responsibilities: [
//                     "Assisting in the development of client-side and server-side applications",
//                     "Writing and optimizing code",
//                     "Participating in code reviews",
//                 ],
//             },
//         ],
//         education: [
//             {
//                 year: "2024",
//                 university: "Savitribai Phule Pune University",
//                 degree: "Masters of Science",
//                 specialization: "Computer Science",
//                 percentage: "(Pursuing)",
//             },
//             {
//                 year: "2022",
//                 university: "Savitribai Phule Pune University",
//                 degree: "Bachelor of Science",
//                 specialization: "Computer Science",
//                 percentage: "82.36%",
//             },
//         ],
//         skills: [
//             { name: "Design Process", score: "78%" },
//             { name: "Project Management", score: "81%" },
//         ],
//     };
  
//     Config = {};
//     Data = {};
  
//     // constructor() {
//     //     super();
//     //    { this.config = this.defaultConfig;}
//     //    { this.data = this.defaultData;}
//     // }
//     constructor() {
//         super();
//         this.config = { ...this.defaultConfig };
//         this.data = { ...this.defaultData };
//     }
    
  
//     createElement(tag, className, innerHTML) {
//         const element = document.createElement(tag);
//         if (className) element.className = className;
//         if (innerHTML) element.innerHTML = innerHTML;
//         return element;
//     }
  
//     renderComponent() {
//         const wrapper = this.createElement("div", this.config.wrapper);
//         const background = this.createElement("div", this.config.background);
//         const line = this.createElement("div", this.config.line);
  
//         const profilePhoto = this.createElement("div", this.config.profilePhoto);
//         const img = this.createElement("img");
//         img.src = this.data.profilePhoto;
//         profilePhoto.appendChild(img);
  
//         const name = this.createElement("div", this.config.name, `<b>${this.data.name}</b>`);
//         const surname = this.createElement("div", this.config.surname, `<b>${this.data.surname}</b>`);
//         const profession = this.createElement("div", this.config.profession, this.data.profession);
  
//         line.append(profilePhoto, name, surname, profession);
//         background.appendChild(line);
  
//         const sideBlack = this.createElement("div", this.config.sideBlack);
  
//         const objectives = this.createElement(
//             "div",
//             this.config.objectives,
//             `<div class="objective-heading">About Me:</div><div class="objective-description">${this.data.aboutMe}</div>`
//         );
//         sideBlack.appendChild(objectives);
  
//       // Add Contact Info
//   const contactInfo = this.createElement("div", this.config.contactInfo);
//   contactInfo.innerHTML = `
//       <div>
//           <img src="phone.png" alt="Phone Logo" style="width:20px; height:auto; margin-right:5px; position:relative; top:1mm">
//           ${this.data.contact.phone}
//       </div>
//       <div>
//           <img src="mail.png" style="width:20px; height:auto; margin-right:5px; position:relative; top:1mm">
//           ${this.data.contact.email}
//       </div>
//       <div>
//           <img src="language.png" alt="Location Logo" style="width:20px; height:auto; margin-right:5px; position:relative; top:1mm">
//           ${this.data.contact.location}
//       </div>
//   `;
//   sideBlack.appendChild(contactInfo);
  
  
//         // Add Experience
//         const experienceSection = this.createElement("div", this.config.experience);
//         experienceSection.innerHTML = "<b>Experience:</b>";
//         this.data.experience.forEach((job) => {
//             const jobElement = this.createElement("div", "job");
//             jobElement.innerHTML = `
//                 <div><b>${job.year}</b> - ${job.company} (${job.role})</div>
//                 <div class="responsibilities">${job.responsibilities.join('<br>')}</div>
//             `;
//             experienceSection.appendChild(jobElement);
//         });
  
//         // Add Education
//         const educationSection = this.createElement("div", this.config.education);
//         educationSection.innerHTML = "<b>Education:</b>";
//         this.data.education.forEach((edu) => {
//             const eduElement = this.createElement("div", "degree");
//             eduElement.innerHTML = `
//                 <div><b>${edu.year}</b> - ${edu.university}: ${edu.degree} in ${edu.specialization} (${edu.percentage})</div>
//             `;
//             educationSection.appendChild(eduElement);
//         });
  
//         // Add Skills
//         const skillsSection = this.createElement("div", this.config.skills);
//         skillsSection.innerHTML = "<b>Skills:</b>";
//         this.data.skills.forEach((skill) => {
//             const skillElement = this.createElement("div", "skill");
//             skillElement.innerHTML = `${skill.name}: ${skill.score}`;
//             skillsSection.appendChild(skillElement);
//         });
  
//         // Add Languages
//         const languagesSection = this.createElement("div", this.config.languages);
//         languagesSection.innerHTML = "<b>Languages</b>";
//         this.data.languages.forEach((language) => {
//             const languageElement = this.createElement("div", "language");
//             languageElement.innerHTML = `• ${language}`; 
//             languagesSection.appendChild(languageElement);
//         });
  
//         // Add Interests
//         const interestsSection = this.createElement("div", this.config.interests);
//         interestsSection.innerHTML = "<b>Interests</b>";
//         this.data.interests.forEach((interest) => {
//             const interestElement = this.createElement("div", "interest");
//              interestElement.innerHTML = `• ${interest}`;
//             interestsSection.appendChild(interestElement);
//         });
  
//         sideBlack.append(
  
//             educationSection,
//             skillsSection,
//             languagesSection,
//             interestsSection
//         );
//         background.appendChild(
//           experienceSection,
            
//         );
  
//         wrapper.append(background, sideBlack);
//         this.appendChild(wrapper);
//     }
  
//     connectedCallback() {
//         this.updateData();
//         this.renderComponent();
//     }
  
//     attributeChangedCallback(name, oldValue, newValue) {
//         try {
//             if (name === "config" && typeof newValue === "string") {
//                 this.config = Object.assign(this.config, JSON.parse(newValue));
//             }
//             if (name === "data" && typeof newValue === "string") {
//                 this.data = Object.assign(this.data, JSON.parse(newValue));
//             }
//         } catch (e) {
//             console.error(`Error parsing JSON for ${name}:`, e);
//         }
//     }
//     updateData() {
//         const updatedData = JSON.parse(this.getAttribute('data'));
//         this.data = updatedData || this.defaultData;
//         console.log(this.data);}
    
//   }
  
  
//   customElements.define("resume-component", ResumeComponent);
  



class ResumeComponent extends HTMLElement {
    // static observedAttributes = ["config", "data"];
  
    defaultConfig = {
        wrapper: 'resume-wrapper',
        background: 'resume-background',
        line: 'line1',
        profilePhoto: 'Profile-photo',
        name: 'name',
        surname: 'surname',
        profession: 'profession',
        sideBlack: 'sideblack',
        objectives: 'objectives',
        contactInfo: 'contact-info',
        experience: 'experience',
        education: 'education',
        skills: 'skills',
        languages: 'languages',
        interests: 'interests',
    };
  
    defaultData = {
        profilePhoto: "Dipak uniq.jpg",
        name: "Richard",
        surname: "Parker",
        profession: "Developer",
        aboutMe:
            "To secure a challenging position in a reputable organization to expand my learnings, knowledge, and skills. To bring my strong sense of dedication, motivation, and responsibility to your organization.",
        contact: {
            phone: "+91 8546856958",
            email: "spidy@gmail.com",
            location: "Spidy Villa, New York",
        },
        languages: ["English", "Hindi", "Marathi"],
        interests: ["Reading", "Traveling", "Cooking", "Photography",],
        experience: [
            {
                year: "2024 - Present",
                company: "XYZ Corporation",
                role: "Software Developer",
                responsibilities: [
                    "Developing and maintaining web applications",
                    "Collaborating with cross-functional teams",
                    "Ensuring code quality",
                ],
            },
            {
                year: "2022 - 2024",
                company: "ABC Technologies",
                role: "Junior Developer",
                responsibilities: [
                    "Assisting in the development of client-side and server-side applications",
                    "Writing and optimizing code",
                    "Participating in code reviews",
                ],
            },
        ],
        education: [
            {
                year: "2024",
                university: "Savitribai Phule Pune University",
                degree: "Masters of Science",
                specialization: "Computer Science",
                percentage: "(Pursuing)",
            },
            {
                year: "2022",
                university: "Savitribai Phule Pune University",
                degree: "Bachelor of Science",
                specialization: "Computer Science",
                percentage: "82.36%",
            },
        ],
        skills: [
            { name: "Design Process", score: "78%" },
            { name: "Project Management", score: "81%" },
        ],
    };
  
    // Config = {};
    // Data = {};
  
    constructor() {
        super();
        this.config = this.defaultConfig;
        this.data = this.defaultData;
    }
    static get observedAttributes() {
        return ["config", "data"];
    }


    // constructor() {
    //     super();
    //     this.config = { ...this.defaultConfig };
    //     this.data = { ...this.defaultData };
    // }
    
  
    createElement(tag, className, innerHTML) {
        const element = document.createElement(tag);
        if (className) element.className = className;
        if (innerHTML) element.innerHTML = innerHTML;
        return element;
    }
  
    renderComponent() {
        const wrapper = this.createElement("div", this.config.wrapper);
        const background = this.createElement("div", this.config.background);
        const line = this.createElement("div", this.config.line);
  
        const profilePhoto = this.createElement("div", this.config.profilePhoto);
        const img = this.createElement("img");
        img.src = this.data.profilePhoto;
        profilePhoto.appendChild(img);
  
        const name = this.createElement("div", this.config.name, `<b>${this.data.name}</b>`);
        const surname = this.createElement("div", this.config.surname, `<b>${this.data.surname}</b>`);
        const profession = this.createElement("div", this.config.profession, this.data.profession);
  
        line.append(profilePhoto, name, surname, profession);
        background.appendChild(line);
  
        const sideBlack = this.createElement("div", this.config.sideBlack);
  
        const objectives = this.createElement(
            "div",
            this.config.objectives,
            `<div class="objective-heading">About Me:</div><div class="objective-description">${this.data.aboutMe}</div>`
        );
        sideBlack.appendChild(objectives);
  
      // Add Contact Info
  const contactInfo = this.createElement("div", this.config.contactInfo);
  contactInfo.innerHTML = `
      <div>
          <img src="phone.png" alt="Phone Logo" style="width:20px; height:auto; margin-right:5px; position:relative; top:1mm">
          ${this.data.contact.phone}
      </div>
      <div>
          <img src="mail.png" style="width:20px; height:auto; margin-right:5px; position:relative; top:1mm">
          ${this.data.contact.email}
      </div>
      <div>
          <img src="language.png" alt="Location Logo" style="width:20px; height:auto; margin-right:5px; position:relative; top:1mm">
          ${this.data.contact.location}
      </div>
  `;
  sideBlack.appendChild(contactInfo);
  
  
        // Add Experience
        const experienceSection = this.createElement("div", this.config.experience);
        experienceSection.innerHTML = "<b>Experience:</b>";
        this.data.experience.forEach((job) => {
            const jobElement = this.createElement("div", "job");
            jobElement.innerHTML = `
                <div><b>${job.year}</b> - ${job.company} (${job.role})</div>
                <div class="responsibilities">${job.responsibilities.join('<br>')}</div>
            `;
            experienceSection.appendChild(jobElement);
        });
  
        // Add Education
        const educationSection = this.createElement("div", this.config.education);
        educationSection.innerHTML = "<b>Education:</b>";
        this.data.education.forEach((edu) => {
            const eduElement = this.createElement("div", "degree");
            eduElement.innerHTML = `
                <div><b>${edu.year}</b> - ${edu.university}: ${edu.degree} in ${edu.specialization} (${edu.percentage})</div>
            `;
            educationSection.appendChild(eduElement);
        });
  
        // Add Skills
        const skillsSection = this.createElement("div", this.config.skills);
        skillsSection.innerHTML = "<b>Skills:</b>";
        this.data.skills.forEach((skill) => {
            const skillElement = this.createElement("div", "skill");
            skillElement.innerHTML = `${skill.name}: ${skill.score}`;
            skillsSection.appendChild(skillElement);
        });
  
        // Add Languages
        const languagesSection = this.createElement("div", this.config.languages);
        languagesSection.innerHTML = "<b>Languages</b>";
        this.data.languages.forEach((language) => {
            const languageElement = this.createElement("div", "language");
            languageElement.innerHTML = `• ${language}`; 
            languagesSection.appendChild(languageElement);
        });
  
        // Add Interests
        const interestsSection = this.createElement("div", this.config.interests);
        interestsSection.innerHTML = "<b>Interests</b>";
        this.data.interests.forEach((interest) => {
            const interestElement = this.createElement("div", "interest");
             interestElement.innerHTML = `• ${interest}`;
            interestsSection.appendChild(interestElement);
        });
  
        sideBlack.append(
  
            educationSection,
            skillsSection,
            languagesSection,
            interestsSection
        );
        background.appendChild(
          experienceSection,
            
        );
  
        wrapper.append(background, sideBlack);
        this.appendChild(wrapper);
    }
  
    connectedCallback() {
        this.updateData();
        this.renderComponent();
    }
  
    attributeChangedCallback(name, oldValue, newValue) {
        try {
            if (name === "config" && typeof newValue === "string") {
                this.config = Object.assign(this.config, JSON.parse(newValue));
            }
            if (name === "data" && typeof newValue === "string") {
                this.data = Object.assign(this.data, JSON.parse(newValue));
            }
        } catch (e) {
            console.error(`Error parsing JSON for ${name}:`, e);
        }
    }
    updateData() {
        const updatedData = JSON.parse(this.getAttribute('data'));
        this.data = updatedData || this.defaultData;
        console.log(this.data);}
    
  }
  
  
  customElements.define("resume-component", ResumeComponent);
  

