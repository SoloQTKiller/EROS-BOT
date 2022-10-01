const Discord = require("discord.js");

module.exports.run = async (client, message, args) => {
    let suggestionChat = client.channels.get("510217769904504853");
    suggestion = args.join(" ");
    if (!args[0]) return message.channel.send("**ERRO USE**: `e!botdica **<dica para o bot>**`")
    let suggestionEmbed = new Discord.RichEmbed()
    .setAuthor(`${message.author.tag} (${message.author.id})`, message.author.avatarURL)
    .setColor(0xffff00)
    .setTitle("Nova dica para o bot")
    .setDescription(suggestion)
    .setTimestamp()

    suggestionChat.send(suggestionEmbed).then(async msg => {
        await msg.react("👍");
        msg.react("👎")
    })
    message.delete();
    return message.channel.send("Obrigado por nos enviar a sua dica <3").then(msg => {
        msg.delete(10000)
    })
}

module.exports.help = {
    name: "botdica"
  }
