const discord = require("discord.js");

module.exports.run = async (bot, message, args) => {

    // !tempmute persoon tijd (h,m,s).

    if (!message.member.roles.cache.has('839530154261872701')) return message.lineReply('Jij kan dit niet');

    if (!args[0]) return message.lineReply("Geen gebruiker opgegeven.");

    if (!message.guild.me.hasPermission("KICK_MEMBERS")) return message.lineReply("Geen perms");

    var unmutePersoon = message.guild.member(message.mentions.users.first() || bot.users.cache.get(args[0]));

    if (!unmutePersoon) return message.lineReply("Kan de gebruiker niet vinden.");

    if (unmutePersoon.hasPermission("MANAGE_MESSAGES")) return message.lineReply("Sorry je kunt deze gebruiker niet muten");

    var muteRole = message.guild.roles.cache.get('794678890429677620');
    if (!muteRole) return message.channel.send("De rol muted bestaat niet.");

    const muteChannel = message.guild.channels.cache.find(c => c.name == "discord-logs");

     var muteEmbed = new discord.MessageEmbed()
      .setColor("#6aa75e")
      .setFooter('Rotterdam Bot', 'https://cdn.discordapp.com/attachments/881621235983867904/881874930927554560/20210722_114046.jpg')
      .setTimestamp()
      .setDescription(`**Geunmute: ** ${unmutePersoon} \n**Gemute door:** ${message.author}`);
      muteChannel.send(muteEmbed)


    unmutePersoon.roles.remove(muteRole.id);

    message.lineReply(`${unmutePersoon} is geunmute`);

  
}

module.exports.help = {
    name: "unmute",
    aliases: ["umute"]
}