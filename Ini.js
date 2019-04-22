// const request = async () => {
//   const response = await fetch('https://geek-jokes.sameerkumar.website/api');
//   const json = await response.json();
//   return json;
// }

const genRandomDate = () => {

  const cigs = [];
  function randomDate(start, end, startHour, endHour) {
    var date = new Date(+start + Math.random() * (end - start));
    var hour = startHour + Math.random() * (endHour - startHour);
    date.setHours(hour);
    date = date.toISOString();
    return date;
  }
  
  const start = new Date(2019, 0, 20);
  const end = new Date(2019, 3, 20);
  const startHour = 8;
  const endHour = 23;
  
  for (let i = 1; i < 230; i++) {
    let time = randomDate(start, end, startHour, endHour);
    let rated = Math.floor(Math.random() * 5) + 1;
    cigs.push({
      latitude: 41.3825,
      longitude: 2.17694,
      message: "this is a random message, random message, blalalal!",
      time: time,
      rating: rated
    })
  }
  
  cigs.sort(function(a,b){
    // Turn your strings into dates, and then subtract them
    // to get a value that is either negative, positive, or zero.
    return b.time - a.time;
  });
  console.log(cigs);
  return cigs;
  // console.log(cigs);
}
export default genRandomDate;