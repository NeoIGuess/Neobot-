const { MessageEmbed } = require("discord.js")


module.exports = {
    name: 'avatar',
    permissions:[],
    run: async ({message}) => {
        const user = message.mentions.users.first() || message.author
        const exampleEmbed = new MessageEmbed()
            .setTitle(`${user.username}'s avatar`)
            .setDescription(`[Link to avatar](${user.avatarURL({format: 'png', dynamic: true})})`)
            .setImage(user.displayAvatarURL({ dynamic: true }))
            .setColor('#0099ff')
        message.reply({ embeds: [exampleEmbed] });
    }
}