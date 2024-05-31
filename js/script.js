setTimeout("$('.body').css('transform','translateY(0)');", 1e3), setTimeout("$('.main-desc').addClass('b-show')", 1500), setTimeout("$('body').addClass('add-scroll')", 3e3), setTimeout("$('html').addClass('add-scroll')", 3e3), $(".glow-button").on("click", (function () {
  $(".comment-item").addClass("comment-item-show"), $(".glow-button").addClass("hide"), $(".shine-button").addClass("show")
}));
const OFFER = "«Fortunella»";
let now = new Date, mm = now.getMonth() + 1, day = now.getDate(), year = now.getFullYear(),
  date = day + "." + mm + "." + year;
const massange = [
  {m: "Salve, mi chiamo Dott. Alfredo Dell’Uomo. Sono un traumatologo ortopedico, fisioterapista e riflessologo. Benvenuto nel mio sito web.  "},
  {m: "Qui offro una diagnostica online gratuita e consigli personalizzati che hanno aiutato migliaia di miei pazienti a liberarsi dal dolore e a riparare le articolazioni danneggiate. "},
  {m: "Per avere una consulenza completa su come migliorare la situazione articolare, rispondi ad alcune domande:"},
  {m: '<p class="quest">Quali sono i sintomi che ti preoccupano di più?</p>'},
  {m: '<p class="quest">Da quanto tempo hai problemi articolari?</p>'},
  {m: '<p class="quest">In quali articolazioni avverti disagio?</p>'},
  {m: '<p class="quest">Con che frequenza avverti dolore o limitazioni di movimento?</p>'},
  {m: '<p class="quest">Qual è la tua età?</p>'},
  {m: '<p class="quest">Qual è il tuo peso attuale?</p>'},
  {m: '<p class="quest">Quanto sei alto?</p>'},
  {m: "Grazie! Naturalmente, questi sintomi destano comprensibili preoccupazioni, ma vale la pena capirlo, che è possibile ottenere un recupero completo delle articolazioni. La causa principale del dolore articolare è la perdita di elasticità in articolazioni, vertebre e cartilagine, dovuta a fattori come eccessivo esercizio fisico, sovrappeso e invecchiamento. La chiave per risolvere il problema sta nel ripristinare le articolazioni in modo corretto."},
  {m: "In base alle informazioni fornite, posso consigliarti una combinazione di ingredienti naturali che può essere utile per alleviare i tuoi sintomi e migliorare la salute delle tue articolazioni:"},
  {m: "Mentolo: allevia il dolore, lenisce, riduce l'infiammazione e aiuta a rafforzare legamenti, tendini, e muscoli, favorendone la mobilità."},
  {m: "Consolida maggiore medicinale: Contrasta le malattie dell'apparato muscolo-scheletrico, riducendo l'infiammazione e gonfiore, bloccando la degenerazione della cartilagine, ripristinando la mobilità articolare e rinforzando i vasi sanguigni."},
  {m: "Peperoncino selvatico: Migliora la circolazione sanguigna e linfatica, aumenta l'elasticità dei tessuti cartilaginei, elimina la congestione, gonfiore e nutre le cellule con elementi benefici."},
  {m: "Eucalipto agli agrumi: combatte i microbi, favorisce un recupero più rapido dei tessuti danneggiati, allevia il dolore, elimina il gonfiore e partecipa alla sintesi del liquido sinoviale."},
  {m: "Semi di ippocastano: Blocca il processo infiammatorio, distrugge i patogeni, riduce i tempi di rigenerazione dei tessuti danneggiati, rinforza i legamenti e le articolazioni e ripristina la loro mobilità alla normalità."},
  {m: "Questi componenti possono essere utilizzati separatamente, ma è molto più comodo ed efficace utilizzarli come parte del complesso Fortuflex.Sono presenti sotto forma di estratti intensivi con una concentrazione massima di nutrienti."},
  {m: "Per ripristinare le articolazioni, è sufficiente applicarlo due volte al giorno: al mattino e alla sera prima di andare a letto. In appena un mese, sarai in grado di raggiungere il tuo obiettivo. "},
 
  {m: 'Ecco come si presenta la crema Fortuflex: <br><br> <img src="images/prod.png" class="product-img" style="width: 100%; max-width: 160px;"> '},
  {m: "La crema Fortuflex contiene gli estratti più concentrati di ingredienti terapeutici naturali che avviano il processo di ripristino della cartilagine e del sacco articolare, aumentano le proprietà ammortizzanti della cartilagine e stimolano la sintesi dell'acido ialuronico."},
  {m: "Pertanto, Fortuflex è un trattamento molto efficace per il sistema muscolo-scheletrico.<br>Elimina la causa dei problemi e ripristina la salute delle articolazioni, della colonna vertebrale e della cartilagine.<br>Fin dal primo giorno, avvia il processo di rigenerazione del corpo.<br>Elimina il dolore, in modo rapido ed efficace. "},
  {m: "La crema agisce a livello cellulare, ripristinando la circolazione sanguigna e favorendo la guarigione profonda dei tessuti.  Cura qualsiasi problema articolare, che si tratti di artrosi, artrite, sciatica, reumatismi, radicolite o osteocondrosi, persino crepe nelle vertebre. Contusioni, colpi, fratture, qualsiasi problema può essere trattato con questa crema."},
  {m: 'Ecco i risultati dei miei clienti che hanno ripristinato con successo le loro articolazioni utilizzando i miei consigli: <br> <br><img src="images/comm-photo3-135-arb.jpg"> <br> <img src="images/comm2-92a-arb.jpg"> <br> <img src="images/comm6-abb-arb.jpg"> '},
  {m: "La durata ottimale del trattamento con Fortuflex varia in base a diversi fattori, tra cui la gravità dei sintomi, l'età, il peso corporeo e lo stile di vita. In media, si consiglia un ciclo di 60 giorni."},
  {m: "Durante questo periodo, la crema agisce in profondità per:<br>Riparare il tessuto osseo e cartilagineo<br>Ripristinare il liquido sinoviale<br>Rinforzare le fibre muscolari e il tessuto legamentoso<br>Migliorare la circolazione sanguigna<br>Promuovere la guarigione dei tendini"},
  {m: "In qualità di nostro 2.000esimo cliente online, sei invitato a beneficiare di un'offerta speciale su Fortuflex. Inserisci semplicemente il tuo nome e numero di telefono nel modulo d'ordine qui sotto per ottenere la crema a un prezzo promozionale."},
  {m: "Affrettati a ordinare! La quantità di crema in offerta è limitata."}
];
var mass_id = 0, length_mass = 0, lengt_num_mas = 0, text = "", speedtext = 35, process = !0;

