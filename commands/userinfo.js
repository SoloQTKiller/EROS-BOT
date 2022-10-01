const Discord = require('discord.js');
const moment = require("moment");
moment.locale("pt-BR");

exports.run = async (bot, message, args) => {
	let user;
	//Id para verificar se tem algum membro mencionado caso nao tenha o autor sera o membro a se consultar
    if (message.mentions.users.first()) {
      user = message.mentions.users.first();
    } else {
        user = message.author;
    }
	// Guarda nome do usuario que enviou a mensagem
    const member = message.guild.member(user);
    
    
    const embed = new Discord.RichEmbed()
		.setColor('RANDOM')
		.setThumbnail(user.avatarURL)
        .setTitle(`${user.username}#${user.discriminator}`)
        .setDescription("**Nick:**```" + `${member.user.username}` + "```\n")
        .addField("ID:", "```" + `${user.id}` + "```", true)    
		.addField("Conta criada em:", "```" +`${moment.utc(user.createdAt).format('dddd, Do MMMM YYYY, HH:mm:ss')}` + "```", true)
		.addField("Entrou no Server:","```" + `${moment.utc(member.joinedAt).format('dddd, Do MMMM YYYY, HH:mm:ss')}` + "```", true)
		.addField("Jogando:","```" +  `${user.presence.game ? user.presence.game.name : 'Nada'}` + "```", true)
		.addField("Cargos:","```" +  member.roles.map(roles => `${roles.name}`).join(', ') + "```", true)
        .setFooter(`Solicitado por:  ${message.author.username}#${message.author.discriminator}`)
     message.delete().catch(O_o=>{});
     message.channel.send({embed});
    }
module.exports.help = {
    name: "userinfo"
  }