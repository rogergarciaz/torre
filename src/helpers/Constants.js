export const variants = {
  visible: { opacity: 1 },
  hidden: { opacity: 0 },
};
export const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      duration: 2,
      delay: 2,
    },
  },
};

export const motion = {
  open: { opacity: 1, x: 0 },
  closed: { opacity: 0, x: '-100%' },
};
export const openSpring = { type: 'spring', stiffness: 200, damping: 30 };
export const closeSpring = { type: 'spring', stiffness: 300, damping: 35 };

/**
 * @param {*} length: Number of colors to generate
 *
 * @return {array}: An array of colors
 */
export function getRandomColor(length) {
  const colors = [];
  for (let i = 0; i < length; i++) {
    const letters = '0123456789ABCDEF';
    let color = '#';
    for (let j = 0; j < 6; j++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    colors.push(color);
  }
  return colors;
}

/**
 * @param {array}: Array of arrays of strengths
 *
 * @return {array}: returns two arrays with the labels and weight of those
 * whose weights are more than 0.
 */
export const getUsefulInfo = data => {
  const { strengths } = data;
  if (strengths.length > 0) {
    const filtered = strengths.filter(item => {
      return item.weight > 0;
    });
    const labels = filtered.map(item => {
      return item.name;
    });
    const weight = filtered.map(item => {
      return item.weight;
    });
    const data = {
      labels: labels,
      datasets: [
        {
          label: 'Details',
          backgroundColor: 'rgba(179,181,198,0.2)',
          borderColor: 'rgba(179,181,198,1)',
          pointBackgroundColor: 'rgba(179,181,198,1)',
          pointBorderColor: '#fff',
          pointHoverBackgroundColor: '#fff',
          pointHoverBorderColor: 'rgba(179,181,198,1)',
          data: weight,
        },
      ],
    };
    return [filtered, data];
  }
  return [[], null];
};

/**
 *
 * @param {*} arr
 * @param {*} item
 */
export const isArrayInArray = (arr, item) => {
  var item_as_string = JSON.stringify(item);

  var contains = arr.some(function (ele) {
    return JSON.stringify(ele) === item_as_string;
  });
  return contains;
};