function app() {
  var e = new Date, s = ("0" + e.getMinutes()).slice(-2), t = ("0" + e.getHours()).slice(-2) + ":" + s;
  if ($(".chat").height() + 100 > $(".content").height()) {
    $("#scroll_id").removeClass("hide");
    var n = $(".inp").val();
    $(".inp").val(++n)
  }
  const a = '<div class="chat-content-item manager "><div class="chat-content-desc"><div class="chat-content-desc-item manager"><p class="text" id="mass' + mass_id + '"></p><p class="message-time" id="time">' + t + "</p></div></div></div>";
  $(".chat-content-list").append(a), "0" == document.getElementById("res").value ? $("#scroll_id").addClass("aba") : $("#scroll_id").removeClass("aba")
}

function myMassange(e) {
  var s = new Date, t = ("0" + s.getMinutes()).slice(-2);
  let n = '<div class="chat-content-item user item-active"><div class="chat-content-desc"><div class="chat-content-desc-item user"><p class="text" class="users_mass">' + e + '</p><p class="message-time" id="time"><span>' + ("0" + s.getHours()).slice(-2) + ":" + t + '</span><span class="icon_ack" data-testid="msg-dblcheck" aria-label=" Прочитано " data-icon="msg-dblcheck" ><svg viewBox="0 0 16 15" width="16" height="15" ><path fill="currentColor" d="m15.01 3.316-.478-.372a.365.365 0 0 0-.51.063L8.666 9.879a.32.32 0 0 1-.484.033l-.358-.325a.319.319 0 0 0-.484.032l-.378.483a.418.418 0 0 0 .036.541l1.32 1.266c.143.14.361.125.484-.033l6.272-8.048a.366.366 0 0 0-.064-.512zm-4.1 0-.478-.372a.365.365 0 0 0-.51.063L4.566 9.879a.32.32 0 0 1-.484.033L1.891 7.769a.366.366 0 0 0-.515.006l-.423.433a.364.364 0 0 0 .006.514l3.258 3.185c.143.14.361.125.484-.033l6.272-8.048a.365.365 0 0 0-.063-.51z"></path></svg></span></p></div></div></div>';
  $(".chat-content-list").append(n), $(".content").animate({scrollTop: $(".chat-content-list").height()}, 700), $("#scroll_id").addClass("hide")
}

