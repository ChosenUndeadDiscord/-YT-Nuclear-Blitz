const Discord = require("discord.js");
const client = new Discord.Client();
let prefix = "Nuke!";
client.on("message", (message) => {
  if (!message.content.startsWith(prefix) || message.author.bot) return;
  if (message.content.startsWith(prefix + "ping")) {
    message.channel.send("pong!");
  } else
  if (message.content.startsWith(prefix + "foo")) {
    message.channel.send("bar!");
  }
});
client.login("NDQ0MTc3NTc3NDczNDc0NTcx.DdYIKg.oKChTfc-TbP2rXUy94cck8vbuvg");
  if (!message.content.startsWith(prefix + "account")) {
    message.channel.send("bar!");
  }
});
