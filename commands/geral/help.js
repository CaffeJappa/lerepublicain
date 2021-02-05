const Discord = require("discord.js");
const fs = require("fs");
const { prefix } = require("../../botconfig.json");

module.exports.run = async (bot, message, args) => {

  const embed = new Discord.MessageEmbed()
    .setColor("#FFD700")
    .setAuthor(`Ajuda do ${message.guild.me.displayName}`, message.guild.iconURL)
    .setThumbnail(bot.user.displayAvatarURL);
  if(!args[0]) {
    const categories = fs.readdirSync("./commands/")

    embed.setDescription(`Esses são os comandos disponíveis para ${message.guild.me.displayName}\nO prefixo é: **${prefix}**`)
    embed.setFooter(`© ${message.guild.me.displayName} | Comandos: ${bot.commands.size}`, bot.user.displayAvatarURL);

    categories.forEach(category => {
      const dir = bot.commands.filter(c => c.help.category === category)
      const capitalise = category.slice(0, 1).toUpperCase() + category.slice(1)
      try {
        embed.addField(`❯ ${capitalise} [${dir.size}]:`, dir.map(c => `\`${c.help.name}\``).join(" "))
      } catch(e) {
          console.log(e)
        }
    })

    return message.channel.send(embed)
  } else if(args[0] && bot.commands.has(args[0])) {
    const cmd = bot.commands.get(args[0]);
    const capitalise = cmd.help.name.slice(0, 1).toUpperCase() + cmd.help.name.slice(1)
    const capitaliseCat = cmd.help.category.slice(0, 1).toUpperCase() + cmd.help.category.slice(1)

    const embed2 = new Discord.MessageEmbed()
      .setAuthor(`${capitalise} | Ajuda`, bot.user.displayAvatarURL())
      .setColor("00ff00")
      .addField("**Nome**", `${capitalise}`)
      .addField("**Aliases**", `\`\`${cmd.help.aliases}\`\``)
      .addField("**Descrição**", `\`\`${cmd.help.description}\`\``)
      .addField("**Utilização**", `\`\`${prefix}${cmd.help.name} ${cmd.help.use}\`\`` || "Sem utilização")
      .addField("**Categoria**", `${capitaliseCat}`);

    return message.channel.send(embed2);
  }
}

module.exports.help = {
  name: "help",
  aliases: ["h", "ajuda", "ajd"],
  description: "O comando que disponibiliza este painel",
  category: "geral",
  use: "[Comando]"
}
