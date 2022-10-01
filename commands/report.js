const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {
    let rUser = message.guild.member(message.mentions.users.first() || message.guild.members.get(args[0]));
    if(!rUser) return message.channel.send("Couldn't find user.");
    let rreason = args.join(" ").slice(22);

    let reportEmbed = new Discord.RichEmbed()
    .setDescription("Reporte")
    .setColor("#e60000")
    .addField("Usuário reportado:", `${rUser} ID: ${rUser.id}`)
    .addField("Reportado por:", `${message.author} ID: ${message.author.id}`)
    .addField("Canal:", message.channel)
    .addField("Horário:", message.createdAt)
    .addField("Motivo:", rreason);

    let reportschannel = message.guild.channels.find(`name`, "reports");
    if(!reportschannel) return message.channel.send("**Não foi possivel encontrar o canal de reports!**");


    message.delete().catch(O_o=>{});
    reportschannel.send(reportEmbed);

}
 
module.exports.help = {
  name: "report"
}