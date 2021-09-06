const discord = require("discord.js");

module.exports.run = async(bot, message, args) => {

    var result = Math.ceil(Math.random() * 6);

    var dobbelEmbed = new discord.MessageEmbed()
     .setDescription(`:game_die: Je hebt **${result}** gegooid! :game_die:`)
     .setFooter('Rotterdam Bot', 'https://cdn.discordapp.com/attachments/881621235983867904/881874930927554560/20210722_114046.jpg')
     message.lineReply(dobbelEmbed)

}

module.exports.help = {
    name: "dobbel",
    description: "",
    category: "",
    aliases: ["dobbelsteen"]
}