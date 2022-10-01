const Discord = require('discord.js');
const weather = require('weather-js');

module.exports.run = (bot, message, args) => {
  weather.find({search: args.join(" "), degreeType: 'C'}, function(err, result) {
      
      if (result === undefined || result.length === 0) {
          message.channel.send('**Por favor coloque uma localização válida**')
          return;
      }
      var current = result[0].current;
      var location = result[0].location;
      const embed = new Discord.RichEmbed()
          .setDescription(`**${current.skytext}**`)
          .setAuthor(`Clima de ${current.observationpoint}`)
          .setThumbnail(current.imageUrl)
          .setColor(0x00AE86)
          .addField('Fuso horário:',`UTC${location.timezone}`, true)
          .addField('Tipo de temperatura:',`°${location.degreetype}`, true)
          .addField('Temperatura:',`${current.temperature} °C`, true)
          .addField('Sensação:', `${current.feelslike} °C`, true)
          .addField('Vento:',current.winddisplay, true)
          .addField('Humidade:', `${current.humidity}%`, true)
          message.channel.send({embed});
  })
}
exports.help = {
    name: "clima",
  };