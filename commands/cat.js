const Discord = require("discord.js");
const superagent = require("snekfetch");

module.exports.run = async (bot, message, args) => {
    let {
        body
    } = await superagent
        .get(`http://aws.random.cat/meow`);
    const catembed = new Discord.RichEmbed()
        .setTitle('Aww... Kitty!')
        .setColor("RANDOM")
        .setImage(body.file)
    message.channel.send(catembed);
}    

module.exports.help = {
    name:"cat"
}  