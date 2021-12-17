export const subs_growth_pc = () => subs_growth_pc_in;
export const subs_churn_pc = () => subs_churn_pc_in;
export const subs_0 = () => subs_0_in; // subs at year 0
export const year = () => year_in;

export const subs_new = () => subs({year_in: year() - 1}) * (subs_growth_pc() / 100);
export const subs_churned = () => ((subs({year_in: year() - 1}) + subs_new()) * subs_churn_pc()) / 100; // churn also applies to new subs

// prev subs + new subs@yr - churned subs@yr
export const subs = () => {
  if (year() == 0) return subs_0();
  else return subs({year_in: year() - 1}) + subs_new() - subs_churned();
};

// => can project subs given subs_0, growth and churn rates
