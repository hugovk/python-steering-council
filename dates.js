function date(year, monthNumber, day) {
  return new Date(year, monthNumber - 1, day);
}

function council(year, members) {
  const start =
    year === 2019 ? termDates.term_start_2019 : termDates[`term_end_${year - 1}`];
  const end = termDates[`term_end_${year}`];
  return members.map((member) => [member, String(year), start, end]);
}

const termDates = {
  python_invented: date(1991, 2, 20),
  term_start_2019: date(2019, 2, 16),
  term_end_2019: date(2019, 12, 16),
  term_end_2020: date(2020, 12, 16),
  term_end_2021: date(2021, 12, 16),
  term_end_2022: date(2022, 12, 15),
  term_end_2023: date(2023, 12, 11),
  term_end_2024: date(2024, 12, 10),
  term_end_2025: date(2025, 12, 10),
};

const bdfl = [
  ["Guido van Rossum", "BDFL", termDates.python_invented, termDates.term_start_2019],
];

const councils = [
  ...council(2019, [
    "Guido van Rossum",
    "Alyssa Coghlan",
    "Barry Warsaw",
    "Brett Cannon",
    "Carol Willing",
  ]),
  ...council(2020, [
    "Barry Warsaw",
    "Brett Cannon",
    "Carol Willing",
    "Thomas Wouters",
    "Victor Stinner",
  ]),
  ...council(2021, [
    "Barry Warsaw",
    "Brett Cannon",
    "Carol Willing",
    "Pablo Galindo Salgado",
    "Thomas Wouters",
  ]),
  ...council(2022, [
    "Brett Cannon",
    "Gregory P. Smith",
    "Pablo Galindo Salgado",
    "Petr Viktorin",
    "Thomas Wouters",
  ]),
  ...council(2023, [
    "Brett Cannon",
    "Emily Morehouse",
    "Gregory P. Smith",
    "Pablo Galindo Salgado",
    "Thomas Wouters",
  ]),
  ...council(2024, [
    "Barry Warsaw",
    "Emily Morehouse",
    "Gregory P. Smith",
    "Pablo Galindo Salgado",
    "Thomas Wouters",
  ]),
  ...council(2025, [
    "Barry Warsaw",
    "Donghee Na",
    "Emily Morehouse",
    "Gregory P. Smith",
    "Pablo Galindo Salgado",
  ]),
];

const bdfl_and_councils = bdfl.concat(councils);
