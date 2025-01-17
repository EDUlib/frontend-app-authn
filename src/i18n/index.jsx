import arMessages from './messages/ar.json';
import caMessages from './messages/ca.json';
// no need to import en messages-- they are in the defaultMessage field
import es419Messages from './messages/es_419.json';
import frMessages from './messages/fr.json';
import zhcnMessages from './messages/zh_CN.json';
import ititMessages from './messages/it_IT.json';
import ptptMessages from './messages/pt_PT.json';
import dedeMessages from './messages/de_DE.json';
import hiMessages from './messages/hi.json';
import heMessages from './messages/he.json';
import idMessages from './messages/id.json';
import kokrMessages from './messages/ko_kr.json';
import plMessages from './messages/pl.json';
import ptbrMessages from './messages/pt_br.json';
import ruMessages from './messages/ru.json';
import thMessages from './messages/th.json';
import ukMessages from './messages/uk.json';

const messages = {
  ar: arMessages,
  es: es419Messages, // Prospectus uses es language code for spanish, added `es` option and pointed to es-419 strings.
  'es-419': es419Messages,
  fr: frMessages,
  'zh-cn': zhcnMessages,
  'it-it': ititMessages,
  'pt-pt': ptptMessages,
  'de-de': dedeMessages,
  ca: caMessages,
  he: heMessages,
  id: idMessages,
  'ko-kr': kokrMessages,
  pl: plMessages,
  'pt-br': ptbrMessages,
  ru: ruMessages,
  th: thMessages,
  uk: ukMessages,
  hi: hiMessages,
};

export default messages;