function question1() {
  $(".chat-content-list").append('<div class="chat-content-buttons-gender"><div class="chat-content-buttons-gender-block"><span class="question1M">Disagio</span></div><div class="chat-content-buttons-gender-block"><span class="question1W">Dolore</span></div><div class="chat-content-buttons-gender-block"><span class="question1P">Rigidità articolare</span></div><div class="chat-content-buttons-gender-block"><span class="question1T">Limitazione della mobilità</span></div></div>')
}

function choise1() {
  $(".question1M").click((() => {
    document.querySelector(".chat-content-buttons-gender").style.display = "none", myMassange("Disagio"), setTimeout((() => {
      process = !0
    }), 500)
  })), $(".question1W").click((() => {
    document.querySelector(".chat-content-buttons-gender").style.display = "none", myMassange("Dolore"), setTimeout((() => {
      process = !0
    }), 500)
  })), $(".question1P").click((() => {
    document.querySelector(".chat-content-buttons-gender").style.display = "none", myMassange("Rigidità articolare"), setTimeout((() => {
      process = !0
    }), 500)
  })), $(".question1T").click((() => {
    document.querySelector(".chat-content-buttons-gender").style.display = "none", myMassange("Limitazione della mobilità"), setTimeout((() => {
      process = !0
    }), 500)
  }))
}

function question2() {
  $(".chat-content-list").append('<div class="chat-content-buttons-gender"><div class="chat-content-buttons-gender-block"><span class="question2M">Meno di un anno</span></div><div class="chat-content-buttons-gender-block"><span class="question2W">Da 1 a 3 anni</span></div><div class="chat-content-buttons-gender-block"><span class="question2P">Da 3 a 5 anni</span></div><div class="chat-content-buttons-gender-block"><span class="question2T">Più di 5 anni</span></div></div>')
}

function choise2() {
  $(".question2M").click((() => {
    document.querySelector(".chat-content-buttons-gender").style.display = "none", myMassange("Meno di un anno"), $(".chat-content-buttons-gender").css("display", "none"), setTimeout((() => {
      process = !0
    }), 500)
  })), $(".question2W").click((() => {
    document.querySelector(".chat-content-buttons-gender").style.display = "none", myMassange("Da 1 a 3 anni"), $(".chat-content-buttons-gender").css("display", "none"), setTimeout((() => {
      process = !0
    }), 500)
  })), $(".question2P").click((() => {
    document.querySelector(".chat-content-buttons-gender").style.display = "none", myMassange("Da 3 a 5 anni"), $(".chat-content-buttons-gender").css("display", "none"), setTimeout((() => {
      process = !0
    }), 500)
  })), $(".question2T").click((() => {
    document.querySelector(".chat-content-buttons-gender").style.display = "none", myMassange("Più di 5 anni"), $(".chat-content-buttons-gender").css("display", "none"), setTimeout((() => {
      process = !0
    }), 500)
  }))
}

