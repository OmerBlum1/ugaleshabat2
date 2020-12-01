const Addresses = [
  {
    id: 1,
    firstName: "חנה",
    lastName: "סיגאוי",
    phone: "0548333375",
    city: "תל אביב יפו",
    neighborhood: "הצפון הישן",
    street: "למדא",
    homenumber: "13",
    adresscomments: "מול קיוסק ציונה",
    additionalneeds: "שמיכות",
    isproblematic: true,
    howmanypeople: "2",
    kosher: true,
    parve: false,
    vegan: false,
    sugerfree: true,
    lactosefree: false,
    glutenfree: false,
    peanutfree: false,
    nutsfree: true,
    comments: "",
    priority: "1",
  },
  {
    id: 2,
    firstName: "רוני",
    lastName: "דלומי",
    phone: "0548333375",
    city: "בנימינה",
    neighborhood: "צפון",
    street: "ז'בוטינסקי",
    homenumber: "13",
    adresscomments: "",
    additionalneeds: "שמיכות",
    isproblematic: true,
    howmanypeople: "1",
    kosher: false,
    parve: false,
    vegan: false,
    sugerfree: true,
    lactosefree: false,
    glutenfree: false,
    peanutfree: false,
    nutsfree: false,
    comments: "",
    priority: "1",
  },
  {
    id: 3,
    firstName: "אמיר",
    lastName: "בניון",
    phone: "0548333375",
    city: "ירושלים",
    neighborhood: "תלפיות",
    street: "סומסום",
    homenumber: "13",
    adresscomments: "",
    additionalneeds: "",
    isproblematic: true,
    howmanypeople: "3",
    kosher: false,
    parve: false,
    vegan: false,
    sugerfree: false,
    lactosefree: false,
    glutenfree: false,
    peanutfree: true,
    nutsfree: false,
    comments: "",
    priority: "1",
  },
  {
    id: 4,
    firstName: "אבי",
    lastName: "רון",
    phone: "0548333375",
    city: "רמת גן",
    neighborhood: "מרכז העיר",
    street: "יששכרוף",
    homenumber: "9",
    adresscomments: "רחוב חשוך",
    additionalneeds: "שמיכות",
    isproblematic: true,
    howmanypeople: "2",
    kosher: true,
    parve: true,
    vegan: false,
    sugerfree: false,
    lactosefree: false,
    glutenfree: false,
    peanutfree: false,
    nutsfree: false,
    comments: "שומרים שבת, נא להגיע לפני",
    priority: "1",
  },
  {
    id: 5,
    firstName: "אלי",
    lastName: "קופטר",
    phone: "0548333375",
    city: "הרצליה",
    neighborhood: "נחלת עדה",
    street: "בן ציון דינור",
    homenumber: "13",
    adresscomments: "מול קיוסק ציונה",
    additionalneeds: "שמיכות",
    isproblematic: true,
    howmanypeople: "4",
    kosher: false,
    parve: false,
    vegan: false,
    sugerfree: true,
    lactosefree: false,
    glutenfree: false,
    peanutfree: false,
    nutsfree: false,
    comments: "אשה מבוגרת, תשמח לחברה",
    priority: "1",
  },
  {
    id: 6,
    firstName: "מרקו",
    lastName: "פולו",
    phone: "0548333375",
    city: "הרצליה",
    neighborhood: "צפון העיר",
    street: "סירקין",
    homenumber: "13",
    adresscomments: "מול קיוסק ציונה",
    additionalneeds: "שמיכות",
    isproblematic: true,
    howmanypeople: "2",
    kosher: false,
    parve: false,
    vegan: true,
    sugerfree: false,
    lactosefree: false,
    glutenfree: false,
    peanutfree: false,
    nutsfree: false,
    comments: "",
    priority: "1",
  },
  {
    id: 7,
    firstName: "מעון",
    lastName: "נשים",
    phone: "0548333375",
    city: "חיפה",
    neighborhood: "הצפון הישן",
    street: "סירקין",
    homenumber: "13",
    adresscomments: "מול קיוסק ציונה",
    additionalneeds: "שמיכות",
    isproblematic: false,
    howmanypeople: "5",
    kosher: true,
    parve: false,
    vegan: false,
    sugerfree: true,
    lactosefree: false,
    glutenfree: false,
    peanutfree: false,
    nutsfree: false,
    comments: "מעון לנשים",
    priority: "1",
  },
  {
    id: 8,
    firstName: "רמי",
    lastName: "זרזורי",
    phone: "0548333375",
    city: "תל אביב יפו",
    neighborhood: "הדרום הישן",
    street: "סירקין",
    homenumber: "13",
    adresscomments: "מול קיוסק ציונה",
    additionalneeds: "שמיכות",
    isproblematic: true,
    howmanypeople: "2",
    kosher: false,
    parve: false,
    vegan: false,
    sugerfree: true,
    lactosefree: false,
    glutenfree: false,
    peanutfree: false,
    nutsfree: true,
    comments: "",
    priority: "1",
  },
  {
    id: 9,
    firstName: "אנה",
    lastName: "באסטנה",
    phone: "0548333375",
    city: "חיפה",
    neighborhood: "הדרום החדש",
    street: "אלוהה",
    homenumber: "13",
    adresscomments: "מול סופרמרקט ציונה",
    additionalneeds: "שמיכות",
    isproblematic: true,
    howmanypeople: "2",
    kosher: false,
    parve: false,
    vegan: false,
    sugerfree: false,
    lactosefree: false,
    glutenfree: false,
    peanutfree: false,
    nutsfree: false,
    comments: "",
    priority: "1",
  },
  {
    id: 10,
    firstName: "רותי",
    lastName: "עבאדי",
    phone: "0548333375",
    city: "רהט",
    neighborhood: "הדרום הצפוני",
    street: "אום כולתום",
    homenumber: "13",
    adresscomments: "מול קיוסק ציונה",
    additionalneeds: "שמיכות",
    isproblematic: true,
    howmanypeople: "2",
    kosher: false,
    parve: false,
    vegan: false,
    sugerfree: false,
    lactosefree: false,
    glutenfree: false,
    peanutfree: false,
    nutsfree: false,
    comments: "",
    priority: "1",
  },
  {
    id: 11,
    firstName: "חדוה",
    lastName: "אסולין",
    phone: "0542243775",
    city: "תל אביב יפו",
    neighborhood: "נווה שאנן",
    street: "לוינסקי",
    homenumber: "4",
    adresscomments: "",
    additionalneeds: "",
    isproblematic: false,
    howmanypeople: "2",
    kosher: false,
    parve: false,
    vegan: true,
    sugerfree: false,
    lactosefree: false,
    glutenfree: true,
    peanutfree: false,
    nutsfree: true,
    comments: "",
    priority: "1",
  },
  {
    id: 12,
    firstName: "אנה",
    lastName: "כהן",
    phone: "0549543979",
    city: "חיפה",
    neighborhood: "נווה שאנן",
    street: "חניתה",
    homenumber: "27",
    adresscomments: "",
    additionalneeds: "",
    isproblematic: false,
    howmanypeople: "2",
    kosher: false,
    parve: false,
    vegan: false,
    sugerfree: true,
    lactosefree: true,
    glutenfree: false,
    peanutfree: false,
    nutsfree: false,
    comments: "",
    priority: "2",
  },
  {
    id: 13,
    firstName: "גידי",
    lastName: "אברהמוב",
    phone: "0503443775",
    city: "חיפה",
    neighborhood: "בת גלים",
    street: "לוץ שרל",
    homenumber: "3",
    adresscomments: "",
    additionalneeds: "",
    isproblematic: false,
    howmanypeople: false,
    kosher: false,
    parve: false,
    vegan: false,
    sugerfree: false,
    lactosefree: false,
    glutenfree: false,
    peanutfree: false,
    nutsfree: false,
    comments: "",
    priority: "2",
  },
  {
    id: 14,
    firstName: "הודיה",
    lastName: "",
    phone: "0540543005",
    city: "כפר סבא",
    neighborhood: "אליעזר",
    street: "טשרנחובסקי",
    homenumber: "24",
    adresscomments: "",
    additionalneeds: "",
    isproblematic: false,
    howmanypeople: "3",
    kosher: false,
    parve: false,
    vegan: true,
    sugerfree: false,
    lactosefree: false,
    glutenfree: false,
    peanutfree: false,
    nutsfree: false,
    comments: "משפחה של 3 אנשים הבנות אוהבות עוגיות שוקולד",
    priority: "1",
  },
  {
    id: 15,
    firstname: "אדווה",
    lastName: "כוהן",
    phone: "0528543115",
    city: "תל אביב יפו",
    neighborhood: "נווה שאנן",
    street: "הרכבת",
    homenumber: "4",
    adresscomments: "",
    additionalneeds: "",
    isproblematic: false,
    howmanypeople: "2",
    kosher: false,
    parve: false,
    vegan: true,
    sugerfree: false,
    lactosefree: false,
    glutenfree: true,
    peanutfree: false,
    nutsfree: true,
    comments: "",
    priority: "1",
  },

  {
    id: 16,
    firstname: "אברהם",
    lastName: "",
    phone: "0528443115",
    city: "תל אביב יפו",
    neighborhood: "פלורנטין",
    street: "הרצל",
    homenumber: "4",
    adresscomments: "",
    additionalneeds: "",
    isproblematic: false,
    howmanypeople: "2",
    kosher: false,
    parve: false,
    vegan: true,
    sugerfree: false,
    lactosefree: false,
    glutenfree: true,
    peanutfree: false,
    nutsfree: true,
    comments: "",
    priority: "1",
  },

  {
    id: 17,
    firstname: "יהורם",
    lastName: "",
    phone: "0523343335",
    city: "תל אביב יפו",
    neighborhood: "פלורנטין",
    street: "העליה",
    homenumber: 4,
    adresscomments: "",
    additionalneeds: "",
    isproblematic: false,
    howmanypeople: "2",
    kosher: false,
    parve: false,
    vegan: true,
    sugerfree: false,
    lactosefree: false,
    glutenfree: true,
    peanutfree: false,
    nutsfree: true,
    comments: "",
    priority: "1",
  },
];

export default Addresses;