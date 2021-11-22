// https://github.com/declann/calculang-bounce/tree/master/src
// 20262ab

// I manually wire a memo in below, when memo-loader goes live this file will be much clearer
// It will only require blocks between "core calculang" comments

import memoize from 'lru-memoize';
import {isEqual} from 'underscore';

export const x = () => {
  if (t() == 0) return 100 + dx();
  else return x({t_in: t() - 1}) + dx();
};

export const y_ = () => {
  if (t() == 0) return 50;
  else if (y({t_in: t() - 1}) + dy({t_in: t() - 1}) > 185) return 190;
  else return y({t_in: t() - 1}) + dy({t_in: t() - 1});
};

// ball gets compressed on the ground before bouncing upwards
export const compressed = () => (y() == 190 ? true : false);

export const dy_ = () => {
  if (t() == 0) return 0 * dampener() + 3;
  else if (y({t_in: t()}) > 185) return -dy({t_in: t() - 1});
  else return dy({t_in: t() - 1}) * dampener() + 3;
}; // if expressions vs statements would really help make this more concise

// explicit inputs (core model):
export const dampener = () => dampener_in;
export const t = () => t_in;
export const dx = () => dx_in;

/////// gen stuff, not used::

export const t_domain = () => t_domain_in;
export const dampener_domain = () => dampener_domain_in;
export const dx_domain = () => dx_domain_in;

export const gen = () => {
  var result = [];
  dx_domain().forEach((dx_in) => {
    t_domain().forEach((t_in) => {
      dampener_domain().forEach((dampener_in) => {
        result.push({
          //keys: {
          t_in,
          dampener_in,
          dx_in,
          // },
          //values: {
          x: x(),
          y: y(),
          //},
        });
      });
    });
  });
  return result;
};

export const gen2 = () => {
  var result = [];
  dx_domain().forEach((dx_in) => {
    t_domain().forEach((t_in) => {
      dampener_domain().forEach((dampener_in) => {
        result.push({
          formula: 'x',
          t_in,
          dampener_in,
          dx_in,
          value: x(),
          //},
        });
        result.push({
          formula: 'y',
          t_in,
          dampener_in,
          dx_in,
          value: y(),
          //},
        });
      });
    });
  });
  return result;
};

/////////////////////////////////////////////////////
// memo stuff: (redundant with memo-loader, calculang issue #1)
/////////////////////////////////////////////////////

export const y_m = memoize(999999, isEqual)(y_); // not a fn, so nothing happens in cul logic
export const y = (a) => {
  return y_m(a);
  y_(); // never run
};

export const dy_m = memoize(999999, isEqual)(dy_); // not a fn, so nothing happens in cul logic
export const dy = (a) => {
  return dy_m(a);
  dy_(); // never run
};

// needs a cache even for y({t_in:14}) amazing!
// but further needs y = 0... then return t_in
// => bounce_opt.cul.js?

// with cache on y I can incrememntally get to t_in 25.. but beyond breaks
// with cache on y,dy I can get to 1000 up front!

/*for (var t_in = 0; t_in < 100; t_in++)
  //console.log(y({ t_in, dampener_in: 0.94 }));
  console.log(t_in);
y({ t_in: 1, dampener_in: 0.94 });
*/ // TODO under robustness
