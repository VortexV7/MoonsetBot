const Discord = require("discord.js");

exports.run = async (client, message, args, level) => {
  // eslint-disable-line no-unused-vars
  var time = Date.now();

  const embed = new Discord.MessageEmbed()
    .setColor("GREEN")
    .setTitle("Bot Info")
    .setDescription(
      `MoonsetBot is an open source multi-purpose Discord bot.`
    )
    .addFields(
      { name: "GitHub Repository", value: "https://github.com/MoonsetValleyRP/MoonsetBot" } 
    )
    .setFooter(`Time taken: ${Date.now() - time}ms`);
  message.channel.send({ embed });
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ["about", "inf"],
  permLevel: "User"
};

exports.help = {
  name: "info",
  category: "System",
  description: "Provides some bot info",
  usage: "info"
};
