const discord = require("discord.js");

module.exports.run = async (bot, message, args) => {


    if (!message.member.roles.cache.has('839530154261872701')) return message.reply('Jij kan dit niet');

      if (!args[0]) return message.reply("Geen begin datum meegegeven.")
    
     if (!args[1]) return message.reply("Geen begin eind datum meegegeven.")
    
     if (!args[2]) return message.reply("Geen reden meegegeven.")

     var begin = args[0]
     var einde = args[1]
     var reden = args.slice(2).join(" ")

    var afmelden = message.member.guild.channels.cache.get("870678013367447552");

const afmeldEmbed = new discord.MessageEmbed()
        .setAuthor(`${message.author.username}`, `${message.author.avatarURL({ size: 4096 })}`)
        .addField("Begin datum:", "> " + begin)
        .addField("Eind datum:", "> " + einde)
        .addField("Reden:", "> " + reden)
        .setColor("#6aa75e")
        .setFooter('Rotterdam Bot', 'https://cdn.discordapp.com/attachments/881621235983867904/881874930927554560/20210722_114046.jpg')
var msg = await afmelden.send(afmeldEmbed)
await message.member.roles.add(afmeldRole.id);
return message.lineReply("U bent succesvol afgemeld.")

}

module.exports.help = {
    name: "afmelden",
    aliases: []
}