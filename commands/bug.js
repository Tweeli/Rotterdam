const discord = require("discord.js");

module.exports.run = async (bot, message, args) => {

    if (!args[0]) return message.reply("Geen bug meegegeven.")
    var suggestions = message.member.guild.channels.cache.get("853687683222339604");

    const bugEmbed = new discord.MessageEmbed()
        .setTitle(`Bug ingezonden door ${message.author.tag} !`)
        .setColor("#6aa75e")
        .setDescription("> Bug: " + args.join(" "))
        .setFooter('Rotterdam Bot', 'https://cdn.discordapp.com/attachments/881621235983867904/881874930927554560/20210722_114046.jpg')

    var msg = await    suggestions.send(bugEmbed)

    return message.lineReply("Bug seccesvol ingezonden!");

    message.delete({ timeout: 1000 });

}

module.exports.help = {
    name: "bug",
    aliases: []
}