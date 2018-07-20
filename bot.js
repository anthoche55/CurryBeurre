const Discord = require('discord.js');
const prefix = "&";
const client = new Discord.Client();
const bot = new Discord.Client();
const { get } = require("snekfetch"); 
const randomPuppy = require('random-puppy');
const embedcolor = 0xe54242;
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

if(message.content.startsWith(prefix + "uptime")) {
	message.channel.send(uptime1)
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
                message.react('?')
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
	
if (message.content.startsWith(prefix + "eval")) {
let args2 = message.content.split(" ").slice(1);   
let code = args2.join(' ');
  if (message.author.id != '252873409401323520') return message.reply("Tu n\'as pas accès à cette commande");
    try {
  let ev = eval(code)
                let str = util.inspect(ev, {
                    depth: 1
                })
                 str = `${str.replace(new RegExp(`${client.token}|${process.env.TOKEN}`, "g"), "Erreur: Aucun argument ajouté.")}`;
                if(str.length > 1800) {
                    str = str.substr(0, 1800)
                    str = str + "..."
                }
                message.delete(); 
    message.channel.send("", { embed: { 
      color: 2551400,      
  fields: [{        
    name: '**Input**',     
      value: '\`\`\`' + code + '\`\`\`'         
},{     
      name: '**Output**', 
          value: '\`\`\`' + str + '\`\`\`'  
        }], 
      footer: {     
    text: ``    }     }});} catch (err) {   message.react("❌");
message.channel.send("", { embed: { 
      color: 2551400,      
  fields: [{        
    name: '**Input**',     
      value: '\`\`\`' + code + '\`\`\`'         
},{     
      name: '**Output**', 
          value: '\`\`\`' + err + '\`\`\`'  
        }], 
      footer: {     
    text: ``    }     }});    } }
	
	
if(message.content.startsWith(prefix + "pizza")) {
	const ahkkEmbed = new Discord.RichEmbed()
                .setTitle(`Voilà ta pizza peperoni`)
                .setColor(`RANDOM`)
                .setImage(`http://www.pngmart.com/files/1/Pepperoni-Pizza.png`)
	const ahkkkEmbed = new Discord.RichEmbed()
                .setTitle(`Voilà ta pizza fromage`)
                .setColor(`RANDOM`)
                .setImage(`http://www.pngmart.com/files/1/Cheese-Pizza.png`)
	const ahkkkkEmbed = new Discord.RichEmbed()
                            .setTitle(`Voilà ta pizza ananas`)
                            .setColor(`RANDOM`)
                            .setImage(`https://www.cicis.com/media/1140/pizza_adven_hampineapple.png`)
    const ahkEmbed = new Discord.RichEmbed()
        .setTitle(`Choisi un type de pizza.`)
        .setColor(`RANDOM`)
        .setDescription('Nous avons: `peperoni`, `fromage`, and `ananas`');
	if(args[1] === "peperoni") return message.channel.send({ embed: ahkkEmbed });
	if(args[1] === "fromage") return message.channel.send({ embed: ahkkkEmbed });
	if(args[1] === "ananas") return message.channel.send({ embed: ahkkkkEmbed });
        if(!args[1]) return message.channel.send({ embed: ahkEmbed })
	}
        
            
            
 
if(message.content.startsWith(prefix + "avatar")) {
        let user = message.mentions.users.first();
        let image = user.displayAvatarURL;
        let embed = new Discord.RichEmbed()
            .setAuthor(`${user.username}#${user.discriminator}`)
            .setColor("RANDOM")
            .setImage(image)
        message.channel.send({ embed: embed });
}
 
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
		.addField("Fun", "&help fun")

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
		.addField("cb!avatar", "Afficher l'avatar de vous ou quelqu'un d'autre/View the avatar of you or someone else")

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
	  var achat = new Discord.RichEmbed()
            .setColor("0xf45c42")
            .setTitle("Message Interne")
	    .setThumbnail(message.author.avatarURL)
            .addField("Administrateur", message.author.username + "#" + message.author.discriminator, true)
            .addField("Discord", message.guild.name, true)
            .addField("Message", xo03)
            .setFooter("© CurryBeurre | Tous droits réservés.")
            .setTimestamp()
	  var fchat = new Discord.RichEmbed()
            .setColor("0xff0000")
            .setTitle("Message Interne")
	    .setThumbnail(message.author.avatarURL)
            .addField("Fondateur", message.author.username + "#" + message.author.discriminator, true)
            .addField("Discord", message.guild.name, true)
            .addField("Message", xo03)
            .setFooter("© CurryBeurre | Tous droits réservés.")
            .setTimestamp()
	  var bannedemb = new Discord.RichEmbed()
            .setColor("0xff0000")
            .setTitle("Tu es banni")
            .addField("Tu es banni", message.author.username + "#" + message.author.discriminator, true)
            .setFooter("© CurryBeurre | Tous droits réservés.")
            .setTimestamp()
	let banned = [
	"000000000000000000"
	];
      if (banned.includes(message.author.id)) {
    	message.guild.channel.find('name', 'u-chat').map(channel => channel.send({ embed: bannedemb }))
      }
	
      if (fonda.includes(message.author.id)) {
	client.channels.findAll('name', 'u-chat').map(channel => channel.send({ embed: fchat }))
	}
      if (admin.includes(message.author.id)) {
    	client.channels.findAll('name', 'u-chat').map(channel => channel.send({ embed: achat }))
        }
	if(message.author.id !== "252873409401323520") {
		if(message.author.id !== "308195368427061248") {
          client.channels.findAll('name', 'u-chat').map(channel => channel.send({ embed: chat }))
		}	
	}
}
		
