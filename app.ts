/* ================= TypeScript ================= */
interface Job {
  id: number;
  title: string;
  company: string;
  salary: string;
  location: string;
  role: string;
  logo: string;
}

const jobs: Job[] = [
  {
    id: 1,
    title: "Frontend Developer",
    company: "TCS",
    salary: "₹6 LPA",
    location: "Chennai",
    role: "Developer",
    logo: "https://upload.wikimedia.org/wikipedia/commons/2/2f/Tata_Consultancy_Services_Logo.svg"
  },
  {
    id: 2,
    title: "Backend Developer",
    company: "Infosys",
    salary: "₹7 LPA",
    location: "Bangalore",
    role: "Developer",
    logo: "https://upload.wikimedia.org/wikipedia/commons/9/95/Infosys_logo.svg"
  },
  {
    id: 3,
    title: "UI Designer",
    company: "Wipro",
    salary: "₹5 LPA",
    location: "Hyderabad",
    role: "Designer",
    logo: "https://upload.wikimedia.org/wikipedia/commons/a/a0/Wipro_Primary_Logo_Color_RGB.svg"
  },
  {
    id: 4,
    title: "Project Manager",
    company: "HCL",
    salary: "₹10 LPA",
    location: "Pune",
    role: "Manager",
    logo: "https://upload.wikimedia.org/wikipedia/commons/5/5a/HCL_Technologies_logo.svg"
  },
  {
    id: 5,
    title: "Data Analyst",
    company: "Accenture",
    salary: "₹6 LPA",
    location: "Chennai",
    role: "Data Analyst",
    logo: "https://upload.wikimedia.org/wikipedia/commons/c/cd/Accenture.svg"
  },
  {
    id: 6,
    title: "Full Stack Developer",
    company: "Zoho",
    salary: "₹8 LPA",
    location: "Chennai",
    role: "Developer",
    logo: "https://upload.wikimedia.org/wikipedia/commons/0/01/Zoho-logo-web.svg"
  },
  {
    id: 7,
    title: "Software Tester",
    company: "Capgemini",
    salary: "₹5 LPA",
    location: "Bangalore",
    role: "Tester",
    logo: "https://upload.wikimedia.org/wikipedia/commons/9/9d/Capgemini_Logo.svg"
  },
  {
    id: 8,
    title: "UX Designer",
    company: "Adobe",
    salary: "₹9 LPA",
    location: "Delhi",
    role: "Designer",
    logo: "https://upload.wikimedia.org/wikipedia/commons/8/8d/Adobe_Corporate_Logo.png"
  },
  {
    id: 9,
    title: "Cloud Engineer",
    company: "Amazon",
    salary: "₹12 LPA",
    location: "Hyderabad",
    role: "Developer",
    logo: "https://upload.wikimedia.org/wikipedia/commons/a/a9/Amazon_logo.svg"
  },
  {
    id: 10,
    title: "AI Engineer",
    company: "Google",
    salary: "₹15 LPA",
    location: "Bangalore",
    role: "Developer",
    logo: "https://upload.wikimedia.org/wikipedia/commons/2/2f/Google_2015_logo.svg"
  }
];

let savedJobs: Job[] = [];

const jobList = document.getElementById("jobList") as HTMLElement;
const savedJobsList = document.getElementById("savedJobs") as HTMLElement;
const searchBar = document.getElementById("searchBar") as HTMLInputElement;
const companyFilter = document.getElementById("companyFilter") as HTMLSelectElement;
const roleFilter = document.getElementById("roleFilter") as HTMLSelectElement;
const locationFilter = document.getElementById("locationFilter") as HTMLSelectElement;

function displayJobs(jobArray: Job[], container: HTMLElement) {
  container.innerHTML = "";
  jobArray.forEach(job => {
    const card = document.createElement("div");
    card.className = "job-card";

    card.innerHTML = `
      <img src="${job.logo}" class="logo" />
      <h3>${job.title}</h3>
      <p><b>${job.company}</b></p>
      <p>💰 ${job.salary}</p>
      <p>📍 ${job.location}</p>
      <button class="apply-btn">Apply</button>
      <button class="save-btn" onclick="saveJob(${job.id})">Save</button>
    `;

    container.appendChild(card);
  });
}

function saveJob(id: number) {
  const job = jobs.find(j => j.id === id);
  if (job && !savedJobs.includes(job)) {
    savedJobs.push(job);
    displayJobs(savedJobs, savedJobsList);
  }
}

function populateCompanies() {
  const companies = [...new Set(jobs.map(j => j.company))];
  companies.forEach(c => {
    const option = document.createElement("option");
    option.value = c;
    option.textContent = c;
    companyFilter.appendChild(option);
  });
}

function filterJobs() {
  const text = searchBar.value.toLowerCase();
  const comp = companyFilter.value;
  const role = roleFilter.value;
  const loc = locationFilter.value;

  const filtered = jobs.filter(j =>
    j.title.toLowerCase().includes(text) &&
    (comp === "" || j.company === comp) &&
    (role === "" || j.role === role) &&
    (loc === "" || j.location === loc)
  );

  displayJobs(filtered, jobList);
}

searchBar.addEventListener("input", filterJobs);
companyFilter.addEventListener("change", filterJobs);
roleFilter.addEventListener("change", filterJobs);
locationFilter.addEventListener("change", filterJobs);

populateCompanies();
displayJobs(jobs, jobList);
