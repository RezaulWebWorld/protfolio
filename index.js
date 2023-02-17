function submitForm() {
    event.preventDefault()
    // Get the form element
    const form = document.querySelector('form');

                // Display a confirmation message to the user
                alert('Thank you for your message! We will get back to you as soon as possible.');

                // Reset the form
                form.reset();


}

var navLinks = document.querySelectorAll('nav a');

for (var i = 0; i < navLinks.length; i++) {
    navLinks[i].addEventListener('click', function(e) {
        e.preventDefault();
        var sectionId = this.getAttribute('href');
        var targetSection = document.querySelector(sectionId);
        var targetSectionPosition = targetSection.offsetTop;
        var currentPosition = window.pageYOffset;
        var distance = targetSectionPosition - currentPosition;
        var duration = 1000;
        var startTime = null;

        function animation(currentTime) {
            if (startTime === null) startTime = currentTime;
            var timeElapsed = currentTime - startTime;
            var run = ease(timeElapsed, currentPosition, distance, duration);
            window.scrollTo(0, run);
            if (timeElapsed < duration) requestAnimationFrame(animation);
        }

        function ease(t, b, c, d) {
            t /= d / 2;
            if (t < 1) return c / 2 * t * t + b;
            t--;
            return -c / 2 * (t * (t - 2) - 1) + b;
        }

        requestAnimationFrame(animation);
    });
}

