const Discord = require('discord.js');
const prefix = ".";
const client = new Discord.Client();
const bot = new Discord.Client();

client.on("message", async message => {

client.on('ready', () => {
  console.log(`Logged in as ${client.user.username}!`);
  if(config.speed < 60000){console.log("The minimum speed is 60.000, if this gets abused your bot might get IP-banned"); process.exit(1);}
  setInterval(changeColor, config.speed);
});

client.on("guildMemberAdd", (member) => {
  const embed = new Discord.RichEmbed()
    .setColor(0x42f450)
    .addField(member.user.username, "a rejoint le serveur")
    .setFooter("Bienvenue " + member.user.tag)
  member.guild.channels.find("name", "bienvenue-aurevoir").send(embed);
});
client.on("guildMemberRemove", (member) => {
  const embed = new Discord.RichEmbed()
    .setColor(0xf44141)
    .addField(member.user.username, "a quitté le serveur")
    .setFooter("Au revoir " + member.user.tag)
  member.guild.channels.find("name", "bienvenue-aurevoir").send(embed);
});

client.login(process.env.BOT_TOKEN);
