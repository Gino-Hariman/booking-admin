import moment from 'moment';

const getOneWeek = () => {
  let dateArray = [];
  for (let i = 0; i < 12; i++) {
    dateArray.push({
      id: i,
      utc: moment().add(i + 1, 'day'),
      date: moment()
        .add(i + 1, 'day')
        .format('D MMM'),
      day: moment()
        .add(i + 1, 'day')
        .format('ddd'),
      disabled:
        moment()
          .add(i + 1, 'day')
          .format('ddd') === 'Sun',
    });
  }

  return dateArray;
};

export default getOneWeek;
