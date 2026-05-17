        document.querySelectorAll('.card').forEach(card => {
      card.addEventListener('mousemove', e => {
        const rect = card.getBoundingClientRect();
        // Update CSS variables for the spotlight effect
        card.style.setProperty('--x', `${e.clientX - rect.left}px`);
        card.style.setProperty('--y', `${e.clientY - rect.top}px`);
      });
    });

    // ✅ Updated JS
const videoList = [
    document.getElementById('projectVideo1'),
    document.getElementById('projectVideo2'),
    document.getElementById('projectVideo3'),
    document.getElementById('projectVideo4')
];

videoList.forEach(function(video) {
    video.play(); // ensure autoplay starts

    video.addEventListener("mouseover", function() {
        video.play();   // resume if paused
    });

    video.addEventListener("mouseout", function() {
        video.pause();  // pause when not hovered
    });
});

// form handling
    document.getElementById('contactForm').addEventListener('submit', function(e) {
      e.preventDefault();
      
      // Show success message
      document.getElementById('successMessage').style.display = 'block';
      
      // Reset form
      this.reset();
      
      // Hide success message after 3 seconds
      setTimeout(function() {
        document.getElementById('successMessage').style.display = 'none';
      }, 3000);

    });
