const Discord = require('discord.js');
const prefix = "!";
const client = new Discord.Client();
const bot = new Discord.Client();

var cooldown = new Set();

client.on("ready", () => {
    client.user.setActivity(prefix+"help | "+client.guilds.size+" serveurs | "+client.users.size+" utilisateurs")
    console.log(client.user.username+" ON!");
});

client.on("message", async message => {
if(message.author.equals(bot.user)) return;
    if(!message.content.startsWith(prefix)) return;
    if(message.channel.type === "dm") return;

    var args = message.content.substring(prefix.length).split(" ");

    if(message.content.startsWith(prefix + "remcooldown")) {
       if(!message.author.id == "252873409401323520") return;
      cooldown.delete(args)
}
    
if(message.channel.name=='chat-special-vcs' || message.channel.name=='u-chat'){
			let xoargs = message.content;
			if(["#fortnite"].some(word => message.content.toLowerCase().includes(word))) {
				const ayy = client.emojis.find("name", "fortnite");
				text = xoargs.toLowerCase().replace(/#fortnite/g, "`#Fortnite`" + ayy);
			}
			if(["#laarm"].some(word => message.content.toLowerCase().includes(word))) {
				const ayy = client.emojis.find("name", "laarm");
				text = xoargs.toLowerCase().replace(/#laarm/g, "`#Laarm`" + ayy);
			}
			if(["#like"].some(word => message.content.toLowerCase().includes(word))) {
				const ayy = client.emojis.find("name", "like");
				text = xoargs.toLowerCase().replace(/#like/g, "`#Like`" + ayy);
			}
			if(["#twitch"].some(word => message.content.toLowerCase().includes(word))) {
				const ayy = client.emojis.find("name", "twitch");
				text = xoargs.toLowerCase().replace(/#twitch/g, "`#Twitch`" + ayy);
			}
			if(["#facebook"].some(word => message.content.toLowerCase().includes(word))) {
				const ayy = client.emojis.find("name", "facebook");
				text = xoargs.toLowerCase().replace(/#facebook/g, "`#Facebook`" + ayy);
			}
			if(["#youtube"].some(word => message.content.toLowerCase().includes(word))) {
				const ayy = client.emojis.find("name", "youtube");
				text = xiargs.toLowerCase().replace(/#youtube/g, "`#Youtube`" + ayy);
			}
			if(["#yaleen"].some(word => message.content.toLowerCase().includes(word))) {
				const ayy = client.emojis.find("name", "yaleen");
				text = xoargs.toLowerCase().replace(/#yaleen/g, "`#Yaleen`" + ayy);
			}
			if(["#csgo"].some(word => message.content.toLowerCase().includes(word))) {
				const ayy = client.emojis.find("name", "csgo");
				text = xoargs.toLowerCase().replace(/#csgo/g, "`#Counter strike`" + ayy);
			}
			if(["#cs"].some(word => message.content.toLowerCase().includes(word))) {
				const ayy = client.emojis.find("name", "csgo");
				text = xoargs.toLowerCase().replace(/#cs/g, "`#Counter strike`" + ayy);
			}
			if(["#pubg"].some(word => message.content.toLowerCase().includes(word))) {
				const ayy = client.emojis.find("name", "pubg");
				text = xoargs.toLowerCase().replace(/#pubg/g, "`#PUBG`" + ayy);
			}
			if(["#minecraft"].some(word => message.content.toLowerCase().includes(word))) {
				const ayy = client.emojis.find("name", "minecraft");
				text = xoargs.toLowerCase().replace(/#minecraft/g, "`#Minecraft`" + ayy);
			}
			if(["#garry's mod"].some(word => message.content.toLowerCase().includes(word))) {
				const ayy = client.emojis.find("name", "garrysmod");
				text = xoargs.toLowerCase().replace(/#garry's mod/g, "`#Garry's mod`" + ayy);
			}
			if(["#gmod"].some(word => message.content.toLowerCase().includes(word))) {
				const ayy = client.emojis.find("name", "garrysmod");
				text = xoargs.toLowerCase().replace(/#gmod/g, "`#Garry's mod`" + ayy);
			}
			if(["#theescapist"].some(word => message.content.toLowerCase().includes(word))) {
				const ayy = client.emojis.find("name", "theescapist");
				text = xoargs.toLowerCase().replace(/#theescapist/g, "`#The Escapist`" + ayy);
			}
			if(["#scrapmechanic"].some(word => message.content.toLowerCase().includes(word))) {
				const ayy = client.emojis.find("name", "scrapmechanic");
				text = xoargs.toLowerCase().replace(/#scrapmechanic/g, "`#Scrap Mechanic`" + ayy);
			}
			if(["#startupcompany"].some(word => message.content.toLowerCase().includes(word))) {
				const ayy = client.emojis.find("name", "sc1");
				text = xoargs.toLowerCase().replace(/#startupcompany/g, "`#Startup Company`" + ayy);
			}
			if(["#startup company"].some(word => message.content.toLowerCase().includes(word))) {
				const ayy = client.emojis.find("name", "sc1");
				text = xoargs.toLowerCase().replace(/#startup company/g, "`#Startup Company`" + ayy);
			}
			message.delete();
			message.channel.createInvite({maxAge: 0}).then(invite => {;
				const embed = {
					"description": `${xoargs}`,
					"color": 7629488,
					"timestamp": new Date(),
					"footer": {
						"icon_url": `https://cdn.discordapp.com/icons/${message.guild.id}/${message.guild.icon}.webp`,
						"text": message.guild.name
					},
					"thumbnail": {
						"url": `${message.author.avatarURL}`
					},
					"author": {
						"name": `${message.author.tag}`,
						"url": `${invite}`,
						"icon_url": "https://cdn.pixabay.com/photo/2017/04/11/22/25/balloon-2223048_640.png"
					}
				};
				client.channels.findAll('name', 'u-chat').map(channel => channel.send({ embed }))
			})
		}
    
    if(message.content.startsWith(prefix + "pub")) {
        var temp = message.content.split(" ").slice(1);
        var longargs = temp.join(" ")
            if(!message.channel.name == "publicité") return message.reply("Tu dois être dans le salon **#publicité**");
            if(cooldown.has(message.author.id)){
            var embed = new Discord.RichEmbed()
                    .setColor(0xf4bf42)
                    .setAuthor("Envoyer une pub")
                    .setDescription(":no_entry_sign: Vous devez attendre 1 heure")
                    .setFooter("By Cecemel_PvP#9876 | Ft. Kalyax");
                message.channel.send({ embed: embed });
            } else if(!longargs){
                            var embed = new Discord.RichEmbed()
                                .setColor(0xf4bf42)
                                .setAuthor("Envoyer une pub")
                                .setDescription(":no_entry_sign: Vous devez envoyer une pub")
                                .setFooter("By Cecemel_PvP#9876 | Ft. Kalyax")
                            message.channel.send({ embed: embed });
            } else{
                            var embed = new Discord.RichEmbed()
                                .setColor(0xf4bf42)
                                .setAuthor(message.author.username+" - "+message.author.id, message.author.avatarURL)
                                .setDescription(longargs)
                                .setFooter("By Cecemel_PvP#9876 | Ft. Kalyax")
                                .setTimestamp()
                            bot.channels.findAll("name", "pub").map(channel => channel.send({ embed: embed }));

                            cooldown.add(message.author.id)

                            setTimeout(() => {
                                cooldown.delete(message.author.id)
                            }, 3600000)
                        }
            }
});

client.login(process.env.BOT_TOKEN);
