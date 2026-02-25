const postJobBtn = document.querySelector("#postJobBtn");
const companyGrid = document.querySelector("#companyGrid");
const jobCount = document.querySelector("#jobCount");
const companyNameInput = document.querySelector("#companyNameInput");
const companyFieldInput = document.querySelector("#companyFieldInput");
const formError = document.querySelector("#formError");

const searchInput = document.querySelector("#companySearchInput");
const searchBtn = document.querySelector("#searchBtn");

function updateJobCount() {
    const total = companyGrid.querySelectorAll(".company-card").length;
    jobCount.textContent = `Total Jobs: ${total}`;
}

function handleApply(button) {
    if (button.dataset.applied === "false") {
        button.textContent = "Applied";
        button.dataset.applied = "true";
        button.style.pointerEvents = "none";
        button.style.opacity = "0.6";
    }
}

function handleDelete(card) {
    card.remove();
    updateJobCount();
}

function attachCardEvents(card) {
    const applyBtn = card.querySelector(".apply-btn");
    const deleteBtn = card.querySelector(".delete-btn");

    applyBtn.addEventListener("click", function (e) {
        e.preventDefault();
        handleApply(applyBtn);
    });

    deleteBtn.addEventListener("click", function () {
        handleDelete(card);
    });
}

document.querySelectorAll(".company-card").forEach(card => {
    attachCardEvents(card);
});

postJobBtn.addEventListener("click", function () {

    const name = companyNameInput.value.trim();
    const field = companyFieldInput.value.trim();

    if (name === "" || field === "") {
        formError.textContent = "Please fill all fields!";
        return;
    }

    formError.textContent = "";

    const card = document.createElement("div");
    card.classList.add("company-card");
    card.setAttribute("data-company", name);

    card.innerHTML = `
        <h3>${name}</h3>
        <p>${field}</p>
        <div class="card-actions">
            <a href="#" class="apply-btn" data-applied="false">Apply</a>
            <button class="delete-btn">Delete</button>
        </div>
    `;

    companyGrid.appendChild(card);
    attachCardEvents(card);

    companyNameInput.value = "";
    companyFieldInput.value = "";

    updateJobCount();
});

function searchCompany() {
    const searchValue = searchInput.value.toLowerCase();
    const cards = document.querySelectorAll(".company-card");

    let found = false;

    cards.forEach(card => {
        const companyName = card.dataset.company.toLowerCase();

        if (companyName.includes(searchValue)) {
            card.style.display = "block";
            found = true;
        } else {
            card.style.display = "none";
        }
    });

    if (!found && searchValue !== "") {
        jobCount.textContent = "No company found";
    } else {
        updateJobCount();
    }
}

searchBtn.addEventListener("click", searchCompany);

searchInput.addEventListener("keyup", function (e) {
    if (e.key === "Enter") {
        searchCompany();
    }
});

updateJobCount();