document.addEventListener("DOMContentLoaded", function () {
    function animateProgress(progressElement, progressValueElement, endValue, color) {
        let progressStarted = false; // To prevent multiple triggers

        function startAnimation() {
            if (progressStarted) return; // Prevent re-triggering animation
            progressStarted = true;

            let startValue = 0;
            let speed = 20; // Adjust animation speed

            let progressInterval = setInterval(() => {
                if (startValue < endValue) {
                    startValue++;
                    progressValueElement.textContent = `${startValue}%`;
                    progressElement.style.background = `conic-gradient(${color} ${startValue * 3.6}deg, #ededed 0deg)`;
                } else {
                    clearInterval(progressInterval);
                }
            }, speed);
        }

        function resetAnimation() {
            progressElement.style.background = `conic-gradient(#ededed 0deg, #ededed 0deg)`;
            progressValueElement.textContent = `0%`;
            progressStarted = false;
        }

        // Start animation on hover
        progressElement.parentElement.addEventListener("mouseenter", startAnimation);

        // Reset when mouse leaves (optional)
        progressElement.parentElement.addEventListener("mouseleave", resetAnimation);
    }

    // Apply animation to each skill
    animateProgress(document.querySelector(".html-css"), document.querySelector(".html-progress"), 90, "#fca61f");
    animateProgress(document.querySelector(".javascript"), document.querySelector(".javascript-progress"), 75, "#6f34fe");
    animateProgress(document.querySelector(".php"), document.querySelector(".php-progress"), 80, "#20c997");
    animateProgress(document.querySelector(".reactjs"), document.querySelector(".reactjs-progress"), 30, "#3f396d");
});


// quotes generater
