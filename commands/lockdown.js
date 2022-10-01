const ms = require('ms');
exports.run = (bot, message, args) => {

  if(message.member.hasPermission("ADMINISTRATOR")) {
  if (!bot.lockit) bot.lockit = [];
  const time = args.join(' ');
  const validUnlocks = ['release', 'unlock'];
  if (!time) return message.reply('Você deve definir uma duração para o bloqueio em horas, minutos ou segundos.');

  if (validUnlocks.includes(time)) {
    message.channel.overwritePermissions(message.guild.id, {
      SEND_MESSAGES: null
    }).then(() => {
      message.channel.send(' Bloqueio iniciado com sucesso!');
      clearTimeout(bot.lockit[message.channel.id]);
      delete bot.lockit[message.channel.id];
    }).catch(error => {
      console.log(error);
    });
  } else {
    message.channel.overwritePermissions(message.guild.id, {
      SEND_MESSAGES: false
    }).then(() => {
      message.channel.send(`Canal bloqueado por ${ms(ms(time), { long:true })}`).then(() => {

        bot.lockit[message.channel.id] = setTimeout(() => {
          message.channel.overwritePermissions(message.guild.id, {
            SEND_MESSAGES: null
          }).then(message.channel.send('Canal desbloqueado com sucesso!')).catch(console.error);
          delete bot.lockit[message.channel.id];
        }, ms(time));

      }).catch(error => {
        console.log(error);
      });
    });
  }
}
};

exports.help = {
  name: 'lockdown',
};