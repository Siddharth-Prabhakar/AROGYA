// Health Data
const healthConditions = [{
    name: "Diabetes Management",
    expert: "Dr.Bijoy chandra chatrjee",
    desc: "Comprehensive diabetes care plans",
    videoUrl: "https://www.youtube.com/embed/hf9wA_A-17w",
    icon: "bloodtype",
    avatar: "https://i.pravatar.cc/40?u=doc1"
},
{
    name: "Cardiac Care",
    expert: "Dr.siddharth ",
    desc: "Advanced heart health monitoring",
    videoUrl: "https://www.youtube.com/embed/br3tANiQ2bU",
    icon: "favorite",
    avatar: "https://i.pravatar.cc/40?u=doc2"
},
{
    name: "Mental Wellness",
    expert: "Dr.saksham",
    desc: "Stress and anxiety management",
    videoUrl: "https://www.youtube.com/embed/NQc2-A-3J2I",
    icon: "psychology",
    avatar: "https://i.pravatar.cc/40?u=doc3"
},
{
    name: "Pediatric Care",
    expert: "Dr. Arjun Mehta",
    desc: "Child health specialists",
    videoUrl: "https://www.youtube.com/embed/qotmyy83b2I",
    icon: "child_care",
    avatar: "https://i.pravatar.cc/40?u=doc4"
},
{
    name: "Women's Health",
    expert: "Dr. Neha Sharma",
    desc: "Complete women's wellness",
    videoUrl: "https://www.youtube.com/embed/E4EaRk6r_SM?si=OCdyPG9eGIQB9N3G",
    icon: "woman",
    avatar: "https://i.pravatar.cc/40?u=doc5"
},
{
    name: "Chronic Pain",
    expert: "Dr. Amit Patel",
    desc: "Pain management solutions",
    videoUrl: "https://www.youtube.com/embed/5aK-6_v1y0M",
    icon: "personal_injury",
    avatar: "https://i.pravatar.cc/40?u=doc6"
},
{
    name: "Respiratory Care",
    expert: "Dr. Deepak Joshi",
    desc: "Lung health specialists",
    videoUrl: "https://www.youtube.com/embed/ZSPIPjQ50aY",
    icon: "lung",
    avatar: "https://i.pravatar.cc/40?u=doc7"
},
{
    name: "Nutrition Guidance",
    expert: "Dr. Sneha Reddy",
    desc: "Dietary planning experts",
    videoUrl: "https://www.youtube.com/embed/yv_1qg5u9pI",
    icon: "restaurant",
    avatar: "https://i.pravatar.cc/40?u=doc8"
},
{
    name: "Sleep Disorders",
    expert: "Dr. Vikram Gupta",
    desc: "Sleep quality improvement",
    videoUrl: "https://www.youtube.com/embed/qHIXA4QJj2s",
    icon: "hotel",
    avatar: "https://i.pravatar.cc/40?u=doc9"
},
{
    name: "Bone Health",
    expert: "Dr. Anjali Kapoor",
    desc: "Osteoporosis prevention",
    videoUrl: "https://www.youtube.com/embed/aD54i7imDwI",
    icon: "self_improvement",
    avatar: "https://i.pravatar.cc/40?u=doc10"
},
{
    name: "Dermatology",
    expert: "Dr. Priya Singh",
    desc: "Skin health and acne treatment",
    videoUrl: "https://www.youtube.com/embed/F6e7-L9p_tA",
    icon: "face",
    avatar: "https://i.pravatar.cc/40?u=doc11"
},
{
    name: "Gastroenterology",
    expert: "Dr. Rajesh Kumar",
    desc: "Digestive health and disorders",
    videoUrl: "https://www.youtube.com/embed/Z4o_S2zBqfI",
    icon: "stomach",
    avatar: "https://i.pravatar.cc/40?u=doc12"
}
];

