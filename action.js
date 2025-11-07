// Sample fixture data
const fixtures = [
    {
        homeTeam: "Rugby Club",
        awayTeam: "Lions RFC",
        date: "2025-11-15",
        time: "15:00",
        venue: "Home Ground"
    },
    {
        homeTeam: "Eagles United",
        awayTeam: "Rugby Club",
        date: "2025-11-22",
        time: "14:30",
        venue: "Eagle Stadium"
    },
    {
        homeTeam: "Rugby Club",
        awayTeam: "Warriors XV",
        date: "2025-11-29",
        time: "16:00",
        venue: "Home Ground"
    }
];

// Function to display fixtures
function displayFixtures() {
    const fixturesContainer = document.getElementById('fixtures-container');
    
    fixtures.forEach(fixture => {
        const fixtureElement = document.createElement('div');
        fixtureElement.className = 'fixture-item';
        
        fixtureElement.innerHTML = `
            <div class="fixture-teams">
                ${fixture.homeTeam} vs ${fixture.awayTeam}
            </div>
            <div class="fixture-details">
                ${fixture.date} | ${fixture.time}
                <br>
                ${fixture.venue}
            </div>
        `;
        
        fixturesContainer.appendChild(fixtureElement);
    });
}

// Add smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const section = document.querySelector(this.getAttribute('href'));
        section.scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Initialize the fixtures display when the page loads
window.addEventListener('load', displayFixtures);

// Add animation to CTA button
const ctaButton = document.querySelector('.cta-button');
ctaButton.addEventListener('mouseover', () => {
    ctaButton.style.transform = 'scale(1.1)';
});
ctaButton.addEventListener('mouseout', () => {
    ctaButton.style.transform = 'scale(1)';
});

// Add click event to CTA button
ctaButton.addEventListener('click', () => {
    alert('Thank you for your interest! Join form coming soon.');
});