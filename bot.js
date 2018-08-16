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
		}
}
	
var args = message.content.slice(prefix.length).trim().split(/ +/g);
let code = args.join(' ');
	
});

client.on("guildMemberAdd", (member) => {
  const embed = new Discord.RichEmbed()
    .addField(member.user.username, "a rejoint le serveur")
    .setFooter("Bienvenue " + member.user.tag)
  client.channels.get("468457996607815691").send(embed);
});

client.login(process.env.BOT_TOKEN);
