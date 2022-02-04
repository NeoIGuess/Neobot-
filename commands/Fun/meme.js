const https = require('https');
const url = 'https://www.reddit.com/r/meme/hot/.json?limit=100'
const Discord = require("discord.js")


module.exports = {
    name: 'meme',
    catagory: "fun",
    permissions: [],
    devOnly: false,
    run: async ({client,message, args,}) => {

        https.get(url, (result) => {
            var body = ''
            result.on('data', (chunk) => {
                body += chunk
            })

            result.on('end', () => {
                var response = JSON.parse(body)
                var index = response.data.children[Math.floor(Math.random() * 99) + 1].data

                if (index.post_hint !== 'image') {

                    
                    const textembed = new Discord.MessageEmbed()
                        .setTitle(subRedditName)
                        .setColor(9384170)
                        .setDescription(`[${title}](${link})\n\n${text}`)
                        .setURL(`https://reddit.com/${subRedditName}`)
                        .setImage(image)

                    message.channel.send(textembed)
                }

               

const isImage = index.post_hint === "image";
var image = index.preview.images[0].source.url.replace('&amp;', '&')

const subRedditName = index.subreddit_name_prefixed;
const title = index.title;
const link = 'https://reddit.com' + index.permalink;
const text = !isImage && index.selfText;
const desc = `[${title}](${link})`;
var image = index.preview.images[0].source.url.replace('&amp;', '&')

const embed = new Discord.MessageEmbed()
    .setImage(image)
    .setTitle(subRedditName)
    .setColor(9384170)
    .setDescription(desc + (text ? `\n\n${text}` : ""))
    .setURL(`https://reddit.com/${subRedditName}`);
    

    
  
if (isImage) {
    const img = index.preview.images[0].source.url;
    embed.setImage(img);
}

message.reply({ embeds: [embed]});

    })
})
}

}
