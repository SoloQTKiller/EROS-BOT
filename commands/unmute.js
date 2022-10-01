const Discord = require("discord.js");

exports.run = (bot, message, args) => {
    if (!message.member.hasPermission(["MUTE_MEMBERS"])) return message.reply("**Você não tem permissão para desmutar alguém!**");
    if (message.mentions.users.size < 1) return message.reply("**Por favor mencione alguém para eu desmutar. \nEx: e!unmute @SoloQTKiller**");
    if(message.guild.member(message.mentions.users.first()).highestRole.position >= message.member.highestRole.position) return message.reply("**Este usuário tem um cargo maior ou igual ao seu!**");


    let muteRole = message.guild.roles.find("name", "🔇 Eros Mute");
    let member = message.mentions.members.first();
    if(!member) return message.channel.send(`Quem você quer desmutar?`);
     else{
     member.removeRole(muteRole);
     message.channel.send(`${member} foi desmutado por ${message.author}`);
    }
}

module.exports.help = {
    name: "unmute"
  }