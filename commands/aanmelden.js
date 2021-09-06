const discord = require("discord.js");

module.exports.run = async (bot, message, args) => {

    if (!message.member.roles.cache.has('839530154261872701')) return message.reply('Jij kan dit niet');

    var afmelden = message.member.guild.channels.cache.get("870678013367447552");

    message.member.roles.remove(afmeldRole.id);

    afmelden.send(`${message.author}, u bent weer aangemeld!`);
    return message.lineReply("U bent succesvol aangemeld.")

}

module.exports.help = {
    name: "aanmelden",
    aliases: []
}