function question3() {
  $(".chat-content-list").append('<div class="chat-content-buttons-gender"><div class="chat-content-buttons-gender-block"><span class="question3M">Colonna cervicale</span></div><div class="chat-content-buttons-gender-block"><span class="question3W">Cingolo scapolare superiore (spalle, gomiti, mani)</span></div><div class="chat-content-buttons-gender-block"><span class="question3P">Regione pelvica</span></div><div class="chat-content-buttons-gender-block"><span class="question3T">Arti inferiori (ginocchia, piedi, dita dei piedi)</span></div></div>')
}

function choise3() {
  $(".question3M").click((() => {
    document.querySelector(".chat-content-buttons-gender").style.display = "none", myMassange("Colonna cervicale"), $(".chat-content-buttons-gender").css("display", "none"), setTimeout((() => {
      process = !0
    }), 500)
  })), $(".question3W").click((() => {
    document.querySelector(".chat-content-buttons-gender").style.display = "none", myMassange("Cingolo scapolare superiore (spalle, gomiti, mani)"), $(".chat-content-buttons-gender").css("display", "none"), setTimeout((() => {
      process = !0
    }), 500)
  })), $(".question3P").click((() => {
    document.querySelector(".chat-content-buttons-gender").style.display = "none", myMassange("Regione pelvica"), $(".chat-content-buttons-gender").css("display", "none"), setTimeout((() => {
      process = !0
    }), 500)
  })), $(".question3T").click((() => {
    document.querySelector(".chat-content-buttons-gender").style.display = "none", myMassange("Arti inferiori (ginocchia, piedi, dita dei piedi)"), $(".chat-content-buttons-gender").css("display", "none"), setTimeout((() => {
      process = !0
    }), 500)
  }))
}

function question4() {
  $(".chat-content-list").append('<div class="chat-content-buttons-gender"><div class="chat-content-buttons-gender-block"><span class="question4M">Poche volte al mese</span></div><div class="chat-content-buttons-gender-block"><span class="question4W">Poche volte a settimana</span></div><div class="chat-content-buttons-gender-block"><span class="question4P">Diverse volte al giorno</span></div><div class="chat-content-buttons-gender-block"><span class="question4T">Sento un dolore costante</span></div></div>')
}

function choise4() {
  $(".question4M").click((() => {
    document.querySelector(".chat-content-buttons-gender").style.display = "none", myMassange("Poche volte al mese"), $(".chat-content-buttons-gender").css("display", "none"), setTimeout((() => {
      process = !0
    }), 500)
  })), $(".question4W").click((() => {
    document.querySelector(".chat-content-buttons-gender").style.display = "none", myMassange("Poche volte a settimana"), $(".chat-content-buttons-gender").css("display", "none"), setTimeout((() => {
      process = !0
    }), 500)
  })), $(".question4P").click((() => {
    document.querySelector(".chat-content-buttons-gender").style.display = "none", myMassange("Diverse volte al giorno"), $(".chat-content-buttons-gender").css("display", "none"), setTimeout((() => {
      process = !0
    }), 500)
  })), $(".question4T").click((() => {
    document.querySelector(".chat-content-buttons-gender").style.display = "none", myMassange("Sento un dolore costante"), $(".chat-content-buttons-gender").css("display", "none"), setTimeout((() => {
      process = !0
    }), 500)
  }))
}

function question5() {
  $(".chat-content-list").append('<div class="chat-content-buttons-gender"><div class="chat-content-buttons-gender-block"><span class="question5M">Fino a 30 anni</span></div><div class="chat-content-buttons-gender-block"><span class="question5W">30-45 anni</span></div><div class="chat-content-buttons-gender-block"><span class="question5P">46-60 anni</span></div><div class="chat-content-buttons-gender-block"><span class="question5T">Più di 60 anni</span></div></div>')
}

