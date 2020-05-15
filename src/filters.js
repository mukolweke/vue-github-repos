import moment from 'moment';

export default {
  dateTimeFilter(date) {
    return moment(date).format('MMMM Do YYYY, h:mm:ss a');
  },
};
