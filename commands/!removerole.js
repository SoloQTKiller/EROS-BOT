const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {

    if(message.member.id != "477567345439801345") return("Ops somente meu dono tem permissão de usar esse comando.");

    let membro = message.mentions.members.first() || message.guild.members.get(args[0])
    let cargo_nome = message.mentions.roles.first().name || args[1]

    if(!membro) return;

    if(!cargo_nome) return;

    let cargo = message.guild.roles.find(role => role.name === `${cargo_nome}`)
    
    membro.removeRole(cargo);
    message.author.send("O cargo " + args[1] + " foi removido do membro " + args[0]);
    
    
}    

module.exports.help = {
    name:"!removerole"
}  