// Medicine Data
const trendingMedicines = [{
    name: "Paracetamol",
    description: "Relieves fever and pain.",
    videoUrl: "https://www.youtube.com/embed/V4gGjYjG8ks",
    icon: "medication"
},
{
    name: "Amoxicillin",
    description: "Treats bacterial infections.",
    videoUrl: "https://www.youtube.com/embed/sLq2nEaRj5M",
    icon: "medication"
},
{
    name: "Loratadine",
    description: "Antihistamine for allergies.",
    videoUrl: "https://www.youtube.com/embed/L13I9yQbbIQ",
    icon: "medication"
},
{
    name: "Omeprazole",
    description: "Reduces stomach acid production.",
    videoUrl: "https://www.youtube.com/embed/JBhB0-j21aM",
    icon: "medication"
},
{
    name: "Simvastatin",
    description: "Lowers cholesterol levels.",
    videoUrl: "https://www.youtube.com/embed/84M7_KqJfls",
    icon: "medication"
},
{
    name: "Metformin",
    description: "Manages blood sugar levels.",
    videoUrl: "https://www.youtube.com/embed/Yt1mFqA_gMA",
    icon: "medication"
},
{
    name: "Aspirin",
    description: "Pain relief and anti-inflammatory.",
    videoUrl: "https://www.youtube.com/embed/k0l5bC3xcpA",
    icon: "medication"
},
{
    name: "Ibuprofen",
    description: "Reduces pain and inflammation.",
    videoUrl: "https://www.youtube.com/embed/QJjLddJ5a0w",
    icon: "medication"
},
{
    name: "Cetirizine",
    description: "Treats allergy symptoms.",
    videoUrl: "https://www.youtube.com/embed/3TawzB8Cg_I",
    icon: "medication"
},
{
    name: "Vitamin D",
    description: "Supports bone health.",
    videoUrl: "https://www.youtube.com/embed/2h6wcsodg2s",
    icon: "medication"
},
{
    name: "Lisinopril",
    description: "Treats high blood pressure.",
    videoUrl: "https://www.youtube.com/embed/dummy_video_1",
    icon: "medication"
},
{
    name: "Atorvastatin",
    description: "Lowers cholesterol.",
    videoUrl: "https://www.youtube.com/embed/dummy_video_2",
    icon: "medication"
}
];

// Passwords (for demonstration purposes only, store securely in a real application)
const passwords = {
    patient: "123",
    doctor: "123"
};

// Initialize App
function initializeApp() {
    if (sessionStorage.getItem('isLoggedIn') === 'true') {
        document.getElementById('loginPage').style.display = 'none';
        document.getElementById('mainPage').style.display = 'block';
        document.getElementById('askAiBtn').style.display = 'inline-block';
    } else {
        document.getElementById('loginPage').style.display = 'flex';
    }

    // Initialize health boxes
    initializeHealthBoxes();
    // Initialize medicine boxes
    initializeMedicineBoxes();

    // Carousel Controls
    const setupCarousel = (containerId, prevId, nextId, paginationId) => {
        const container = document.getElementById(containerId);
        const prevBtn = document.getElementById(prevId);
        const nextBtn = document.getElementById(nextId);
        const paginationContainer = document.getElementById(paginationId);

        if (container && prevBtn && nextBtn && paginationContainer) {
            if (container.children.length === 0) return; // Guard against empty containers
            
            paginationContainer.innerHTML = ''; // Clear existing dots

            const itemCount = container.children.length;
            const scrollAmount = container.querySelector('.health-box, .medicine-box').offsetWidth + 15;
            let dots = [];

            // Create pagination dots
            for (let i = 0; i < itemCount; i++) {
                const dot = document.createElement('button');
                dot.classList.add('pagination-dot');
                dot.addEventListener('click', () => {
                    container.scrollTo({
                        left: i * scrollAmount,
                        behavior: 'smooth'
                    });
                });
                paginationContainer.appendChild(dot);
                dots.push(dot);
            }

            const updatePagination = () => {
                const currentIndex = Math.round(container.scrollLeft / scrollAmount);
                dots.forEach((dot, index) => {
                    dot.classList.toggle('active', index === currentIndex);
                });
            };
            
            nextBtn.addEventListener('click', () => {
                container.scrollBy({ left: scrollAmount, behavior: 'smooth' });
            });
            prevBtn.addEventListener('click', () => {
                container.scrollBy({ left: -scrollAmount, behavior: 'smooth' });
            });

            container.addEventListener('scroll', debounce(updatePagination, 100));
            // Initial call
            updatePagination();
        }
    };

    setupCarousel('healthScroll', 'healthPrev', 'healthNext', 'healthPagination');
    setupCarousel('medicineScroll', 'medicinePrev', 'medicineNext', 'medicinePagination');
}

