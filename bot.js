const Discord = require('discord.js');
const prefix = "!";
const client = new Discord.Client();
const bot = new Discord.Client();

client.on("ready", () => {
    client.user.setActivity(prefix+"help | "+client.guilds.size+" serveurs | "+client.users.size+" utilisateurs")
    console.log(client.user.username+" ON!");
});

client.on("message", async message => {
  
});

client.login(process.env.BOT_TOKEN);
