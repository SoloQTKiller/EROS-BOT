const Discord = require("discord.js");


module.exports.run = async (bot, message, args) => {
	if (!message.member.hasPermission("MANAGE_MESSAGES")) return message.reply(`Você não tem permissão para usar esse comando!!!`);
	if (!args[0]) return message.channel.send("Por favor me diga quantas mensagens você quer que eu apague.");
	message.channel.bulkDelete(args[0]).then(() => {
		message.channel.send(`Foram excluidas ${args[0]} menssagens.`).then(msg => msg.delete(10000));
	});

}

module.exports.help = {
	name: "clear",
}