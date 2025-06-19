# 📝 Resume Builder Web Component using Web Components

## 📌 Project Overview

This project is developed and maintained by **Maha Mission Education and Career Council (NGO)** under its skill-based learning initiative at **ApnaGuru.in**. Technical support is provided by **Apnasite IT Services Pvt. Ltd.**, offering:

✅ **Frontend training and mentorship**  
✅ **Deployment and versioning**  
✅ **Ongoing platform maintenance**

**🌐 Live Preview:**  
[https://resume.apnasite.in/](https://resume.apnasite.in/)  
**🧑‍🏫 Learn with Us:** [https://apnaguru.in](https://aapn.in/M7PM3JB5)  
**📢 NGO Info:** [https://mmeac.org](https://mmeac.org)  
**🏢 Company:** [https://apnasite.in](https://apnasite.in)  
**📞 Contact:** +91-8999417889 (Call/WhatsApp)

---

## 🧭 Goal

Create a **custom Web Component** called `<resume-builder>` that renders a professional resume using:

* ✅ **JavaScript’s DOM API** only (no external frameworks)
* ✅ **Web Components** (`class extends HTMLElement`)
* ✅ **Dynamic `data` and `config` attributes** for content and styling
* ✅ **Reusable structure** for any resume/CV use case
* ✅ **Bootstrap** and **flex layout** for responsive, clean design
* ✅ **No absolute positioning for content** (only for background design)
* ✅ **A4 page size** (`210mm x 297mm`), use only `pt` and `mm` units

---

## 🔗 Deployment Format

`https://services.apnasite.in/resume-assignments/[YourName_AssignmentNumber]/index.html`

**Example:**  
[https://services.apnasite.in/resume-assignments/Vilas_Shetkar/index.html](https://services.apnasite.in/resume-assignments/Vilas_Shetkar/index.html)

---

## 📁 Folder Structure

```
resume-assignments/
 ┣ 📂 SubmittedAssignments/
 ┃ ┗ 📂 [Your_Name_XX]/
 ┃    ┣ 📜 index.html        // Resume demo with dynamic content
 ┃    ┣ 📜 script.js           // JS Web Component for <resume-builder>
 ┃    ┣ 📜 data.json           // Sample JSON for 'data' and 'config'
 ┃    ┣ 📂 IMG/                // Profile images and assets
 ┃    ┣ 📂 css/                // Custom CSS (if required)
 ┃    ┗ 📂 fonts/              // Fonts (optional)
```

---

## 🧱 Component Specifications

### 🔸 `<resume-builder>` Web Component

A full A4-size resume component that dynamically displays:

* 👤 Profile Picture, Name, Contact Info
* 📝 Profile Summary / Description
* 🛠️ Skills and Languages
* 🎓 Education
* 💼 Projects (with links)
* 🌐 Social Links

### ✅ Attributes Accepted:

#### 1. `data` (JSON structure for resume content)

Includes:

* Personal details (`name`, `email`, `mobile`, `profilePicture`, etc.)
* Skills, languages, education, projects, social links, description

#### 2. `config` (Optional UI customization)

Includes:

* Class names for wrappers, sections, text, images, etc.
* Allows flexible theming of the layout

---

## 🎯 Functional Features

* 🧩 Fully encapsulated component using Shadow DOM
* ⚙️ Customization via `data` and `config` JSON
* 🔄 Live rendering on attribute change (`observedAttributes`)
* 📦 Bootstrap utility classes and flex layout for structure
* 📄 Strictly use `mm` and `pt` units for sizing (A4: 210mm x 297mm)
* 🚫 No absolute positioning for content (only for background design)

---

## 🧪 Example `data` Structure

```json
{
    "name": "Mahesh Bhosle",
    "profilePicture": "/api/download/apnaguru.in/default/mahi.jpg",
    "email": "mbbhosle061@gmail.com",
    "mobile": "+919665650029",
    "description": "I am a passionate software development student...",
    "profileLine": "Software Engineer",
    "skills": ["HTML 5", "CSS", "Bootstrap", "JavaScript", "TypeScript", "Angular", "NodeJS", "MongoDB"],
    "languages": [
        { "name": "English", "proficiency": "5" },
        { "name": "Marathi", "proficiency": "5" },
        { "name": "Hindi", "proficiency": "5" }
    ],
    "education": [
        {
            "course": { "degree": "Bca", "name": "Computer Science" },
            "university": { "name": "SRTMUN", "logo": "/api/download/apnaguru.in/default/SRTMUN_Logo_Official_Color_-PNG.png" },
            "startDate": "2021-03-04T06:08:00.000Z",
            "endDate": "2023-03-04T06:09:00.000Z"
        }
    ],
    "projects": [
        {
            "title": "AI Power Certificate Generator",
            "detailsOfProject": "This project enhanced my skills in layout design...",
            "skills": ["HTML 5", "CSS"],
            "links": [
                { "type": "Link", "url": "https://services.apnasite.in/certificate-assignments/Mahesh_Bhosle_69/index.html", "icon": "bi-eye-fill", "label": "preview" }
            ]
        }
        // ...more projects
    ],
    "socialLinks": [
        { "socialSite": "github", "profileUrl": "https://github.com/Bhosle07" },
        { "socialSite": "linkedin", "profileUrl": "https://www.linkedin.com/in/mahesh-bhosle-46959a302/" }
    ]
}
```

---

## 🧾 `form.json` Structure

Use `form.json` to define a **Formly-compatible** input form that includes:

* Data fields (for resume content)
* Config fields (for assigning Bootstrap classes)

---

## 🧪 Example DOM Structure (Resume Component)

```javascript
const resume = document.createElement("section");
resume.className = config.resumeClass || "d-flex flex-column p-4";
resume.style.width = "210mm";
resume.style.height = "297mm";

const header = document.createElement("div");
header.className = config.headerClass || "d-flex align-items-center mb-3";
header.style.height = "40mm";

const profileImg = document.createElement("img");
profileImg.src = data.profilePicture;
profileImg.style.height = "35mm";
profileImg.style.width = "35mm";
profileImg.style.objectFit = "cover";
profileImg.className = config.profileImgClass || "rounded-circle me-4";

header.appendChild(profileImg);
// ...append name, contact, etc.

resume.appendChild(header);
this.appendChild(resume);
```

---

## 🚀 Submission Process

### 1. 📦 Fork the Repository

👉 [https://github.com/Apnasite/resume-assignments](https://github.com/Apnasite/resume-assignments)

### 2. 💻 Clone Your Forked Repo

```bash
git clone https://github.com/YOUR_USERNAME/resume-assignments.git
```

### 3. 🧩 Create Your Assignment Folder

```bash
mkdir SubmittedAssignments/Your_Name_01
```

### 4. 🛠️ Copy and Build

Copy the sample folder structure and implement your solution inside `script.js`, `index.html`, and `form.json`.

### 5. ✅ Commit and Push

```bash
git add .
git commit -m "Added Resume Builder Assignment - Your_Name_01"
git push origin main
```

### 6. 🔃 Create Pull Request

After pushing your changes to your forked repository:

1. Go to your forked repository on GitHub.
2. Click the **"Compare & pull request"** button, or go to the "Pull requests" tab and click **"New pull request"**.
3. Set the base repository to `Apnasite/resume-assignments` and the base branch to `main`.
4. Compare with your fork and branch containing your assignment.
5. Add a clear title and description for your PR (e.g., "Added Resume Builder Assignment - Your_Name_01").
6. Review your changes, then click **"Create pull request"**.

Your submission will be reviewed and feedback will be provided if needed.

