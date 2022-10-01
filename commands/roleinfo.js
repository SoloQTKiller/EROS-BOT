const { RichEmbed } = require('discord.js');
exports.run = (bot, message, args) => {
    // Tries to get the first mentioned role or a role ID or a role name (role names are case sensitive)
    let role = message.mentions.roles.first() || message.guild.roles.get(args[0]) || message.guild.roles.find(role => role.name === args[0]);

    // If we can't find any role, then just default to the author's highest role
    if (!role) role = message.member.highestRole;


    // Define our embed
    const embed = new RichEmbed()
        .setColor(role.hexColor)
        .setTitle(`Cargo: ${role.name}`)
        .addField('Membros que tem ele:', role.members.size, true)
        .addField('Cor', role.hexColor, true)
        .addField('Data de criação', role.createdAt.toDateString(), true)
        .addField('Editavel:', role.editable.toString(), true)
        .addField('Contém permissão de ADM:', role.managed.toString(), true)
        .addField('ID', role.id, true);
    return message.channel.send({
        embed: embed
    });
};
module.exports.help={
    name:'roleinfo'
}