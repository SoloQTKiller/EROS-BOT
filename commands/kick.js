const Discord = require("discord.js");
const moment = require("moment");
moment.locale("pt-BR");

module.exports.run = async (bot, message, args) => {

        var razao = args.slice(1).join(" ")
        var membro = message.mentions.members.first();

        if(!message.member.hasPermission("KICK_MEMBERS")) return message.reply("você não tem permissão de usar esse comando")

        if(message.guild.member(message.mentions.users.first()).highestRole.position >= message.member.highestRole.position) return message.reply("**Este usuário tem um cargo maior ou igual ao seu!**");

        if(!membro) return message.reply("Você não mencionou ninguém")

        if(razao.length < 1) return message.reply("Você não especificou o motivo!")

        if(!message.guild.member(membro).kickable) return message.reply("Eu não posso kickar esse usuário!")

        const mudarhora = moment.utc(message.createdAt).format('HH');
        const hora = mudarhora - 2;

        membro.kick()
        let Embed = new Discord.RichEmbed() 
          .setTitle("Ação: Usuário kickado")
          .setFooter("Hora do kick")
          .setColor("#ff0000")
          .setTimestamp()
          .addField(" Usuário kickado:", `${membro}, ID: ${membro.id}`)
          .addField("Motivo:", razao)
          .addField("Comando dado por:", `${message.author}, ID: ${message.author.id}`)
          .addField("Horário:", hora + moment.utc(message.createdAt).format(':mm:ss'))

  message.channel.send(Embed);

}    

module.exports.help = {
    name:"kick"
}  
