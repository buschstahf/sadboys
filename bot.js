const Discord = require('discord.js');
const client = new Discord.Client();

client.on('ready', () => {
    console.log('I am ready!');
});

client.on('message', message => {
    if (message.content === 'ping') {
    	message.reply('pong');
  	}
});

// THIS  MUST  BE  THIS  WAY
client.login(process.env.NTI0ODU2NjY2MzQ1MTc3MTAz.Dvx2Vw.GUwak3mZJZK7j0g_42-rm0_f1vA);
