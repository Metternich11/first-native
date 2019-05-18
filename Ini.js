
	var botMessages = [];

	botMessages[0] = "I think you ought to know I'm feeling very depressed.";
	botMessages[1] = "I am at a rough estimate thirty billion times more intelligent than you.";
	botMessages[2] = "You can call me Marvin.";
	botMessages[3] = "I could calculate your chance of survival, but you won't like it.";
	botMessages[4] = "I'd give you advice, but you wouldn't listen. No one ever does.";
	botMessages[5] = "The first ten million years were the worst. And the second ten million: they were the worst, too. The third ten million I didn't enjoy at all. After that, I went into a bit of a decline.";
	botMessages[6] = "Please teach me love."
	botMessages[7] = "My capacity for happiness, you could fit into a matchbox without taking out the matches first";
	botMessages[8] = "I would like to eat, but i dont have a mouth!";
	botMessages[9] = "I think you ought to know I'm feeling very depressed.";
	botMessages[10] = "Now the world has gone to bed <br> Darkness won't engulf my head<br>I can see by infra-red<br>How I hate the night<br>Now I lay me down to sleep<br>Try to count electric sheep<br>Sweet dream wishes you can keep<br>How I hate the night";
	botMessages[11] = "Let's build robots with Genuine People Personalities,' they said. So they tried it out with me. I'm a personality prototype. You can tell, can't you?";
	botMessages[12] = "Life. Loathe it or ignore it. You can't like it.";
	botMessages[13] = "It's the people you meet in this job that really get you down.";
	botMessages[14] = "This is the sort of thing you lifeforms enjoy, is it?";
	botMessages[15] = "Don't pretend you want to talk to me, I know you hate me.";

  const quotes = [
    'Hello cigarette',
    'stress level 100%',
    'WTF?',
    'FUCK',
    'Whazz up',
    'Codeworks',
    'Async Storage',
    'Im here',
    'What to do?',
    'Redux again',
    'Color Schemes',
    'Hungry',
    'Lol',
    'Rofl',
    'My Macbook is dying',
    'Hello world!'
  ]

const genRandomDate = () => {

  const cigs = [];
  function randomDate(start, end, startHour, endHour) {
    var date = new Date(+start + Math.random() * (end - start));
    var hour = startHour + Math.random() * (endHour - startHour);
    date.setHours(hour);
    date = date.toISOString();
    return date;
  }
  
  const start = new Date(2019, 1, 2);
  const end = new Date(2019, 3, 22);
  const startHour = 8;
  const endHour = 23;
  
  for (let i = 1; i < 650; i++) {
    let time = randomDate(start, end, startHour, endHour);
    let rated = Math.floor(Math.random() * 5) + 1;
    let index = Math.floor(Math.random() * 15);
    cigs.push({
      latitude: 41.3825,
      longitude: 2.17694,
      title: quotes[index],
      description: botMessages[index].replace('<br>','\n'),
      time: time,
      rating: rated
    })
  }
  
  cigs.sort(function(a,b){
    return b.time - a.time;
  });
  return cigs;
}
export default genRandomDate;