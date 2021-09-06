const discord = require("discord.js");

module.exports.run = async(bot, message, args) => {


    var eColorEmbed = new discord.MessageEmbed()
     .setTitle("Embed color.")
     .setDescription("HEX: #6aa75e")
     .setColor("#6aa75e")
     .setFooter('Rotterdam Bot', 'https://cdn.discordapp.com/attachments/881621235983867904/881874930927554560/20210722_114046.jpg')
     message.lineReply(eColorEmbed)

}

module.exports.help = {
    name: "ecolor",
    description: "",
    category: "",
    aliases: []
}
