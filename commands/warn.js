const discord = require("discord.js");
const fs = require("fs");
const warns = JSON.parse(fs.readFileSync("./data/warns.json", "utf8"));

module.exports.run = async (bot, message, args) => {

    // !warn spelerNaam redenen hier.

    if (!message.member.roles.cache.has('682635913431482471')) return message.lineReply('Jij kan dit niet');

    if (!args[0]) return message.lineReply("Geen gebruiker opgegeven.");

    if (!args[1]) return message.lineReply("Gelieve een redenen op te geven.");

    if (!message.guild.me.hasPermission("KICK_MEMBERS")) return message.lineReply("Geen perms");

    var warnUser = message.guild.member(message.mentions.users.first() || bot.users.cache.get(args[0]));

    var reason = args.slice(1).join(" ");

    if (!warnUser) return message.lineReply("Kan de gebruiker niet vinden.");

    if (warnUser.hasPermission("MANAGE_MESSAGES")) return message.lineReply("Sorry je kunt deze gebruiker niet warnen");

    if (!warns[warnUser.id]) warns[warnUser.id] = {
        warns: 0
    };

    warns[warnUser.id].warns++;

    fs.writeFile("./warnings.json", JSON.stringify(warns), (err) => {
        if (err) console.log(err);
    });
      var warnEmbed = new discord.MessageEmbed()
        .setColor("#ff0000")
        .setFooter('Rotterdam Bot', 'https://cdn.discordapp.com/attachments/881621235983867904/881874930927554560/20210722_114046.jpg')
        .setTimestamp()
        .setDescription(`**Gewarnd:** ${warnUser} (${warnUser.id})
        **Gegeven door:** ${message.author}
        **Redenen: ** ${reason}`)
        .addField("Aantal warns", warns[warnUser.id].warns)
        warnUser.send(warnEmbed)

    var warningEmbed = new discord.MessageEmbed()
        .setColor("#6aa75e")
        .setFooter('Rotterdam Bot', 'https://cdn.discordapp.com/attachments/881621235983867904/881874930927554560/20210722_114046.jpg')
        .setTimestamp()
        .setDescription(`**Gewarnd:** ${warnUser} (${warnUser.id})
        **Gegeven door:** ${message.author}
        **Redenen: ** ${reason}`)
        .addField("Aantal warns", warns[warnUser.id].warns);

    var warninglog = message.member.guild.channels.cache.get("881879726522765332");

    warninglog.send(warningEmbed)

}

module.exports.help = {
    name: "warn",
    aliases: []
}