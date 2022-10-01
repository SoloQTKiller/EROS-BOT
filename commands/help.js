const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {
    
    message.channel.send('teste').then(async msg => {
    
    await msg.react('👍')
    await msg.react('👎')
    })

const filter = (reaction, user) => {
    return ['👍', '👎'].includes(reaction.emoji.name) && user.id === message.author.id;
};

message.awaitReactions(filter, { max: 1, time: 60000, errors: ['time'] })
    .then(collected => {
        const reaction = collected.first();

        if (reaction.emoji.name === '👍') {
            message.reply('voce reagiu com 👍');
        }
        if (reaction.emoji.name === '👎') {
            message.reply('voce reagiu com 👎');
        }
    }).catch(collected => {
        console.log('Aviso comando help: o membro não reagiu a mensagem');
    });
}
        

module.exports.help = {
    name:"help"
}