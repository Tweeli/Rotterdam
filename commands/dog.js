const discord = require("discord.js");
const fetch = require('node-fetch');

module.exports.run = async (bot, message, args) => { 

    fetch('https://www.reddit.com/r/lookatmydog/random/.json').then(resp => resp.json()).then(respOmgevormd => {

        var permaLink = respOmgevormd[0].data.children[0].data.permaLink;
        var dogUrl = `https://www.reddit.com${permaLink}`;
        var dogFoto = respOmgevormd[0].data.children[0].data.url;
        var dogTitle = respOmgevormd[0].data.children[0].data.title;

        var dogEmbed = new discord.MessageEmbed()
            .setTitle(`${dogTitle}`)
            .setURL(`${dogUrl}`)
            .setImage(`${dogFoto}`)
            .setColor('#6aa75e')
            .setFooter('Rotterdam Bot', 'https://cdn.discordapp.com/attachments/881621235983867904/881874930927554560/20210722_114046.jpg')
            message.lineReply(dogEmbed)

    }).catch("error", (err) => {
        console.log(err.message);
    })

}

module.exports.help = {
    name: "dog",
    aliases: ["hond"]
}