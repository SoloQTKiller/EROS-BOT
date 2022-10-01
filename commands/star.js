const A = require('discord.js');
exports.run = async (client, message, args) => {
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
                    .setImage('https://cdn.discordapp.com/attachments/470057469113270288/475016546377531412/ezgif.com-resize_4.gif')
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
    name: "star"
  }