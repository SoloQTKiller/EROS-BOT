const Discord = require('discord.js');
const hastebin = require('hastebin-gen');

exports.run = async(bot, message, args) => {

    if (message.author.id !== '477567345439801345') {

        const embed = new Discord.MessageEmbed()
            .setFooter('Você não tem permissão para executar este comando.')
            .setColor(0xffffff)

        return send(embed)

    }

    function clean(text) {
        if (typeof text !== 'string')
            text = require('util').inspect(text, { depth: 0 })
        let rege = new RegExp(bot.token, "gi");
        text = text
            .replace(/`/g, '`' + String.fromCharCode(8203))
            .replace(/@/g, '@' + String.fromCharCode(8203))
            .replace(rege, '404: Missing Token')
        return text;
    };

    async function send(embed) {
        message.channel.send(embed);
    }

    const evalEmbed = new Discord.RichEmbed().setColor(0xffffff)
    const code = args.join(' ');
    try {
        const evaled = clean(await eval(code));
        evalEmbed.addField('📥 Entrada', `\`\`\`\n${code}\n\`\`\``)
        if (evaled.constructor.name === 'Promise') evalEmbed.addField('📤 Saída', `\`\`\`xl\n${evaled}\n\`\`\``)
        else evalEmbed.addField('📤 Saída', `\`\`\`xl\n${evaled}\n\`\`\``)
        evalEmbed.setColor('0x42f468')
        if (evaled.length < 800) { send(evalEmbed) }
        else {
            let url = await hastebin(evaled, "js").catch(err => console.log(err.stack));
            const newEmbed = new Discord.MessageEmbed()
                .addField('📥 Entrada', `\`\`\`\n${code}\n\`\`\``)
                .addField('📤 Saída', `\n**[${url}](${url})**`)
                .setColor('0x42f468');
            send(newEmbed);
        }
    }
    catch (err) {
        evalEmbed.setColor('0xff0000');
        evalEmbed.addField('📤 Saída', `\`\`\`xl\n${err}\n\`\`\``);

        message.channel.send(evalEmbed);
    }

};

module.exports.help = {
    name: "eval"
}