const Discord = require("discord.js"); 
const moment = require("moment");
moment.locale("pt-BR");

exports.run = async (bot, message, args) => { 

    if(!message.member.hasPermission("ADMINISTRATOR")) return message.channel.send(`Você não tem permissão`);

    message.channel.send("Por favor, envie o link da foto do evento: (\`5 minutos\`)");
    var tazer = message.channel.createMessageCollector(a=>a.author.id == message.author.id, { time: 300000, max: 1 });
    tazer.on('collect', r=> {
        let img = r.content;
        message.channel.send("Ok agora me envie a descrição do evento: (\`5 minutos\`)");
      
        var tazer1 = message.channel.createMessageCollector(a=>a.author.id == message.author.id, { time: 300000, max: 1 });
        tazer1.on('collect', r=> {
        let descricao = r.content;
        message.channel.send("Agora me envie link da call do evento: (\`5 minutos\`)");

        var link = message.channel.createMessageCollector(b=>b.author.id == message.author.id,  { time: 300000, max: 1 });
        link.on('collect', r2=> {
            let link = r2.content;

            const Embed = new Discord.RichEmbed()
            .setImage(img)
            .setTitle("🌠 Night Vision 🌠")
            .setColor("#6C2DBD")
            .setDescription(`**Descrição do evento:** ${descricao}
            \n**Respondam o Formulário no canal:** ${link}`)
            message.channel.send(Embed)
            /* try{

            messsage.channel.send(Embed);

        }catch(err){

            return message.reply("**Ocorreu um erro. Por favor, tente novamente.**")

            }
            */
           const membros = message.guild.memberCount;
           try{
            message.guild.members.map(membro => {
                 membro.send(Embed).catch(() => {});
            })
        }catch(err){

            return message.reply("**Ocorreu um erro ao enviar a mensagem. Por favor, tente novamente.**")

           }
            message.channel.send("A mensagem está sendo enviada para " + membros + " membros")
        })
    })
})
}

exports.help = {
    name: "eevento"
  }
  