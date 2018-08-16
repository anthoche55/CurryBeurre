const Discord = require('discord.js');
const prefix = "c&";
const client = new Discord.Client();
const bot = new Discord.Client();
const { get } = require("snekfetch"); 
const randomPuppy = require('random-puppy');
const embedcolor = 0xe54242;
const hexcols = 0xe54242;
var util = require('util')
var utils = require('bot-utils')
const ms = require("ms");

let fonda = [
	"252873409401323520"
];
let admin = [
	"308195368427061248"
];

client.on('ready', () => {
    console.log('I am ready!');
    client.user.setStatus('idle')
    client.user.setPresence({ game: { name: `&help | ${client.guilds.size} serveurs | ${client.users.size} membres`, type: 0 }});
});

client.on("message", async message => {
	
let totalSeconds = (client.uptime / 1000);
let hours = Math.floor(totalSeconds / 3600);
totalSeconds %= 3600;
let minutes = Math.floor(totalSeconds / 60);
let seconds = totalSeconds % 60;

let uptime = `${hours} hours, ${minutes} minutes and ${seconds} seconds`;

const uptime1 = new Discord.RichEmbed()
	.setTitle("Uptime du bot")
	.setDescription(uptime)

if(message.content.startsWith(prefix + "sid")) {
	message.channel.send(message.guild.id)
}
	
if(message.content.startsWith(prefix + "slist")) {
	const embed = new Discord.RichEmbed()
	.setTitle(`Je suis sur ${client.guilds.size} serveurs, voici la liste :`)
	.setDescription(client.guilds.map(g=>g.name).join('\n'))

	message.channel.send({ embed: embed })
}

var answers = [
  "Comment faire pleurer un plombier ? En tuant toute sa famille.",
  "C'est l'histoire du ptit dej, vous la connaissez ? Pas de bol.",
  "Un monsieur visite un musée. Soudain il s'arrête et dit au guide :  \n- Ah, c'est moche ! \n- C'est du Picasso, répond le guide. \nPlus loin, il s'écrie de nouveau : \n- Ah, c'est vraiment moche ! \n- Ca Monsieur, c'est un miroir !",
  "C'est l'histoire du nain aux 26 enfants. \nElle est courte mais elle est bonne.",
  "C'est l'histoire d'un pingouin qui respire par les fesses. \nUn jour il s’assoit et il meurt.",
  "Un fils demande à son père : \n- Papa,c'est quoi la beauté? \n- Tu vois ta mère ? \n- Oui \n- Et ben c'est pas ça!",
  "Un chien et un homme son sur un bateau. Le chien pète, l'homme tombe à l'eau et se noie. Quelle est la race du chien ? \nUn pékinois. (un pet qui noie)"
]
    
    var randomAnswer = answers[Math.floor(Math.random() * answers.length)];
	
	if(message.content.startsWith(prefix + "restart")) {
	if(message.author.id !== "252873409401323520") return
                message.reply("Le bot va redémarrer")
                    .then(message => client.destroy())
                    .then(() => client.login(process.env.BOT_TOKEN));
}
	
if(message.content.startsWith(prefix + "invite")) {
	const embed = new Discord.RichEmbed()
	.setTitle("Message à envoyer pour une pub pour le bot")
	.setColor(0x00AE86)
	.addField("Message", "Salut Discordeur :wave: !\nTu cherches un bot pour modérer, Des photos coquines (:scream:) ou meme plein de choses?\n  Alors le bot Curry Beurre est fait pour twa!\nTu veux un bot fun;\nVoici quelques critères sympa\n:one: Modération;\n:two: Administration;\n:three: Avec un salon pour discuter avec tous les gens des serveurs qui ont le bot ? \nLe bot Curry Beurre est pour toi,\nLe serveur de support :heart: : https://discord.gg/2TqKvfG\nVoici également le lien pour inviter le bot dans ton serveur :heart: : https://discordbots.fr/bot/457540475851767808")
	message.channel.send({ embed: embed })
}

if(message.content.startsWith(prefix + "ron")) {
	if(message.guild.id !== "456852882571001868") return message.reply("Cette commande est privée")
		if(message.author.id == "252873409401323520") {
		const embed = new Discord.RichEmbed()
		  .setTitle("Recrutements [ON]")
		  .setDescription("Nous recrutons des modérateurs\n	- Âge ?\n	- Depuis quand êtes vous arrivés sur ce serveur ?\n	- Pourquoi sur ce serveur ?\n	- Pourquoi vous et pas un autre ?\n	- Quelles sont vos qualités ?\n	- Ne pas faire de fautes d'orthographe\n- Preuves que vous savez comment modérer");
		message.channel.send("@everyone")
		message.channel.send(embed)
		}
}
	
var args = message.content.slice(prefix.length).trim().split(/ +/g);
let code = args.join(' ');
	
});	
	
client.on("guildCreate", guild => {
	guild.owner.send("Bonjour/bonsoir, je suis Curry Beurre, merci de m'avoir ajouté à votre serveur ! J'ai créé le salon \"u-chat\" pour la commande \"&chat\", merci et bon amusement !");
	var channel = client.channels.get('458998871675109387');
	const bvn = new Discord.RichEmbed()
	  .setColor("0x41f441")
	  .setAuthor("J\'ai été invité dans un serveur", guild.iconURL)
	  .addField("Nom du serveur", guild.name)
	  .addField("Membres", guild.memberCount)
	  .addField("Owner du serveur", guild.owner.user.username + "#" + guild.owner.user.discriminator)
	  .addField("ID", guild.id)
	channel.send({ embed: bvn })
	guild.createChannel("u-chat", "text");
	client.user.setPresence({ game: { name: `&help | ${client.guilds.size} serveurs | ${client.users.size} membres`, type: 0 }});
});

client.on("guildDelete", guild => {
	var channel = client.channels.get('458998871675109387');
	const bye = new Discord.RichEmbed()
	  .setColor("0xe81414")
	  .setAuthor("J\'ai été enlevé d'un serveur", guild.iconURL)
	  .addField("Nom du serveur", guild.name)
	  .addField("Membres", guild.memberCount)
	  .addField("Owner du serveur", guild.owner.user.username + "#" + guild.owner.user.discriminator)
	  .addField("ID", guild.id)
	channel.send({ embed: bye })
	client.user.setPresence({ game: { name: `&help | ${client.guilds.size} serveurs | ${client.users.size} membres`, type: 0 }});
});


client.login(process.env.BOT_TOKEN);
