class IssueComponent extends HTMLElement {
    static observedAttributes = ["config", "data"];

    defaultConfig = {
        formLabel: "form-label",
        formClass: "form-control",
        buttonClass: "btn btn-primary mt-3"
    };

    defaultData = [
        { label: "Enter Name", type: "text", placeholder: "Candidate Name", required: true },
        { label: "Enter profession", type: "text", placeholder: "profession", required: true },
        { label: "Enter description", type: "text", placeholder: "description", required: true },
        { label: "Enter phone", type: "number", placeholder: "Phone no.", required: true },
        { label: "Enter email", type: "email", placeholder: "Email", required: true },
        { label: "Enter location", type: "text", placeholder: "Location", required: true },
        { label: "Enter language", type: "text", placeholder: "language", required: true },
        { label: "Enter interest", type: "text", placeholder: "Interest", required: true },
        { label: "Enter skill", type: "text", placeholder: "Skill", required: true },
        { label: "Enter experience", type: "text", placeholder: "Experience", required: true },
        { label: "Enter education", type: "text", placeholder: "Education", required: true }
    ];

    config = {};
    data = [];

    constructor() {
        super();
        this.config = { ...this.defaultConfig };
        this.data = [...this.defaultData];
    }

    connectedCallback() {
        this.renderComponent();
        this.setupDynamicButtons();
    }

    attributeChangedCallback(name, oldValue, newValue) {
        try {
            if (name === "config" && typeof newValue === "string") {
                this.config = { ...this.config, ...JSON.parse(newValue) };
            }
            if (name === "data" && typeof newValue === "string") {
                this.data = JSON.parse(newValue);
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

customElements.define("issue-component", IssueComponent);
