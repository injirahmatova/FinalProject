import React from "react";
import styles from "../../Companents/Branch/Branch.module.scss";

import { useDispatch, useSelector } from "react-redux";
import { selectBranch } from "../../Redux/Slices/branchSlice";
const branches = [
  {
    name: "BAŞ OFİS-Nərimanov",
    address:
      "Bakı şəhəri, Nərimanov rayonu, Ağa Neymatulla b 44/2 (Metropark t.m yanı)",
    
    coordinates:
      "https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d6076.4821611947755!2d49.8734482!3d40.4035098!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40307d86302692d7%3A0xeb164f08a0d4beed!2sKango.az!5e0!3m2!1saz!2saz!4v1699211632078!5m2!1saz!2saz",
  },
  {
    name: 'Sumqayıt -"Asan Xidmətin" yanı',
    address:
      "Sumqayıt şəhəri, 20 Yanvar küç. məhəllə 36. ev 29/8 mənzil 2 (Avtovağzal və Asan Xidmətin yanı)",
    
    coordinates:
      "https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d3029.9348947645713!2d49.66321567601946!3d40.58719247141267!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zNDDCsDM1JzEzLjkiTiA0OcKwMzknNTYuOSJF!5e0!3m2!1str!2saz!4v1699212047315!5m2!1str!2saz",
  },
  {
    name: "Bakıxanov",
    address:
      "Bakı şəhəri, Sabunçu rayonu, Bakıxanov qəsəbəsi, Şamil Kamilov küçəsi, 3F (Səbinə şadlıq evinin yanı)",
    
    coordinates:
      "https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d6075.783879553873!2d49.9653555!3d40.4112446!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x403063c4ccab363f%3A0x36fcdb0a04d067ab!2sKango.az%20Bak%C4%B1xanov!5e0!3m2!1saz!2saz!4v1699212175028!5m2!1saz!2saz",
  },
  {
    name: "Həzi Aslanov",
    address:
      "Xətai ry. Həzi Aslanov. Məhəmməd Hadi küç. 29/44 məhəllə.(H.Aslanov metro çıxışı.Bank of Bakunun və yeni şüşəli Ticarət m. yanı)",
    
    coordinates:
      "https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d1519.8896851029028!2d49.9527895!3d40.3694162!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x403065ddad83244d%3A0x90a32bf32dcaf489!2sKango.az%20-%20H%C9%99zi%20Aslanov%20Filial%C4%B1!5e0!3m2!1saz!2saz!4v1699212487960!5m2!1saz!2saz",
  },
  {
    name: "28 MAY",
    address:
      "Baki seheri, Nesimi rayonu, Resid Behbudov kucesi, 94 C. (KapitalBanki keçən kimi sağda)",
    
    coordinates:
      "https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d3039.3191109962486!2d49.841571776009125!3d40.37961957144561!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zNDDCsDIyJzQ2LjYiTiA0OcKwNTAnMzguOSJF!5e0!3m2!1str!2saz!4v1699212115169!5m2!1str!2saz",
  },
  {
    name: "Memar Əcəmi",
    address:
      "Bakı şəhəri, Nəsimi rayonu, 2-ci mikrorayon, 3224-cu məhəllə, Cavadxan küçəsi 48, Qapı 14.",
    
    coordinates:
      "https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d3037.7866029487127!2d49.81315607601078!3d40.41357797144017!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zNDDCsDI0JzQ4LjkiTiA0OcKwNDgnNTYuNiJF!5e0!3m2!1str!2saz!4v1699212307287!5m2!1str!2saz",
  },
  {
    name: "İnşaatçılar",
    address:
      "Şərifzadə 174. İnşaatçılar metrosunun çıxışı. (Kolorit restoranın arxası)",
    
    coordinates:
      "https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d3038.7793592676785!2d49.80149077600972!3d40.391582471443634!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zNDDCsDIzJzI5LjciTiA0OcKwNDgnMTQuNiJF!5e0!3m2!1str!2saz!4v1699212259753!5m2!1str!2saz",
  },
  {
    name: "Xırdalan",
    address:
      'Abşeron rayonu, Xırdalan şəhəri, 27ci məhəllə Həzi Aslanov küç, ev 2A ( Misir parkından "Bizim Market"ə gedəndə BAZAR yolu ilə üzbəüz)',
    coordinates:
      "https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d379.4862886640398!2d49.743874999999996!3d40.4555647!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1str!2saz!4v1707674802486!5m2!1str!2saz",
  },
  
  {
    name: "Xalqlar Dostluğu",
    address:
      "Nizami rayonu, Qara Qarayev prospekti 375. (Xalqlar dostluğu metrosundan çıxan kimi Səhhət klinikasının həyəti)",
    
    coordinates:
      "https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d3038.5778021692186!2d49.95174807600998!3d40.39604897144291!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zNDDCsDIzJzQ1LjgiTiA0OcKwNTcnMTUuNiJF!5e0!3m2!1str!2saz!4v1699532322925!5m2!1str!2saz",
  },
  {
    name: "Azadliq (7mk)",
    address:
      "Bakı şeheri, Bineqedi rayonu, 7 mkr , Abay kunanbayev 230 ( Bolluq bazarından yuxarı ankaranın, nenemin tendiri, bravo, canım lahmacun üstü)",
    
    coordinates:
      "https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d3037.0509556451348!2d49.84763717601158!3d40.429870571437455!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zNDDCsDI1JzQ3LjUiTiA0OcKwNTEnMDAuOCJF!5e0!3m2!1str!2saz!4v1699532258785!5m2!1str!2saz",
  },
  {
    name: "Əhmədli",
    address:
      "Baki seheri xetai rayonu M.Rustemov kucesi ev 4/6 (25 nömrəli məktəbin və 7 nömrəli poliklinikanın yanı)",
    coordinates:
      "https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d3038.7706637901438!2d49.95902827600979!3d40.3917751714436!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zNDDCsDIzJzMwLjQiTiA0OcKwNTcnNDEuOCJF!5e0!3m2!1str!2saz!4v1699211541855!5m2!1str!2saz",
  },
  {
    name: "Nəsimi Metrosu",
    address:
      "Bakı şəhəri, Binəqədi rayonu, Svetlana Məmmədova küçəsi 207C (Nəsimi metrosunun aşağı çıxışına yaxın Abşeron marketlə üzbəüz dayananda sağ hissədəki aradan içəri doğru )",
    coordinates:
      "https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d3037.275826291166!2d49.826376576011405!3d40.42489087143829!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zNDDCsDI1JzI5LjYiTiA0OcKwNDknNDQuMiJF!5e0!3m2!1str!2saz!4v1699210346995!5m2!1str!2saz",
  },

  {
    name: "Şamaxinka",
    address:
      "Bakı şəhəri, Nəsimi rayonu, 20 Yanvar küçəsi 33N (Qızıl Tac şadlıq sarayının arxasındakı Qırmızı binanın altında Kaspi Kursları və İnci Dental Klinikanın yanı)",
    coordinates:
      "https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d3037.8070037429397!2d49.80544977601075!3d40.413126071440196!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zNDDCsDI0JzQ3LjMiTiA0OcKwNDgnMjguOSJF!5e0!3m2!1str!2saz!4v1699210143839!5m2!1str!2saz",
  },

  {
    name: "Dostluq Kinoteatrı",
    address:
      "Bakı şəhəri, Nəsimi rayonu, Azadlıq Prospekti Bina 89 (Dostluq kinoteatrı, Bank Respublika, Qətər Dövlət səfirliyinin yaxınlığı, AL Market və GülBazar ilə üzbəüz)",
    coordinates:
      "https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d3038.8914181995833!2d49.84028247600963!3d40.38909907144405!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zNDDCsDIzJzIwLjgiTiA0OcKwNTAnMzQuMyJF!5e0!3m2!1str!2saz!4v1699210790391!5m2!1str!2saz",
  },

  {
    name: "Badamdar",
    address:
      "Bakı şəhəri, Səbail rayonu, Əziz Nəzərov küçəsi 35B (Endi Marketin yanı, 239 nömrəli məktəbin yaxınlığı)",
    coordinates:
      "https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d3041.0727844921325!2d49.80437617600725!3d40.34073137145186!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zNDDCsDIwJzI2LjYiTiA0OcKwNDgnMjUuMCJF!5e0!3m2!1str!2saz!4v1699210743670!5m2!1str!2saz",
  },

  {
    name: "İnqilab",
    address:
      "Bakı şəhəri, Nərimanov rayonu, Akademik Həsən Əliyev küçəsi 176 (Tbilisinin kruquna çatmamış, Tourgood travelin yanı, Al Sabah Dental Clinic ilə üzbəüz. Daha Detallı-> Həsən Əliyev küçəsində tbilisi kruquna çatmaga 50 metr qalmış 9 mertebenin altı yolun sağında. yanında bərbər shop, tour turizm şirkəti, yolun solu boz yeni tikili, sagda 9 mertebenin altında)",
    coordinates:
      "https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d3038.5710644776545!2d49.81908417600997!3d40.39619827144297!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zNDDCsDIzJzQ2LjMiTiA0OcKwNDknMTguMCJF!5e0!3m2!1str!2saz!4v1699211415145!5m2!1str!2saz",
  },

  {
    name: "Yeni Yasamal",
    address:
      "Bakı şəhəri, Yasamal rayonu, Yeni Yasamal, Əsəd Əhmədov Döngə 5 (77 nömrəli avtobusun son dayanacağı)",
    coordinates:
      "https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d3038.964054462237!2d49.78479007600953!3d40.387489271444366!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zNDDCsDIzJzE1LjAiTiA0OcKwNDcnMTQuNSJF!5e0!3m2!1str!2saz!4v1699211785320!5m2!1str!2saz",
  },

  {
    name: "6cı Paralel",
    address:
      "Bakı şəhəri, Yasamal rayonu, Murtuza Muxtarov küçəsi 179 (Caspian Business Center-in qarşısındakı işıqfordan sağa döndükdə irəlidə Alcopoint Mağazasına çatan kimi sol istiqamətdə 10 metr irəlidə)",
    coordinates:
      "https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d3039.1583800895182!2d49.8248691760093!3d40.38318227144507!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zNDDCsDIyJzU5LjUiTiA0OcKwNDknMzguOCJF!5e0!3m2!1str!2saz!4v1699210696660!5m2!1str!2saz",
  },

  {
    name: "9cu mikrorayon",
    address:
      "Bakı şəhəri, Mir Cəlal küçəsi 63 (9 mkr - Chado restoranı ilə üzbəüz Fatimə Mərasim zalı, Smart Start Təhsil Mərkəzi və VA&VU çay evinin yanı)",
    coordinates:
      "https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d3037.4609095396013!2d49.810897276011225!3d40.42079187143894!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zNDDCsDI1JzE0LjkiTiA0OcKwNDgnNDguNSJF!5e0!3m2!1str!2saz!4v1699210642821!5m2!1str!2saz",
  },

  {
    name: "Gencə prospekti (Bakı)",
    address:
      "Gəncə Prospekti 399B (FFədək restoranın arxası, Buta Marketin yanı, dayanacaqdan pilləlanla yuxarı)",
    coordinates:
      "https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d3040.2253398355165!2d49.95880127600813!3d40.35952757144884!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zNDDCsDIxJzM0LjMiTiA0OcKwNTcnNDEuMCJF!5e0!3m2!1str!2saz!4v1699210939544!5m2!1str!2saz",
  },

  {
    name: "Bakixanov (Stansiya)",
    address:
      "Bakı şəhəri, Sabunçu rayonu, Əhməd bəy Ağayev küçəsi 131 (Kapitalbank və Sparmarketin yanı)",
    coordinates:
      "https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d3036.9467695891567!2d49.95799557601183!3d40.43217757143699!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zNDDCsDI1JzU1LjgiTiA0OcKwNTcnMzguMSJF!5e0!3m2!1str!2saz!4v1703187640420!5m2!1str!2saz",
  },

  {
    name: "8. mikrorayon",
    address:
      "Cəfər Xəndan 23 (Tərgül Tİcarət mərkəzi, Colins, Kığılı, Balbadem mağazaların yanı)",
    coordinates:
      "https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d3037.573906981619!2d49.838272076011066!3d40.4182891714394!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zNDDCsDI1JzA1LjgiTiA0OcKwNTAnMjcuMSJF!5e0!3m2!1str!2saz!4v1704519972839!5m2!1str!2saz",
  },

  {
    name: "Sumqayıt-12 mkr.",
    address:
      "Sumqayıt şəhəri, Koroğlu prospekti, 728 A (qaçqın şəhərciyinin qarşısı)",
    coordinates:
      "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d189.43723816800687!2d49.68933489147897!3d40.56376976507957!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x403091473541fd8b%3A0xa1f4f0fd1b9ff1a!2sServis%20Link!5e0!3m2!1str!2saz!4v1704833209975!5m2!1str!2saz",
  },

  {
    name: "Sumqayıt-Kristal Abşeron",
    address:
      "Sumqayıt şəhəri , 6-ci mikrorayon, ev 43 C (Kristal Abşeron binalari teref, Kaspi uşaq bağçasının yanı)",
    coordinates:
      "https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d3030.3176676485873!2d49.68935007601905!3d40.57874297141396!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zNDDCsDM0JzQzLjUiTiA0OcKwNDEnMzAuOSJF!5e0!3m2!1str!2saz!4v1704833622427!5m2!1str!2saz",
  },

  {
    name: "Biləcəri",
    address:
      "Binəqədi rayonu, Biləcəri qəsəbəsi, 1-ci Şimal küçəsi 2 (Asəf Zeynallı küçəsi) (Əlillər Aptekin yanı, 15 nömrəli poliklinikanın yanı)",
    coordinates:
      "https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d3036.7009441465043!2d49.80171927601208!3d40.43762047143613!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zNDDCsDI2JzE1LjQiTiA0OcKwNDgnMTUuNSJF!5e0!3m2!1str!2saz!4v1706539074441!5m2!1str!2saz",
  },

  {
    name: "Yeni Yasamal (Xiyabani)",
    address: "Bakı şəhəri, Yasamal rayonu, Məhəmməd Xiyabani küçəsi ev 33",
    coordinates:
      "https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d3038.386783097138!2d49.79386307601016!3d40.40028157144232!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zNDDCsDI0JzAxLjAiTiA0OcKwNDcnNDcuMiJF!5e0!3m2!1str!2saz!4v1706539042518!5m2!1str!2saz",
  },

  {
    name: "Köhnə Suraxanı",
    address:
      "Bakı şəhəri, Suraxanı rayonu, Əmircan Qəsəbəsi, Malik Mustafayev küçəsi 1 (Azersun Arena yaxınlığı)",
    coordinates:
      "https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d3037.4402526898893!2d49.99659347601125!3d40.42124937143885!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zNDDCsDI1JzE2LjUiTiA0OcKwNTknNTcuMCJF!5e0!3m2!1str!2saz!4v1707041302244!5m2!1str!2saz",
  },
  {
    name: "Ukrayna dairəsi",
    address:
      "Bakı şəhəri, Xətai rayonu, Aşıq Ələsgər küçəsi 2(Bravo Hiper Marketden biraz yuxarı)",
    coordinates:
      "https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d3039.373665791293!2d49.94677737600914!3d40.378410271445745!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zNDDCsDIyJzQyLjMiTiA0OcKwNTYnNTcuNyJF!5e0!3m2!1str!2saz!4v1707041426022!5m2!1str!2saz",
  },
  {
    name: "Lökbatan",
    address:
      "Qaradağ ray, Lökbatan qs,Şahin Xəlilov küç, 62 ( Brend House-un yanı, Kingsmart 2 Supermarketin arxasi)",
    coordinates:
      "https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d3041.691959334182!2d49.739341376006564!3d40.326993571454224!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zNDDCsDE5JzM3LjIiTiA0OcKwNDQnMzAuOSJF!5e0!3m2!1str!2saz!4v1709410961008!5m2!1str!2saz",
  },
  {
    name: "Neftçilər-1",
    address:
      "Bakı şəhəri, Nizami rayonu, Qara Qarayev pr, ev 68 (metronun çıxışı-Unibankın arxası)",
    coordinates:
      "https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d3037.9024998805144!2d49.939193676010724!3d40.41101067144056!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zNDDCsDI0JzM5LjYiTiA0OcKwNTYnMzAuNCJF!5e0!3m2!1str!2saz!4v1714636537912!5m2!1str!2saz",
  },
  {
    name: "Neftçilər (InterTuran)",
    address:
      "Bakı şəhəri, Nizami rayonu, Nəsimi küç, 32E (İNTERTURAN mebel ilə üzbəüz)",
    coordinates:
      "https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d3037.7497103930973!2d49.94167667601086!3d40.41439517143992!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zNDDCsDI0JzUxLjgiTiA0OcKwNTYnMzkuMyJF!5e0!3m2!1str!2saz!4v1709410897324!5m2!1str!2saz",
  },
  {
    name: "8.ci km-Vasmoy",
    address:
      "Bakı şh, Nizami ry, C. Naxçıvanski küç, 476A (Melhem Hosbitala yaxın, 32 nömrəli avtobusun son dayanacağı)",
    coordinates:
      "https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d3038.094481804688!2d49.95331587601046!3d40.40675767144124!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zNDDCsDI0JzI0LjMiTiA0OcKwNTcnMjEuMiJF!5e0!3m2!1str!2saz!4v1714639965920!5m2!1str!2saz",
  },
];

