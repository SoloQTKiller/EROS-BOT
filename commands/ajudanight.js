const Discord = require('discord.js')

module.exports.run = async(bot,message,args) => {

bot.getEmoji = emoji => bot.emojis.find(e => e.name === emoji);

//Embed Principal    
let principal = new Discord.RichEmbed()
.setDescription(` Olá eu sou o Night Vision fui feito para ajudar na administração do servidor Night Vision, atualmente temos 21 comandos e eles são dividos nas seguintes categorias: \n\n${bot.getEmoji("moderacao")} | Moderação\n${bot.getEmoji("utilidade")} | Utilidades\n${bot.getEmoji("entreterimento")} | Entreterimento\n${bot.getEmoji("outros")} | Outros\n${bot.getEmoji("voltar")} | Volta para o menu principal`)
.setTitle("Menu Principal")
.setColor("#0000e6")
.setThumbnail(bot.user.avatarURL)

//Embed moderacao
let moderacau = new Discord.RichEmbed()
.setDescription("``n!ban [Usuário ou ID]``\n Comando para banir usuário. \n\n``n!clear [Quantidade]``\n Comando para excluir mensagens do canal. \n\n``n!lock`` \n Comando para bloquear canal. \n\n``n!unlock``\n Comando para desbloquear canal. \n\n``n!lockdown [Tempo]``\n Comando para bloquear canal por tempo.\n\n``n!unban [ID]``\n Comando para desbanir usuário. \n\n``n!kick [Usuário]``\n Comando para dar kick no usuário.")
.setTitle("Moderação")
.setColor("#0000e6")
.setThumbnail(bot.user.avatarURL)

//Embed Utilidade
let utilidades = new Discord.RichEmbed()
.setDescription("\n``n!avatar [Usuário]``\n Comando para poder ver avatar do usuário. \n\n``n!clima [Nome da sua cidade]``\n Comando para mostrar informações sobre o clima da sua cidade. \n\n``n!div [Usuário]``\n Comando para ver quantas pessoas entrou pelo link. \n\n``n!emojify [Emoji]``\n Comando para ampliar emoji. \n\n``n!severinfo``\n Comando para ver informações sobre o servidor. \n\n``n!userinfo [Usuário]``\n Comando para ver informações sobre o usuário.")
.setTitle("Utilidade")
.setColor("#0000e6")
.setThumbnail(bot.user.avatarURL)

//Embed para outros métodos
let entreterimento = new Discord.RichEmbed()
.setDescription("\n``n!nsfw``\n Comando para os membros safadinhos se entreterem. \n\n``n!playdough``\nComando que envia a imagem da playdough. \n\n``n!star``\n Comando que envia imagem de uma estrela. \n\n``n!say [Mensagem]``\n Comando que faz com que o bot envie a mensagem que mandou.\n\n``n!kiss [Usuário]``\n Comando apra beijar alguém.")
.setTitle("Entreterimento")
.setColor("#0000e6")
.setThumbnail(bot.user.avatarURL)

//Embed para outros métodos
let outros = new Discord.RichEmbed()
.setDescription("\n\n``n!ping``\n Comando para ver o ping do bot. \n\n``n!stats``\n Comando para ver o status do bot. \n\n``n!uptime``\n Comando apra ver a quanto tempo o bot está ligado.")
.setTitle("Outros")
.setColor("#0000e6 ")
.setThumbnail(bot.user.avatarURL)


//Aqui será adicionada as reações na mensagem, para ir em ordem, só acrescentar msg.react(' ').then(r =>{   Lembre-se de fechar cada uma.
message.channel.send(principal).then(msg =>{
msg.react('528279296012320799').then(r => {
msg.react('538116746951917596').then(r => {
msg.react('538116712554299392').then(r => {
msg.react('538122785650638868').then(r => {
msg.react('538116711065321482').then(r => {


//Aqui será criado a váriavel do seu react, onde pega seu id do author da message, para somente ele reagir.
const embedmod = (reaction, user) => reaction.emoji.id === '528279296012320799' && user.id === message.author.id; //moderacao

const embedutil = (reaction, user) => reaction.emoji.id === '538116746951917596' && user.id === message.author.id; //Utilidade

const embedavulsa = (reaction, user) => reaction.emoji.id === '538116712554299392' && user.id === message.author.id; //avulsa

const embedavulsa2 = (reaction, user) => reaction.emoji.id === '538122785650638868' && user.id === message.author.id; //avulsa2

const voltar = (reaction, user) => reaction.emoji.id === '538116711065321482' && user.id === message.author.id; //Voltar


//Aqui você pega as variáveis que criou ali em cima e cria o Coletor delas e determina o tempo para o author reagir.
const moderacao = msg.createReactionCollector(embedmod, {time: 120000 })

const utilidade = msg.createReactionCollector(embedutil, {time: 120000})

const avulsa = msg.createReactionCollector(embedavulsa,{time: 120000})

const avulsa2 = msg.createReactionCollector(embedavulsa2,{time: 120000})

const back = msg.createReactionCollector(voltar,{time: 120000})

//Aqui o Coletor dos reacts.
moderacao.on('collect', r =>{
msg.edit(moderacau)
r.remove(message.author.id)
});

utilidade.on('collect', r =>{
msg.edit(utilidades)
r.remove(message.author.id)
});

avulsa.on('collect', r =>{
msg.edit(entreterimento)
r.remove(message.author.id)
});

avulsa2.on('collect', r =>{
msg.edit(outros)
r.remove(message.author.id)
});

back.on('collect', r =>{
msg.edit(principal)
r.remove(message.author.id)
});

//Aqui os fechamentos
 })
  })
   })
    })
     })
      }) 
        }

exports.help = {
    name: 'ajudanight'
}