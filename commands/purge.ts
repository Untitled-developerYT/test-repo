import { SlashCommandBuilder } from "@discordjs/builders";
import { executeCommand } from "@/types";

// to add a command go to ./commands folder and create a new ts file

// the command title/name should match the command.ts file for
//      ex. for tutorialhere command you should name the file tutorialhere.ts

// Don't change register and execute variable names
export const register = new SlashCommandBuilder()
    .setName('purge')
    .setDescription('Purge a certain amount of messages')
    .addIntegerOption(option => 
        option.setName('amount')
        .setDescription('The amount of messages to purge')
        .setRequired(true));
        
export const execute: executeCommand = async (interaction) => {
  // You have access to do interaction object
  // https://discord.com/developers/docs/interactions/receiving-and-responding#interaction-object

  // Do your bot logic here
  // You can even connect to a database

  // you should return a APIInteractionResponse
  // https://discord-api-types.dev/api/discord-api-types-v10#APIApplicationCommandInteraction
    const amount = interaction.data?.options.getInteger('amount');
    if (amount < 1 || amount > 100) {
        return interaction.reply({ content: 'You must provide a number between 1 and 100', ephemeral: true });
    }
    interaction.channel.bulkDelete(amount, true).catch(err => {
        console.error(err);
        interaction.reply({ content: 'There was an error trying to purge messages in this channel!', ephemeral: true });
    });
    interaction.reply({ content: `Successfully purged ${amount} messages!`, ephemeral: true });
  return {
    type: 4,
    data: {
      content: `Hello World! ${interaction.member?.user.username}`,
    },
  };
};
