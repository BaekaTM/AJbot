//discord.js
const Discord = require('discord.js'); 
const canvacord = require("canvacord")
const search = require('discord.js-search');  
const fetch = require('node-fetch')
const client = new Discord.Client({ partials: ["message", "CHANNEL", "REACTION"]}); 
const Kamboo = client.users.cache.get('592631211113971723');
const Baeka = client.users.cache.get('380796131782688779');
client.creators = [Baeka, Kamboo];
const config = require("./config.json");  //ramner les var de config.json
const prefix = config.prefix;   //var du prefix
const secretPREFIX = config.secretprefix;   //var du prefix secret
var fs = require("fs");
client.login(config.token);
// const leveling = require("discord-leveling")
const db = require("quick.db")
/*
client.sendError = (content, command, user, guild, error) => {
    client.creators.forEach(cr => {
        cr.send(content + "\n\nCommand: " + command + "\nUser: " + user + "\nGuild: " + guild + "\n\n**ERror**: ```" + error + "```")
    })
}
*/

setInterval(() => {
    var d = new Date();
    var n = d.getHours();
    if (n == 2) {
        db.delete(`daily`)
    }
}, 60000);

const AutoPoster = require('topgg-autoposter')

const ap = AutoPoster(config.tokenDBL, client)

ap.on('posted', () => {
    console.log('Posted stats to Top.gg!')
})

client.on("guildCreate", (guild) => {    
    client.channels.cache.get('734468777374122034').send(`Joined new guild: ${guild.name}\n` + "The bot is in: " + client.guilds.cache.size + " guilds!").catch(console.error)
    let data = `Joined new guild: ${guild.name}\n` + "The bot is in: " + client.guilds.cache.size + " guilds!";
    fs.appendFile('guilds.txt', data, function(err) {
        if (err) {
            return console.error(err);
        }
    });
});

client.on("guildDelete", (guild) => {    
    client.channels.cache.get('734468777374122034').send(`Quit new guild: ${guild.name}\n` + "The bot is in: " + client.guilds.cache.size + " guilds").catch(console.error)
    let data = `Quit new guild: ${guild.name}\n` + "The bot is in: " + client.guilds.cache.size + " guilds"
    fs.appendFile('guilds.txt', data, function(err) {
        if (err) {
            return console.error(err);
        }
    });
});


var secretCOMMANDS = [
    {
        name: "eval",

        description: "Run the code you put in (JavaScript). (for some reasons this command can be use only by the bot owners)",
        // category: "",
        declaration: "Do you want to rename all the channels, to change the nickname of all the members, to create commands?",
        usage: [`${secretPREFIX}eval <JScode>`],
        // alias: [``]
    },
    {
        name: "iq",
        description: "Your IQ. Are you Einstein, Terence Tao or a goldfish ?",
        declaration: "If you ever feel like a fool or a genius, check it out with this command. Check it for your friends, or for things.",
        usage: [`${secretPREFIX}iq`, `${secretPREFIX}iq <user>`, `${secretPREFIX}iq <text>`]
    },
    {
        name: "reverse",
        description: "Talk backwards to confuse your friends!",
        declaration: "!dnammoc eht rof ksa ,ton fI ?gniyas ma I tahw fo gnihtyna dnatsrednu uoy oD",
        usage: [`${secretPREFIX}reverse <text>`]
    },
    {
        name: "tts",
        description: "WHOOOOHOHO ! I'm speaking !",
        declaration: "You want to hear my beautiful voice, right? I understand you perfectly, but don't forget that I am a robot!",
        usage: [`${secretPREFIX}tts <text>`]
    },
    {
        name: "rectangle",
        description: "I'm Pythagore !",
        usage: [`${secretPREFIX}rectangle <width> <height> <symbol>`],
        declaration: ":thinking: So the length of this side multiplied by the square root of the quarter of :exploding_head: the round side of the triangle in the rectangle :straight_ruler: you're drawing with this command is *x* :nerd:."
    },
    {
        name: "nick",
        description: "Can only change you're proper nickname. Hope it's not identity usurpation ^^.",
        category: "",
        usage: [`${secretPREFIX}nick <your nickname>`],
        declaration: "Yes, I understand you. You don't want everyone to see your name as soon as you walk into a server. With this command, you can directly take on a second identity... ...if I have the right permissions!"
    },
    {
        name: "ping",
        description: "PING PONG!",
        category: "",
        declaration: "What is your latency? Mine? you don't know? Me neither ^^. That's what this command is for.",
        usage: [`${secretPREFIX}ping`]
    },
    {
        name: "rps",
        description: "Play Rock, Paper Scissors game with me!",
        // category: "",
        declaration: "Whether you choose rock, paper, or scissors, I will beat you. Or not! We'll see who's better, blondie.",
        usage: [`${secretPREFIX}rps`],
        // alias: [``]
    },
    {
        name: "surprisemutherbutter",
        description: "surprise mother f*cker !",
        declaration: "What, are you surprised by this order? Ask me, you'll be even more surprised :smirk: !",
        usage: [`${secretPREFIX}surprisemutherbutter`]
    },
    {
        name: "say",
        description: "I'm a fricking parrot.",
        // category: "",
        declaration: "Yes, I'll say anything you ask. Yes, you can make me say anything :unamused:. No, I cannot execute commands. ",
        usage: [`${secretPREFIX}say <text>`]
    },
    {
        name: "embed",
        description: "A description in an embed.",
        declaration: "I love the embeds. Don't you? It's the best thing for the messages on discord, and only the bots can make it.",
        usage: [`${secretPREFIX}embed <textInEmbed>`]
    },
    {
        name: "myembed",
        description: "Embeds are really really cool. Isn't it?",
        declaration: "I looooove the *complete* embeds. It's very useful and funny.",
        usage: [`${secretPREFIX}myembed <title>/<description>/<footer>/<color(hex)>\n\n:warning: -  **IMPORTANT:** Maximum characters: Title: **256**, Description & Footer : **2048**.`]
    },
    {
        name: "24",
        description: "Do you want the hour?",
        declaration: "Hi, I have a watch: I'm the best huhu. Hu... No. **You're** the best.",
        usage: [`${secretPREFIX}24`],
    },
    {
        name: "binary",
        description: "Encodes text in binary or otherwise.",
        declaration: "You want to speak without anyone understanding you, say things that no one wants to read and that no one will read? Or understand what some people say? That's why this order exists!",
        usage: [`${secretPREFIX}binary encode <text>`, `${secretPREFIX}binary decode <text>`, `${secretPREFIX}binary <encode | decode> <text>`],
    },
    {
        name: "cupid",
        description: "Makes two people fall in love.",
        declaration: "Do you have friends who love each other but don't dare say it? Do you want to help them? I totally understand you! Ask for this command!",
        usage: [`${secretPREFIX}cupid <user1> <user2>`],
    },
    {
        name: "weather",
        description: "To get the weather of a city.",
        declaration: "Do you want to go out? If it's too cold or too hot, ask me! But it will be difficult to leave your house because of the COVID-19...",
        usage: [`${secretPREFIX}weather <city>`],
    },
    {
        name: "covid",
        description: "For information about COVID-19 in a country.",
        declaration: "The covid, the covid, the covid... We don't know how to stop it, but we know what it does, even with bots!",
        usage: [`${secretPREFIX}covid <country>`, `${secretPREFIX}covid world`],
    },
    {
        name: "mix",
        description: "To mix two names or two words.",
        declaration: "If you want to make a meal with names, you have to mix the ingredients. (Yes, with ajbot, everything is poetry...)",
        usage: [`${secretPREFIX}mix <user1> <user2>`, `${secretPREFIX}mix word1 word2`],
    },
    {
        name: "lockdown",
        description: "To see how you are during the lockdown.",
        declaration: "When the house turns into a prison and when you work more than anything else, it's lockdown! After some days, you can drop everything, do anything... Ask me how you would feel about a lifetime of lockdown.",
        usage: [`${secretPREFIX}lockdown`],
    },
];

//top.gg etc
const Topgg = require('@top-gg/sdk');
const express = require('express');
const app = express();
const webhook = new Topgg.Webhook(config.AUTH_PASS); 
const api = new Topgg.Api(config.tokenDBL);

app.post('/dblwebhook', webhook.middleware(), (req, res) => {
    function alTbl(tbl) {
        return tbl[Math.floor(Math.random() * tbl.length)];
    }
    function premiereLettreMaj(str) {
        let tbl = str.split("");
        let up = tbl[0].toUpperCase();
        tbl.shift();
        tbl.unshift(up)
        let final = tbl.join("");
        return final;
    }
    const voter = client.users.cache.get(req.vote.user);
    console.log(voter.tag + " ("  + req.vote.user + ") has voted!")
    db.set(`votedAt.${voter.id}`, Date.now());
    voter.send("You have 80% chance to get a secret command!")
    client.guilds.cache.get('734071115579785257').channels.cache.get('831192951535304724').send(`⏫ | **${voter.tag}** (\`${voter.id}\`) just voted!`).catch(console.error)
    const randCmd = alTbl(secretCOMMANDS);
    const embed = new Discord.MessageEmbed()
    .setTitle(':tada: You VOTED FOR ME! :tada:')
    .setColor(0xff0000)
    .setDescription(`Thanks a lot! You won a secret command: \`${randCmd.name}\`!\n\n` + randCmd.declaration)
	.addFields(
		{ name: 'Name', value: premiereLettreMaj(randCmd.name), inline: false },
		{ name: 'Description', value: randCmd.description, inline: false },
		{ name: 'Usage', value: randCmd.usage.join(",\n"), inline: false },
	)
	.setFooter('Thanks again, ' + voter.username + ". Hope you won a good command!");
    const tblVote = [embed, embed, embed, embed, ":worried: Sorry, not this time!"];
    let alVote = alTbl(tblVote);
    voter.send(alVote);
    db.set(`commands.${voter.id}.${randCmd.name}`, "valide");
    if (alVote === embed) {
        console.log(`I gave to ${voter.tag} the command "${randCmd.name.toUpperCase()}"!`)
    }
    else {
        console.log(`${voter.tag} didn't win a command...`)
    }
    let data = voter.tag + " ("  + req.vote.user + ") has voted!"
    fs.appendFile('vote.txt', data, function(err) {
        if (err) {
            return console.error(err);
        }
    });
}) 
app.listen(2087)


// client.on("message", async message => {
//     db.add(`${message.author.id}.xp`, 12.4)
//     if (db.get(`guild_${message.guild.id}_${message.author.id}.xp`) >= 372 * db.get(`level_${message.author.id}`)) {
//         db.add(`guild_${message.guild.id}_${message.author.id}.level`, 1)
//         db.set(`guild_${message.guild.id}_${message.author.id}.xp`, 0)
//         message.author.send("GG you are now lvl" + db.get(`guild_${message.guild.id}_${message.author.id}.level`) + ` on ${message.guild.name}` + "\nYou can use aj!help to get the list of commands\nAdd Baeka#2540 and Kamboo#9639")
//         console.log(`${message.author.tag} has reached level ` + db.get(`guild_${message.guild.id}_${message.author.id}.level`))
//     }
//     // if (db.get(`level_${message.author.id}`) = 15) {
//     //     message pour donner commande
//     // }
// })


