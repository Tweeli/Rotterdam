const discord = require("discord.js");

module.exports.run = async (bot, message, args) => {

    const categoryID = "879393974719230013";

    if (!message.member.roles.cache.has('839530154261872701')) return message.reply('Jij kan dit niet');

    if (!args[0]) return message.reply("Geen reden meegegeven om het ticket te closen.")

    var reden = args.slice(0).join(" ")

    if (message.channel.parentID == categoryID) {

        message.channel.delete();

        // Create embed.
        var closeticketEmbed = new discord.MessageEmbed()
            .setTitle("Ticket, " + message.channel.name)
            .setDescription("Het ticket van " + message.channel.name + ` is gesloten door ${message.author} . \n **Reden: ** ${reden}`)
            .setColor("#6aa75e")
            .setFooter('Rotterdam Bot', 'https://cdn.discordapp.com/attachments/881621235983867904/881874930927554560/20210722_114046.jpg')

        // Channel voor logging
        var logChannel = message.guild.channels.cache.find(channel => channel.id === "881896058916069396");
        if (!logChannel) return message.lineReply("Kanaal bestaat niet");

        logChannel.send(closeticketEmbed);

    } else {

        message.reply("Gelieve dit command te doen bij een ticket.");

    }



}

module.exports.help = {
    name: "close",
    aliases: ["delete"]
}
