function countLetters(string) {
  let split = string.split("");
  let result = split.reduce((acc, letter, ind) => {
    if (Object.keys(acc).includes(letter)) {
      acc[letter] += 1;
    } else {
      acc[letter] = 1;
    }
    return acc;
  }, {});
  console.log(result);
}
countLetters("ABC");
countLetters("QQQ");

const tropical = [
  { day: '20', month: '01', latin: 'aquarius' },
  { day: '19', month: '02', latin: 'pisces' },
  { day: '21', month: '03', latin: 'aries' },
  { day: '20', month: '04', latin: 'taurus' },
  { day: '21', month: '05', latin: 'gemini' },
  { day: '21', month: '06', latin: 'cancer' },
  { day: '23', month: '07', latin: 'leo' },
  { day: '23', month: '08', latin: 'virgo' },
  { day: '23', month: '09', latin: 'libra' },
  { day: '23', month: '10', latin: 'scorpio' },
  { day: '23', month: '11', latin: 'sagittarius' },
  { day: '22', month: '12', latin: 'capricorn' },
];

function zodiac(date) {

  let [
    userDay,
    userMonth
  ] = date.split('-');
  userDay = parseInt(userDay);
  userMonth = parseInt(userMonth);

  let userZodiac = tropical.find((val) => {

    let {
      day: zodiacDay,
      month: zodiacMonth
    } = val;
    zodiacDay = parseInt(zodiacDay);
    zodiacMonth = parseInt(zodiacMonth);

    if (
      ((userMonth === zodiacMonth) && (userDay >= zodiacDay)) ||
      ((userMonth === (zodiacMonth + 1)) && (userDay <= zodiacDay))
    ) {
      return true;
    }
  });
  console.log(`Your zodiac sign is ${userZodiac.latin}`);
}

zodiac('14-02-2002'); // aquarius
zodiac('08-05-1988'); // taurus