function choise5() {
  $(".question5M").click((() => {
    document.querySelector(".chat-content-buttons-gender").style.display = "none", myMassange("Fino a 30 anni"), $(".chat-content-buttons-gender").css("display", "none"), setTimeout((() => {
      process = !0
    }), 500)
  })), $(".question5W").click((() => {
    document.querySelector(".chat-content-buttons-gender").style.display = "none", myMassange("30-45 anni"), $(".chat-content-buttons-gender").css("display", "none"), setTimeout((() => {
      process = !0
    }), 500)
  })), $(".question5P").click((() => {
    document.querySelector(".chat-content-buttons-gender").style.display = "none", myMassange("46-60 anni"), $(".chat-content-buttons-gender").css("display", "none"), setTimeout((() => {
      process = !0
    }), 500)
  })), $(".question5T").click((() => {
    document.querySelector(".chat-content-buttons-gender").style.display = "none", myMassange("Più di 60 anni"), $(".chat-content-buttons-gender").css("display", "none"), setTimeout((() => {
      process = !0
    }), 500)
  })) 
}

function question6() {
  $(".chat-content-list").append('<div class="chat-content-buttons-gender"><div class="chat-content-buttons-gender-block"><span class="question6M">Fino a 50 kg</span></div><div class="chat-content-buttons-gender-block"><span class="question6W">Da 50 a 70 kg</span></div><div class="chat-content-buttons-gender-block"><span class="question6P">Da 71 a 90 kg</span></div><div class="chat-content-buttons-gender-block"><span class="question6O">Più di 90 kg</span></div></div>')
}

function choise6() {
  $(".question6M").click((() => {
    document.querySelector(".chat-content-buttons-gender").style.display = "none", myMassange("Fino a 50 kg"), $(".chat-content-buttons-gender").css("display", "none"), setTimeout((() => {
      process = !0
    }), 500)
  })), $(".question6W").click((() => {
    document.querySelector(".chat-content-buttons-gender").style.display = "none", myMassange("Da 50 a 70 kg"), $(".chat-content-buttons-gender").css("display", "none"), setTimeout((() => {
      process = !0
    }), 500)
  })), $(".question6P").click((() => {
    document.querySelector(".chat-content-buttons-gender").style.display = "none", myMassange("Da 71 a 90 kg"), $(".chat-content-buttons-gender").css("display", "none"), setTimeout((() => {
      process = !0
    }), 500)
  })),  $(".question6O").click((() => {
    document.querySelector(".chat-content-buttons-gender").style.display = "none", myMassange("Più di 90 kg"), $(".chat-content-buttons-gender").css("display", "none"), setTimeout((() => {
      process = !0
    }), 500)
  }))
}

function question7() {
  $(".chat-content-list").append('<div class="chat-content-buttons-gender"><div class="chat-content-buttons-gender-block"><span class="question7M">Meno a 150 cm</span></div><div class="chat-content-buttons-gender-block"><span class="question7W">150-160 cm</span></div><div class="chat-content-buttons-gender-block"><span class="question7P">161-170 cm</span></div><div class="chat-content-buttons-gender-block"><span class="question7G">Più di 180 cm</span></div></div>')
}

function choise7() {
  $(".question7M").click((() => {
    document.querySelector(".chat-content-buttons-gender").style.display = "none", myMassange("Meno a 150 cm"), $(".chat-content-buttons-gender").css("display", "none"), setTimeout((() => {
      process = !0
    }), 500)
  })), $(".question7W").click((() => {
    document.querySelector(".chat-content-buttons-gender").style.display = "none", myMassange("150-160 cm"), $(".chat-content-buttons-gender").css("display", "none"), setTimeout((() => {
      process = !0
    }), 500)
  })), $(".question7P").click((() => {
    document.querySelector(".chat-content-buttons-gender").style.display = "none", myMassange("161-170 cm"), $(".chat-content-buttons-gender").css("display", "none"), setTimeout((() => {
      process = !0
    }), 500)
  })), $(".question7G").click((() => {
    document.querySelector(".chat-content-buttons-gender").style.display = "none", myMassange("Più di 180 cm"), $(".chat-content-buttons-gender").css("display", "none"), setTimeout((() => {
      process = !0
    }), 500)
  }))
}

