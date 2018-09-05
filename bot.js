const Discord = require('discord.js');
const prefix = "!";
const client = new Discord.Client();
const bot = new Discord.Client();

client.on("message", async message => {
  
});

bot.on("ready", () => {
    bot.user.setActivity(prefix+"help | "+bot.guilds.size+" serveurs | "+bot.users.size+" utilisateurs");
    console.log(bot.user.username+" ON - by Kalyax#4031");
})

client.login(process.env.BOT_TOKEN);
