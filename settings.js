const fs = require('fs')
const chalk = require('chalk')

module.exports = {
  SESSION_ID: 'QUEENELISA;;;==QS0pUe2c3QO1kSaVDdSNzRiFXYfR1cCVHeY1Eb6ZWVfpFZ1kEcTFlZoh0YjIlQDNzaW5kWpwd=49388034749',
  ALIVE_REACT: '🇰🇷',
  ALIVE_MESSAGE: `*𝗛𝗲𝗹𝗹𝗼 𝗨𝘀𝗲𝗿 👋* *~𝗜 𝗔𝗺 𝗔𝗹𝗶𝘃𝗲 𝗡𝗼𝘄 ✅~*

*ᴩᴏᴡᴇʀᴅ ʙʏ ᴍʀ-ꜱᴀᴄʜɪʏᴀ 🇰🇷*
*_❐ 𝗧𝗛𝗔𝗡𝗞𝗦 𝗙𝗢𝗥 𝗨𝗦𝗜𝗡𝗚 𝗠𝗬 𝗕𝗢𝗧 💕_*


*© ＱＵＥＥＮ-ＥＬＩＳＡ - ＭＤ  |  ２０２４*

⏰ Now time is @time
📅 Date : @date

🟢 I am online still @uptime
🔄 Response Delay : @ping Ms
💻 Host : @host
🪢 Version : @version

☫ Work Mode : @mode
☫ Work Type : @worktype

Qᴜᴇᴇɴ ᴇʟɪꜱᴀ ᴡʜᴀᴛꜱᴀᴘᴘ ʙᴏᴛ`,
  ALIVE_MEDIA: 'https://telegra.ph/file/70444c9032ebbb2768da5.jpg',
  MONGODB_URL: 'mongodb+srv://nimnadaanuththara62:JKTjroMYE88DmXH6@cluster0.ajet4kc.mongodb.net/', 
  PREFIX: '.$&',
  LANGUAGE: 'EN',
  PORT: 3000,
  BOT_NAME: '𝐌𝐑 𝐒𝐀𝐂𝐇𝐈𝐘𝐀 𝐌𝐃',
  OWNER_NAME: 'ᴍʀ-ꜱᴀᴄʜɪʏᴀ',
  OWNER_NUMBER: '94760007746',
  SUDO: '94715166712',
  WORK_TYPE: 'public',
  WORK_MODE: 'group',
  TIME_ZONE: 'Asia/Colombo',
  CAPTION: '*© ɢᴇɴᴇʀᴀᴛᴇᴅ ʙʏ ᴍʀ-ꜱᴀᴄʜɪʏᴀ ᴏꜰᴄ*',
  STICKER_AUTHOR: 'Qᴜᴇᴇɴ ᴇʟɪꜱᴀ',
  STICKER_PACK: 'ᴍʀ ɴɪᴍᴀ ᴏꜰᴄ',
  REMOVE_BG_APIKEY: '',
  MAXIMUM_FILESIZE: 500,
  OWNER_R_EMOJI: '🇰🇷',
  ALIVE_AS_GIF: true,
  AUTO_VOICE: false,
  INBOX_BLOCK: false,
  OWNER_REACT: true,
  AUTO_REACT: true,
  ONLY_PM_GROUP_MSG_SEND: false,
  AUTO_SEEN_STATUS: true,
  BOT_OFFLINE: false,
  READ_MESSAGE: false,
  ANTI_MSG_SPAM: false,
  ANTI_BAD_WORD: false,
  ANTI_VIEW_ONES: true,
  ANTI_DELETE: true,
  BANED_USER_MSG_SEND: false,
  BLOCK_CMD_MSG_SEND: false,
  INBOX_BLOCK_MSG_SEND: false,
  CMD_CORRECT: true,
  ANTI_CHANNEL_FORWARD: false,
  ANTI_BOT: false,
  BUTTON_MESSAGES: true,
  SONG_DOWNLOAD_TYPE: 'selectable', // audio , document
  VIDEO_DOWNLOAD_TYPE: 'selectable', // video
  FB_DOWNLOAD_TYPE: 'selectable', // hdvideo , sdvideo
  TIKTOK_DOWNLOAD_TYPE: 'selectable', // nowmvideo , wmvideo
  MSG: {
    ONLY_GROUP_MSG: 'Bot only Can Use Groups!',
    ONLY_PM_MSG: 'Bot only Can Use Private Chats!',
    BAD_DETECT_MSG: '@user Bad Words Are Disable by Owner!',
    BANED_MSG: "@user You Can't use bot, You are baned by owner!",
    GROUP_LEAVE: '👋 Bye @groupName I am Going.',
    INBOX_BLOCK:
      '❌ My owner has activated auto inbox blocking. So you will be auto blocked after 8 seconds'
  },
  BOT_RULES:
    "*⚖️ 𝚀𝚄𝙴𝙴𝙽 𝙴𝙻𝙸𝚂𝙰 𝙱𝙾𝚃 𝚁𝚄𝙻𝙴𝚂 ⚖️*\n\n☫ Don't spam messages.\n☫ Don't add groups without asking owner.\n"
}

let file = require.resolve(__filename)
fs.watchFile(file, () => {
  fs.unwatchFile(file)
  console.log(chalk.redBright('Update ' + __filename))
  delete require.cache[file]
  require(file)
})
