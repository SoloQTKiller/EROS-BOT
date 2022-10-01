const Discord = require('discord.js');
const moment = require('moment');

const cooldown = new Set();
exports.run = async(client, message, ops) => {
    let args = message.content.split(' ').slice(1).join(' ');
    message.delete();
    if (cooldown.has(message.author.id && message.guild.id)) {
        return message.channel.send('**[COOLDOWN]** Você só pode enviar tickets a cada **5 Minutos**!');
    }
    if (args.length < 1) {
        return message.channel.send(`Por favor envie um ticket válido ${message.author}`);
    }
    cooldown.add(message.author.id && message.guild.id);
    setTimeout(() => {
        cooldown.delete(message.author.id && message.guild.id);
    }, 300000);
    let guild = message.guild;
    const cnl = message.guild.channels.find("name", "tickets");
    message.channel.send(`Olá, ${message.author}, recebemos o seu ticket! Nós vamos lhe responder o mais breve possível! Aqui está a cópia do seu ticket completo:`);
    const embed2 = new Discord.RichEmbed()
        .setAuthor(`Ticket de: ${message.author.tag}`, message.author.displayAvatarURL)
        .addField('Ticket:', `**Autor do Ticket:** ${message.author.tag}\n**Servidor:** ${guild.name}\n**Ticket completo:** ${args}`)
        .setThumbnail(message.author.displayAvatarURL)
        .setFooter(`${moment().format('MMMM Do YYYY, h:mm:ss a')}`)
        .setColor(16711728);
    message.member.send({ embed: embed2 });
    const embed = new Discord.RichEmbed()
        .setAuthor(`Ticket de ${message.author.tag}`, message.author.displayAvatarURL)
        .addField('Ticket:', `**Autor do ticket:** ${message.author.tag}\n**Server:** ${guild.name}\n**Report completo:** ${args}`)
        .setThumbnail(message.author.displayAvatarURL)
        .setColor("#ffd700");
    cnl.send({ embed })
        .catch(e => logger.error(e))
};
module.exports.help = {
    name: "ticket"
  }