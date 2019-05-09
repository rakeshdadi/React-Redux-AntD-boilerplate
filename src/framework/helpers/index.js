export const classNames = (...classes) =>
  classes.filter(cl => typeof cl === 'string').join(' ');