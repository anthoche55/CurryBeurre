const Discord = require('discord.js');
const prefix = ".";
const client = new Discord.Client();
const bot = new Discord.Client();

client.on("message", async message => {
  
});

client.login(process.env.BOT_TOKEN);
