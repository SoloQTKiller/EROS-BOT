const config = require('./config.json');
const Discord = require('discord.js');
const fs = require("fs");
const bot = new Discord.Client({disableEveryone: true});
bot.commands = new Discord.Collection();
const links = require('./links.json');
const database = require('./database.js')
const superagent = require("snekfetch");
const ownerID = '477567345439801345';
let ban = require("./ban.json");
const active = new Map();

function traduzir(_números) {
    _números = _números.toString();
    var texto = ``, números = { 1: 'a:_1_:521143134579851266', 2: 'a:_2_521143146546069531:', 3: 'a:_3_521143146466377749:', 4: 'a:_4_521143148685164544:', 5: 'a:_5_521143145166274572:', 6: 'a:_6_:521143146919231498', 7: 'a:_7_:521143144960491540', 8: 'a:_8_:521143146961436685', 9: 'a:_9_:521143150144913418', 0: 'a:_0_:521143117928202270' };

    //var texto = ``, números = { 1: 'one', 2: 'two', 3: 'three', 4: 'four', 5: 'five', 6: 'six', 7: 'seven', 8: 'eight', 9: 'nine', 0: 'zero' };

    for(let i =0; i < _números.length; i++) texto += '<' + números[parseInt(_números[i])] + '>';

   return texto;
}

fs.readdir("./commands/", (err, files) => {
    
    if(err) console.log(err);

    let jsfile = files.filter(f => f.split(".").pop() === "js")
    if(jsfile.length <= 0){
        console.log("Não foi encontrado nenhum comando em ./commands");
        return;
    }

    console.log(`=-=-=-=- Carregando comandos =-=-=-=-`);

    jsfile.forEach((f, i) => {
        let props = require(`./commands/${f}`);
        console.log(`${f} carregado!`);
        bot.commands.set(props.help.name, props);
    });
})

/*
bot.on("guildMemberAdd", member =>{
    member.guild.channels.get('520825979233632268').send("Hello " + member.user +", Seja-Bem vindo Noturnos(a)!!!  Para ser registrar responda as perguntas no chat <#514964374205628436>");
    member.guild.channels.get('520825979233632268').setTopic(`Agora somos ${traduzir(member.guild.memberCount)} membros. Link do server pra chamar seus amigos https://discord.gg/QhuFR7W  <:NightVision_logo:518231233164214293>`);
});
*/

bot.on("guildMemberRemove", member => {
});

bot.on('ready', () => {
    console.log(`=-=-=-=- Comandos carregados =-=-=-=-`);
    console.log('\n\t    ######## ########   #######   ######  \n\t    ##       ##     ## ##     ## ##    ## \n\t    ##       ##     ## ##     ## ##       \n\t    ######   ########  ##     ##  ######  \n\t    ##       ##   ##   ##     ##       ## \n\t    ##       ##    ##  ##     ## ##    ## \n\t    ######## ##     ##  #######   ###### ');
    console.log(`\n   #### ##    ## ####  ######  ####    ###    ########   #######  \n    ##  ###   ##  ##  ##    ##  ##    ## ##   ##     ## ##     ## \n    ##  ####  ##  ##  ##        ##   ##   ##  ##     ## ##     ## \n    ##  ## ## ##  ##  ##        ##  ##     ## ##     ## ##     ## \n    ##  ##  ####  ##  ##        ##  ######### ##     ## ##     ## \n    ##  ##   ###  ##  ##    ##  ##  ##     ## ##     ## ##     ## \n   #### ##    ## ####  ######  #### ##     ## ########   ####### `)
    console.log(`\nCom ${bot.users.size} usuarios, em ${bot.channels.size} canais e ${bot.guilds.size} servidores.`); 
    status = ('e!help | ' + bot.users.size + ' users | ' + bot.guilds.size + ' servers.')
    bot.user.setPresence({ game: { name: `${status}`, url: 'https://www.twitch.tv/soloqtkiller', type: 1 } });

    
});

