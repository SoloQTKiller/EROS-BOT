const Discord = require('discord.js')
const database = require('../database.js')

module.exports.run= async (bot,message,args,cor)=>{
    if(message.member.id != "477567345439801345") return;
    if(!message.member.hasPermissions("ADMINISTRATOR")) return message.reply("você não tem permissão de usar esse comando")
    database.Anuncios.findOne({
        _nome:args.slice(1).join(' ')
    },function(err,doc){
        if(doc){
            database.Anuncios.deleteOne({
                _nome: doc._nome
            }).then(msg=>{
                message.channel.send('Anuncio apagado!')
            })
        }else{
            var save = new database.Anuncios({_nome:args.slice(1).join(' ')})
            save.save()
            message.channel.send(`Anúncio ${save._nome} criado! Agora coloque a foto do anúncio ${save._nome} abaixo:   (\`5 minutos\`)`).then(msg1=>{
                let collector = message.channel.createMessageCollector(m=>m,{time:300000})
                collector.on('collect',message1=>{
                    if(message1.author != message.author) return
                    if(message1.content.length > 0){
                        save.foto = message1.content
                        save.save()
                        collector.stop()
                        msg1.delete()
                        message.channel.send('Foto definida! Agora vamos ao assunto do anúncio... Digite-o abaixo:  (`5 minutos`)').then(msg2=>{
                            let collector = message.channel.createMessageCollector(m=>m,{time:300000})
                            collector.on('collect',sobre=>{
                                if(sobre.author != message.author) return
                                if(sobre.content.length > 0){
                                    save.conteudo = sobre.content
                                    save.save();
                                    collector.stop()
                                    msg2.delete()
                                    message.channel.send('Anúncio pronto! Digite o id do para ser enviado abaixo:   (`5 minutos`)').then(msg3=>{
                                        let collector = message.channel.createMessageCollector(m=>m,{time:300000})
                                        collector.on('collect',canal=>{
                                            if(canal.author != message.author) return
                                            if(canal.content.length > 0){
                                                collector.stop()
                                                let embed = new Discord.RichEmbed()
                                                .setImage(save.foto)
                                                .setColor('RANDOM')
                                                .setDescription(save.conteudo)
                                                msg3.delete();
                                                bot.channels.get(canal.content).send(embed)
                                                message.channel.send(`Anúncio ${save._nome} feito no canal <#${canal.content}>!\nPara apagar o anúncio do meu banco de daos use e!anuncio \`${save._nome}\`!`)
                                            }
                                        })
                                    })
                                }
                            })
                        })
                    }
                })
            })
        }
    })

}
module.exports.help={
    name:'anuncio'
}