const discord = require("discord.js");
const ms = require("ms");

module.exports.run = async (bot, message, args) => {

    // !tempmute persoon tijd (h,m,s).

    if (!message.member.roles.cache.has('839530154261872701')) return message.reply('Jij kan dit niet');

    if (!args[0]) return message.reply("Geen gebruiker opgegeven.");

    if (!args[1]) return message.reply("Geen tijd opgegeven.");

    if (!args[2]) return message.reply("Geen reden opgegeven.");

    var mutePerson = message.guild.member(message.mentions.users.first() || bot.users.cache.get(args[0]));

    if (!mutePerson) return message.reply("Kan de gebruiker niet vinden.");

    if (mutePerson.hasPermission("MANAGE_MESSAGES")) return message.reply("Sorry je kunt deze gebruiker niet muten");

    var muteRole = message.guild.roles.cache.get('881894671599697983');
    if (!muteRole) return message.lineReply("De rol muted bestaat niet.");

    var muteTime = args[1];

    if (!muteTime) return message.lineReply("Geen tijd opgegeven");

    var tijd = args[1]
    var reden = args.slice(2).join(" ")

    await (mutePerson.roles.add(muteRole.id));
    message.lineReply(`${mutePerson} is gemuted voor ${muteTime}`);

    const muteChannel = message.guild.channels.cache.find(c => c.name == "discord-logs");

    var muteEmbed = new discord.MessageEmbed()
      .setColor("#6aa75e")
      .setTimestamp()
      .setDescription(`**Gemute: ** ${mutePerson} \n**Gemute door:** ${message.author} \n**Reden: ** ${reden} \n**Tijd: ** ${tijd}`)
      .setFooter('Rotterdam Bot', 'https://cdn.discordapp.com/attachments/881621235983867904/881874930927554560/20210722_114046.jpg')
    muteChannel.send(muteEmbed)


    setTimeout(() => {

        mutePerson.roles.remove(muteRole.id);

        message.channel.send(`${mutePerson} is geunmute`);

       var muteEmbed2 = new discord.MessageEmbed()
        .setColor("#6aa75e")
        .setFooter(message.member.displayName)
        .setTimestamp()
        .setDescription(`**Geumute: ** ${mutePerson} \n**Geunmute door:** Rotterdam Bot \n**Reden: ** auto`);
       muteChannel.send(muteEmbed2)

    }, ms(muteTime));

}

module.exports.help = {
    name: "mute",
    aliases: []
}