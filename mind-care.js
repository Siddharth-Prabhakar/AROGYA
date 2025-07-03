document.addEventListener('DOMContentLoaded', () => {
    const backLink = document.getElementById('backLink');
    if (backLink) {
        backLink.addEventListener('click', (e) => {
            e.preventDefault();
            history.back();
        });
    }

    const logoutBtn = document.getElementById('logoutBtnMindCare');
    if (logoutBtn) {
        logoutBtn.addEventListener('click', () => {
            sessionStorage.removeItem('isLoggedIn');
            window.location.href = 'index.html';
        });
    }

    const symptomInput = document.getElementById('symptomInput');
    const analyzeBtn = document.getElementById('analyzeBtn');
    const resultContainer = document.getElementById('resultContainer');

    const analysisDatabase = {
        stress: {
            title: "Potential Stress and Anxiety",
            recommendation: "It sounds like you may be experiencing stress. Consider mindfulness, deep breathing exercises, or talking to a professional. Gentle exercise like yoga can also be beneficial."
        },
        sad: {
            title: "Potential Low Mood",
            recommendation: "Feelings of sadness are valid. It can be helpful to connect with friends or family, engage in a hobby you enjoy, or seek guidance from a mental health professional."
        },
        sleep: {
            title: "Potential Sleep Disruption",
            recommendation: "Difficulty sleeping can be challenging. Try to establish a regular sleep schedule, avoid caffeine before bed, and create a relaxing bedtime routine. If issues persist, a doctor can help."
        },
        headache: {
            title: "Regarding Headaches",
            recommendation: "Headaches can be caused by many factors, including stress, dehydration, or eye strain. Ensure you are drinking enough water and taking regular breaks from screens. If headaches are severe or frequent, consult a doctor."
        },
        default: {
            title: "General Wellness Guidance",
            recommendation: "Thank you for sharing. For general well-being, focus on a balanced diet, regular physical activity, and adequate sleep. For specific medical concerns, please consult with a healthcare professional."
        }
    };

    analyzeBtn.addEventListener('click', () => {
        const inputText = symptomInput.value.toLowerCase();
        let result = analysisDatabase.default;
        let isDefault = true;

        if (inputText.includes('stress') || inputText.includes('anxious')) {
            result = analysisDatabase.stress;
            isDefault = false;
        } else if (inputText.includes('sad') || inputText.includes('depressed')) {
            result = analysisDatabase.sad;
            isDefault = false;
        } else if (inputText.includes('sleep') || inputText.includes('tired')) {
            result = analysisDatabase.sleep;
            isDefault = false;
        } else if (inputText.includes('headache') || inputText.includes('migraine')) {
            result = analysisDatabase.headache;
            isDefault = false;
        }
        
        const titleHtml = isDefault
            ? `<span class="material-icons info-icon">info</span><h3>${result.title}</h3>`
            : `<h3>${result.title}</h3>`;

        resultContainer.style.display = 'block';
        resultContainer.innerHTML = `
            <div class="result-title-container">${titleHtml}</div>
            <p>${result.recommendation}</p>
            <div class="disclaimer-box">
                <p class="final-disclaimer">Disclaimer: This AI analysis is for informational purposes only and is not a substitute for professional medical advice, diagnosis, or treatment. Always seek the advice of your physician or other qualified health provider with any questions you may have regarding a medical condition.</p>
            </div>
        `;
    });
}); 