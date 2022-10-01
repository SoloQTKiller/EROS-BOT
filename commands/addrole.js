var discord = require('discord.js') 
module.exports.run = (bot, message, args) => {


    if (!message.member.hasPermission("ADMINISTRATOR")) return message.channel.send("Você não tem permissão para executar este comando.")

    let membro = message.mentions.members.first() || message.guild.members.get(args[0])
    let cargo_nome = message.mentions.roles.first().name || args[1]

    if(!membro) return;

    if(!cargo_nome) return;

    let cargo = message.guild.roles.find(role => role.name === `${cargo_nome}`)
    
    if(membro.roles.has(cargo.id)) return ("o membro ja tem esse cargo")
    membro.addRole(cargo.id);
    message.reply("O cargo " + args[1] + " foi adicionado ao membro " + args[0]);
}

module.exports.help = {
    name: "addrole"
}