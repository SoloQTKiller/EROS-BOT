const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {

    let kiss = [
        "https://media1.tenor.com/images/cddc857b201c0273452a7ceddf0acca4/tenor.gif?itemid=9836808",
        "https://media1.tenor.com/images/b1189e353db0bed3521885bec284264b/tenor.gif?itemid=11453877",
        "https://media1.tenor.com/images/e133e6834b261dfbb1d782c0d725bb40/tenor.gif?itemid=4469403",
        "https://media1.tenor.com/images/cc087a0a72dfb9ee31601f672995d86b/tenor.gif?itemid=9064175",
        "https://media1.tenor.com/images/d307628d5dccd55f82154ebacdf2cf99/tenor.gif?itemid=7682340",
        "https://media1.tenor.com/images/1b6fd95b758f1a4d43be0f4a05ce98ec/tenor.gif?itemid=5090086",
        "https://media1.tenor.com/images/cc66615e41d5a9f601e177442a8e7dc6/tenor.gif?itemid=12471837",
        "https://media1.tenor.com/images/a5e3c4b69bb2172304b44717338b5c67/tenor.gif?itemid=3983782",
        "https://media1.tenor.com/images/ee2dc9826e81b626e5f0f0aef65b6d34/tenor.gif?itemid=10276933",
        "https://media1.tenor.com/images/37e246f166cf807255e5e6fdc80bdf34/tenor.gif?itemid=8182168",
        "https://media1.tenor.com/images/ad6ae686f6e8ed9fd6b6cf27731432e8/tenor.gif?itemid=10385036",
        "https://media1.tenor.com/images/4377c3e0151aa4dab3439d93c5d3aa78/tenor.gif?itemid=4946290",
          "https://thumbs.gfycat.com/BasicPeskyGuillemot-max-1mb.gif",
          "http://25.media.tumblr.com/e7f39c316f0923710c9b12e9583455ba/tumblr_mj7yrrtFaa1s7cfr2o1_500.gif",
          "https://media2.giphy.com/media/TkDX9bkIROf8k/giphy.gif",
          "http://gifimage.net/wp-content/uploads/2017/09/anime-gif-kiss-11.gif",
          "https://i.imgur.com/eisk88U.gif",
          "https://i.pinimg.com/originals/42/c3/85/42c3851fc31dc3434dfe5fa7e3463f1d.gif",
          "https://i.makeagif.com/media/7-05-2015/553Vsb.gif",
          "https://i.gifer.com/2II9.gif",
          "http://gif-finder.com/wp-content/uploads/2015/09/Angry-Birds-Orange-Kiss.gif",
          "https://media1.tenor.com/images/6af13a438013667a81031dde8d6b6931/tenor.gif",
          "https://media1.tenor.com/images/a3e63e98f0344a2e9a040ea5df3769b0/tenor.gif",
          "https://media1.tenor.com/images/fb92d0be78a1ea19af0168c0ca29c1bd/tenor.gif?itemid=5615952",
        
      ]
      let hugresult = Math.floor((Math.random() * kiss.length));
      if (!args[0]) {
          const ghembed = new Discord.RichEmbed()
              .setColor(`RANDOM`)
              .setTitle(`${message.author.username} se beijou! (amor própio é tudo)`)
              .setImage('https://cdn.discordapp.com/attachments/452115003659780096/460369555823525898/kiss.gif')
          message.channel.send({
              embed: ghembed
          })
          return;
      }
      if (!message.mentions.members.first().user.username === message.isMentioned(message.author)) {
          const hembed = new Discord.RichEmbed()
              .setColor(`RANDOM`)
              .setTitle(`${message.author.username} acaba de beijar ${message.mentions.members.first().user.username} que fofos.`)
              .setImage(kiss[hugresult])
          message.channel.send({
              embed: hembed
          })
          return;
      }
      const ghembed = new Discord.RichEmbed()
          .setColor(`RANDOM`)
          .setTitle(`${message.author.username} se beijou! (amor própio é tudo)`)
          .setImage('https://cdn.discordapp.com/attachments/452115003659780096/460369555823525898/kiss.gif')
      message.channel.send({
          embed: ghembed
      })
  
}    

module.exports.help = {
    name:"kiss"
}  