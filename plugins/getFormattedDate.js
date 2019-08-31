import Vue from 'vue';

Vue.prototype.$getFormattedDate = date => {
  const monthNames = [
    'Jan',
    'Fev',
    'Mar',
    'Abr',
    'Mai',
    'Jun',
    'Jul',
    'Ago',
    'Set',
    'Out',
    'Nov',
    'Dez'
  ];

  const _date = new Date(date);

  const day = _date.getDate() < 10 ? `0${_date.getDate()}` : _date.getDate();
  const month = _date.getMonth();
  const year = _date.getFullYear();

  return `${day}/${monthNames[month]}/${year}`;
};
