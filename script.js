// 1. Default timeframe to show on page load
let currentTimeframe = 'weekly';
// 2. Storage for fetched activity data
let activitiesData = [];

function getPreviousText(timeframe) {
  // 1. Switch statement to handle different timeframes
  switch (timeframe) {
    // 2. Return appropriate text for daily view
    case 'daily': return 'Yesterday';
    // 3. Return appropriate text for weekly view
    case 'weekly': return 'Last Week';
    // 4. Return appropriate text for monthly view
    case 'monthly': return 'Last Month';
    // 5. Fallback text for unknown timeframes
    default: return 'Previous';
  }
}

function renderActivities() {
  // 1. Find the container where activity cards will be displayed
  const container = document.querySelector('.dashboard__activities');
  // 2. Clear existing content to prevent duplicates
  container.innerHTML = '';

  // 3. Loop through each activity in the data
  activitiesData.forEach((activity, index) => {
    // 4. Destructure activity object for easier access
    const { title, timeframes } = activity;
    // 5. Get current hours for selected timeframe
    const current = timeframes[currentTimeframe].current;
    // 6. Get previous hours for selected timeframe
    const previous = timeframes[currentTimeframe].previous;

    // 7. Create new card element for this activity
    const card = document.createElement('div');
    // 8. Set CSS class using direct assignment (not add method)
    card.className = 'activity__card';
    // 9. Set background image using activity title
    card.style.backgroundImage = `url('/images/icon-${title.toLowerCase().replace(" ", "-")}.svg')`;

    // 10. Create HTML structure for the card content
    card.innerHTML = `
      <div class="activity__content">
        <div class="activity__header">
          <h3>${title}</h3>
          <button>
            <img src="/images/icon-ellipsis.svg" alt="" class="activity__ellipsis">
          </button>
        </div>
        <div class="activity__time">
          <span class="activity__current">${current}hrs</span>
          <span class="activity__previous">${getPreviousText(currentTimeframe)} - ${previous}hrs</span>
        </div>
      </div>
    `;

    // 11. Add the completed card to the container
    container.appendChild(card);
  });
}

async function loadData() {
  // 1. Start async function to handle network requests
  try {
    // 2. Fetch data from JSON file
    const response = await fetch('./data.json');
    // 3. Parse JSON response into JavaScript array
    activitiesData = await response.json();
    // 4. Initial render of activities with loaded data
    renderActivities();
  } catch (error) {
    // 5. Handle any network or parsing errors
    console.error('Error loading data:', error);
  }
}

function switchTimeframe(newTimeframe) {
  // 1. Update global variable to track selected timeframe
  currentTimeframe = newTimeframe;

  // 2. Remove active styling from all timeframe buttons
  document.querySelectorAll('.timeframe__btn').forEach(btn => {
    btn.classList.remove('timeframe__btn--active');
  });

  // 3. Add active styling to the clicked button
  document.querySelector(`[data-timeframe="${newTimeframe}"]`).classList.add('timeframe__btn--active');

  // 4. Re-render all activity cards with new timeframe data
  renderActivities();
}

document.addEventListener('DOMContentLoaded', () => {
  // 1. Load initial data when page is ready
  loadData();

  // 2. Find all timeframe buttons
  document.querySelectorAll('.timeframe__btn').forEach(btn => {
    // 3. Add click listener to each button
    btn.addEventListener('click', (e) => {
      // 4. Switch timeframe when button is clicked
      switchTimeframe(e.target.dataset.timeframe);
    });
  });
});
