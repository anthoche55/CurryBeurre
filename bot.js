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

bot.on('guildMemberAdd', member => {
    let channel = member.guild.channels.get('479983533142835216');
    let memberavatar = member.user.avatarURL
        if (!channel) return;
        let embed = new Discord.RichEmbed()
        .setColor(0x228B22)
        .setThumbnail(memberavatar)
        .addField(':bust_in_silhouette: | Pseudo : ', `${member}`)
        .addField(':microphone2: | Bienvenue!', `Bienvenue sur le serveur, ${member}`)
        .addField(':id: | User :', "**[" + `${member.id}` + "]**")
        .addField(':family_mwgb: | Tu es le', `${member.guild.memberCount} membre`)
        .addField("Mention", `<@` + `${member.id}` + `>`, true)
        .addField('Serveur', `${member.guild.name}`, true )
        .setFooter(`**${member.guild.name}**`)
        .setTimestamp()

        channel.sendEmbed(embed);
});

bot.on('guildMemberAdd', member => {

    console.log(`${member}`, "has joined" + `${member.guild.name}`)

});

bot.on('guildMemberRemove', member => {
    let channel = member.guild.channels.get('479983533142835216');
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

        channel.sendEmbed(embed);
});

bot.on('guildMemberRemove', member => {
    console.log(`${member}` + "left" + `${member.guild.name}` + "Sending leave message now")
    console.log("Leave Message Sent")
});

client.login(process.env.BOT_TOKEN);
