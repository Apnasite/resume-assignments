class Resume extends HTMLElement {
    static observedAttributes = ["data"];

    defaultData = {
        name: "Mahesh Bhosle",
        profileLine: "Software Engineer",
        profilePicture: "https://apnaguru.in/api/download/apnaguru.in/default/mahi.jpg",
        email: "mbbhosle061@gmail.com",
        mobile: "+919665650029",
        address: "Your Address, City, State, ZIP",
        website: "www.yourwebsite.com",
        linkedin: "https://www.linkedin.com/in/mahesh-bhosle-46959a302/",
        description: "I am a passionate software development student, constantly exploring new technologies and honing my skills to build innovative solutions. With a solid foundation in programming and a keen interest in problem-solving, I thrive on creating impactful software that enhances user experiences. My journey in tech is fueled by curiosity, a growth mindset, and a commitment to lifelong learning. Whether working on academic projects or personal endeavors, I strive to bring creativity, efficiency, and a touch of innovation to every line of code I write",
        skills: [
            "HTML 5", "CSS", "Bootstrap", "JavaScript", "TypeScript", "Angular", "NodeJS", "MongoDB"
        ],
        otherSkills: [
            "Problem Solving", "Project Management", "Team Collaboration"
        ],
        languages: [
            { name: "English" }, { name: "Marathi" }, { name: "Hindi" }
        ],
        education: [
            {
                year: "2023",
                university: "SRTMUN",
                percentage: "(Pursuing)",
                degree: "Bca",
                specialization: "Computer Science"
            }
        ],
        experience: [
            {
                year: "2024 - Present",
                company: "XYZ Corporation",
                role: "Software Developer",
                responsibilities: [
                    "Developing and maintaining web applications",
                    "Collaborating with cross-functional teams",
                    "Ensuring code quality"
                ]
            },
            {
                year: "2022 - 2024",
                company: "ABC Technologies",
                role: "Junior Developer",
                responsibilities: [
                    "Assisting in the development of client-side and server-side applications",
                    "Writing and optimizing code",
                    "Participating in code reviews"
                ]
            }
        ],
        interests: [
            "Reading", "Traveling", "Cooking", "Photography"
        ]
    };

    data = {};

    constructor() {
        super();
    }

    connectedCallback() {
        this.data = { ...this.defaultData, ...this.data };
        this.renderComponent();
    }

    attributeChangedCallback(name, oldValue, newValue) {
        if (name === "data" && typeof newValue === "string") {
            try {
                this.data = { ...this.defaultData, ...JSON.parse(newValue) };
            } catch (e) {}
            this.renderComponent();
        }
    }

    renderComponent() {
        const d = this.data;
        this.innerHTML = '';
        const wrapper = document.createElement('div');
        wrapper.className = 'resume-wrapper';

        // Background
        const bg = document.createElement('div');
        bg.className = 'resume-background';
        ['line1', 'line2', 'line3', 'line4', 'sideblack'].forEach(cls => {
            const div = document.createElement('div');
            div.className = cls;
            bg.appendChild(div);
        });
        wrapper.appendChild(bg);

        // Content
        const content = document.createElement('div');
        content.className = 'resume-content';

        content.appendChild(this.createProfileSection(d));
        content.appendChild(this.createContactSection(d));
        content.appendChild(this.createObjectivesSection(d));
        content.appendChild(this.createSkillsSection(d));
        content.appendChild(this.createLanguageSection(d));
        content.appendChild(this.createEducationSection(d));
        content.appendChild(this.createExperienceSection(d));
        content.appendChild(this.createInterestSection(d));

        wrapper.appendChild(content);
        this.appendChild(wrapper);
    }

    createProfileSection(d) {
        const frag = document.createDocumentFragment();

        const photoDiv = document.createElement('div');
        photoDiv.className = 'Profile-photo';
        const img = document.createElement('img');
        img.src = d.profilePicture || './img/Dipak uniq.jpg';
        img.alt = d.name || '';
        photoDiv.appendChild(img);
        frag.appendChild(photoDiv);

        const nameDiv = document.createElement('div');
        nameDiv.className = 'name';
        nameDiv.textContent = d.name || '';
        frag.appendChild(nameDiv);

        const profDiv = document.createElement('div');
        profDiv.className = 'profession';
        profDiv.textContent = d.profileLine || '';
        frag.appendChild(profDiv);

        return frag;
    }

    createContactSection(d) {
        const contact = document.createElement('div');
        contact.className = 'contact';

        const heading = document.createElement('div');
        heading.className = 'contact-heading';
        heading.textContent = 'CONTACTS:';
        contact.appendChild(heading);

        const email = document.createElement('div');
        email.className = 'email';
        email.innerHTML = `<i class="fa fa-envelope"></i> <a href="mailto:${d.email}">${d.email}</a>`;
        contact.appendChild(email);

        const phone = document.createElement('div');
        phone.className = 'phoneno';
        phone.innerHTML = `<i class="fa fa-phone"></i> ${d.mobile}`;
        contact.appendChild(phone);

        const address = document.createElement('div');
        address.className = 'address';
        address.innerHTML = `<i class="fa fa-map-marker"></i> ${d.address}`;
        contact.appendChild(address);

        const website = document.createElement('div');
        website.className = 'yoursite';
        website.innerHTML = `<i class="fa fa-link"></i> <a href="http://${d.website}" target="_blank">${d.website}</a>`;
        contact.appendChild(website);

        const linkedin = document.createElement('div');
        linkedin.className = 'othersite';
        linkedin.innerHTML = `<i class="fa fa-linkedin"></i> <a href="${d.linkedin}" target="_blank">LinkedIn Profile</a>`;
        contact.appendChild(linkedin);

        return contact;
    }

    createObjectivesSection(d) {
        const obj = document.createElement('div');
        obj.className = 'objectives';

        const heading = document.createElement('div');
        heading.className = 'objective-heading';
        heading.textContent = 'OBJECTIVES:';
        obj.appendChild(heading);

        const desc = document.createElement('div');
        desc.className = 'objective-description';
        const p = document.createElement('p');
        p.textContent = d.description || '';
        desc.appendChild(p);
        obj.appendChild(desc);

        return obj;
    }

    createSkillsSection(d) {
        const skills = document.createElement('div');
        skills.className = 'skills';

        const heading = document.createElement('div');
        heading.className = 'skills-heading';
        heading.textContent = 'SKILLS:';
        skills.appendChild(heading);

        const skillsItems = document.createElement('span');
        skillsItems.className = 'skills-items';
        (d.skills || []).forEach((s, i) => {
            const span = document.createElement('span');
            span.className = `skill-item${i+1}`;
            const li = document.createElement('li');
            li.textContent = s;
            span.appendChild(li);
            skillsItems.appendChild(span);
        });
        skills.appendChild(skillsItems);

        const otherSkillsHeading = document.createElement('div');
        otherSkillsHeading.className = 'other-skills-heading';
        otherSkillsHeading.innerHTML = '<u>Other Skills:</u>';
        skills.appendChild(otherSkillsHeading);

        const otherSkillsItems = document.createElement('span');
        otherSkillsItems.className = 'other-skills-items';
        (d.otherSkills || []).forEach((s, i) => {
            const span = document.createElement('span');
            span.className = `other-skill-item${i+1}`;
            const li = document.createElement('li');
            li.textContent = s;
            span.appendChild(li);
            otherSkillsItems.appendChild(span);
        });
        skills.appendChild(otherSkillsItems);

        return skills;
    }

    createLanguageSection(d) {
        const lang = document.createElement('div');
        lang.className = 'language';

        const heading = document.createElement('div');
        heading.className = 'language-heading';
        heading.textContent = 'LANGUAGE:';
        lang.appendChild(heading);

        const langItems = document.createElement('span');
        langItems.className = 'language-items';
        (d.languages || []).forEach((l, i) => {
            const span = document.createElement('span');
            span.className = `language-item${i+1}`;
            const li = document.createElement('li');
            li.textContent = l.name;
            span.appendChild(li);
            langItems.appendChild(span);
        });
        lang.appendChild(langItems);

        return lang;
    }

    createEducationSection(d) {
        const edu = document.createElement('div');
        edu.className = 'education';

        const heading = document.createElement('div');
        heading.className = 'education-heading';
        heading.textContent = 'EDUCATION:';
        edu.appendChild(heading);

        (d.education || []).forEach(e => {
            const edHead = document.createElement('div');
            edHead.className = 'educationheading';

            const year = document.createElement('span');
            year.className = 'educationyear';
            year.textContent = e.year || '';
            edHead.appendChild(year);

            const university = document.createElement('span');
            university.className = 'university';
            university.textContent = e.university || '';
            edHead.appendChild(university);

            const perc = document.createElement('span');
            perc.className = 'percentage';
            perc.textContent = e.percentage || '';
            edHead.appendChild(perc);

            const lists = document.createElement('div');
            lists.className = 'educationlists';

            const degree = document.createElement('span');
            degree.className = 'degree';
            degree.textContent = 'Degree:';
            lists.appendChild(degree);

            const degreeVal = document.createElement('span');
            degreeVal.textContent = e.degree || '';
            lists.appendChild(degreeVal);

            lists.appendChild(document.createElement('br'));

            const spec = document.createElement('span');
            spec.className = 'specialization';
            spec.textContent = 'Specialization:';
            lists.appendChild(spec);

            const specVal = document.createElement('span');
            specVal.textContent = e.specialization || '';
            lists.appendChild(specVal);

            edHead.appendChild(lists);
            edu.appendChild(edHead);
            edu.appendChild(document.createElement('br'));
        });

        return edu;
    }

    createExperienceSection(d) {
        const exp = document.createElement('div');
        exp.className = 'experience';

        const heading = document.createElement('div');
        heading.className = 'experince-heading';
        heading.textContent = 'EXPERIENCE:';
        exp.appendChild(heading);

        (d.experience || []).forEach(ex => {
            const detail = document.createElement('div');
            detail.className = 'experience-detail';

            const year = document.createElement('span');
            year.className = 'year';
            year.textContent = ex.year || '';
            detail.appendChild(year);

            const company = document.createElement('span');
            company.className = 'company';
            company.textContent = ex.company || '';
            detail.appendChild(company);

            const lists = document.createElement('div');
            lists.className = 'experiencelists';

            const role = document.createElement('span');
            role.className = 'role';
            role.textContent = 'Role:';
            lists.appendChild(role);

            const roleVal = document.createElement('span');
            roleVal.textContent = ex.role || '';
            lists.appendChild(roleVal);

            lists.appendChild(document.createElement('br'));

            const resp = document.createElement('span');
            resp.className = 'responsibilities';
            resp.textContent = 'Responsibilities:';
            lists.appendChild(resp);

            const ul = document.createElement('ul');
            (ex.responsibilities || []).forEach(r => {
                const li = document.createElement('li');
                li.textContent = r;
                ul.appendChild(li);
            });
            lists.appendChild(ul);

            detail.appendChild(lists);
            exp.appendChild(detail);
        });

        return exp;
    }

    createInterestSection(d) {
        const interest = document.createElement('div');
        interest.className = 'interest';

        const heading = document.createElement('div');
        heading.className = 'interest-heading';
        heading.textContent = 'INTEREST:';
        interest.appendChild(heading);

        const items = document.createElement('span');
        items.className = 'interest-items';
        (d.interests || []).forEach((i, idx) => {
            const span = document.createElement('span');
            span.className = `interest-item${idx+1}`;
            const li = document.createElement('li');
            li.textContent = i;
            span.appendChild(li);
            items.appendChild(span);
        });
        interest.appendChild(items);

        return interest;
    }

}

customElements.define('resume-viewer', Resume);

if (!window.customElementsList) window.customElementsList = [];
window.customElementsList.push({ component: 'resume-viewer', componentClass: Resume });
