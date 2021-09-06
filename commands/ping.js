const discord = require("discord.js");

module.exports.run = async (bot, message, args) => {

    var pongEmbed = new discord.MessageEmbed()
    .setDescription("Pong: " + (message.createdTimestamp - Date.now()) + " ms")
    .setColor("#6aa75e")
    .setFooter('Rotterdam Bot', 'https://cdn.discordapp.com/attachments/881621235983867904/881874930927554560/20210722_114046.jpg')
    message.lineReply(pongEmbed) 


}

module.exports.help = {
    name: "ping",
    aliases: []
}