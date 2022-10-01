const A = require('discord.js');
exports.run = async (bot, message, args) => {
    const emoji1 = '🇳'
    const emoji = '🇾'
    message.channel.send('Atenção: Este comando pode lhe dar tontura. Deseja continuar? \nAo aceitar você é responsável por causar convulsões a outras pessoas.').then(msg => {
        msg.react(emoji).then(r => {
            msg.react(emoji1)
            const yes = (reaction, user) => reaction.emoji.name === emoji && user.id === message.author.id;
            const nopleas = (reaction, user) => reaction.emoji.name === emoji1 && user.id === message.author.id;
            const sure = msg.createReactionCollector(yes, {
                time: 1000000
            });
            const no = msg.createReactionCollector(nopleas, {
                time: 1000000
            });
            sure.on('collect', r => {
                msg.delete();
                const emb = new A.RichEmbed()
                    .setColor(0xFFFF00)
                    .setImage('https://cdn.glitch.com/ce500e3d-b500-47a8-a6a8-c0b5657d808c%2FWebp.net-gifmaker.gif')
                    .setFooter(`Solicitado por: ${message.author.tag}`);
                message.channel.send({
                    embed: emb
                })
            })
            no.on('collect', r => {
                msg.delete();
            })
        })
    })
}
exports.help = {
    name: "playdough"
  }