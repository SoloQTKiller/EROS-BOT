const Discord = require("discord.js"); 
const moment = require("moment");
moment.locale("pt-BR");

exports.run = async (bot, message, args) => { 

  let reports = message.guild.channels.find("name", "📌banimento");
  if(!reports) return message.channel.send("Não foi possivel achar o canal de 📌banimento");

  let user = message.mentions.users.first()|| bot.users.get(args[2])||bot.users.get(args[0]);
  if(!user) return message.reply("Por favor mencione um usuário.\nEx: n!ban @SoloQTKiller ou n!ban ID do membro");

  let reason = args.slice(1).join(" ")
  if(!reason) reason = "Motivo não especificado.";
  message.delete();

  if(!message.member.hasPermission("BAN_MEMBERS")) return message.channel.send(`:x: | **${message.author}** sem permissão!`);

  if(!message.guild.member(user).bannable) return message.reply("Eu não posso banir esse usuário!")

  let Embed = new Discord.RichEmbed() 
  .setTitle("Ação: Usuário Banido")
  .setThumbnail(user.avatarURL)
  .setFooter("Hora do Banimento")
  .setColor("#ff0000")
  .setTimestamp()
  .addField("👮 Comando dado por:", `${ message.author.username}, ID: ${message.author.id}`)
  .addField("<:ban:528279296012320799> Usuário Banido:", `${user.username}, ID: ${user.id}`)
  .addField("📝 Motivo:", reason)

  reports.send(Embed);
  message.guild.member(user).ban(reason);
  
}
exports.help = {
  name: "bann"
}
