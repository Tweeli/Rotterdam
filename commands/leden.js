const discord = require("discord.js");

module.exports.run = async (bot, message, args) => {

    var ledenTotal = message.guild.memberCount;
    var bots = message.guild.members.cache.filter(m => m.user.bot).size;
    var people = ledenTotal - bots;

    var ledenEmbed = new discord.MessageEmbed()
        .setColor("#6aa75e")
        .setDescription(`Leden | 👤: ${message.guild.memberCount - message.guild.members.cache.filter(m =>m.user.bot).size} \n Bots | 🤖: ${message.guild.members.cache.filter(m =>m.user.bot).size} \n Totaal aantal leden | 👥: ${message.guild.memberCount}`)
        .setFooter('Rotterdam Bot', 'https://cdn.discordapp.com/attachments/881621235983867904/881874930927554560/20210722_114046.jpg')

        message.lineReply(ledenEmbed);

}

module.exports.help = {
    name: "leden",
    description: "Geeft weer hoeveel leden er in de server zitten.",
    category: "Informatie",
    aliases: ["membercount", "members"]
}