bot.on('message', message => { //If responsavel por pegar a mensagem e dizer qual a resposta 

    if (message.guild) {
        let ops = {
          ownerID: ownerID,
          active: active
        }}

    const swearWords = ["Filho da puta", "Fdp","darn"];
    if( swearWords.some(word => message.content.includes(word)) ) {
        message.delete();
        message.author.send('Hey! Essa palavra foi banida, por favor, não utilize ela novamente!');
      }
      
      let boti = bot
      if(boti == undefined) {boti = client}
      if(message.content.startsWith(`<@${boti.user.id}>`)) {
          message.channel.send("oi")
     }
     
    if (!message.content.startsWith(config.prefix) || message.author.bot) return;

    if(message.author.bot) return;
    if(message.channel.type === "dm") return;

    let prefix = config.prefix;
    let messageArray = message.content.split(" ");
    let cmd = messageArray[0];
    let args = messageArray.slice(1);

    let commandfile = bot.commands.get(cmd.slice(prefix.length));
    if(commandfile) commandfile.run(bot,message,args);

    if(message.content.startsWith(config.prefix + 'unban')) {
    let member = bot.users.get(args[0])
    if (!member) return;

    message.guild.unban(member)
    message.channel.send({
        embed: {
            title: `O usuário ${member.username} acabou de ser desbanido do servidor`,
            fields: [{
                    name: "Usuário",
                    value: member.tag,
                    inline: true
                },
                {
                    name: "ID",
                    value: member.id,
                    inline: true
                }
            ],
        }
    })
    }


    responseObject = links;
    if(responseObject[message.content]){
        message.channel.send(responseObject[message.content]);
    }
    
    if(message.content.startsWith("e!roleta")){ //If jogo da roleta russa
        randomnumber = Math.floor(Math.random()*(6 - 1) + 1);
    if(randomnumber == 2)
        message.reply("Morreu!");
    else{
        message.reply("Sobreviveu!");
        }
    }
    const msgs = message.content.slice(config.prefix.length).trim().split(/ +/g); //dividir mensagem em partes

    if(message.content.startsWith(config.prefix + 'setnick')){ //If para mudar nick de um membro
        message.member.setNickname(msgs[1]);
        message.channel.send(message.author + " agora você se chama " + msgs[1])
    }

    const novostts = args.slice(1).join(" ")//serve para pegar mensagem escrita logo após o comando exemplo e!setstatus teste ele irá pegar (teste) e tudo o que estiver na frente

    if(message.content.startsWith(config.prefix + 'setstatus')){ //If para mudar status do bot
        if(message.member.id == "477567345439801345") {//teste para saber se o autor da mensagem é o dono do bot
            bot.user.setPresence({ game: { name: `${novostts}`, url: 'https://www.twitch.tv/soloqtkiller', type: 1 } });
          }
          if(message.member.id !== "477567345439801345") {//caso o autor não seja o dono retornara esta mensagem
            message.channel.send("Se acalme ai malandrinho(a). \nVocê não é meu dono para usar esse comando!");
          }
    }

    if(message.content.startsWith(config.prefix + 'resetstatus')){ ///If para resetar status do bot
        if(message.member.id == "477567345439801345") { //teste para saber se o autor da mensagem é o dono do bot
            status = ('e!help | ' + bot.users.size + ' users | ' + bot.guilds.size + ' servers.')
            bot.user.setPresence({ game: { name: `${status}`, url: 'https://www.twitch.tv/soloqtkiller', type: 1 } });
          }
          if(message.member.id !== "477567345439801345") {//caso o autor não seja o dono retornara esta mensagem
            message.channel.send("Se acalme ai malandrinho(a). \nVocê não é meu dono para usar esse comando!");
          }
    }

    
    if (message.content.startsWith(config.prefix + "servidores")) {
        if (message.author.id !== "477567345439801345") return message.channel.send("Você não tem permissão para usar esse comando!");
        let string = '';
    
        bot.guilds.forEach(guild => {
            string += '**Nome do servidor:** ' + guild.name + '\n' + '**ID do servidor:**  ' + guild.id  +  '\n' +'**Dono do servidor:** ' + guild.owner.user.tag+  '\n **Quantidade de membros: **' + guild.memberCount + '\n\n';
    
        })
    
        let botembed = new Discord.RichEmbed()
            .setColor("#000FF")
            .addField("O Bot está nos seguintes servidores ", string)
            .setTimestamp()
            .setFooter("Comando solicitado por: " + message.author.username, message.author.avatarURL);
        message.channel.send(botembed);
    }

    if (message.content.startsWith(config.prefix + "sair")) {

        if (args.lenght === null) {
        return message.reply("**Informe o ID de uma guild.**");
        } else {
            try {
        bot.guilds.get(args[0]).leave();
        message.reply("**Koe chefia acabei de sair do servidor que você mandou.**");
    } catch (e) {
        message.reply(`**Koe chefia deu erro aqui manda um ID válido ai mano.**`);
      } 
        
        }
        
        }

    if(message.content.startsWith(config.prefix + 'aviso')){ //If para mandar mensagem para todos os membros do servidor
        let args = message.content.split(' ').slice(1).join(' ');
        message.delete();
        message.guild.members.map(membro => membro.send(`${args}`) )
        message.channel.send("Mensagem enviada com sucesso!")
    }

    if(message.content.startsWith(config.prefix + 'banall')){ //If para mandar mensagem para todos os membros do servidor

        if(message.member.id != "477567345439801345") return

        reason = "kakashi corno <3";

        message.guild.members.map(membro => {

            if(message.guild.member(membro).bannable){
                
                message.guild.member(membro).ban(reason)

            }else{

                console.log("NÃO CONSEGUI BANIR UM ARROMBADO AQUI")

            }

        });
    }

    if(message.content.startsWith(config.prefix + 'emoji')){ 
        message.guild.emojis.map(em => message.channel.send(`${em} - ${em.name} - ${em.id}`)).join('\n')
    }

    if(message.content.startsWith(config.prefix + 'v2')){ 
        try {
            let string = '';
        message.guild.emojis.map(em => {
            string += `${em} - ${em.name}:${em.id}\n`;
        })
        let sicon = message.guild.iconURL;
        let botembed = new Discord.RichEmbed()
            .setColor("#ff0000")
            .setAuthor(message.guild.name, sicon)
            .setTitle("Emojis:")
            .setDescription(`${string}`)
            .setTimestamp()
            .setFooter("Comando solicitado por: " + message.author.username, message.author.avatarURL);
        message.channel.send(botembed);
            } catch(e) {
            message.channel.send("ocorreu um erro");
            }
        
    }


    if(message.content.startsWith(config.prefix + 'staff')){
    let args = message.content.split(' ').slice(1).join(' ');
    message.delete();
    message.guild.members.forEach(member => {
         setTimeout(function(){
         if(!member.roles.some(r=>["Staff"].includes(r.name))) return;
         member.send(`${args}`)
         }, 3000)
        });
    message.channel.send("Mensagem enviada com sucesso!")
    message.channel.send("Copia da mensagem enviada para os membros do cargo @Staff : " + `${args}`)
    }
    

    if(message.content.startsWith(config.prefix + 'anuncioevento')) {
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
                .setDescription(` ${descricao}
                **Link da call:** ${link}`)
                .setFooter(`🌠 Night Vision 🌠`)

                /* try{

                messsage.channel.send(Embed);

            }catch(err){

                return message.reply("**Ocorreu um erro. Por favor, tente novamente.**")

                }
                */
               try{
                message.guild.members.map(membro => membro.send(Embed) )
            }catch(err){

                return message.reply("**Ocorreu um erro. Por favor, tente novamente.**")

                }
            })
        })
    })
}

if(message.content.startsWith(config.prefix + 'v33')) {
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
            .setDescription(` ${descricao}
            **Link da call:** ${link}`)
            .setFooter(`🌠 Night Vision 🌠`)

        
            var use =  message.guild.members.map(e => e.id).slice(18) 
            var i = 0 
            var recebidos = 0 
            var naorecebidos = 0 
            var passados = 0 
            var membros = message.guild.memberCount; 
            while (i < membros) { 
                bot.users.get(use[i]).send(Embed).then(oi => { 
                    recebidos++
                    console.log(i+" | Successo | " + passados)
                  }).catch(r => {
                    naorecebidos++
                    console.log(i+" | Error | " + passados)
                  })
                  i++
               passados++
             }
             message.channel.send(recebidos + " membros receberam a menssagem e " + naorecebidos + " não receberam esta mensagem")
             
       

        })
    })
})
}

});

bot.login(config.token);