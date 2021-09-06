discord = require("discord.js")

module.exports.run = async(bot, message, args) => {

   
    if (!message.member.roles.cache.has('839530154261872701')) return message.reply('Jij kan dit niet');
    
    if(!args[0]) return message.reply("Geen gebruiker opgegeven!");
    
    var kickUser = message.guild.member( message.mentions.users.first() || message.guild.members.get(args[1]));
    
    const kickChannel = message.guild.channels.cache.find(c => c.name == "discord-logs")
    
    
    if(!args[1]) return message.reply(`Geen reden opgegeven om ${kickUser} te **kicken**.`)
    
  
    
    var reason = args.slice(1).join(" ");
    
    if(!kickUser) return message.reply("Gebruiker niet gevonden!");

    var embedPrompt = new discord.MessageEmbed()
        .setColor("#6aa75e")
        .setDescription(`Wil je ${kickUser} **kicken**?`)
        .setFooter('Rotterdam Bot', 'https://cdn.discordapp.com/attachments/881621235983867904/881874930927554560/20210722_114046.jpg')

    var embed = new discord.MessageEmbed()
        .setColor("#6aa75e")
        .setFooter('Rotterdam Bot', 'https://cdn.discordapp.com/attachments/881621235983867904/881874930927554560/20210722_114046.jpg')
        .setTimestamp()
        .setDescription(`**Gekickt: ** ${kickUser} \n**Gekickt door:** ${message.author} \n**Reden: ** ${reason}`);

    message.lineReply(embedPrompt).then(async msg => {

    message.channel.awaitMessages(m => m.author.id === message.author.id, {max: 1}).then(collected => {

        if(collected.first().content.toLowerCase() == 'ja' || `yes`) {
            
            kickChannel.send(embed)
            kickUser.kick(reason).catch(err => {
            if (err) return message.channel.send(`Er is iets foutgegaan.`);
        });

        
        }else {
            message.lineReply("Geanuleerd")
        }
        message.lineReply(`${message.author} je hebt ${kickUser} succesvol gekicked!`)
    })
})
}

module.exports.help = {
    name: "kick",
    aliases: [] 
}