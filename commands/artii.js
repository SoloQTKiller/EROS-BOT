
const Discord = require("discord.js");
const snekfetch = require("snekfetch");


    module.exports.run = async (bot, message, args) => {
    
        const text = encodeURIComponent(args.join(" "));
        if (!text) return message.channel.send("Você deve fornecer algum texto para traduzir");
        try {
            const { body } = await snekfetch.get(`http://artii.herokuapp.com/make?text=${text}`);
            if (body.length > 2000) return message.channel.send("Infelizmente, o texto especificado é muito longo. Por favor, tente novamente com algo um pouco mais curto.");
            return message.channel.send(body, { code: "fix" });
        } catch (error) {
            this.client.logger.error(error);
            return message.channel.send(texts.general.error.replace(/{{err}}/g, error));
        }
    }
    module.exports.help = {
        name:"artii"
    }  
    
