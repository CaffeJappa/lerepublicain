module.exports.run = async (bot, message, args) => {
  message.channel.send(`Nunca falei mal!\n\n **:door: - Convite do Servidor**: https://discord.gg/qzbEBtfQFy`);
}

module.exports.help = {
  name: "invite",
  aliases: ["rp", "chat"],
  description: "Envia o link de convite do servidor.",
  category: "geral",
  use: ""
}
