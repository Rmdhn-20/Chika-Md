/*
› Recode By @Rmdhn-20
› Create By @RIY
› Base Ori @DikaArdnt
› Kalau mau tambahin fitur di index.js
› Edit text menu di file language › help.js
*/

//gausah di apa² in!
const fs = require('fs')
const chalk = require('chalk')

//—————「 Website Apikey 」—————//
global.APIs = {
//gausah di apa² in!
zenz: 'https://zenzapis.xyz',
}

//—————「 Website Apikey 」—————//
global.APIKeys = {
//ganti njeng udah ga free apikey
'https://zenzapis.xyz': 'exz123',
}

//—————「 Setting Owner 」—————//
global.owner = ['628889616144','6289618777587'] //ubah jadi nomor mu, note tanda ' gausah di hapus!
global.premium = ['628889616144','6289618777587'] //ubah jadi nomor mu, note tanda ' gausah di hapus!
global.ownernomer = '628889616144' //ubah jadi nomor mu, note tanda ' gausah di hapus!

//—————「 Set Nama Own & Bot 」—————//
global.ownername = '༻ᵐʳËкṳzïкᾰ꧂' //ubah jadi nama mu, note tanda ' gausah di hapus!
global.botname = '༻Nezuko-Md꧂' //ubah jadi nama bot mu, note tanda ' gausah di hapus!
global.footer = '༻ᵐʳËкṳzïкᾰ꧂' //ubah jadi nama mu, note tanda ' gausah di hapus!

//—————「 Set Kebutuhan Button & Kontak 」—————//
//ubah aja kalau ada yang gapunya gsh di hps anggap aja credits :), note tanda ' gausah di hapus!
global.youtube = 'https://instagram.com/ekuzikaa_18'
global.ig = 'https://instagram.com/ekuzikaa_18'
global.mygc = 'https://chat.whatsapp.com/DrxNOabR7We4SqpcH6b9Ls'
global.myweb = 'https://chat.whatsapp.com/DrxNOabR7We4SqpcH6b9Ls'
global.email = 'ekuzika123@gmail.com'
global.region = 'indonesia'

//—————「 Set Wm 」—————//
global.packname = 'This sticker was created by ༻Nezuko-Md꧂' //ubah jadi nama bot mu, note tanda ' gausah di hapus!
global.author = '༻ᵐʳËкṳzïкᾰ꧂' //ubah jadi nama mu, note tanda ' gausah di hapus!

//—————「 Set Nama Session 」—————//
//gausah di apa² in!
global.sessionName = 'session'

//—————「 Set Limit 」—————//
//terserah mau ubah atau nggak, note : tanda ' gausah di hapus!
global.limitawal = {
premium: "Infinity",
free: 30,
}

//—————「 Set Image 」—————//
//terserah mau ubah apa nggak, menurut gua jangan di ubah!
global.thumb = fs.readFileSync('./image/chika.jpg')
global.veloriy = fs.readFileSync('./image/chika.mp4')

//—————「 Set Image Welcome 」—————//
//terserah mau ubah apa nggak, menurut gua jangan di ubah!
global.BgWelcLeav = 'https://telegra.ph/file/ca207893ae26d531cd9c6.jpg'

//—————「 Set Random Image Menu 」—————//
//gausah di apa² in!
global.flaming = 'https://www6.flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=sketch-name&doScale=true&scaleWidth=800&scaleHeight=500&fontsize=100&text='
global.fluming = 'https://www6.flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=fluffy-logo&doScale=true&scaleWidth=800&scaleHeight=500&fontsize=100&text='
global.flarun = 'https://www6.flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=runner-logo&doScale=true&scaleWidth=800&scaleHeight=500&fontsize=100&text='
global.flasmurf = 'https://www6.flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=smurfs-logo&doScale=true&scaleWidth=800&scaleHeight=500&fontsize=100&text='

//—————「 Set Prefix 」—————//
//gausah di apa² in!
global.prefa = ['','!','.','🐦','🐤','🗿']

//—————「 Set Simbol 」—————//
//terserah mai ubah atau nggak, note : tanda ' gausah di hapus!
global.sp = '⭔'

//—————「 Set Message 」—————//
//terserah mau ubah apa nggak, note : tanda ' gausah di hapus!
global.mess = {
success: '[ ✔️ ] _Done._',
admin: '[ ⚠️ ] _Fitur Khusus Admin Group!_',
botAdmin: '[ ⚠️ ] _Bot Harus Menjadi Admin Terlebih Dahulu!_',
owner: '[ ⚠️ ] _Fitur Khusus Owner Bot_',
group: '[ ⚠️ ] _Fitur Digunakan Hanya Untuk Group!_',
private: '[ ⚠️ ] _Fitur Digunakan Hanya Untuk Private Chat!_',
bot: '[ ⚠️ ] _Fitur Khusus Pengguna Nomor Bot_',
wait: '[ ⏳ ] _Sedang Di Proses..._',
error: '[ ❗ ] _Fitur Sedang Error_',
endLimit: '[ ❗ ] _Limit Harian Anda Telah Habis, Limit Akan Direset Setiap Jam 12_',
}

//—————「 Batas Akhir 」—————//
//gausah si apa² in!
let file = require.resolve(__filename)
fs.watchFile(file, () => {
fs.unwatchFile(file)
console.log(chalk.redBright(`Update'${__filename}'`))
delete require.cache[file]
require(file)
})
