const Discord = require('discord.js');  
const client = new Discord.Client({ partials: ["MESSAGE", "CHANNEL", "REACTION"]});
const config = require("./package.json");  //ramner les var de config.json
const PREFIX = config.prefix;   //var du prefix
client.login(config.token);


const activities_list = [
    "the aj!help command", 
    "if you wear your mask!",
    "Netbot",
    "Netflix",
    "you"
]; 

client.on("guildCreate", (guild) => {    
    client.channels.cache.get('734468777374122034').send(`Joined new guild: ${guild.name}\n` + "The bot is in: " + client.guilds.cache.size + " guilds!").catch(console.error)
});

client.on("guildDelete", (guild) => {    
    client.channels.cache.get('734468777374122034').send(`Quit new guild: ${guild.name}\n` + "The bot is in: " + client.guilds.cache.size + " guilds").catch(console.error)
});

client.on('ready', () => {
    console.log('I am ready!');
    setInterval(() => {
        const index = Math.floor(Math.random() * (activities_list.length - 1) + 1);
        client.user.setActivity(activities_list[index], { type: "WATCHING"});
    }, 15000); 
});

client.on("message", message => {

    function rand(tbl) {
        return tbl[Math.floor(Math.random() * tbl.length)];
    }
    
    function strUcFirst(a) { // fonction qui met la première lettre en Maj
  		return (a + '').charAt(0).toUpperCase() + a.substr(1);
	}
    
    
var COMMANDS = [
    {
        name: "test",
        description: "To see if the bot is on.",
        category: strUcFirst("info | About the bot"),
        usage: [`${PREFIX}test`],
        id: 0,
        execute: () => {
            message.reply(" i'm on don't worry");
        }
    },
    {
        name: "supportlink",
        description: "To join the Ajbot-Support discord server.",
        category: strUcFirst("info | About the bot"),
        usage: [`${PREFIX}supportlink`],
        id: 1,
        execute: () => {
            const embed = new Discord.MessageEmbed()
            embed.setTitle(message.author.tag + " Click here to join the AJbot-support server!")
            embed.setURL("https://discord.gg/rWYKfKG")
            embed.setImage("https://media.tenor.com/images/731a1cf70022c66519412790c1b72f64/tenor.gif")
            embed.setColor(0xff0000)
            embed.setFooter(message.author.tag + "asked the command" + " \n Bot made by Baeka#2540")
            message.channel.send(embed).catch(console.error)
        }
    },
    {
        name: "botinfo",
        description: "Sends informations about the bot.",
        category: strUcFirst("info | About the bot"),
        usage: [`${PREFIX}botinfo`],
        id: 2,
        execute: () => {
            message.channel.send("This bot is made by Baeka#2540. It's a bot who's constantly being updated it's not finished, if you want to get all the updates join this server : https://discord.gg/rWYKfKG").catch(console.error)
            message.channel.send("If you want the bot in your server use this link: https://discordapp.com/oauth2/authorize?client_id=727574553576079372&scope=bot&permissions=8").catch(console.error)
            message.channel.send("The bot is in " + client.guilds.cache.size + ' guilds!\n You can get all the commands with "aj!help"')
        }
    },
    {
        name: "botguilds",
        description: "How many guilds the bot is in.",
        category: strUcFirst("info | About the bot"),
        usage: [`${PREFIX}botguilds`],
        id: 3,
        execute: () => {
            message.channel.send("The bot is in: " + client.guilds.cache.size + " guilds!").catch(console.error)
        }
    },
    {
        name: "addbot",
        description: "To invite the bot in your discord server.",
        category: strUcFirst("info | About the bot"),
        usage: [`${PREFIX}addbot`],
        id: 4,
        execute: () => {
            message.reply("check your dm's").catch(console.error)
            client.users.cache.get(message.author.id).send("Here's the link to invite the bot: https://discordapp.com/oauth2/authorize?client_id=727574553576079372&scope=bot&permissions=8").catch(console.error)
        }
    },
    {
        name: "vote",
        description: "To vote for the bot on [top.gg](https://top.gg/bot/727574553576079372/vote) (please vote for me :pray:).",
        category: strUcFirst("info | About the bot"),
        usage: [`${PREFIX}vote`],
        id: 5,
        execute: () => {
            message.reply("check your dm's").catch(console.error)
            client.users.cache.get(message.author.id).send("Here's the link to vote for the bot: https://top.gg/bot/727574553576079372/vote").catch(console.error)
        }
    },
    {
        name: "i<3you",
        description: "Sends an \"I LOVE YOU\" gif.",
        category: strUcFirst(":heart: love :heart:"),
        usage: [`${PREFIX}I<3YOU <user>`],
        id: 6,
        execute: () => {
            const user = message.mentions.users.first();
            if (user) {
                const member = message.guild.member(user);
                const embed = new Discord.MessageEmbed()
                embed.setTitle(message.author.tag + ' **LOVES **' + `${user.tag}` + " !")
                embed.setColor(0xff0000)
                embed.setImage("https://media.tenor.com/images/cd4582aea4d353f63a21173dc9b7f473/tenor.gif");
                embed.setFooter(message.author.tag + "asked the command" + " \n Bot made by Baeka#2540")
                message.channel.send(embed).catch(console.error)
            } else {
                message.channel.send("`PLS MENTION SOMEONE`")
                return
            }
        }
    },
    {
        name: "poke",
        description: "Do you want to poke someone with a gif ?",
        category: strUcFirst(":heart: love :heart:"),
        usage: [`${PREFIX}poke <user>`],
        id: 7,
        execute: () => {
            const user = message.mentions.users.first();
            if (user) {
                const member = message.guild.member(user);
                const embed = new Discord.MessageEmbed()
                embed.setTitle(message.author.tag + ' **POKES **' + `${user.tag}` + " !")
                embed.setColor(0xff0000)
                var tblPoke = ["https://images-ext-1.discordapp.net/external/0pLy98NG0Gz0_0qRvPhwcRZbBmgSA2iO0ITy7M4YjpE/https/media.tenor.com/images/53df08af136dcb1219e17f7a37ab1feb/tenor.gif", "https://images-ext-2.discordapp.net/external/MofXoIGq7EmkLhIsEIJ1ULR7ATy00-VjVK958CwaWcI/https/media.tenor.com/images/c470eed0515a4e5a8227dd5d6c831fbe/tenor.gif", "https://images-ext-1.discordapp.net/external/Vmj2R1hkO9ujBcShwNz2Ek6nbqFtWp2M3R4NhXiYzlY/https/media.tenor.com/images/c555fe22967cb9e90ea3560365b500de/tenor.gif", "https://images-ext-2.discordapp.net/external/8A2bpY9ux_oBmaA1ALpjPaUSc5bP_CfdXt-gy8KihSk/https/media.tenor.com/images/3318db2b09172a1cbf6db4a2cdbc7a0d/tenor.gif", "https://images-ext-1.discordapp.net/external/m_Dclrgb-mt52FaeRtTUDT5pQAWxAv--ot2Y_dkjTAY/https/media.tenor.com/images/369ea66cd13f76b3b49d4f85b830d8ef/tenor.gif", "https://images-ext-1.discordapp.net/external/G_rvUKuymmqY8Un6gOPDHiX1wmTM3NQwEesEm9K46GQ/https/media.tenor.com/images/610e893ccb291626c72642e6286d558f/tenor.gif","https://images-ext-1.discordapp.net/external/r7j4OvyZ_SIIVRNqWyORS0PTykN_2e_ykXjtcUEVeH8/https/media.tenor.com/images/6994e231e81b4447d976b3dda0596400/tenor.gif", "https://images-ext-2.discordapp.net/external/XJcvw61PS5faK0EKihcjNkjyjY2MWFaDrgC49xGulpQ/https/media.tenor.com/images/62d3f9bd28f374f9759f18b10cfa8956/tenor.gif", "https://images-ext-1.discordapp.net/external/_v2ouUfsD-OfFfKjud63d_f0QDKUIwD5_JpXMxeVIWM/https/media.tenor.com/images/fa6b210a80b48ddf108aad0ab92cb004/tenor.gif", "https://images-ext-1.discordapp.net/external/_3Ps4WMjnLgFyhHLp8JMxZrtkaczE7pmGT2hSbpeMKU/https/media.tenor.com/images/866ee29cd2404a41bfc9f1921c2e5b57/tenor.gif"]
                embed.setImage(rand(tblPoke))
                embed.setFooter(message.author.tag + "asked the command" + " \n Bot made by Baeka#2540")
                message.channel.send(embed).catch(console.error)
            } else {
                message.channel.send("`PLS MENTION SOMEONE`")
                return
            }
        }
    },
    {
        name: "hug",
        description: "Let's hug someone by a gif !",
        category: strUcFirst(":heart: love :heart:"),
        usage: [`${PREFIX}hug <user>`],
        id: 8,
        execute: () => {
            const user = message.mentions.users.first();
            if (user) {
                const member = message.guild.member(user);
                const embed = new Discord.MessageEmbed()
                embed.setTitle(message.author.tag + " Gave a hug to " + `${user.tag}` + "!")
                embed.setColor(0xff0000)
                var tblHug = ["https://media.tenor.com/images/f1bf91d3870ed8b26367afd1b91ada9c/tenor.gif","https://media.tenor.com/images/cee298437607d7b123bc9664c9ce844b/tenor.gif", "https://media.tenor.com/images/11157eb0fe0b7b0f296a8066dffa39a7/tenor.gif", "https://media.tenor.com/images/6deb677d1a080655e2c916452e4b6ba5/tenor.gif", "https://media.tenor.com/images/11157eb0fe0b7b0f296a8066dffa39a7/tenor.gif","https://media.tenor.com/images/a9bb4d55724484be94d13dd94721a8d9/tenor.gif","https://media.tenor.com/images/043d27b3f7715ac7c2eb6d8670b14336/tenor.gif", "https://media.tenor.com/images/043d27b3f7715ac7c2eb6d8670b14336/tenor.gif", "https://media.tenor.com/images/732e4ed3faadb3d9722d148eca2353f5/tenor.gif", "https://media.tenor.com/images/8c39fcbbef6d5332ad0e44e6346bb7ac/tenor.gif", "https://images-ext-1.discordapp.net/external/cRRWA-PNV0_PY-I09yLsUYTO7GlGMeKRBDtWIZEdQkA/https/media.tenor.com/images/7766f3d163f651b6d9d7c3b718d8e6fb/tenor.gif", "https://images-ext-1.discordapp.net/external/5-m1Cv114xkKpxNUSKGt6ZLUGZyXBQCZoRrmlw35tpo/https/media.tenor.com/images/8971ea244d81b101ef7a73c24dde9154/tenor.gif", "https://images-ext-2.discordapp.net/external/2cRE5XsbzIsQK17voxUiubJNua_dvNmqjD3ejJFTYd0/https/media.tenor.com/images/865b278c53112e09e102def839cfe41c/tenor.gif", "https://media.tenor.com/images/048a2d608e13a848666f8f2f71df202e/tenor.gif"]
                embed.setImage(rand(tblHug))
                embed.setFooter(message.author.tag + "asked the command" + " \n Bot made by Baeka#2540")
                message.channel.send(embed).catch(console.error)
            } else {
                message.channel.send("Please mention someone!")
                return;
            }
        }
    },
    {
        name: "kiss",
        description: "Oh ! It's so cute ! You're kissing someone.",
        category: strUcFirst(":heart: love :heart:"),
        usage: [`${PREFIX}kiss <user>`],
        id: 9,
        execute: () => {
            const user = message.mentions.users.first();
            if (user) {
                const member = message.guild.member(user);
                const embed = new Discord.MessageEmbed()
                embed.setTitle(message.author.tag + " **KISSES **" + `${user.tag}` + " !" )
                embed.setColor(0xff0000)
                var tblKiss = ["https://images-ext-1.discordapp.net/external/jft5uuJ40ZE8RbmMyokQQGLFDIICyOjbblghJdhSMXk/https/cdn.weeb.sh/images/ryoW3T_vW.gif", "https://images-ext-2.discordapp.net/external/eC9lxBLGLTMmE3k7YMqreg8_YlJrd-dZN04irdO9emk/https/media.tenor.com/images/b020758888323338c874c549cbca5681/tenor.gif","https://images-ext-2.discordapp.net/external/aemVT1g3fqDsDYg7ybDZLdQjHwvFk5g949cKbq7OoeI/https/media.tenor.com/images/26aaa1494b424854824019523c7ba631/tenor.gif","https://images-ext-2.discordapp.net/external/p_OoMVxjFjUIQRqeyAU88DHW1z_Odj3d8Siq5uWjHRk/https/media.tenor.com/images/48963a8342fecf77d8eabfd2ab2e75c1/tenor.gif","https://images-ext-2.discordapp.net/external/MzogOW0Lp3bHYYQ91WtWnLr83zBh20nmW-li8xdbsCA/https/media.tenor.com/images/25359520a0973f896b002689ed90db8d/tenor.gif","https://images-ext-2.discordapp.net/external/o9UxCp3TXFpJ39IUpxiCTOQqtFqQg9OzeuwVIr7n1Ts/https/media.tenor.com/images/fd65261a2c840100bd3dadd83b27f65d/tenor.gif", "https://images-ext-2.discordapp.net/external/Il8Ku_89LDP3AynjYMm5FYOTjhQGcH-HgNKVOSMmIYc/https/media.tenor.com/images/ae05156dabb6110e8262c2a36f9a54e9/tenor.gif","https://images-ext-2.discordapp.net/external/5FWZBVRX2Ywxrzj9mEPLq5fETCvQONFp1AwiR1fSveE/https/media.tenor.com/images/ac02b016f1510dd245a22878c4206daf/tenor.gif","https://images-ext-2.discordapp.net/external/mPfz7D9vnK69B12Mt1M6TqOzHqjDGgXSovabMOgDFOA/https/media.tenor.com/images/6d10f80f9f7b7effac346b82d229c46e/tenor.gif","https://images-ext-2.discordapp.net/external/Rtg4N1CM0as_oAgjI8e2AO3aCDATltxpbkkXD0YLCb4/https/media.tenor.com/images/d1108955c4fbf68fe97d41d17f3afbd2/tenor.gif"]
                embed.setImage(rand(tblKiss))
                embed.setFooter(message.author.tag + "asked the command" + " \n Bot made by Baeka#2540")
                message.channel.send(embed).catch(console.error)
            } else {
                message.channel.send("`PLS MENTION SOMEONE`")
                return
            }
        }
    },
    {
        name: "blush",
        description: "You're blushing! Is it because of love ?",
        category: strUcFirst(":heart: love :heart:"),
        usage: [`${PREFIX}blush`],
        id: 10,
        execute: () => {
            const embed = new Discord.MessageEmbed()
            embed.setTitle(message.author.tag + "** is blushing!**")
            embed.setColor(0xff0000)     
            var tblBlush = ["https://cdn.weeb.sh/images/S1exMIQDb.gif","https://media.tenor.com/images/dd12cee4f42fa1d949182f72cb9e77f4/tenor.gif","https://media.tenor.com/images/5f737df63beee63857ce767a877547ff/tenor.gif","https://media.tenor.com/images/d8432cf1b8c90e2b791c4cc206062596/tenor.gif","https://media.tenor.com/images/bd01716fd6a850d98713fe08c5d2e467/tenor.gif","https://media.tenor.com/images/e010cb377dd6093a8efb80e93ab3ede3/tenor.gif","https://media.tenor.com/images/f45f5c5fd72dd7c9ff50976e2bc7133c/tenor.gif","https://media.tenor.com/images/a948c84155a2d2e7bc860b2b9fb38e07/tenor.gif","https://media.tenor.com/images/6bfc57bde155c401edc1d032de468cd6/tenor.gif","https://media.tenor.com/images/1b4b7ae3cf0a8e9e71bafedda31661ea/tenor.gif"];
            embed.setImage(rand(tblBlush))
            embed.setFooter(message.author.tag + "asked the command" + " \n Bot made by Baeka#2540")
            message.channel.send(embed).catch(console.error)
        }
    },
    {
        name: "hello",
        description: "Say hello to someone or to everyone.",
        category: strUcFirst("politeness"),
        usage: [`${PREFIX}hello`, `${PREFIX}hello <user>`],
        id: 11,
        execute: () => {
            const user = message.mentions.users.first();
            if (user) {const embed = new Discord.MessageEmbed()
                embed.setTitle(message.author.tag + ' **says hello to **' + `${user.tag}` + " !")
                embed.setColor(0xff0000)
                var tblHello = ["https://media.tenor.com/images/cce8754f40d3c883d86075f220371d3e/tenor.gif", "https://media.tenor.com/images/c1b6fe6d7f699fdbfbccbe274b3df6e2/tenor.gif", "https://media.tenor.com/images/d988fa40d8d75a8ec0ad0d462df3279b/tenor.gif", "https://media.tenor.com/images/58371cd3291d6ae32258b79d62ec1d73/tenor.gif", "https://media.tenor.com/images/c17c78630acb049a9d6d18c04b933561/tenor.gif", "https://media.tenor.com/images/8489d1bac66f45104779bd25b5997deb/tenor.gif", "https://media.tenor.com/images/251d736302c3dcdb755b9aa59174556d/tenor.gif", "https://media.tenor.com/images/528d443dcea42078e911ef4b1cba8625/tenor.gif", "https://media.tenor.com/images/2fd8d48c78807a7f820cd9130225b77e/tenor.gif", "https://media.tenor.com/images/3fbae3954123a7815bd235f87eeb2ad3/tenor.gif"]
                embed.setImage(rand(tblHello))
                embed.setFooter(message.author.tag + "asked the command" + " \n Bot made by Baeka#2540")
                message.channel.send(embed).catch(console.error)
            } else {
                const embed = new Discord.MessageEmbed()
                embed.setTitle(message.author.tag + ' **says hello!**')
                embed.setColor(0xff0000)
                embed.setColor(0xff0000)
                var tblHello = ["https://media.tenor.com/images/cce8754f40d3c883d86075f220371d3e/tenor.gif", "https://media.tenor.com/images/c1b6fe6d7f699fdbfbccbe274b3df6e2/tenor.gif", "https://media.tenor.com/images/d988fa40d8d75a8ec0ad0d462df3279b/tenor.gif", "https://media.tenor.com/images/58371cd3291d6ae32258b79d62ec1d73/tenor.gif", "https://media.tenor.com/images/c17c78630acb049a9d6d18c04b933561/tenor.gif", "https://media.tenor.com/images/8489d1bac66f45104779bd25b5997deb/tenor.gif", "https://media.tenor.com/images/251d736302c3dcdb755b9aa59174556d/tenor.gif", "https://media.tenor.com/images/528d443dcea42078e911ef4b1cba8625/tenor.gif", "https://media.tenor.com/images/2fd8d48c78807a7f820cd9130225b77e/tenor.gif", "https://media.tenor.com/images/3fbae3954123a7815bd235f87eeb2ad3/tenor.gif"]
                embed.setImage(rand(tblHello))
                embed.setFooter(message.author.tag + "asked the command" + " \n Bot made by Baeka#2540")
                message.channel.send(embed).catch(console.error)
            } 
        }
    },
    {
        name: "bye",
        description: "Say goodbye to someone or to everyone.",
        category: strUcFirst("politeness"),
        usage: [`${PREFIX}bye`, `${PREFIX}bye <user>`],
        id: 12,
        execute: () => {
            const user = message.mentions.users.first();
            if (user) {const embed = new Discord.MessageEmbed()
                embed.setTitle(message.author.tag + ' **says bye to **' + `${user.tag}` + " !")
                embed.setColor(0xff0000)
                var tblBye = ["https://media.tenor.com/images/7f1ca91dc47136c55eec3a8b26196396/tenor.gif", "https://media.tenor.com/images/889a0a0511d615a81a386469eeea34bb/tenor.gif", "https://media.tenor.com/images/5fd8c8f495e35cfcf5a92b3272f066d7/tenor.gif", "https://media.tenor.com/images/834f6c15005527ef31bd3b668c6d79da/tenor.gif", "https://media.tenor.com/images/79dd5eb455fc24afc0502029c1539cc2/tenor.gif"]
                embed.setImage(rand(tblBye))
                embed.setFooter(message.author.tag + "asked the command" + " \n Bot made by Baeka#2540")
                message.channel.send(embed).catch(console.error)
            } else {
                const embed = new Discord.MessageEmbed()
                embed.setTitle(message.author.tag + ' **says bye!**')
                embed.setColor(0xff0000)
                var tblBye = ["https://media.tenor.com/images/7f1ca91dc47136c55eec3a8b26196396/tenor.gif", "https://media.tenor.com/images/889a0a0511d615a81a386469eeea34bb/tenor.gif", "https://media.tenor.com/images/5fd8c8f495e35cfcf5a92b3272f066d7/tenor.gif", "https://media.tenor.com/images/834f6c15005527ef31bd3b668c6d79da/tenor.gif", "https://media.tenor.com/images/79dd5eb455fc24afc0502029c1539cc2/tenor.gif"]
                embed.setImage(rand(tblBye))
                embed.setFooter(message.author.tag + "asked the command" + " \n Bot made by Baeka#2540")
                message.channel.send(embed).catch(console.error)
            }
        }
    },
    {
        name: "sorry",
        description: "Say sorry to someone or to everyone.",
        category: strUcFirst("politeness"),
        usage: [`${PREFIX}sorry`, `${PREFIX}sorry <user>`],
        id: 13,
        execute: () => {
            const user = message.mentions.users.first();
            if (user) {
                const member = message.guild.member(user);
                const embed = new Discord.MessageEmbed()
                embed.setTitle(message.author.tag + " **says sorry to **" + `${user.tag}`)
                embed.setColor(0xff0000)
                embed.setImage("https://media.tenor.com/images/1a6de6e50af1228a710bbd0884f19bcc/tenor.gif");
                embed.setFooter(message.author.tag + "asked the command" + " \n Bot made by Baeka#2540")
                message.channel.send(embed).catch(console.error)
            } else {
                const member = message.guild.member(user);
                const embed = new Discord.MessageEmbed()
                embed.setTitle(message.author.tag + " **says sorry**")
                embed.setColor(0xff0000)
                embed.setImage("https://media.tenor.com/images/8640df2c4234741658a0bd256d9ca77a/tenor.gif");
                embed.setFooter(message.author.tag + "asked the command" + " \n Bot made by Baeka#2540")
                message.channel.send(embed).catch(console.error)
            }
        }
    },
    {
        name: "please",
        description: "Say please to someone.",
        category: strUcFirst("politeness"),
        usage: [`${PREFIX}please <user>`],
        id: 14,
        execute: () => {
            const user = message.mentions.users.first();
            if (user) {
                const member = message.guild.member(user);
                const embed = new Discord.MessageEmbed()
                embed.setTitle(message.author.tag + " **says please to **" + `${user.tag}`)
                embed.setColor(0xff0000)
                var tblPls = ["https://images-ext-1.discordapp.net/external/L3kOs9kbPp75c-R0p-bKw624ftSuF-ex9xy5lVesfqs/https/media.tenor.com/images/6cba97389ba3ac706c0e40292ad59f3f/tenor.gif","https://images-ext-1.discordapp.net/external/iOv4GpCovhiHBKkPaPQNRdsywRtqDxPchVQbmtpn2Jo/https/media.tenor.com/images/ad11f7734f79fc9def8949f8304f490b/tenor.gif","https://images-ext-1.discordapp.net/external/9IE1IlqHsW_FhHJKK8cTpW9Oz8QreP6Yh8LEnsqn8FQ/https/media.tenor.com/images/7dfceeefbb8bf449f8f66639f06ad763/tenor.gif","https://images-ext-1.discordapp.net/external/eZTrV0FfNYwKDXiR4OoymIroFMF6EYRgjscCyIlqt2o/https/media.tenor.com/images/a8baaea8daacf391ff44681ce287fb9c/tenor.gif","https://images-ext-1.discordapp.net/external/PWVS0OV7pFw7z3_RUajv7axs0wzYx3dHz_T5D2GUI5g/https/media.tenor.com/images/f67dc44c74bf20f81b6dc0f4817adeb3/tenor.gif?width=206&height=300","https://images-ext-2.discordapp.net/external/oRN1ctyuFO4r1LjLvbsZVJY7WJpumsx7RYBDGAgDoeg/https/media.tenor.com/images/f69de3806c1c8402d0510ebf13f1ef69/tenor.gif","https://images-ext-2.discordapp.net/external/kTmK3-8XPFjAaefwET-nuMc8PHHD8fKTksNZ99vTLKU/https/media.tenor.com/images/7e623e17dd8c776aee5e0c3e0e9534c9/tenor.gif","https://images-ext-1.discordapp.net/external/WO-f9_Q9Na-kZMGh7vk7o4CqIJAOTZWxZ7W1FBi8Vrk/https/media.tenor.com/images/8bc37e6b644fa51eacb5dd11c3faa90a/tenor.gif","https://images-ext-1.discordapp.net/external/wW28O69zhamJ_Vpd8L82rkYV8QQFwLBe0j1y9DacUjY/https/media.tenor.com/images/22f5a7d55c4111af776d431d150ba58f/tenor.gif","https://images-ext-2.discordapp.net/external/kBSmZ6Pb04EQs9KHIQzlN313bPA0pRdyUoOJp8vfyfc/https/media.tenor.com/images/4514f56d545268ac66a841bcdd4a8c58/tenor.gif"]
                embed.setImage(rand(tblPls))
                embed.setFooter(message.author.tag + "asked the command" + " \n Bot made by Baeka#2540")
                message.channel.send(embed).catch(console.error)
            } else {
                message.channel.send("`PLS MENTION SOMEONE`")
                return
            }
        }
    },
    {
        name: "thanks",
        description: "Thank someone or everyone.",
        category: strUcFirst("politeness"),
        usage: [`${PREFIX}thanks`, `${PREFIX}thanks <user>`],
        id: 15,
        execute: () => {
            const user = message.mentions.users.first();
            if (user) {
                const member = message.guild.member(user);
                const embed = new Discord.MessageEmbed()
                embed.setTitle(message.author.tag + "** says thanks to **" + `${user.tag}` + " !")
                embed.setColor(0xff0000)
                embed.setImage("https://media.tenor.com/images/85ee9affcd63ca633c09106ad467626e/tenor.gif");
                embed.setFooter(message.author.tag + "asked the command" + " \n Bot made by Baeka#2540")
                message.channel.send(embed).catch(console.error)
            } else {
                const member = message.guild.member(user);
                const embed = new Discord.MessageEmbed()
                embed.setTitle(message.author.tag + "** says thanks !")
                embed.setColor(0xff0000)
                embed.setImage("https://media.tenor.com/images/85ee9affcd63ca633c09106ad467626e/tenor.gif");
                embed.setFooter(message.author.tag + "asked the command" + " \n Bot made by Baeka#2540")
                message.channel.send(embed).catch(console.error)
            }
        }
    },
    {
        name: "laugh",
        description: "This command will make you laugh...",
        category: strUcFirst("happiness"),
        usage: [`${PREFIX}laugh`],
        id: 16,
        execute: () => {
            const embed = new Discord.MessageEmbed()
            embed.setTitle(message.author.tag + "** is laughing**")
            embed.setColor(0xff0000)
            embed.setImage("https://media.tenor.com/images/40e59416c611299304085c5d7dbf369c/tenor.gif");
            embed.setFooter(message.author.tag + "asked the command" + " \n Bot made by Baeka#2540")
            message.channel.send(embed).catch(console.error)
        }
    },
    {
        name: "smile",
        description: "You're smiling like a POTATOOOOooO00O :potato: (sorry).",
        category: strUcFirst("happiness"),
        usage: [`${PREFIX}smile`],
        id: 17,
        execute: () => {
            const embed = new Discord.MessageEmbed()
            embed.setTitle(message.author.tag + "** is smiling**")
            embed.setColor(0xff0000)
            var tblSmile = ["https://images-ext-2.discordapp.net/external/ZHF-EvP6DYP6ADxovxQl0gZdpcWs9X1Fuy5GQDfYLsU/https/media.tenor.com/images/700c799c829f3233159cd47eabeb663f/tenor.gif","https://images-ext-2.discordapp.net/external/V_h6P1n_UnBaz16nNUpPXFimROanRO9LrjA5tr5jZqU/https/media.tenor.com/images/09c25d681122b9dfdd0710a20c4dfbbd/tenor.gif","https://images-ext-2.discordapp.net/external/R8mweSRHAyNPpBrkb0eRIND2MV1LkmarudKzf7k-lDQ/https/media.tenor.com/images/ef34332bec620cc4e5fc14fe3d3c4fb6/tenor.gif","https://images-ext-1.discordapp.net/external/1siPBJGLfXShCa1b0ed4jWvcyNspLKXnvQhTidH18hI/https/media.tenor.com/images/d62e090630ff6829fda329b86ea723e0/tenor.gif","https://images-ext-2.discordapp.net/external/Scxjc5jQST_dmJDaMte2jx1jkaPnTZZe10kuy0O1U3c/https/media.tenor.com/images/4ea5a1f32764091f5c433bf0b1c778d1/tenor.gif","https://images-ext-2.discordapp.net/external/MKTo6KxNQDumltzzn_5xVBuX1MEr1-YRwpeeMYvuqhw/https/media.tenor.com/images/80c6b49239654be3a7cb4c58fb3b73be/tenor.gif","https://images-ext-1.discordapp.net/external/mkpep35wCoT_q475LWwxj9U2TnJmr18m6E3BmIR9XpM/https/media.tenor.com/images/769fede93ec2f2293dadca1e0449eb50/tenor.gif","https://images-ext-2.discordapp.net/external/JWBl43HWQ6VYZ_ZLQ4SVyp8OPBe7x1rD_W0H91rC85c/https/media.tenor.com/images/aba59370a11cf427c8e3eced1253570b/tenor.gif","https://images-ext-2.discordapp.net/external/79hxQ0RHnewmq4rXwPm1LQl3pPA45x8jJqMaBXa22N4/https/media.tenor.com/images/4461404862e725794f62a37b4addaf63/tenor.gif","https://images-ext-1.discordapp.net/external/N9FZcy303bqBLiv_O-YY76Zx0dkj2WwHZSPeYv4nkUk/https/media.tenor.com/images/bd549ebf694a537c2d376402be85f06b/tenor.gif","https://images-ext-2.discordapp.net/external/BZEt05FH7C5rc1CbiGAzm20a295_cIP7HDD0JGFIsQo/https/media.tenor.com/images/9053011100dc659b21cd5c6df5d9c72b/tenor.gif","https://images-ext-2.discordapp.net/external/rJ3CfxtlB88HI6_zX2lAdVrMvfujjbULvcV-5WTbIZs/https/media.tenor.com/images/1c6ebba1a83ac058c34b703feb365e87/tenor.gif","https://images-ext-2.discordapp.net/external/mHhJbndJ6SqfFQN-CxzuAhXrjwwFhYQu0o5r0eEP-y4/https/media.tenor.com/images/edf4a5b9c63a22d01e363a01870a9460/tenor.gif?","https://images-ext-2.discordapp.net/external/xRlDBJVAReADL7G7mn7CbXBQIrUP_XFaW9J3-kSzckw/https/media.tenor.com/images/02ef55cf4c3ea300849f9e4ace1af2a0/tenor.gif"]
            embed.setImage(rand(tblSmile))
            embed.setFooter(message.author.tag + "asked the command" + " \n Bot made by Baeka#2540")
            message.channel.send(embed).catch(console.error)
        }
    },
    {
        name: "evilsmile",
        description: "You're making the smile of death :scream:. ",
        category: strUcFirst("happiness"),
        usage: [`${PREFIX}evilsmile`],
        id: 18,
        execute: () => {
            const embed = new Discord.MessageEmbed()
            embed.setTitle(message.author.tag + "** is making an evil smile! 😈**")
            embed.setColor(0xff0000)
            var tblEvil = ["https://images-ext-1.discordapp.net/external/T4FfD3vQTyj265cgQFOsnviGkidjZgtf0c92dRjYTOY/https/media.tenor.com/images/96ddf3b4b109bb9dc3056a1ef35cba94/tenor.gif","https://images-ext-2.discordapp.net/external/kTLNiePoqNN29gYNxhz0lEjMvIU_cdPzQZOtZQK7uTI/https/media.tenor.com/images/0dfed98e53ce1ed8f87882734673a398/tenor.gif","https://images-ext-1.discordapp.net/external/t5AkpLZK_VIPBv8GOYzsLIKgpNpOu3O794jEXWpibic/https/media.tenor.com/images/bba888c276e6bc50b381cb0abfbd6bc0/tenor.gif","https://images-ext-2.discordapp.net/external/OQzZU9StuYjmmlDQ1eITvTPgcz74-YysIh7aChVMyiw/https/media.tenor.com/images/050674d87e512f0f6cda3ff5d6f16f35/tenor.gif","https://images-ext-2.discordapp.net/external/k5aOrwso41Irm7Ta4nd1Z2oTZb-16sBFniGg8S0lhb8/https/media.tenor.com/images/92f1ba760450b56691bea479f5fcd980/tenor.gif","https://images-ext-1.discordapp.net/external/2pTcA2zl89fmqKOG38fvs3ZRXKfUL_m8BrhEPo8fyr0/https/media.tenor.com/images/7d2888eaee6eb552a82bf38dd6279c8a/tenor.gif","https://images-ext-1.discordapp.net/external/xn9tKu3nnWPeWfyrpLN1dR5OBVR28jTTakXPXKJSKp4/https/media.tenor.com/images/bef86ef365b452ae0f79498a291b812c/tenor.gif","https://images-ext-2.discordapp.net/external/cJVMOe8NdeXR3jK9HurFQjDf8BrBVpUkxizqM3AIrbk/https/media.tenor.com/images/88487db79abd6ab52b36cded8e9c9724/tenor.gif","https://images-ext-2.discordapp.net/external/PDsuy_nSWro1jrQb_4D3d9k2cbWef3JnHW-LCRZ91lQ/https/media.tenor.com/images/ab80887317b5ecbfee3aaf1b3caa49d1/tenor.gif","https://images-ext-2.discordapp.net/external/Xk2LumcH1Gh7UbfjhUd-P54gV8DMAusMrYlF--eVz-s/https/media.tenor.com/images/5cfb6172a40b9b4cb09d3becc1f8babb/tenor.gif?","https://images-ext-1.discordapp.net/external/UDVBHRSXmKvNi1BSdlrcowQPfeJraPu3WHBnoJ1O3lg/https/media.tenor.com/images/2dee91c6f4120e6b7d4f7306816ac6a4/tenor.gif","https://images-ext-1.discordapp.net/external/rOVFzHfTa4bgaW0ER8HTSivBV_elmIkX2GFsgfuawb0/https/media.tenor.com/images/4dc3a23b6e950ea4c1de19a6837d4203/tenor.gif","https://images-ext-1.discordapp.net/external/KNnCv23PJ8ZCzlvvGhYsPcQJDVEjziCElrpMb7OBtEc/https/media.tenor.com/images/37c670f1e7a3c3f06446507dd042fed9/tenor.gif","https://images-ext-1.discordapp.net/external/V-HtVJJqWfM87c1n783cdcPgn3oKcaTFYAmMQHFtgno/https/media.tenor.com/images/65b84bee0f6b57e255b8f43fd5c59f81/tenor.gif","https://images-ext-1.discordapp.net/external/X-zHEnYx-54q0Xt2-Q_3gjQbhFKwmxNfJhy-_NCjXKo/https/media.tenor.com/images/1cd55879f87d99318f79d370b196e9f0/tenor.gif"]
            embed.setImage(rand(tblEvil))
            embed.setFooter(message.author.tag + "asked the command" + " \n Bot made by Baeka#2540")
            message.channel.send(embed).catch(console.error)
        }
    },
    {
        name: "fakesmile",
        description: "It's a fake smile that you're doing here.",
        category: strUcFirst("happiness"),
        usage: [`${PREFIX}fakesmile`],
        id: 19,
        execute: () => {
            const embed = new Discord.MessageEmbed()
            embed.setTitle(message.author.tag + "** is not actually smiling...**")
            embed.setColor(0xff0000)
            embed.setImage("https://cdn.discordapp.com/attachments/718866856772894788/735472052756283412/tenor.gif");
            embed.setFooter(message.author.tag + "asked the command" + " \n Bot made by Baeka#2540")
            message.channel.send(embed).catch(console.error)
        }
    },
    {
        name: "dance",
        description: "Let's dance !",
        category: strUcFirst("happiness"),
        usage: [`${PREFIX}dance`],
        id: 20,
        execute: () => {
            const embed = new Discord.MessageEmbed()
            embed.setTitle(message.author.tag + "** is dancing**")
            embed.setColor(0xff0000)
            var tblDance = ["https://media.tenor.com/images/3695dae3873534b4cebdf2e27105ef73/tenor.gif","https://media.tenor.com/images/4fd49de4149a6d348e04f2465a3970af/tenor.gif","https://media.tenor.com/images/4fd49de4149a6d348e04f2465a3970af/tenor.gif","https://media.tenor.com/images/eb62193a55021822b8f7d6e051ff47ff/tenor.gif","https://media.tenor.com/images/14214b4c77e0de0976427cb43c276024/tenor.gif","https://media.tenor.com/images/b85d1396f931424b789068dc6062970b/tenor.gif","https://media.tenor.com/images/4e1c0924e763dafba58abba6bf7bc741/tenor.gif","https://media.tenor.com/images/d4f36aac64dc38384cb0e66bc91f32fc/tenor.gif", "https://media.tenor.com/images/f775a57b776b455985139447b9411644/tenor.gif","https://media.tenor.com/images/1025b48806942cc38b8e68c63975f955/tenor.gif"]
            embed.setImage(rand(tblDance))
            embed.setFooter(message.author.tag + "asked the command" + " \n Bot made by Baeka#2540")
            message.channel.send(embed).catch(console.error)
        }
    },
    {
        name: "cursedance",
        description: "Don't you know the meme ?",
        category: strUcFirst("happiness"),
        usage: [`${PREFIX}cursedance`],
        id: 21,
        execute: () => {
            const embed = new Discord.MessageEmbed()
            embed.setTitle(message.author.tag + "** is cursedancing**")
            embed.setColor(0xff0000)
            embed.setImage("https://cdn.discordapp.com/attachments/734071687288717383/734470803671744572/CrabKekW.gif");
            embed.setFooter(message.author.tag + "asked the command" + " \n Bot made by Baeka#2540")
            message.channel.send(embed).catch(console.error)
        }
    },
    {
        name: "afraid",
        description: "Sends a gif in which you're afraid.",
        category: strUcFirst("violence"),
        usage: [`${PREFIX}afraid`],
        id: 22,
        execute: () => {
            const embed = new Discord.MessageEmbed()
            embed.setTitle(message.author.tag + "** is afraid!**")
            embed.setColor(0xff0000)
            embed.setImage("https://media.discordapp.net/attachments/744980506151485503/744982747394867301/tenor-5.gif");
            embed.setFooter(message.author.tag + "asked the command" + " \n Bot made by Baeka#2540")
            message.channel.send(embed).catch(console.error)
        }
    },
    {
        name: "angry",
        description: "You're going to explode with anger : goodbye !",
        category: strUcFirst("violence"),
        usage: [`${PREFIX}angry`],
        id: 23,
        execute: () => {
            const embed = new Discord.MessageEmbed()
            embed.setTitle(message.author.tag + "** is angry!**")
            embed.setColor(0xff0000)
            var tblAngry = ["https://media.tenor.com/images/f1c73d36e72343d0e26d4da210155796/tenor.gif","https://media.tenor.com/images/83d8e763888e78e6fce2128f6aa6ea8e/tenor.gif","https://media.tenor.com/images/8a958b9c795c5743d1dc87f6bb06f9c9/tenor.gif","https://media.tenor.com/images/b38ba1fbbc512826c1264b4a8687d98f/tenor.gif","https://media.tenor.com/images/701b52e5b62eca0ce9a1bb6f23f7190e/tenor.gif","https://media.tenor.com/images/e53395c983ab83a7b46737e13fd8addb/tenor.gif","https://media.tenor.com/images/f12ace0eae9f4cea9abe60be72e939fe/tenor.gif","https://media.tenor.com/images/81a16324eb3f26635bc603a3bc829e04/tenor.gif","https://media.tenor.com/images/e7e4d1d009262fc52dca352648e25d64/tenor.gif"]
            embed.setImage(rand(tblAngry))
            embed.setFooter(message.author.tag + "asked the command" + " \n Bot made by Baeka#2540")
            message.channel.send(embed).catch(console.error)
        }
    },
    {
        name: "wasted",
        description: "Go in a coffin or make someone go in it",
        category: strUcFirst("violence"),
        usage: [`${PREFIX}`],
        id: 24,
        execute: () => {
            const user = message.mentions.users.first();
            if (user) {
                const member = message.guild.member(user);
                const embed = new Discord.MessageEmbed()
                embed.setTitle(" **This person is in the coffin: ** " + `${user.tag}` + " !")
                embed.setColor(0xff0000)
                embed.setImage("https://cdn.discordapp.com/attachments/734080283170570301/734470411328159805/tenor-1.gif");
                embed.setFooter(message.author.tag + "asked the command" + " \n Bot made by Baeka#2540")
                message.channel.send(embed).catch(console.error)
            } else {
                const embed = new Discord.MessageEmbed()
                embed.setTitle(message.author.tag + " **is in the coffin**")
                embed.setColor(0xff0000)
                embed.setImage("https://cdn.discordapp.com/attachments/734080283170570301/734470411328159805/tenor-1.gif");
                embed.setFooter(message.author.tag + "asked the command" + " \n Bot made by Baeka#2540")
                message.channel.send(embed).catch(console.error)
            }
        }
    },
    {
        name: "slap",
        description: "Slap someone who has got you angry.",
        category: strUcFirst("violence"),
        usage: [`${PREFIX}slap <user>`],
        id: 25,
        execute: () => {
            const user = message.mentions.users.first();
            if (user) {
                const member = message.guild.member(user);
                const embed = new Discord.MessageEmbed()
                embed.setTitle(message.author.tag + "** SLAPS **" + `${user.tag}` + " !")
                embed.setColor(0xff0000)
                var tblSlap =["https://cdn.weeb.sh/images/rknn7Jtv-.gif","https://media.tenor.com/images/7482494dabaf1c9d262526baeb8f7482/tenor.gif","https://media.tenor.com/images/1d8edce282f3e36abc6b730357d3cea2/tenor.gif","https://media.tenor.com/images/45a27dba6f60c6a8deee02335dd5f1a0/tenor.gif","https://media.tenor.com/images/734d628ba871022bc9ae142035b969b5/tenor.gif","https://media.tenor.com/images/a0c111e14b73a5ff9a876eb6beab6729/tenor.gif","https://media.tenor.com/images/53b846f3cc11c7c5fe358fc6d458901d/tenor.gif","https://media.tenor.com/images/0ecd307be82e5aedbe13215bffbcd675/tenor.gif","https://media.tenor.com/images/47698b115e4185036e95111f81baab45/tenor.gif", "https://media.tenor.com/images/2b983ab0ddc99168b33e18fd1c9b200f/tenor.gif","https://media.tenor.com/images/79c666d38d5494bad25c5c023c0bbc44/tenor.gif","https://media.tenor.com/images/c366bb3a5d7820139646d8cdce96f7a8/tenor.gif","https://media.tenor.com/images/5f2ff2ae7cea4fc3f1e701606dec84f8/tenor.gif"]
                embed.setImage(rand(tblSlap))
                embed.setFooter(message.author.tag + "asked the command" + " \n Bot made by Baeka#2540")
                message.channel.send(embed).catch(console.error)
            } else{
                message.channel.send("`PLS MENTION SOMEONE`")
                return
            }
        }
    },
    {
        name: "bang",
        description: "Do you want to bang someone ?",
        category: strUcFirst("violence"),
        usage: [`${PREFIX}slap <user>`],
        id: 26,
        execute: () => {
            const user = message.mentions.users.first();
            if (user)  {
                const member = message.guild.member(user);
                const embed = new Discord.MessageEmbed()
                embed.setTitle(message.author.tag + "** Banged **" + `${user.tag}` + " !")
                embed.setColor(0xff0000)
                var tblBang = ["https://cdn.weeb.sh/images/Sy_dXNts-.gif","https://images-ext-2.discordapp.net/external/2hi1l4vo2_plvpNPLknCXZ1bHNxM-Jy8zeEMLkr0bUc/https/images-ext-1.discordapp.net/external/doWdjDLftOtgdSwhlVqnak09e4L8NjIYi3DfDoBB7zU/https/cdn.weeb.sh/images/BJADXEtoZ.gif","https://images-ext-1.discordapp.net/external/EczpBgSeGgBoxTHJFNDec9sybdENUMqDiUgZekJm8gs/https/images-ext-1.discordapp.net/external/Amb4Lx6DGtiK39E0FfLgGxF-F5gtVjX3giBG1hWxtp0/https/cdn.weeb.sh/images/BkvjZI7PW.gif","https://images-ext-1.discordapp.net/external/7-76-UYO-ZsDCvq9F5UTn73OXZBxruk1ayA5qO1geUI/https/images-ext-2.discordapp.net/external/-JnLBmGXhRmiiDyGW7Iu4CfN2F0vhIj1ZgJ1Wnd4qBA/https/cdn.weeb.sh/images/HyZiWLmvb.gif","https://images-ext-2.discordapp.net/external/YoJykjPNHo3yytBX3yJfwrz0wgswGi_pe1DDvaBo8BU/https/images-ext-2.discordapp.net/external/IF5RQJpcOpBuXRzL54ARhYtoiM0vrtKoSox7WyK0AHI/https/cdn.weeb.sh/images/BymCu383W.gif","https://images-ext-2.discordapp.net/external/CB4TAj8IHKoSbtAN_-onrN6gDVDzFQ43qk5LWp6mLCc/https/images-ext-1.discordapp.net/external/dEdeeBIarL5wi1ghNRgsOcb5BT4YPcEyiEINtAwp0po/https/cdn.weeb.sh/images/SJeGENYoW.gif","https://images-ext-1.discordapp.net/external/Hx0Ddgc7VvhHJndM2ut4DSqt0ke-vZFd7ZqFb8ZkpZA/https/images-ext-2.discordapp.net/external/5gXbQvt3wXqbPyUbrZ2u6nTNl57YywUIphaf8HSfZGI/https/cdn.weeb.sh/images/SkFub87DW.gif","https://images-ext-2.discordapp.net/external/KbRL2CIiOwnTJULwjfV-AgLS3YsaqoLwQ3gYQcoavPs/https/images-ext-2.discordapp.net/external/rM6nftudJetEd07WOyo5n0UZKRNE0XxV1hmrL_hEkng/https/cdn.weeb.sh/images/SkiIVEKsW.gif","https://images-ext-2.discordapp.net/external/cPV7Xbvg0HeC4XOhEJQd_-hVweLbLzNzoEh-_4KtoHM/https/images-ext-2.discordapp.net/external/ZCcpcPi56-ovFkC-Xm3l9pYSCeIAoiyO-BfPP_iU_i8/https/cdn.weeb.sh/images/rJmPWI7wW.gif"]
                embed.setImage(rand(tblBang))
                embed.setFooter(message.author.tag + "asked the command" + " \n Bot made by Baeka#2540")
                message.channel.send(embed).catch(console.error)
            } else {
                message.channel.send("`PLS MENTION SOMEONE`")
                return
            }
        }
    },
    {
        name: "slice",
        description: "Lets cut people up !",
        category: strUcFirst("violence"),
        usage: [`${PREFIX}slice <user>`],
        id: 27,
        execute: () => {
            const user = message.mentions.users.first();
            if (user) {
                const member = message.guild.member(user);
                const embed = new Discord.MessageEmbed()
                embed.setTitle(message.author.tag + "** SLICES **" + `${user.tag}` + " !")
                embed.setColor(0xff0000)
                embed.setImage("https://cdn.discordapp.com/attachments/720416431270789184/733683882104324227/ghqy.gif");
                embed.setFooter(message.author.tag + "asked the command" + " \n Bot made by Baeka#2540")
                message.channel.send(embed).catch(console.error)
            } else{
            message.channel.send("`PLS MENTION SOMEONE`")
            return
            }
        }
    },
    {
        name: "kill",
        description: "Think carefully before you kill someone. This command can send anyone to the cemetery :coffin: :skull_crossbones: ...",
        category: strUcFirst("violence"),
        usage: [`${PREFIX}kill <user>`],
        id: 28,
        execute: () => {
        const user = message.mentions.users.first();
        if (user) {
            const member = message.guild.member(user);
            const embed = new Discord.MessageEmbed()
            embed.setTitle(message.author.tag + "** KILLS **" + `${user.tag}` + " !")
            embed.setColor(0xff0000)
            embed.setImage("https://media.tenor.com/images/f8a0b0df6657ee1cf5d0315268f24f6a/tenor.gif");
            embed.setFooter(message.author.tag + "asked the command" + " \n Bot made by Baeka#2540")
            message.channel.send(embed).catch(console.error)
        } else {
            message.channel.send("`PLS MENTION SOMEONE`")
            return
        }
        }
    },
    {
        name: "shutup",
        description: "Tell someone or unspecified people to **shut up**.",
        category: strUcFirst("unsorted"),
        usage: [`${PREFIX}shutup`, `${PREFIX}shutup <user>`],
        id: 29,
        execute: () => {
        const user = message.mentions.users.first();
        if (user) {
            const member = message.guild.member(user);
            const embed = new Discord.MessageEmbed()
            embed.setTitle(message.author.tag + "** says shut up to **" + `${user.tag}` + " !")
            embed.setColor(0xff0000)
            embed.setImage("https://media.tenor.com/images/58b4099b6fa70a33c95a86d85284fffc/tenor.gif");
            embed.setFooter(message.author.tag + "asked the command" + " \n Bot made by Baeka#2540")
            message.channel.send(embed).catch(console.error)
        } else {
            const member = message.guild.member(user);
            const embed = new Discord.MessageEmbed()
            embed.setTitle(message.author.tag + "** says shut up !")
            embed.setColor(0xff0000)
            embed.setImage("https://media.tenor.com/images/58b4099b6fa70a33c95a86d85284fffc/tenor.gif");
            embed.setFooter(message.author.tag + "asked the command" + " \n Bot made by Baeka#2540")
            message.channel.send(embed).catch(console.error)
        }
        }
    },
    {
        name: "baka",
        description: "Tell someone or unspecified people that they are idiots.",
        category: strUcFirst("unsorted"),
        usage: [`${PREFIX}baka`, `${PREFIX}baka <user>`],
        id: 30,
        execute: () => {
        const user = message.mentions.users.first();
        if (user) {
            const member = message.guild.member(user);
            const embed = new Discord.MessageEmbed()
            embed.setTitle("You are a BAKA, " + `${user.tag}` + " !")
            embed.setColor(0xff0000)
            embed.setImage("https://media.tenor.com/images/38fff1193d3535d83a3e4d73f032ef61/tenor.gif");
            embed.setFooter(message.author.tag + "asked the command" + " \n Bot made by Baeka#2540")
            message.channel.send(embed).catch(console.error)
        } else {
            const member = message.guild.member(user);
            const embed = new Discord.MessageEmbed()
            embed.setTitle("**BAKA!!!!!!! UwU**")
            embed.setColor(0xff0000)
            embed.setImage("https://media.tenor.com/images/38fff1193d3535d83a3e4d73f032ef61/tenor.gif");
            embed.setFooter(message.author.tag + "asked the command" + " \n Bot made by Baeka#2540")
            message.channel.send(embed).catch(console.error)
        }
        }
    },
    {
        name: "suprisemutherbutter",
        description: "SUPRISE MOTHER FUCKER !",
        category: strUcFirst("unsorted"),
        usage: [`${PREFIX}suprisemutherbutter`],
        id: 31,
        execute: () => {
        const embed = new Discord.MessageEmbed()
        embed.setTitle("**SUPRISE MOTHER FUCKER!**")
        embed.setColor(0xff0000)
        embed.setImage("https://media.tenor.com/images/4b68658a2ebf889831927fdea273aa16/tenor.gif");
        embed.setFooter(message.author.tag + "asked the command" + " \n Bot made by Baeka#2540")
        message.channel.send(embed).catch(console.error)
        }
    },
    {
        name: "really",
        description: "Oh ! Is it true ?",
        category: strUcFirst("unsorted"),
        usage: [`${PREFIX}really`],
        id: 32,
        execute: () => {
        const embed = new Discord.MessageEmbed()
        embed.setTitle("**OH! REALLY?!**")
        embed.setColor(0xff0000)
        embed.setImage("https://media.tenor.com/images/1c3085c712892ce70a3e8af3ccb33b29/tenor.gif");
        embed.setFooter(message.author.tag + "asked the command" + " \n Bot made by Baeka#2540")
        message.channel.send(embed).catch(console.error)
        }
    },
    {
        name: "shrug",
        description: "You don't care about that using this command.",
        category: strUcFirst("unsorted"),
        usage: [`${PREFIX}shrug`],
        id: 33,
        execute: () => {
        const embed = new Discord.MessageEmbed()
        embed.setTitle(message.author.tag + "** is shruging**")
        embed.setDescription("For those who are stupid, that meens that " + message.author.tag + " doesn't care UwU!")
        embed.setColor(0xff0000)
        embed.setImage("https://cdn.discordapp.com/attachments/735178664324497479/735185183979864085/tenor.gif");
        embed.setFooter(message.author.tag + "asked the command" + " \n Bot made by Baeka#2540")
        message.channel.send(embed).catch(console.error)
        }
    },
    {
        name: "punch", // ELLE EST PAS AVEC LES AUTRES "violence" JE L'AI OUBLIEE
        description: "This command will punch someone with a gif!",
        category: strUcFirst("violence"),
        usage: [`${PREFIX}punch <user>`],
        id: 34,
        execute: () => {
        const user = message.mentions.users.first();
        if (user) {
            const member = message.guild.member(user);
            const embed = new Discord.MessageEmbed()
            embed.setTitle(message.author.tag + "** Punched **" + `${user.tag}` + " !")
            embed.setColor(0xff0000)
            var tblPunched = ["https://images-ext-2.discordapp.net/external/KBs-23hBtUx_vQDGDsEkpN0VFImkP-hRO0enX4ZBHQk/https/media.tenor.com/images/6cf02ae40d7f62dd16538a53d35ddbd7/tenor.gif","https://images-ext-2.discordapp.net/external/QcQ458FOkY28trb6fwvm2rj19y7-c-PG-OFljsE7z1g/https/media.tenor.com/images/7eb5ede6402a3fb97ab9fccc81640c2c/tenor.gif","https://images-ext-2.discordapp.net/external/0c2tsmM8w5-2WAHduZhvMy38H1MHHMqcIFl6iOrldcE/https/media.tenor.com/images/61904d1fdbcc0d18595569e8bcc49c5e/tenor.gif","https://images-ext-2.discordapp.net/external/DqIHs2-V5yzbEOgwO4SGDAJYADjA7AJ9VJuL1n5g3SY/https/media.tenor.com/images/5cdcbff8c5bce802d7b65baa711f12f4/tenor.gif","https://images-ext-2.discordapp.net/external/BwtlPKmumCnmCTiohc_m2oVBVk-Tl8dFV_lckFhLm7k/https/media.tenor.com/images/f48c44b3bd26f1f913db0f5a3b2e4e91/tenor.gif","https://images-ext-2.discordapp.net/external/1NPFeAzcvHry7HrybxskpDEr-yQTDCFoA2IF4n3g8Z0/https/media.tenor.com/images/359a3a05dbde06a89cdcf494ad62bb5d/tenor.gif","https://images-ext-1.discordapp.net/external/7nfFgwAO1gh6giD-bcY6JlXr9iaPfwP1Ule0PzRirFg/https/media.tenor.com/images/e4d9dfda188b8ee012f4b0ac12aa9c08/tenor.gif","https://images-ext-2.discordapp.net/external/kyFc128ApuM2cNCkyovYFPxJdwuJ7PN-vJZhJJqwUBE/https/media.tenor.com/images/04f62b7819a22210c0ba411ddb2636a5/tenor.gif","https://images-ext-2.discordapp.net/external/2IdYh8q61tq2X6k1ZjxxgkQ4lDIxc6WcSH6OZCPJpfs/https/media.tenor.com/images/4391e2653987eb148b9e9cbbfe301e31/tenor.gif","https://images-ext-1.discordapp.net/external/848uc_SWBVasMuMW8QtvpqhBC9cnYaGe7AC-E4Qn9yo/https/media.tenor.com/images/18872fc3b8090ce5c7b486665b30cf58/tenor.gif"]
            embed.setImage(rand(tblPunched))
            embed.setFooter(message.author.tag + "asked the command" + " \n Bot made by Baeka#2540")
            message.channel.send(embed).catch(console.error)
        } else{
            message.channel.send("`PLS MENTION SOMEONE`")
            return
        }
        }
    },
    {
        name: "sad",
        description: "Oooh... How can I console you?",
        category: strUcFirst("unsorted"),
        usage: [`${PREFIX}sad`],
        id: 35,
        execute: () => {
        const embed = new Discord.MessageEmbed()
        embed.setTitle(message.author.tag + "** is sad...**")
        embed.setColor(0xff0000)
        var tblSad = ["https://images-ext-1.discordapp.net/external/GlRcsr2ekrU1K3N2r_0_iprDEbfjFzaHOCKM2m0ryTs/https/media.tenor.com/images/7a139c046d4f9c0363d3ad641192ff0a/tenor.gif?format=png&width=200&height=300","https://images-ext-2.discordapp.net/external/jTOCfliGBNWLoJMRC2zDLgLxo03iUCTqHKpXCfUwhrU/https/media.tenor.com/images/9fb74b3ebc8deb44a4b891ed9d2585ab/tenor.gif","https://images-ext-2.discordapp.net/external/fDsgN64NWHqTOI7JT70VZqKEISP7aHtNURblFZQyUxE/https/media.tenor.com/images/ed89d1e54542d5e1258c83a3eb4832b1/tenor.gif","https://images-ext-1.discordapp.net/external/rWr9sVBjC04sO_gUBVbF8ozMNw7dKwLiRuK6iAimigw/https/media.tenor.com/images/79e93bec3ccc1f3fb4426ff1fc486910/tenor.gif","https://images-ext-1.discordapp.net/external/3WIvep7PvCWJds4Xovmh3NTBpAM-Ye67UE_QPgMTx4E/https/media.tenor.com/images/dcf6e73079e56e64e037d40b291a026b/tenor.gif"]
        embed.setImage(rand(tblSad))
        embed.setFooter(message.author.tag + "asked the command" + " \n Bot made by Baeka#2540")
        message.channel.send(embed).catch(console.error)
        }
    },
    {
        name: "cry",
        description: "NO NO, no don't cry !",
        category: strUcFirst("unsorted"),
        usage: [`${PREFIX}cry`],
        id: 36,
        execute: () => {
        const embed = new Discord.MessageEmbed()
        embed.setTitle(message.author.tag + "** sadly cry...**")
        embed.setColor(0xff0000)
        var tblCry = ["https://images-ext-1.discordapp.net/external/6rH93XDox3YlacR47JOMCBEXmc5oZj9lDaxzfsnNZEs/https/media.tenor.com/images/eda88aaad47aaab5d861c19a03d73e27/tenor.gif","https://images-ext-2.discordapp.net/external/JHrxYC5OdbcuMVOnN-6Gi-TnluZZ1O5-I7Su9xI5ysk/https/media.tenor.com/images/f0dd9ccbef2cec67fbc9d7c70ec4841f/tenor.gif","https://images-ext-2.discordapp.net/external/1dUieYhPs53-ZCfJWHsD6Y7Iekeg4qkuCiytAKQ73gw/https/media.tenor.com/images/ffe659bb3320241c1ba4279be38d04d3/tenor.gif","https://images-ext-1.discordapp.net/external/BLNT8U4E6H25iQqpEnnNOP1ACUaMnZVdV9TYrtIZ3Ro/https/media.tenor.com/images/e83cd3de32642dedfb7cb67117229d71/tenor.gif","https://images-ext-1.discordapp.net/external/wXXkflsitjctRs1VqdaTaLfRY_1QlHhVU6nkHrQ0Zgc/https/media.tenor.com/images/7ab406bcbfb9bed8fe2b3490a72b4985/tenor.gif","https://images-ext-2.discordapp.net/external/Kb4LUV0fn1SgClj_DvwCSMViCCy7Lr3VyCT_a39wn3U/https/media.tenor.com/images/59b8a07fa301ebbc8ea5315c2c7360c6/tenor.gif","https://images-ext-2.discordapp.net/external/nHvQwTgRGeOliY4XdwKV2LUjTrr0qF2KS5aFDwkXmQI/https/media.tenor.com/images/43169e60ae74758222dae1483ba646d6/tenor.gif","https://images-ext-1.discordapp.net/external/YI0W-D_lglNdtMyiXSmLMEsr3xmsfIFQ63pKZ9Mg3DY/https/media.tenor.com/images/fdd64b8e90b0f13a492247a21aa4df35/tenor.gif","https://images-ext-2.discordapp.net/external/tEgGVC0XP9El7w4165diRnFYlHK4gIZnr7m_-5svs90/https/media.tenor.com/images/54d3fc68bf32ea8144d81ccf5112a927/tenor.gif","https://images-ext-2.discordapp.net/external/Tbuh6f8cqafmguVXGjlyQF6ogLbjFke6mVQmAYDgGAo/https/media.tenor.com/images/b38ee18cf091879abf3f951f03d6cab3/tenor.gif","https://images-ext-1.discordapp.net/external/ss8JhDImEaARWJ4pAUvAfcqwKgcSnDVx7R6ZuWl8MUg/https/media.tenor.com/images/35093d538540dbe21fd0048e9c02a586/tenor.gif","https://images-ext-1.discordapp.net/external/D0It9czoEamWk3zzZfPMSSolPaGg8vPJE0kzH3qI38M/https/media.tenor.com/images/12ddf6299a8c8efc97c9628f0757f953/tenor.gif"]
        embed.setImage(rand(tblCry))
        embed.setFooter(message.author.tag + "asked the command" + " \n Bot made by Baeka#2540")
        message.channel.send(embed).catch(console.error)
        }
    },
    {
        name: "bored",
        description: "A gif will show others that you are bored.",
        category: strUcFirst("unsorted"),
        usage: [`${PREFIX}bored`],
        id: 37,
        execute: () => {
        const embed = new Discord.MessageEmbed()
        embed.setTitle(message.author.tag + "** is bored...**")
        embed.setColor(0xff0000)
        embed.setImage("https://media.tenor.com/images/af2683bd6361e05c2d04478aca740cd5/tenor.gif");
        embed.setFooter(message.author.tag + "asked the command" + " \n Bot made by Baeka#2540")
        message.channel.send(embed).catch(console.error)
        }
    },
    {
        name: "bruh",
        description: "No comments...",
        category: strUcFirst("unsorted"),
        usage: [`${PREFIX}bruh`],
        id: 38,
        execute: () => {
        const embed = new Discord.MessageEmbed()
        embed.setTitle(message.author.tag + " **no comments...**")
        embed.setColor(0xff0000)
        embed.setImage("https://cdn.discordapp.com/attachments/720416431270789184/733693427723665529/72d42c5.jpg");
        embed.setFooter(message.author.tag + "asked the command" + " \n Bot made by Baeka#2540")
        message.channel.send(embed).catch(console.error)
        }
    },
    {
        name: "confused",
        description: "A gif will show others that you are confused.",
        category: strUcFirst("unsorted"),
        usage: [`${PREFIX}confused`],
        id: 39,
        execute: () => {
        const embed = new Discord.MessageEmbed()
        embed.setTitle(message.author.tag + "** is confused UwU**")
        embed.setColor(0xff0000)
        var tblConfused = ["https://media.tenor.com/images/c2a3a703411d63c75a117d5418ad5faf/tenor.gif","https://media.tenor.com/images/31dce233c6ff83f67b16f534e2a7a226/tenor.gif","https://media.tenor.com/images/9a31b03fa3af17f5c4cfab4900d0b560/tenor.gif","https://media.tenor.com/images/5379e8eb245cb564222f4b5ca18f46f0/tenor.gif", "https://media.tenor.com/images/fa93d52d6f767bbab36dc88ebe86b0fc/tenor.gif", "https://media.tenor.com/images/b0123ae80781b3ca807c8c21101415bd/tenor.gif","https://media.tenor.com/images/2e4c1066bcea144a5956ea4bebe0c0a2/tenor.gif","https://media.tenor.com/images/10eb0ae09d8954bcc0a54c084d23e5fe/tenor.gif","https://media.tenor.com/images/b8b3a7f9d5a7f5a02152137195a7b69f/tenor.gif","https://media.tenor.com/images/5f306b3de3a9574ef9feaf90cd580447/tenor.gif"]
        embed.setImage(rand(tblConfused))
        embed.setFooter(message.author.tag + "asked the command" + " \n Bot made by Baeka#2540")
        message.channel.send(embed).catch(console.error)
        }
    },
    {
        name: "afraid", // mais elle aussi ptn elle est déjà passée... snif g fé koi ?? (regarder angry juste en dessous c'est elle qui est déjà passée aussi)
        description: "Don't be afraid or I'll send a gif!",
        category: strUcFirst("unsorted"),
        usage: [`${PREFIX}afraid`],
        id: 40,
        execute: () => {
        const embed = new Discord.MessageEmbed()
        embed.setTitle(message.author.tag + "** is afraid!**")
        embed.setColor(0xff0000)
        embed.setImage("https://media.discordapp.net/attachments/744980506151485503/744982747394867301/tenor-5.gif");
        embed.setFooter(message.author.tag + "asked the command" + " \n Bot made by Baeka#2540")
        message.channel.send(embed).catch(console.error)
        }
    },
    {
        name: "angry", // ptn keskel fout là elle est déjà passée humhum... Bon après tout c'est pas très grave on ferme les yeux '-'...
        description: "Don't get angry, I'm going to send a gif",
        category: strUcFirst("unsorted"),
        usage: [`${PREFIX}angry`],
        id: 41,
        execute: () => {
        const embed = new Discord.MessageEmbed()
        embed.setTitle(message.author.tag + "** is angry!**")
        embed.setColor(0xff0000)
        var tblAngry = ["https://media.tenor.com/images/f1c73d36e72343d0e26d4da210155796/tenor.gif","https://media.tenor.com/images/83d8e763888e78e6fce2128f6aa6ea8e/tenor.gif","https://media.tenor.com/images/8a958b9c795c5743d1dc87f6bb06f9c9/tenor.gif","https://media.tenor.com/images/b38ba1fbbc512826c1264b4a8687d98f/tenor.gif","https://media.tenor.com/images/701b52e5b62eca0ce9a1bb6f23f7190e/tenor.gif","https://media.tenor.com/images/e53395c983ab83a7b46737e13fd8addb/tenor.gif","https://media.tenor.com/images/f12ace0eae9f4cea9abe60be72e939fe/tenor.gif","https://media.tenor.com/images/81a16324eb3f26635bc603a3bc829e04/tenor.gif","https://media.tenor.com/images/e7e4d1d009262fc52dca352648e25d64/tenor.gif"]
        embed.setImage(rand(tblAngry))
        embed.setFooter(message.author.tag + "asked the command" + " \n Bot made by Baeka#2540")
        message.channel.send(embed).catch(console.error)
        }
    },
    {
        name: "sleep",
        description: "Shhhht! I don't want to wake you up!",
        category: strUcFirst("unsorted"),
        usage: [`${PREFIX}sleep`],
        id: 42,
        execute: () => {
        const embed = new Discord.MessageEmbed()
        embed.setTitle(message.author.tag + "** is sleeping**")
        embed.setColor(0xff0000)
        var tblSleep = ["https://media.tenor.com/images/87c1214eb60e46e1ec78520c6c7cd415/tenor.gif","https://media.tenor.com/images/6216fb895a167b823e2659e5e3c198c9/tenor.gif","https://media.tenor.com/images/8ef91f6b2dca2c3c8bb581357083ad47/tenor.gif","https://media.tenor.com/images/d35d9c3e50ef28255a364ca08fa7e66c/tenor.gif","https://media.tenor.com/images/9dda29007e302fa1323e4b614c2e6d8b/tenor.gif","https://media.tenor.com/images/6cace20a510db73d9051f301c8707b4e/tenor.gif","https://media.tenor.com/images/8cfe5499c45aa66792d874ef50c173bc/tenor.gif","https://media.tenor.com/images/73f35419936055719a65f0fbf796f3b3/tenor.gif","https://media.tenor.com/images/0fe423672104cd0ec97e092bc2271a4a/tenor.gif","https://media.tenor.com/images/cda3967d501faafe63a01d73bcf7282e/tenor.gif"]
        embed.setImage(rand(tblSleep))
        embed.setFooter(message.author.tag + "asked the command" + " \n Bot made by Baeka#2540")
        message.channel.send(embed).catch(console.error)
        }
    },
    {
        name: "dramatic",
        description: "You're being dramtic !!!",
        category: strUcFirst("unsorted"),
        usage: [`${PREFIX}dramatic`],
        id: 43,
        execute: () => {
        const embed = new Discord.MessageEmbed()
        embed.setTitle(message.author.tag + "** is being dramatic**")
        embed.setDescription("||It's weird||")
        embed.setColor(0xff0000)
        embed.setImage("https://cdn.discordapp.com/attachments/718866856772894788/730796950722707526/DK1V7-3QH99MZ949.gif");
        embed.setFooter(message.author.tag + "asked the command" + " \n Bot made by Baeka#2540")
        message.channel.send(embed).catch(console.error)
        }
    },
    {
        name: "reverse",
        description: "Do you want to use reverse ?",
        category: strUcFirst("unsorted"),
        usage: [`${PREFIX}reverse`],
        id: 44,
        execute: () => {
        const embed = new Discord.MessageEmbed()
        embed.setTitle(message.author.tag + " **uses reverse!**")
        embed.setColor(0xff0000)
        embed.setImage("https://cdn.discordapp.com/attachments/734080283170570301/734471129460375652/tenor_1.gif");
        embed.setFooter(message.author.tag + "asked the command" + " \n Bot made by Baeka#2540")
        message.channel.send(embed).catch(console.error)
        }
    },
    {
        name: "pat",
        description: "Pat someone (with a gif)",
        category: strUcFirst("unsorted"),
        usage: [`${PREFIX}pat <user>`],
        id: 45,
        execute: () => {
        const user = message.mentions.users.first();
        if (user) {
            const member = message.guild.member(user);
            const embed = new Discord.MessageEmbed()
            embed.setTitle(message.author.tag + " **Pats** " + `${user.tag}`)
            embed.setColor(0xff0000)
            var tblPat = ["https://images-ext-2.discordapp.net/external/0kMp89MC22KXc6vhH4ckq-y6kBHAI4mRfbMi5mfvWWE/https/media.tenor.com/images/ad8357e58d35c1d63b570ab7e587f212/tenor.gif","https://images-ext-2.discordapp.net/external/zhBslR5eUMMRjZWa5Hix9E7Tbg8W24ACTxR_GQkdViU/https/media.tenor.com/images/da8431374a530ae516c0cc8f966d1c2b/tenor.gif","https://images-ext-1.discordapp.net/external/usO71iwyvgchy-PaMwwfBzu19usr5p_msWKktBLWfz4/https/media.tenor.com/images/d88e63f03bfcdc37439d95425e10c3fa/tenor.gif","https://images-ext-1.discordapp.net/external/WrK75Z5RFMFkT-WFh-voxj2kz7483-iX1LNQnCxU42o/https/media.tenor.com/images/6cace20a510db73d9051f301c8707b4e/tenor.gif","https://images-ext-1.discordapp.net/external/92vIoSVvAImNz_BGUi_oXSI4Pxe-welvS7hssLJDESA/https/media.tenor.com/images/19c555af496d14808aa5d9bd8277c937/tenor.gif","https://images-ext-2.discordapp.net/external/nujUN0gsxfUuJfgCFSpo6eog4vd2C0eBohhdyeFaNIA/https/media.tenor.com/images/96353d89d27896aa4bf2aa3688632f47/tenor.gif","https://images-ext-1.discordapp.net/external/9IKKiUFRP9uDOxCmzh96FunIzFthDfFu1iMri69n74Y/https/media.tenor.com/images/1d37a873edfeb81a1f5403f4a3bfa185/tenor.gif","https://images-ext-1.discordapp.net/external/tWw2mTzUe-WU42NlHyUXFIyORmr_5Hy0frB3TLw7HEI/https/media.tenor.com/images/7d12c7bc28c3b0330401388102cdcc0f/tenor.gif","https://images-ext-2.discordapp.net/external/k0_FCxieLtrVe9FoSeCcYkJ0TJTYjZMwBVPP3p1kydM/https/media.tenor.com/images/c76912d7b7d52c9ab18fac03feaabc72/tenor.gif","https://images-ext-2.discordapp.net/external/gM0MyTN7FbXKo9dQ_iMZV8QSYE-RPOch8m8rf32f6ts/https/media.tenor.com/images/8613798fb79630b64955e1110fd6b2ea/tenor.gif"]
            embed.setImage(rand(tblPat))
            embed.setFooter(message.author.tag + "asked the command" + " \n Bot made by Baeka#2540")
            message.channel.send(embed).catch(console.error)
        } else {
            message.channel.send("`PLS MENTION SOMEONE`")
            return
            }
        }
    },
    {
        name: "proud",
        description: "A gif will show others that you are proud (of yourself or someone else)!",
        category: strUcFirst("unsorted"),
        usage: [`${PREFIX}proud`, `${PREFIX}proud <user>`],
        id: 46,
        execute: () => {
        const user = message.mentions.users.first();
        if (user) {
            const member = message.guild.member(user);
            const embed = new Discord.MessageEmbed()
            embed.setTitle(message.author.tag + " **is proud of** " + `${user.tag}` + " !")
            embed.setColor(0xff0000)
            embed.setImage("https://media.tenor.com/images/0abadb772a5d4740251ac5626c875386/tenor.gif");
            embed.setFooter(message.author.tag + "asked the command" + " \n Bot made by Baeka#2540")
            message.channel.send(embed).catch(console.error)
        } else {
            const embed = new Discord.MessageEmbed()
            embed.setTitle(message.author.tag + " **is proud !!**")
            embed.setColor(0xff0000)
            embed.setImage("https://media.tenor.com/images/8c806527158bee55b2ff98f371fb66cf/tenor.gif");
            embed.setFooter(message.author.tag + "asked the command" + " \n Bot made by Baeka#2540")
            message.channel.send(embed).catch(console.error)
        }
        }
    },
    {
        name: "stare",
        description: "You're staring at someone with my gifs!",
        category: strUcFirst("unsorted"),
        usage: [`${PREFIX}stare <user>`],
        id: 47,
        execute: () => {
        const user = message.mentions.users.first();
        if (user) {
            const member = message.guild.member(user);
            const embed = new Discord.MessageEmbed()
            embed.setTitle(message.author.tag + " **stares at** " + `${user.tag}`)
            embed.setColor(0xff0000)
            var tblStare =["https://media.tenor.com/images/630e8b2d5267535da4173b4d85e6ace2/tenor.gif","https://media.tenor.com/images/3033a89d8a72223de0a6dcb91480c3b8/tenor.gif","https://media.tenor.com/images/a1f120ad205fe365ee92fe3ecb724755/tenor.gif","https://media.tenor.com/images/be831f8c1dcc59d0cefbcc28dae315cf/tenor.gif","https://media.tenor.com/images/30a3c27225dda6e09ea14df7bc05e936/tenor.gif","https://media.tenor.com/images/40848b695905c36096a227f12d7342f2/tenor.gif","https://media.tenor.com/images/b3573dbe2ef0d8dabcec0fc8ffa8154e/tenor.gif","https://media.tenor.com/images/cb41da67d8fa1f095d8ab921cebc0f11/tenor.gif","https://media.tenor.com/images/bb6da883826ff024d5d720bc2b6d78fb/tenor.gif","https://media.tenor.com/images/f17583ef992d878d23fb7b0a85115838/tenor.gif","https://media.tenor.com/images/635ef94bec00c61dba2ea252727f43f1/tenor.gif"]
            embed.setImage(rand(tblStare))
            embed.setFooter(message.author.tag + "asked the command" + " \n Bot made by Baeka#2540")
            message.channel.send(embed).catch(console.error)
        } else {
            message.channel.send("`PLS MENTION SOMEONE`")
            return
        }
        }
    },
    {
        name: "givecookie",
        description: "You're giving a cookie to someone.",
        category: strUcFirst("unsorted"),
        usage: [`${PREFIX}givecookie <user>`],
        id: 48,
        execute: () => {
        const user = message.mentions.users.first();
        if (user) {
            const member = message.guild.member(user);
            const embed = new Discord.MessageEmbed()
            embed.setTitle(message.author.tag + " **gave a cookie to ** " + `${user.tag}`)
            embed.setColor(0xff0000)
            embed.setImage("https://media.tenor.com/images/ee95120701a9ec4046dd4f87e51921a0/tenor.gif");
            embed.setFooter(message.author.tag + "asked the command" + " \n Bot made by Baeka#2540")
            message.channel.send(embed).catch(console.error)
        } else {
            message.channel.send("`PLS MENTION SOMEONE`")
            return
        }
        }
    },
    {
        name: "feed",
        description: "It's very nice to feed someone!",
        category: strUcFirst("unsorted"),
        usage: [`${PREFIX}feed <user>`],
        id: 49,
        execute: () => {
        const user = message.mentions.users.first();
        if (user) {
            const embed = new Discord.MessageEmbed()
            embed.setTitle(message.author.tag + " **feeds** " + `${user.tag}`)
            embed.setColor(0xff0000)
            var tblFeed = ["https://media.tenor.com/images/a6e82eba4b87d830fc3063f15d93f5fc/tenor.gif","https://media.tenor.com/images/846c25f5889844fc046103310d63a955/tenor.gif","https://media.tenor.com/images/6333e170ce611e616f98f0ebfd5d9059/tenor.gif","https://media.tenor.com/images/28a0f999392b65149a77a7e0270ee280/tenor.gif","https://media.tenor.com/images/54112765b2c1b359ffc5f55bd0661b93/tenor.gif","https://media.tenor.com/images/dd8cd4583c8848b9addd2c78e1a5f8ff/tenor.gif","https://images-ext-1.discordapp.net/external/clGX4GPfQr7wXPh62n5oPNpA7goIQuqTznDAJypvgJc/https/cdn.nekos.life/feed/feed_001.gif","https://images-ext-1.discordapp.net/external/R2EuaHKBCm3sUEzd4KqMuAoj12ffsIKbynzl8K8v2ro/https/cdn.nekos.life/feed/feed_005.gif","https://media.tenor.com/images/9be673d59d0be538041c86b5cde8354d/tenor.gif","https://media.tenor.com/images/452ec70a872dea26b3647a7c6b5c9c49/tenor.gif"]
            embed.setImage(rand(tblFeed))
            embed.setFooter(message.author.tag + "asked the command" + " \n Bot made by Baeka#2540")
            message.channel.send(embed).catch(console.error)
        } else {
            message.channel.send("`PLS MENTION SOMEONE`")
            return
        }
        }
    },
    {
        name: "run",
        description: "**RUUUUUUUUUUUUUUUUUUN !!!!!!!**",
        category: strUcFirst("unsorted"),
        usage: [`${PREFIX}run`],
        id: 50,
        execute: () => {
            const embed = new Discord.MessageEmbed()
            embed.setTitle(message.author.tag + " **is runnig away!**")
            embed.setColor(0xff0000)
            embed.setImage("https://cdn.discordapp.com/attachments/734071116129370172/735208506931675226/anime-run-gif-13.gif");
            embed.setFooter(message.author.tag + "asked the command" + " \n Bot made by Baeka#2540")
            message.channel.send(embed).catch(console.error)
        }
    },
    {
        name: "exited",
        description: "STOP MOVIIIING !!!!!!!",
        category: strUcFirst("exited"),
        usage: [`${PREFIX}exited`],
        id: 51,
        execute: () => {
            const embed = new Discord.MessageEmbed()
            embed.setTitle(message.author.tag + " **is exited!**")
            embed.setColor(0xff0000)
            embed.setImage("https://media.tenor.com/images/0c67273e3d85c332751f381e878d8f08/tenor.gif");
            embed.setFooter(message.author.tag + "asked the command" + " \n Bot made by Baeka#2540")
            message.channel.send(embed).catch(console.error)
        }
    },
    {
        name: "random",
        description: "This command works again ! Sends a random command from aaaall the bot's commands. It's better to ask `AJ!random <user>` because the bot has a lot of commands with mentions only and if not he'll answer `PLS MENTION SOMEONE`.",
        category: strUcFirst("random"),
        usage: [`${PREFIX}random`, `${PREFIX}random <user>`],
        id: 52,
        execute: () => {
        let cmdAl = rand(COMMANDS);
        cmdAl.execute();
        }
    },
    {
        name: "tags",
        description: "Send the names of all users who have the same tag (#xxxx) as you.",
        category: strUcFirst("info | About the bot"),
        usage: [`${PREFIX}tags`, `${PREFIX}tags <user>`],
        id: 53,
        execute: () => {
            const userMention = message.mentions.users.first();
            if (userMention) {
                let taghashMention = userMention.tag.substring(userMention.username.length);
                let userSameTagMention = client.users.cache.filter(u => u.tag.endsWith(taghashMention));
                const embedSameTagMention = new Discord.MessageEmbed()
                .setDescription(userSameTagMention.array().sort().join('\n'))
                .setColor(0xff0000);
                message.channel.send(embedSameTagMention);
            } 
            else {
                let taghash = message.author.tag.substring(message.author.username.length);
                let userSameTag = client.users.cache.filter(u => u.tag.endsWith(taghash));
                const embedSameTag = new Discord.MessageEmbed()
                .setDescription(userSameTag.array().sort().join('\n'))
                .setColor(0xff0000);
                message.channel.send(embedSameTag);
            }
        }
    },
    {
        name: "happy",
        description: "We're glad that ur happy :)",
        category: strUcFirst("happiness"),
        usage: [`${PREFIX}happy`],
        id: 54,
        execute: () => {
            let tblHappy = ["https://media.tenor.com/images/890933821d3b6f9b90e195e1fa3908e2/tenor.gif", "https://media.tenor.com/images/d62e090630ff6829fda329b86ea723e0/tenor.gif", "https://media.tenor.com/images/c9009da749cdc444ed32f0b87e94ce10/tenor.gif", "https://media1.tenor.com/images/aff48b5d06ebb76fef6e067e0e4d9fc0/tenor.gif?itemid=9528804", "https://media.tenor.com/images/6cbcf523bf357411ff874e288239d073/tenor.gif"]
            const embed = new Discord.MessageEmbed()
            .setTitle(message.author.tag + " **is happy :)**")
            .setColor(0xff0000)
            .setImage(rand(tblHappy))
            .setFooter(message.author.tag + "asked the command" + " \n Bot made by Baeka#2540")
            message.channel.send(embed).catch(console.error);
        }
    }
];

    if (message.content.toLowerCase().startsWith(`${PREFIX}verify`)) {
        message.member.roles.add('734075674201030717')
        message.member.send("Welcome on AJbot-support!").catch(console.error)
        message.delete().catch(console.error)
    }

    if (message.content.toLowerCase().startsWith(`${PREFIX}update`)) {
        message.member.roles.add('775060699604975656')
        message.channel.send("For now on, you'll get all new updates!").catch(console.error)
        message.delete().catch(console.error)
    }
    
    
    if (message.content.toLowerCase().startsWith(`${PREFIX}help `)) {
        console.log(message.author.tag + " asked the command help " + message.content.toLowerCase().substring(PREFIX.length + 5));
        
        function strUcFirst(a) {
  			return (a + '').charAt(0).toUpperCase() + a.substr(1);
		}
        var cmdValid = false;
    	var cmdDmd = message.content.substring(PREFIX.length + 5); // On récup la commande demandée : aj!help ...
        
        
        
        var cmdNmAct = COMMANDS[0].name; // i est = à une valeur entre 0 et le nombre de commandes (en tout cas celles mises dans la var commands) : commands[i].name choisit le nom de la valeur actuelle de i en tant qu'une valeur du tableau-var commands
        var cmdDescAct = COMMANDS[0].description;
        var cmdCatAct = COMMANDS[0].category;
        var cmdUtilAct = COMMANDS[0].usage;
        var i = 0;

        while (i < COMMANDS.length) { // on vérifie si le message.substring() correspond bien à un des noms de commande
            cmdNmAct = COMMANDS[i].name;
            cmdDescAct = COMMANDS[i].description;
            cmdCatAct = COMMANDS[i].category;
            cmdUtilAct = COMMANDS[i].usage;

  
      

            if (cmdNmAct.toLowerCase() === cmdDmd.toLowerCase()) {
                cmdValid = true;
                i = COMMANDS.length;
            }
            i++;
            
            if (cmdValid) {
                const embedHelpCmd = new Discord.MessageEmbed()
                .setColor("RANDOM")
                .setTitle(`${message.author.username}, here's informations about the command "__${cmdNmAct}__" :`)
                .addFields(
                { name: "\nCategory", value: cmdCatAct + '\n\n\n\n', inline: false },
                { name: "\nDescription", value: cmdDescAct + '\n\n\n\n', inline: false },
                // { name: "\u200b", value: '\u200b', inline: false },
                { name: "\nUsage", value: cmdUtilAct.join(",\n") + '\n\n\n\n', inline: false },
                // { name: "\u200b", value: '\u200b', inline: false },
                { name: "__Note :__", value: 'You are not obliged to use upper and lower case letters.\n\n', inline: false },
                )
                .setFooter(`${message.author.tag}, hope I helped you !` + " \n Bot made by Baeka#2540");
                message.channel.send(embedHelpCmd);
            }
        }
    }

    if (message.content.toLowerCase() === `${PREFIX}help`) {
        console.log(message.author.tag + " asked the command help")
        
        var cmdsPSBL = ["help", "test", "supportlink", "botinfo", "botguilds", "addbot", "vote", "hello", "bye", "thanks", "shutup", "baka", "really", "suprisemutherbutter", "I<3YOU", "poke", "hug", "kiss", "please", "sorry", "blush", "shrug", "laugh", "bored", "smile", "evilsmile", "fakesmile", "bruh", "sad", "confused", "afraid", "angry", "cry", "dance", "cursedance", "sleep", "dramatic", "wasted", "reverse", "pat", "proud", "stare", "givecookie", "feed", "exited", "run", "slap", "punch", "bang", "slice", "kill"];
        
        var cmdsINFOBOT = COMMANDS.filter(cmds => cmds.category.toLowerCase() === "info | about the bot");
        var cmdsRAND = COMMANDS.filter(cmds => cmds.category.toLowerCase() === "random");
        var cmdsLOVE = COMMANDS.filter(cmds => cmds.category.toLowerCase() === ":heart: love :heart:");
        var cmdsHAPPINESS = COMMANDS.filter(cmds => cmds.category.toLowerCase() === "happiness");
        var cmdsPOLITENESS = COMMANDS.filter(cmds => cmds.category.toLowerCase() === "politeness");
        var cmdsVIOLENCE = COMMANDS.filter(cmds => cmds.category.toLowerCase() === "violence");
        var cmdsUNSORTED = COMMANDS.filter(cmds => cmds.category.toLowerCase() === "unsorted");
        
        var cmdsLoveVAL = []; // tbl déclaré vide pcq on va lui push des trucs
        var cmdsInfoVAL = [];
        var cmdsRandVAL = [];
        var cmdsHappinessVAL = [];
        var cmdsPolitenessVAL = [];
        var cmdsViolenceVAL = [];
        var cmdsUnsortedVAL = [];
        
        var nbWhileLove = 0;
        while (nbWhileLove < cmdsLOVE.length) {
            cmdsLoveVAL.push(cmdsLOVE[nbWhileLove].name);
            
            nbWhileLove++;
        }
        var nbWhileInfo = 0;
        while (nbWhileInfo < cmdsINFOBOT.length) {
            cmdsInfoVAL.push(cmdsINFOBOT[nbWhileInfo].name);
            
            nbWhileInfo++;
        }
        
        var nbWhileRand = 0;
        while (nbWhileRand < cmdsRAND.length) {
            cmdsRandVAL.push(cmdsRAND[nbWhileRand].name);
            
            nbWhileRand++;
        }
        
        
        var nbWhileHappiness = 0;
        while (nbWhileHappiness < cmdsHAPPINESS.length) {
            cmdsHappinessVAL.push(cmdsHAPPINESS[nbWhileHappiness].name);
            
            nbWhileHappiness++;
        }
        
        var nbWhilePoliteness = 0;
        while (nbWhilePoliteness < cmdsPOLITENESS.length) {
            cmdsPolitenessVAL.push(cmdsPOLITENESS[nbWhilePoliteness].name);
            
            nbWhilePoliteness++;
        }
        
        var nbWhileViolence = 0;
        while (nbWhileViolence < cmdsVIOLENCE.length) {
            cmdsViolenceVAL.push(cmdsVIOLENCE[nbWhileViolence].name);
            
            nbWhileViolence++;
        }
        
        var nbWhileUnsorted = 0;
        while (nbWhileUnsorted < cmdsUNSORTED.length) {
            cmdsUnsortedVAL.push(cmdsUNSORTED[nbWhileUnsorted].name);
            
            nbWhileUnsorted++;
        }
        
        
        cmdsLoveVAL.sort();
		cmdsInfoVAL.sort();
        cmdsRandVAL.sort();
		cmdsHappinessVAL.sort();
		cmdsPolitenessVAL.sort();
		cmdsViolenceVAL.sort();
		cmdsUnsortedVAL.sort();
        
        
        const embed = new Discord.MessageEmbed()
        embed.setTitle(message.author.tag + ` HERE'S ALL THE COMMANDS (${COMMANDS.length}): PREFIX(AJ!)`)
        embed.setDescription(`**__Tip: __**\`${PREFIX.toUpperCase()}help <command>\` for more information about a command!`)
        embed.addFields(
        	{ name: `Info | About the bot (${cmdsInfoVAL.length})`, value: `\`${cmdsInfoVAL.join('`, `')}\`.`, inline: false },
        	{ name: `Random (${cmdsRandVAL.length})`, value: `\`${cmdsRandVAL.join('`, `')}\`.`, inline: false },
        	{ name: `:heart: Love :heart: (${cmdsLoveVAL.length})`, value: `\`${cmdsLoveVAL.join('`, `')}\`.`, inline: false },
        	{ name: `Happiness (${cmdsHappinessVAL.length})`, value: `\`${cmdsHappinessVAL.join('`, `')}\`.`, inline: false },
        	{ name: `Politeness (${cmdsPolitenessVAL.length})`, value: `\`${cmdsPolitenessVAL.join('`, `')}\`.`, inline: false },
        	{ name: `Violence (${cmdsViolenceVAL.length})`, value: `\`${cmdsViolenceVAL.join('`, `')}\`.`, inline: false },
        	{ name: `Unsorted (${cmdsUnsortedVAL.length})`, value: `\`${cmdsUnsortedVAL.join('`, `')}\`.`, inline: false },
        )
        embed.setColor(0xff0000)
        embed.setFooter(message.author.tag + "asked the command" + " \n Bot made by Baeka#2540")
        
        message.reply("check your dm's").catch(console.error)
        message.channel.send("Don't forget to vote for the bot with this commands (it helps me): https://top.gg/bot/727574553576079372/vote")
        message.author.send(embed).catch(console.error)
    }
    
	if (message.content.startsWith(PREFIX)) {
        console.log(`${message.author.tag} asked the command ${message.content.substring(PREFIX.length).toString()}`);
        var possibleCOMMANDS = [];
        COMMANDS.forEach(cmd => possibleCOMMANDS.push(cmd.name));
        var cmdValide = possibleCOMMANDS.includes(message.content.substring(PREFIX.length).split(" ")[0]); // bool
        if (cmdValide) {
            var cmdDemandee = COMMANDS.find(cmd => cmd.name.startsWith(message.content.substring(PREFIX.length).split(" ")[0]));
            cmdDemandee.execute();
        } 
        else {
			return false;
        }
	}

});
