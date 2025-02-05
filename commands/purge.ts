const { SlashCommandBuilder } = require('discord.js');
import { executeCommand } from "@/types";
module.exports = {
    data: new SlashCommandBuilder()
        .setName('purge')
        .setDescription('Purge a certain amount of messages')
        .addIntegerOption(option => 
            option.setName('amount')
            .setDescription('The amount of messages to purge')
            .setRequired(true)),
        
                    
    async execute(interaction) {
        const amount = interaction.options.getInteger('amount');
        if (amount < 1 || amount > 100) {
            return interaction.reply({ content: 'You must provide a number between 1 and 100', ephemeral: true });
        }
        interaction.channel.bulkDelete(amount, true).catch(err => {
            console.error(err);
            interaction.reply({ content: 'There was an error trying to purge messages in this channel!', ephemeral: true });
        });
        interaction.reply({ content: `Successfully purged ${amount} messages!`, ephemeral: true });
    },
};
