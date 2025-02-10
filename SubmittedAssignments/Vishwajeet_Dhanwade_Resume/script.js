class IssueComponent extends HTMLElement {
  static observedAttributes = ["config", "data"];

  defaultConfig = {
      formLabel: "form-label",
      formClass: "form-control",
      buttonClass: "btn btn-primary mt-3"
  };

  defaultData = [
      { label: "Enter Name", type: "text", placeholder: "Candidate Name", required: false },
      { label: "Enter profession", type: "text", placeholder: "profession", required: false },
      { label: "Enter description", type: "text", placeholder: "description", required: false },
      { label: "Enter phone", type: "number", placeholder: "Phone no.", required: false },
      { label: "Enter email", type: "email", placeholder: "Email", required: false },
      { label: "Enter location", type: "text", placeholder: "Location", required: false },
      { label: "Enter language", type: "text", placeholder: "language", required: false },
      { label: "Enter interest", type: "text", placeholder: "Interest", required: false },
      { label: "Enter skill", type: "text", placeholder: "Skill", required: false },
      { label: "Enter experience", type: "text", placeholder: "Experience", required: false },
      { label: "Enter education", type: "text", placeholder: "Education", required: false }
  ];

  config = {};
  data = [];

  constructor() {
      super();
      this.config = { ...this.defaultConfig };
      this.data = [...this.defaultData];
      console.log('IssueComponent')
  }

  connectedCallback() {
    console.log('this.data',this.data)
      this.renderComponent();
      this.setupDynamicButtons();
  }

  attributeChangedCallback(name, oldValue, newValue) {
      try {
        console.log('newValue',newValue)
          if (name === "config" && typeof newValue === "string") {
              this.config = { ...this.config, ...JSON.parse(newValue) };
          }
          if (name === "data" && typeof newValue === "string") {
              let newVal= JSON.parse(newValue);
              this.data =newVal.data
          }
      } catch (e) {
          console.error(e);
      }

      this.renderComponent();
  }

  renderComponent() {
      this.innerHTML = "";

      const form = document.createElement("form");

      this.data.forEach(field => {
          this.addFieldToForm(form, field);
      });

      const submitButton = document.createElement("button");
      submitButton.type = "submit";
      submitButton.className = this.config.buttonClass;
      submitButton.textContent = "Submit";

      form.appendChild(submitButton);
      this.appendChild(form);

      form.addEventListener("submit", (event) => {
          event.preventDefault();
          const formData = {};
          const inputs = form.querySelectorAll("input");
          inputs.forEach((input) => {
              formData[input.placeholder] = input.value;
          });
          console.log("Form submitted with data:", formData);
      });

      // Add container for dynamic buttons
      const buttonContainer = document.createElement("div");
      buttonContainer.classList.add("mt-3");

      // Buttons for adding new fields
      const addEducationButton = document.createElement("button");
      addEducationButton.textContent = "Add Education";
      addEducationButton.className = "btn btn-secondary me-2";
      addEducationButton.id = "add-education";

      const addCompanyButton = document.createElement("button");
      addCompanyButton.textContent = "Add Company Experience";
      addCompanyButton.className = "btn btn-secondary";
      addCompanyButton.id = "add-company";

      buttonContainer.appendChild(addEducationButton);
      buttonContainer.appendChild(addCompanyButton);
      this.appendChild(buttonContainer);
  }

  addFieldToForm(form, field) {
      const formGroup = document.createElement("div");
      formGroup.className = "mb-3";

      const label = document.createElement("label");
      label.className = this.config.formLabel;
      label.textContent = field.label;

      const input = document.createElement("input");
      input.type = field.type || "text";
      input.className = this.config.formClass;
      input.placeholder = field.placeholder || "";
      input.required = field.required || false;

      formGroup.appendChild(label);
      formGroup.appendChild(input);
      form.appendChild(formGroup);
  }

  setupDynamicButtons() {
      const form = this.querySelector("form");

      document.getElementById("add-education").addEventListener("click", (event) => {
          event.preventDefault();
          this.addFieldToForm(form, {
              label: "Additional Education",
              type: "text",
              placeholder: "Enter additional qualification",
              required: false
          });
      });

      document.getElementById("add-company").addEventListener("click", (event) => {
          event.preventDefault();
          this.addFieldToForm(form, {
              label: "Additional Company Experience",
              type: "text",
              placeholder: "Enter additional company experience",
              required: false
          });
      });
  }
}



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
        name: "Richrd",
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
        console.log('ResumeComponent')
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
        console.log('this.data',this.data)
        this.updateData();
        this.renderComponent();
    }
  
    attributeChangedCallback(name, oldValue, newValue) {
        try {
            console.log('newValue',newValue)
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
customElements.define("issue-component", IssueComponent);