// Show Consultation
 // Show Consultation (Video and Expert Info)
 function showConsultation(condition) {
    const modalContent = document.querySelector('.modal-content');
    modalContent.innerHTML = `
        <button class="close-btn" onclick="closeConsultationModal()">×</button>
        <h3 id="diseaseTitle">${condition.name}</h3>
        <div class="video-container">
            <iframe 
                width="100%" 
                height="315" 
                src="${condition.videoUrl}" 
                frameborder="0" 
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                allowfullscreen>
            </iframe>
        </div>
        <div class="expert-info">
            <h4>Verified by:</h4>
            <p id="expertName">${condition.expert}</p>
            <p id="expertCredentials">MD, General Medicine</p>
            <p>12+ years experience</p>
        </div>
        <button class="role-btn patient-btn" onclick="showConsultationForm()">
            Get Consultation
        </button>
        <div id="consultationFormContainer"></div>
    `;

    document.getElementById('consultationModal').style.display = 'flex';
}

// Function to close the modal when "X" is clicked
function closeConsultationModal() {
    document.getElementById('consultationModal').style.display = 'none';
}


// Function to close the modal when "Cancel" is clicked
function closeConsultationModal() {
    document.getElementById('consultationModal').style.display = 'none';
}


    


// Show Consultation Form
function showConsultationForm() {
    const formContainer = document.getElementById('consultationFormContainer');
    formContainer.innerHTML = `
        <form class="consultation-form" onsubmit="scheduleConsultation(event)">
            <h4>Schedule Consultation</h4>
            <div class="form-group">
                <label for="fullName">Full Name:</label>
                <input type="text" id="fullName" placeholder="Full Name" required>
                <div id="fullNameError" class="error-message"></div>
            </div>
            <div class="form-group">
                <label for="age">Age:</label>
                <input type="number" id="age" placeholder="Age" min="1" required>
                <div id="ageError" class="error-message"></div>
            </div>
            <div class="form-group">
                <label for="gender">Gender:</label>
                <select id="gender" required>
                    <option value="">Select Gender</option>
                    <option>Male</option>
                    <option>Female</option>
                    <option>Other</option>
                </select>
                <div id="genderError" class="error-message"></div>
            </div>
            <div class="form-group form-group-textarea">
                <label for="concerns">Health Concerns:</label>
                <textarea id="concerns" placeholder="Describe your health concerns..." rows="3" required></textarea>
                <div id="concernsError" class="error-message"></div>
            </div>
            <div class="form-group">
                <label for="dateTime">Date and Time:</label>
                <input type="datetime-local" id="dateTime" required>
                <div id="dateTimeError" class="error-message"></div>
            </div>
            <button type="submit" class="role-btn patient-btn">
                Schedule Consultation
            </button>
        </form>
    `;
}

// Schedule Consultation Form Submission
function scheduleConsultation(event) {
    event.preventDefault();

    // Validate form
    if (!validateForm()) {
        return;
    }

    // Get form values
    const fullName = document.getElementById('fullName').value;
    const age = document.getElementById('age').value;
    const gender = document.getElementById('gender').value;
    const concerns = document.getElementById('concerns').value;
    const dateTime = document.getElementById('dateTime').value;

    // Format date and time
    const formattedDateTime = new Date(dateTime).toLocaleString();

    // Set confirmation popup values
    document.getElementById('confirmName').textContent = fullName;
    document.getElementById('confirmAge').textContent = age;
    document.getElementById('confirmGender').textContent = gender;
    document.getElementById('confirmConcerns').textContent = concerns;
    document.getElementById('confirmDateTime').textContent = formattedDateTime;

    // Show confirmation popup
    document.getElementById('confirmationPopup').style.display = 'block';

    // Optionally hide modal
    document.getElementById('consultationModal').style.display = 'none';
}

