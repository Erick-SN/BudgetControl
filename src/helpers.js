export const budgetsReview = (budget, residuary) => {
  let type;
  if (budget / 4 > residuary) {
    type = 'alert alert-danger';
  } else if (budget / 2 > residuary) {
    type = 'alert alert-warning';
  } else {
    type = 'alert alert-success';
  }
  return type;
};
