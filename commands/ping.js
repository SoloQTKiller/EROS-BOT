exports.run = async (client, message) => {
    const msg = await message.channel.send("Ping?");
    msg.edit(`Pong! Minha latência é de ${msg.createdTimestamp - message.createdTimestamp}ms. A latência da minha API é de ${Math.round(client.ping)}ms`);
  };
  
  exports.conf = {
    enabled: true,
    guildOnly: false,
    aliases: [],
    permLevel: "User"
  };
  
  exports.help = {
    name: "ping",
  };