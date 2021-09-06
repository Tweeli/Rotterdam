const Discord = require("discord.js");

module.exports.run = async(bot, message, args) => {

    if (!args[2]) return message.reply("Stel hier je volledige vraag");
    var antwoorden = ["Ja", "Nee", "Misschien", "Misschien niet", "Waarschijnlijk wel"];

    var resultaat = Math.floor((Math.random() * antwoorden.length));
    var vraag = args.slice(0).join(" ");

    var eightBallEmbed = new Discord.MessageEmbed()
    .setTitle(`8ball vraag van ${message.author.username}`)
    .setDescription("Lees hier de vraag van de 8ball")
    .setThumbnail("https://magic-8ball.com/assets/images/Our_magic_8_ball.png")
    .addFields([
       {name: "Vraag", value: `${vraag}`},
       {name: "Antwoord", value: `${antwoorden[resultaat]}`},
    ])
   .setFooter('Rotterdam Bot', 'https://cdn.discordapp.com/attachments/881621235983867904/881874930927554560/20210722_114046.jpg')
   .setTimestamp()
   .setColor('#6aa75e')

   message.lineReply(eightBallEmbed);


}


module.exports.help = {
    name: "8ball",
    aliases: ["vraag"]
}