setTimeout((() => {
  var e = new Date, s = ("0" + e.getMinutes()).slice(-2);
  const t = '<div class="chat-content-item manager "><div class="chat-content-desc"><div class="chat-content-desc-item manager"><p class="text" id="mass' + mass_id + '"></p><p class="message-time" id="time">' + ("0" + e.getHours()).slice(-2) + ":" + s + "</p></div></div></div>";
  $(".chat-content-list").append(t), $("#scroll_id").click((function (e) {
    $(this).removeClass("hide-q"), $(".content").animate({scrollTop: $(".chat").height()}, 700)
  }));
  const n = setInterval((function () {
    1 == process && (lengt_num_mas != massange.length ? (text += massange[lengt_num_mas].m[length_mass], length_mass++, $("#mass" + lengt_num_mas).html(text), 3 === lengt_num_mas && length_mass === massange[lengt_num_mas].m.length - 1 && (question1(), process = !1, choise1(), $("#scroll_id").addClass("hide-q"), $(".content").animate({scrollTop: $(".chat").height()}, 700), $("#scroll_id").removeClass("hide-q")), 4 === lengt_num_mas && length_mass === massange[lengt_num_mas].m.length - 1 && (question2(), process = !1, choise2(), $("#scroll_id").addClass("hide-q"), $(".content").animate({scrollTop: $(".chat").height()}, 700), $("#scroll_id").removeClass("hide-q")), 5 === lengt_num_mas && length_mass === massange[lengt_num_mas].m.length - 1 && (question3(), process = !1, choise3(), $("#scroll_id").addClass("hide-q"), $(".content").animate({scrollTop: $(".chat").height()}, 700), $("#scroll_id").removeClass("hide-q")), 6 === lengt_num_mas && length_mass === massange[lengt_num_mas].m.length - 1 && (question4(), process = !1, choise4(), $("#scroll_id").addClass("hide-q"), $(".content").animate({scrollTop: $(".chat").height()}, 700), $("#scroll_id").removeClass("hide-q")), 7 === lengt_num_mas && length_mass === massange[lengt_num_mas].m.length - 1 && (question5(), process = !1, choise5(), $("#scroll_id").addClass("hide-q"), $(".content").animate({scrollTop: $(".chat").height()}, 700), $("#scroll_id").removeClass("hide-q")), 8 === lengt_num_mas && length_mass === massange[lengt_num_mas].m.length - 1 && (question6(), process = !1, choise6(), $("#scroll_id").addClass("hide-q"), $(".content").animate({scrollTop: $(".chat").height()}, 700), $("#scroll_id").removeClass("hide-q")), 9 === lengt_num_mas && length_mass === massange[lengt_num_mas].m.length - 1 && (question7(), process = !1, choise7(), $("#scroll_id").addClass("hide-q"), $(".content").animate({scrollTop: $(".chat").height()}, 700), $("#scroll_id").removeClass("hide-q")), length_mass == massange[lengt_num_mas].m.length && (lengt_num_mas++, mass_id++, length_mass = 0, text = "", app())) : (clearInterval(n), $("#mass" + lengt_num_mas).parent().parent().css("display", "none"), $(".iframe-form").addClass("show"), $(".btn-top").addClass("show"), start_timer()))
  }), speedtext)
}), 10), $(".content").scroll((function () {
  "0" == document.getElementById("res").value ? $("#scroll_id").addClass("aba") : $("#scroll_id").removeClass("aba")
}));
var $marker = $("#down-box");
$(".content").scroll((function () {
  $(".content").scrollTop() + $(".content").height() >= $(".chat").height() + 100 ? (document.getElementById("res").value = "0", $("#scroll_id").addClass("hide")) : $("#scroll_id").removeClass("hide")
}));
let intr, time = 600;

function start_timer() {
  intr = setInterval(tick, 1e3)
}

function tick() {
  time -= 1;
  var e = Math.floor(time / 60), s = time - 60 * e;
  0 == e && 0 == s && clearInterval(intr), s = s >= 10 ? s : "0" + s, $("#min").html("0" + e), $("#sec").html(s)
}