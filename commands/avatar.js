const Discord = require('discord.js');

exports.run = (bot, message, args) => {
    if (args.join(" ") == "") {
        message.reply("Você precisa mencionar um usuário ao usar este comando! Exemplo: e!avatar @USER");
        return;
    } else {
        let user = message.mentions.users.first(); // Mentioned user
        let image = user.displayAvatarURL; // Get image URL
        let embed = new Discord.RichEmbed()
            .setAuthor(`${user.username}#${user.discriminator}`) // Set author
            .setColor("#0000000") // Set color (If you don't have ideas or preference, use RANDOM for random colors)
            .setImage(image) // Set image in embed
        message.channel.send(embed); // Send embed
    }
}
exports.help = {
    name: "avatar"
  }