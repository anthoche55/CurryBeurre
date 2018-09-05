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

    switch(args[0].toLowerCase()){
    case "sendpub":
            if(cooldown.has(message.author.id)){
                message.delete();
                var embed = new Discord.RichEmbed()
                    .setColor(0xf46842)
                    .setAuthor("Envoyer une pub")
                    .setDescription(":no_entry_sign: Vous devez attendre 1 heure")
                    .setFooter(bot.user.username+" - by Cecemel_PvP#9876 | Ft. Kalyax#4031")
                message.channel.sendEmbed(embed);
                break;
            }else{
                if(message.channel.name === "fastpub"){
                    if(message.author.id==="274636300332695562"||message.author.id==="347043099010269184"||message.author.id==="317221808405348364"||message.author.id==="394787892351991808"||message.author.id==="296357024864665605"||message.author.id==="398096736880427018"){
                        var embed = new Discord.RichEmbed()
                            .setColor(0xf46842)
                            .setAuthor("Envoyer une pub")
                            .setDescription(":no_entry_sign: Vous êtes banni, pour être débanni, rendez-vous sur le support")
                            .setFooter(bot.user.username+" - by Cecemel_PvP#9876 | Ft. Kalyax#4031")
                        message.channel.sendEmbed(embed);
                        return;
                        }
                        message.delete();
                        var temp = message.content.split(" ").slice(1);
                        var longargs = temp.join(" ")
                        if(!longargs){
                            var embed = new Discord.RichEmbed()
                                .setColor(0xf46842)
                                .setAuthor("Envoyer une pub")
                                .setDescription(":no_entry_sign: Vous devez envoyer une pub")
                                .setFooter(bot.user.username+" - by Cecemel_PvP#9876 | Ft. Kalyax#4031")
                            message.channel.sendEmbed(embed);
                        }else{
                            var embed = new Discord.RichEmbed()
                                .setColor(0xf46842)
                                .setAuthor(message.author.username+" - "+message.author.id)
                                .setDescription(longargs)
                                .setFooter(bot.user.username+" - by Cecemel_PvP#9876 | Ft. Kalyax#4031")
                                .setTimestamp()
                            bot.channels.findAll("name", "fastpub").map(channel => channel.send(embed))

                            cooldown.add(message.author.id)

                            setTimeout(() => {
                                cooldown.delete(message.author.id)
                            }, 3600000)
                        }
                    break;
                }else{
                    var embed = new Discord.RichEmbed()
                        .setColor(0xf46842)
                        .setAuthor("Envoyer une pub")
                        .setDescription(":no_entry_sign: Vous devez envoyer cela dans **#fastpub**")
                        .setFooter(bot.user.username+" - by Cecemel_PvP#9876 | Ft. Kalyax#4031")
                    message.channel.sendEmbed(embed);
                }
            }
            break;
            }
});

client.login(process.env.BOT_TOKEN);
