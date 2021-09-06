const discord = require("discord.js");

 module.exports.run = async (bot, message, args) => {

     var roles = message.guild.roles.cache.size - 1

    var rolesEmbed = new discord.MessageEmbed()
    .setTitle('Rollen Rotterdam.')
    .setDescription(`Rollen: [${roles}] ${message.guild.roles.cache.map(r => r).join(" ").replace("@everyone", "")}`)
    .setFooter('Rotterdam Bot', 'https://cdn.discordapp.com/attachments/881621235983867904/881874930927554560/20210722_114046.jpg')
         
    message.lineReply(rolesEmbed)

}

module.exports.help = {
    name: "rollen",
    aliases: ["roles"]
}