// Form Validation
function validateForm() {
    let isValid = true;

    // Reset error messages
    resetErrorMessages();

    // Full Name validation
    const fullName = document.getElementById('fullName').value.trim();
    if (fullName === '') {
        displayErrorMessage('fullName', 'Full Name is required');
        isValid = false;
    } else if (!/^[a-zA-Z\s]+$/.test(fullName)) {
        displayErrorMessage('fullName', 'Full Name must contain only letters and spaces');
        isValid = false;
    }

    // Age validation
    const age = document.getElementById('age').value;
    if (age === '') {
        displayErrorMessage('age', 'Age is required');
        isValid = false;
    } else if (isNaN(age) || age < 1 || age > 120) {
        displayErrorMessage('age', 'Age must be a number between 1 and 120');
        isValid = false;
    }

    // Gender validation
    const gender = document.getElementById('gender').value;
    if (gender === '') {
        displayErrorMessage('gender', 'Gender is required');
        isValid = false;
    }

    // Concerns validation
    const concerns = document.getElementById('concerns').value.trim();
    if (concerns === '') {
        displayErrorMessage('concerns', 'Health Concerns are required');
        isValid = false;
    }

    // Date and Time validation
    const dateTime = document.getElementById('dateTime').value;
    if (dateTime === '') {
        displayErrorMessage('dateTime', 'Date and Time are required');
        isValid = false;
    } else if (new Date(dateTime) <= new Date()) {
        displayErrorMessage('dateTime', 'Date and Time must be in the future');
        isValid = false;
    }

    return isValid;
}

// Display Error Message
function displayErrorMessage(fieldId, message) {
    const errorDivId = fieldId + 'Error';
    document.getElementById(errorDivId).textContent = message;
}

// Reset Error Messages
function resetErrorMessages() {
    const errorMessages = document.querySelectorAll('.error-message');
    errorMessages.forEach(message => {
        message.textContent = '';
    });
}

// Close Confirmation Popup
function closeConfirmation() {
    document.getElementById('confirmationPopup').style.display = 'none';
    document.getElementById('consultationModal').style.display = 'none';
}

// Create medicine Boxes
function initializeMedicineBoxes() {
    const container = document.getElementById('medicineScroll');
    container.innerHTML = '';
    trendingMedicines.forEach(medicine => {
        const box = document.createElement('div');
        box.className = 'medicine-box';
        box.setAttribute('tabindex', '0');
        box.innerHTML = `
            <div class="card-icon-container">
                <span class="material-icons card-icon">${medicine.icon}</span>
            </div>
            <div class="card-content">
                <h4>${medicine.name}</h4>
                <p>${medicine.description}</p>
                <div class="learn-more">
                    <span>Learn more</span>
                    <span class="material-icons">arrow_forward</span>
                </div>
            </div>
        `;
        box.onclick = () => showConsultation(medicine);
        box.onkeydown = (e) => { if (e.key === 'Enter' || e.key === ' ') { showConsultation(medicine); } };
        container.appendChild(box);
    });
}

// Create Health Boxes
function initializeHealthBoxes() {
    const container = document.getElementById('healthScroll');
    container.innerHTML = '';
    healthConditions.forEach((condition, index) => {
        const box = document.createElement('div');
        box.className = 'health-box';
        box.setAttribute('tabindex', '0');

        const isTopRated = index < 3; // Make first 3 doctors "Top Rated" for demo

        box.innerHTML = `
            <div class="card-icon-container">
                 <span class="material-icons card-icon">${condition.icon}</span>
            </div>
            <div class="card-content">
                <h4>${condition.name}</h4>
                <p>${condition.desc}</p>
                <div class="expert-info-container">
                    <img src="${condition.avatar}" alt="Doctor" class="doctor-avatar">
                    <div class="expert-tag">
                        ${condition.expert}
                    </div>
                    ${isTopRated ? '<span class="top-rated-badge">Top Rated</span>' : ''}
                </div>
            </div>
            <span class="material-icons card-arrow">arrow_forward</span>
        `;
        box.onclick = () => showConsultation(condition);
        box.onkeydown = (e) => { if (e.key === 'Enter' || e.key === ' ') { showConsultation(condition); } };
        container.appendChild(box);
    });
}

