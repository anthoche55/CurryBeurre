const Discord = require('discord.js');
const prefix = "cb!";
const client = new Discord.Client();
const bot = new Discord.Client();
const { get } = require("snekfetch"); 
const randomPuppy = require('random-puppy');

client.on('ready', () => {
    console.log('I am ready!');
    client.user.setStatus('idle')
    client.user.setPresence({
      game: {
        name: 'cb!help | By Cecemel_PvP | ${client.guilds.size} serveurs',
        type: 1
      }
  });
});


client.on('message', message => {
    

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
	if(message.author.id !== "252873409401323520") return;
                message.react('✅')
                    .then(message => client.destroy())
                    .then(() => client.login(process.env.BOT_TOKEN));
}
	
if(message.content.startsWith(prefix + "invite")) {
	const embed = new Discord.RichEmbed()
	.setTitle("Lien pour inviter le bot")
	.setColor(0x00AE86)
	.addField"Invitation", "https://discordapp.com/api/oauth2/authorize?client_id=457540475851767808&permissions=8&scope=bot")
	.setTimestamp()
message.channel.send({embed});
	

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
		.addBlankField(true)
		.addField("cb!meow", "Images de chats au hasard/Random pictures of cats")
		.addBlankField(true)
		.addField("cb!4k", "IMPORTANT : CONTENUE PORNOGRAPHIQUE PAS ENDESSOUS DE 18 ANS/IMPORTANT : PORNO NOT UNDER 18 YEARS")
		.addBlankField(true)
		.addField("cb!8ball", "Vous posez une question en argument et le bot vous répond par oui;non;autres/Question the bot as argument and the bot will answer with yes;no;others")

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
		.addBlankField(true)
		.addField("cb!meow", "Images de chats au hasard/Random pictures of cats")
		.addBlankField(true)
		.addField("cb!4k", "IMPORTANT : CONTENUE PORNOGRAPHIQUE PAS ENDESSOUS DE 18 ANS/IMPORTANT : PORNO NOT UNDER 18 YEARS")
		.addBlankField(true)
		.addField("cb!8ball", "Vous posez une question en argument et le bot vous répond par oui;non;autres/Question the bot as argument and the bot will answer with yes;no;others")
		

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
       
		if(message.content.startsWith(prefix + 'meow')) {
		try {
			get('https://aws.random.cat/meow').then(res => {
				const embed = new Discord.RichEmbed()
				.setTitle(":smiley_cat: Un chat sauvage apparaît")
				.setImage(res.body.file)
				.setColor("0x88CC14")
				return message.channel.send({embed});
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
            message.channel.send({
                embed
            });
        })
}
	
if(message.content.startsWith(prefix + "8ball")) {
let responses = [
        'Oui',
        'Non',
        'Peut-être',
        'Surement',
        'Surement que non'
    ]
    
    // Fetch a random item from the array
    let fetched = responses[Math.floor(Math.random() * responses.length)];
    
    // Form Embed
    const embed = new Discord.RichEmbed()
        .setColor("RANDOM")
        .setFooter(fetched);
    
    // Send Embed
    message.channel.send(embed);
    
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

    // Send Embed
    message.channel.send(embed);
    
}
	});
	
	

client.login(process.env.BOT_TOKEN);
