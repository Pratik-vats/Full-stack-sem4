const postJobBtn = document.querySelector("#postJobBtn");
const companyGrid = document.querySelector("#companyGrid");
const jobCount = document.querySelector("#jobCount");

const companyNameInput = document.querySelector("#companyNameInput");
const companyFieldInput = document.querySelector("#companyFieldInput");

function updateJobCount() {
    const totalJobs = companyGrid.querySelectorAll(".company-card").length;
    jobCount.textContent = `Total Jobs: ${totalJobs}`;
}

postJobBtn.addEventListener("click", function () {
    const companyName = companyNameInput.value.trim();
    const companyField = companyFieldInput.value.trim();

    if (companyName === "" || companyField === "") {
        alert("Please fill all fields!");
        return;
    }

    const card = document.createElement("div");
    card.classList.add("company-card");

    card.innerHTML = `
        <h3>${companyName}</h3>
        <p>${companyField}</p>
        <div class="card-actions">
            <a href="#" class="apply-btn">Apply</a>
            <button class="delete-btn">Delete</button>
        </div>
    `;

    companyGrid.appendChild(card);

    const deleteBtn = card.querySelector(".delete-btn");
    const applyBtn = card.querySelector(".apply-btn");

    deleteBtn.addEventListener("click", function () {
        card.remove();
        updateJobCount();
    });

    applyBtn.addEventListener("click", function (e) {
        e.preventDefault();

        applyBtn.textContent = "Applied";
        applyBtn.style.pointerEvents = "none";
        applyBtn.style.opacity = "0.7";
    });

    companyNameInput.value = "";
    companyFieldInput.value = "";
    companyNameInput.focus();

    updateJobCount();
});

updateJobCount();
