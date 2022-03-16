exports.getPagination = (page) => {
  //максимальное количество записей за раз
  const limit = 25;
  //сколько нужно пропустить записей в запросе в зависимости от страницы
  const offset = page ? page * limit : 0;
  return { limit, offset };
};

exports.getPagingData = (obj, page, limit) => {
  const { count: totalItems, rows: data } = obj;
  const currentPage = page ? +page : 0;
  const totalPages = Math.ceil(totalItems / limit);
  return { data, paginator: { totalItems, totalPages, currentPage } };
};
