function updateClock() {
    const now = new Date();
  
    const time = now.toLocaleTimeString('en-US', { hour12: false });
    const date = now.toLocaleDateString('en-US', {
      weekday: 'long',
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  
    document.getElementById('time').textContent = time;
    document.getElementById('date').textContent = date;
  }
  
  // Initial call
  updateClock();
  
  // Update every second
  setInterval(updateClock, 1000);
  