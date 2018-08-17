const Discord = require('discord.js');
const prefix = ".";
const client = new Discord.Client();
const bot = new Discord.Client();

client.on('ready', () => {
    console.log('I am ready!');
    client.user.setStatus('idle')
});

client.on("message", async message => {

if(message.content.startsWith(prefix + "sid")) {
	message.channel.send(message.guild.id)
}

if(message.content.startsWith(prefix + "ron")) {
	if(message.guild.id !== "456852882571001868") return message.reply("Cette commande est privée")
		if(message.author.id == "252873409401323520") {
		const embed = new Discord.RichEmbed()
		  .setTitle("Recrutements [ON]")
		  .setDescription("Nous recrutons des modérateurs\n	- Âge ?\n	- Depuis quand êtes vous arrivés sur ce serveur ?\n	- Pourquoi sur ce serveur ?\n	- Pourquoi vous et pas un autre ?\n	- Quelles sont vos qualités ?\n	- Ne pas faire de fautes d'orthographe\n- Preuves que vous savez comment modérer");
		message.channel.send("@everyone")
		message.channel.send(embed)
		message.delete()
		}
}
	
var args = message.content.slice(prefix.length).trim().split(/ +/g);
let code = args.join(' ');
	
});

const config = require('./config.json');

const size    = config.colors;
const rainbow = new Array(size);

for (var i=0; i<size; i++) {
  var red   = sin_to_hex(i, 0 * Math.PI * 2/3); // 0   deg
  var blue  = sin_to_hex(i, 1 * Math.PI * 2/3); // 120 deg
  var green = sin_to_hex(i, 2 * Math.PI * 2/3); // 240 deg

  rainbow[i] = '#'+ red + green + blue;
}

function sin_to_hex(i, phase) {
  var sin = Math.sin(Math.PI / size * 2 * i + phase);
  var int = Math.floor(sin * 127) + 128;
  var hex = int.toString(16);

  return hex.length === 1 ? '0'+hex : hex;
}

let place = 0;
const servers = config.servers;

function changeColor() {
  for (let index = 0; index < servers.length; ++index) {		
    client.guilds.get(servers[index]).roles.find('name', config.roleName).setColor(rainbow[place])
		.catch(console.error);
		
    if(config.logging){
      console.log(`[ColorChanger] Changed color to ${rainbow[place]} in server: ${servers[index]}`);
    }
    if(place == (size - 1)){
      place = 0;
    }else{
      place++;
    }
  }
}

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
