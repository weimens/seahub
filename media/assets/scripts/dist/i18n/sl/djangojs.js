!function(e){var t=e.django||(e.django={});t.pluralidx=function(e){var t=e%100==1?0:e%100==2?1:e%100==3||e%100==4?2:3;return"boolean"==typeof t?t?1:0:t},t.catalog=t.catalog||{};var a={"Close (Esc)":"Zapri (Esc)","Failed to send to {placeholder}":"Neuspešno poslano {placeholder}","Failed.":"Neuspešno.","Failed. Please check the network.":"Neuspešno. Prosimo, preverite povezavo.","File Upload canceled":"Nalaganje datoteke preklicano","File Upload complete":"Nalaganje datoteke končano","File Upload failed":"Nalaganje datoteke ni uspelo","File Uploading...":"Nalaganje datoteke...","File is locked":"Datoteka je zaklenjena",Hide:"Skrij","Just now":"Ravnokar","Loading failed":"Neuspešno nalaganje","Next (Right arrow key)":"Naprej (Desna puščica)","No matches":"Ni zadetkov","Open in New Tab":"Odpri v novem zavihku","Please check the network.":"Prosimo, preverite povezavo.","Please enter 1 or more character":"Prosimo, vpiši 1 ali več znakov","Please enter valid days":"Prosimo, vnesite veljavno število dni","Previous (Left arrow key)":"Prejšnji (Leva puščica)","Searching...":"Iskanje...","Select groups":"Izberi skupine",Show:"Prikaži",Success:"Uspeh","Successfully sent to {placeholder}":"Uspešno poslano {placeholder}",canceled:"preklicano",uploaded:"naloženo"};for(var n in a)t.catalog[n]=a[n];t.jsi18n_initialized||(t.gettext=function(e){var a=t.catalog[e];return void 0===a?e:"string"==typeof a?a:a[0]},t.ngettext=function(e,a,n){var o=t.catalog[e];return void 0===o?1==n?e:a:o[t.pluralidx(n)]},t.gettext_noop=function(e){return e},t.pgettext=function(e,a){var n=t.gettext(e+""+a);return-1!=n.indexOf("")&&(n=a),n},t.npgettext=function(e,a,n,o){var i=t.ngettext(e+""+a,e+""+n,o);return-1!=i.indexOf("")&&(i=t.ngettext(a,n,o)),i},t.interpolate=function(e,t,a){return a?e.replace(/%\(\w+\)s/g,function(e){return String(t[e.slice(2,-2)])}):e.replace(/%s/g,function(e){return String(t.shift())})},t.formats={DATETIME_FORMAT:"j. F Y. H:i",DATETIME_INPUT_FORMATS:["%d.%m.%Y %H:%M:%S","%d.%m.%Y %H:%M:%S.%f","%d.%m.%Y %H:%M","%d.%m.%Y","%d.%m.%y %H:%M:%S","%d.%m.%y %H:%M:%S.%f","%d.%m.%y %H:%M","%d.%m.%y","%d-%m-%Y %H:%M:%S","%d-%m-%Y %H:%M:%S.%f","%d-%m-%Y %H:%M","%d-%m-%Y","%d. %m. %Y %H:%M:%S","%d. %m. %Y %H:%M:%S.%f","%d. %m. %Y %H:%M","%d. %m. %Y","%d. %m. %y %H:%M:%S","%d. %m. %y %H:%M:%S.%f","%d. %m. %y %H:%M","%d. %m. %y","%Y-%m-%d %H:%M:%S","%Y-%m-%d %H:%M:%S.%f","%Y-%m-%d %H:%M","%Y-%m-%d"],DATE_FORMAT:"d. F Y",DATE_INPUT_FORMATS:["%d.%m.%Y","%d.%m.%y","%d-%m-%Y","%d. %m. %Y","%d. %m. %y","%Y-%m-%d"],DECIMAL_SEPARATOR:",",FIRST_DAY_OF_WEEK:"0",MONTH_DAY_FORMAT:"j. F",NUMBER_GROUPING:"3",SHORT_DATETIME_FORMAT:"j.n.Y. H:i",SHORT_DATE_FORMAT:"j. M. Y",THOUSAND_SEPARATOR:".",TIME_FORMAT:"H:i",TIME_INPUT_FORMATS:["%H:%M:%S","%H:%M:%S.%f","%H:%M"],YEAR_MONTH_FORMAT:"F Y"},t.get_format=function(e){var a=t.formats[e];return void 0===a?e:a},e.pluralidx=t.pluralidx,e.gettext=t.gettext,e.ngettext=t.ngettext,e.gettext_noop=t.gettext_noop,e.pgettext=t.pgettext,e.npgettext=t.npgettext,e.interpolate=t.interpolate,e.get_format=t.get_format,t.jsi18n_initialized=!0)}(this);