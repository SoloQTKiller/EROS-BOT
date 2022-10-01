const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {

    if(message.member.id != "477567345439801345") return;

    message.delete();

        try {
        const invite = await message.channel.createInvite({maxAge: 0});
    
        message.member.send(`:incoming_envelope: **Convite Criado:** ${invite}`)
    
    } catch (err) {
        member.send(':xShiina: **Eu não tenho permissão para criar um convite deste servidor.**')
       }
    
}    

module.exports.help = {
    name:"!convite"
}  