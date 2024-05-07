import React, { useState, useEffect } from 'react';
import confetti from 'canvas-confetti'; // Optional: confetti effect library for celebration

function CheckIn() {
  const [streak, setStreak] = useState(0);
  const [achievements, setAchievements] = useState([]);
  const milestoneAchievements = [3, 5, 10]; // Define milestone streaks for achievements

  // Handle check-in logic and calculate streak
  const handleCheckIn = () => {
    // Get today's date
    const today = new Date().toISOString().split('T')[0];
  
    // Retrieve existing check-ins from local storage
    let existingCheckIns = JSON.parse(localStorage.getItem('checkIns')) || [];
  
    // Check if the user has already checked in today
    if (existingCheckIns.includes(today)) {
      console.log('User has already checked in today');
      return; // No need to check in again
    }
  
    // Add today's date to the check-ins array
    existingCheckIns.push(today);
    localStorage.setItem('checkIns', JSON.stringify(existingCheckIns));
  
    // Calculate the current streak
    let currentStreak = 3;
  
    for (let i = existingCheckIns.length - 2; i >= 0; i--) {
      const prevDate = new Date(existingCheckIns[i]);
      const currentDate = new Date(existingCheckIns[i + 1]);
      const differenceInDays = (currentDate - prevDate) / (1000 * 60 * 60 * 24);
  
      if (differenceInDays === 1) {
        currentStreak++;
      } else {
        break;
      }
    }
  
    // Update the state with the new streak
    setStreak(currentStreak);
  
    // Check for milestones
    if ([3, 5, 10].includes(currentStreak)) {
      console.log(`Achieved ${currentStreak} days in a row!`);
      confetti()
    }
  };
  
  // Fetch check-in data and calculate the current streak when the component mounts
  useEffect(() => {
    const checkIns = JSON.parse(localStorage.getItem('checkIns')) || [];

    // Calculate current streak
    let currentStreak = 0;
    for (let i = checkIns.length - 1; i > 0; i--) {
      const currentDate = new Date(checkIns[i]);
      const prevDate = new Date(checkIns[i - 1]);
      const daysBetween = (currentDate - prevDate) / (1000 * 60 * 60 * 24);

      if (daysBetween === 1) {
        currentStreak += 1;
      } else {
        break;
      }
    }

    setStreak(currentStreak);
  }, []);

  return (
    <div className="p-4">
      <h2 className="text-2xl font-bold mb-4">Check-In System</h2>
      <button
        onClick={handleCheckIn}
        className="bg-blue-500 text-white rounded px-4 py-2 hover:bg-blue-600"
      >
        Check In
      </button>
      <div className="mt-4">
        <h3 className="text-xl font-semibold">Your Streak</h3>
        <div className="flex items-center mt-2">
          <p className="text-3xl font-bold">{streak}</p>
          <p className="text-lg ml-2">days in a row</p>
        </div>
        <div className="mt-2">
          {achievements.map((achievement, index) => (
            <div key={index} className="bg-green-500 text-white rounded-full px-4 py-2 mt-2">
              {achievement}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default CheckIn;
