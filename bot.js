const Discord = require('discord.js');
const prefix = "!";
const client = new Discord.Client();
const bot = new Discord.Client();
const bn = "TenDoXx Bot";

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


});

client.on('guildMemberAdd', member => {
        client.channels.get('479983533142835216').send("Bienvenue ${member}");
});

client.on('guildMemberRemove', member => {
    let channel = client.channels.get('479983533142835216');
    let memberavatar = member.user.avatarURL
        if (!channel) return;
        let embed = new Discord.RichEmbed()
        .setColor(0xFF0012)
        .setThumbnail(memberavatar)
        .addField('Pseudo:', `${member}`)
        .addField('A quitté le serveur', ';(')
        .addField('Au revoir', 'Tu vas nous manquer')
        .addField('Le serveur a', `${member.guild.memberCount}` + " membres")
        .setFooter(`**${member.guild.name}`)
        .setTimestamp()

        channel.sendEmbed({ embed: embed });
});

client.login(process.env.BOT_TOKEN);
