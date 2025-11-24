import { BOT_NAME, PREFIX } from '../../conf.js';

export function formatBalance(amount) {
    return `💰 ${amount.toLocaleString('pt-BR')}`;
}

export function formatXP(xp, level) {
    return `📈 XP: ${xp} | 📊 Nível: ${level}`;
}

export function extractMention(text) {
    const mentionRegex = /@([\w.]+)/g;
    const mentions = [];
    let match;
    while ((match = mentionRegex.exec(text)) !== null) {
        mentions.push(match[1]);
    }
    return mentions;
}

export function getCommandFromText(text) {
    if (!text.startsWith(PREFIX)) return null;
    const parts = text.slice(PREFIX.length).split(' ');
    return {
        command: parts[0].toLowerCase(),
        args: parts.slice(1)
    };
}

export function createBox(title, content) {
    return `╔═════════════════════════════╗
║  ${title.padEnd(25)} ║
╚═════════════════════════════╝
${content}`;
}
