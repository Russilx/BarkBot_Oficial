import fetch from 'node-fetch';

// Para configurar o idioma, na raiz do projeto altere o arquivo config.json
// Para configurar el idioma, en la raíz del proyecto, modifique el archivo config.json.
// To set the language, in the root of the project, modify the config.json file.

const handler = async (m, { conn, usedPrefix, usedPrefix: _p, __dirname, text, isPrems }) => {

  if (usedPrefix == 'a' || usedPrefix == 'A') return;
  try {
    const datas = global
    const idioma = datas.db.data.users[m.sender].language || global.defaultLenguaje
    const _translate = JSON.parse(fs.readFileSync(`./src/languages/${idioma}.json`))
    const tradutor = _translate.plugins.menu_menu
    // const pp = imagen7;

    // let vn = './src/assets/audio/01J673Y3TGCFF1D548242AX68Q.mp3'
    const img = './src/assets/images/menu/languages/es/menu.png';
    const d = new Date(new Date + 3600000);
    const locale = 'es-ES';
    const week = d.toLocaleDateString(locale, { weekday: 'long' });
    const date = d.toLocaleDateString(locale, { day: '2-digit', month: '2-digit', year: 'numeric' });
    const _uptime = process.uptime() * 1000;
    const uptime = clockString(_uptime);
    const user = global.db.data.users[m.sender];
    const { money, joincount } = global.db.data.users[m.sender];
    const { exp, limit, level, role } = global.db.data.users[m.sender];
    const rtotalreg = Object.values(global.db.data.users).filter((user) => user.registered == true).length;
    const rtotal = Object.entries(global.db.data.users).length || '0'
    const more = String.fromCharCode(8206);
    const readMore = more.repeat(850);
    const taguser = '@' + m.sender.split('@s.whatsapp.net')[0];
    const doc = ['pdf', 'zip', 'vnd.openxmlformats-officedocument.presentationml.presentation', 'vnd.openxmlformats-officedocument.spreadsheetml.sheet', 'vnd.openxmlformats-officedocument.wordprocessingml.document'];
    const document = doc[Math.floor(Math.random() * doc.length)];
    const str = `${tradutor.texto1[0]}

${tradutor.texto1[1]} ${taguser}
 
*${tradutor.texto1[2]}*
┌──────────┐
├✘ _${usedPrefix}menuaudios_
├✘ _${usedPrefix}menuanimes_
├✘ _${usedPrefix}labiblia_
├✘ _${usedPrefix}lang_
├✘ _${usedPrefix}langgroup_
├✘ _${usedPrefix}glx_
└──────────┘

*${tradutor.texto1[3]}*
┌──────────┐
├✘ _${usedPrefix}terminosycondiciones_
├✘ _${usedPrefix}grupos_
├✘ _${usedPrefix}estado_
├✘ _${usedPrefix}infobot_
├✘ _${usedPrefix}speedtest_
├✘ _${usedPrefix}donar_
├✘ _${usedPrefix}owner_
├✘ _${usedPrefix}script_
├✘ _${usedPrefix}reporte_
├✘ _${usedPrefix}join_
├✘ _${usedPrefix}fixmsgespera_
└──────────┘

*${tradutor.texto1[4]}*
┌──────────┐
├✘ _${usedPrefix}serbot --code_
├✘ _${usedPrefix}serbot_
├✘ _${usedPrefix}deletebot_
├✘ _${usedPrefix}token_
├✘ _${usedPrefix}stop_
├✘ _${usedPrefix}bots_
└──────────┘

*${tradutor.texto1[5]}*
┌──────────┐
├✘ _${usedPrefix}mates_
├✘ _${usedPrefix}fake_
├✘ _${usedPrefix}ppt_
├✘ _${usedPrefix}prostituto_
├✘ _${usedPrefix}prostituta_
├✘ _${usedPrefix}gay2_
├✘ _${usedPrefix}lesbiana_
├✘ _${usedPrefix}pajero_
├✘ _${usedPrefix}pajera_
├✘ _${usedPrefix}puto_
├✘ _${usedPrefix}puta_
├✘ _${usedPrefix}manco_
├✘ _${usedPrefix}manca_
├✘ _${usedPrefix}rata_
├✘ _${usedPrefix}love_
├✘ _${usedPrefix}doxear_
├✘ _${usedPrefix}pregunta_
├✘ _${usedPrefix}suitpvp_
├✘ _${usedPrefix}slot_
├✘ _${usedPrefix}ttt 
├✘ _${usedPrefix}delttt_
├✘ _${usedPrefix}acertijo_
├✘ _${usedPrefix}simi_
├✘ _${usedPrefix}top_
├✘ _${usedPrefix}topgays_
├✘ _${usedPrefix}topotakus_
├✘ _${usedPrefix}formarpareja_
├✘ _${usedPrefix}verdad_
├✘ _${usedPrefix}reto_
├✘ _${usedPrefix}cancion_
├✘ _${usedPrefix}pista_
├✘ _${usedPrefix}akinator_
├✘ _${usedPrefix}wordfind_
├✘ _${usedPrefix}glx (RPG Mundo)_
└──────────┘
 
*${tradutor.texto1[6]}*
┌──────────┐
├✘ _${usedPrefix}enable *welcome*_
├✘ _${usedPrefix}disable *welcome*_
├✘ _${usedPrefix}enable *modohorny*_
├✘ _${usedPrefix}disable *modohorny*_
├✘ _${usedPrefix}enable *antilink*_
├✘ _${usedPrefix}disable *antilink*_
├✘ _${usedPrefix}enable *antilink2*_
├✘ _${usedPrefix}disable *antilink2*_
├✘ _${usedPrefix}enable *detect*_
├✘ _${usedPrefix}disable *detect*_
├✘ _${usedPrefix}enable *audios*_
├✘ _${usedPrefix}disable *audios*_
├✘ _${usedPrefix}enable *autosticker*_
├✘ _${usedPrefix}disable *autosticker*_
├✘ _${usedPrefix}enable *antiviewonce*_
├✘ _${usedPrefix}disable *antiviewonce*_
├✘ _${usedPrefix}enable *antitoxic*_
├✘ _${usedPrefix}disable *antitoxic*_
├✘ _${usedPrefix}enable *antitraba*_
├✘ _${usedPrefix}disable *antitraba*_
├✘ _${usedPrefix}enable *antiarabes*_
├✘ _${usedPrefix}disable *antiarabes*_
├✘ _${usedPrefix}enable *modoadmin*_
├✘ _${usedPrefix}disable *modoadmin*_
├✘ _${usedPrefix}enable *antidelete*_
├✘ _${usedPrefix}disable *antidelete*_
└──────────┘

*${tradutor.texto1[7]}*
┌──────────┐
├✘ _${usedPrefix}play_
├✘ _${usedPrefix}play2_
├✘ _${usedPrefix}play.1_
├✘ _${usedPrefix}play.2_
├✘ _${usedPrefix}playdoc_
├✘ _${usedPrefix}playdoc2_
├✘ _${usedPrefix}playlist_
├✘ _${usedPrefix}ytshort_
├✘ _${usedPrefix}ytmp3_
├✘ _${usedPrefix}ytmp3doc_
├✘ _${usedPrefix}ytmp4_
├✘ _${usedPrefix}ytmp4doc_
├✘ _${usedPrefix}videodoc_
├✘ _${usedPrefix}spotify _
├✘ _${usedPrefix}facebook_
├✘ _${usedPrefix}instagram_
├✘ _${usedPrefix}igstory_
├✘ _${usedPrefix}tiktok_
├✘ _${usedPrefix}tiktokimg_
├✘ _${usedPrefix}pptiktok_
├✘ _${usedPrefix}mediafire_ 
├✘ _${usedPrefix}pinterest_
├✘ _${usedPrefix}gitclone_
├✘ _${usedPrefix}gdrive_
├✘ _${usedPrefix}twitter_
├✘ _${usedPrefix}ringtone_
├✘ _${usedPrefix}soundcloud_
├✘ _${usedPrefix}stickerpack_
├✘ _${usedPrefix}wallpaper_ 
├✘ _${usedPrefix}dapk2_
├✘ _${usedPrefix}xnxxdl_ 
├✘ _${usedPrefix}xvideosdl_ 
└──────────┘

*${tradutor.texto1[8]}*
┌──────────┐
├✘ _${usedPrefix}githubsearch_
├✘ _${usedPrefix}pelisplus_
├✘ _${usedPrefix}modapk_
├✘ _${usedPrefix}stickersearch_
├✘ _${usedPrefix}stickersearch2_
├✘ _${usedPrefix}xnxxsearch_
├✘ _${usedPrefix}animeinfo_
├✘ _${usedPrefix}google_
├✘ _${usedPrefix}letra_
├✘ _${usedPrefix}npmjs_
├✘ _${usedPrefix}wikipedia_
├✘ _${usedPrefix}ytsearch_
├✘ _${usedPrefix}playstore_
└──────────┘

*${tradutor.texto1[9]}*
┌──────────┐
├✘ _${usedPrefix}add_
├✘ _${usedPrefix}kick_
├✘ _${usedPrefix}kick2_
├✘ _${usedPrefix}listanum_
├✘ _${usedPrefix}kicknum_
├✘ _${usedPrefix}grupo_
├✘ _${usedPrefix}grouptime_
├✘ _${usedPrefix}promote_
├✘ _${usedPrefix}demote_
├✘ _${usedPrefix}infogroup_
├✘ _${usedPrefix}resetlink_
├✘ _${usedPrefix}link_
├✘ _${usedPrefix}setname_
├✘ _${usedPrefix}setdesc_
├✘ _${usedPrefix}invocar_
├✘ _${usedPrefix}setwelcome_
├✘ _${usedPrefix}setbye_
├✘ _${usedPrefix}hidetag _
├✘ _${usedPrefix}hidetag_
├✘ _${usedPrefix}hidetag_
├✘ _${usedPrefix}hidetag_
├✘ _${usedPrefix}warn_
├✘ _${usedPrefix}unwarn_
├✘ _${usedPrefix}listwarn_
├✘ _${usedPrefix}fantasmas_
├✘ _${usedPrefix}destraba_
├✘ _${usedPrefix}setpp_
├✘ _admins _
└──────────┘

*${tradutor.texto1[10]}*
┌──────────┐
├✘ _${usedPrefix}toanime_
├✘ _${usedPrefix}togifaud_
├✘ _${usedPrefix}toimg_
├✘ _${usedPrefix}tomp3_
├✘ _${usedPrefix}tomp3_
├✘ _${usedPrefix}toptt_
├✘ _${usedPrefix}tovideo_
├✘ _${usedPrefix}tourl_
├✘ _${usedPrefix}tts_
├✘ _${usedPrefix}tts_
└──────────┘

*${tradutor.texto1[11]}*
┌──────────┐
├✘ _${usedPrefix}logos_
├✘ _${usedPrefix}logochristmas_
├✘ _${usedPrefix}logocorazon_
├✘ _${usedPrefix}ytcomment_
├✘ _${usedPrefix}hornycard_
├✘ _${usedPrefix}simpcard_
├✘ _${usedPrefix}lolice_
├✘ _${usedPrefix}itssostupid_
├✘ _${usedPrefix}pixelar_
├✘ _${usedPrefix}blur_
└──────────┘

*${tradutor.texto1[12]}*
┌──────────┐
├✘ _${usedPrefix}piropo_
├✘ _${usedPrefix}consejo_
├✘ _${usedPrefix}fraseromantica_
├✘ _${usedPrefix}historiaromantica_
└──────────┘

*${tradutor.texto1[13]}*
┌──────────┐
├✘ _${usedPrefix}kpop_
├✘ _${usedPrefix}cristianoronaldo_
├✘ _${usedPrefix}messi_
├✘ _${usedPrefix}cat_
├✘ _${usedPrefix}dog_
├✘ _${usedPrefix}meme_
├✘ _${usedPrefix}itzy_
├✘ _${usedPrefix}blackpink_
├✘ _${usedPrefix}navidad_
├✘ _${usedPrefix}wpmontaña_
├✘ _${usedPrefix}pubg_
├✘ _${usedPrefix}wpgaming_
├✘ _${usedPrefix}wpaesthetic_
├✘ _${usedPrefix}wpaesthetic2_
├✘ _${usedPrefix}wprandom_
├✘ _${usedPrefix}wallhp_
├✘ _${usedPrefix}wpvehiculo_
├✘ _${usedPrefix}wpmoto_
├✘ _${usedPrefix}coffee_
├✘ _${usedPrefix}pentol_
├✘ _${usedPrefix}caricatura_
├✘ _${usedPrefix}ciberespacio_
├✘ _${usedPrefix}technology_
├✘ _${usedPrefix}doraemon_
├✘ _${usedPrefix}hacker_
├✘ _${usedPrefix}planeta_
├✘ _${usedPrefix}randomprofile_
└──────────┘

*${tradutor.texto1[14]}*
┌──────────┐
├✘ _${usedPrefix}inspect_
├✘ _${usedPrefix}chatgpt_
├✘ _${usedPrefix}delchatgpt_
├✘ _${usedPrefix}gptvoz_
├✘ _${usedPrefix}dall-e_
├✘ _${usedPrefix}spamwa_
├✘ _${usedPrefix}tamaño_
├✘ _${usedPrefix}readviewonce_
├✘ _${usedPrefix}clima_
├✘ _${usedPrefix}encuesta_
├✘ _${usedPrefix}afk_
├✘ _${usedPrefix}ocr_
├✘ _${usedPrefix}hd_
├✘ _${usedPrefix}acortar_
├✘ _${usedPrefix}calc_
├✘ _${usedPrefix}del_
├✘ _${usedPrefix}whatmusic_
├✘ _${usedPrefix}readqr_
├✘ _${usedPrefix}qrcode_
├✘ _${usedPrefix}readmore_
├✘ _${usedPrefix}styletext_
├✘ _${usedPrefix}traducir_
├✘ _${usedPrefix}nowa_
├✘ _${usedPrefix}covid_
├✘ _${usedPrefix}horario_
├✘ _${usedPrefix}dropmail_
├✘ _${usedPrefix}igstalk_
├✘ _${usedPrefix}tiktokstalk_
├✘ _${usedPrefix}img_
└──────────┘

*${tradutor.texto1[15]}*
┌──────────┐
├✘ _${usedPrefix}adventure_
├✘ _${usedPrefix}cazar_
├✘ _${usedPrefix}cofre_
├✘ _${usedPrefix}balance_
├✘ _${usedPrefix}claim_
├✘ _${usedPrefix}heal_
├✘ _${usedPrefix}lb_
├✘ _${usedPrefix}levelup_
├✘ _${usedPrefix}myns_
├✘ _${usedPrefix}perfil_
├✘ _${usedPrefix}work_
├✘ _${usedPrefix}minar_
├✘ _${usedPrefix}minar2_
├✘ _${usedPrefix}buy_
├✘ _${usedPrefix}buyall_
├✘ _${usedPrefix}verificar_
├✘ _${usedPrefix}robar_
├✘ _${usedPrefix}crime_
├✘ _${usedPrefix}transfer_
├✘ _${usedPrefix}unreg_
└──────────┘

*${tradutor.texto1[16]}*
┌──────────┐
├✘ _${usedPrefix}sticker_
├✘ _${usedPrefix}sticker2_
├✘ _${usedPrefix}s_
├✘ _${usedPrefix}emojimix_
├✘ _${usedPrefix}scircle_
├✘ _${usedPrefix}sremovebg_
├✘ _${usedPrefix}semoji_
├✘ _${usedPrefix}qc_
├✘ _${usedPrefix}attp_
├✘ _${usedPrefix}attp2_
├✘ _${usedPrefix}attp3_
├✘ _${usedPrefix}ttp_
├✘ _${usedPrefix}ttp2_
├✘ _${usedPrefix}ttp3_
├✘ _${usedPrefix}ttp4_
├✘ _${usedPrefix}ttp5_
├✘ _${usedPrefix}pat_
├✘ _${usedPrefix}slap_
├✘ _${usedPrefix}kiss_
├✘ _${usedPrefix}dado_
├✘ _${usedPrefix}wm_
├✘ _${usedPrefix}stickermarker_
├✘ _${usedPrefix}stickerfilter_
└──────────┘

*${tradutor.texto1[17]}*
┌──────────┐
├✘ _${usedPrefix}dsowner_
├✘ _${usedPrefix}setprefix_
├✘ _${usedPrefix}resetprefix_
├✘ _${usedPrefix}autoadmin_
├✘ _${usedPrefix}grouplist_
├✘ _${usedPrefix}chetar_
├✘ _${usedPrefix}leavegc_
├✘ _${usedPrefix}cajafuerte_
├✘ _${usedPrefix}blocklist_
├✘ _${usedPrefix}addowner *<@tag / num>*_
├✘ _${usedPrefix}delowner *<@tag / num>*_
├✘ _${usedPrefix}block *<@tag / num>*_
├✘ _${usedPrefix}unblock *<@tag / num>*_
├✘ _${usedPrefix}enable *restrict*_
├✘ _${usedPrefix}disable *restrict*_
├✘ _${usedPrefix}enable *autoread*_
├✘ _${usedPrefix}disable *autoread*_
├✘ _${usedPrefix}enable *public*_
├✘ _${usedPrefix}disable *public*_
├✘ _${usedPrefix}enable *pconly*_
├✘ _${usedPrefix}disable *pconly*_
├✘ _${usedPrefix}enable *gconly*_
├✘ _${usedPrefix}disable *gconly*_
├✘ _${usedPrefix}enable *anticall*_
├✘ _${usedPrefix}disable *anticall*_
├✘ _${usedPrefix}enable *antiprivado*_
├✘ _${usedPrefix}disable *antiprivado*_
├✘ _${usedPrefix}enable *modejadibot*_
├✘ _${usedPrefix}disable *modejadibot*_
├✘ _${usedPrefix}enable *audios_bot*_
├✘ _${usedPrefix}disable *audios_bot*_
├✘ _${usedPrefix}enable *antispam*_
├✘ _${usedPrefix}disable *antispam*_
├✘ _${usedPrefix}msg _
├✘ _${usedPrefix}banchat_
├✘ _${usedPrefix}unbanchat_
├✘ _${usedPrefix}resetuser_
├✘ _${usedPrefix}banuser_
├✘ _${usedPrefix}unbanuser_
├✘ _${usedPrefix}dardiamantes_
├✘ _${usedPrefix}añadirxp_
├✘ _${usedPrefix}banuser_
├✘ _${usedPrefix}bc_
├✘ _${usedPrefix}bcchats_
├✘ _${usedPrefix}bcgc_
├✘ _${usedPrefix}bcgc2_
├✘ _${usedPrefix}bcgc2_
├✘ _${usedPrefix}bcgc2_
├✘ _${usedPrefix}bcbot_
├✘ _${usedPrefix}cleartpm_
├✘ _${usedPrefix}restart_
├✘ _${usedPrefix}update_
├✘ _${usedPrefix}banlist_
├✘ _${usedPrefix}addprem_
├✘ _${usedPrefix}addprem2_
├✘ _${usedPrefix}addprem3_
├✘ _${usedPrefix}addprem4_
├✘ _${usedPrefix}delprem_
├✘ _${usedPrefix}listcmd_
├✘ _${usedPrefix}setppbot_
├✘ _${usedPrefix}addcmd_
├✘ _${usedPrefix}delcmd_
├✘ _${usedPrefix}saveimage_
├✘ _${usedPrefix}viewimage_
└──────────┘`

    let pp
    // Nuevas Imágenes del menu para otros idiomas
    if (idioma == 'es') {
      pp = global.imagen1
    } else if (idioma == 'pt-br') {
      pp = global.imagen2
    } else if (idioma == 'fr') {
      pp = global.imagen3
    }else if (idioma == 'en') {
      pp = global.imagen4
    } else if (idioma == 'ru') {
      pp = global.imagen5
    } else {
      pp = global.imagen1 // Imagen por defecto (Español/Spanish)
    }



    if (m.isGroup) {
      // await conn.sendFile(m.chat, vn, './src/assets/audio/01J673Y3TGCFF1D548242AX68Q.mp3', null, m, true, { type: 'audioMessage', ptt: true})
      conn.sendMessage(m.chat, { image: pp, caption: str.trim(), mentions: [...str.matchAll(/@([0-9]{5,16}|0)/g)].map((v) => v[1] + '@s.whatsapp.net') }, { quoted: m });
    } else {
      //await conn.sendFile(m.chat, vn, './src/assets/audio/01J673Y3TGCFF1D548242AX68Q.mp3', null, m, true, { type: 'audioMessage', ptt: true})
      const fkontak = { key: { participants:"0@s.whatsapp.net", "remoteJid": "status@broadcast", "fromMe": false, "id": "Halo" }, "message": { " contactMessage": { "vcard": `BEGIN:VCARD\nVERSION:3.0\nN:Sy;Bot;;;\nFN:y\nitem1.TEL;waid=${m.sender.split('@')[0]}:${m.sender .split('@')[0]}\nitem1.X-ABLabel:Ponsel\nEND:VCARD` }}, "participant": "0@s.whatsapp.net" }
      conn.sendMessage(m.chat, { image: pp, caption: str.trim(), mentions: [...str.matchAll(/@([0-9]{5,16}|0)/g)].map((v) => v[1] + '@s.whatsapp.net') }, { quoted: fkontak });
    }
  } catch {
    const datas = global
    const idioma = datas.db.data.users[m.sender].language || global.defaultLenguaje
    const _translate = JSON.parse(fs.readFileSync(`./src/languages/${idioma}.json`))
    const tradutor = _translate.plugins.menu_menu
    
    conn.reply(m.chat, translator.texto1[29], m);
  }
};
handler.command = /^(menu|help|comandos|commands|cmd|cmds)$/i;
handler.exp = 50;
handler.fail = null;
export default handler;
function clockString(ms) {
  const h = isNaN(ms) ? '--' : Math.floor(ms / 3600000);
  const m = isNaN(ms) ? '--' : Math.floor(ms / 60000) % 60;
  const s = isNaN(ms) ? '--' : Math.floor(ms / 1000) % 60;
  return [h, m, s].map((v) => v.toString().padStart(2, 0)).join(':');
      }

 
