const Discord = require('discord.js');
const prefix = "cb!";
const client = new Discord.Client();
const bot = new Discord.Client();
const { get } = require("snekfetch"); 
const randomPuppy = require('random-puppy');
const config = require("./config.json");
const embedcolor = 0xe54242;

client.on('ready', () => {
    console.log('I am ready!');
    client.user.setStatus('idle')
    client.user.setPresence({
		game: {
		  name: `cb!help | ${client.guilds.size} serveurs | ${client.users.size} membres`,
		  type: 0
		}
	});
});

client.on("message", async message => {
	
if(message.content.startsWith(prefix + "slist")) {
	message.channel.send(client.guilds.map(g=>g.name).join('\n'))
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
                message.react('✅')
                    .then(message => client.destroy())
                    .then(() => client.login(process.env.BOT_TOKEN));
}
	
if(message.content.startsWith(prefix + "invite")) {
	const embed = new Discord.RichEmbed()
	.setTitle("Message à envoyer pour une pub pour le bot")
	.setColor(0x00AE86)
	.addField("Message", "Bonjour,\nVous voulez un bot fun;\n	- Modération;\n	- Administration;\n	- Avec un salon pour discuter avec tout les gens des serveurs qui ont le bot ? \nLe bot Curry Beurre est pour vous,\nLe serveur de support : https://discord.gg/2PQ4rfT \nVoici également le lien pour inviter le bot dans votre serveur : https://discordapp.com/api/oauth2/authorize?client_id=457540475851767808&permissions=8&scope=bot")
	message.channel.send({ embed: embed })
}


if(message.content.startsWith(prefix + "blague")) {
	const embed = new Discord.RichEmbed()
	.setTitle("Une blague ? C'est parti")
	.setColor(0x00AE86)
	.addField(randomAnswer, "Curry Beurre")
	.setTimestamp()
message.channel.send({ embed: embed });
}
	
	if(message.content.startsWith(prefix + "heure")) {
	const embed = new Discord.RichEmbed()
	.setTitle("Il est :")
	.setColor(0x00AE86)
	.setTimestamp()
message.channel.send({ embed: embed });
}
	
if(message.content.startsWith(prefix + "sinfo")) {

    let sicon = message.guild.iconURL;
    let serverembed = new Discord.RichEmbed()
    .setDescription("Server Information")
    .setColor("#15f153")
    .setThumbnail(sicon)
    .addField("Nom du serveur", message.guild.name)
    .addField("Créé le", message.guild.createdAt)
    .addField("Vous avez rejoin le", message.member.joinedAt)
    .addField("Totalitée de membres ayant rejoin", message.guild.memberCount);

    return message.channel.send({ embed: serverembed });
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
		.addField("cb!blague", "Raconter une blague/Tell you a joke")
		.addField("cb!heure", "Donner l'heure actuelle/Gives you the time")
		.addField("cb!google", "Cherche votre argument sur Google/Search your argument on Google")
		.addField("cb!youtube", "Chercher votre argument sur YouTube/Search your argument on Youtube")
		.addField("cb!chat", "Chatter avec d'autres serveurs/Chat with other servers that have the bot")
		.addField("cb!meow", "Images de chats au hasard/Random pictures of cats")
		.addField("cb!4k", "IMPORTANT : CONTENUE PORNOGRAPHIQUE PAS ENDESSOUS DE 18 ANS/IMPORTANT : PORNO NOT UNDER 18 YEARS")
		.addField("cb!8ball", "Vous posez une question en argument et le bot vous répond par oui;non;autres/Question the bot as argument and the bot will answer with yes;no;others")
		.addField("cb!sinfo", "Information sur le serveur/Information about the server")
		.addField("cb!botstats", "Information sur le bot/Information about the bot")

		message.author.send({ embed: embed })
	}

	if (message.content.startsWith(prefix + "hhelp")) {
		const embed = new Discord.RichEmbed()
		.setColor(0x954D23)
		.setTitle("Command List:")
		.addField("cb!help", "Cette commande/this command")
		.addField("cb!blague", "Raconter une blague/Tell you a joke")
		.addField("cb!heure", "Donner l'heure actuelle/Gives you the time")
		.addField("cb!google", "Cherche votre argument sur Google/Search your argument on Google")
		.addField("cb!youtube", "Chercher votre argument sur YouTube/Search your argument on Youtube")
		.addField("cb!chat", "Chatter avec d'autres serveurs/Chat with other servers that have the bot")
		.addField("cb!meow", "Images de chats au hasard/Random pictures of cats")
		.addField("cb!4k", "IMPORTANT : CONTENUE PORNOGRAPHIQUE PAS ENDESSOUS DE 18 ANS/IMPORTANT : PORNO NOT UNDER 18 YEARS")
		.addField("cb!8ball", "Vous posez une question en argument et le bot vous répond par oui;non;autres/Question the bot as argument and the bot will answer with yes;no;others")
		.addField("cb!sinfo", "Information sur le serveur/Information about the server")
		.addField("cb!botstats", "Information sur le bot/Information about the bot")

		message.channel.send({ embed: embed })
	}
	if(message.content.startsWith(prefix + "chat")) {
            let xoargs = message.content.split(" ").slice(1);
            let xo03 = xoargs.join(" ")
            var xo02 = message.guild.channels.find('name', 'u-chat');
            if(!xo02) return message.reply("Le channel **u-chat** est introuvable")
            if(message.channel.name !== 'u-chat') return message.reply("Commande à effectuer dans **u-chat**")
            if(!xo03) return message.reply("Merci d'écrire un message qui sera envoyé à tous les serveurs où je suis.")
	  var chat = new Discord.RichEmbed()
            .setColor("0x88CC14")
            .setTitle("Message Interne")
	    .setThumbnail(message.author.avatarURL)
            .addField("Utilisateur", message.author.username + "#" + message.author.discriminator, true)
            .addField("Discord", message.guild.name, true)
            .addField("Message", xo03)
            .setFooter("© CurryBeurre | Tous droits réservés.")
            .setTimestamp()
	  var ochat = new Discord.RichEmbed()
            .setColor("0xff0000")
            .setTitle("Message Interne")
	    .setThumbnail(message.author.avatarURL)
            .addField("Fondateur", message.author.username + "#" + message.author.discriminator, true)
            .addField("Discord", message.guild.name, true)
            .addField("Message", xo03)
            .setFooter("© CurryBeurre | Tous droits réservés.")
            .setTimestamp()
	  var banned = new Discord.RichEmbed()
            .setColor("0xff0000")
            .setTitle("Tu es banni")
            .addField("Tu es banni", message.author.username + "#" + message.author.discriminator, true)
            .setFooter("© CurryBeurre | Tous droits réservés.")
            .setTimestamp()
	if(message.author.id !== "252873409401323520") {
          client.channels.findAll('name', 'u-chat').map(channel => channel.send({ embed: chat }))
	}
	if(message.author.id == "252873409401323520") {
	  client.channels.findAll('name', 'u-chat').map(channel => channel.send({ embed: ochat }))
	}
	if(message.author.id == "000000000000000000") {
	  message.guild.channel.find('name', 'u-chat').map(channel => channel.send({ embed: banned }))
	}
}
		  
		if(message.content.startsWith(prefix + 'meow')) {
		try {
			get('https://aws.random.cat/meow').then(res => {
				const embed = new Discord.RichEmbed()
				.setTitle(":smiley_cat: Un chat sauvage apparaît")
				.setImage(res.body.file)
				.setColor("0x88CC14")
				return message.channel.send({ embed: embed });
			});
		} catch(err) {
			return message.channel.send(error.stack);
		}
	}
	
	if(message.content.startsWith(prefix + "4k")) {
    if (!message.channel.nsfw) return message.reply("Tu peux utiliser cette commande que dans un salon NSFW");

    var subreddits = [
        'NSFW_Wallpapers',
        'SexyWallpapers',
        'HighResNSFW',
        'nsfw_hd',
        'UHDnsfw'
    ]
    var sub = subreddits[Math.round(Math.random() * (subreddits.length - 1))];

    randomPuppy(sub)
        .then(url => {
            const embed = new Discord.RichEmbed()
                .setColor("RANDOM")
                .setAuthor("4k", client.user.avatarURL)
                .setFooter("© CurryBeurre | Tous droits réservés.")
                .setImage(url);
            message.channel.send({ embed: embed });
        })
}
	
if(message.content.startsWith(prefix + "8ball")) {
    if (!args[2]) return message.reply("Pose une question!");
    let replies = ["Oui, surement :8ball:", "Non, jamais :8ball:", "Peut-être/Peut-être pas :8ball:"]
    let result = Math.floor((Math.random() * replies.length));

    let question = args.slice().join(" ");

    const ballembed = new Discord.RichEmbed()
        .setAuthor(message.author.username + " demande: " + question)
        .setColor("#D3D3D3")
        .addField("Réponse", "Demandé par " + message.author.tag + "\nRéponse: " + replies[result] + "")

    message.channel.send({ embed: ballembed })
}
    

	
if(message.content.startsWith(prefix + "botstats")) {
    let servers = client.guilds.size;
    let users = 0;
    let channels = client.channels.size;
    
    client.guilds.map(g => users += g.memberCount);
    
    const embed = new Discord.RichEmbed()
        .setTitle('Communauté')
        .addField('Serveurs', servers, true)
        .addField('Utilisateurs', users, true)
        .addField('Salons', channels, true);

    message.channel.send({ embed: embed });
    
}
	
});
	
	
client.on("guildCreate", guild => {
	guild.owner.send("Bonjour/bonsoir, je suis Curry Beurre, merci de m'avoir ajouté à votre serveur !");
	var channel = client.channels.get('458998871675109387');
	const bvn = new Discord.RichEmbed()
	  .setColor("0x41f441")
	  .setAuthor("J\'ai été invité dans un serveur", guild.iconURL)
	  .addField("Nom du serveur", guild.name)
	  .addField("Membres", guild.memberCount)
	  .addField("Owner du serveur", guild.owner)
	  .addField("ID", guild.id)
	client.user.setPresence({
		game: {
		  name: `cb!help | ${client.guilds.size} serveurs`,
		  type: 0
		}
	});
	channel.send({ embed: bvn })
	guild.createChannel("u-chat", "text");
});

client.on("guildDelete", guild => {
	var channel = client.channels.get('458998871675109387');
	const bye = new Discord.RichEmbed()
	  .setColor("0xe81414")
	  .setAuthor("J\'ai été enlevé d'un serveur", guild.iconURL)
	  .addField("Nom du serveur", guild.name)
	  .addField("Membres", guild.memberCount)
	  .addField("Owner du serveur", guild.owner)
	  .addField("ID", guild.id)
	client.user.setPresence({
		game: {
		  name: `cb!help | ${client.guilds.size} serveurs`,
		  type: 0
		}
	});
	channel.send({ embed: bye })
});


client.login(process.env.BOT_TOKEN);
