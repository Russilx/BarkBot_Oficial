import fetch from 'node-fetch';
const handler = async (m, {conn, usedPrefix, usedPrefix: _p, __dirname, text, isPrems}) => {
  if (usedPrefix == 'a' || usedPrefix == 'A') return;
  try {
    const pp = imagen4;
    // let vn = './media/menu.mp3'
    const img = './Menu2.jpg';
    const d = new Date(new Date + 3600000);
    const locale = 'es';
    const week = d.toLocaleDateString(locale, {weekday: 'long'});
    const date = d.toLocaleDateString(locale, {day: 'numeric', month: 'long', year: 'numeric'});
    const _uptime = process.uptime() * 1000;
    const uptime = clockString(_uptime);
    const user = global.db.data.users[m.sender];
    const {money, joincount} = global.db.data.users[m.sender];
    const {exp, limit, level, role} = global.db.data.users[m.sender];
    const rtotalreg = Object.values(global.db.data.users).filter((user) => user.registered == true).length;
    const rtotal = Object.entries(global.db.data.users).length || '0'
    const more = String.fromCharCode(8206);
    const readMore = more.repeat(850);
    const taguser = '@' + m.sender.split('@s.whatsapp.net')[0];
    const doc = ['pdf', 'zip', 'vnd.openxmlformats-officedocument.presentationml.presentation', 'vnd.openxmlformats-officedocument.spreadsheetml.sheet', 'vnd.openxmlformats-officedocument.wordprocessingml.document'];
    const document = doc[Math.floor(Math.random() * doc.length)];
    const str = `

Yssmina  Md MENU
 ʏᴀssᴍɪɴᴇ ♥︎
 ᴍᴏʀᴏ ♡︎
sᴀʟᴍᴀ ♡︎
sᴀʟᴀʜ ʙᴏᴛᴀʙ ♥︎
ᴛʜᴀɴᴋs ғᴏʀ ᴀʟʟ
قســـم الــــذكــاء الاصطناعي
█▒▒▒▒▒█ ◈ █▒▒▒▒▒█

🌸_${usedPrefix}dx
🌸_${usedPrefix}chatgpt
🌸_${usedPrefix}draw2d
🌸_${usedPrefix}ai2
🌸_${usedPrefix}gptanime
💡_${usedPrefix}bard
قـــسـم الملصقــات
█▒▒▒▒▒█ ◈ █▒▒▒▒▒█
🌸_${usedPrefix}sticker
🌸_${usedPrefix}attp
🌸_${usedPrefix}wm
🌸_${usedPrefix}qr
🌸_${usedPrefix}smeme
🌸_${usedPrefix}img
🌸_${usedPrefix}tovideo
 قسم رفع جودة الصور
█▒▒▒▒▒█ ◈ █▒▒▒▒▒█
🌸_${usedPrefix}hd
🌸_${usedPrefix}rg2
🌸_${usedPrefix}tts
🌸_${usedPrefix}translate

قسم الدين هو الاسلام
█▒▒▒▒▒█ ◈ █▒▒▒▒▒█
🌸_${usedPrefix}khawatir
🌸_${usedPrefix}bader
🌸_${usedPrefix}asmaeallah
🌸_${usedPrefix}adhan
🌸_${usedPrefix}ayati
قسم البحث والتحميل 
█▒▒▒▒▒█ ◈ █▒▒▒▒▒█
📲_${usedPrefix}ytv
🔎_${usedPrefix}ytsearch
📲_${usedPrefix}mediafire
📲_${usedPrefix}gdrive
📲_${usedPrefix}tiktok
📲_${usedPrefix}gdrive
📲_${usedPrefix}dapk2
💸${usedPrefix}3aafk-sift
اوامر الموسيقى والقرأن
█▒▒▒▒▒█ ◈ █▒▒▒▒▒█
🎧_${usedPrefix}Audiomenu
🎧_${usedPrefix}play
🎧_${usedPrefix}Audio 
🎧_${usedPrefix}tomp3
🎧_${usedPrefix}sondcloud
💿_${usedPrefix}Spotify
لاتنسى ان الموسيقى حرام عزيزي المستخدم
█▒▒█*YASSMINA*█▒▒█
اللهم صل وسلم وبارك على سيدنا محمد صلى الله عليه

`.trim();
    if (m.isGroup) {
      // await conn.sendFile(m.chat, vn, 'menu.mp3', null, m, true, { type: 'audioMessage', ptt: true})
      const fkontak2 = {'key': {'participants': '0@s.whatsapp.net', 'remoteJid': 'status@broadcast', 'fromMe': false, 'id': 'Halo'}, 'message': {'contactMessage': {'vcard': `BEGIN:VCARD\nVERSION:3.0\nN:Sy;Bot;;;\nFN:y\nitem1.TEL;waid=${m.sender.split('@')[0]}:${m.sender.split('@')[0]}\nitem1.X-ABLabel:Ponsel\nEND:VCARD`}}, 'participant': '0@s.whatsapp.net'};
      conn.sendMessage(m.chat, {image: pp, caption: str.trim(), mentions: [...str.matchAll(/@([0-9]{5,16}|0)/g)].map((v) => v[1] + '@s.whatsapp.net')}, {quoted: m});
    } else {
      // await conn.sendFile(m.chat, vn, 'menu.mp3', null, m, true, { type: 'audioMessage', ptt: true})
      const fkontak2 = {'key': {'participants': '0@s.whatsapp.net', 'remoteJid': 'status@broadcast', 'fromMe': false, 'id': 'Halo'}, 'message': {'contactMessage': {'vcard': `BEGIN:VCARD\nVERSION:3.0\nN:Sy;Bot;;;\nFN:y\nitem1.TEL;waid=${m.sender.split('@')[0]}:${m.sender.split('@')[0]}\nitem1.X-ABLabel:Ponsel\nEND:VCARD`}}, 'participant': '0@s.whatsapp.net'};
      conn.sendMessage(m.chat, {image: pp, caption: str.trim(), mentions: [...str.matchAll(/@([0-9]{5,16}|0)/g)].map((v) => v[1] + '@s.whatsapp.net')}, {quoted: fkontak2});
    }
  } catch {
    conn.reply(m.chat, '*YASMINE MD IS NOT AVAILABLE*', m);
  }
};
handler.command = /^(menu|menú|memu|memú|help|info|comandos|allmenu|2help|menu1.2|ayuda|commands|commandos|cmd)$/i;
handler.exp = 50;
handler.fail = null;
export default handler;
function clockString(ms) {
  const h = isNaN(ms) ? '--' : Math.floor(ms / 3600000);
  const m = isNaN(ms) ? '--' : Math.floor(ms / 60000) % 60;
  const s = isNaN(ms) ? '--' : Math.floor(ms / 1000) % 60;
  return [h, m, s].map((v) => v.toString().padStart(2, 0)).join(':');
}