// Show Main Page
function showMainPage(role) {
    const password = document.getElementById('password').value;
    if (passwords[role] === password) {
        if (role === 'doctor') {
            window.location.href = 'doctor-dashboard.html'; // Redirect to doctor dashboard
        } else {
            sessionStorage.setItem('isLoggedIn', 'true');
            document.getElementById('loginPage').style.display = 'none';
            document.getElementById('mainPage').style.display = 'block';
            document.getElementById('askAiBtn').style.display = 'inline-block'; // Show "Ask AI" button on login
        }
    } else {
        alert('Incorrect password. Please try again.');
    }
}

// Search Suggestions
 // Debounce function to delay processing while typing
function debounce(func, delay) {
    let timer;
    return function(...args) {
      clearTimeout(timer);
      timer = setTimeout(() => {
        func.apply(this, args);
      }, delay);
    };
  }
  
  // Improved search handler using debounce
  function handleSearchInput(e) {
    const searchTerm = e.target.value.toLowerCase().trim();
    const suggestions = document.getElementById('suggestions');
    suggestions.innerHTML = ''; // Clear previous suggestions
  
    if (searchTerm.length > 0) {
      // Filter health conditions based on search term (name and description)
      const filtered = healthConditions.filter(condition =>
        condition.name.toLowerCase().includes(searchTerm) ||
        condition.desc.toLowerCase().includes(searchTerm)
      );
  
      if (filtered.length > 0) {
        filtered.forEach(condition => {
          const div = document.createElement('div');
          div.className = 'suggestion-item';
          div.textContent = condition.name;
          div.onclick = () => {
            document.getElementById('searchInput').value = condition.name;
            suggestions.style.display = 'none';
            showConsultation(condition); // Show consultation details if desired
          };
          suggestions.appendChild(div);
        });
        suggestions.style.display = 'block';
      } else {
        suggestions.style.display = 'none';
      }
    } else {
      suggestions.style.display = 'none';
    }
  }
  
  // Attach debounced event listener to the search input
  document.getElementById('searchInput').addEventListener('input', debounce(handleSearchInput, 300));
  


// Initialize when the DOM is fully loaded
document.addEventListener('DOMContentLoaded', () => {
    initializeApp();

    const searchForm = document.getElementById('searchForm');
    if (searchForm) {
        searchForm.addEventListener('submit', (e) => {
            e.preventDefault();
            const searchTerm = document.getElementById('searchInput').value;
            if (searchTerm.trim()) {
                window.location.href = `video-list.html?search=${encodeURIComponent(searchTerm)}`;
            }
        });
    }

    // FAB
    const fab = document.getElementById('askAiBtn');
    if (fab) {
        fab.addEventListener('click', () => {
            window.location.href = 'mind-care.html';
        });
    }

    // Logout Button
    const logoutBtnPatient = document.getElementById('logoutBtnPatient');
    if (logoutBtnPatient) {
        logoutBtnPatient.addEventListener('click', () => {
            sessionStorage.removeItem('isLoggedIn');
            window.location.href = 'index.html';
        });
    }

    // Password Toggle
    const togglePassword = document.getElementById('togglePassword');
    if (togglePassword) {
        togglePassword.addEventListener('click', () => {
            const passwordInput = document.getElementById('password');
            const type = passwordInput.getAttribute('type') === 'password' ? 'text' : 'password';
            passwordInput.setAttribute('type', type);
            togglePassword.textContent = type === 'password' ? 'visibility_off' : 'visibility';
        });
    }
});