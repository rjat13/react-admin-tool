export const getPlanDate = (dt) => {
  const date = new Date(dt);
  const options = { year: 'numeric', month: 'long' };
  const formattedDate = date.toLocaleDateString('en-US', options);
  return formattedDate;
}

export const reduceImageQuality = (url, w = 600, q = 40) => {
  const hasQuery = url.includes("?");
  const separator = hasQuery ? "&" : "?";
  return `${url}${separator}w=${w}&q=${q}`;
};

export const formatDate = (dt, format) => {
  const date = new Date(dt);
  const day = date.getDate();
  const month = date.getMonth() + 1;
  const year = date.getFullYear();

  const placeholders = {
    'DD': day.toString().padStart(2, '0'),
    'MM': month.toString().padStart(2, '0'),
    'YYYY': year.toString(),
  };

  const formattedDate = format.replace(/DD|MM|YYYY/g, match => placeholders[match] || match);

  return formattedDate;
};