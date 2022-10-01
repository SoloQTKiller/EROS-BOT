exports.run = (bot, message, args) => {
    

    const cargoNOME = '🔇 Eros Mute'


let user = message.mentions.users.first(); 
let reason = args.slice(1).join(' ');
if (!message.member.hasPermission(["MUTE_MEMBERS"])) return message.reply("**Você não tem permissão para mutar alguém!**");
if (message.mentions.users.size < 1) return message.reply("**Por favor mencione alguém para eu mutar. \nEx: e!mute @SoloQTKiller 1**");
if (reason.length < 1) return message.reply('**Por favor me informe o tempo em minutos para eu poder mutar. \nEx: e!mute @SoloQTKiller 1**');
if(message.guild.member(message.mentions.users.first()).highestRole.position >= message.member.highestRole.position){
    message.reply("**Ops... Este usuário tem um cargo maior que o seu!**");
} else {
    if (message.guild.roles.find("name", cargoNOME)){
        var mute = message.guild.roles.find("name",cargoNOME)
        for (var i =0;i < mute.members.size;i++){
            if (mute.members.array()[i].id ==  message.mentions.users.first().id)
            return message.reply("Humm... Pelo o que estou vendo o usuário já está mutado! :thinking:")
        }
        message.guild.members.get(message.mentions.users.first().id).addRole(mute.id);
            setTimeout(function() {
                message.guild.members.get(message.mentions.users.first().id).removeRole(mute.id);
                message.channel.sendMessage("**<@" + message.mentions.users.first().id + ">, Você acaba de ser desmutado(a)**");
            },args[1] * 1000 * 60)
            message.reply("**o usuário foi mutado por " + args[1] + " m**");
           message.mentions.users.first().send("**Você acaba de ser mutado(a) no servidor " + message.guild.name + " por " + args[1] + "m !**");
           message.mentions.users.first().send("**Você acaba de ser desmutado(a) no servidor " + message.guild.name + "!**");
    }   if(!mute){
        message.reply("**O servdior ainda não tinha meu cargo de mute então acabei de criar, por favor execute o comando novamente! **");
        message.guild.createRole({
            name: cargoNOME
        })
    }
}

}
module.exports.help = {
    name: "mute"
  }