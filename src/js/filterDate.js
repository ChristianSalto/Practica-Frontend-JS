/* eslint-disable */
const dateFilter = async (shows, text) => {
  const showsDate = shows.filter((item) => {
    if (item.firstBrewed === text) {
      return item.firstBrewed;
    }
  });
  return showsDate;
};

export default dateFilter;
