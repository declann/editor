export const growth = () => growth_in;
export const t = () => t_in;

export const sales = () => {
  if (t() == 0) return 100;
  else return sales({t_in: t() - 1}) * (1 + growth());
};
// can project sales with t,growth rate inputs
// so I need to fix growth rate either above or in another .cul.js file

// fn names don't go in spec, but do go in run-.js
// code in there is repeated currently.
// so dev pattern isn't great

// make a dev pattern involving domains?
// and/or using introspection info, ala facet example in Obs?

/* model explorer wip generates data from:

domains = ({
  functions: ['x','dx','y','dy','compressed'], // but this can come from introspection info (except for memo messin)
  dx_in: [-3,0,3],
  dampener_in: [0.9, 0.95, 1, 1.05],
  t_in: [...Array(30).keys()]
})

=> build a report helper fn (selection dependence?)
input domains where? can be a calcufest/dev config option?
*/
