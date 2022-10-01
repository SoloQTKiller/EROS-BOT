const Discord = require("discord.js");
const superagent = require("snekfetch");

module.exports.run = async (bot, message, args) => {

    if (!message.channel.nsfw) return message.channel.send('Esse canal não é um canal de conteúdo adulto')
        superagent.get('https://nekos.life/api/v2/img/lewd')
            .end((err, response) => {
          const lewdembed = new Discord.RichEmbed()
          .setImage(response.body.url)
          .setColor(`RANDOM`)
      message.channel.send(lewdembed);
        })
    
}    

module.exports.help = {
    name:"nsfw"
}  