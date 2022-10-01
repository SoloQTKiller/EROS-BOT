const Discord = require("discord.js");
const fs = require("fs");
let ban = require("../ban.json");

module.exports.run = async (bot, message, args) => {

    if(!message.member.hasPermission("BAN_MEMBERS")) return message.channel.send(`Opa parece que você não tem permissão para usar esse comando.`);

    var link = args.slice(1).join(" ")

    if(!ban[message.author.id]){
        ban[message.author.id] = {
          gif: "https://images-ext-2.discordapp.net/external/Ijes8w7f8uhF_zSftJ27TFlsuq_p9TXlI5Cm5Dcc_XI/https/images-ext-2.discordapp.net/external/nkM1wQPM13e90tjfP12oFkg-kYoBaNSSsr5vjdJFqb4/https/cdn.discordapp.com/attachments/521432483888365569/530572321681833997/Sem_Titulo-2.gif",
          bans: 0
        };
      }
    
      ban[message.author.id].gif = link,

      message.channel.send("Seu gif de ban foi setado com sucesso")
}
module.exports.help = {
    name: "setgif"
  }