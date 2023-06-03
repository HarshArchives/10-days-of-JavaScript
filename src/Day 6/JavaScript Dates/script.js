/**
 * @author geekyharsh05
 */

// The days of the week are: "Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"
function getDayName(dateString) {
    // Define an array `daysOfWeek` with the names of the days of the week
    const daysOfWeek = ['Sunday', 'Monday', 'Tuesday', 'Wednesday','Thursday', 'Friday', 'Saturday']; 
    const date = new Date(dateString);
    const dayIndex = date.getDay();
    const dayName = daysOfWeek[dayIndex];

    return dayName;  
}