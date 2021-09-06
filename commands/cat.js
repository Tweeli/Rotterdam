const discord = require("discord.js");
const fetch = require('node-fetch');

module.exports.run = async (bot, message, args) => { 

    fetch('https://www.reddit.com/r/cats/random/.json').then(resp => resp.json()).then(respOmgevormd => {

        var permaLink = respOmgevormd[0].data.children[0].data.permaLink;
        var catUrl = `https://www.reddit.com${permaLink}`;
        var catFoto = respOmgevormd[0].data.children[0].data.url;
        var catTitle = respOmgevormd[0].data.children[0].data.title;

        var catEmbed = new discord.MessageEmbed()
            .setTitle(`${catTitle}`)
            .setURL(`${catUrl}`)
            .setImage(`${catFoto}`)
            .setColor('#6aa75e')
            .setFooter('Rotterdam Bot', 'https://cdn.discordapp.com/attachments/881621235983867904/881874930927554560/20210722_114046.jpg')
            message.lineReply(catEmbed);

    }).catch("error", (err) => {
        console.log(err.message);
    })

}

module.exports.help = {
    name: "cat",
    aliases: ["poes"]
}