if(message.content.startsWith(prefix + "membercount")) {
      const embed = new Discord.RichEmbed()
          .setColor(hexcols[~~(Math.random() * hexcols.length)])
          .setAuthor(message.guild.name, message.guild.iconURL)
      .setThumbnail(message.guild.iconURL)
      .addField('Membres', `**${message.guild.memberCount}**`, true)
      .addBlankField(true)
      .addField('Humains', `**${message.guild.members.filter(member => !member.user.bot).size}**`, true)
      .addField('Bots', `**${message.guild.members.filter(member => member.user.bot).size}**`, true)
      .addField('Status', `**${message.guild.members.filter(o => o.presence.status === 'online').size}** En ligne\n**${message.guild.members.filter(i => i.presence.status === 'idle').size}** Absent\n**${message.guild.members.filter(dnd => dnd.presence.status === 'dnd').size}** Ne pas déranger\n**${message.guild.members.filter(off => off.presence.status === 'offline').size}** Hors Ligne\n**${message.guild.members.filter(s => s.presence.status === 'streaming').size}** En live`)
      .setFooter(`Propriétaire: ${message.guild.owner.user.tag}`)
    message.channel.send({ embed: embed });
  };
		  
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
	
if(message.content.startsWith(prefix + "addrole")) {

  if(!message.member.hasPermission("MANAGE_MEMBERS")) return message.reply("Désolé, tu n\'as pas la permission d'éxecuter cette commande.");
  let rMember = message.guild.member(message.mentions.users.first()) || message.guild.members.get(args[0]);
  if(!rMember) return message.reply("Je ne sais pas trouver cette personne.");
  let role = args.join(" ").slice(22);
  if(!role) return message.reply("Spécifie un rôle.");
  let gRole = message.guild.roles.find(`name`, role);
  if(!gRole) return message.reply("Je ne sais pas trouver ce rôle.");

  if(rMember.roles.has(gRole.id)) return message.reply("Ce joueur a déjà ce rôle.");
  await(rMember.addRole(gRole.id));

  try{
    await rMember.send(`Félicitation, tu as reçu le rôle : \"${gRole.name}."`)
  }catch(e){
    console.log(e.stack);
    message.channel.send(`<@${rMember.id}> a reçu le rôle ${gRole.name}. J\'ai essayé de lui envoyer un mp mais il les a bloqué.`)
  }
}

if(message.content.startsWith(prefix + "removerole")) {
  if(!message.member.hasPermission("MANAGE_MEMBERS")) return message.reply("Tu n\'as pas la permission");
  let rMember = message.guild.member(message.mentions.users.first()) || message.guild.members.get(args[0]);
  if(!rMember) return message.reply("Je ne peux pas trouver l'utilisateur");
  let role = args.join(" ").slice(22);
  if(!role) return message.reply("Spécifie un rôle");
  let gRole = message.guild.roles.find(`name`, role);
  if(!gRole) return message.reply("Je ne peux pas trouver ce rôle");

  if(!rMember.roles.has(gRole.id)) return message.reply("L\'utilisateur n\'as pas ce rôle");
  await(rMember.removeRole(gRole.id));

  try{
    await rMember.send(`Le rôle ${gRole.name} vous a été enlevé`)
  }catch(e){
    message.channel.send(`L\'utilisateur <@${rMember.id}> a été enlevé du rôle ${gRole.name}`)
  }
}
	
	
if(message.content.startsWith(prefix + "report")) {
    let rUser = message.guild.member(message.mentions.users.first() || message.guild.members.get(args[0]));
    if(!rUser) return message.channel.send("Je ne peux pas trouver l\'utilisateur");
    let rreason = args.join(" ").slice(22);

    let reportEmbed = new Discord.RichEmbed()
    .setDescription("Reports")
    .setColor("#15f153")
    .addField("Utilisateur report", `${rUser} comme ID: ${rUser.id}`)
    .addField("Report par", `${message.author} comme ID: ${message.author.id}`)
    .addField("Salon", message.channel)
    .addField("Temps", message.createdAt)
    .addField("Reason", rreason);

    let reportschannel = message.guild.channels.find(`name`, "logs");
    if(!reportschannel) return message.channel.send("Je ne peux pas trouver le salon #logs");


    message.delete().catch(O_o=>{});
    reportschannel.send({ embed: reportEmbed });

}
	
if(message.content.startsWith(prefix + "mute")) {
  let tomute = message.guild.member(message.mentions.users.first() || message.guild.members.get(args[0]));
  if(!tomute) return message.reply("Je ne peux pas trouver l'utilisateur");
  if(tomute.hasPermission("MANAGE_MESSAGES")) return message.reply("Je ne peux pas mute cet utilisateur");
  let muterole = message.guild.roles.find(`name`, "muté");
  if(!muterole){
    try{
      muterole = await message.guild.createRole({
        name: "muté",
        color: "#000000",
        permissions:[]
      })
      message.guild.channels.forEach(async (channel, id) => {
        await channel.overwritePermissions(muterole, {
          SEND_MESSAGES: false,
          ADD_REACTIONS: false
        });
      });
    }catch(e){
      console.log(e.stack);
    }
  }
  let mutetime = args[1];
  if(!mutetime) return message.reply("Tu n\'as pas spécifié un temps");

  await(tomute.addRole(muterole.id));
  message.reply(`<@${tomute.id}> a été mute pour ${ms(ms(mutetime))}`);

  setTimeout(function(){
    tomute.removeRole(muterole.id);
    message.channel.send(`<@${tomute.id}> a été unmute!`);
  }, ms(mutetime));


}
	
});	
	
client.on("guildCreate", guild => {
	guild.owner.send("Bonjour/bonsoir, je suis Curry Beurre, merci de m'avoir ajouté à votre serveur ! J'ai créé le salon \"u-chat\" pour la commande \"cb!chat\", merci et bon amusement !");
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
