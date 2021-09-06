const discord = require("discord.js");

module.exports.run = async(bot, message, args) => {

    var commandsEmbed = new discord.MessageEmbed()
     .setTitle("Rotterdam Bot. Commands:")
     .setDescription("> !8ball - Geeft een random antwoord. \n > !avatar - Geeft de profielfoto weer van de gebruiker die je hebt opgegeven. \n > !botinfo - Geeft info weer over de bot. \n > !sps: \n >  • Papier.  \n > • Schaar.  \n > • Steen.  \n > !bug - Met deze command kan je een bug megeven.  \n > !commands - Geeft alle commands weer.  \n > !hallo - Zegt iets terug. \n > !kom - Kop of Munt.  \n > !leden - Geeft het aantal leden weer dat er op die moment in de server zitten.  \n > !level - Geeft jou level weer.  \n > !ping - Geeft weer hoeveel ping je hebt.  \n > !rollen - Geeft alle rollen weer. \n > !serverinfo - Geeft info weer over de server. \n > !suggestie - Vraag met deze command een suggestie aan. \n > !new - Maak met deze command een ticket aan. \n > !userinfo - Geeft info weer over de gebruiker die je hebt meegegeven.")
     .setColor("#6aa75e")
     .setFooter('Rotterdam Bot', 'https://cdn.discordapp.com/attachments/881621235983867904/881874930927554560/20210722_114046.jpg')
        message.lineReply(commandsEmbed)

}

module.exports.help = {
    name: "commands",
    description: "",
    category: "",
    aliases: ["help", "cmds", "cmd"]
}