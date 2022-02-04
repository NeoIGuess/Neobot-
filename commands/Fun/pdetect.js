const bot = require("../..");

module.exports ={
    name: 'pdetect',
    catagory: "fun",
    permissions: [],
    devOnly: false,
    run: async ({client,message, args,}) => {

        let randomPer = message.guild.members.cache.random().user;
    
        message.channel.send(`${randomPer} has `);
    }
}
