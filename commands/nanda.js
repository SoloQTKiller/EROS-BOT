const Discord = require("discord.js"); 
const bans = require('./bans/banimentos_personalizados.json');
const moment = require("moment");
moment.locale("pt-BR");

exports.run = async (bot, message, args) => { 

  if(message.member.id != "520336087504257025") return("Ops somente meu dono tem permissão de usar esse comando.");

  if(message.guild.member(message.mentions.users.first()).highestRole.position >= message.member.highestRole.position) return message.reply("**Este usuário tem um cargo maior ou igual ao seu!**");

  let user = message.mentions.users.first()|| bot.users.get(args[0]);
  if(!user) return message.reply("Por favor mencione um usuário.\nEx: e!nanda @SoloQTKiller");

  let reason = args.slice(1).join(" ")
  if(!reason) reason = "Motivo não especificado.";

  if(!message.member.hasPermission("BAN_MEMBERS")) return message.channel.send(`:x: | **${message.author}** sem permissão!`);

  if(!message.guild.member(user).bannable) return message.reply("Eu não posso banir esse usuário!")

  message.guild.member(user).ban(reason);

  const mudarhora = moment.utc(message.createdAt).format('HH');
  const hora = mudarhora - 2;

  let Embed = new Discord.RichEmbed() 
  .setTitle("Ação: Usuário Banido")
  .setFooter("Hora do Banimento")
  .setColor("#ff0000")
  .setTimestamp()
  .addField(" Usuário Banido:", `${user}, ID: ${user.id}`)
  .addField("Motivo:", reason)
  .addField("Comando dado por:", `${message.author}, ID: ${message.author.id}`)
  .addField("Horário:", hora + moment.utc(message.createdAt).format(':mm:ss'))
  .setImage(bans.imagem_520336087504257025)

  message.channel.send(Embed);
}
exports.help = {
  name: "nanda"
}