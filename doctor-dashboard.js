document.addEventListener('DOMContentLoaded', () => {
    // For demonstration, we assume one doctor is logged in and we show all content.
    // In a real app, you'd pass the doctor's ID and filter content accordingly.
    const doctorName = "Arogya Professionals"; // Placeholder name
    const allVideos = healthConditions; // Using the global healthConditions from script.js

    // --- Populate Stats ---
    document.getElementById('doctorName').textContent = doctorName;
    document.getElementById('totalVideos').textContent = allVideos.length;
    document.getElementById('totalConsultations').textContent = '1,250'; // Static for demo
    document.getElementById('totalEarnings').textContent = '$15,300'; // Static for demo

    // --- Populate Video List ---
    const videoListContainer = document.getElementById('doctorVideoList');
    videoListContainer.innerHTML = ''; // Clear any existing content

    if (allVideos.length > 0) {
        allVideos.forEach(video => {
            const videoItem = document.createElement('div');
            videoItem.className = 'video-item-doctor';

            // Extract YouTube video ID for thumbnail
            let videoId = '';
            try {
                const url = new URL(video.videoUrl);
                if (url.hostname === 'youtu.be') {
                    videoId = url.pathname.slice(1);
                } else if (url.hostname === 'www.youtube.com' && url.pathname === '/embed/') {
                    videoId = url.pathname.split('/')[2];
                }
            } catch (e) {
                console.error('Invalid video URL:', video.videoUrl);
            }
            
            const thumbnailUrl = videoId ? `https://img.youtube.com/vi/${videoId}/mqdefault.jpg` : '';

            videoItem.innerHTML = `
                <div class="video-thumbnail-wrapper">
                    <img src="${thumbnailUrl}" alt="Video thumbnail" class="video-thumbnail">
                    <div class="thumbnail-overlay">
                        <span class="material-icons play-icon">play_circle_filled</span>
                    </div>
                </div>
                <div class="video-info">
                    <h4>${video.name}</h4>
                    <p>Expert: ${video.expert}</p>
                </div>
                <div class="video-actions">
                    <button class="action-btn"><span class="material-icons">edit</span></button>
                    <button class="action-btn"><span class="material-icons">delete</span></button>
                    <button class="action-btn"><span class="material-icons">analytics</span></button>
                </div>
            `;
            videoListContainer.appendChild(videoItem);
        });
    } else {
        videoListContainer.innerHTML = '<p>No videos uploaded yet.</p>';
    }

    // --- Event Listeners ---
    const uploadBtn = document.querySelector('.upload-btn');
    if (uploadBtn) {
        uploadBtn.addEventListener('click', () => {
            alert('This feature is for demonstration purposes. In a real application, this would open an upload dialog.');
        });
    }

    const logoutBtn = document.getElementById('logoutBtnDoctor');
    if (logoutBtn) {
        logoutBtn.addEventListener('click', () => {
            // No session storage to clear for doctor, just redirect
            window.location.href = 'index.html';
        });
    }
}); 