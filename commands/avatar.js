const discord = require("discord.js");

module.exports.run = async(bot, message, args) => {

    var member = message.guild.member(message.mentions.users.first() || bot.users.cache.get(args[0]));
    if(!member) member = message.member;

    var avEmbed = new discord.MessageEmbed()
        .setTitle(`Profielfoto van ${member.user.tag}`)
        .setImage(member.user.displayAvatarURL({dynamic : true, size: 4096}))
        .setColor("#6aa75e")
        .setFooter('Rotterdam Bot', 'https://cdn.discordapp.com/attachments/881621235983867904/881874930927554560/20210722_114046.jpg')
    message.lineReply(avEmbed)   

}

module.exports.help = {
    name: "av",
    aliases: ["av", "pf", "profielfoto", "pfp", "avatar"]
}