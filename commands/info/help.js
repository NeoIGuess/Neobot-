module.exports = {
    name: "help",
    catagory: "info",
    permissions: [],
    devOnly: false,
    run: async ({client, message, args,}) => {

        const pagination = require('discord.js-pagination');
        module.exports.run = async function(bot, message, args) {
            var wait = ms => new Promise((r, j)=>setTimeout(r, ms))
            var fff;
            var hmu = {};
            fs.readdir("./src/commands/", (err2, fff) => {
                for (i = 0; i < fff.length; i++) {
                    hmu[i] = new discord.MessageEmbed();
                    hmu[i].setTitle(fff[i]);
                    hmu[i].setColor(config.embedColor);
                    const iii = i;
                    fs.readdir(`./src/commands/${fff[i]}/`, (err1, files1) => {
                        files1.forEach((f2, i2) => {
                            const cmd = f2.replace('.js', '');
                          hmu[iii].addField(cmd, "testing");
                        });
                    });
                }  
            });
            await wait(50);
            var helppage = [];
            var f = 0;
            for (let step = 0; f == 0; step++) {
                if(hmu[helppage.length]) {
                helppage[helppage.length] = hmu[helppage.length];
                console.log("+1")
                } else {
                    f = 1;
                }
            }
            await wait(50);
            const emojis = ["◀", "▶"];
            
            pagination(message, helppage, emojis)
        }
        
        
    }
    
 }