client.on("message", async message => {
    if (message.author.bot) {
    	return;
    }
    else {
        let PREFIX = db.get(`prefix_${message.guild.id}`) || prefix;
        var arguments = message.content.toLowerCase().split(" ").slice(1);
        if(message.channel.type === 'dm') {
            if(message.content.toLowerCase() === 'fr' || message.content.toLowerCase() === 'en') {
                if (message.content.toLowerCase() === 'fr') {
                    if (client.guilds.cache.get('734071115579785257').members.cache.get(message.author.id).roles.cache.has('830009051173355540')) {
                        message.channel.send('Vous m\'avez déjà dit votre langue : `fr`.')
                    }
                    else if (client.guilds.cache.get('734071115579785257').members.cache.get(message.author.id).roles.cache.has('830009367406575667')) {
                        message.channel.send('You\'ve already told me your language: `en`.')
                    }
                    else {
                    	client.guilds.cache.get('734071115579785257').members.cache.get(message.author.id).roles.add('830009051173355540')
                    	message.channel.send('Les commandes seront toujours en anglais mais les administrateurs vous parleront en français.')
                        let tblBvnFR = ["Vérification-éclair", "Bienvenue", "C'est pas trop tôt ^^", "C'est une étoile ? Un avion ? Une fusée ? Ah, vous voilà", "Vous avez réussi", "Salut :v:", "J'espère que ça va bien"];
                        let randFR = tblBvnFR[Math.floor(Math.random() * tblBvnFR.length)]
                        const embedBvnFR = new Discord.MessageEmbed()
                        .setTitle(`${randFR}, ${message.author.username} !`, message.author.displayAvatarURL( {dynamic: true}))
                        .setColor('#008080')
                        .setDescription(`Parlez à ${message.author} en **Français**.`)
                        .setImage('https://media.tenor.com/images/eba8b72588895c20ae25da2bf7af61e5/tenor.gif')
                        .setFooter('En espérant que vous resterez longtemps ^^...');
                        client.channels.cache.get('734072122770587658').send(embedBvnFR)
                    }
                }
                else if (message.content.toLowerCase() === 'en') {
                    if (client.guilds.cache.get('734071115579785257').members.cache.get(message.author.id).roles.cache.has('830009051173355540')) {
                        message.channel.send('Vous m\'avez déjà dit votre langue : `fr`.')
                    }
                    else if (client.guilds.cache.get('734071115579785257').members.cache.get(message.author.id).roles.cache.has('830009367406575667')) {
                        message.channel.send('You\'ve already told me your language: `en`.')
                    }
                    else {
                        client.guilds.cache.get('734071115579785257').members.cache.get(message.author.id).roles.add('830009367406575667')
                        message.channel.send('Thank you! The administrators will speak to you in English.')
                        let tblBvnFR = ["What a quick verification", "Welcome", "You're late", "Is it a star? Is it a plane? A rocket? Oh, it's you", "You have succeeded", "Hi :v:", "I hope you're well"];
                        let randFR = tblBvnFR[Math.floor(Math.random() * tblBvnFR.length)]
                        const embedBvnFR = new Discord.MessageEmbed()
                        .setTitle(`${randFR}, ${message.author.username} !`, message.author.displayAvatarURL( {dynamic: true}))
                        .setColor('#008080')
                        .setDescription(`Speak to ${message.author} in **English**.`)
                        .setImage('https://media.tenor.com/images/eba8b72588895c20ae25da2bf7af61e5/tenor.gif')
                        .setFooter('Hope you\'re going to stay ^^...');
                        client.channels.cache.get('734072122770587658').send(embedBvnFR)
                    }
                }
                else {
                    message.channel.send('Please choose between these two languages: `fr`, `en`.')
                }
            }
            else {
            	message.channel.send(`I'm sorry, ${message.author.username}, but for insure no bugs we prefere not to use mp commands ^^`)
                return;
            }
        }
        
        function searchMember(guildID, member) {
            let rechercheID = client.guilds.cache.get(guildID).members.cache.find(m => m.user.id === member);
            let rechercheNick = client.guilds.cache.get(guildID).members.cache.find(m => m.displayName.toLowerCase() === member);
            let rechercheTag = client.guilds.cache.get(guildID).members.cache.find(m => m.user.tag.toLowerCase() === member);
            let rechercheUsername = client.guilds.cache.get(guildID).members.cache.find(m => m.user.username.toLowerCase() === member);

            let rechercheGlobale = rechercheID || rechercheNick || rechercheTag || rechercheUsername;

            return rechercheGlobale;
        }

        function randomMember(guildID) {
            return client.guilds.cache.get(guildID).members.cache.random();
        }
        
        function searchEmoji(guildID, identifier) {
            return client.guilds.cache.get(guildID).emojis.cache.find(emj => emj.identifier === identifier);
        }
        
        function getLocaltime() {
            return new Date().toLocaleTimeString();
        }
        
        function searchMemberID(guildID, memberID) {
            return client.guilds.cache.get(guildID).members.cache.find(m => m.user.id === memberID);
        }
        
        function searchMemberNick(guildID, nick) {
            return client.guilds.cache.get(guildID).members.cache.find(m => m.displayName.toLowerCase() === nick);
        }
        
        function searchMemberTag(guildID, tag) {
            return client.guilds.cache.get(guildID).members.cache.find(m => m.user.tag.toLowerCase() === tag);
        }
        
        function rand(tbl) {
            return tbl[Math.floor(Math.random() * tbl.length)];
        }

        function nbAl(min, max) {
            return min + Math.floor(Math.random() * (max - min));
        }

        function strUcFirst(a) { // fonction qui met la première lettre en Maj
            return (a + '').charAt(0).toUpperCase() + a.substr(1);
        }


        function rect(longueur, largeur, symbole) {
            var rect = "";
            for (var i = 0; i < longueur; i++){
                for (var j = 0; j < largeur; j++){
                    rect += symbole;
                }
                rect += "\n";
            }
            return rect;
        }

        function reverseString(str) {
            return str.split("").reverse().join("");
        }

        function entre(bas, haut) {
            return bas <= this && this <= haut;
        }

        secretCOMMANDS[0].execute = () => {
            let args = message.content.split(" ").slice(1);
            if ((message.author.id === '380796131782688779' || message.author.id === '592631211113971723')) {
                if(!args[0]) {
                    message.reply("Please tell me something to do!! Example: `message.channel.send('I'm AJbot')`").then(message => message.delete({ timeout: 5000 }));
                }
                else {
                    try {
                        if (args.join(" ").includes('token')) {
                            message.channel.send("I won't give you my token!");
                            return;
                        }

                        const aExe = args.join(" ");
                        const evalue = eval(aExe);

                        let embed = new Discord.MessageEmbed()
                        .setColor("#37B97D")
                        .setTitle("Eval")
                        .addFields(
                            { name: "To evaluate", value: `\`\`\`js\n${args.join(" ")}\`\`\``, inline: false },
                            { name: "Evaluated", value: evalue, inline: false },
                            { name: "Typeof", value: typeof(evalue), inline: false },
                        );
                        message.channel.send(embed);
                    } catch (e) {
                        let embed = new Discord.MessageEmbed()
                        .setColor("#FF3344")
                        .setTitle(":x: ERROR :x:")
                        .setDescription(e)
                        .addFields(
                            { name: "To evaluate", value: `\`\`\`js\n${args.join(" ")}\`\`\``, inline: false },
                            { name: "Error", value: "`" + e + "`", inline: false }
                        );

                        message.channel.send(embed);
                    }
                }
            }
            else {
                message.reply("you're not the owner of this bot.").then(message => message.delete({ timeout: 5000 }));
            }
        }; 
        secretCOMMANDS[1].execute = () => {
            let texte = message.content.split(" ").slice(1).join(" ");
            let user = message.mentions.users.first();
            let qi = Math.random() * 250;
            let qiKambooBaeka = nbAl(50356, 363741); // c notre QI mon reuf eeeee
            let qiIndex = Math.floor(qi / 250 * 100 / 10); // on le met en pourcentage et ensuite on divise par 10 (10 émojis au total)
            let personne = ""; 
            let nerd = "🤓 ";
            let zany_face = "🤪 ";
            let qiNiveauEmj = nerd.repeat(qiIndex) + zany_face.repeat(10 - qiIndex); // la il fait ça: 🤓🤓🤓🤓🤪🤪🤪🤪🤪🤪🤪 pour indiquer l'intelligence de la personne

            if ((Math.floor(qi) >= 0 && Math.floor(qi) <= 10)) {
                personne = message.author.username;
            }
            else if ((Math.floor(qi) >= 11 && Math.floor(qi) <= 50)) {
                personne = "a goldfish";
            }
            else if ((Math.floor(qi) >= 51 && Math.floor(qi) <= 90)) {
                personne = "bad";
            }
            else if ((Math.floor(qi) >= 91 && Math.floor(qi) <= 110)) {
                personne = "a teacher";
            }
            else if ((Math.floor(qi) >= 111 && Math.floor(qi) <= 120)) {
                personne = "a student";
            }
            else if ((Math.floor(qi) >= 121 && Math.floor(qi) <= 150)) {
                personne = "Einstein !!";
            }
            else if ((Math.floor(qi) >= 151 && Math.floor(qi) <= 200)) {
                personne = "a GENIUS";
            }
            else if ((Math.floor(qi) >= 201 && Math.floor(qi) <= 220)) {
                personne = "TERENCE TAO !!!!!";
            }
            else if ((Math.floor(qi) >= 221 && Math.floor(qi) <= 250)) {
                personne = "A GOOOD";
            }
            else if ((Math.floor(qi) >= 50356 && Math.floor(qi) <= 363741)) {
                personne = "Hmm. With an IQ like that, you're Kamboo or Baeka !";
            }


            if (!texte && !user) {
                const embed = new Discord.MessageEmbed()
                .setThumbnail("https://cdn.discordapp.com/attachments/809947042302525460/823139012251484178/811162891964252202.png")
                .setColor(0xff0000)
                .setDescription(`**${message.author.username}**, your IQ is: **${Math.floor(qi)}**!\n\n${qiNiveauEmj}`)
                .setFooter(message.author.tag + " asked the command" + " \nBot made by Baeka#2540 and Kamboo#9639 \nDon't forget to vote to get a secret command ^^");
                if (message.author.id === '592631211113971723' || message.author.id === '380796131782688779') {
                    embed.setDescription(`**${message.author}**, your IQ is: **${qiKambooBaeka.toString()}**!\n\n${nerd.repeat(27)}`)
                        .addField("You're...", "Hmm. With an IQ like that, you're Kamboo or Baeka !!");
                    message.channel.send(embed);
                }
                else {
                    embed.addField("You're...", "..." + personne + "!");
                    message.channel.send(embed);
                }
            }
            else if (texte && !user) {
                const embed = new Discord.MessageEmbed()
                .setThumbnail("https://cdn.discordapp.com/attachments/809947042302525460/823139012251484178/811162891964252202.png")
                .setColor(0xff0000)
                .setDescription(`**${message.author.username}**, the IQ of **${texte}** is: **${Math.floor(qi)}**!\n\n${qiNiveauEmj}`)
                .addField(`${texte} is...`, "..." + personne + "!")
                .setFooter(message.author.tag + " asked the command" + " \nBot made by Baeka#2540 and Kamboo#9639 \nDon't forget to vote to get a secret command ^^");
                message.channel.send(embed);
            }
            else if (texte && user) {
                const embed = new Discord.MessageEmbed()
                .setThumbnail("https://cdn.discordapp.com/attachments/809947042302525460/823139012251484178/811162891964252202.png")
                .setColor(0xff0000)
                .setDescription(`**${message.author.username}**, the IQ of **${user.username}** is: **${Math.floor(qi)}**!\n\n${qiNiveauEmj}`)
                .setFooter(message.author.tag + " asked the command" + " \nBot made by Baeka#2540 and Kamboo#9639 \nDon't forget to vote to get a secret command ^^");
                if (user.id === '592631211113971723' || user.id === '380796131782688779') {
                    embed.setDescription(`**${message.author.username}**, the IQ of **${user.username}** is: **${qiKambooBaeka.toString()}**!\n\n${nerd.repeat(27)}`)
                        .addField(`${user.username} is...`, "Hmm. With an IQ like that, he's Kamboo or Baeka !!");
                    message.channel.send(embed);
                }
                else {
                    embed.addField(`${user.username} is...`, "..." + personne + "!");
                    message.channel.send(embed);
                }
            }}; // ajs!iq
        secretCOMMANDS[2].execute = () => {
            let saymessage = message.content.slice(secretPREFIX.length + 7).trim();
            message.channel.send("**" + message.author.tag + ": **" + reverseString(saymessage))}; // ajs!reverse
        secretCOMMANDS[3].execute = () => {
            let saymessage = message.content.slice(secretPREFIX.length + 3).trim();
            if(message.guild.me.permissions.has('SEND_TTS_messageS')) {
                message.channel.send(saymessage, {tts: true});
            }
            else {
                message.channel.send(`${message.author}, I haven't permission to send tts messages.`)
            }}; // ajs!tts
        secretCOMMANDS[4].execute = () => {
            let width = parseInt(message.content.split(" ")[1]);
            let height = parseInt(message.content.split(" ")[2]);
            let symbol = message.content.split(" ")[3];

            if ((width * height) > 2048) {
                width = 1;
                height = 1;
                symbol = 'Too big';
            }

            let rectangleResultat = rect(height + 1, width, symbol);
            const embed = new Discord.MessageEmbed();
            embed.setColor('RANDOM');
            embed.setTitle(`${message.author.tag} does geometry`);
            embed.setDescription("```" + rectangleResultat + "```");
            embed.addFields(
                { name: 'Width', value: "`" + width.toString() + "`", inline: true },
                { name: 'Height', value: "`" + height.toString() + "`", inline: true },
                { name: 'Symbol', value: "`" + symbol + "`", inline: true },
            )
            embed.setFooter(message.author.tag + " asked the command" + " \nBot made by Baeka#2540 and Kamboo#9639 \nDon't forget to vote to get a secret command ^^");
            if (embed.description.length > 2048) {
                embed.setDescription('ERROR: TOO BIG RECTANGLE.');
            }
            message.channel.send(embed);}; // ajs!rectangle
        secretCOMMANDS[5].execute = () => {
            if (message.guild.me.permissions.has('MANAGE_NICKNAMES')) {
                const nickName = message.content.slice(secretPREFIX.length + 4).trim();
                message.delete().catch(console.error)
                message.member.setNickname(nickName);
                message.reply("you're nickname is set as " + nickName  + '.')
            }
            else {
                message.reply("I'm sorry, but I haven't permission to change the members nicknames.")
            }}; // ajs!nick
        secretCOMMANDS[6].execute = () => {
            message.channel.send("Pinging...").then(message =>{
                var ping = message.createdTimestamp - message.createdTimestamp;
                var botPing = Math.round(client.ws.ping);

                message.edit(`**:ping_pong: Pong!**\nYour latency: \`${ping}\`ms,\nAJbot latency: \`${botPing}\`ms.`);
            });}; // ajs!ping
        secretCOMMANDS[7].execute = async ()=> {
            let footer = ["I'll win!", "You'll lose!", "I'm sure I'll lose...", "I'm sure you'll win...", "There will be a tie!"];
            let embed = new Discord.MessageEmbed()
            .setTitle(`${message.author.username} is playing "Rock, Paper, Scissors" with me:`)
            .setDescription("Please react to play!")
            .setFooter(rand(footer));
            let msg = await message.channel.send(embed)
            await msg.react("🪨")
            await msg.react("✂")
            await msg.react("📃")

            const filter = (reaction, user) => {
                return ['🪨', '✂', '📃'].includes(reaction.emoji.name) && user.id === message.author.id;
            }

            const choices = ['🪨', '✂', '📃']
            const me = choices[Math.floor(Math.random() * choices.length)]
            msg.awaitReactions(filter, {max:1, time: 60000, error: ["time"]}).then(
                async(collected) => {
                    let color = "";
                    let messageFin = "";
                    let footeresult = "";
                    const reaction = collected.first();
                    if ((me === "🪨" && reaction.emoji.name === "✂") ||
                    (me === "📃" && reaction.emoji.name === "🪨") ||
                    (me === "✂" && reaction.emoji.name === "📃")) {
                        messageFin = "You **lost**!";
                        footeresult = "give me $5.000.000 now.";
                        color = "0xff0000";
                } else if (me === reaction.emoji.name) {
                    messageFin = "It's a **tie**!";
                    footeresult = "let's play again!";
                    color = "0x0000ff";
                } else {
                    messageFin = "You **won**!";
                    footeresult = "I want my revenge!"
                    color = "0x00ff00";
                }
                let result = new Discord.MessageEmbed()
                    .setTitle("RESULT")
                    .setColor(color)
                    .addFields(
                        { name: "You", value: reaction.emoji.name, inline: true },
                        { name: "VS", value: "⚡", inline: true },
                        { name: "Me", value: me, inline: true },
                        { name: "Result", value: messageFin, inline: false },
                    )
                    .setFooter(message.author.tag + ", " + footeresult);
                    
                await msg.edit(result)
                await msg.reactions.removeAll().catch(error => console.error('Failed to clear reactions: ', error));
            })
            .catch(collected => {
                    message.reply('Process has been cancelled since you did not respond in time!');
                })
        }; // ajs!rps 
        secretCOMMANDS[8].execute = () => {
                    const embed = new Discord.MessageEmbed()
                    embed.setTitle("**SUPRISE MOTHER FUCKER!**")
                    embed.setColor(0xff0000)
                    embed.setImage("https://media.tenor.com/images/4b68658a2ebf889831927fdea273aa16/tenor.gif");
                    embed.setFooter(message.author.tag + " asked the command" + " \nBot made by Baeka#2540 and Kamboo#9639 \nDon't forget to vote to get a secret command ^^")
                    message.channel.send(embed).catch(console.error)
                }
        secretCOMMANDS[9].execute = () => {
            // PAS DE message.delete() pcq les commandes secrètes suppr automatiquement par ce système ingénieux qu'est l'économiseur de lignes ;)
            const Saymessage = message.content.slice(secretPREFIX.length + 3).trim();
            let embedVerif = message.content.substring(secretPREFIX.length).split(" ");
            if(Saymessage.toLowerCase().includes('ajbot')) {
            	message.reply('are u talking to me?')
                setTimeout(() => {
                    message.channel.send("You was talking to me, " + message.author + ". Aj!shutup " + message.author.tag + " ^^'.")
                }, 1000)
            } else {
                message.channel.send("**" + message.author.tag + ": **" + Saymessage)
            }
        }; // ajs!say
        
        secretCOMMANDS[10].execute = () => {
            // PAS DE message.delete() pcq les commandes secrètes suppr automatiquement par ce système ingénieux qu'est l'économiseur de lignes ;)
            const Saymessage = message.content.slice(secretPREFIX.length + 3).trim();
            let embedVerif = message.content.substring(secretPREFIX.length).split(" ");
            const embed = new Discord.MessageEmbed()
            .setTitle(message.author.tag + ":")
            .setColor(0xff0000)
            .setDescription(message.content.substring(secretPREFIX.length + 6));
            message.channel.send(embed)
        }; // ajs!embed
        secretCOMMANDS[11].execute = () => {
            // PAS DE message.delete() pcq les commandes secrètes suppr automatiquement par ce système ingénieux qu'est l'économiseur de lignes ;)
            const Saymessage = message.content.slice(secretPREFIX.length + 3).trim();
            let embedVerif = message.content.substring(secretPREFIX.length).split(" ");
            
            const titreChoisi = message.content.substring(secretPREFIX.length + 8).split("/")[0];
            const descChoisie = message.content.substring(secretPREFIX.length + 8).split("/")[1];
            const footerChoisi = message.content.substring(secretPREFIX.length + 8).split("/")[2];

            const embed = new Discord.MessageEmbed()
            .setTitle(titreChoisi)
            .setDescription(descChoisie)
            .setFooter(message.author.username + " • " + footerChoisi, message.author.displayAvatarURL())
            .setColor(message.content.substring(secretPREFIX.length + 8).split("/")[3]);

            if (titreChoisi.length > 256) {
                embed.setTitle("ERROR: TOO LONG TITLE (max: 256)");
            }
            else if (descChoisie.length > 2048) {
                embed.setDescription("ERROR: TOO LONG DESCRIPTION (max: 2048)");
            }
            else if (footerChoisi.length > 2048) {
                embed.setFooter("ERROR: TOO LONG FOOTER (max: 2048)");
            }
            message.channel.send(embed)
        }; // ajs!myembed
        secretCOMMANDS[12].execute = () => {
            message.reply(getLocaltime()).then(msg => {
                setInterval(()=> {
                    msg.edit(getLocaltime())
                }, 1000)
            })
        } // ajs!24
        secretCOMMANDS[13].execute = () => {
            let args = message.content.split(' ').slice(1);

            if (!args[0]) {
                message.author.send('Unknown parameter. Please choose: encode | decode');
                message.reply('I sent you a DM with some informations...')
            }

            let choix = ["encode", "decode"];
            if (!choix.includes(args[0].toLowerCase())) {
                message.author.send('Unknown parameter. Please choose: encode | decode.');
				message.reply('I sent you a DM with some informations...')

            }

            let texte = args.slice(1).join(" ");

            if (!texte) return message.reply('please input your text.');

            if (texte.length > 1024) return message.reply("you're crazy! It's too much, the maximum charachter is **1024**.")

            function encode(char) {
                return char.split('').map(str => {
                    const converti = str.charCodeAt(0).toString(2)
                    return converti.padStart(8, "0");
                }).join(' ')
            }

            function decode(char) {
                return char.split(" ").map(str => String.fromCharCode(Number.parseInt(str, 2))).join("");
            }

            if (args[0].toLowerCase() === "encode") {
                return message.channel.send("**" + message.author.tag + ":** " + encode(texte));
            } else if (args[0].toLowerCase() === "decode") {
                return message.channel.send("**" + message.author.tag + ":** " + decode(texte))
            }
        } // ajs!binary encode | decode texte
        secretCOMMANDS[14].execute = () => {
            let args = message.content.split(" ").slice(1);
            let persUn = message.mentions.members.first();
            let persDeux = message.mentions.members.last();
            
            if (args[0].toLowerCase() === "random") {
                let persUn = message.guild.members.cache.random();
                let persDeux = message.guild.members.cache.filter(m => m.user.id !== persUn.user.id).random();
            }

            let love = Math.random() * 100;
            let loveIndex = Math.floor(love / 10);
            let loveLevel = "💘".repeat(loveIndex) + "💔".repeat(10 - loveIndex);
            let tblCupid = ["https://media.tenor.com/images/dd10eb337856d14a8640828f99dd7a2f/tenor.gif", "https://media.tenor.com/images/d5bd2cc188788b9ac0ddeaabd84e447d/tenor.gif", "https://media.tenor.com/images/0c90065621a82f92776f3f1cdb419ba9/tenor.gif", "https://media.tenor.com/images/112f7ff32170859b4f17016a851adadb/tenor.gif", "https://media.tenor.com/images/5cdab6c1afb4f67e1addb698ee1e7ef4/tenor.gif", "https://media.tenor.com/images/d5e2476611ad3fc9d9e07ac95cf6184d/tenor.gif", "https://media.tenor.com/images/aa21995bff3d36ddfc27a8a9e3528489/tenor.gif", "https://media.tenor.com/images/ba04189c393d1b1f9177c84f12535d09/tenor.gif?itemid=15387183", "https://media.tenor.com/images/8b1db68c588e38247b93e47c019c31d4/tenor.gif", "https://media.tenor.com/images/e50abe4a7b34437b4d76e669f15aaf20/tenor.gif?itemid=11784392", "https://media.tenor.com/images/1c08e4c851dc7e02582524f93d5585ff/tenor.gif?itemid=7791242"];
            let appreciation = '';
            switch (loveIndex) {
                case 1:
                case 2:
                case 3:
                    appreciation = `This is very little. ${persUn.displayName} and ${persDeux.displayName} are not ready.`;
                    break;
                case 4:
                    appreciation = `It's not enough, find other people.`;
                    break;
                case 5:
                    appreciation = `Hmm, not bad but still not much...`;
                    break;
                case 6:
                case 7:
                    appreciation = `This is starting to look good!`;
                    break;
                case 8:
                case 9:
                    appreciation = `It's great! ${persUn.displayName} and ${persDeux.displayName} seem to get along well thanks to ${message.member.displayName}!`;
                    break;
                case 10:
                    appreciation: `AWESOME! Get married!`;
                    break;
            }

            const embed = new Discord.MessageEmbed()
            embed.setColor(0xff0000)
            embed.setTitle(`:cupid: ${message.member.displayName} makes ${persUn.displayName} and ${persDeux.displayName} fall in love!`)
            embed.setDescription(`${persUn} and ${persDeux} are now **${Math.floor(love)}%** in love:\n${loveLevel}\n\n${appreciation}`)
            embed.setImage(rand(tblCupid))
            embed.setFooter(message.author.tag + " asked the command" + " \nBot made by Baeka#2540 and Kamboo#9639 \nDon't forget to vote to get a secret command ^^");
			
            try {
            	message.channel.send(embed)
            } catch (error) {
                console.error(error)
                message.channel.send('Sorry, something went wrong...')
            }
        } // ajs!cupid <1> <2>
        secretCOMMANDS[15].execute = () => {
            const apiKey = config.weatherApiKey; // marche pas
            let args = message.content.split(" ").slice(1);
            
            const fetch = require('node-fetch');
            
            if (!args[0]) return message.author.send('Please enter a city. (You asked the command `weather` in **' + message.guild.name + '**)');
            
            const url = `https://api.openweathermap.org/data/2.5/weather?q=${args.join(" ")}&lang=en&appid=${apiKey}&units=metric`;
            
            fetch(url)
                .then((res) => res.json())
                .then((data) => {
                if (data.cod === "404") return message.author.send("This city doesn't exist. (You asked the command `weather " + args.join(" ") + "` in **" + message.guild.name + "**)")
                let villeName = data.name;
                let main = data.weather[0].main;
                let country = data.sys.country;
                let temperature = Math.floor(data.main.temp);
                let feelsLike = Math.floor(data.main.feels_like);
                let minTemp = Math.floor(data.main.temp_min);
                let maxTemp = Math.floor(data.main.temp_max);
                let windSpeed = Math.floor (data.wind.speed);
                let humid = data.main.humidity;
                let cloud = data.clouds.all;
                let embed = new Discord.MessageEmbed()
                .setTitle(":white_sun_cloud: Weather for " + villeName + " in :flag_" + country.toLowerCase() + ": :")
                .addFields(
                	{ name: 'Country', value: country, inline: true },
                	{ name: 'Weather', value: main, inline: true },
                	{ name: '\u200b', value: '\u200b', inline: true },
                	{ name: 'Temperature', value: "Global: **" + temperature + `°C**\nMin: **${minTemp}°C**\nMax: **${maxTemp}°C**`, inline: true },
                	{ name: 'Feels like', value: `${feelsLike}°C`, inline: true },
                	{ name: '\u200b', value: '\u200b', inline: true },
                	{ name: 'Humidity', value: `${humid}%`, inline: true },
                	{ name: 'Clouds', value: `${cloud}%`, inline: true },
                	{ name: 'Wind speed', value: `${humid} km/h`, inline: true },
                )
                .setColor(0xff0000)
                .setFooter(message.author.tag + " asked the command" + " \nBot made by Baeka#2540 and Kamboo#9639 \nDon't forget to vote to get a secret command ^^");
                message.channel.send(embed);
            });
        } // ajs!weather <ville>
        secretCOMMANDS[16].execute = () => {
            // >:( = j'utilise pas

            let args = message.content.split(" ").slice(1);

            const fetch = require('node-fetch');

            if (!args[0]) return message.author.send('Please enter a country. (You asked the command `covid` in **' + message.guild.name + '**)');

            const url = `https://coronavirus-19-api.herokuapp.com/countries/${args.join(' ')}`;

            fetch(url)
                .then((res) => res.json())
                .then((data) => {
                // if (data.cod === "404") return message.author.send("This city doesn't exist. (You asked the command `weather " + args.join(" ") + "` in **" + message.guild.name + "**)")

                let country = data.country;
                let cas = data.cases;
                let casAjd = data.todayCases;
                let morts = data.deaths; // ptn en vrai c glauque de faire cette commande
                let mortsAjd = data.todayDeaths; // mais bon jmen fous
                let retablis = data.recoverd;
                let actifs = data.active;
                let critiques = data.critical;
                let casParMillion = data.casesPerOneMillion; // >:(
                let mortsParMillion = data.deathsPerOneMillion; // >:(
                let testsTotaux = data.totalTests;
                let testParMillion = data.testsPerOneMillionn; // >:(
                let embed = new Discord.MessageEmbed()
                .setTitle(":mask: COVID-19 informations for **" + country + "** :")
                .addFields(
                    { name: 'Cases', value: parseInt(cas).toLocaleString(), inline: true },
                    { name: 'Today cases', value: parseInt(casAjd).toLocaleString(), inline: true },
                    { name: '\u200b', value: '\u200b', inline: true },
                    { name: 'Deaths', value: parseInt(morts).toLocaleString(), inline: true },
                    { name: 'Today deaths', value: parseInt(mortsAjd).toLocaleString(), inline: true },
                    { name: '\u200b', value: '\u200b', inline: true },
                    { name: 'Recovered', value: data.recovered.toLocaleString(), inline: true },
                    { name: 'Active', value: parseInt(actifs).toLocaleString(), inline: true },
                    { name: 'Critical', value: parseInt(critiques).toLocaleString(), inline: true },
                    { name: 'Total tests', value: parseInt(testsTotaux).toLocaleString(), inline: false },
                )
                .setColor(0xff0000)
                .setFooter(message.author.tag + " asked the command" + " \nBot made by Baeka#2540 and Kamboo#9639 \nDon't forget to vote to get a secret command ^^");
                message.channel.send(embed).catch(err => {
                    message.author.send('I couldn\'t find `' + args.join(" ") + '`. (You asked the command `covid` in **' + message.guild.name + '**)');
                })
            });

        }; // ajs!covid <pays>
        secretCOMMANDS[17].execute = () => {
            let args = message.content.split(" ").slice(1);
            let firstWord = args[0];
            let secondWord = args[1];
            
            let userUn = message.mentions.members.first();
            let userDeux = message.mentions.members.last();
            
            if (userUn) {
                firstWord = userUn.displayName;
            }
            if (userDeux) {
                secondWord = userDeux.displayName;
            }
            
            function mixWords(first, second) {
                let moitieUn = first.substring(0, first.length / 2);
                let moitieDeux = second.substring(second.length / 2);

                return moitieUn + moitieDeux;
            }
            
            let motMixe = mixWords(firstWord, secondWord);
            message.reply("**" + motMixe + "**")

        } // ajs!mix <1> <2>
        secretCOMMANDS[18].execute = () => {
            let day = Math.floor(Math.random() * 200);
            let love = Math.random() * 100;
            let loveIndex = Math.floor(love / 10);
            let loveLevel = "🤯".repeat(loveIndex) + "😶".repeat(10 - loveIndex);
            let activites = ["Learning a language that nobody speaks.", "Reading his | her 4257th book.", "Learning to play an instrument.", "Taking pictures of his | her house.", "Learning sign language.", "Learning to code.", "Looking into your ancestry.", "Watching if you die when you jump from a height.", "Counting his | her hair.", "Eating his | her fingers"];
            
            const embed = new Discord.MessageEmbed()
            .setTitle(message.member.displayName + " during the lockdown")
            .setColor(0xff0000)
            .addFields(
                { name: 'Day', value: day, inline: false },
                { name: 'Level of madness', value: `**${Math.floor(love)}%** | ${loveLevel}`, inline: false },
                { name: 'Occupation', value: rand(activites), inline: false },
            );
            message.channel.send(embed)
            
        } // ajs!lockdown
        // COMMANDS();











        var COMMANDS = [
            /*{
                name: "chatbot",
                aliases: [],
                description: "Sets a channel to talk with me!",
                usage: "aj!chatbot <#channel>",
                category: "Info | About the bot",
                execute: () => {
                    if (message.member.hasPermission("ADMINISTRATOR")) {
                        let channel = message.mentions.channels.last();
                        if (!channel) {
                            message.channel.send(`Please set a name ! \`${PREFIX}chatbot <#channel>\``)
                        } else {
                            let data = {
                                enabled: true,
                                channel: channel
                            }
                            db.push(`chatBot.${message.guild.id}`, data);
                            message.channel.send(`All done! You can now talk with me on <#${channel.id}>!`)
                        }
                    } else {
                        message.channel.send("Hey! You're not admin!")
                    }
                }
            },*/
            {
                name: "deleteAIchat",
                aliases: ["delAIchat"],
                description: "Delete the 'AJbot-AI-chat' channel!",
                usage: "aj!deleteAIchat",
                category: "Special",
                execute: () => {
                    if (message.member.hasPermission("ADMINISTRATOR")) {
                        var chanValid = db.has(`AI.channel.${message.guild.id}`)
                        if(chanValid) {
                            var chan = message.guild.channels.cache.get(db.get(`AI.channel.${message.guild.id}`));
                            chan.delete();
                            db.delete(`AI.channel.${message.guild.id}`);
                            message.channel.send(`All done! Successfully deleted <#${chan.id}> !`)
                        } else {
                            message.channel.send("UHMMMM.... sorry but there's no AJbot-AI-chat chanel on this server... \nCreate one using 'aj!createAIchat <name>'")
                        }
                    } else {
                        message.send("Hey! You're not admin!")
                    }
                }
            },
            {
                name: 'givecoins',
                aliases: [],
                description: 'Gives some coins', 
                category: 'Economie',
                execute: () => {
                    if(message.content === `${PREFIX}givecoins`) {
                        message.reply(" (" + PREFIX + "givecoins <amount> <users>)")
                    } else {
                        if(message.member.hasPermission("ADMINISTRATOR")) {
                            let user = message.mentions.users.first();
                            let amount = message.content.slice(PREFIX.length).trim().split(" ").slice(1);
                            db.add(`economie.${message.guild.id}.${user.id}.bal`, amount)
                            message.channel.reply("Successfully added " + amount + " coins on " + user.tag + " balance!")
                        } else {
                            message.reply(" YOU'RE NOT ADMIN!")
                        }
                    }
                }
            },
            { 
                name: "buysecretcommand",
                aliases: ["buysec"],
                description: "Buy a random secretcommand (price: 7,000 coins)",
                category: "Economy",
                execute: () => {
                    var bal = db.get(`economie.${message.guild.id}.${message.author.id}.bal`);
                    if (bal > 7000) {
                        db.subtract(`economie.${message.guild.id}.${message.author.id}.bal`, 7000)
                        function premiereLettreMaj(str) {
                            let tbl = str.split("");
                            let up = tbl[0].toUpperCase();
                            tbl.shift();
                            tbl.unshift(up)
                            let final = tbl.join("");
                            return final;
                        }
                        function alTbl(tbl) {
                            return tbl[Math.floor(Math.random() * tbl.length)];
                        }
                        const randCmd = alTbl(secretCOMMANDS);
                        const embed = new Discord.MessageEmbed()
                        .setTitle(":tada: Here's your command! :tada:")
                        .setColor(0xff0000)
                        .setDescription(`Thanks a lot! You won a secret command: \`${randCmd.name}\`!\n\n` + randCmd.declaration)
                        .addFields(
                            { name: 'Name', value: premiereLettreMaj(randCmd.name), inline: false },
                            { name: 'Description', value: randCmd.description, inline: false },
                            { name: 'Usage', value: randCmd.usage.join(",\n"), inline: false },
                        )
                        .setFooter('Thanks again, ' + message.author.username + ". Hope you won a good command!");
                        message.author.send(embed);
                    } else {
                        message.reply(" sorry but you don't have enough coins! (You must have at least 7,001)")
                    }
                }
            },
            {
                name: "leaderboard", 
                aliases: ["lb"],
                description: "The leaderboard of the server!", 
                category: "Economy",
                execute: () => {
                    const allMembers = [];
                    message.guild.members.cache.forEach(user => {
                        allMembers.push(user)
                    })

                    let allMemberslg = allMembers.length
                    let people = 0;
                    let lblength = 10;
                    let lb = []

                    for (let i = 0; i < allMemberslg ; i++) {
                        var bal = db.get(`economie.${message.guild.id}.${allMembers[i].id}.bal`)
                         
                        if (bal == null || bal == 0) continue;

                        lb.push({
                            name: allMembers[i].displayName,
                            amount: bal.toLocaleString(),
                        })
                    }

                    const croissant = []
                    lb.sort((a, b) => b.amount - a.amount);
                    for (let j = 0; j < lb.length; j++) {
                        people++
                        if(people >= lblength) continue;
                        croissant.push(`${lb[j].name} - ${lb[j].amount}`);
                    }
                    var LeaderBoard = croissant.join("\n")

                    let embed = new Discord.MessageEmbed()
                    .setTitle("Here's the learderboard of the server:")
                    .setDescription(LeaderBoard)
                    .setColor("RANDOM")
                    .setFooter(message.author.tag + " asked the command" + " \nBot made by Baeka#2540 and Kamboo#9639 \nDon't forget to vote to get a secret command ^^")
                    message.channel.send(embed).catch(console.error)
                }
            },
            { 
                name: "bet", 
                aliases: [],
                description: "Bet an amount of coins to get double or lose your bet", 
                category: "Economy",
                execute: () => {
                    var bet = message.content.split(" ").slice(1)
                    let bal = db.get(`economie.${message.guild.id}.${message.author.id}.bal`)
                    let chance = nbAl(1,3)
                    if (bal === 0 || bal === null) {
                        message.reply(" use " + PREFIX + "daily to get some money!")
                    } else if(bet > bal) {
                        message.reply(' you can not bet more than your balance!')
                    } else if (bet <= 1) {
                        message.reply(' hummmm give me an amount greater than 1')
                    } else if (bet > 250) {
                        message.reply(' hummmm you can not bet more than 250, it will be too easy!')
                    }else {
                        if (chance > 1) {
                            let win = bet * 2
                            message.reply(" gg you won " + win + " coins!")
                            db.add(`economie.${message.guild.id}.${message.author.id}.bal`, win)
                        } else {
                            db.subtract(`economie.${message.guild.id}.${message.author.id}.bal`, bet)
                            let newBal = db.get(`economie.${message.guild.id}.${message.author.id}.bal`)
                            message.reply(" ups you lost " + bet + " coins ;-;")
                            message.channel.send("You now have " + newBal)
                        }
                    }
                }
            },
            {
                name: "daily",
                aliases: [],
                description: "Get a daily reward. (from 1 to 150 coins)",          
                category: "Economy",
                execute: async () => {
                    let hasDaily = db.get(`daily.${message.guild.id}.${message.author.id}`) || false
                    if (hasDaily === false) {
                        let valeur = nbAl(40,150);
                        db.add(`economie.${message.guild.id}.${message.author.id}.bal`, valeur)
                        message.reply(" today you won " + valeur + " coins!")
                        db.set(`daily.${message.guild.id}.${message.author.id}`, true)
                    } else {
                        message.reply(" you already had your daily reward")
                    }
                }
            },
            { 
                name: "balance",
                aliases: ["bal"],
                description: "Tells you how many coins you've got", 
                category: "Economy",
                execute: () => {
                    let user = message.mentions.users.first() || message.author
                    let money = db.get(`economie.${message.guild.id}.${user.id}.bal`) || 0
                    message.channel.send(user.tag + " has " + money + " coins")
                }
            },
            {
                name: "deleteprefix",
                aliases: ["delpfx"],
                description: "Delete the prefix for your server and set it as 'aj!'",
                category: "info | About the bot", 
                execute: () => {
                    if (message.member.hasPermission("ADMINISTRATOR")) {
                    db.delete(`prefix_${message.guild.id}`)
                    message.reply(" the prefix of the server is set as 'aj!'")
                    }else {
                    message.reply(" you are not admin!")
                    }
                }
            },
            {
                name: "add-command",
                aliases: ["add-cmd"],
                description: "Adds custom commands to your server.",
                category: "info | About the bot",
                usage: [`${PREFIX}add-command <name> <response>`],
                execute: () => {
                    let args = message.content.slice(PREFIX.length).trim().split(" ").slice(1);
                    if (!message.member.hasPermission("MANAGE_MESSAGES")) return message.channel.send(`:x: Sorry ${message.member.user}, but you need the \`MANAGE_MESSAGES\` permission to create custom commands.`).then(m => m.delete({ timeout: 5000 }));
                    
                    let cmdName = args[0];
                    
                    if (!cmdName) return message.channel.send(`:x: ${message.member.user}, you have to give a name for your command: \`${PREFIX}add-command <name> <response>\``);
                    
                    let cmdResponse = args.slice(1).join(" ");
                    
                    if (!cmdResponse) return message.channel.send(`:x: ${message.member.user}, you have to give a response for your command: \`${PREFIX}add-command <name> <response>\``);
                    
                    let database = db.get(`cmd_${message.guild.id}`);
                    
                    if(database && database.find(cuscmd => cuscmd.name === cmdName.toLowerCase())) return message.channel.send(":x: This custom command already exists in **" + message.guild.id + "**.")
                    
                    if (COMMANDS.find(cmd => cmd.name.toLowerCase() === cmdName.toLowerCase())) return message.channel.send(":x: This custom command already exists in the bot.")

                    let data = {
                        name: cmdName.toLowerCase(),
                        response: cmdResponse
                    }

                    db.push(`cmd_${message.guild.id}`, data)

                    return message.channel.send("Added **" + cmdName.toLowerCase() + "** as a custom command in **" + message.guild.name + "**.")
                }
            },
            {
                name: "delete-command",
                aliases: ["del-cmd"],
                description: "Deletes a custom commands from your server.",
                category: "info | About the bot",
                usage: [`${PREFIX}delete-command <name>`],
                execute: () => {
                    let args = message.content.slice(PREFIX.length).trim().split(" ").slice(1);
                    if (!message.member.hasPermission("MANAGE_MESSAGES")) return message.channel.send(`:x: Sorry ${message.member.user}, but you need the \`MANAGE_MESSAGES\` permission to create custom commands.`).then(m => m.delete({ timeout: 5000 }));
                    
                    let cmdName = args[0];

                    if(!cmdName) return message.channel.send(":x: Please give me a commmand name: `" + PREFIX + "delete-command <name>`")

                    let database = db.get(`cmd_${message.guild.id}`)

                    if(database) {
                        let data = database.find(custCmd => custCmd.name === cmdName.toLowerCase())

                        if(!data) return message.channel.send(":x: I didn't find this command.")

                        let value = database.indexOf(data)
                        delete database[value]
                        
                        // sert à suppr mmdr
                        var filter = database.filter(x => {
                            return x != null && x != ''
                        })

                        db.set(`cmd_${message.guild.id}`, filter)
                        return message.channel.send(`Deleted the command **${cmdName}**!`)


                    } else {
                        return message.channel.send(":x: Sorry, I couldn't find that command (`" + cmdName.toLowerCase() + "`).")
                    }
                }
            },
            {
                name: "commands",
                aliases: ["cmds"],
                description: "To get the list of custom commands from the server server.",
                category: "info | About the bot",
                usage: [`${PREFIX}commands`],
                execute: () => {
                    let database = db.get(`cmd_${message.guild.id}`);
                    
                    if (database.length) {
                        let tblCustCmds = [];

						database.forEach(cmd => {
                            tblCustCmds.push(` - \`${PREFIX}${cmd.name}\``)
                        })
                        
                        let messageEnv = `${message.author}, here's the list of the custom commands in **${message.guild.name}**:\n\n${tblCustCmds.join("\n")}`;
                        message.channel.send(messageEnv)
                    }
                    else {
                        message.channel.send(`${message.author}, there are no custom commands in this server.`)
                    }
                    message.channel.send()
                }
            },
            {
                 name: "setprefix",
                 aliases: ["setpfx"],
                description: "Change the prefix for your server",
                 category: "info | About the bot", 
                 execute: () => {
                     if (message.member.hasPermission("ADMINISTRATOR")) {
                        var arguments = message.content.split(" ").slice(1).join(" ").trim()
                        db.set(`prefix_${message.guild.id}`, arguments)
                        message.reply(" the prefix of the server is set as " + arguments)
                     }else {
                        message.reply(" you are not admin!")
                     }
                 }
            },
            {
                name: "userinfo",
                aliases: ["user", "ui"],
                description: "Shows you informations about your account or the account of other users.",
                category: "info | About the bot",
                usage: [`${PREFIX}userinfo`, `${PREFIX}userinfo <user>`],
                execute: () => {
                    if (message.channel.type === "dm") {
                        message.reply("I can't execute this command in dm's.");
                    }
                    else {
                        let member = message.mentions.members.first() || message.member;
                        let avatar = member.user.displayAvatarURL({ dynamic: true, size: 512});
                        let guild = message.guild;
                        const embed = new Discord.MessageEmbed()
                        .setColor(0xff0000)
                        .setTitle(member.user.tag)
                        .setThumbnail(avatar)
                        .addFields(
                        	{ name: 'Username', value: member.user.username, inline: true },
                            { name: 'Tag', value: member.user.tag + ` (\`${member.user.discriminator}\`)`, inline: true},
                        	{ name: 'ID', value: member.user.id, inline: true },
                        	{ name: 'Nickname', value: member.displayName, inline: true },
                            { name: '\u200b', value: '\u200b', inline: true},
                        	{ name: 'Join date', value: member.joinedAt, inline: true },
                        	{ name: 'Bot ?', value: member.user.bot.toString().replace('true', 'Yes.').replace('false', 'No.'), inline: false },
                        	{ name: 'Created date', value: member.user.createdAt, inline: false },
                        	{ name: 'Roles (' + member.roles.cache.size + ')', value: member.roles.cache.array().join(", ") + ".", inline: false },
                        	{ name: 'Last message', value: member.lastMessage.content + ` (id: \`${member.lastMessageID}\`)`, inline: false }
                        )
                        .setFooter(message.author.tag + " asked the command" + " \nBot made by Baeka#2540 and Kamboo#9639 \nDon't forget to vote to get a secret command ^^");
                        message.channel.send(embed);
                    }
                }
            },
            {
                name: "serverinfo ⚠ THIS COMMAND DOES NOT WORK ⚠",
                aliases: ["server", "si"],
                description: "Shows you informations about your server.",
                category: "info | About the bot",
                usage: [`${PREFIX}serverinfo`],
                execute: () => {
                    if (message.channel.type === "dm") {
                        message.reply("I can't execute this command in dm's.");
                    }
                    else {
                        function beautifyDate(date) {
                            let dateDonnee = new Date(date);
                            let joursObjet = {
                                1: 'Monday',
                                2: 'Tuesday',
                                3: 'Wednesday',
                                4: 'Thursday',
                                5: 'Friday',
                                6: 'Saturday',
                                7: 'Sunday',
                            };
                            let moisObjet = {
                                1: 'January',
                                2: 'February',
                                3: 'March',
                                4: 'April',
                                5: 'May',
                                6: 'June',
                                7: 'July',
                                8: 'August',
                                9: 'September',
                                10: 'October',
                                11: 'November',
                                12: 'December',
                            };
                            let jour = joursObjet[dateDonnee.getDay().toString()];
                            let mois = moisObjet[dateDonnee.getMonth().toString()];
                            let an = dateDonnee.getFullYear();
                            let numeroJour = dateDonnee.getDate();
                            let hour = dateDonnee.getHours() + ":" + dateDonnee.getMinutes() + ":" + dateDonnee.getSeconds();
                            let final = jour + " " + numeroJour + " " + mois + " " + an + ", " + hour;
                            
                            return final;
                        }
                        let server = message.guild;
                        const embed = new Discord.MessageEmbed()
                        .setTitle(server.name)
                        .setColor(0xff0000)
                        .setThumbnail(server.iconURL())
                        .addFields(
                        	{ name: 'Owner', value: `${server.members.cache.get(server.ownerID).user.tag} (id: ${server.ownerID})`, inline: true },
                        	{ name: 'ID of the server', value: server.id, inline: true },
                            { name: '\u200b', value: '\u200b', inline: true},
                        	{ name: 'Members', value: `${server.memberCount}`, inline: true},
                        	{ name: 'Bots', value: server.members.cache.filter(m => m.user.bot).size, inline: true },
                            { name: '\u200b', value: '\u200b', inline: true},
                        	{ name: 'Roles', value: server.roles.cache.size, inline: true },
                        	{ name: 'Channels', value: `Total: ${server.channels.cache.size}\nVoice: ${server.channels.cache.filter(ch => ch.type === "voice").size}\nText: ${server.channels.cache.filter(ch => ch.type === 'text').size}`, inline: true },
                        	{ name: 'Region', value: server.region, inline: true },
                        	{ name: 'Server created at', value: beautifyDate(server.createdAt), inline: false }
                            /*{ name: '\u200b', value: '\u200b', inline: true},
                            { name: '\u200b', value: '\u200b', inline: true},*/
                        );
                        message.channel.send(embed);
                    }
                }
            },
            {
                name: "test",
                aliases: [],
                description: "To see if the bot is on.",
                category: strUcFirst("info | About the bot"),
                usage: [`${PREFIX}test`],
                execute: () => {
                    message.reply(" i'm on don't worry");
                }
            },
            {
                name: "supportlink",
                aliases: ["support"],
                description: "To join the Ajbot-Support discord server.",
                category: strUcFirst("info | About the bot"),
                usage: [`${PREFIX}supportlink`],
                execute: () => {
                    const embed = new Discord.MessageEmbed()
                    embed.setTitle(message.author.tag + " Click here to join the AJbot-support server!")
                    embed.setURL("https://discord.gg/rWYKfKG")
                    embed.setImage("https://media.tenor.com/images/731a1cf70022c66519412790c1b72f64/tenor.gif")
                    embed.setColor(0xff0000)
                    embed.setFooter(message.author.tag + " asked the command" + " \nBot made by Baeka#2540 and Kamboo#9639 \nDon't forget to vote to get a secret command ^^")
                    message.channel.send(embed).catch(console.error)
                }
            },
            {
                name: "website",
                aliases: [],
                description: "To visit my [website](https://ajbot.xyz).",
                category: strUcFirst("info | About the bot"),
                usage: [`${PREFIX}website`],
                execute: () => {
                    const embed = new Discord.MessageEmbed()
                    embed.setTitle("AJbot")
                    embed.setThumbnail('https://cdn.discordapp.com/attachments/629576665533513741/782244099826384896/logo_ajbot_rond.png')
                    embed.setURL("https://ajbot.xyz")
                    embed.setColor("#008080")
                    embed.setDescription('Discord bot made with ❤ by Kamboo#9639 and Baeka#2540.')
                    message.channel.send(embed).catch(console.error)
                }
            },
            {
                name: "botguilds",
                aliases: [],
                description: "How many guilds the bot is in.",
                category: strUcFirst("info | About the bot"),
                usage: [`${PREFIX}botguilds`],
                execute: () => {
                    message.channel.send("The bot is in: " + client.guilds.cache.size + " guilds!").catch(console.error)
                }
            },
            {
                name: "addbot",
                aliases: [],
                description: "To invite the bot in your discord server.",
                category: strUcFirst("info | About the bot"),
                usage: [`${PREFIX}addbot`],
                execute: () => {
                    message.reply("check your dm's").catch(console.error)
                    client.users.cache.get(message.author.id).send("Here's the link to invite the bot: http://invite.ajbot.xyz").catch(console.error)
                }
            },
            {
                name: "vote",
                aliases: [],
                description: "To vote for the bot on [top.gg](http://vote.ajbot.xyz) (please vote for me :pray:).",
                category: strUcFirst("info | About the bot"),
                usage: [`${PREFIX}vote`],
                execute: () => {
                    api.hasVoted(message.author.id).then(voted => {
                        if (voted) {
                            function secondsToHms(d) {
                                d = Number(d);
                                var h = Math.floor(d / 3600);
                                var m = Math.floor(d % 3600 / 60);
                                var s = Math.floor(d % 3600 % 60);

                                var hDisplay = h > 0 ? h + (h == 1 ? " hour, " : " hours, ") : "";
                                var mDisplay = m > 0 ? m + (m == 1 ? " minute " : " minutes ") : "";
                                var sDisplay = s > 0 ? s + (s == 1 ? " second" : " seconds") : "";
                                return hDisplay + mDisplay + "and " + sDisplay; 
                            }
                            let votedAt = db.get(`votedAt.${message.author.id}`);
                            let now = Date.now();
                            let plusDouze = votedAt + (12 * 3600 * 1000); // 12h en ms
                            let tempsRestantMs = plusDouze - now;
                            let tempsRestantSec = tempsRestantMs / 1000;
                            let beau = secondsToHms(tempsRestantSec);
                            const embedVote = new Discord.MessageEmbed()
                            .setTitle('Uh oh!')
                            .setColor('#ff3344')
                            .setDescription("You already [voted](https://top.gg/bot/727574553576079372/vote)! " + `You will be able to vote in **${beau}**.` + "\n\nHow was your command (:+1: or :-1:)?");
                   			message.channel.send(embedVote).then(msg => {
                                msg.react('👍');
                                msg.react('👎')
                            }).catch(console.error);
                        }
                        else {
                            const embedPasVote = new Discord.MessageEmbed()
                            .setColor('#37B97D')
                            .setTitle('Vote for the bot:')
                            .setDescription("If you [vote](https://top.gg/bot/727574553576079372/vote), you win a secret command...\n\n...Or not ^^!");
                            message.channel.send(embedPasVote).catch(console.error)
                        }
                    }).catch(console.error) 
                }
            },
            {
                name: "i<3you",
                aliases: ["ily"],
                description: "Sends an \"I LOVE YOU\" gif.",
                category: strUcFirst("love"),
                usage: [`${PREFIX}I<3YOU <user>`, `${PREFIX}I<3YOU random`],
                execute: () => {
                    let args = message.content.toLowerCase().split(" ").slice(1);
                    const user = message.mentions.users.first();
                    let userNOMENTION = searchMemberID(message.guild.id, args[0]) || searchMemberNick(message.guild.id, args.join(" ")) || searchMemberTag(message.guild.id, args.join(" "));
                    // let  = search.searchMember(message, args[0]);
                    if (user) {
                        // const member = message.guild.member(user);
                        const embed = new Discord.MessageEmbed()
                        embed.setTitle(message.author.tag + ' **LOVES** ' + `${user.tag}` + " !")
                        embed.setColor(0xff0000)
                        embed.setImage("https://media.tenor.com/images/cd4582aea4d353f63a21173dc9b7f473/tenor.gif");
                        embed.setFooter(message.author.tag + " asked the command" + " \nBot made by Baeka#2540 and Kamboo#9639 \nDon't forget to vote to get a secret command ^^")
                        message.channel.send(embed).catch(console.error)
                    }
                    else if (userNOMENTION) {
                        // const member = message.guild.member(user);
                        const embed = new Discord.MessageEmbed()
                        embed.setTitle(message.author.tag + ' **LOVES **' + `${userNOMENTION.user.tag}` + " !")
                        embed.setColor(0xff0000)
                        embed.setImage("https://media.tenor.com/images/cd4582aea4d353f63a21173dc9b7f473/tenor.gif");
                        embed.setFooter(message.author.tag + " asked the command" + " \nBot made by Baeka#2540 and Kamboo#9639 \nDon't forget to vote to get a secret command ^^")
                        message.channel.send(embed).catch(console.error)
                    }
                    else if(message.content.includes('random')) {
                        const randomMember = message.guild.members.cache.random().user;
                        const embed = new Discord.MessageEmbed()
                        embed.setTitle(message.author.tag + ' **LOVES **' + `${randomMember.tag}` + " !")
                        embed.setColor(0xff0000)
                        embed.setImage("https://media.tenor.com/images/cd4582aea4d353f63a21173dc9b7f473/tenor.gif");
                        embed.setFooter(message.author.tag + " asked the command" + " \nBot made by Baeka#2540 and Kamboo#9639 \nDon't forget to vote to get a secret command ^^")
                        message.channel.send(embed).catch(console.error)
                    } else {
                        message.channel.send("`PLS MENTION SOMEONE`")
                        return;
                    }
                }
            },
            {
                name: "poke",
                aliases: [],
                description: "Do you want to poke someone with a gif ?",
                category: strUcFirst("love"),
                usage: [`${PREFIX}poke <user>`, `${PREFIX}poke random`],
                execute: () => {
                    let args = message.content.toLowerCase().split(" ").slice(1);
                    const user = message.mentions.users.first();
                    let userNOMENTION = searchMemberID(message.guild.id, args[0]) || searchMemberNick(message.guild.id, args.join(" ")) || searchMemberTag(message.guild.id, args[0]);
                    if (user) {
                        const member = message.guild.member(user);
                        const embed = new Discord.MessageEmbed()
                        embed.setTitle(message.author.tag + ' **POKES **' + `${user.tag}` + " !")
                        embed.setColor(0xff0000)
                        var tblPoke = ["https://images-ext-1.discordapp.net/external/0pLy98NG0Gz0_0qRvPhwcRZbBmgSA2iO0ITy7M4YjpE/https/media.tenor.com/images/53df08af136dcb1219e17f7a37ab1feb/tenor.gif", "https://images-ext-2.discordapp.net/external/MofXoIGq7EmkLhIsEIJ1ULR7ATy00-VjVK958CwaWcI/https/media.tenor.com/images/c470eed0515a4e5a8227dd5d6c831fbe/tenor.gif", "https://images-ext-1.discordapp.net/external/Vmj2R1hkO9ujBcShwNz2Ek6nbqFtWp2M3R4NhXiYzlY/https/media.tenor.com/images/c555fe22967cb9e90ea3560365b500de/tenor.gif", "https://images-ext-2.discordapp.net/external/8A2bpY9ux_oBmaA1ALpjPaUSc5bP_CfdXt-gy8KihSk/https/media.tenor.com/images/3318db2b09172a1cbf6db4a2cdbc7a0d/tenor.gif", "https://images-ext-1.discordapp.net/external/m_Dclrgb-mt52FaeRtTUDT5pQAWxAv--ot2Y_dkjTAY/https/media.tenor.com/images/369ea66cd13f76b3b49d4f85b830d8ef/tenor.gif", "https://images-ext-1.discordapp.net/external/G_rvUKuymmqY8Un6gOPDHiX1wmTM3NQwEesEm9K46GQ/https/media.tenor.com/images/610e893ccb291626c72642e6286d558f/tenor.gif","https://images-ext-1.discordapp.net/external/r7j4OvyZ_SIIVRNqWyORS0PTykN_2e_ykXjtcUEVeH8/https/media.tenor.com/images/6994e231e81b4447d976b3dda0596400/tenor.gif", "https://images-ext-2.discordapp.net/external/XJcvw61PS5faK0EKihcjNkjyjY2MfsaDrgC49xGulpQ/https/media.tenor.com/images/62d3f9bd28f374f9759f18b10cfa8956/tenor.gif", "https://images-ext-1.discordapp.net/external/_v2ouUfsD-OfFfKjud63d_f0QDKUIwD5_JpXMxeVIWM/https/media.tenor.com/images/fa6b210a80b48ddf108aad0ab92cb004/tenor.gif", "https://images-ext-1.discordapp.net/external/_3Ps4WMjnLgFyhHLp8JMxZrtkaczE7pmGT2hSbpeMKU/https/media.tenor.com/images/866ee29cd2404a41bfc9f1921c2e5b57/tenor.gif"]
                        embed.setImage(rand(tblPoke))
                        embed.setFooter(message.author.tag + " asked the command" + " \nBot made by Baeka#2540 and Kamboo#9639 \nDon't forget to vote to get a secret command ^^")
                        message.channel.send(embed).catch(console.error)
                    } 
                    else if (userNOMENTION) {
                        const member = message.guild.member(user);
                        const embed = new Discord.MessageEmbed()
                        embed.setTitle(message.author.tag + ' **POKES** ' + `${userNOMENTION.user.tag}` + " !")
                        embed.setColor(0xff0000)
                        var tblPoke = ["https://images-ext-1.discordapp.net/external/0pLy98NG0Gz0_0qRvPhwcRZbBmgSA2iO0ITy7M4YjpE/https/media.tenor.com/images/53df08af136dcb1219e17f7a37ab1feb/tenor.gif", "https://images-ext-2.discordapp.net/external/MofXoIGq7EmkLhIsEIJ1ULR7ATy00-VjVK958CwaWcI/https/media.tenor.com/images/c470eed0515a4e5a8227dd5d6c831fbe/tenor.gif", "https://images-ext-1.discordapp.net/external/Vmj2R1hkO9ujBcShwNz2Ek6nbqFtWp2M3R4NhXiYzlY/https/media.tenor.com/images/c555fe22967cb9e90ea3560365b500de/tenor.gif", "https://images-ext-2.discordapp.net/external/8A2bpY9ux_oBmaA1ALpjPaUSc5bP_CfdXt-gy8KihSk/https/media.tenor.com/images/3318db2b09172a1cbf6db4a2cdbc7a0d/tenor.gif", "https://images-ext-1.discordapp.net/external/m_Dclrgb-mt52FaeRtTUDT5pQAWxAv--ot2Y_dkjTAY/https/media.tenor.com/images/369ea66cd13f76b3b49d4f85b830d8ef/tenor.gif", "https://images-ext-1.discordapp.net/external/G_rvUKuymmqY8Un6gOPDHiX1wmTM3NQwEesEm9K46GQ/https/media.tenor.com/images/610e893ccb291626c72642e6286d558f/tenor.gif","https://images-ext-1.discordapp.net/external/r7j4OvyZ_SIIVRNqWyORS0PTykN_2e_ykXjtcUEVeH8/https/media.tenor.com/images/6994e231e81b4447d976b3dda0596400/tenor.gif", "https://images-ext-2.discordapp.net/external/XJcvw61PS5faK0EKihcjNkjyjY2MfsaDrgC49xGulpQ/https/media.tenor.com/images/62d3f9bd28f374f9759f18b10cfa8956/tenor.gif", "https://images-ext-1.discordapp.net/external/_v2ouUfsD-OfFfKjud63d_f0QDKUIwD5_JpXMxeVIWM/https/media.tenor.com/images/fa6b210a80b48ddf108aad0ab92cb004/tenor.gif", "https://images-ext-1.discordapp.net/external/_3Ps4WMjnLgFyhHLp8JMxZrtkaczE7pmGT2hSbpeMKU/https/media.tenor.com/images/866ee29cd2404a41bfc9f1921c2e5b57/tenor.gif"]
                        embed.setImage(rand(tblPoke))
                        embed.setFooter(message.author.tag + " asked the command" + " \nBot made by Baeka#2540 and Kamboo#9639 \nDon't forget to vote to get a secret command ^^")
                        message.channel.send(embed).catch(console.error)
                    }
                    else if(message.content.includes('random')) {
                        const randomMember = message.guild.members.cache.random().user;
                        
                        const member = message.guild.member(user);
                        const embed = new Discord.MessageEmbed()
                        embed.setTitle(message.author.tag + ' **POKES** ' + `${randomMember.tag}` + " !")
                        embed.setColor(0xff0000)
                        var tblPoke = ["https://images-ext-1.discordapp.net/external/0pLy98NG0Gz0_0qRvPhwcRZbBmgSA2iO0ITy7M4YjpE/https/media.tenor.com/images/53df08af136dcb1219e17f7a37ab1feb/tenor.gif", "https://images-ext-2.discordapp.net/external/MofXoIGq7EmkLhIsEIJ1ULR7ATy00-VjVK958CwaWcI/https/media.tenor.com/images/c470eed0515a4e5a8227dd5d6c831fbe/tenor.gif", "https://images-ext-1.discordapp.net/external/Vmj2R1hkO9ujBcShwNz2Ek6nbqFtWp2M3R4NhXiYzlY/https/media.tenor.com/images/c555fe22967cb9e90ea3560365b500de/tenor.gif", "https://images-ext-2.discordapp.net/external/8A2bpY9ux_oBmaA1ALpjPaUSc5bP_CfdXt-gy8KihSk/https/media.tenor.com/images/3318db2b09172a1cbf6db4a2cdbc7a0d/tenor.gif", "https://images-ext-1.discordapp.net/external/m_Dclrgb-mt52FaeRtTUDT5pQAWxAv--ot2Y_dkjTAY/https/media.tenor.com/images/369ea66cd13f76b3b49d4f85b830d8ef/tenor.gif", "https://images-ext-1.discordapp.net/external/G_rvUKuymmqY8Un6gOPDHiX1wmTM3NQwEesEm9K46GQ/https/media.tenor.com/images/610e893ccb291626c72642e6286d558f/tenor.gif","https://images-ext-1.discordapp.net/external/r7j4OvyZ_SIIVRNqWyORS0PTykN_2e_ykXjtcUEVeH8/https/media.tenor.com/images/6994e231e81b4447d976b3dda0596400/tenor.gif", "https://images-ext-2.discordapp.net/external/XJcvw61PS5faK0EKihcjNkjyjY2MfsaDrgC49xGulpQ/https/media.tenor.com/images/62d3f9bd28f374f9759f18b10cfa8956/tenor.gif", "https://images-ext-1.discordapp.net/external/_v2ouUfsD-OfFfKjud63d_f0QDKUIwD5_JpXMxeVIWM/https/media.tenor.com/images/fa6b210a80b48ddf108aad0ab92cb004/tenor.gif", "https://images-ext-1.discordapp.net/external/_3Ps4WMjnLgFyhHLp8JMxZrtkaczE7pmGT2hSbpeMKU/https/media.tenor.com/images/866ee29cd2404a41bfc9f1921c2e5b57/tenor.gif"]
                        embed.setImage(rand(tblPoke))
                        embed.setFooter(message.author.tag + " asked the command" + " \nBot made by Baeka#2540 and Kamboo#9639 \nDon't forget to vote to get a secret command ^^")
                        message.channel.send(embed).catch(console.error)
                    }
                    else {
                        message.channel.send("`PLS MENTION SOMEONE`")
                        return
                    }
                }
            },
            {
                name: "hug",
                aliases: [],
                description: "Let's hug someone by a gif !",
                category: strUcFirst("love"),
                usage: [`${PREFIX}hug <user>`, `${PREFIX}hug random`],
                execute: () => {
                    let args = message.content.toLowerCase().split(" ").slice(1);
                    const user = message.mentions.users.first();
                    let userNOMENTION = searchMemberID(message.guild.id, args[0]) || searchMemberNick(message.guild.id, args.join(" ")) || searchMemberTag(message.guild.id, args[0]);
                    if (user) {
                        const member = message.guild.member(user);
                        const embed = new Discord.MessageEmbed()
                        embed.setTitle(message.author.tag + " Gave a hug to " + `${user.tag}` + "!")
                        embed.setColor(0xff0000)
                        var tblHug = ["https://media.tenor.com/images/f1bf91d3870ed8b26367afd1b91ada9c/tenor.gif","https://media.tenor.com/images/cee298437607d7b123bc9664c9ce844b/tenor.gif", "https://media.tenor.com/images/11157eb0fe0b7b0f296a8066dffa39a7/tenor.gif", "https://media.tenor.com/images/6deb677d1a080655e2c916452e4b6ba5/tenor.gif", "https://media.tenor.com/images/11157eb0fe0b7b0f296a8066dffa39a7/tenor.gif","https://media.tenor.com/images/a9bb4d55724484be94d13dd94721a8d9/tenor.gif","https://media.tenor.com/images/043d27b3f7715ac7c2eb6d8670b14336/tenor.gif", "https://media.tenor.com/images/043d27b3f7715ac7c2eb6d8670b14336/tenor.gif", "https://media.tenor.com/images/732e4ed3faadb3d9722d148eca2353f5/tenor.gif", "https://media.tenor.com/images/8c39fcbbef6d5332ad0e44e6346bb7ac/tenor.gif", "https://images-ext-1.discordapp.net/external/cRRWA-PNV0_PY-I09yLsUYTO7GlGMeKRBDtWIZEdQkA/https/media.tenor.com/images/7766f3d163f651b6d9d7c3b718d8e6fb/tenor.gif", "https://images-ext-1.discordapp.net/external/5-m1Cv114xkKpxNUSKGt6ZLUGZyXBQCZoRrmlw35tpo/https/media.tenor.com/images/8971ea244d81b101ef7a73c24dde9154/tenor.gif", "https://images-ext-2.discordapp.net/external/2cRE5XsbzIsQK17voxUiubJNua_dvNmqjD3ejJFTYd0/https/media.tenor.com/images/865b278c53112e09e102def839cfe41c/tenor.gif", "https://media.tenor.com/images/048a2d608e13a848666f8f2f71df202e/tenor.gif"]
                        embed.setImage(rand(tblHug))
                        embed.setFooter(message.author.tag + " asked the command" + " \nBot made by Baeka#2540 and Kamboo#9639 \nDon't forget to vote to get a secret command ^^")
                        message.channel.send(embed).catch(console.error)
                    }
                    else if (userNOMENTION) {
                        const member = message.guild.member(user);
                        const embed = new Discord.MessageEmbed()
                        embed.setTitle(message.author.tag + " Gave a hug to " + `${userNOMENTION.user.tag}` + "!")
                        embed.setColor(0xff0000)
                        var tblHug = ["https://media.tenor.com/images/f1bf91d3870ed8b26367afd1b91ada9c/tenor.gif","https://media.tenor.com/images/cee298437607d7b123bc9664c9ce844b/tenor.gif", "https://media.tenor.com/images/11157eb0fe0b7b0f296a8066dffa39a7/tenor.gif", "https://media.tenor.com/images/6deb677d1a080655e2c916452e4b6ba5/tenor.gif", "https://media.tenor.com/images/11157eb0fe0b7b0f296a8066dffa39a7/tenor.gif","https://media.tenor.com/images/a9bb4d55724484be94d13dd94721a8d9/tenor.gif","https://media.tenor.com/images/043d27b3f7715ac7c2eb6d8670b14336/tenor.gif", "https://media.tenor.com/images/043d27b3f7715ac7c2eb6d8670b14336/tenor.gif", "https://media.tenor.com/images/732e4ed3faadb3d9722d148eca2353f5/tenor.gif", "https://media.tenor.com/images/8c39fcbbef6d5332ad0e44e6346bb7ac/tenor.gif", "https://images-ext-1.discordapp.net/external/cRRWA-PNV0_PY-I09yLsUYTO7GlGMeKRBDtWIZEdQkA/https/media.tenor.com/images/7766f3d163f651b6d9d7c3b718d8e6fb/tenor.gif", "https://images-ext-1.discordapp.net/external/5-m1Cv114xkKpxNUSKGt6ZLUGZyXBQCZoRrmlw35tpo/https/media.tenor.com/images/8971ea244d81b101ef7a73c24dde9154/tenor.gif", "https://images-ext-2.discordapp.net/external/2cRE5XsbzIsQK17voxUiubJNua_dvNmqjD3ejJFTYd0/https/media.tenor.com/images/865b278c53112e09e102def839cfe41c/tenor.gif", "https://media.tenor.com/images/048a2d608e13a848666f8f2f71df202e/tenor.gif"]
                        embed.setImage(rand(tblHug))
                        embed.setFooter(message.author.tag + " asked the command" + " \nBot made by Baeka#2540 and Kamboo#9639 \nDon't forget to vote to get a secret command ^^")
                        message.channel.send(embed).catch(console.error)
                    } 
                    
                    else if(message.content.includes('random')) {
                        const randomMember = message.guild.members.cache.random().user;
                        const member = message.guild.member(user);
                        const embed = new Discord.MessageEmbed()
                        embed.setTitle(message.author.tag + " Gave a hug to " + `${randomMember.tag}` + "!")
                        embed.setColor(0xff0000)
                        var tblHug = ["https://media.tenor.com/images/f1bf91d3870ed8b26367afd1b91ada9c/tenor.gif","https://media.tenor.com/images/cee298437607d7b123bc9664c9ce844b/tenor.gif", "https://media.tenor.com/images/11157eb0fe0b7b0f296a8066dffa39a7/tenor.gif", "https://media.tenor.com/images/6deb677d1a080655e2c916452e4b6ba5/tenor.gif", "https://media.tenor.com/images/11157eb0fe0b7b0f296a8066dffa39a7/tenor.gif","https://media.tenor.com/images/a9bb4d55724484be94d13dd94721a8d9/tenor.gif","https://media.tenor.com/images/043d27b3f7715ac7c2eb6d8670b14336/tenor.gif", "https://media.tenor.com/images/043d27b3f7715ac7c2eb6d8670b14336/tenor.gif", "https://media.tenor.com/images/732e4ed3faadb3d9722d148eca2353f5/tenor.gif", "https://media.tenor.com/images/8c39fcbbef6d5332ad0e44e6346bb7ac/tenor.gif", "https://images-ext-1.discordapp.net/external/cRRWA-PNV0_PY-I09yLsUYTO7GlGMeKRBDtWIZEdQkA/https/media.tenor.com/images/7766f3d163f651b6d9d7c3b718d8e6fb/tenor.gif", "https://images-ext-1.discordapp.net/external/5-m1Cv114xkKpxNUSKGt6ZLUGZyXBQCZoRrmlw35tpo/https/media.tenor.com/images/8971ea244d81b101ef7a73c24dde9154/tenor.gif", "https://images-ext-2.discordapp.net/external/2cRE5XsbzIsQK17voxUiubJNua_dvNmqjD3ejJFTYd0/https/media.tenor.com/images/865b278c53112e09e102def839cfe41c/tenor.gif", "https://media.tenor.com/images/048a2d608e13a848666f8f2f71df202e/tenor.gif"]
                        embed.setImage(rand(tblHug))
                        embed.setFooter(message.author.tag + " asked the command" + " \nBot made by Baeka#2540 and Kamboo#9639 \nDon't forget to vote to get a secret command ^^")
                        message.channel.send(embed).catch(console.error)
                    }
                    else {
                        message.channel.send("Please mention someone!")
                        return;
                    }
                }
            },
            {
                name: "kiss",
                aliases: [],
                description: "Oh ! It's so cute ! You're kissing someone.",
                category: strUcFirst("love"),
                usage: [`${PREFIX}kiss <user>`, `${PREFIX}kiss random`],
                execute: () => {
                    let args = message.content.toLowerCase().split(" ").slice(1);
                    const user = message.mentions.users.first();
                    let userNOMENTION = searchMemberID(message.guild.id, args[0]) || searchMemberNick(message.guild.id, args.join(" ")) || searchMemberTag(message.guild.id, args[0]);
                    if (user) {
                        const member = message.guild.member(user);
                        const embed = new Discord.MessageEmbed()
                        embed.setTitle(message.author.tag + " **KISSES **" + `${user.tag}` + " !" )
                        embed.setColor(0xff0000)
                        var tblKiss = ["https://images-ext-1.discordapp.net/external/jft5uuJ40ZE8RbmMyokQQGLFDIICyOjbblghJdhSMXk/https/cdn.weeb.sh/images/ryoW3T_vW.gif", "https://images-ext-2.discordapp.net/external/eC9lxBLGLTMmE3k7YMqreg8_YlJrd-dZN04irdO9emk/https/media.tenor.com/images/b020758888323338c874c549cbca5681/tenor.gif","https://images-ext-2.discordapp.net/external/aemVT1g3fqDsDYg7ybDZLdQjHwvFk5g949cKbq7OoeI/https/media.tenor.com/images/26aaa1494b424854824019523c7ba631/tenor.gif","https://images-ext-2.discordapp.net/external/p_OoMVxjFjUIQRqeyAU88DHW1z_Odj3d8Siq5uWjHRk/https/media.tenor.com/images/48963a8342fecf77d8eabfd2ab2e75c1/tenor.gif","https://images-ext-2.discordapp.net/external/MzogOW0Lp3bHYYQ91WtWnLr83zBh20nmW-li8xdbsCA/https/media.tenor.com/images/25359520a0973f896b002689ed90db8d/tenor.gif","https://images-ext-2.discordapp.net/external/o9UxCp3TXFpJ39IUpxiCTOQqtFqQg9OzeuwVIr7n1Ts/https/media.tenor.com/images/fd65261a2c840100bd3dadd83b27f65d/tenor.gif", "https://images-ext-2.discordapp.net/external/Il8Ku_89LDP3AynjYMm5FYOTjhQGcH-HgNKVOSMmIYc/https/media.tenor.com/images/ae05156dabb6110e8262c2a36f9a54e9/tenor.gif","https://images-ext-2.discordapp.net/external/5FWZBVRX2Ywxrzj9mEPLq5fETCvQONFp1AwiR1fSveE/https/media.tenor.com/images/ac02b016f1510dd245a22878c4206daf/tenor.gif","https://images-ext-2.discordapp.net/external/mPfz7D9vnK69B12Mt1M6TqOzHqjDGgXSovabMOgDFOA/https/media.tenor.com/images/6d10f80f9f7b7effac346b82d229c46e/tenor.gif","https://images-ext-2.discordapp.net/external/Rtg4N1CM0as_oAgjI8e2AO3aCDATltxpbkkXD0YLCb4/https/media.tenor.com/images/d1108955c4fbf68fe97d41d17f3afbd2/tenor.gif"]
                        embed.setImage(rand(tblKiss))
                        embed.setFooter(message.author.tag + " asked the command" + " \nBot made by Baeka#2540 and Kamboo#9639 \nDon't forget to vote to get a secret command ^^")
                        message.channel.send(embed).catch(console.error)
                    }
                    else if (userNOMENTION) {
                        const member = message.guild.member(user);
                        const embed = new Discord.MessageEmbed()
                        embed.setTitle(message.author.tag + " **KISSES **" + `${userNOMENTION.user.tag}` + " !" )
                        embed.setColor(0xff0000)
                        var tblKiss = ["https://images-ext-1.discordapp.net/external/jft5uuJ40ZE8RbmMyokQQGLFDIICyOjbblghJdhSMXk/https/cdn.weeb.sh/images/ryoW3T_vW.gif", "https://images-ext-2.discordapp.net/external/eC9lxBLGLTMmE3k7YMqreg8_YlJrd-dZN04irdO9emk/https/media.tenor.com/images/b020758888323338c874c549cbca5681/tenor.gif","https://images-ext-2.discordapp.net/external/aemVT1g3fqDsDYg7ybDZLdQjHwvFk5g949cKbq7OoeI/https/media.tenor.com/images/26aaa1494b424854824019523c7ba631/tenor.gif","https://images-ext-2.discordapp.net/external/p_OoMVxjFjUIQRqeyAU88DHW1z_Odj3d8Siq5uWjHRk/https/media.tenor.com/images/48963a8342fecf77d8eabfd2ab2e75c1/tenor.gif","https://images-ext-2.discordapp.net/external/MzogOW0Lp3bHYYQ91WtWnLr83zBh20nmW-li8xdbsCA/https/media.tenor.com/images/25359520a0973f896b002689ed90db8d/tenor.gif","https://images-ext-2.discordapp.net/external/o9UxCp3TXFpJ39IUpxiCTOQqtFqQg9OzeuwVIr7n1Ts/https/media.tenor.com/images/fd65261a2c840100bd3dadd83b27f65d/tenor.gif", "https://images-ext-2.discordapp.net/external/Il8Ku_89LDP3AynjYMm5FYOTjhQGcH-HgNKVOSMmIYc/https/media.tenor.com/images/ae05156dabb6110e8262c2a36f9a54e9/tenor.gif","https://images-ext-2.discordapp.net/external/5FWZBVRX2Ywxrzj9mEPLq5fETCvQONFp1AwiR1fSveE/https/media.tenor.com/images/ac02b016f1510dd245a22878c4206daf/tenor.gif","https://images-ext-2.discordapp.net/external/mPfz7D9vnK69B12Mt1M6TqOzHqjDGgXSovabMOgDFOA/https/media.tenor.com/images/6d10f80f9f7b7effac346b82d229c46e/tenor.gif","https://images-ext-2.discordapp.net/external/Rtg4N1CM0as_oAgjI8e2AO3aCDATltxpbkkXD0YLCb4/https/media.tenor.com/images/d1108955c4fbf68fe97d41d17f3afbd2/tenor.gif"]
                        embed.setImage(rand(tblKiss))
                        embed.setFooter(message.author.tag + " asked the command" + " \nBot made by Baeka#2540 and Kamboo#9639 \nDon't forget to vote to get a secret command ^^")
                        message.channel.send(embed).catch(console.error)
                    }
                    
                    else if(message.content.includes('random')) {
                        const randomMember = message.guild.members.cache.random().user;
                        
                        const member = message.guild.member(user);
                        const embed = new Discord.MessageEmbed()
                        embed.setTitle(message.author.tag + " **KISSES **" + `${randomMember.tag}` + " !" )
                        embed.setColor(0xff0000)
                        var tblKiss = ["https://images-ext-1.discordapp.net/external/jft5uuJ40ZE8RbmMyokQQGLFDIICyOjbblghJdhSMXk/https/cdn.weeb.sh/images/ryoW3T_vW.gif", "https://images-ext-2.discordapp.net/external/eC9lxBLGLTMmE3k7YMqreg8_YlJrd-dZN04irdO9emk/https/media.tenor.com/images/b020758888323338c874c549cbca5681/tenor.gif","https://images-ext-2.discordapp.net/external/aemVT1g3fqDsDYg7ybDZLdQjHwvFk5g949cKbq7OoeI/https/media.tenor.com/images/26aaa1494b424854824019523c7ba631/tenor.gif","https://images-ext-2.discordapp.net/external/p_OoMVxjFjUIQRqeyAU88DHW1z_Odj3d8Siq5uWjHRk/https/media.tenor.com/images/48963a8342fecf77d8eabfd2ab2e75c1/tenor.gif","https://images-ext-2.discordapp.net/external/MzogOW0Lp3bHYYQ91WtWnLr83zBh20nmW-li8xdbsCA/https/media.tenor.com/images/25359520a0973f896b002689ed90db8d/tenor.gif","https://images-ext-2.discordapp.net/external/o9UxCp3TXFpJ39IUpxiCTOQqtFqQg9OzeuwVIr7n1Ts/https/media.tenor.com/images/fd65261a2c840100bd3dadd83b27f65d/tenor.gif", "https://images-ext-2.discordapp.net/external/Il8Ku_89LDP3AynjYMm5FYOTjhQGcH-HgNKVOSMmIYc/https/media.tenor.com/images/ae05156dabb6110e8262c2a36f9a54e9/tenor.gif","https://images-ext-2.discordapp.net/external/5FWZBVRX2Ywxrzj9mEPLq5fETCvQONFp1AwiR1fSveE/https/media.tenor.com/images/ac02b016f1510dd245a22878c4206daf/tenor.gif","https://images-ext-2.discordapp.net/external/mPfz7D9vnK69B12Mt1M6TqOzHqjDGgXSovabMOgDFOA/https/media.tenor.com/images/6d10f80f9f7b7effac346b82d229c46e/tenor.gif","https://images-ext-2.discordapp.net/external/Rtg4N1CM0as_oAgjI8e2AO3aCDATltxpbkkXD0YLCb4/https/media.tenor.com/images/d1108955c4fbf68fe97d41d17f3afbd2/tenor.gif"]
                        embed.setImage(rand(tblKiss))
                        embed.setFooter(message.author.tag + " asked the command" + " \nBot made by Baeka#2540 and Kamboo#9639 \nDon't forget to vote to get a secret command ^^")
                        message.channel.send(embed).catch(console.error)
                    }
                    else {
                        message.channel.send("`PLS MENTION SOMEONE`")
                        return
                    }
                }
            },
            {
                name: "blush",
                aliases: [],
                description: "You're blushing! Is it because of love ?",
                category: strUcFirst("love"),
                usage: [`${PREFIX}blush`],
                execute: () => {
                    const embed = new Discord.MessageEmbed()
                    embed.setTitle(message.author.tag + "** is blushing!**")
                    embed.setColor(0xff0000)     
                    var tblBlush = ["https://cdn.weeb.sh/images/S1exMIQDb.gif","https://media.tenor.com/images/dd12cee4f42fa1d949182f72cb9e77f4/tenor.gif","https://media.tenor.com/images/5f737df63beee63857ce767a877547ff/tenor.gif","https://media.tenor.com/images/d8432cf1b8c90e2b791c4cc206062596/tenor.gif","https://media.tenor.com/images/bd01716fd6a850d98713fe08c5d2e467/tenor.gif","https://media.tenor.com/images/e010cb377dd6093a8efb80e93ab3ede3/tenor.gif","https://media.tenor.com/images/f45f5c5fd72dd7c9ff50976e2bc7133c/tenor.gif","https://media.tenor.com/images/a948c84155a2d2e7bc860b2b9fb38e07/tenor.gif","https://media.tenor.com/images/6bfc57bde155c401edc1d032de468cd6/tenor.gif","https://media.tenor.com/images/1b4b7ae3cf0a8e9e71bafedda31661ea/tenor.gif"];
                    embed.setImage(rand(tblBlush))
                    embed.setFooter(message.author.tag + " asked the command" + " \nBot made by Baeka#2540 and Kamboo#9639 \nDon't forget to vote to get a secret command ^^")
                    message.channel.send(embed).catch(console.error)
                }
            },
            {
                name: "hello",
                aliases: [],
                description: "Say hello to someone or to everyone.",
                category: strUcFirst("politeness"),
                usage: [`${PREFIX}hello`, `${PREFIX}hello <user>`],
                execute: () => {
                    let args = message.content.toLowerCase().split(" ").slice(1);
                    const user = message.mentions.users.first();
                    let userNOMENTION = searchMemberID(message.guild.id, args[0]) || searchMemberNick(message.guild.id, args.join(" ")) || searchMemberTag(message.guild.id, args[0]);
                    if (user) {
                        const embed = new Discord.MessageEmbed()
                        embed.setTitle(message.author.tag + ' **says hello to **' + `${user.tag}` + " !")
                        embed.setColor(0xff0000)
                        var tblHello = ["https://media.tenor.com/images/cce8754f40d3c883d86075f220371d3e/tenor.gif", "https://media.tenor.com/images/c1b6fe6d7f699fdbfbccbe274b3df6e2/tenor.gif", "https://media.tenor.com/images/d988fa40d8d75a8ec0ad0d462df3279b/tenor.gif", "https://media.tenor.com/images/58371cd3291d6ae32258b79d62ec1d73/tenor.gif", "https://media.tenor.com/images/c17c78630acb049a9d6d18c04b933561/tenor.gif", "https://media.tenor.com/images/8489d1bac66f45104779bd25b5997deb/tenor.gif", "https://media.tenor.com/images/251d736302c3dcdb755b9aa59174556d/tenor.gif", "https://media.tenor.com/images/528d443dcea42078e911ef4b1cba8625/tenor.gif", "https://media.tenor.com/images/2fd8d48c78807a7f820cd9130225b77e/tenor.gif", "https://media.tenor.com/images/3fbae3954123a7815bd235f87eeb2ad3/tenor.gif"]
                        embed.setImage(rand(tblHello))
                        embed.setFooter(message.author.tag + " asked the command" + " \nBot made by Baeka#2540 and Kamboo#9639 \nDon't forget to vote to get a secret command ^^")
                        message.channel.send(embed).catch(console.error)
                    }
                    else if (userNOMENTION) {
                        const embed = new Discord.MessageEmbed()
                        embed.setTitle(message.author.tag + ' **says hello to **' + `${userNOMENTION.user.tag}` + " !")
                        embed.setColor(0xff0000)
                        var tblHello = ["https://media.tenor.com/images/cce8754f40d3c883d86075f220371d3e/tenor.gif", "https://media.tenor.com/images/c1b6fe6d7f699fdbfbccbe274b3df6e2/tenor.gif", "https://media.tenor.com/images/d988fa40d8d75a8ec0ad0d462df3279b/tenor.gif", "https://media.tenor.com/images/58371cd3291d6ae32258b79d62ec1d73/tenor.gif", "https://media.tenor.com/images/c17c78630acb049a9d6d18c04b933561/tenor.gif", "https://media.tenor.com/images/8489d1bac66f45104779bd25b5997deb/tenor.gif", "https://media.tenor.com/images/251d736302c3dcdb755b9aa59174556d/tenor.gif", "https://media.tenor.com/images/528d443dcea42078e911ef4b1cba8625/tenor.gif", "https://media.tenor.com/images/2fd8d48c78807a7f820cd9130225b77e/tenor.gif", "https://media.tenor.com/images/3fbae3954123a7815bd235f87eeb2ad3/tenor.gif"]
                        embed.setImage(rand(tblHello))
                        embed.setFooter(message.author.tag + " asked the command" + " \nBot made by Baeka#2540 and Kamboo#9639 \nDon't forget to vote to get a secret command ^^")
                        message.channel.send(embed).catch(console.error)
                    }
                    else {
                        const embed = new Discord.MessageEmbed()
                        embed.setTitle(message.author.tag + ' **says hello!**')
                        embed.setColor(0xff0000)
                        embed.setColor(0xff0000)
                        var tblHello = ["https://media.tenor.com/images/cce8754f40d3c883d86075f220371d3e/tenor.gif", "https://media.tenor.com/images/c1b6fe6d7f699fdbfbccbe274b3df6e2/tenor.gif", "https://media.tenor.com/images/d988fa40d8d75a8ec0ad0d462df3279b/tenor.gif", "https://media.tenor.com/images/58371cd3291d6ae32258b79d62ec1d73/tenor.gif", "https://media.tenor.com/images/c17c78630acb049a9d6d18c04b933561/tenor.gif", "https://media.tenor.com/images/8489d1bac66f45104779bd25b5997deb/tenor.gif", "https://media.tenor.com/images/251d736302c3dcdb755b9aa59174556d/tenor.gif", "https://media.tenor.com/images/528d443dcea42078e911ef4b1cba8625/tenor.gif", "https://media.tenor.com/images/2fd8d48c78807a7f820cd9130225b77e/tenor.gif", "https://media.tenor.com/images/3fbae3954123a7815bd235f87eeb2ad3/tenor.gif"]
                        embed.setImage(rand(tblHello))
                        embed.setFooter(message.author.tag + " asked the command" + " \nBot made by Baeka#2540 and Kamboo#9639 \nDon't forget to vote to get a secret command ^^")
                        message.channel.send(embed).catch(console.error)
                    } 
                }
            },
            {
                name: "bye",
                aliases: [],
                description: "Say goodbye to someone or to everyone.",
                category: strUcFirst("politeness"),
                usage: [`${PREFIX}bye`, `${PREFIX}bye <user>`],
                execute: () => {
                    let args = message.content.toLowerCase().split(" ").slice(1);
                    const user = message.mentions.users.first();
                    let userNOMENTION = searchMemberID(message.guild.id, args[0]) || searchMemberNick(message.guild.id, args.join(" ")) || searchMemberTag(message.guild.id, args[0]);
                    if (user) {
                        const embed = new Discord.MessageEmbed()
                        embed.setTitle(message.author.tag + ' **says bye to **' + `${user.tag}` + " !")
                        embed.setColor(0xff0000)
                        var tblBye = ["https://media.tenor.com/images/7f1ca91dc47136c55eec3a8b26196396/tenor.gif", "https://media.tenor.com/images/889a0a0511d615a81a386469eeea34bb/tenor.gif", "https://media.tenor.com/images/5fd8c8f495e35cfcf5a92b3272f066d7/tenor.gif", "https://media.tenor.com/images/834f6c15005527ef31bd3b668c6d79da/tenor.gif", "https://media.tenor.com/images/79dd5eb455fc24afc0502029c1539cc2/tenor.gif"]
                        embed.setImage(rand(tblBye))
                        embed.setFooter(message.author.tag + " asked the command" + " \nBot made by Baeka#2540 and Kamboo#9639 \nDon't forget to vote to get a secret command ^^")
                        message.channel.send(embed).catch(console.error)
                    }
                    else if (userNOMENTION) {
                        const embed = new Discord.MessageEmbed()
                        embed.setTitle(message.author.tag + ' **says bye to **' + `${userNOMENTION.user.tag}` + " !")
                        embed.setColor(0xff0000)
                        var tblBye = ["https://media.tenor.com/images/7f1ca91dc47136c55eec3a8b26196396/tenor.gif", "https://media.tenor.com/images/889a0a0511d615a81a386469eeea34bb/tenor.gif", "https://media.tenor.com/images/5fd8c8f495e35cfcf5a92b3272f066d7/tenor.gif", "https://media.tenor.com/images/834f6c15005527ef31bd3b668c6d79da/tenor.gif", "https://media.tenor.com/images/79dd5eb455fc24afc0502029c1539cc2/tenor.gif"]
                        embed.setImage(rand(tblBye))
                        embed.setFooter(message.author.tag + " asked the command" + " \nBot made by Baeka#2540 and Kamboo#9639 \nDon't forget to vote to get a secret command ^^")
                        message.channel.send(embed).catch(console.error)
                    }
                    else {
                        const embed = new Discord.MessageEmbed()
                        embed.setTitle(message.author.tag + ' **says bye!**')
                        embed.setColor(0xff0000)
                        var tblBye = ["https://media.tenor.com/images/7f1ca91dc47136c55eec3a8b26196396/tenor.gif", "https://media.tenor.com/images/889a0a0511d615a81a386469eeea34bb/tenor.gif", "https://media.tenor.com/images/5fd8c8f495e35cfcf5a92b3272f066d7/tenor.gif", "https://media.tenor.com/images/834f6c15005527ef31bd3b668c6d79da/tenor.gif", "https://media.tenor.com/images/79dd5eb455fc24afc0502029c1539cc2/tenor.gif"]
                        embed.setImage(rand(tblBye))
                        embed.setFooter(message.author.tag + " asked the command" + " \nBot made by Baeka#2540 and Kamboo#9639 \nDon't forget to vote to get a secret command ^^")
                        message.channel.send(embed).catch(console.error)
                    }
                }
            },
            {
                name: "sorry",
                aliases: [],
                description: "Say sorry to someone or to everyone.",
                category: strUcFirst("politeness"),
                usage: [`${PREFIX}sorry`, `${PREFIX}sorry <user>`],
                execute: () => {
                    let args = message.content.toLowerCase().split(" ").slice(1);
                    const user = message.mentions.users.first();
                    let userNOMENTION = searchMemberID(message.guild.id, args[0]) || searchMemberNick(message.guild.id, args.join(" ")) || searchMemberTag(message.guild.id, args[0]);
                    if (user) {
                        const member = message.guild.member(user);
                        const embed = new Discord.MessageEmbed()
                        embed.setTitle(message.author.tag + " **says sorry to **" + `${user.tag}`)
                        embed.setColor(0xff0000)
                        embed.setImage("https://media.tenor.com/images/1a6de6e50af1228a710bbd0884f19bcc/tenor.gif");
                        embed.setFooter(message.author.tag + " asked the command" + " \nBot made by Baeka#2540 and Kamboo#9639 \nDon't forget to vote to get a secret command ^^")
                        message.channel.send(embed).catch(console.error)
                    }
                    else if (userNOMENTION) {
                        const embed = new Discord.MessageEmbed()
                        embed.setTitle(message.author.tag + " **says sorry to **" + `${userNOMENTION.user.tag}`)
                        embed.setColor(0xff0000)
                        embed.setImage("https://media.tenor.com/images/1a6de6e50af1228a710bbd0884f19bcc/tenor.gif");
                        embed.setFooter(message.author.tag + " asked the command" + " \nBot made by Baeka#2540 and Kamboo#9639 \nDon't forget to vote to get a secret command ^^")
                        message.channel.send(embed).catch(console.error)
                    }
                    else {
                        const member = message.guild.member(user);
                        const embed = new Discord.MessageEmbed()
                        embed.setTitle(message.author.tag + " **says sorry**")
                        embed.setColor(0xff0000)
                        embed.setImage("https://media.tenor.com/images/8640df2c4234741658a0bd256d9ca77a/tenor.gif");
                        embed.setFooter(message.author.tag + " asked the command" + " \nBot made by Baeka#2540 and Kamboo#9639 \nDon't forget to vote to get a secret command ^^")
                        message.channel.send(embed).catch(console.error)
                    }
                }
            },
            {
                name: "please",
                aliases: [],
                description: "Say please to someone.",
                category: strUcFirst("politeness"),
                usage: [`${PREFIX}please <user>`],
                execute: () => {
                    let args = message.content.toLowerCase().split(" ").slice(1);
                    const user = message.mentions.users.first();
                    let userNOMENTION = searchMemberID(message.guild.id, args[0]) || searchMemberNick(message.guild.id, args.join(" ")) || searchMemberTag(message.guild.id, args[0]);
                    if (user) {
                        const member = message.guild.member(user);
                        const embed = new Discord.MessageEmbed()
                        embed.setTitle(message.author.tag + " **says please to **" + `${user.tag}`)
                        embed.setColor(0xff0000)
                        var tblPls = ["https://images-ext-1.discordapp.net/external/L3kOs9kbPp75c-R0p-bKw624ftSuF-ex9xy5lVesfqs/https/media.tenor.com/images/6cba97389ba3ac706c0e40292ad59f3f/tenor.gif","https://images-ext-1.discordapp.net/external/iOv4GpCovhiHBKkPaPQNRdsywRtqDxPchVQbmtpn2Jo/https/media.tenor.com/images/ad11f7734f79fc9def8949f8304f490b/tenor.gif","https://images-ext-1.discordapp.net/external/9IE1IlqHsW_FhHJKK8cTpW9Oz8QreP6Yh8LEnsqn8FQ/https/media.tenor.com/images/7dfceeefbb8bf449f8f66639f06ad763/tenor.gif","https://images-ext-1.discordapp.net/external/eZTrV0FfNYwKDXiR4OoymIroFMF6EYRgjscCyIlqt2o/https/media.tenor.com/images/a8baaea8daacf391ff44681ce287fb9c/tenor.gif","https://images-ext-1.discordapp.net/external/PWVS0OV7pFw7z3_RUajv7axs0wzYx3dHz_T5D2GUI5g/https/media.tenor.com/images/f67dc44c74bf20f81b6dc0f4817adeb3/tenor.gif?width=206&height=300","https://images-ext-2.discordapp.net/external/oRN1ctyuFO4r1LjLvbsZVJY7WJpumsx7RYBDGAgDoeg/https/media.tenor.com/images/f69de3806c1c8402d0510ebf13f1ef69/tenor.gif","https://images-ext-2.discordapp.net/external/kTmK3-8XPFjAaefwET-nuMc8PHHD8fKTksNZ99vTLKU/https/media.tenor.com/images/7e623e17dd8c776aee5e0c3e0e9534c9/tenor.gif","https://images-ext-1.discordapp.net/external/WO-f9_Q9Na-kZMGh7vk7o4CqIJAOTZWxZ7W1FBi8Vrk/https/media.tenor.com/images/8bc37e6b644fa51eacb5dd11c3faa90a/tenor.gif","https://images-ext-1.discordapp.net/external/wW28O69zhamJ_Vpd8L82rkYV8QQFwLBe0j1y9DacUjY/https/media.tenor.com/images/22f5a7d55c4111af776d431d150ba58f/tenor.gif","https://images-ext-2.discordapp.net/external/kBSmZ6Pb04EQs9KHIQzlN313bPA0pRdyUoOJp8vfyfc/https/media.tenor.com/images/4514f56d545268ac66a841bcdd4a8c58/tenor.gif"]
                        embed.setImage(rand(tblPls))
                        embed.setFooter(message.author.tag + " asked the command" + " \nBot made by Baeka#2540 and Kamboo#9639 \nDon't forget to vote to get a secret command ^^")
                        message.channel.send(embed).catch(console.error)
                    }
                    else if (userNOMENTION) {
                        const embed = new Discord.MessageEmbed()
                        embed.setTitle(message.author.tag + " **says please to **" + `${userNOMENTION.user.tag}`)
                        embed.setColor(0xff0000)
                        var tblPls = ["https://images-ext-1.discordapp.net/external/L3kOs9kbPp75c-R0p-bKw624ftSuF-ex9xy5lVesfqs/https/media.tenor.com/images/6cba97389ba3ac706c0e40292ad59f3f/tenor.gif","https://images-ext-1.discordapp.net/external/iOv4GpCovhiHBKkPaPQNRdsywRtqDxPchVQbmtpn2Jo/https/media.tenor.com/images/ad11f7734f79fc9def8949f8304f490b/tenor.gif","https://images-ext-1.discordapp.net/external/9IE1IlqHsW_FhHJKK8cTpW9Oz8QreP6Yh8LEnsqn8FQ/https/media.tenor.com/images/7dfceeefbb8bf449f8f66639f06ad763/tenor.gif","https://images-ext-1.discordapp.net/external/eZTrV0FfNYwKDXiR4OoymIroFMF6EYRgjscCyIlqt2o/https/media.tenor.com/images/a8baaea8daacf391ff44681ce287fb9c/tenor.gif","https://images-ext-1.discordapp.net/external/PWVS0OV7pFw7z3_RUajv7axs0wzYx3dHz_T5D2GUI5g/https/media.tenor.com/images/f67dc44c74bf20f81b6dc0f4817adeb3/tenor.gif?width=206&height=300","https://images-ext-2.discordapp.net/external/oRN1ctyuFO4r1LjLvbsZVJY7WJpumsx7RYBDGAgDoeg/https/media.tenor.com/images/f69de3806c1c8402d0510ebf13f1ef69/tenor.gif","https://images-ext-2.discordapp.net/external/kTmK3-8XPFjAaefwET-nuMc8PHHD8fKTksNZ99vTLKU/https/media.tenor.com/images/7e623e17dd8c776aee5e0c3e0e9534c9/tenor.gif","https://images-ext-1.discordapp.net/external/WO-f9_Q9Na-kZMGh7vk7o4CqIJAOTZWxZ7W1FBi8Vrk/https/media.tenor.com/images/8bc37e6b644fa51eacb5dd11c3faa90a/tenor.gif","https://images-ext-1.discordapp.net/external/wW28O69zhamJ_Vpd8L82rkYV8QQFwLBe0j1y9DacUjY/https/media.tenor.com/images/22f5a7d55c4111af776d431d150ba58f/tenor.gif","https://images-ext-2.discordapp.net/external/kBSmZ6Pb04EQs9KHIQzlN313bPA0pRdyUoOJp8vfyfc/https/media.tenor.com/images/4514f56d545268ac66a841bcdd4a8c58/tenor.gif"]
                        embed.setImage(rand(tblPls))
                        embed.setFooter(message.author.tag + " asked the command" + " \nBot made by Baeka#2540 and Kamboo#9639 \nDon't forget to vote to get a secret command ^^")
                        message.channel.send(embed).catch(console.error)
                    }
                    else {
                        message.channel.send("`PLS MENTION SOMEONE`")
                        return
                    }
                }
            },
            {
                name: "thanks",
                aliases: [],
                description: "Thank someone or everyone.",
                category: strUcFirst("politeness"),
                usage: [`${PREFIX}thanks`, `${PREFIX}thanks <user>`],
                execute: () => {
                    let args = message.content.toLowerCase().split(" ").slice(1);
                    const user = message.mentions.users.first();
                    let userNOMENTION = searchMemberID(message.guild.id, args[0]) || searchMemberNick(message.guild.id, args.join(" ")) || searchMemberTag(message.guild.id, args[0]);
                    if (user) {
                        const member = message.guild.member(user);
                        const embed = new Discord.MessageEmbed()
                        embed.setTitle(message.author.tag + "** says thanks to **" + `${user.tag}` + " !")
                        embed.setColor(0xff0000)
                        embed.setImage("https://media.tenor.com/images/85ee9affcd63ca633c09106ad467626e/tenor.gif");
                        embed.setFooter(message.author.tag + " asked the command" + " \nBot made by Baeka#2540 and Kamboo#9639 \nDon't forget to vote to get a secret command ^^")
                        message.channel.send(embed).catch(console.error)
                    }
                    else if (userNOMENTION) {
                        const embed = new Discord.MessageEmbed()
                        embed.setTitle(message.author.tag + "** says thanks to **" + `${userNOMENTION.user.tag}` + " !")
                        embed.setColor(0xff0000)
                        embed.setImage("https://media.tenor.com/images/85ee9affcd63ca633c09106ad467626e/tenor.gif");
                        embed.setFooter(message.author.tag + " asked the command" + " \nBot made by Baeka#2540 and Kamboo#9639 \nDon't forget to vote to get a secret command ^^")
                        message.channel.send(embed).catch(console.error)
                    }
                    else {
                        const member = message.guild.member(user);
                        const embed = new Discord.MessageEmbed()
                        embed.setTitle(message.author.tag + "** says thanks !")
                        embed.setColor(0xff0000)
                        embed.setImage("https://media.tenor.com/images/85ee9affcd63ca633c09106ad467626e/tenor.gif");
                        embed.setFooter(message.author.tag + " asked the command" + " \nBot made by Baeka#2540 and Kamboo#9639 \nDon't forget to vote to get a secret command ^^")
                        message.channel.send(embed).catch(console.error)
                    }
                }
            },
            {
                name: "laugh",
                aliases: [],
                description: "This command will make you laugh...",
                category: strUcFirst("happiness"),
                usage: [`${PREFIX}laugh`],
                execute: () => {
                    const embed = new Discord.MessageEmbed()
                    embed.setTitle(message.author.tag + "** is laughing**")
                    embed.setColor(0xff0000)
                    embed.setImage("https://media.tenor.com/images/40e59416c611299304085c5d7dbf369c/tenor.gif");
                    embed.setFooter(message.author.tag + " asked the command" + " \nBot made by Baeka#2540 and Kamboo#9639 \nDon't forget to vote to get a secret command ^^")
                    message.channel.send(embed).catch(console.error)
                }
            },
            {
                name: "smile",
                aliases: [],
                description: "You're smiling like a POTATOOOOooO00O :potato: (sorry).",
                category: strUcFirst("happiness"),
                usage: [`${PREFIX}smile`],
                execute: () => {
                    const embed = new Discord.MessageEmbed()
                    embed.setTitle(message.author.tag + "** is smiling**")
                    embed.setColor(0xff0000)
                    var tblSmile = ["https://images-ext-2.discordapp.net/external/ZHF-EvP6DYP6ADxovxQl0gZdpcWs9X1Fuy5GQDfYLsU/https/media.tenor.com/images/700c799c829f3233159cd47eabeb663f/tenor.gif","https://images-ext-2.discordapp.net/external/V_h6P1n_UnBaz16nNUpPXFimROanRO9LrjA5tr5jZqU/https/media.tenor.com/images/09c25d681122b9dfdd0710a20c4dfbbd/tenor.gif","https://images-ext-2.discordapp.net/external/R8mweSRHAyNPpBrkb0eRIND2MV1LkmarudKzf7k-lDQ/https/media.tenor.com/images/ef34332bec620cc4e5fc14fe3d3c4fb6/tenor.gif","https://images-ext-1.discordapp.net/external/1siPBJGLfXShCa1b0ed4jWvcyNspLKXnvQhTidH18hI/https/media.tenor.com/images/d62e090630ff6829fda329b86ea723e0/tenor.gif","https://images-ext-2.discordapp.net/external/Scxjc5jQST_dmJDaMte2jx1jkaPnTZZe10kuy0O1U3c/https/media.tenor.com/images/4ea5a1f32764091f5c433bf0b1c778d1/tenor.gif","https://images-ext-2.discordapp.net/external/MKTo6KxNQDumltzzn_5xVBuX1MEr1-YRwpeeMYvuqhw/https/media.tenor.com/images/80c6b49239654be3a7cb4c58fb3b73be/tenor.gif","https://images-ext-1.discordapp.net/external/mkpep35wCoT_q475LWwxj9U2TnJmr18m6E3BmIR9XpM/https/media.tenor.com/images/769fede93ec2f2293dadca1e0449eb50/tenor.gif","https://images-ext-2.discordapp.net/external/JWBl43HWQ6VYZ_ZLQ4SVyp8OPBe7x1rD_W0H91rC85c/https/media.tenor.com/images/aba59370a11cf427c8e3eced1253570b/tenor.gif","https://images-ext-2.discordapp.net/external/79hxQ0RHnewmq4rXwPm1LQl3pPA45x8jJqMaBXa22N4/https/media.tenor.com/images/4461404862e725794f62a37b4addaf63/tenor.gif","https://images-ext-1.discordapp.net/external/N9FZcy303bqBLiv_O-YY76Zx0dkj2WwHZSPeYv4nkUk/https/media.tenor.com/images/bd549ebf694a537c2d376402be85f06b/tenor.gif","https://images-ext-2.discordapp.net/external/BZEt05FH7C5rc1CbiGAzm20a295_cIP7HDD0JGFIsQo/https/media.tenor.com/images/9053011100dc659b21cd5c6df5d9c72b/tenor.gif","https://images-ext-2.discordapp.net/external/rJ3CfxtlB88HI6_zX2lAdVrMvfujjbULvcV-5WTbIZs/https/media.tenor.com/images/1c6ebba1a83ac058c34b703feb365e87/tenor.gif","https://images-ext-2.discordapp.net/external/mHhJbndJ6SqfFQN-CxzuAhXrjwfshYQu0o5r0eEP-y4/https/media.tenor.com/images/edf4a5b9c63a22d01e363a01870a9460/tenor.gif?","https://images-ext-2.discordapp.net/external/xRlDBJVAReADL7G7mn7CbXBQIrUP_XFaW9J3-kSzckw/https/media.tenor.com/images/02ef55cf4c3ea300849f9e4ace1af2a0/tenor.gif"]
                    embed.setImage(rand(tblSmile))
                    embed.setFooter(message.author.tag + " asked the command" + " \nBot made by Baeka#2540 and Kamboo#9639 \nDon't forget to vote to get a secret command ^^")
                    message.channel.send(embed).catch(console.error)
                }
            },
            {
                name: "evilsmile",
                aliases: [],
                description: "You're making the smile of death :scream:. ",
                category: strUcFirst("happiness"),
                usage: [`${PREFIX}evilsmile`],
                execute: () => {
                    const embed = new Discord.MessageEmbed()
                    embed.setTitle(message.author.tag + "** is making an evil smile! 😈**")
                    embed.setColor(0xff0000)
                    var tblEvil = ["https://images-ext-1.discordapp.net/external/T4FfD3vQTyj265cgQFOsnviGkidjZgtf0c92dRjYTOY/https/media.tenor.com/images/96ddf3b4b109bb9dc3056a1ef35cba94/tenor.gif","https://images-ext-2.discordapp.net/external/kTLNiePoqNN29gYNxhz0lEjMvIU_cdPzQZOtZQK7uTI/https/media.tenor.com/images/0dfed98e53ce1ed8f87882734673a398/tenor.gif","https://images-ext-1.discordapp.net/external/t5AkpLZK_VIPBv8GOYzsLIKgpNpOu3O794jEXWpibic/https/media.tenor.com/images/bba888c276e6bc50b381cb0abfbd6bc0/tenor.gif","https://images-ext-2.discordapp.net/external/OQzZU9StuYjmmlDQ1eITvTPgcz74-YysIh7aChVMyiw/https/media.tenor.com/images/050674d87e512f0f6cda3ff5d6f16f35/tenor.gif","https://images-ext-2.discordapp.net/external/k5aOrwso41Irm7Ta4nd1Z2oTZb-16sBFniGg8S0lhb8/https/media.tenor.com/images/92f1ba760450b56691bea479f5fcd980/tenor.gif","https://images-ext-1.discordapp.net/external/2pTcA2zl89fmqKOG38fvs3ZRXKfUL_m8BrhEPo8fyr0/https/media.tenor.com/images/7d2888eaee6eb552a82bf38dd6279c8a/tenor.gif","https://images-ext-1.discordapp.net/external/xn9tKu3nnWPefsyrpLN1dR5OBVR28jTTakXPXKJSKp4/https/media.tenor.com/images/bef86ef365b452ae0f79498a291b812c/tenor.gif","https://images-ext-2.discordapp.net/external/cJVMOe8NdeXR3jK9HurFQjDf8BrBVpUkxizqM3AIrbk/https/media.tenor.com/images/88487db79abd6ab52b36cded8e9c9724/tenor.gif","https://images-ext-2.discordapp.net/external/PDsuy_nSWro1jrQb_4D3d9k2cbWef3JnHW-LCRZ91lQ/https/media.tenor.com/images/ab80887317b5ecbfee3aaf1b3caa49d1/tenor.gif","https://images-ext-2.discordapp.net/external/Xk2LumcH1Gh7UbfjhUd-P54gV8DMAusMrYlF--eVz-s/https/media.tenor.com/images/5cfb6172a40b9b4cb09d3becc1f8babb/tenor.gif?","https://images-ext-1.discordapp.net/external/UDVBHRSXmKvNi1BSdlrcowQPfeJraPu3WHBnoJ1O3lg/https/media.tenor.com/images/2dee91c6f4120e6b7d4f7306816ac6a4/tenor.gif","https://images-ext-1.discordapp.net/external/rOVFzHfTa4bgaW0ER8HTSivBV_elmIkX2GFsgfuawb0/https/media.tenor.com/images/4dc3a23b6e950ea4c1de19a6837d4203/tenor.gif","https://images-ext-1.discordapp.net/external/KNnCv23PJ8ZCzlvvGhYsPcQJDVEjziCElrpMb7OBtEc/https/media.tenor.com/images/37c670f1e7a3c3f06446507dd042fed9/tenor.gif","https://images-ext-1.discordapp.net/external/V-HtVJJqfsM87c1n783cdcPgn3oKcaTFYAmMQHFtgno/https/media.tenor.com/images/65b84bee0f6b57e255b8f43fd5c59f81/tenor.gif","https://images-ext-1.discordapp.net/external/X-zHEnYx-54q0Xt2-Q_3gjQbhFKwmxNfJhy-_NCjXKo/https/media.tenor.com/images/1cd55879f87d99318f79d370b196e9f0/tenor.gif"]
                    embed.setImage(rand(tblEvil))
                    embed.setFooter(message.author.tag + " asked the command" + " \nBot made by Baeka#2540 and Kamboo#9639 \nDon't forget to vote to get a secret command ^^")
                    message.channel.send(embed).catch(console.error)
                }
            },
            {
                name: "fakesmile",
                aliases: [],
                description: "It's a fake smile that you're doing here.",
                category: strUcFirst("happiness"),
                usage: [`${PREFIX}fakesmile`],
                execute: () => {
                    const embed = new Discord.MessageEmbed()
                    embed.setTitle(message.author.tag + "** is not actually smiling...**")
                    embed.setColor(0xff0000)
                    embed.setImage("https://cdn.discordapp.com/attachments/718866856772894788/735472052756283412/tenor.gif");
                    embed.setFooter(message.author.tag + " asked the command" + " \nBot made by Baeka#2540 and Kamboo#9639 \nDon't forget to vote to get a secret command ^^")
                    message.channel.send(embed).catch(console.error)
                }
            },
            {
                name: "dance",
                aliases: [],
                description: "Let's dance !",
                category: strUcFirst("happiness"),
                usage: [`${PREFIX}dance`],
                execute: () => {
                    const embed = new Discord.MessageEmbed()
                    embed.setTitle(message.author.tag + "** is dancing**")
                    embed.setColor(0xff0000)
                    var tblDance = ["https://media.tenor.com/images/3695dae3873534b4cebdf2e27105ef73/tenor.gif","https://media.tenor.com/images/4fd49de4149a6d348e04f2465a3970af/tenor.gif","https://media.tenor.com/images/4fd49de4149a6d348e04f2465a3970af/tenor.gif","https://media.tenor.com/images/eb62193a55021822b8f7d6e051ff47ff/tenor.gif","https://media.tenor.com/images/14214b4c77e0de0976427cb43c276024/tenor.gif","https://media.tenor.com/images/b85d1396f931424b789068dc6062970b/tenor.gif","https://media.tenor.com/images/4e1c0924e763dafba58abba6bf7bc741/tenor.gif","https://media.tenor.com/images/d4f36aac64dc38384cb0e66bc91f32fc/tenor.gif", "https://media.tenor.com/images/f775a57b776b455985139447b9411644/tenor.gif","https://media.tenor.com/images/1025b48806942cc38b8e68c63975f955/tenor.gif"]
                    embed.setImage(rand(tblDance))
                    embed.setFooter(message.author.tag + " asked the command" + " \nBot made by Baeka#2540 and Kamboo#9639 \nDon't forget to vote to get a secret command ^^")
                    message.channel.send(embed).catch(console.error)
                }
            },
            {
                name: "cursedance",
                aliases: [],
                description: "Don't you know the meme ?",
                category: strUcFirst("happiness"),
                usage: [`${PREFIX}cursedance`],
                execute: () => {
                    const embed = new Discord.MessageEmbed()
                    embed.setTitle(message.author.tag + "** is cursedancing**")
                    embed.setColor(0xff0000)
                    embed.setImage("https://cdn.discordapp.com/attachments/734071687288717383/734470803671744572/CrabKekW.gif");
                    embed.setFooter(message.author.tag + " asked the command" + " \nBot made by Baeka#2540 and Kamboo#9639 \nDon't forget to vote to get a secret command ^^")
                    message.channel.send(embed).catch(console.error)
                }
            },
            {
                name: "wasted",
                aliases: [],
                description: "Go in a coffin or make someone go in it",
                category: strUcFirst("violence"),
                usage: [`${PREFIX}wasted`, `${PREFIX}wasted <user>`, `${PREFIX}wasted random`],
                execute: () => {
                    let args = message.content.toLowerCase().split(" ").slice(1);
                    const user = message.mentions.users.first();
                    let userNOMENTION = searchMemberID(message.guild.id, args[0]) || searchMemberNick(message.guild.id, args.join(" ")) || searchMemberTag(message.guild.id, args[0]);
                    if (user) {
                        const member = message.guild.member(user);
                        const embed = new Discord.MessageEmbed()
                        embed.setTitle(" **This person is in the coffin: ** " + `${user.tag}` + " !")
                        embed.setColor(0xff0000)
                        embed.setImage("https://cdn.discordapp.com/attachments/734080283170570301/734470411328159805/tenor-1.gif");
                        embed.setFooter(message.author.tag + " asked the command" + " \nBot made by Baeka#2540 and Kamboo#9639 \nDon't forget to vote to get a secret command ^^")
                        message.channel.send(embed).catch(console.error)
                    }
                    else if (userNOMENTION) {
                        const embed = new Discord.MessageEmbed()
                        embed.setTitle(" **This person is in the coffin: ** " + `${userNOMENTION.user.tag}` + " !")
                        embed.setColor(0xff0000)
                        embed.setImage("https://cdn.discordapp.com/attachments/734080283170570301/734470411328159805/tenor-1.gif");
                        embed.setFooter(message.author.tag + " asked the command" + " \nBot made by Baeka#2540 and Kamboo#9639 \nDon't forget to vote to get a secret command ^^")
                        message.channel.send(embed).catch(console.error)
                    }
                    
                    else if(message.content.includes('random')) {
                        const randomMember = message.guild.members.cache.random().user;
                        const embed = new Discord.MessageEmbed()
                        embed.setTitle(" **This person is in the coffin: ** " + `${randomMember.tag}` + " !")
                        embed.setColor(0xff0000)
                        embed.setImage("https://cdn.discordapp.com/attachments/734080283170570301/734470411328159805/tenor-1.gif");
                        embed.setFooter(message.author.tag + " asked the command" + " \nBot made by Baeka#2540 and Kamboo#9639 \nDon't forget to vote to get a secret command ^^")
                        message.channel.send(embed).catch(console.error)
                    }
                    else {
                        const embed = new Discord.MessageEmbed()
                        embed.setTitle(message.author.tag + " **is in the coffin**")
                        embed.setColor(0xff0000)
                        embed.setImage("https://cdn.discordapp.com/attachments/734080283170570301/734470411328159805/tenor-1.gif");
                        embed.setFooter(message.author.tag + " asked the command" + " \nBot made by Baeka#2540 and Kamboo#9639 \nDon't forget to vote to get a secret command ^^")
                        message.channel.send(embed).catch(console.error)
                    }
                }
            },
            {
                name: "slap",
                aliases: [],
                description: "Slap someone who has got you angry.",
                category: strUcFirst("violence"),
                usage: [`${PREFIX}slap <user>`, `${PREFIX}slap random`],
                execute: () => {
                    let args = message.content.toLowerCase().split(" ").slice(1);
                    const user = message.mentions.users.first();
                    let userNOMENTION = searchMemberID(message.guild.id, args[0]) || searchMemberNick(message.guild.id, args.join(" ")) || searchMemberTag(message.guild.id, args[0]);
                    if (user) {
                        const embed = new Discord.MessageEmbed()
                        embed.setTitle(message.author.tag + "** SLAPS **" + `${user.tag}` + " !")
                        embed.setColor(0xff0000)
                        var tblSlap =["https://cdn.weeb.sh/images/rknn7Jtv-.gif","https://media.tenor.com/images/7482494dabaf1c9d262526baeb8f7482/tenor.gif","https://media.tenor.com/images/1d8edce282f3e36abc6b730357d3cea2/tenor.gif","https://media.tenor.com/images/45a27dba6f60c6a8deee02335dd5f1a0/tenor.gif","https://media.tenor.com/images/734d628ba871022bc9ae142035b969b5/tenor.gif","https://media.tenor.com/images/a0c111e14b73a5ff9a876eb6beab6729/tenor.gif","https://media.tenor.com/images/53b846f3cc11c7c5fe358fc6d458901d/tenor.gif","https://media.tenor.com/images/0ecd307be82e5aedbe13215bffbcd675/tenor.gif","https://media.tenor.com/images/47698b115e4185036e95111f81baab45/tenor.gif", "https://media.tenor.com/images/2b983ab0ddc99168b33e18fd1c9b200f/tenor.gif","https://media.tenor.com/images/79c666d38d5494bad25c5c023c0bbc44/tenor.gif","https://media.tenor.com/images/c366bb3a5d7820139646d8cdce96f7a8/tenor.gif","https://media.tenor.com/images/5f2ff2ae7cea4fc3f1e701606dec84f8/tenor.gif"]
                        embed.setImage(rand(tblSlap))
                        embed.setFooter(message.author.tag + " asked the command" + " \nBot made by Baeka#2540 and Kamboo#9639 \nDon't forget to vote to get a secret command ^^")
                        message.channel.send(embed).catch(console.error)
                    }
                    else if (userNOMENTION) {
                        const embed = new Discord.MessageEmbed()
                        embed.setTitle(message.author.tag + "** SLAPS **" + `${userNOMENTION.user.tag}` + " !")
                        embed.setColor(0xff0000)
                        var tblSlap =["https://cdn.weeb.sh/images/rknn7Jtv-.gif","https://media.tenor.com/images/7482494dabaf1c9d262526baeb8f7482/tenor.gif","https://media.tenor.com/images/1d8edce282f3e36abc6b730357d3cea2/tenor.gif","https://media.tenor.com/images/45a27dba6f60c6a8deee02335dd5f1a0/tenor.gif","https://media.tenor.com/images/734d628ba871022bc9ae142035b969b5/tenor.gif","https://media.tenor.com/images/a0c111e14b73a5ff9a876eb6beab6729/tenor.gif","https://media.tenor.com/images/53b846f3cc11c7c5fe358fc6d458901d/tenor.gif","https://media.tenor.com/images/0ecd307be82e5aedbe13215bffbcd675/tenor.gif","https://media.tenor.com/images/47698b115e4185036e95111f81baab45/tenor.gif", "https://media.tenor.com/images/2b983ab0ddc99168b33e18fd1c9b200f/tenor.gif","https://media.tenor.com/images/79c666d38d5494bad25c5c023c0bbc44/tenor.gif","https://media.tenor.com/images/c366bb3a5d7820139646d8cdce96f7a8/tenor.gif","https://media.tenor.com/images/5f2ff2ae7cea4fc3f1e701606dec84f8/tenor.gif"]
                        embed.setImage(rand(tblSlap))
                        embed.setFooter(message.author.tag + " asked the command" + " \nBot made by Baeka#2540 and Kamboo#9639 \nDon't forget to vote to get a secret command ^^")
                        message.channel.send(embed).catch(console.error)
                    }
                    else if(message.content.includes('random')) {
                        const randomMember = message.guild.members.cache.random().user;
                        const embed = new Discord.MessageEmbed()
                        embed.setTitle(message.author.tag + "** SLAPS **" + `${randomMember.tag}` + " !")
                        embed.setColor(0xff0000)
                        var tblSlap =["https://cdn.weeb.sh/images/rknn7Jtv-.gif","https://media.tenor.com/images/7482494dabaf1c9d262526baeb8f7482/tenor.gif","https://media.tenor.com/images/1d8edce282f3e36abc6b730357d3cea2/tenor.gif","https://media.tenor.com/images/45a27dba6f60c6a8deee02335dd5f1a0/tenor.gif","https://media.tenor.com/images/734d628ba871022bc9ae142035b969b5/tenor.gif","https://media.tenor.com/images/a0c111e14b73a5ff9a876eb6beab6729/tenor.gif","https://media.tenor.com/images/53b846f3cc11c7c5fe358fc6d458901d/tenor.gif","https://media.tenor.com/images/0ecd307be82e5aedbe13215bffbcd675/tenor.gif","https://media.tenor.com/images/47698b115e4185036e95111f81baab45/tenor.gif", "https://media.tenor.com/images/2b983ab0ddc99168b33e18fd1c9b200f/tenor.gif","https://media.tenor.com/images/79c666d38d5494bad25c5c023c0bbc44/tenor.gif","https://media.tenor.com/images/c366bb3a5d7820139646d8cdce96f7a8/tenor.gif","https://media.tenor.com/images/5f2ff2ae7cea4fc3f1e701606dec84f8/tenor.gif"]
                        embed.setImage(rand(tblSlap))
                        embed.setFooter(message.author.tag + " asked the command" + " \nBot made by Baeka#2540 and Kamboo#9639 \nDon't forget to vote to get a secret command ^^")
                        message.channel.send(embed).catch(console.error)
                    }
                    else{
                        message.channel.send("`PLS MENTION SOMEONE`")
                        return;
                    }
                }
            },
            {
                name: "bang",
                aliases: [],
                description: "Do you want to bang someone ?",
                category: strUcFirst("violence"),
                usage: [`${PREFIX}bang <user>`, `${PREFIX}bang random`],
                execute: () => {
                    let args = message.content.toLowerCase().split(" ").slice(1);
                    const user = message.mentions.users.first();
                    let userNOMENTION = searchMemberID(message.guild.id, args[0]) || searchMemberNick(message.guild.id, args.join(" ")) || searchMemberTag(message.guild.id, args[0]);
                    if (user)  {
                        const member = message.guild.member(user);
                        const embed = new Discord.MessageEmbed()
                        embed.setTitle(message.author.tag + "** Banged **" + `${user.tag}` + " !")
                        embed.setColor(0xff0000)
                        var tblBang = ["https://cdn.weeb.sh/images/Sy_dXNts-.gif","https://images-ext-2.discordapp.net/external/2hi1l4vo2_plvpNPLknCXZ1bHNxM-Jy8zeEMLkr0bUc/https/images-ext-1.discordapp.net/external/doWdjDLftOtgdSwhlVqnak09e4L8NjIYi3DfDoBB7zU/https/cdn.weeb.sh/images/BJADXEtoZ.gif","https://images-ext-1.discordapp.net/external/EczpBgSeGgBoxTHJFNDec9sybdENUMqDiUgZekJm8gs/https/images-ext-1.discordapp.net/external/Amb4Lx6DGtiK39E0FfLgGxF-F5gtVjX3giBG1hWxtp0/https/cdn.weeb.sh/images/BkvjZI7PW.gif","https://images-ext-1.discordapp.net/external/7-76-UYO-ZsDCvq9F5UTn73OXZBxruk1ayA5qO1geUI/https/images-ext-2.discordapp.net/external/-JnLBmGXhRmiiDyGW7Iu4CfN2F0vhIj1ZgJ1Wnd4qBA/https/cdn.weeb.sh/images/HyZiWLmvb.gif","https://images-ext-2.discordapp.net/external/YoJykjPNHo3yytBX3yJfwrz0wgswGi_pe1DDvaBo8BU/https/images-ext-2.discordapp.net/external/IF5RQJpcOpBuXRzL54ARhYtoiM0vrtKoSox7WyK0AHI/https/cdn.weeb.sh/images/BymCu383W.gif","https://images-ext-2.discordapp.net/external/CB4TAj8IHKoSbtAN_-onrN6gDVDzFQ43qk5LWp6mLCc/https/images-ext-1.discordapp.net/external/dEdeeBIarL5wi1ghNRgsOcb5BT4YPcEyiEINtAwp0po/https/cdn.weeb.sh/images/SJeGENYoW.gif","https://images-ext-1.discordapp.net/external/Hx0Ddgc7VvhHJndM2ut4DSqt0ke-vZFd7ZqFb8ZkpZA/https/images-ext-2.discordapp.net/external/5gXbQvt3wXqbPyUbrZ2u6nTNl57YywUIphaf8HSfZGI/https/cdn.weeb.sh/images/SkFub87DW.gif","https://images-ext-2.discordapp.net/external/KbRL2CIiOwnTJULwjfV-AgLS3YsaqoLwQ3gYQcoavPs/https/images-ext-2.discordapp.net/external/rM6nftudJetEd07WOyo5n0UZKRNE0XxV1hmrL_hEkng/https/cdn.weeb.sh/images/SkiIVEKsW.gif","https://images-ext-2.discordapp.net/external/cPV7Xbvg0HeC4XOhEJQd_-hVweLbLzNzoEh-_4KtoHM/https/images-ext-2.discordapp.net/external/ZCcpcPi56-ovFkC-Xm3l9pYSCeIAoiyO-BfPP_iU_i8/https/cdn.weeb.sh/images/rJmPWI7wW.gif"]
                        embed.setImage(rand(tblBang))
                        embed.setFooter(message.author.tag + " asked the command" + " \nBot made by Baeka#2540 and Kamboo#9639 \nDon't forget to vote to get a secret command ^^")
                        message.channel.send(embed).catch(console.error)
                    }
                    else if (userNOMENTION) {
                        const embed = new Discord.MessageEmbed()
                        embed.setTitle(message.author.tag + "** Banged **" + `${userNOMENTION.user.tag}` + " !")
                        embed.setColor(0xff0000)
                        var tblBang = ["https://cdn.weeb.sh/images/Sy_dXNts-.gif","https://images-ext-2.discordapp.net/external/2hi1l4vo2_plvpNPLknCXZ1bHNxM-Jy8zeEMLkr0bUc/https/images-ext-1.discordapp.net/external/doWdjDLftOtgdSwhlVqnak09e4L8NjIYi3DfDoBB7zU/https/cdn.weeb.sh/images/BJADXEtoZ.gif","https://images-ext-1.discordapp.net/external/EczpBgSeGgBoxTHJFNDec9sybdENUMqDiUgZekJm8gs/https/images-ext-1.discordapp.net/external/Amb4Lx6DGtiK39E0FfLgGxF-F5gtVjX3giBG1hWxtp0/https/cdn.weeb.sh/images/BkvjZI7PW.gif","https://images-ext-1.discordapp.net/external/7-76-UYO-ZsDCvq9F5UTn73OXZBxruk1ayA5qO1geUI/https/images-ext-2.discordapp.net/external/-JnLBmGXhRmiiDyGW7Iu4CfN2F0vhIj1ZgJ1Wnd4qBA/https/cdn.weeb.sh/images/HyZiWLmvb.gif","https://images-ext-2.discordapp.net/external/YoJykjPNHo3yytBX3yJfwrz0wgswGi_pe1DDvaBo8BU/https/images-ext-2.discordapp.net/external/IF5RQJpcOpBuXRzL54ARhYtoiM0vrtKoSox7WyK0AHI/https/cdn.weeb.sh/images/BymCu383W.gif","https://images-ext-2.discordapp.net/external/CB4TAj8IHKoSbtAN_-onrN6gDVDzFQ43qk5LWp6mLCc/https/images-ext-1.discordapp.net/external/dEdeeBIarL5wi1ghNRgsOcb5BT4YPcEyiEINtAwp0po/https/cdn.weeb.sh/images/SJeGENYoW.gif","https://images-ext-1.discordapp.net/external/Hx0Ddgc7VvhHJndM2ut4DSqt0ke-vZFd7ZqFb8ZkpZA/https/images-ext-2.discordapp.net/external/5gXbQvt3wXqbPyUbrZ2u6nTNl57YywUIphaf8HSfZGI/https/cdn.weeb.sh/images/SkFub87DW.gif","https://images-ext-2.discordapp.net/external/KbRL2CIiOwnTJULwjfV-AgLS3YsaqoLwQ3gYQcoavPs/https/images-ext-2.discordapp.net/external/rM6nftudJetEd07WOyo5n0UZKRNE0XxV1hmrL_hEkng/https/cdn.weeb.sh/images/SkiIVEKsW.gif","https://images-ext-2.discordapp.net/external/cPV7Xbvg0HeC4XOhEJQd_-hVweLbLzNzoEh-_4KtoHM/https/images-ext-2.discordapp.net/external/ZCcpcPi56-ovFkC-Xm3l9pYSCeIAoiyO-BfPP_iU_i8/https/cdn.weeb.sh/images/rJmPWI7wW.gif"]
                        embed.setImage(rand(tblBang))
                        embed.setFooter(message.author.tag + " asked the command" + " \nBot made by Baeka#2540 and Kamboo#9639 \nDon't forget to vote to get a secret command ^^")
                        message.channel.send(embed).catch(console.error)
                    }
                    
                    else if(message.content.includes('random')) {
                        const randomMember = message.guild.members.cache.random().user;
                        const embed = new Discord.MessageEmbed()
                        embed.setTitle(message.author.tag + "** Banged **" + `${randomMember.tag}` + " !")
                        embed.setColor(0xff0000)
                        var tblBang = ["https://cdn.weeb.sh/images/Sy_dXNts-.gif","https://images-ext-2.discordapp.net/external/2hi1l4vo2_plvpNPLknCXZ1bHNxM-Jy8zeEMLkr0bUc/https/images-ext-1.discordapp.net/external/doWdjDLftOtgdSwhlVqnak09e4L8NjIYi3DfDoBB7zU/https/cdn.weeb.sh/images/BJADXEtoZ.gif","https://images-ext-1.discordapp.net/external/EczpBgSeGgBoxTHJFNDec9sybdENUMqDiUgZekJm8gs/https/images-ext-1.discordapp.net/external/Amb4Lx6DGtiK39E0FfLgGxF-F5gtVjX3giBG1hWxtp0/https/cdn.weeb.sh/images/BkvjZI7PW.gif","https://images-ext-1.discordapp.net/external/7-76-UYO-ZsDCvq9F5UTn73OXZBxruk1ayA5qO1geUI/https/images-ext-2.discordapp.net/external/-JnLBmGXhRmiiDyGW7Iu4CfN2F0vhIj1ZgJ1Wnd4qBA/https/cdn.weeb.sh/images/HyZiWLmvb.gif","https://images-ext-2.discordapp.net/external/YoJykjPNHo3yytBX3yJfwrz0wgswGi_pe1DDvaBo8BU/https/images-ext-2.discordapp.net/external/IF5RQJpcOpBuXRzL54ARhYtoiM0vrtKoSox7WyK0AHI/https/cdn.weeb.sh/images/BymCu383W.gif","https://images-ext-2.discordapp.net/external/CB4TAj8IHKoSbtAN_-onrN6gDVDzFQ43qk5LWp6mLCc/https/images-ext-1.discordapp.net/external/dEdeeBIarL5wi1ghNRgsOcb5BT4YPcEyiEINtAwp0po/https/cdn.weeb.sh/images/SJeGENYoW.gif","https://images-ext-1.discordapp.net/external/Hx0Ddgc7VvhHJndM2ut4DSqt0ke-vZFd7ZqFb8ZkpZA/https/images-ext-2.discordapp.net/external/5gXbQvt3wXqbPyUbrZ2u6nTNl57YywUIphaf8HSfZGI/https/cdn.weeb.sh/images/SkFub87DW.gif","https://images-ext-2.discordapp.net/external/KbRL2CIiOwnTJULwjfV-AgLS3YsaqoLwQ3gYQcoavPs/https/images-ext-2.discordapp.net/external/rM6nftudJetEd07WOyo5n0UZKRNE0XxV1hmrL_hEkng/https/cdn.weeb.sh/images/SkiIVEKsW.gif","https://images-ext-2.discordapp.net/external/cPV7Xbvg0HeC4XOhEJQd_-hVweLbLzNzoEh-_4KtoHM/https/images-ext-2.discordapp.net/external/ZCcpcPi56-ovFkC-Xm3l9pYSCeIAoiyO-BfPP_iU_i8/https/cdn.weeb.sh/images/rJmPWI7wW.gif"]
                        embed.setImage(rand(tblBang))
                        embed.setFooter(message.author.tag + " asked the command" + " \nBot made by Baeka#2540 and Kamboo#9639 \nDon't forget to vote to get a secret command ^^")
                        message.channel.send(embed).catch(console.error)
                    }
                    else {
                        message.channel.send("`PLS MENTION SOMEONE`")
                        return
                    }
                }
            },
            {
                name: "slice",
                aliases: [],
                description: "Lets cut people up !",
                category: strUcFirst("violence"),
                usage: [`${PREFIX}slice <user>`, `${PREFIX}slice random`],
                execute: () => {
                    let args = message.content.toLowerCase().split(" ").slice(1);
                    const user = message.mentions.users.first();
                    let userNOMENTION = searchMemberID(message.guild.id, args[0]) || searchMemberNick(message.guild.id, args.join(" ")) || searchMemberTag(message.guild.id, args[0]);
                    if (user) {
                        const member = message.guild.member(user);
                        const embed = new Discord.MessageEmbed()
                        embed.setTitle(message.author.tag + "** SLICES **" + `${user.tag}` + " !")
                        embed.setColor(0xff0000)
                        embed.setImage("https://cdn.discordapp.com/attachments/720416431270789184/733683882104324227/ghqy.gif");
                        embed.setFooter(message.author.tag + " asked the command" + " \nBot made by Baeka#2540 and Kamboo#9639 \nDon't forget to vote to get a secret command ^^")
                        message.channel.send(embed).catch(console.error)
                    }
                    else if (userNOMENTION) {
                        const embed = new Discord.MessageEmbed()
                        embed.setTitle(message.author.tag + "** SLICES **" + `${userNOMENTION.user.tag}` + " !")
                        embed.setColor(0xff0000)
                        embed.setImage("https://cdn.discordapp.com/attachments/720416431270789184/733683882104324227/ghqy.gif");
                        embed.setFooter(message.author.tag + " asked the command" + " \nBot made by Baeka#2540 and Kamboo#9639 \nDon't forget to vote to get a secret command ^^")
                        message.channel.send(embed).catch(console.error)
                    }
                    
                    else if(message.content.includes('random')) {
                        const randomMember = message.guild.members.cache.random().user;
                        const embed = new Discord.MessageEmbed()
                        embed.setTitle(message.author.tag + "** SLICES **" + `${randomMember.tag}` + " !")
                        embed.setColor(0xff0000)
                        embed.setImage("https://cdn.discordapp.com/attachments/720416431270789184/733683882104324227/ghqy.gif");
                        embed.setFooter(message.author.tag + " asked the command" + " \nBot made by Baeka#2540 and Kamboo#9639 \nDon't forget to vote to get a secret command ^^")
                        message.channel.send(embed).catch(console.error)
                    }
                    else{
                        message.channel.send("`PLS MENTION SOMEONE`")
                        return
                    }
                }
            },
            {
                name: "kill",
                aliases: [],
                description: "Think carefully before you kill someone. This command can send anyone to the cemetery :coffin: :skull_crossbones: ...",
                category: strUcFirst("violence"),
                usage: [`${PREFIX}kill <user>`, `${PREFIX}kill random`],
                execute: () => {
                    let args = message.content.toLowerCase().split(" ").slice(1);
                    const user = message.mentions.users.first();
                    let userNOMENTION = searchMemberID(message.guild.id, args[0]) || searchMemberNick(message.guild.id, args.join(" ")) || searchMemberTag(message.guild.id, args[0]);
                    if (user) {
                        const member = message.guild.member(user);
                        const embed = new Discord.MessageEmbed()
                        embed.setTitle(message.author.tag + "** KILLS **" + `${user.tag}` + " !")
                        embed.setColor(0xff0000)
                        embed.setImage("https://media.tenor.com/images/f8a0b0df6657ee1cf5d0315268f24f6a/tenor.gif");
                        embed.setFooter(message.author.tag + " asked the command" + " \nBot made by Baeka#2540 and Kamboo#9639 \nDon't forget to vote to get a secret command ^^")
                        message.channel.send(embed).catch(console.error)
                    }
                    else if (userNOMENTION) {
                        const embed = new Discord.MessageEmbed()
                        embed.setTitle(message.author.tag + "** KILLS **" + `${userNOMENTION.user.tag}` + " !")
                        embed.setColor(0xff0000)
                        embed.setImage("https://media.tenor.com/images/f8a0b0df6657ee1cf5d0315268f24f6a/tenor.gif");
                        embed.setFooter(message.author.tag + " asked the command" + " \nBot made by Baeka#2540 and Kamboo#9639 \nDon't forget to vote to get a secret command ^^")
                        message.channel.send(embed).catch(console.error)
                    }
                    else if(message.content.includes('random')) {
                        const randomMember = message.guild.members.cache.random().user;
                        const embed = new Discord.MessageEmbed()
                        embed.setTitle(message.author.tag + "** KILLS **" + `${randomMember.tag}` + " !")
                        embed.setColor(0xff0000)
                        embed.setImage("https://media.tenor.com/images/f8a0b0df6657ee1cf5d0315268f24f6a/tenor.gif");
                        embed.setFooter(message.author.tag + " asked the command" + " \nBot made by Baeka#2540 and Kamboo#9639 \nDon't forget to vote to get a secret command ^^")
                        message.channel.send(embed).catch(console.error)
                    } else {
                        message.channel.send("`PLS MENTION SOMEONE`")
                        return
                    }
                }
            },
            {
                name: "shutup",
                aliases: [],
                description: "Tell someone or unspecified people to **shut up**.",
                category: strUcFirst("unsorted"),
                usage: [`${PREFIX}shutup`, `${PREFIX}shutup <user>`, `${PREFIX}shutup random`],
                execute: () => {
                    let args = message.content.toLowerCase().split(" ").slice(1);
                    const user = message.mentions.users.first();
                    let userNOMENTION = searchMemberID(message.guild.id, args[0]) || searchMemberNick(message.guild.id, args.join(" ")) || searchMemberTag(message.guild.id, args[0]);
                    if (user) {
                        const member = message.guild.member(user);
                        const embed = new Discord.MessageEmbed()
                        embed.setTitle(message.author.tag + "** says shut up to **" + `${user.tag}` + " !")
                        embed.setColor(0xff0000)
                        embed.setImage("https://media.tenor.com/images/58b4099b6fa70a33c95a86d85284fffc/tenor.gif");
                        embed.setFooter(message.author.tag + " asked the command" + " \nBot made by Baeka#2540 and Kamboo#9639 \nDon't forget to vote to get a secret command ^^")
                        message.channel.send(embed).catch(console.error)
                    }
                    else if (userNOMENTION) {
                        const embed = new Discord.MessageEmbed()
                        embed.setTitle(message.author.tag + "** says shut up to **" + `${userNOMENTION.user.tag}` + " !")
                        embed.setColor(0xff0000)
                        embed.setImage("https://media.tenor.com/images/58b4099b6fa70a33c95a86d85284fffc/tenor.gif");
                        embed.setFooter(message.author.tag + " asked the command" + " \nBot made by Baeka#2540 and Kamboo#9639 \nDon't forget to vote to get a secret command ^^")
                        message.channel.send(embed).catch(console.error)
                    }
                    else if(message.content.includes('random')) {
                        const randomMember = message.guild.members.cache.random().user;
                        const embed = new Discord.MessageEmbed()
                        embed.setTitle(message.author.tag + "** says shut up to **" + `${randomMember.tag}` + " !")
                        embed.setColor(0xff0000)
                        embed.setImage("https://media.tenor.com/images/58b4099b6fa70a33c95a86d85284fffc/tenor.gif");
                        embed.setFooter(message.author.tag + " asked the command" + " \nBot made by Baeka#2540 and Kamboo#9639 \nDon't forget to vote to get a secret command ^^")
                        message.channel.send(embed).catch(console.error)
                    } else {
                        const member = message.guild.member(user);
                        const embed = new Discord.MessageEmbed()
                        embed.setTitle(message.author.tag + "** says shut up !")
                        embed.setColor(0xff0000)
                        embed.setImage("https://media.tenor.com/images/58b4099b6fa70a33c95a86d85284fffc/tenor.gif");
                        embed.setFooter(message.author.tag + " asked the command" + " \nBot made by Baeka#2540 and Kamboo#9639 \nDon't forget to vote to get a secret command ^^")
                        message.channel.send(embed).catch(console.error)
                    }
                }
            },
            {
                name: "baka",
                aliases: [],
                description: "Tell someone or unspecified people that they are idiots.",
                category: strUcFirst("unsorted"),
                usage: [`${PREFIX}baka`, `${PREFIX}baka <user>`, `${PREFIX}baka random`],
                execute: () => {
                    let args = message.content.toLowerCase().split(" ").slice(1);
                    const user = message.mentions.users.first();
                    let userNOMENTION = searchMemberID(message.guild.id, args[0]) || searchMemberNick(message.guild.id, args.join(" ")) || searchMemberTag(message.guild.id, args[0]);
                    if (user) {
                        const member = message.guild.member(user);
                        const embed = new Discord.MessageEmbed()
                        embed.setTitle("You are a BAKA, " + `${user.tag}` + " !")
                        embed.setColor(0xff0000)
                        embed.setImage("https://media.tenor.com/images/38fff1193d3535d83a3e4d73f032ef61/tenor.gif");
                        embed.setFooter(message.author.tag + " asked the command" + " \nBot made by Baeka#2540 and Kamboo#9639 \nDon't forget to vote to get a secret command ^^")
                        message.channel.send(embed).catch(console.error)
                    }
                    else if (userNOMENTION) {
                        const embed = new Discord.MessageEmbed()
                        embed.setTitle("You are a BAKA, " + `${userNOMENTION.user.tag}` + " !")
                        embed.setColor(0xff0000)
                        embed.setImage("https://media.tenor.com/images/38fff1193d3535d83a3e4d73f032ef61/tenor.gif");
                        embed.setFooter(message.author.tag + " asked the command" + " \nBot made by Baeka#2540 and Kamboo#9639 \nDon't forget to vote to get a secret command ^^")
                        message.channel.send(embed).catch(console.error)
                    }
                    else if(message.content.includes('random')) {
                        const randomMember = message.guild.members.cache.random().user;
                        const embed = new Discord.MessageEmbed()
                        embed.setTitle("You are a BAKA, " + `${randomMember.tag}` + " !")
                        embed.setColor(0xff0000)
                        embed.setImage("https://media.tenor.com/images/38fff1193d3535d83a3e4d73f032ef61/tenor.gif");
                        embed.setFooter(message.author.tag + " asked the command" + " \nBot made by Baeka#2540 and Kamboo#9639 \nDon't forget to vote to get a secret command ^^")
                        message.channel.send(embed).catch(console.error)
                    } else {
                        const member = message.guild.member(user);
                        const embed = new Discord.MessageEmbed()
                        embed.setTitle("**BAKA!!!!!!! UwU**")
                        embed.setColor(0xff0000)
                        embed.setImage("https://media.tenor.com/images/38fff1193d3535d83a3e4d73f032ef61/tenor.gif");
                        embed.setFooter(message.author.tag + " asked the command" + " \nBot made by Baeka#2540 and Kamboo#9639 \nDon't forget to vote to get a secret command ^^")
                        message.channel.send(embed).catch(console.error)
                    }
                }
            },
            {
                name: "really",
                aliases: [],
                description: "Oh ! Is it true ?",
                category: strUcFirst("unsorted"),
                usage: [`${PREFIX}really`],
                execute: () => {
                    const embed = new Discord.MessageEmbed()
                    embed.setTitle("**OH! REALLY?!**")
                    embed.setColor(0xff0000)
                    embed.setImage("https://media.tenor.com/images/1c3085c712892ce70a3e8af3ccb33b29/tenor.gif");
                    embed.setFooter(message.author.tag + " asked the command" + " \nBot made by Baeka#2540 and Kamboo#9639 \nDon't forget to vote to get a secret command ^^")
                    message.channel.send(embed).catch(console.error)
                }
            },
            {
                name: "shrug",
                aliases: [],
                description: "You don't care about that using this command.",
                category: strUcFirst("unsorted"),
                usage: [`${PREFIX}shrug`],
                execute: () => {
                    const embed = new Discord.MessageEmbed()
                    embed.setTitle(message.author.tag + "** is shruging**")
                    embed.setDescription("For those who are stupid, that meens that " + message.author.tag + " doesn't care UwU!")
                    embed.setColor(0xff0000)
                    embed.setImage("https://cdn.discordapp.com/attachments/735178664324497479/735185183979864085/tenor.gif");
                    embed.setFooter(message.author.tag + " asked the command" + " \nBot made by Baeka#2540 and Kamboo#9639 \nDon't forget to vote to get a secret command ^^")
                    message.channel.send(embed).catch(console.error)
                }
            },
            {
                name: "punch", // ELLE EST PAS AVEC LES AUTRES "violence" JE L'AI OUBLIEE
                aliases: [],
                description: "This command will punch someone with a gif!",
                category: strUcFirst("violence"),
                usage: [`${PREFIX}punch <user>`, `${PREFIX}punch random`],
                execute: () => {
                    let args = message.content.toLowerCase().split(" ").slice(1);
                    const user = message.mentions.users.first();
                    let userNOMENTION = searchMemberID(message.guild.id, args[0]) || searchMemberNick(message.guild.id, args.join(" ")) || searchMemberTag(message.guild.id, args[0]);
                    if (user) {
                        const member = message.guild.member(user);
                        const embed = new Discord.MessageEmbed()
                        embed.setTitle(message.author.tag + "** Punched **" + `${user.tag}` + " !")
                        embed.setColor(0xff0000)
                        var tblPunched = ["https://images-ext-2.discordapp.net/external/KBs-23hBtUx_vQDGDsEkpN0VFImkP-hRO0enX4ZBHQk/https/media.tenor.com/images/6cf02ae40d7f62dd16538a53d35ddbd7/tenor.gif","https://images-ext-2.discordapp.net/external/QcQ458FOkY28trb6fwvm2rj19y7-c-PG-OFljsE7z1g/https/media.tenor.com/images/7eb5ede6402a3fb97ab9fccc81640c2c/tenor.gif","https://images-ext-2.discordapp.net/external/0c2tsmM8w5-2WAHduZhvMy38H1MHHMqcIFl6iOrldcE/https/media.tenor.com/images/61904d1fdbcc0d18595569e8bcc49c5e/tenor.gif","https://images-ext-2.discordapp.net/external/DqIHs2-V5yzbEOgwO4SGDAJYADjA7AJ9VJuL1n5g3SY/https/media.tenor.com/images/5cdcbff8c5bce802d7b65baa711f12f4/tenor.gif","https://images-ext-2.discordapp.net/external/BwtlPKmumCnmCTiohc_m2oVBVk-Tl8dFV_lckFhLm7k/https/media.tenor.com/images/f48c44b3bd26f1f913db0f5a3b2e4e91/tenor.gif","https://images-ext-2.discordapp.net/external/1NPFeAzcvHry7HrybxskpDEr-yQTDCFoA2IF4n3g8Z0/https/media.tenor.com/images/359a3a05dbde06a89cdcf494ad62bb5d/tenor.gif","https://images-ext-1.discordapp.net/external/7nfFgwAO1gh6giD-bcY6JlXr9iaPfwP1Ule0PzRirFg/https/media.tenor.com/images/e4d9dfda188b8ee012f4b0ac12aa9c08/tenor.gif","https://images-ext-2.discordapp.net/external/kyFc128ApuM2cNCkyovYFPxJdwuJ7PN-vJZhJJqwUBE/https/media.tenor.com/images/04f62b7819a22210c0ba411ddb2636a5/tenor.gif","https://images-ext-2.discordapp.net/external/2IdYh8q61tq2X6k1ZjxxgkQ4lDIxc6WcSH6OZCPJpfs/https/media.tenor.com/images/4391e2653987eb148b9e9cbbfe301e31/tenor.gif","https://images-ext-1.discordapp.net/external/848uc_SWBVasMuMW8QtvpqhBC9cnYaGe7AC-E4Qn9yo/https/media.tenor.com/images/18872fc3b8090ce5c7b486665b30cf58/tenor.gif"]
                        embed.setImage(rand(tblPunched))
                        embed.setFooter(message.author.tag + " asked the command" + " \nBot made by Baeka#2540 and Kamboo#9639 \nDon't forget to vote to get a secret command ^^")
                        message.channel.send(embed).catch(console.error)
                    }
                    else if (userNOMENTION) {
                        const embed = new Discord.MessageEmbed()
                        embed.setTitle(message.author.tag + "** Punched **" + `${userNOMENTION.user.tag}` + " !")
                        embed.setColor(0xff0000)
                        var tblPunched = ["https://images-ext-2.discordapp.net/external/KBs-23hBtUx_vQDGDsEkpN0VFImkP-hRO0enX4ZBHQk/https/media.tenor.com/images/6cf02ae40d7f62dd16538a53d35ddbd7/tenor.gif","https://images-ext-2.discordapp.net/external/QcQ458FOkY28trb6fwvm2rj19y7-c-PG-OFljsE7z1g/https/media.tenor.com/images/7eb5ede6402a3fb97ab9fccc81640c2c/tenor.gif","https://images-ext-2.discordapp.net/external/0c2tsmM8w5-2WAHduZhvMy38H1MHHMqcIFl6iOrldcE/https/media.tenor.com/images/61904d1fdbcc0d18595569e8bcc49c5e/tenor.gif","https://images-ext-2.discordapp.net/external/DqIHs2-V5yzbEOgwO4SGDAJYADjA7AJ9VJuL1n5g3SY/https/media.tenor.com/images/5cdcbff8c5bce802d7b65baa711f12f4/tenor.gif","https://images-ext-2.discordapp.net/external/BwtlPKmumCnmCTiohc_m2oVBVk-Tl8dFV_lckFhLm7k/https/media.tenor.com/images/f48c44b3bd26f1f913db0f5a3b2e4e91/tenor.gif","https://images-ext-2.discordapp.net/external/1NPFeAzcvHry7HrybxskpDEr-yQTDCFoA2IF4n3g8Z0/https/media.tenor.com/images/359a3a05dbde06a89cdcf494ad62bb5d/tenor.gif","https://images-ext-1.discordapp.net/external/7nfFgwAO1gh6giD-bcY6JlXr9iaPfwP1Ule0PzRirFg/https/media.tenor.com/images/e4d9dfda188b8ee012f4b0ac12aa9c08/tenor.gif","https://images-ext-2.discordapp.net/external/kyFc128ApuM2cNCkyovYFPxJdwuJ7PN-vJZhJJqwUBE/https/media.tenor.com/images/04f62b7819a22210c0ba411ddb2636a5/tenor.gif","https://images-ext-2.discordapp.net/external/2IdYh8q61tq2X6k1ZjxxgkQ4lDIxc6WcSH6OZCPJpfs/https/media.tenor.com/images/4391e2653987eb148b9e9cbbfe301e31/tenor.gif","https://images-ext-1.discordapp.net/external/848uc_SWBVasMuMW8QtvpqhBC9cnYaGe7AC-E4Qn9yo/https/media.tenor.com/images/18872fc3b8090ce5c7b486665b30cf58/tenor.gif"]
                        embed.setImage(rand(tblPunched))
                        embed.setFooter(message.author.tag + " asked the command" + " \nBot made by Baeka#2540 and Kamboo#9639 \nDon't forget to vote to get a secret command ^^")
                        message.channel.send(embed).catch(console.error)
                    }
                    else if(message.content.includes('random')) {
                        const randomMember = message.guild.members.cache.random().user;
                        const embed = new Discord.MessageEmbed()
                        embed.setTitle(message.author.tag + "** Punched **" + `${randomMember.tag}` + " !")
                        embed.setColor(0xff0000)
                        var tblPunched = ["https://images-ext-2.discordapp.net/external/KBs-23hBtUx_vQDGDsEkpN0VFImkP-hRO0enX4ZBHQk/https/media.tenor.com/images/6cf02ae40d7f62dd16538a53d35ddbd7/tenor.gif","https://images-ext-2.discordapp.net/external/QcQ458FOkY28trb6fwvm2rj19y7-c-PG-OFljsE7z1g/https/media.tenor.com/images/7eb5ede6402a3fb97ab9fccc81640c2c/tenor.gif","https://images-ext-2.discordapp.net/external/0c2tsmM8w5-2WAHduZhvMy38H1MHHMqcIFl6iOrldcE/https/media.tenor.com/images/61904d1fdbcc0d18595569e8bcc49c5e/tenor.gif","https://images-ext-2.discordapp.net/external/DqIHs2-V5yzbEOgwO4SGDAJYADjA7AJ9VJuL1n5g3SY/https/media.tenor.com/images/5cdcbff8c5bce802d7b65baa711f12f4/tenor.gif","https://images-ext-2.discordapp.net/external/BwtlPKmumCnmCTiohc_m2oVBVk-Tl8dFV_lckFhLm7k/https/media.tenor.com/images/f48c44b3bd26f1f913db0f5a3b2e4e91/tenor.gif","https://images-ext-2.discordapp.net/external/1NPFeAzcvHry7HrybxskpDEr-yQTDCFoA2IF4n3g8Z0/https/media.tenor.com/images/359a3a05dbde06a89cdcf494ad62bb5d/tenor.gif","https://images-ext-1.discordapp.net/external/7nfFgwAO1gh6giD-bcY6JlXr9iaPfwP1Ule0PzRirFg/https/media.tenor.com/images/e4d9dfda188b8ee012f4b0ac12aa9c08/tenor.gif","https://images-ext-2.discordapp.net/external/kyFc128ApuM2cNCkyovYFPxJdwuJ7PN-vJZhJJqwUBE/https/media.tenor.com/images/04f62b7819a22210c0ba411ddb2636a5/tenor.gif","https://images-ext-2.discordapp.net/external/2IdYh8q61tq2X6k1ZjxxgkQ4lDIxc6WcSH6OZCPJpfs/https/media.tenor.com/images/4391e2653987eb148b9e9cbbfe301e31/tenor.gif","https://images-ext-1.discordapp.net/external/848uc_SWBVasMuMW8QtvpqhBC9cnYaGe7AC-E4Qn9yo/https/media.tenor.com/images/18872fc3b8090ce5c7b486665b30cf58/tenor.gif"]
                        embed.setImage(rand(tblPunched))
                        embed.setFooter(message.author.tag + " asked the command" + " \nBot made by Baeka#2540 and Kamboo#9639 \nDon't forget to vote to get a secret command ^^")
                        message.channel.send(embed).catch(console.error)
                    } else{
                        message.channel.send("`PLS MENTION SOMEONE`")
                        return
                    }
                }
            },
            {
                name: "sad",
                aliases: [],
                description: "Oooh... How can I console you?",
                category: strUcFirst("unsorted"),
                usage: [`${PREFIX}sad`],
                execute: () => {
                    const embed = new Discord.MessageEmbed()
                    embed.setTitle(message.author.tag + "** is sad...**")
                    embed.setColor(0xff0000)
                    var tblSad = ["https://images-ext-1.discordapp.net/external/GlRcsr2ekrU1K3N2r_0_iprDEbfjFzaHOCKM2m0ryTs/https/media.tenor.com/images/7a139c046d4f9c0363d3ad641192ff0a/tenor.gif?format=png&width=200&height=300","https://images-ext-2.discordapp.net/external/jTOCfliGBNWLoJMRC2zDLgLxo03iUCTqHKpXCfUwhrU/https/media.tenor.com/images/9fb74b3ebc8deb44a4b891ed9d2585ab/tenor.gif","https://images-ext-2.discordapp.net/external/fDsgN64NWHqTOI7JT70VZqKEISP7aHtNURblFZQyUxE/https/media.tenor.com/images/ed89d1e54542d5e1258c83a3eb4832b1/tenor.gif","https://images-ext-1.discordapp.net/external/rWr9sVBjC04sO_gUBVbF8ozMNw7dKwLiRuK6iAimigw/https/media.tenor.com/images/79e93bec3ccc1f3fb4426ff1fc486910/tenor.gif","https://images-ext-1.discordapp.net/external/3WIvep7PvCWJds4Xovmh3NTBpAM-Ye67UE_QPgMTx4E/https/media.tenor.com/images/dcf6e73079e56e64e037d40b291a026b/tenor.gif"]
                    embed.setImage(rand(tblSad))
                    embed.setFooter(message.author.tag + " asked the command" + " \nBot made by Baeka#2540 and Kamboo#9639 \nDon't forget to vote to get a secret command ^^")
                    message.channel.send(embed).catch(console.error)
                }
            },
            {
                name: "cry",
                aliases: [],
                description: "NO NO, no don't cry !",
                category: strUcFirst("unsorted"),
                usage: [`${PREFIX}cry`],
                execute: () => {
                    const embed = new Discord.MessageEmbed()
                    embed.setTitle(message.author.tag + "** sadly cry...**")
                    embed.setColor(0xff0000)
                    var tblCry = ["https://images-ext-1.discordapp.net/external/6rH93XDox3YlacR47JOMCBEXmc5oZj9lDaxzfsnNZEs/https/media.tenor.com/images/eda88aaad47aaab5d861c19a03d73e27/tenor.gif","https://images-ext-2.discordapp.net/external/JHrxYC5OdbcuMVOnN-6Gi-TnluZZ1O5-I7Su9xI5ysk/https/media.tenor.com/images/f0dd9ccbef2cec67fbc9d7c70ec4841f/tenor.gif","https://images-ext-2.discordapp.net/external/1dUieYhPs53-ZCfJWHsD6Y7Iekeg4qkuCiytAKQ73gw/https/media.tenor.com/images/ffe659bb3320241c1ba4279be38d04d3/tenor.gif","https://images-ext-1.discordapp.net/external/BLNT8U4E6H25iQqpEnnNOP1ACUaMnZVdV9TYrtIZ3Ro/https/media.tenor.com/images/e83cd3de32642dedfb7cb67117229d71/tenor.gif","https://images-ext-1.discordapp.net/external/wXXkflsitjctRs1VqdaTaLfRY_1QlHhVU6nkHrQ0Zgc/https/media.tenor.com/images/7ab406bcbfb9bed8fe2b3490a72b4985/tenor.gif","https://images-ext-2.discordapp.net/external/Kb4LUV0fn1SgClj_DvwCSMViCCy7Lr3VyCT_a39wn3U/https/media.tenor.com/images/59b8a07fa301ebbc8ea5315c2c7360c6/tenor.gif","https://images-ext-2.discordapp.net/external/nHvQwTgRGeOliY4XdwKV2LUjTrr0qF2KS5aFDwkXmQI/https/media.tenor.com/images/43169e60ae74758222dae1483ba646d6/tenor.gif","https://images-ext-1.discordapp.net/external/YI0W-D_lglNdtMyiXSmLMEsr3xmsfIFQ63pKZ9Mg3DY/https/media.tenor.com/images/fdd64b8e90b0f13a492247a21aa4df35/tenor.gif","https://images-ext-2.discordapp.net/external/tEgGVC0XP9El7w4165diRnFYlHK4gIZnr7m_-5svs90/https/media.tenor.com/images/54d3fc68bf32ea8144d81ccf5112a927/tenor.gif","https://images-ext-2.discordapp.net/external/Tbuh6f8cqafmguVXGjlyQF6ogLbjFke6mVQmAYDgGAo/https/media.tenor.com/images/b38ee18cf091879abf3f951f03d6cab3/tenor.gif","https://images-ext-1.discordapp.net/external/ss8JhDImEaARWJ4pAUvAfcqwKgcSnDVx7R6ZuWl8MUg/https/media.tenor.com/images/35093d538540dbe21fd0048e9c02a586/tenor.gif","https://images-ext-1.discordapp.net/external/D0It9czoEamWk3zzZfPMSSolPaGg8vPJE0kzH3qI38M/https/media.tenor.com/images/12ddf6299a8c8efc97c9628f0757f953/tenor.gif"]
                    embed.setImage(rand(tblCry))
                    embed.setFooter(message.author.tag + " asked the command" + " \nBot made by Baeka#2540 and Kamboo#9639 \nDon't forget to vote to get a secret command ^^")
                    message.channel.send(embed).catch(console.error)
                }
            },
            {
                name: "bored",
                aliases: [],
                description: "A gif will show others that you are bored.",
                category: strUcFirst("unsorted"),
                usage: [`${PREFIX}bored`],
                execute: () => {
                    const embed = new Discord.MessageEmbed()
                    embed.setTitle(message.author.tag + "** is bored...**")
                    embed.setColor(0xff0000)
                    embed.setImage("https://media.tenor.com/images/af2683bd6361e05c2d04478aca740cd5/tenor.gif");
                    embed.setFooter(message.author.tag + " asked the command" + " \nBot made by Baeka#2540 and Kamboo#9639 \nDon't forget to vote to get a secret command ^^")
                    message.channel.send(embed).catch(console.error)
                }
            },
            {
                name: "bruh",
                aliases: [],
                description: "No comments...",
                category: strUcFirst("unsorted"),
                usage: [`${PREFIX}bruh`],
                execute: () => {
                    const embed = new Discord.MessageEmbed()
                    embed.setTitle(message.author.tag + " **no comments...**")
                    embed.setColor(0xff0000)
                    embed.setImage("https://cdn.discordapp.com/attachments/720416431270789184/733693427723665529/72d42c5.jpg");
                    embed.setFooter(message.author.tag + " asked the command" + " \nBot made by Baeka#2540 and Kamboo#9639 \nDon't forget to vote to get a secret command ^^")
                    message.channel.send(embed).catch(console.error)
                }
            },
            {
                name: "confused",
                aliases: [],
                description: "A gif will show others that you are confused.",
                category: strUcFirst("unsorted"),
                usage: [`${PREFIX}confused`],
                execute: () => {
                    const embed = new Discord.MessageEmbed()
                    embed.setTitle(message.author.tag + "** is confused UwU**")
                    embed.setColor(0xff0000)
                    var tblConfused = ["https://media.tenor.com/images/c2a3a703411d63c75a117d5418ad5faf/tenor.gif","https://media.tenor.com/images/31dce233c6ff83f67b16f534e2a7a226/tenor.gif","https://media.tenor.com/images/9a31b03fa3af17f5c4cfab4900d0b560/tenor.gif","https://media.tenor.com/images/5379e8eb245cb564222f4b5ca18f46f0/tenor.gif", "https://media.tenor.com/images/fa93d52d6f767bbab36dc88ebe86b0fc/tenor.gif", "https://media.tenor.com/images/b0123ae80781b3ca807c8c21101415bd/tenor.gif","https://media.tenor.com/images/2e4c1066bcea144a5956ea4bebe0c0a2/tenor.gif","https://media.tenor.com/images/10eb0ae09d8954bcc0a54c084d23e5fe/tenor.gif","https://media.tenor.com/images/b8b3a7f9d5a7f5a02152137195a7b69f/tenor.gif","https://media.tenor.com/images/5f306b3de3a9574ef9feaf90cd580447/tenor.gif"]
                    embed.setImage(rand(tblConfused))
                    embed.setFooter(message.author.tag + " asked the command" + " \nBot made by Baeka#2540 and Kamboo#9639 \nDon't forget to vote to get a secret command ^^")
                    message.channel.send(embed).catch(console.error)
                }
            },
            {
                name: "afraid", // mais elle aussi ptn elle est déjà passée... snif g fé koi ?? (regarder angry juste en dessous c'est elle qui est déjà passée aussi)
                aliases: [],
                description: "Don't be afraid or I'll send a gif!",
                category: strUcFirst("unsorted"),
                usage: [`${PREFIX}afraid`],
                execute: () => {
                    const embed = new Discord.MessageEmbed()
                    embed.setTitle(message.author.tag + "** is afraid!**")
                    embed.setColor(0xff0000)
                    embed.setImage("https://media.discordapp.net/attachments/744980506151485503/744982747394867301/tenor-5.gif");
                    embed.setFooter(message.author.tag + " asked the command" + " \nBot made by Baeka#2540 and Kamboo#9639 \nDon't forget to vote to get a secret command ^^")
                    message.channel.send(embed).catch(console.error)
                }
            },
            {
                name: "angry", // ptn keskel fout là elle est déjà passée humhum... Bon après tout c'est pas très grave on ferme les yeux '-'...
                aliases: [],
                description: "Don't get angry, I'm going to send a gif",
                category: strUcFirst("unsorted"),
                usage: [`${PREFIX}angry`],
                execute: () => {
                    const embed = new Discord.MessageEmbed()
                    embed.setTitle(message.author.tag + "** is angry!**")
                    embed.setColor(0xff0000)
                    var tblAngry = ["https://media.tenor.com/images/f1c73d36e72343d0e26d4da210155796/tenor.gif","https://media.tenor.com/images/83d8e763888e78e6fce2128f6aa6ea8e/tenor.gif","https://media.tenor.com/images/8a958b9c795c5743d1dc87f6bb06f9c9/tenor.gif","https://media.tenor.com/images/b38ba1fbbc512826c1264b4a8687d98f/tenor.gif","https://media.tenor.com/images/701b52e5b62eca0ce9a1bb6f23f7190e/tenor.gif","https://media.tenor.com/images/e53395c983ab83a7b46737e13fd8addb/tenor.gif","https://media.tenor.com/images/f12ace0eae9f4cea9abe60be72e939fe/tenor.gif","https://media.tenor.com/images/81a16324eb3f26635bc603a3bc829e04/tenor.gif","https://media.tenor.com/images/e7e4d1d009262fc52dca352648e25d64/tenor.gif"]
                    embed.setImage(rand(tblAngry))
                    embed.setFooter(message.author.tag + " asked the command" + " \nBot made by Baeka#2540 and Kamboo#9639 \nDon't forget to vote to get a secret command ^^")
                    message.channel.send(embed).catch(console.error)
                }
            },
            {
                name: "sleep",
                aliases: [],
                description: "Shhhht! I don't want to wake you up!",
                category: strUcFirst("unsorted"),
                usage: [`${PREFIX}sleep`],
                execute: () => {
                    const embed = new Discord.MessageEmbed()
                    embed.setTitle(message.author.tag + "** is sleeping**")
                    embed.setColor(0xff0000)
                    var tblSleep = ["https://media.tenor.com/images/87c1214eb60e46e1ec78520c6c7cd415/tenor.gif","https://media.tenor.com/images/6216fb895a167b823e2659e5e3c198c9/tenor.gif","https://media.tenor.com/images/8ef91f6b2dca2c3c8bb581357083ad47/tenor.gif","https://media.tenor.com/images/d35d9c3e50ef28255a364ca08fa7e66c/tenor.gif","https://media.tenor.com/images/9dda29007e302fa1323e4b614c2e6d8b/tenor.gif","https://media.tenor.com/images/6cace20a510db73d9051f301c8707b4e/tenor.gif","https://media.tenor.com/images/8cfe5499c45aa66792d874ef50c173bc/tenor.gif","https://media.tenor.com/images/73f35419936055719a65f0fbf796f3b3/tenor.gif","https://media.tenor.com/images/0fe423672104cd0ec97e092bc2271a4a/tenor.gif","https://media.tenor.com/images/cda3967d501faafe63a01d73bcf7282e/tenor.gif"]
                    embed.setImage(rand(tblSleep))
                    embed.setFooter(message.author.tag + " asked the command" + " \nBot made by Baeka#2540 and Kamboo#9639 \nDon't forget to vote to get a secret command ^^")
                    message.channel.send(embed).catch(console.error)
                }
            },
            {
                name: "dramatic",
                aliases: [],
                description: "You're being dramtic !!!",
                category: strUcFirst("unsorted"),
                usage: [`${PREFIX}dramatic`],
                execute: () => {
                    const embed = new Discord.MessageEmbed()
                    embed.setTitle(message.author.tag + "** is being dramatic**")
                    embed.setDescription("||It's weird||")
                    embed.setColor(0xff0000)
                    embed.setImage("https://cdn.discordapp.com/attachments/718866856772894788/730796950722707526/DK1V7-3QH99MZ949.gif");
                    embed.setFooter(message.author.tag + " asked the command" + " \nBot made by Baeka#2540 and Kamboo#9639 \nDon't forget to vote to get a secret command ^^")
                    message.channel.send(embed).catch(console.error)
                }
            },
            {
                name: "reverse",
                aliases: ["rev"],
                description: "Do you want to use reverse ?",
                category: strUcFirst("unsorted"),
                usage: [`${PREFIX}reverse`],
                execute: () => {
                    const embed = new Discord.MessageEmbed()
                    embed.setTitle(message.author.tag + " **uses reverse!**")
                    embed.setColor(0xff0000)
                    embed.setImage("https://cdn.discordapp.com/attachments/734080283170570301/734471129460375652/tenor_1.gif");
                    embed.setFooter(message.author.tag + " asked the command" + " \nBot made by Baeka#2540 and Kamboo#9639 \nDon't forget to vote to get a secret command ^^")
                    message.channel.send(embed).catch(console.error)
                }
            },
            {
                name: "pat",
                aliases: [],
                description: "Pat someone (with a gif)",
                category: strUcFirst("love"),
                usage: [`${PREFIX}pat <user>`, `${PREFIX}pat random`],
                execute: () => {
                    let args = message.content.toLowerCase().split(" ").slice(1);
                    const user = message.mentions.users.first();
                    let userNOMENTION = searchMemberID(message.guild.id, args[0]) || searchMemberNick(message.guild.id, args.join(" ")) || searchMemberTag(message.guild.id, args[0]);
                    if (user) {
                        const member = message.guild.member(user);
                        const embed = new Discord.MessageEmbed()
                        embed.setTitle(message.author.tag + " **Pats** " + `${user.tag}`)
                        embed.setColor(0xff0000)
                        var tblPat = ["https://images-ext-2.discordapp.net/external/0kMp89MC22KXc6vhH4ckq-y6kBHAI4mRfbMi5mfvWWE/https/media.tenor.com/images/ad8357e58d35c1d63b570ab7e587f212/tenor.gif","https://images-ext-2.discordapp.net/external/zhBslR5eUMMRjZWa5Hix9E7Tbg8W24ACTxR_GQkdViU/https/media.tenor.com/images/da8431374a530ae516c0cc8f966d1c2b/tenor.gif","https://images-ext-1.discordapp.net/external/usO71iwyvgchy-PaMwfsBzu19usr5p_msWKktBLfsz4/https/media.tenor.com/images/d88e63f03bfcdc37439d95425e10c3fa/tenor.gif","https://images-ext-1.discordapp.net/external/WrK75Z5RFMFkT-fsh-voxj2kz7483-iX1LNQnCxU42o/https/media.tenor.com/images/6cace20a510db73d9051f301c8707b4e/tenor.gif","https://images-ext-1.discordapp.net/external/92vIoSVvAImNz_BGUi_oXSI4Pxe-welvS7hssLJDESA/https/media.tenor.com/images/19c555af496d14808aa5d9bd8277c937/tenor.gif","https://images-ext-2.discordapp.net/external/nujUN0gsxfUuJfgCFSpo6eog4vd2C0eBohhdyeFaNIA/https/media.tenor.com/images/96353d89d27896aa4bf2aa3688632f47/tenor.gif","https://images-ext-1.discordapp.net/external/9IKKiUFRP9uDOxCmzh96FunIzFthDfFu1iMri69n74Y/https/media.tenor.com/images/1d37a873edfeb81a1f5403f4a3bfa185/tenor.gif","https://images-ext-1.discordapp.net/external/tWw2mTzUe-WU42NlHyUXFIyORmr_5Hy0frB3TLw7HEI/https/media.tenor.com/images/7d12c7bc28c3b0330401388102cdcc0f/tenor.gif","https://images-ext-2.discordapp.net/external/k0_FCxieLtrVe9FoSeCcYkJ0TJTYjZMwBVPP3p1kydM/https/media.tenor.com/images/c76912d7b7d52c9ab18fac03feaabc72/tenor.gif","https://images-ext-2.discordapp.net/external/gM0MyTN7FbXKo9dQ_iMZV8QSYE-RPOch8m8rf32f6ts/https/media.tenor.com/images/8613798fb79630b64955e1110fd6b2ea/tenor.gif"]
                        embed.setImage(rand(tblPat))
                        embed.setFooter(message.author.tag + " asked the command" + " \nBot made by Baeka#2540 and Kamboo#9639 \nDon't forget to vote to get a secret command ^^")
                        message.channel.send(embed).catch(console.error)
                    }
                    else if (userNOMENTION) {
                        const embed = new Discord.MessageEmbed()
                        embed.setTitle(message.author.tag + " **Pats** " + `${userNOMENTION.user.tag}`)
                        embed.setColor(0xff0000)
                        var tblPat = ["https://images-ext-2.discordapp.net/external/0kMp89MC22KXc6vhH4ckq-y6kBHAI4mRfbMi5mfvWWE/https/media.tenor.com/images/ad8357e58d35c1d63b570ab7e587f212/tenor.gif","https://images-ext-2.discordapp.net/external/zhBslR5eUMMRjZWa5Hix9E7Tbg8W24ACTxR_GQkdViU/https/media.tenor.com/images/da8431374a530ae516c0cc8f966d1c2b/tenor.gif","https://images-ext-1.discordapp.net/external/usO71iwyvgchy-PaMwfsBzu19usr5p_msWKktBLfsz4/https/media.tenor.com/images/d88e63f03bfcdc37439d95425e10c3fa/tenor.gif","https://images-ext-1.discordapp.net/external/WrK75Z5RFMFkT-fsh-voxj2kz7483-iX1LNQnCxU42o/https/media.tenor.com/images/6cace20a510db73d9051f301c8707b4e/tenor.gif","https://images-ext-1.discordapp.net/external/92vIoSVvAImNz_BGUi_oXSI4Pxe-welvS7hssLJDESA/https/media.tenor.com/images/19c555af496d14808aa5d9bd8277c937/tenor.gif","https://images-ext-2.discordapp.net/external/nujUN0gsxfUuJfgCFSpo6eog4vd2C0eBohhdyeFaNIA/https/media.tenor.com/images/96353d89d27896aa4bf2aa3688632f47/tenor.gif","https://images-ext-1.discordapp.net/external/9IKKiUFRP9uDOxCmzh96FunIzFthDfFu1iMri69n74Y/https/media.tenor.com/images/1d37a873edfeb81a1f5403f4a3bfa185/tenor.gif","https://images-ext-1.discordapp.net/external/tWw2mTzUe-WU42NlHyUXFIyORmr_5Hy0frB3TLw7HEI/https/media.tenor.com/images/7d12c7bc28c3b0330401388102cdcc0f/tenor.gif","https://images-ext-2.discordapp.net/external/k0_FCxieLtrVe9FoSeCcYkJ0TJTYjZMwBVPP3p1kydM/https/media.tenor.com/images/c76912d7b7d52c9ab18fac03feaabc72/tenor.gif","https://images-ext-2.discordapp.net/external/gM0MyTN7FbXKo9dQ_iMZV8QSYE-RPOch8m8rf32f6ts/https/media.tenor.com/images/8613798fb79630b64955e1110fd6b2ea/tenor.gif"]
                        embed.setImage(rand(tblPat))
                        embed.setFooter(message.author.tag + " asked the command" + " \nBot made by Baeka#2540 and Kamboo#9639 \nDon't forget to vote to get a secret command ^^")
                        message.channel.send(embed).catch(console.error)
                    }
                    else if(message.content.includes('random')) {
                        const randomMember = message.guild.members.cache.random().user;
                        const embed = new Discord.MessageEmbed()
                        embed.setTitle(message.author.tag + " **Pats** " + `${randomMember.tag}`)
                        embed.setColor(0xff0000)
                        var tblPat = ["https://images-ext-2.discordapp.net/external/0kMp89MC22KXc6vhH4ckq-y6kBHAI4mRfbMi5mfvWWE/https/media.tenor.com/images/ad8357e58d35c1d63b570ab7e587f212/tenor.gif","https://images-ext-2.discordapp.net/external/zhBslR5eUMMRjZWa5Hix9E7Tbg8W24ACTxR_GQkdViU/https/media.tenor.com/images/da8431374a530ae516c0cc8f966d1c2b/tenor.gif","https://images-ext-1.discordapp.net/external/usO71iwyvgchy-PaMwfsBzu19usr5p_msWKktBLfsz4/https/media.tenor.com/images/d88e63f03bfcdc37439d95425e10c3fa/tenor.gif","https://images-ext-1.discordapp.net/external/WrK75Z5RFMFkT-fsh-voxj2kz7483-iX1LNQnCxU42o/https/media.tenor.com/images/6cace20a510db73d9051f301c8707b4e/tenor.gif","https://images-ext-1.discordapp.net/external/92vIoSVvAImNz_BGUi_oXSI4Pxe-welvS7hssLJDESA/https/media.tenor.com/images/19c555af496d14808aa5d9bd8277c937/tenor.gif","https://images-ext-2.discordapp.net/external/nujUN0gsxfUuJfgCFSpo6eog4vd2C0eBohhdyeFaNIA/https/media.tenor.com/images/96353d89d27896aa4bf2aa3688632f47/tenor.gif","https://images-ext-1.discordapp.net/external/9IKKiUFRP9uDOxCmzh96FunIzFthDfFu1iMri69n74Y/https/media.tenor.com/images/1d37a873edfeb81a1f5403f4a3bfa185/tenor.gif","https://images-ext-1.discordapp.net/external/tWw2mTzUe-WU42NlHyUXFIyORmr_5Hy0frB3TLw7HEI/https/media.tenor.com/images/7d12c7bc28c3b0330401388102cdcc0f/tenor.gif","https://images-ext-2.discordapp.net/external/k0_FCxieLtrVe9FoSeCcYkJ0TJTYjZMwBVPP3p1kydM/https/media.tenor.com/images/c76912d7b7d52c9ab18fac03feaabc72/tenor.gif","https://images-ext-2.discordapp.net/external/gM0MyTN7FbXKo9dQ_iMZV8QSYE-RPOch8m8rf32f6ts/https/media.tenor.com/images/8613798fb79630b64955e1110fd6b2ea/tenor.gif"]
                        embed.setImage(rand(tblPat))
                        embed.setFooter(message.author.tag + " asked the command" + " \nBot made by Baeka#2540 and Kamboo#9639 \nDon't forget to vote to get a secret command ^^")
                        message.channel.send(embed).catch(console.error)
                    } else {
                        message.channel.send("`PLS MENTION SOMEONE`")
                        return
                    }
                }
            },
            {
                name: "proud",
                aliases: [],
                description: "A gif will show others that you are proud (of yourself or someone else)!",
                category: strUcFirst("unsorted"),
                usage: [`${PREFIX}proud`, `${PREFIX}proud <user>`],
                execute: () => {
                    let args = message.content.toLowerCase().split(" ").slice(1);
                    const user = message.mentions.users.first();
                    let userNOMENTION = searchMemberID(message.guild.id, args[0]) || searchMemberNick(message.guild.id, args.join(" ")) || searchMemberTag(message.guild.id, args[0]);
                    if (user) {
                        const member = message.guild.member(user);
                        const embed = new Discord.MessageEmbed()
                        embed.setTitle(message.author.tag + " **is proud of** " + `${user.tag}` + " !")
                        embed.setColor(0xff0000)
                        embed.setImage("https://media.tenor.com/images/0abadb772a5d4740251ac5626c875386/tenor.gif");
                        embed.setFooter(message.author.tag + " asked the command" + " \nBot made by Baeka#2540 and Kamboo#9639 \nDon't forget to vote to get a secret command ^^")
                        message.channel.send(embed).catch(console.error)
                    }
                    else if (userNOMENTION) {
                        const embed = new Discord.MessageEmbed()
                        embed.setTitle(message.author.tag + " **is proud of** " + `${userNOMENTION.user.tag}` + " !")
                        embed.setColor(0xff0000)
                        embed.setImage("https://media.tenor.com/images/0abadb772a5d4740251ac5626c875386/tenor.gif");
                        embed.setFooter(message.author.tag + " asked the command" + " \nBot made by Baeka#2540 and Kamboo#9639 \nDon't forget to vote to get a secret command ^^")
                        message.channel.send(embed).catch(console.error)
                    } else {
                        const embed = new Discord.MessageEmbed()
                        embed.setTitle(message.author.tag + " **is proud !!**")
                        embed.setColor(0xff0000)
                        embed.setImage("https://media.tenor.com/images/8c806527158bee55b2ff98f371fb66cf/tenor.gif");
                        embed.setFooter(message.author.tag + "asked the command" + " \n  Bot made by Baeka#2540 and Kambo#9639")
                        message.channel.send(embed).catch(console.error)
                    }
                }
            },
            {
                name: "stare",
                aliases: [],
                description: "You're staring at someone with my gifs!",
                category: strUcFirst("unsorted"),
                usage: [`${PREFIX}stare <user>`, `${PREFIX}stare random`],
                execute: () => {
                    let args = message.content.toLowerCase().split(" ").slice(1);
                    const user = message.mentions.users.first();
                    let userNOMENTION = searchMemberID(message.guild.id, args[0]) || searchMemberNick(message.guild.id, args.join(" ")) || searchMemberTag(message.guild.id, args[0]);
                    if (user) {
                        const member = message.guild.member(user);
                        const embed = new Discord.MessageEmbed()
                        embed.setTitle(message.author.tag + " **stares at** " + `${user.tag}`)
                        embed.setColor(0xff0000)
                        var tblStare =["https://media.tenor.com/images/630e8b2d5267535da4173b4d85e6ace2/tenor.gif","https://media.tenor.com/images/3033a89d8a72223de0a6dcb91480c3b8/tenor.gif","https://media.tenor.com/images/a1f120ad205fe365ee92fe3ecb724755/tenor.gif","https://media.tenor.com/images/be831f8c1dcc59d0cefbcc28dae315cf/tenor.gif","https://media.tenor.com/images/30a3c27225dda6e09ea14df7bc05e936/tenor.gif","https://media.tenor.com/images/40848b695905c36096a227f12d7342f2/tenor.gif","https://media.tenor.com/images/b3573dbe2ef0d8dabcec0fc8ffa8154e/tenor.gif","https://media.tenor.com/images/cb41da67d8fa1f095d8ab921cebc0f11/tenor.gif","https://media.tenor.com/images/bb6da883826ff024d5d720bc2b6d78fb/tenor.gif","https://media.tenor.com/images/f17583ef992d878d23fb7b0a85115838/tenor.gif","https://media.tenor.com/images/635ef94bec00c61dba2ea252727f43f1/tenor.gif"]
                        embed.setImage(rand(tblStare))
                        embed.setFooter(message.author.tag + " asked the command" + " \nBot made by Baeka#2540 and Kamboo#9639 \nDon't forget to vote to get a secret command ^^")
                        message.channel.send(embed).catch(console.error)
                    }
                    else if (userNOMENTION) {
                        const embed = new Discord.MessageEmbed()
                        embed.setTitle(message.author.tag + " **stares at** " + `${userNOMENTION.user.tag}`)
                        embed.setColor(0xff0000)
                        var tblStare =["https://media.tenor.com/images/630e8b2d5267535da4173b4d85e6ace2/tenor.gif","https://media.tenor.com/images/3033a89d8a72223de0a6dcb91480c3b8/tenor.gif","https://media.tenor.com/images/a1f120ad205fe365ee92fe3ecb724755/tenor.gif","https://media.tenor.com/images/be831f8c1dcc59d0cefbcc28dae315cf/tenor.gif","https://media.tenor.com/images/30a3c27225dda6e09ea14df7bc05e936/tenor.gif","https://media.tenor.com/images/40848b695905c36096a227f12d7342f2/tenor.gif","https://media.tenor.com/images/b3573dbe2ef0d8dabcec0fc8ffa8154e/tenor.gif","https://media.tenor.com/images/cb41da67d8fa1f095d8ab921cebc0f11/tenor.gif","https://media.tenor.com/images/bb6da883826ff024d5d720bc2b6d78fb/tenor.gif","https://media.tenor.com/images/f17583ef992d878d23fb7b0a85115838/tenor.gif","https://media.tenor.com/images/635ef94bec00c61dba2ea252727f43f1/tenor.gif"]
                        embed.setImage(rand(tblStare))
                        embed.setFooter(message.author.tag + " asked the command" + " \nBot made by Baeka#2540 and Kamboo#9639 \nDon't forget to vote to get a secret command ^^")
                        message.channel.send(embed).catch(console.error)
                    }
                    else if(message.content.includes('random')) {
                        const randomMember = message.guild.members.cache.random().user;
                        const embed = new Discord.MessageEmbed()
                        embed.setTitle(message.author.tag + " **stares at** " + `${randomMember.tag}`)
                        embed.setColor(0xff0000)
                        var tblStare =["https://media.tenor.com/images/630e8b2d5267535da4173b4d85e6ace2/tenor.gif","https://media.tenor.com/images/3033a89d8a72223de0a6dcb91480c3b8/tenor.gif","https://media.tenor.com/images/a1f120ad205fe365ee92fe3ecb724755/tenor.gif","https://media.tenor.com/images/be831f8c1dcc59d0cefbcc28dae315cf/tenor.gif","https://media.tenor.com/images/30a3c27225dda6e09ea14df7bc05e936/tenor.gif","https://media.tenor.com/images/40848b695905c36096a227f12d7342f2/tenor.gif","https://media.tenor.com/images/b3573dbe2ef0d8dabcec0fc8ffa8154e/tenor.gif","https://media.tenor.com/images/cb41da67d8fa1f095d8ab921cebc0f11/tenor.gif","https://media.tenor.com/images/bb6da883826ff024d5d720bc2b6d78fb/tenor.gif","https://media.tenor.com/images/f17583ef992d878d23fb7b0a85115838/tenor.gif","https://media.tenor.com/images/635ef94bec00c61dba2ea252727f43f1/tenor.gif"]
                        embed.setImage(rand(tblStare))
                        embed.setFooter(message.author.tag + " asked the command" + " \nBot made by Baeka#2540 and Kamboo#9639 \nDon't forget to vote to get a secret command ^^")
                        message.channel.send(embed).catch(console.error)
                    } else {
                        message.channel.send("`PLS MENTION SOMEONE`")
                        return
                    }
                }
            },
            {
                name: "givecookie",
                aliases: [],
                description: "You're giving a cookie to someone.",
                category: strUcFirst("unsorted"),
                usage: [`${PREFIX}givecookie <user>`, `${PREFIX}givecookie random`],
                execute: () => {
                    let args = message.content.toLowerCase().split(" ").slice(1);
                    const user = message.mentions.users.first();
                    let userNOMENTION = searchMemberID(message.guild.id, args[0]) || searchMemberNick(message.guild.id, args.join(" ")) || searchMemberTag(message.guild.id, args[0]);
                    if (user) {
                        const member = message.guild.member(user);
                        const embed = new Discord.MessageEmbed()
                        embed.setTitle(message.author.tag + " **gave a cookie to ** " + `${user.tag}`)
                        embed.setColor(0xff0000)
                        embed.setImage("https://media.tenor.com/images/ee95120701a9ec4046dd4f87e51921a0/tenor.gif");
                        embed.setFooter(message.author.tag + " asked the command" + " \nBot made by Baeka#2540 and Kamboo#9639 \nDon't forget to vote to get a secret command ^^")
                        message.channel.send(embed).catch(console.error)
                    }
                    else if (userNOMENTION) {
                        const embed = new Discord.MessageEmbed()
                        embed.setTitle(message.author.tag + " **gave a cookie to ** " + `${userNOMENTION.user.tag}`)
                        embed.setColor(0xff0000)
                        embed.setImage("https://media.tenor.com/images/ee95120701a9ec4046dd4f87e51921a0/tenor.gif");
                        embed.setFooter(message.author.tag + " asked the command" + " \nBot made by Baeka#2540 and Kamboo#9639 \nDon't forget to vote to get a secret command ^^")
                        message.channel.send(embed).catch(console.error)
                    }
                    else if(message.content.includes('random')) {
                        const randomMember = message.guild.members.cache.random().user;
                        const embed = new Discord.MessageEmbed()
                        embed.setTitle(message.author.tag + " **gave a cookie to ** " + `${randomMember.tag}`)
                        embed.setColor(0xff0000)
                        embed.setImage("https://media.tenor.com/images/ee95120701a9ec4046dd4f87e51921a0/tenor.gif");
                        embed.setFooter(message.author.tag + " asked the command" + " \nBot made by Baeka#2540 and Kamboo#9639 \nDon't forget to vote to get a secret command ^^")
                        message.channel.send(embed).catch(console.error)
                    } else {
                        message.channel.send("`PLS MENTION SOMEONE`")
                        return
                    }
                }
            },
            {
                name: "feed",
                aliases: [],
                description: "It's very nice to feed someone!",
                category: strUcFirst("unsorted"),
                usage: [`${PREFIX}feed <user>`, `${PREFIX}feed random`],
                execute: () => {
                    let args = message.content.toLowerCase().split(" ").slice(1);
                    const user = message.mentions.users.first();
                    let userNOMENTION = searchMemberID(message.guild.id, args[0]) || searchMemberNick(message.guild.id, args.join(" ")) || searchMemberTag(message.guild.id, args[0]);
                    if (user) {
                        const embed = new Discord.MessageEmbed()
                        embed.setTitle(message.author.tag + " **feeds** " + `${user.tag}`)
                        embed.setColor(0xff0000)
                        var tblFeed = ["https://media.tenor.com/images/a6e82eba4b87d830fc3063f15d93f5fc/tenor.gif","https://media.tenor.com/images/846c25f5889844fc046103310d63a955/tenor.gif","https://media.tenor.com/images/6333e170ce611e616f98f0ebfd5d9059/tenor.gif","https://media.tenor.com/images/28a0f999392b65149a77a7e0270ee280/tenor.gif","https://media.tenor.com/images/54112765b2c1b359ffc5f55bd0661b93/tenor.gif","https://media.tenor.com/images/dd8cd4583c8848b9addd2c78e1a5f8ff/tenor.gif","https://images-ext-1.discordapp.net/external/clGX4GPfQr7wXPh62n5oPNpA7goIQuqTznDAJypvgJc/https/cdn.nekos.life/feed/feed_001.gif","https://images-ext-1.discordapp.net/external/R2EuaHKBCm3sUEzd4KqMuAoj12ffsIKbynzl8K8v2ro/https/cdn.nekos.life/feed/feed_005.gif","https://media.tenor.com/images/9be673d59d0be538041c86b5cde8354d/tenor.gif","https://media.tenor.com/images/452ec70a872dea26b3647a7c6b5c9c49/tenor.gif"]
                        embed.setImage(rand(tblFeed))
                        embed.setFooter(message.author.tag + " asked the command" + " \nBot made by Baeka#2540 and Kamboo#9639 \nDon't forget to vote to get a secret command ^^")
                        message.channel.send(embed).catch(console.error)
                    }
                    else if (userNOMENTION) {
                        const embed = new Discord.MessageEmbed()
                        embed.setTitle(message.author.tag + " **feeds** " + `${userNOMENTION.user.tag}`)
                        embed.setColor(0xff0000)
                        var tblFeed = ["https://media.tenor.com/images/a6e82eba4b87d830fc3063f15d93f5fc/tenor.gif","https://media.tenor.com/images/846c25f5889844fc046103310d63a955/tenor.gif","https://media.tenor.com/images/6333e170ce611e616f98f0ebfd5d9059/tenor.gif","https://media.tenor.com/images/28a0f999392b65149a77a7e0270ee280/tenor.gif","https://media.tenor.com/images/54112765b2c1b359ffc5f55bd0661b93/tenor.gif","https://media.tenor.com/images/dd8cd4583c8848b9addd2c78e1a5f8ff/tenor.gif","https://images-ext-1.discordapp.net/external/clGX4GPfQr7wXPh62n5oPNpA7goIQuqTznDAJypvgJc/https/cdn.nekos.life/feed/feed_001.gif","https://images-ext-1.discordapp.net/external/R2EuaHKBCm3sUEzd4KqMuAoj12ffsIKbynzl8K8v2ro/https/cdn.nekos.life/feed/feed_005.gif","https://media.tenor.com/images/9be673d59d0be538041c86b5cde8354d/tenor.gif","https://media.tenor.com/images/452ec70a872dea26b3647a7c6b5c9c49/tenor.gif"]
                        embed.setImage(rand(tblFeed))
                        embed.setFooter(message.author.tag + " asked the command" + " \nBot made by Baeka#2540 and Kamboo#9639 \nDon't forget to vote to get a secret command ^^")
                        message.channel.send(embed).catch(console.error)
                    }
                    else if(message.content.includes('random')) {
                        const randomMember = message.guild.members.cache.random().user;
                        const embed = new Discord.MessageEmbed()
                        embed.setTitle(message.author.tag + " **feeds** " + `${randomMember.tag}`)
                        embed.setColor(0xff0000)
                        var tblFeed = ["https://media.tenor.com/images/a6e82eba4b87d830fc3063f15d93f5fc/tenor.gif","https://media.tenor.com/images/846c25f5889844fc046103310d63a955/tenor.gif","https://media.tenor.com/images/6333e170ce611e616f98f0ebfd5d9059/tenor.gif","https://media.tenor.com/images/28a0f999392b65149a77a7e0270ee280/tenor.gif","https://media.tenor.com/images/54112765b2c1b359ffc5f55bd0661b93/tenor.gif","https://media.tenor.com/images/dd8cd4583c8848b9addd2c78e1a5f8ff/tenor.gif","https://images-ext-1.discordapp.net/external/clGX4GPfQr7wXPh62n5oPNpA7goIQuqTznDAJypvgJc/https/cdn.nekos.life/feed/feed_001.gif","https://images-ext-1.discordapp.net/external/R2EuaHKBCm3sUEzd4KqMuAoj12ffsIKbynzl8K8v2ro/https/cdn.nekos.life/feed/feed_005.gif","https://media.tenor.com/images/9be673d59d0be538041c86b5cde8354d/tenor.gif","https://media.tenor.com/images/452ec70a872dea26b3647a7c6b5c9c49/tenor.gif"]
                        embed.setImage(rand(tblFeed))
                        embed.setFooter(message.author.tag + " asked the command" + " \nBot made by Baeka#2540 and Kamboo#9639 \nDon't forget to vote to get a secret command ^^")
                        message.channel.send(embed).catch(console.error)
                    } else {
                        message.channel.send("`PLS MENTION SOMEONE`")
                        return
                    }
                }
            },
            {
                name: "run",
                aliases: [],
                description: "**RUUUUUUUUUUUUUUUUUUN !!!!!!!**",
                category: strUcFirst("unsorted"),
                usage: [`${PREFIX}run`],
                execute: () => {
                    const embed = new Discord.MessageEmbed()
                    embed.setTitle(message.author.tag + " **is runnig away!**")
                    embed.setColor(0xff0000)
                    embed.setImage("https://cdn.discordapp.com/attachments/734071116129370172/735208506931675226/anime-run-gif-13.gif");
                    embed.setFooter(message.author.tag + " asked the command" + " \nBot made by Baeka#2540 and Kamboo#9639 \nDon't forget to vote to get a secret command ^^")
                    message.channel.send(embed).catch(console.error)
                }
            },
            {
                name: "exited",
                aliases: [],
                description: "STOP MOVIIIING !!!!!!!",
                category: strUcFirst("exited"),
                usage: [`${PREFIX}exited`],
                execute: () => {
                    const embed = new Discord.MessageEmbed()
                    embed.setTitle(message.author.tag + " **is exited!**")
                    embed.setColor(0xff0000)
                    embed.setImage("https://media.tenor.com/images/0c67273e3d85c332751f381e878d8f08/tenor.gif");
                    embed.setFooter(message.author.tag + " asked the command" + " \nBot made by Baeka#2540 and Kamboo#9639 \nDon't forget to vote to get a secret command ^^")
                    message.channel.send(embed).catch(console.error)
                }
            },
            {
                name: "random",
                aliases: [],
                description: "This command works again ! Sends a random command from aaaall the bot's commands. It's better to ask `AJ!random <user>` because the bot has a lot of commands with mentions only and if not he'll answer `PLS MENTION SOMEONE`.",
                category: "unsorted",
                usage: [`${PREFIX}random`, `${PREFIX}random <user>`],
                execute: () => {
                    let cmdAl = rand(COMMANDS);
                    cmdAl.execute();
                }
            },
            {
                name: "tags",
                aliases: [],
                description: "Send the names of all users who have the same tag (#xxxx) as you.",
                category: strUcFirst("info | About the bot"),
                usage: [`${PREFIX}tags`, `${PREFIX}tags <user>`, `${PREFIX}tags <xxxx>`],
                execute: () => {
                    let args = message.content.toLowerCase().split(" ").slice(1);
                    const user = message.mentions.users.first();
                    let userNOMENTION = searchMemberID(message.guild.id, args[0]) || searchMemberNick(message.guild.id, args.join(" ")) || searchMemberTag(message.guild.id, args[0]);
                    if (user) {
                        let taghashMention = user.tag.substring(user.username.length);
                        let userSameTagMention = client.users.cache.filter(u => u.tag.endsWith(taghashMention));
                        let usersTagMention = userSameTagMention.array();
                        var tagsUsersStringM = [];
                        usersTagMention.forEach(userM => tagsUsersStringM.push(userM.tag));
                        const embedSameTagMention = new Discord.MessageEmbed()
                        .setDescription(tagsUsersStringM.sort().join('\n'))
                        .setColor(0xff0000);
                        message.channel.send(embedSameTagMention);
                    }
                    else if (userNOMENTION) {
                        let taghashMention = userNOMENTION.user.tag.substring(userNOMENTION.user.username.length);
                        let userSameTagMention = client.users.cache.filter(u => u.tag.endsWith(taghashMention));
                        let usersTagMention = userSameTagMention.array();
                        var tagsUsersStringM = [];
                        usersTagMention.forEach(userM => tagsUsersStringM.push(userM.tag));
                        const embedSameTagMention = new Discord.MessageEmbed()
                        .setDescription(tagsUsersStringM.sort().join('\n'))
                        .setColor(0xff0000);
                        message.channel.send(embedSameTagMention);
                    }
                    else if (args[0].startsWith('#')) {
                        let taghashMention = args[0];
                        let userSameTagMention = client.users.cache.filter(u => u.tag.endsWith(taghashMention));
                        let usersTagMention = userSameTagMention.array();
                        var tagsUsersStringM = [];
                        usersTagMention.forEach(userM => tagsUsersStringM.push(userM.tag));
                        const embedSameTagMention = new Discord.MessageEmbed()
                        .setDescription(tagsUsersStringM.sort().join('\n'))
                        .setColor(0xff0000);
                        message.channel.send(embedSameTagMention);
                    }
                    else {
                        let taghash = message.author.tag.substring(message.author.username.length);
                        let userSameTag = client.users.cache.filter(u => u.tag.endsWith(taghash));
                        let usersTagPing = userSameTag.array();
                        var tagsUsersString = [];
                        usersTagPing.forEach(user => tagsUsersString.push(user.tag));
                        const embedSameTag = new Discord.MessageEmbed()
                        .setDescription(tagsUsersString.sort().join('\n'))
                        .setColor(0xff0000);
                        message.channel.send(embedSameTag);
                    }
                }
            },
            {
                name: "happy",
                aliases: [],
                description: "We're glad that ur happy :)",
                category: strUcFirst("happiness"),
                usage: [`${PREFIX}happy`],
                execute: () => {
                    let tblHappy = ["https://media.tenor.com/images/890933821d3b6f9b90e195e1fa3908e2/tenor.gif", "https://media.tenor.com/images/d62e090630ff6829fda329b86ea723e0/tenor.gif", "https://media.tenor.com/images/c9009da749cdc444ed32f0b87e94ce10/tenor.gif", "https://media1.tenor.com/images/aff48b5d06ebb76fef6e067e0e4d9fc0/tenor.gif?itemid=9528804", "https://media.tenor.com/images/6cbcf523bf357411ff874e288239d073/tenor.gif"]
                    const embed = new Discord.MessageEmbed()
                    .setTitle(message.author.tag + " **is happy :)**")
                    .setColor(0xff0000)
                    .setImage(rand(tblHappy))
                    .setFooter(message.author.tag + " asked the command" + " \nBot made by Baeka#2540 and Kamboo#9639 \nDon't forget to vote to get a secret command ^^")
                    message.channel.send(embed).catch(console.error);
                }
            },
            {
                name: "tweet",
                aliases: [],
                description: "Post something on tweeter!",
                category: "image",
                usage: [`${PREFIX}tweet <text>`],
            	execute: async() => {
                    let args = message.content.slice(PREFIX.length).trim().split(" ").slice(1);
                    message.reply(" if the bot doesn't send aything it's maybe because you have a special caracter in your discord tag.").then(message => {message.delete({ timeout: 10000 })})
                    let fetch = require('node-fetch');
                    fetch(`https://nekobot.xyz/api/imagegen?type=tweet&username=${message.author.username}&text=${args.join(' ')}`)
                        .then((res) => res.json())
                        .then((data) => {
                        let embed = new Discord.MessageEmbed()
                        .setTitle("Tweet!")
                        .setImage(data.message)
                        .setColor(0xff0000)
                        .setFooter(message.author.tag + " asked the command" + " \nBot made by Baeka#2540 and Kamboo#9639 \nDon't forget to vote to get a secret command ^^");
                        message.channel.send(embed);
                    })
                }
            },
            {
                name: "deepfry",
                aliases: [],
                description: "Horrible",
                category: "image",
                usage: [`${PREFIX}deepfry`, `${PREFIX}deepfry <user>`, `${PREFIX}deepfry <image>`],
            	execute: async() => {
                    let args = message.content.slice(PREFIX.length).trim().split(" ").slice(1);
                    let user = message.mentions.users.first() || message.author || searchMemberID(message.guild.id, args[0]).user || searchMemberNick(message.guild.id, args.join(" ")).user || searchMemberTag(message.guild.id, args[0]).user;
                    let image = message.attachments.first().url || user.displayAvatarURL();
                    let fetch = require('node-fetch');
                    fetch(`https://nekobot.xyz/api/imagegen?type=deepfry&image=${image}`)
                        .then((res) => res.json())
                        .then((data) => {
                        let embed = new Discord.MessageEmbed()
                        .setTitle("Deepfry:")
                        .setImage(data.message)
                        .setColor(0xff0000)
                        .setFooter(message.author.tag + " asked the command" + " \nBot made by Baeka#2540 and Kamboo#9639 \nDon't forget to vote to get a secret command ^^");
                        message.channel.send(embed);
                    })
                }
            },
            {
                name: "date",
                aliases: [],
                description: "A date for lovers :heart: .",
                category: "image",
                usage: [`${PREFIX}date <user1> <user2>`],
                execute: async() => {
                    let args = message.content.slice(PREFIX.length).trim().split(" ");

                    let member1 = message.mentions.members.first();
                    let member2 = message.mentions.members.last();
                    if (!member1 || !member2) return message.channel.send("`PLS MENTION SOMEONE`");
                    
                    let avatar1 = member1.user.displayAvatarURL({ dynamic: false, format: 'png', size: 4096 });
                    let avatar2 = member2.user.displayAvatarURL({ dynamic: false, format: 'png', size: 4096 });
                    let avatar1Cerlce = await canvacord.Canvas.circle(avatar1)
                    let avatar2Cerlce = await canvacord.Canvas.circle(avatar2)
                    let image = await canvacord.Canvas.kiss(avatar1Cerlce, avatar2Cerlce);
                    let attachment = new Discord.MessageAttachment(image, "ajbot-date.png");
                    message.channel.send(attachment);
                }
            },
            {
                name: "triggered",
                aliases: ["trigger"],
                description: "Sends a triggered picture of your image.",
                category: "image",
                usage: [`${PREFIX}triggered`, `${PREFIX}triggered <user>`, `${PREFIX}triggered <image>`, `${PREFIX}triggered random`],
                execute: async() => {
                    let args = message.content.slice(PREFIX.length).trim().split(" ");

                    let member = message.content.toLowerCase().endsWith('random') ? randomMember(message.guild.id) : message.mentions.members.first() || searchMember(message.guild.id, args.slice(1).join(" ").toLowerCase()) || message.member;
                    let avatar = message.attachments.first() ? message.attachments.first().url : member.user.displayAvatarURL({ dynamic: false, format: 'png', size: 4096 });
                    let image = await canvacord.Canvas.trigger(avatar);
                    let attachment = new Discord.MessageAttachment(image, "ajbot-triggered.gif");
                    message.channel.send(attachment);
                }
            },
            {
                name: "facepalm",
                aliases: [":facepalming:"],
                description: "Facepalms given image :facepalm:.",
                category: "image",
                usage: [`${PREFIX}facepalm`, `${PREFIX}facepalm <user>`, `${PREFIX}facepalm random`],
                execute: async() => {
                    let args = message.content.slice(PREFIX.length).trim().split(" ");

                    let member = message.content.toLowerCase().endsWith('random') ? randomMember(message.guild.id) : message.mentions.members.first() || searchMember(message.guild.id, args.slice(1).join(" ").toLowerCase()) || message.member;
                    let avatar = member.user.displayAvatarURL({ dynamic: false, format: 'png', size: 4096 });
                    let image = await canvacord.Canvas.facepalm(avatar);
                    let attachment = new Discord.MessageAttachment(image, "ajbot-facepalm.png");
                    message.channel.send(attachment);
                }
            },
            {
                name: "brightness",
                aliases: [],
                description: "Adjusts given image brightness.",
                category: "image",
                usage: [`${PREFIX}brightness \[amount\]`, `${PREFIX}brightness \[amount\] <user>`, `${PREFIX}brightness \[pixels\] <image>`],
                execute: async() => {
                    let args = message.content.slice(PREFIX.length).trim().split(" ");

                    let member = message.content.toLowerCase().endsWith('random') ? randomMember(message.guild.id) : message.mentions.members.first() || searchMember(message.guild.id, args.slice(1).slice(1).join(" ").toLowerCase()) || message.member;
                    let avatar =  message.attachments.first() ? message.attachments.first().url : member.user.displayAvatarURL({ dynamic: false, format: 'png', size: 4096 });
                    let image = await canvacord.Canvas.brightness(avatar, parseInt(args.slice(1)[0]) || 10);
                    let attachment = new Discord.MessageAttachment(image, "ajbot-brightness.png");
                    message.channel.send(attachment);
                }
            },
            {
                name: "pixelate",
                aliases: ["pixel", "px"],
                description: "Pixelates given image.",
                category: "image",
                usage: [`${PREFIX}pixelate \[pixels\]`, `${PREFIX}pixelate \[pixels\] <user>`, `${PREFIX}pixelate \[pixels\] <image>`],
                execute: async() => {
                    let args = message.content.slice(PREFIX.length).trim().split(" ");

                    let member = message.content.toLowerCase().endsWith('random') ? randomMember(message.guild.id) : message.mentions.members.first() || searchMember(message.guild.id, args.slice(1).slice(1).join(" ").toLowerCase()) || message.member;
                    let avatar = message.attachments.first() ? message.attachments.first().url : member.user.displayAvatarURL({ dynamic: false, format: 'png', size: 4096 });
                    let image = await canvacord.Canvas.pixelate(avatar, parseInt(args.slice(1)[0]));
                    let attachment = new Discord.MessageAttachment(image, "ajbot-pixelate.png");
                    message.channel.send(attachment);
                }
            },
            {
                name: "convolute",
                aliases: [],
                description: "Convolutes given image.",
                category: "image",
                usage: [`${PREFIX}convolute [matrix]`, `${PREFIX}convolute [matrix] <user>`, `${PREFIX}convolute [matrix] <image>`],
                execute: async() => {
                    let args = message.content.slice(PREFIX.length).trim().split(" ");

                    let member = message.mentions.members.first() || message.member;
                    
                    let matrix = args.slice(1).filter(arg => !isNaN(parseInt(arg)));
                    // let matrixArray = matrix.join(" ");
                    // matrixArray.forEach(matrix => parseInt(matrix));
                    
                    let avatar = message.attachments.first() ? message.attachments.first().url : member.user.displayAvatarURL({ dynamic: false, format: 'png', size: 4096 });
                    let image = await canvacord.Canvas.convolute(avatar, matrix, true);
                    let attachment = new Discord.MessageAttachment(image, "ajbot-convolute.png");
                    message.channel.send(attachment);
                }
            },
            {
                name: "translate",
                aliases: [],
                description: "Translates the text you put in.",
                category: "unsorted",
                usage: [`${PREFIX}translate <language of the text> <language of the translation> <text>`],
            	execute: () => {
                    const translate = require('translate-google');
                    let args = message.content.split(" ").slice(1);
                    let textLanguage = args[0];
                    let translateLanguage = args[1];
                    let text = message.content.split(" ").slice(3).join(" ");
                    translate(text, {from: textLanguage, to: translateLanguage}).then(res => {
                        const embed = new Discord.MessageEmbed()
                        .addFields(
                        	{ name: 'From', value: `:flag_${textLanguage}: - **${textLanguage.toUpperCase()}**`, inline: true },
                        	{ name: 'To', value: `:flag_${translateLanguage}: - **${translateLanguage.toUpperCase()}**`, inline: true },
                        	{ name: '\u200b', value: '\u200b', inline: true },
                        	{ name: 'Translation', value: res, inline: false },
                        )
                        message.channel.send(embed)
                    }).catch(err => {
                        message.channel.send('An error has occured: ```js' + err + '```')
                        console.log(err)
                    })
                }
            }
        ];
        
        if (message.content.toLowerCase() === "ajbot") {
            console.log(message.author.tag + " wrote ajbot on " + message.guild.name)
            function secondsToHms(d) {
                d = Number(d);
                var h = Math.floor(d / 3600);
                var m = Math.floor(d % 3600 / 60);
                var s = Math.floor(d % 3600 % 60);

                var hDisplay = h > 0 ? h + (h == 1 ? " hour, " : " hours, ") : "";
                var mDisplay = m > 0 ? m + (m == 1 ? " minute, " : " minutes, ") : "";
                var sDisplay = s > 0 ? s + (s == 1 ? " second" : " seconds") : "";
                return hDisplay + mDisplay + sDisplay; 
            }
            const embed = new Discord.MessageEmbed()
            .setColor(0xff0000)
            .setThumbnail("https://cdn.discordapp.com/attachments/629576665533513741/782244099826384896/logo_ajbot_rond.png")
            .setAuthor(client.user.username, client.user.displayAvatarURL())
            .setDescription("This bot is made by Baeka#2540 and Kamboo#9639. It's a bot who's constantly being updated it's not finished, if you want to get all the updates join [this server](https://discord.gg/rWYKfKG).")
            .addFields(
                { name: 'Bot user', value: `${client.user}, ${client.user.tag}\nID: ${client.user.id}`, inline: false },
                { name: 'Creators', value: 'Baeka#2540 and Kamboo#9639', inline: true },
                { name: 'Version', value: config.version, inline: true },
                { name: 'Prefix', value: PREFIX, inline: true },
                { name: 'Invite link', value: '[Yes please invite me ^^](https://discordapp.com/oauth2/authorize?client_id=727574553576079372&scope=bot&permissions=8 "Do it!")', inline: true },
                { name: 'Support server', value: '[Yes, join it!](https://discord.com/invite/rWYKfKG "You are the best")', inline: true },
                { name: 'Website', value: '[https://ajbot.xyz](https://ajbot.xyz "Yes click here my dear ^^")', inline: true },
                { name: 'Last restart', value: secondsToHms(Math.floor(process.uptime())), inline: false },
                { name: 'Servers', value: client.guilds.cache.size.toLocaleString(), inline: true },
                { name: 'Users', value: client.guilds.cache.map((g) => g.memberCount).reduce((a, c) => a + c).toLocaleString(), inline: true },
                { name: 'Channels', value: client.channels.cache.size.toLocaleString(), inline: true },
                { name: 'The prefix on this server', value: `\`${PREFIX.toUpperCase()}\``, inline: true },
                { name: '\u200b', value: '\u200b', inline: true },
                { name: 'Made with', value: ':heart: and [Discord.js](https://discord.js.org)', inline: true },
            )
            .setFooter(message.author.tag + " asked the command" + " \nBot made by Baeka#2540 and Kamboo#9639 \nDon't forget to vote to get a secret command ^^")
            message.channel.send(embed)
        }
        
        if (message.content.toLowerCase().startsWith(`${PREFIX}setlang`)) {
            const translate = require('./commands-languages.json');
            const { languages } = require('./commands-languages.json')
            let args = message.content.slice(PREFIX.length).trim().split(" ").slice(1);
            
            
            db.set(`botLang_${message.guild.id}`, args[0].toLowerCase());
            let guildLang = db.get(`botLang_${message.guild.id}`)
            
            translate.commands.SETLANG[guildLang]["message.author.tag"] = message.author.tag;
            
            message.channel.send(translate.commands.SETLANG[guildLang])
        }
        /*
        const database = db.has(`chatBot.${message.guild.id}`);
        if (database) {
            let chatBotGuild = db.get(`chatBot.${message.guild.id}`);
            if (message.channel.id === chatBotGuild.channel.id) {
                let channel = chatBotGuild.channel;
                fetch(`https://api.monkedev.com/fun/chat?msg=${message.content}&uid=${message.author.id}&key=${config.chatBotAPIKey}`)
                    .then((res) => res.json())
                    .then((data) => {
                        let retourne = data.response;
                        channel.send(retourne)
                })
                    .catch((err) => {
                    //client.sendError("An error has occured! Fix it or i'll kill you.", "Chat bot", `${message.author}, ${message.author.tag} (${message.author.id})`, `${message.guild.name}, ${message.guild.id}`, err)
                    message.reply('please try again!')
                })
            }
        }
        */
        
        if (message.content.toLowerCase().startsWith(`${PREFIX}testlang`)) {
            const translate = require('./commands-languages.json');
            let guildLang = db.get(`botLang_${message.guild.id}`)
            if (!guildLang) return message.channel.send(translate.commands.TESTLANG['en'])
            
            message.channel.send(translate.commands.TESTLANG[guildLang])
        }
        
        
        if (message.content.toLowerCase().startsWith(`${PREFIX}verify`)) {
            message.member.roles.add('734075674201030717')
            message.member.send("Welcome on AJbot-support!").catch(console.error)
            let embed = new Discord.MessageEmbed()
            .setTitle('Welcome on AJbot-support!')
            .setColor('#008080')
            .setThumbnail('https://cdn.discordapp.com/attachments/629576665533513741/782244099826384896/logo_ajbot_rond.png')
            .addFields(
            	{ name: "Thanks for joining! You can help us by donating ! Write 'donate' on the server or use this link https://donatebot.io/checkout/734071115579785257, you'll be able to buy the Donaters role it gives you some permissions that others doesn't have!", value: '\u200b', inline: false },
            	{ name: 'Please send me `your language`', value: '`fr` or `en`', inline: false }
            )
            .setFooter('Thanks a lot!')
            message.author.send(embed).then(msg => {
                msg.react('🇦');
                msg.react('🇯');
                msg.react('🇧');
                msg.react('🇴');
                msg.react('🇹');
                msg.react('😁');
            });
            message.delete().catch(console.error)
        }

        if (message.content.toLowerCase() === "deleteprefix") {
            if (message.member.hasPermission("ADMINISTRATOR")) {
                db.delete(`prefix_${message.guild.id}`)
                message.reply(" the prefix of the server is set as 'aj!'")
            }else {
                message.reply(" you are not admin!")
            }
        }
        
        if (message.content.toLowerCase().startsWith(`${PREFIX}help `)) {
            console.log(message.author.tag + " wrote ajbot on " + message.guild.name)
            let cmdDemandee = message.content.slice(PREFIX.length).trim().split(" ").slice(1).join(" ");
            let chercheCMD = COMMANDS.find(cmd => cmd.name.toLowerCase() === cmdDemandee.toLowerCase()) || COMMANDS.find(cmd => cmd.aliases.includes(cmdDemandee.toLowerCase())); // find() retourne UNE valeur d'un tableau, la première qu'il trouve
            let chercheCAT = COMMANDS.filter(cmd => cmd.category.toLowerCase() === cmdDemandee.toLowerCase()); // filter() retourne LES VALEURS d'un tableau qu'il trouve (c'est incompréhensible mais faut lire la doc c mieu)
            
            if (chercheCMD || chercheCAT.length) {
                if(chercheCMD) {
                    let embed = new Discord.MessageEmbed()
                    .setTitle("Command: " + chercheCMD.name)
                    .setColor(0xff0000)
                    .addFields(
                        { name: "\nCategory", value: strUcFirst(chercheCMD.category) + '\n\n\n\n', inline: false },
                        { name: "\nDescription", value: chercheCMD.description + '\n\n\n\n', inline: false },
                        // { name: "\u200b", value: '\u200b', inline: false },
                        { name: "\nUsage", value: chercheCMD.usage.join(",\n") + '\n\n\n\n', inline: false },
                    )

                    if (chercheCMD.aliases.length) embed.addField("\nAliases", chercheCMD.join(",\n"), false)

                    embed.addField("__Note :__", 'You are not obliged to use upper and lower case letters.\n\n', false)
                    
                    embed.setFooter(`${message.author.tag}, hope I helped you !` + " \n  Bot made by Baeka#2540 and Kamboo#9639");
                    message.channel.send(embed);
                }
                else if(chercheCAT) {
                    let embed = new Discord.MessageEmbed()
                    .setTitle("Category: " + cmdDemandee + ` (${chercheCAT.length})`)
                    .setColor(0xff0000)
                    .setDescription(chercheCAT.map(cmd => `\`${PREFIX + cmd.name}\` - ${cmd.description}`).sort())
                    .setFooter(`${message.author.tag}, hope I helped you !` + " \n  Bot made by Baeka#2540 and Kamboo#9639");

                    message.channel.send(embed);
                }
            }
            else {
                let embed = new Discord.MessageEmbed()
                .setColor(0xff0000)
                .setDescription(`I did not find the command or the category \`${cmdDemandee}\`. If you want it to exist, ask for it in [our support server](http://discord.ajbot.xyz) in the <#734080283170570301> channel. And if it's an error, tell us in the <#742748957373104189> channel.\n\n**__Tip:__** To get the list of commands, do \`${PREFIX.toUpperCase()}help\``);
                message.channel.send(embed);
            }
            
        }
        

        if (message.content.toLowerCase() === `${PREFIX}help`) {
            console.log(message.author.tag + ` asked the command help  on ${message.guild.name} \( ${message.guild.id} \) at ${getLocaltime()}`)
        	let data = message.author.tag + ` asked the command help  on ${message.guild.name} \( ${message.guild.id} \) at ${getLocaltime()}`
            fs.appendFile('log.txt', data, function(err) {
                if (err) {
                    return console.error(err);
            }
            });
            var cmdsINFOBOT = COMMANDS.filter(cmds => cmds.category.toLowerCase() === "info | about the bot");
            var cmdsLOVE = COMMANDS.filter(cmds => cmds.category.toLowerCase() === "love");
            var cmdsHAPPINESS = COMMANDS.filter(cmds => cmds.category.toLowerCase() === "happiness");
            var cmdsPOLITENESS = COMMANDS.filter(cmds => cmds.category.toLowerCase() === "politeness");
            var cmdsVIOLENCE = COMMANDS.filter(cmds => cmds.category.toLowerCase() === "violence");
            var cmdsUNSORTED = COMMANDS.filter(cmds => cmds.category.toLowerCase() === "unsorted");
            var cmdsImage = COMMANDS.filter(cmds => cmds.category.toLocaleLowerCase() === "image")
            var cmdsEconomy = COMMANDS.filter(cmds => cmds.category.toLocaleLowerCase() === "economy")
            
            var cmdsLoveVAL = []; // tbl déclaré vide pcq on va lui push des trucs
            var cmdsInfoVAL = [];
            var cmdsHappinessVAL = [];
            var cmdsPolitenessVAL = [];
            var cmdsViolenceVAL = [];
            var cmdsUnsortedVAL = [];
            var cmdsImageVAL = [];
            var cmdsEconomyVAL = [];
            
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

            var nbWhileImage = 0;
            while (nbWhileImage < cmdsImage.length) {
                cmdsImageVAL.push(cmdsImage[nbWhileImage].name);
                
                nbWhileImage++;
            }

            var nbWhileEconomy = 0;
            while (nbWhileEconomy < cmdsEconomy.length) {
                cmdsEconomyVAL.push(cmdsEconomy[nbWhileEconomy].name);
                
                nbWhileEconomy++;
            }
    
            
            cmdsLoveVAL.sort();
            cmdsInfoVAL.sort();
            cmdsHappinessVAL.sort();
            cmdsPolitenessVAL.sort();
            cmdsViolenceVAL.sort();
            cmdsUnsortedVAL.sort();
            cmdsImageVAL.sort();
            cmdsEconomyVAL.sort();
            
            
            const embed = new Discord.MessageEmbed()
            embed.setTitle(message.author.tag + ` HERE'S ALL THE COMMANDS (${COMMANDS.length}): PREFIX(AJ!)`)
            embed.setDescription(`**__Tip: __**\`${PREFIX.toUpperCase()}help <command>\` for more information about a command!`)
            embed.addFields(
                { name: `:clipboard: - Info | About the bot (${cmdsInfoVAL.length})`, value: `\`${cmdsInfoVAL.join('`, `')}\`.`, inline: false },
                { name: `:coin: - Economy (${cmdsEconomyVAL.length})`, value: `\`${cmdsEconomyVAL.join('`, `')}\`.`, inline: false },
                { name: `:heart: - Love (${cmdsLoveVAL.length})`, value: `\`${cmdsLoveVAL.join('`, `')}\`.`, inline: false },
                { name: `:raised_hands: - Happiness (${cmdsHappinessVAL.length})`, value: `\`${cmdsHappinessVAL.join('`, `')}\`.`, inline: false },
                { name: `:innocent: - Politeness (${cmdsPolitenessVAL.length})`, value: `\`${cmdsPolitenessVAL.join('`, `')}\`.`, inline: false },
                { name: `:skull: - Violence (${cmdsViolenceVAL.length})`, value: `\`${cmdsViolenceVAL.join('`, `')}\`.`, inline: false },
                { name: `:camera: - Image (${cmdsImageVAL.length})`, value: `\`${cmdsImageVAL.join('`, `')}\`.`, inline: false },
                { name: `:poop: - Unsorted (${cmdsUnsortedVAL.length})`, value: `\`${cmdsUnsortedVAL.join('`, `')}\`.`, inline: false }, // TOUJOURS TOUT EN BAS
            )
            embed.setColor(0xff0000)
            embed.setFooter(message.author.tag + " asked the command" + " \nBot made by Baeka#2540 and Kamboo#9639 \nDon't forget to vote to get a secret command ^^")
            
            message.reply("check your dm's").catch(console.error)
            message.channel.send("Don't forget to vote for the bot with this commands (it helps me): https://top.gg/bot/727574553576079372/vote")
            message.author.send(embed).catch(console.error)
        }
    
        if (message.content.toLowerCase().startsWith(PREFIX)) {
            let msg = `${message.author.tag} asked the command ${message.content.substring(PREFIX.length).trim().toString()} on ${message.guild.name} \( ${message.guild.id} \) at ${getLocaltime()}`;
            console.log(msg);
            let data = msg + "\n";
            fs.appendFile('log.txt', data, function(err) {
               if (err) {
                       return console.error(err);
               }
            });

            let cmdATrouver = message.content.substring(PREFIX.length).toLowerCase().trim().split(" ")[0];
            
            // custom commands
            let custCmds = db.get(`cmd_${message.guild.id}`);
            if (custCmds) {
                let custCmd = custCmds.find(cmd => cmd.name.toLowerCase() === cmdATrouver);
                if (custCmd) message.channel.send(custCmd.response);
            }

            // var possibleCOMMANDS = [];
            // COMMANDS.forEach(cmd => possibleCOMMANDS.push(cmd.name.toLowerCase()));
            var cmdValide = COMMANDS.find(cmd => cmd.name.toLowerCase() === cmdATrouver) || COMMANDS.find(cmd => cmd.aliases.includes(cmdATrouver)); // bool
            if (cmdValide) {
                message.channel.startTyping();
                setTimeout(() => {
                    message.channel.stopTyping();
                    var forcage = [1, 2, 3]
                    var valForcage = rand(forcage)
                    if (valForcage == 1) message.reply(" don't forget to vote for me on top.gg by using `" + PREFIX + "vote`! You have 80% chance to get a secret command!").then(message => {message.delete({ timeout: 5000 })})
                    
                    cmdValide.execute();
                }, 500);
            } 
            else {
                return false;
            }
        }
        
        // COMMANDES CACHEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEES
        if (message.content.toLowerCase().startsWith(secretPREFIX)) {
            let args = message.content.substring(secretPREFIX.length).toLowerCase().split(" ");
            let userValide = db.has(`commands.${message.author.id}.${args[0]}`)
            console.log(`${message.author.tag} the ~~seeecreeet~~ command ${message.content.substring(secretPREFIX.length).trim().toString()} on ${message.guild.name} \( ${message.guild.id} \) at ${getLocaltime()}`);
            let data = `${message.author.tag} the ~~seeecreeet~~ command ${message.content.substring(secretPREFIX.length).trim().toString()} on ${message.guild.name} \( ${message.guild.id} \) at ${getLocaltime()} \n`;
            if (userValide || message.author.id === '592631211113971723' || message.author.id === '380796131782688779') {
                console.log("User was valid for the command " + args + ": " + message.author.tag)
                fs.appendFile('log.txt', data, function(err) {
                   if (err) {
                           return console.error(err);
                   }
                });
                var possibleSecretCOMMANDS = [];
                secretCOMMANDS.forEach(cmd => possibleSecretCOMMANDS.push(cmd.name.toLowerCase()));
                var cmdSecretValide = possibleSecretCOMMANDS.includes(message.content.substring(secretPREFIX.length).toLowerCase().trim().split(" ")[0]); // bool
                if (cmdSecretValide) {
                    message.delete();
                    var cmdSecretDemandee = secretCOMMANDS.find(cmd => cmd.name.toLowerCase().startsWith(message.content.substring(secretPREFIX.length).toLowerCase().trim().split(" ")[0]));
                    cmdSecretDemandee.execute();
                } 
                else {
                    return false;
                }
            } else {
                message.reply(" unfortunately you're not in our database, so you never won this command after 27 april 2021. Please vote to have a chance to win a this command to use it.")
            }
        }
    }

    /*
    client.on('messageUpdate', (oldmessage, newmessage) => {
        let message = newmessage;
        if (message.content.toLowerCase().startsWith(PREFIX)) {
            console.log(`${message.author.tag} asked the command ${message.content.substring(PREFIX.length).trim().toString()}`);
            let data = `${message.author.tag} asked the command ${message.content.substring(PREFIX.length).trim().toString()} \n`;
            fs.appendFile('log.txt', data, function(err) {
                if (err) {
                    return console.error(err);
                }
            });
            var possibleCOMMANDS = [];
            COMMANDS.forEach(cmd => possibleCOMMANDS.push(cmd.name));
            var cmdValide = possibleCOMMANDS.includes(message.content.substring(PREFIX.length).toLowerCase().trim().split(" ")[0]); // bool
            if (cmdValide) {
                var forcage = [1, 2, 3]
                var valForcage = rand(forcage)
                if (valForcage == 1) message.reply(" don't forget to vote for me on top.gg by using \"aj!vote\"!").then(message => {message.delete({ timeout: 5000 })})
                var cmdDemandee = COMMANDS.find(cmd => cmd.name.startsWith(message.content.substring(PREFIX.length).toLowerCase().trim().split(" ")[0]));
                cmdDemandee.execute();
            } 
            else {
                return false;
            }
        }

        // COMMANDES CACHEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEES
        if (message.content.toLowerCase().startsWith(secretPREFIX)) {
            console.log(`${message.author.tag} the ~~seeecreeet~~ command ${message.content.substring(secretPREFIX.length).trim().toString()}`);
            let data = `${message.author.tag} the ~~seeecreeet~~ command ${message.content.substring(secretPREFIX.length).trim().toString()} \n`;
            fs.appendFile('log.txt', data, function(err) {
                if (err) {
                    return console.error(err);
                }
            });
            var possibleSecretCOMMANDS = [];
            secretCOMMANDS.forEach(cmd => possibleSecretCOMMANDS.push(cmd.name));
            var cmdSecretValide = possibleSecretCOMMANDS.includes(message.content.substring(secretPREFIX.length).toLowerCase().trim().split(" ")[0]); // bool
            if (cmdSecretValide) {
                message.delete();
                var cmdSecretDemandee = secretCOMMANDS.find(cmd => cmd.name.startsWith(message.content.substring(secretPREFIX.length).toLowerCase().trim().split(" ")[0]));
                cmdSecretDemandee.execute();
            } 
            else {
                return false;
            }
        }
	})*/
});

client.on('ready', () => {
    console.log('I am ready!');
    setInterval(() => {
        client.user.setActivity(`people writing "ajbot" || https://ajbot.xyz || ${client.guilds.cache.size} servers || ${client.channels.cache.size} channels || ${client.guilds.cache.map((g) => g.memberCount).reduce((a, c) => a + c)} users!`, { type: "WATCHING"});
    }, 2000);
    /* let commandsNames = [];
    COMMANDS.forEach(cmd => commandsNames.push({nom: cmd.name, statut: '✅  '}))

    
    let secretCommandsNames = [];
    secretCOMMANDS.forEach(cmd => secretCommandsNames.push({nom: cmd.name, statut: '👻 ✅  '}))
    
    console.log(`Commandes chargées avec succès (${COMMANDS.length + secretCOMMANDS.length}) !\nCommandes visibles (${COMMANDS.length}) :`)
    console.table(commandsNames)
    console.log(`Commandes cachées (${secretCOMMANDS.length}) :`)
    console.table(secretCommandsNames) */
});