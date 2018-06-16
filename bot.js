const Discord = require('discord.js');
const prefix = "cb!";
const client = new Discord.Client();

client.on('ready', () => {
    console.log('I am ready!');
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
		.addField("!ok google help", "Cette commande/this command")
		.addBlankField(true)
		.addField("!ok google blague", "Raconter une blague/Tell you a joke")
		.addBlankField(true)
		.addField("!ok google heure", "Donner l'heure actuelle/Gives you the time")
		.addBlankField(true)
		.addField("!ok google google", "Cherche votre argument sur Google/Search your argument on Google")
		.addBlankField(true)
		.addField("!ok google youtube", "Chercher votre argument sur YouTube/Search your argument on Youtube")
		
		message.author.send({embed})
	}
	
	if (message.content.startsWith(prefix + "hhelp")) {
		const embed = new Discord.RichEmbed()
		.setColor(0x954D23)
		.setTitle("Command List:")
		.addField("!ok google help", "Cette commande/this command")
		.addBlankField(true)
		.addField("!ok google blague", "Raconter une blague/Tell you a joke")
		.addBlankField(true)
		.addField("!ok google heure", "Donner l'heure actuelle/Gives you the time")
		.addBlankField(true)
		.addField("!ok google google", "Cherche votre argument sur Google/Search your argument on Google")
		.addBlankField(true)
		.addField("!ok google youtube", "Chercher votre argument sur YouTube/Search your argument on YouTube")
		.addBlankField(true)
		.addField("Autres/Others", "D\'autres commandes doivent venirs/Other commands will be come later.")
		
		message.channel.send({embed})
	}
    
});

client.login(process.env.BOT_TOKEN);
