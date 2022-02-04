module.exports = {
    name: "ping",
    catagory: "info",
    permissions: [],
    devOnly: false,
    run: async ({client, message, args}) =>  {
        message.reply("pong!")

    }

}