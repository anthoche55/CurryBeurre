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
                message.channel.sendEmbed(embed);
            } else if(!longargs){
                            var embed = new Discord.RichEmbed()
                                .setColor(0xf4bf42)
                                .setAuthor("Envoyer une pub")
                                .setDescription(":no_entry_sign: Vous devez envoyer une pub")
                                .setFooter("By Cecemel_PvP#9876 | Ft. Kalyax")
                            message.channel.sendEmbed(embed);
            } else{
                            var embed = new Discord.RichEmbed()
                                .setColor(0xf4bf42)
                                .setAuthor(message.author.username+" - "+message.author.id, message.author.avatarURL)
                                .setDescription(longargs)
                                .setFooter("By Cecemel_PvP#9876 | Ft. Kalyax")
                                .setTimestamp()
                            bot.channels.findAll("name", "pub").map(channel => channel.send(embed))

                            cooldown.add(message.author.id)

                            setTimeout(() => {
                                cooldown.delete(message.author.id)
                            }, 3600000)
                        }
            }
});

client.login(process.env.BOT_TOKEN);
