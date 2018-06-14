const Discord = require('discord.js');
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
  "Un monsieur visite un musée. Soudain il s'arrête et dit au guide :  \n- Ah, c'est moche ! \n- C'est du Picasso, répond le guide. \nPlus loin, il s'écrie de nouveau : \n- Ah, c'est vraiment moche ! \n- Ca Monsieur, c'est un miroir !"
]
    
    var randomAnswer = answers[Math.floor(Math.random() * answers.length)];

if(message.content.startsWith("ggl!blague")) {
	const embed = new Discord.RichEmbed()
	.setTitle("Une blague ? C'est parti")
	.addField(randomAnswer)
message.channel.send({embed});.channel.send(randomAnswer
}
    
});

// THIS  MUST  BE  THIS  WAY
client.login(process.env.BOT_TOKEN);
