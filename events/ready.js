const activities = [
  "With Balls",
  "Mid Simulator",
  "Without a dad",
  "ur mom"
];

module.exports = {
    name: "ready",
    run: async (bot) => {
      
      console.log("logged in as " + bot.client.user.tag)
      
      setInterval(() => {
        // generate random number between 1 and list length.
        const randomIndex = Math.floor(Math.random() * (activities.length - 1) + 1);
        const newActivity = activities[randomIndex];
    
        bot.client.user.setActivity(newActivity);
      }, 10000);
    }

  
      
      
     
     
    }


