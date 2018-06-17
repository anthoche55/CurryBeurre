const Discord = require('discord.js');
const prefix = "cb!";
const client = new Discord.Client();
const bot = new Discord.Client();

client.on('ready', () => {
    console.log('I am ready!');
    bot.user.setActivity(`cb!help | ${bot.guilds.size} serveurs | ${bot.users.size} utilisateurs`)
});

client.on('message', message => {
    if (message.content === 'ping') {
    	message.reply('pong');
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

if(message.content.startsWith(prefix + "blague")) {
	const embed = new Discord.RichEmbed()
	.setTitle("Une blague ? C'est parti")
	.setColor(0x00AE86)
	.addField(randomAnswer, "Curry Beurre")
	.setTimestamp()
message.channel.send({embed});
}
	
	if(message.content.startsWith(prefix + "heure")) {
	const embed = new Discord.RichEmbed()
	.setTitle("Il est :")
	.setColor(0x00AE86)
	.setTimestamp()
message.channel.send({embed});
}
	
var args = message.content.slice(prefix.length).trim().split(/ +/g);
 
if(message.content.startsWith(prefix + "google")) {
    let google = args.slice(1).join('+');
    let link = `https://www.google.com/search?q=` + google;
	message.channel.send(link);
}
    
if(message.content.startsWith(prefix + "youtube")) {
    let youtube = args.slice(1).join('+');
    let link = `https://www.youtube.com/results?search_query=` + youtube;
	message.channel.send(link);
}
	
	if (message.content.startsWith(prefix + "help")) {
		message.channel.send("Je vous ai envoyé un message en message privé. Marquez --hhelp pour envoyer ce message dans ce salon./I sent you a message in private message. Mark --hhelp to send this message to this channel.")
		const embed = new Discord.RichEmbed()
		.setColor(0x954D23)
		.setTitle("Command List:")
		.addField("cb!help", "Cette commande/this command")
		.addBlankField(true)
		.addField("cb!blague", "Raconter une blague/Tell you a joke")
		.addBlankField(true)
		.addField("cb!heure", "Donner l'heure actuelle/Gives you the time")
		.addBlankField(true)
		.addField("cb!google", "Cherche votre argument sur Google/Search your argument on Google")
		.addBlankField(true)
		.addField("cb!youtube", "Chercher votre argument sur YouTube/Search your argument on Youtube")
		.addBlankField(true)
		.addField("cb!chat", "Chatter avec d'autres serveurs/Chat with other servers that have the bot")
		
		message.author.send({embed})
	}
	
	if (message.content.startsWith(prefix + "hhelp")) {
		const embed = new Discord.RichEmbed()
		.setColor(0x954D23)
		.setTitle("Command List:")
		.addField("cb!help", "Cette commande/this command")
		.addBlankField(true)
		.addField("cb!blague", "Raconter une blague/Tell you a joke")
		.addBlankField(true)
		.addField("cb!heure", "Donner l'heure actuelle/Gives you the time")
		.addBlankField(true)
		.addField("cb!google", "Cherche votre argument sur Google/Search your argument on Google")
		.addBlankField(true)
		.addField("cb!youtube", "Chercher votre argument sur YouTube/Search your argument on Youtube")
		.addBlankField(true)
		.addField("cb!chat", "Chatter avec d'autres serveurs/Chat with other servers that have the bot")
		
		message.channel.send({embed})
	}
	
	if(message.content.startsWith(prefix + "chat")) {
            let xoargs = message.content.split(" ").slice(1);
            let xo03 = xoargs.join(" ")
            var xo02 = message.guild.channels.find('name', 'u-chat');
            if(!xo02) return message.reply("Le channel **u-chat** est introuvable")
            if(message.channel.name !== 'u-chat') return message.reply("Commande à effectuer dans **u-chat**")
            if(!xo03) return message.reply("Merci d'écrire un message qui sera envoyé à tous les serveurs où je suis.")
            var embed = new Discord.RichEmbed()
            .setColor("0x88CC14")
            .setTitle("Message Interne")
            .addField("Pseudo de l'utilisateur", message.author.username + "#" + message.author.discriminator, true)
            .addField("Discord", message.guild.name, true)
            .addField("Message", xo03)
            .setFooter("© CurryBeurre | Tous droits réservés.")
            .setTimestamp()
          client.channels.findAll('name', 'u-chat').map(channel => channel.send({embed}))
          message.delete();
}
	
    
});

client.login(process.env.BOT_TOKEN);
