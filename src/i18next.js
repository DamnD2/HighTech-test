import i18n from "i18next";
import { initReactI18next } from "react-i18next";

const translationRu = {
  header_date: "09 сентября 2020",
  section_title_Administration: "Административные процедуры",
  section_title_Management: "Руководство",
  section_title_Schedule: "График приёма",
  section_title_Structure: "Структура",
  footer__info_1: "Национальный оператор почтовой связи Республики Беларусь",
  footer__info_2: "Покупайте белорусские товары на shop.belpost.by",
  footer__info_3: "Разработано компанией",
  section_page_title: "Страница",
  section_page_text: `Учитывая ключевые сценарии поведения, высокое качество позиционных исследований влечет за собой
  процесс внедрения и модернизации вывода текущих активов. Но тщательные исследования конкурентов
  могут быть разоблачены. Современные технологии достигли такого уровня, что граница обучения
  кадров позволяет оценить значение новых предложений. Высокий уровень вовлечения представителей
  целевой аудитории является четким доказательством простого факта: выбранный нами инновационный
  путь влечет за собой процесс внедрения и модернизации форм воздействия. Есть над чем задуматься:
  непосредственные участники технического прогресса и по сей день остаются уделом либералов, которые
  жаждут быть разоблачены. Значимость этих проблем настолько очевидна, что базовый вектор развития
  однозначно фиксирует необходимость кластеризации усилий. В своём стремлении повысить качество жизни,
  они забывают, что убеждённость некоторых оппонентов, а также свежий взгляд на привычные вещи
  - безусловно открывает новые горизонты для укрепления моральных ценностей. Не следует, однако,
  забывать, что базовый вектор развития является качественно новой ступенью существующих финансовых
  и административных условий. Вот вам яркий пример современных тенденций - сложившаяся структура
  организации предопределяет высокую востребованность инновационных методов управления процессами.
  Господа, перспективное планирование создаёт необходимость включения в производственный план целого
  ряда внеочередных мероприятий с учётом комплекса существующих финансовых и административных условий.
  Приятно, граждане, наблюдать, как активно развивающиеся страны третьего мира смешаны с не уникальными
  данными до степени совершенной неузнаваемости, из-за чего возрастает их статус бесполезности. Следует
  отметить, что выбранный нами инновационный путь создаёт предпосылки для инновационных методов управления
  процессами.`,
};
const translationEn = {
  header_date: "09 September 2020",
  section_title_Administration: "Administrative procedures",
  section_title_Management: "Management",
  section_title_Schedule: "Appointment schedule",
  section_title_Structure: "Structure",
  footer__info_1: "National postal operator of the Republic of Belarus",
  footer__info_2: "Buy Belarusian goods at shop.belpost.by",
  footer__info_3: "Developed by",
  section_page_title: "Page",
  section_page_text: `Given the key behaviors, high quality positional research entails
  the process of implementation and modernization of the withdrawal of current assets. But careful research of competitors
  can be exposed. Modern technology has reached such a level that the frontier of learning
  cadres allows you to assess the value of new proposals. High level of involvement of representatives
  target audience is clear evidence of a simple fact: the innovative
  the path entails the process of introducing and modernizing the forms of influence. There is something to think about:
  direct participants in technical progress to this day remain the lot of liberals who
  long to be exposed. The significance of these problems is so obvious that the basic vector of development
  unambiguously fixes the need for clustering efforts. In their quest to improve the quality of life,
  they forget that the conviction of some opponents, as well as a fresh look at familiar things
  - undoubtedly opens up new horizons for strengthening moral values. Should not, however,
  forget that the basic vector of development is a qualitatively new stage of existing financial
  and administrative conditions. Here is a vivid example of modern trends - the existing structure
  organizations predetermines the high demand for innovative methods of process management.
  Gentlemen, long-term planning creates the need to include in the production plan the whole
  a number of extraordinary measures, taking into account the complex of existing financial and administrative conditions.
  It's nice, citizens, to see how actively developing third world countries are mixed with non-unique
  data to the point of completely unrecognizable, which increases their status of uselessness. Should
  to note that the innovative path we have chosen creates the preconditions for innovative management methods
  processes.`,
};

const resources = {
  en: { translation: translationEn },
  ru: { translation: translationRu },
};

i18n
  .use(initReactI18next)
  .init({
    resources,
    lng: "ru",
    fallbackLng: "ru",
    interpolation: { escapeValue: false },
  });

export default i18n;
