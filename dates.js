function date(year, monthNumber, day) {
  // new Date() takes a monthIndex:
  //    Integer value representing the month,
  //    beginning with 0 for January to 11 for December.
  // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date/Date

  // This is a wrapper so you don't need to always subtract one

  return new Date(year, monthNumber - 1, day);
}

const python_invented = date(1991, 2, 20, 0, 0, 0);
const term_start_2019 = date(2019, 2, 16, 0, 0, 0);
const term_end_2019 = date(2019, 12, 16, 0, 0);
const term_end_2020 = date(2020, 12, 16, 0, 0);
const term_end_2021 = date(2021, 12, 16, 0, 0);
const term_end_2022 = date(2022, 12, 15, 0, 0);
const term_end_2023 = date(2023, 12, 11, 0, 0);
const term_end_2024 = date(2024, 12, 11, 0, 0);
const term_end_2025 = date(2025, 12, 11, 0, 0); // TBC

const bdfl = [["Guido van Rossum", "BDFL", python_invented, term_start_2019]];

function council(year, start, end, members) {
  return members.map((member) => [member, year, start, end]);
}

const councils = [
  ...council("2019", term_start_2019, term_end_2019, [
    "Guido van Rossum",
    "Alyssa Coghlan",
    "Barry Warsaw",
    "Brett Cannon",
    "Carol Willing",
  ]),
  ...council("2020", term_end_2019, term_end_2020, [
    "Barry Warsaw",
    "Brett Cannon",
    "Carol Willing",
    "Thomas Wouters",
    "Victor Stinner",
  ]),
  ...council("2021", term_end_2020, term_end_2021, [
    "Barry Warsaw",
    "Brett Cannon",
    "Carol Willing",
    "Pablo Galindo Salgado",
    "Thomas Wouters",
  ]),
  ...council("2022", term_end_2021, term_end_2022, [
    "Brett Cannon",
    "Gregory P. Smith",
    "Pablo Galindo Salgado",
    "Petr Viktorin",
    "Thomas Wouters",
  ]),
  ...council("2023", term_end_2022, term_end_2023, [
    "Brett Cannon",
    "Emily Morehouse",
    "Gregory P. Smith",
    "Pablo Galindo Salgado",
    "Thomas Wouters",
  ]),
  ...council("2024", term_end_2023, term_end_2024, [
    "Barry Warsaw",
    "Emily Morehouse",
    "Gregory P. Smith",
    "Pablo Galindo Salgado",
    "Thomas Wouters",
  ]),
];

const bdfl_and_councils = bdfl.concat(councils);
