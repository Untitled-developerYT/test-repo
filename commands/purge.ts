const { SlashCommandBuilder } = require('discord.js');
import { executeCommand } from "@/types";
export const register = new SlashCommandBuilder()
    .setName('purge')
    .setDescription('Purge a certain amount of messages')
    .addIntegerOption(option => 
        option.setName('amount')
        .setDescription('The amount of messages to purge')
        .setRequired(true)),
export const execute: executeCommand = async (interaction) => {
  // You have access to do interaction object
  // https://discord.com/developers/docs/interactions/receiving-and-responding#interaction-object

  // Do your bot logic here
  // You can even connect to a database
const amount = interaction.options.getInteger('amount');
        if (amount < 1 || amount > 100) {
            return { type: 4, data: { content: 'You must provide a number between 1 and 100', },
        }
        interaction.channel.bulkDelete(amount, true).catch(err => {
            console.error(err);
            //interaction.reply({ content: 'There was an error trying to purge messages in this channel!', ephemeral: true });
        });
        //interaction.reply({ content: `Successfully purged ${amount} messages!`, ephemeral: true });
    }
  // you should return a APIInteractionResponse
  // https://discord-api-types.dev/api/discord-api-types-v10#APIApplicationCommandInteraction
  //return {
  //  type: 4,
  //  data: {
  //    content: `Hello World! ${interaction.member?.user.username}`,
 //   },
//  };
};
