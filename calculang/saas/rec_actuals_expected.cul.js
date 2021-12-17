import {subs, subs_new as subs_new_expected, subs_churned as subs_churned_expected, year} from './expected.cul.js';
export {subs, year};

// actuals
export const subs_0 = () => 100; // start at 100 subs
export const subs_new_actual = () => [30, 30, 20][year()];
export const subs_churned_actual = () => [10, 30, 50][year()];

// year up to which actual data should be used, -1=use only expecteds
export const subs_new_actual_to = () => subs_new_actual_to_in;
export const subs_churned_actual_to = () => subs_churned_actual_to_in;

// interleave actuals into projections: this rebases expd using actuals?
export const subs_new = () => {
  if (year() <= subs_new_actual_to()) return subs_new_actual();
  else return subs_new_expected(); // this is an override which uses itself: but it doesn't compile correctly, check memo-loader version? OK, release memo-loader ...
};
export const subs_churned = () => {
  if (year() <= subs_churned_actual_to()) return subs_churned_actual();
  // I can really do with call instrumentation... (the only missing piece)
  else return subs_churned_expected();
};

// reconcile actual to expected, experience=A-E
// in year
export const subs_new_experience = () =>
  // now a fn on year
  subs_new_actual(/*{subs_new_actual_co_in: year()}*/) - subs_new_expected({subs_new_actual_co_in: year() - 1}); // only valid sometimes? if year < actual_co
// bake in co constraints in terms of year : actually irrelevant - expected projection not rebased using actuals, this should be done for year-by-year reporting - or is rebased? subs_new_expected

console.log(subs_new_experience({year_in: 0, subs_new_actual_to_in: -1, subs_churned_actual_to_in: -1}));

// => can project subs using actual data up to subs_new/churned_actual_co dates and using variable projection, growth rates (starting from subs_0=100)

// actual bake-in projection
//export const subs_
