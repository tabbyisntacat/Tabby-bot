require("dotenv").config()
const {Client,IntentsBitField} = require('discord.js')

const client = new Client({
    intents:[
        IntentsBitField.Flags.Guilds,
        IntentsBitField.Flags.GuildMembers,
        IntentsBitField.Flags.GuildMessages,
        IntentsBitField.Flags.MessageContent,
    ],
})


client.on('ready', (c) =>{
    console.log(`Client ${c.user.tag} is ready`)

})

client.on('messageCreate', (message) =>{
    if(message.content === "@everyone") {
        message.reply("a")
    }
})
client.login(process.env.TOKEN)