const discord = require("discord.js");

module.exports.run = async (bot, message, args) => {

    var botInfoEmbed = new discord.MessageEmbed()
            .setTitle('Rotterdam Bot | BOT')
            .setColor("#6aa75e")
            .addField("Bot naam", "Rotterdam Bot.")
            .addField("Bot ID", "868367264053858314")
            .addField("Gemaakt door", "Tweeli.#0001")
            .addField("Gemaakt op", "Visual Studio Code.")
            .addField("Node.js", "12.5.3")
            .addField("Platform", "MacOS")
            .addField("Laatst geüpdate", "30 Augustus 2021.")
            .addField("Gemaakt op", "15 Juni 2021")
            .setThumbnail('https://cdn.discordapp.com/attachments/881621235983867904/881874930927554560/20210722_114046.jpg')
            .setTimestamp()
            .setFooter('Rotterdam Bot', 'https://cdn.discordapp.com/attachments/881621235983867904/881874930927554560/20210722_114046.jpg')

            message.lineReply(botInfoEmbed);

}

module.exports.help = {
    name: "botinfo",
    aliases: ["binfo"]
}