import fs from 'fs'
import fetch from 'node-fetch'
let handler  = async (m, { conn, usedPrefix: _p }) => {
let info = `Bot ini menggunakan script by FangzXD\n\n*Version:* Private Edition V3`

let td = 'application/vnd.openxmlformats-officedocument.wordprocessingml.document'
const message = {
            document: { url: thumb },
            jpegThumbnail: await (await fetch(thumb)).buffer(), fileName: global.wm, mimetype: td, fileLength: '9999999', pageCount: '999',
            caption: titlebot,
            footer: wm,
            templateButtons: [
                {
                    urlButton: {
                        displayText: 'Download Sc',
                        url: 'https://www.youtube.com/channel/UC1esKQw-DKM5Xa5hF7vqdGA'
                    }
                },
                {
                    urlButton: {
                        displayText: 'Ke YouTube',
                        url: 'https://www.youtube.com/channel/UC1esKQw-DKM5Xa5hF7vqdGA',
                    }
                },
            ]
        }
        conn.sendMessage(m.chat, message)
conn.reply(m.chat, info, m, { contextInfo: { externalAdReply: {title: global.wm, body: 'Script By Naufal Muflih', sourceUrl: snh, thumbnail: fs.readFileSync('./thumbnail.jpg')  }}})
}
handler.help = ['cekversi']
handler.tags = ['info']
handler.command =  /^(cekversi)$/i

handler.register = true
handler.premium = false
handler.limit = false

export default handler
