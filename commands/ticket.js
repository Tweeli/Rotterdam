const discord = require("discord.js");

module.exports.run = async (bot, message, args) => {


    const categoryID = "879393974719230013";
    var userName = message.author.username;
    var userDiscriminator = message.author.discriminator;

    var ticketBestaat = false;

    message.guild.channels.cache.forEach(channel => {

        if (channel.name == userName.toLowerCase() + "-" + userDiscriminator) {
            ticketBestaat = true;

           return message.reply("Je hebt al een ticket aangemaakt");

            
        }

    });

    if (ticketBestaat) return;

    message.guild.channels.create(userName.toLowerCase() + "-" + userDiscriminator, { type: 'text' }).then(
        (createdChannel) => {
            createdChannel.setParent(categoryID).then(
                (settedParent) => {

                    settedParent.updateOverwrite(message.guild.roles.cache.find(x => x.name === '@everyone'), {
                        SEND_MESSAGES: true,
                        VIEW_CHANNEL: false
                    });

                    settedParent.updateOverwrite(message.author.id, {
                        CREATE_INSTANT_INVITE: false,
                        READ_MESSAGES: true,
                        SEND_MESSAGES: true,
                        ATTACH_FILES: true,
                        CONNECT: true,
                        ADD_REACTIONS: true,
                        VIEW_CHANNEL: true,
                        READ_MESSAGE_HISTORY: true
                    });
                    
                        var ticketEmbed = new discord.MessageEmbed()
                            .setDescription("Het ticket van <#" + `${createdChannel.id}` + "> is geopend.")
                            .setColor("#6aa75e")
                            .setFooter('Rotterdam Bot', 'https://cdn.discordapp.com/attachments/881621235983867904/881874930927554560/20210722_114046.jpg')
                            message.lineReply(ticketEmbed)

                    createdChannel.send(`${message.author}, <@&839530154261872701>`);
                    var embedParent = new discord.MessageEmbed()
                        .setTitle(`Hoi ${message.author.username}`)
                        .setDescription("Het support team komt er zo snel mogelijk aan! \n Zeg hier alvast je vraag.")
                        .setColor('#6aa75e')
                        .setFooter('Rotterdam Bot', 'https://cdn.discordapp.com/attachments/881621235983867904/881874930927554560/20210722_114046.jpg')
          
       
                    settedParent.send(embedParent)
                       
                    var ticketLog = new discord.MessageEmbed()
                    .setTitle("Ticket, " + createdChannel.name)
                    .setDescription("Het ticket van " + createdChannel.name + " is geopend.")
                    .setColor("#6aa75e")
                    .setFooter('Rotterdam Bot', 'https://cdn.discordapp.com/attachments/881621235983867904/881874930927554560/20210722_114046.jpg')
                    var logChannel = message.guild.channels.cache.find(channel => channel.id === "881896058916069396")
                    if(!logChannel) return message.reply("Er is iets misgelopen 1.");
                    logChannel.send(ticketLog)
   
             

                    

                    

                }
            ).catch(err => {
                console.log(err)
                message.channel.send("Er is iets misgelopen 2.");
            });
        }
    ).catch(err => {
        console.log(err)
        message.channel.send("Er is iets misgelopen 3.");
    });
} 

module.exports.help = {
    name: "new",
    aliases: ["ticket"]
}
