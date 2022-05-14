const UrlQueryBuilder = (url, queries) => {
  const apiurl = url;
  const encode = encodeURIComponent;

  if (queries) {
    const query = Object.keys(queries)
      .map((key) => encode(key).concat('=', encode(queries[key])))
      .join('&');
    if (Object.keys(queries).length) {
      return apiurl.concat('?', query);
    }
  }

  return apiurl;
};

export default UrlQueryBuilder;