const Branch = () => {
  const dispatch = useDispatch();
  const selectedBranch = useSelector((state) => state.branch.selectedBranch);

  const handleBranchClick = (branch) => {
    dispatch(selectBranch(branch));
  };

  return (
    <div className={styles.branch}>
      <div className={styles.container}>
        <div className={styles.branchList}>
          <div className={styles.title}>
            <h2>Filiallarımız</h2>
          </div>

          <div className={styles.panelList}>
            <div className={styles.branchName}>
              {branches.map((branch, index) => (
                <button key={index} onClick={() => handleBranchClick(branch)}>
                  {branch.name}
                </button>
              ))}
            </div>
            <div className={styles.info}>
              <h2>Bizimlə əlaqə</h2>
              <ul>
                <li>
                  <p>Telefon</p>
                  <a href="(012) 525 43 43">(012) 525 43 43</a>
                </li>
                <li>
                  <p>Email</p>
                  <a href="mailto:info@kango.az">info@kango.az</a>
                </li>
                <li>
                  <p>İş günlər və saatları</p>
                  <span>Bazar ertəsi - Şənbə 10:00-20:00</span>
                </li>
                <li>
                  <p>Ünvan</p>
                  <span>{selectedBranch.address}</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className={styles.map}>
          <iframe src={selectedBranch.coordinates} frameborder="0"></iframe>
        </div>
      </div>
    </div>
  );
};

export default Branch;
