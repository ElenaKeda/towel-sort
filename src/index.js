
module.exports = function towelSort (matrix) {

    if (!matrix || matrix.length == 0) {
      return []
    }

    return matrix.map((item, index) => {
      if (index % 2 != 0) {
          return item.reverse();
      } else {
          return item;
      }
    }).flat();
}
