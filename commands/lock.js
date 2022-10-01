const Discord = require("discord.js");


module.exports.run = async (bot, message) => {
    if(!message.member.hasPermission("MANAGE_CHANNELS")) return;
    let channel = message.channel;
        channel.overwritePermissions(message.guild.id, {
            SEND_MESSAGES: false
        })
        return message.channel.send(`<#${message.channel.id}> canal desbloqueado por **${message.author.tag}** :unlock:`);
}

module.exports.help = {
    name: "unlock"
}