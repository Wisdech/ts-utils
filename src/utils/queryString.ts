import qs from 'qs';

export function getQs(queryString?: string) {
  const string = queryString ?? window.location.search.substring(1);
  return qs.parse(string);
}

export function setQs(queryString: Record<string, any>, clear?: boolean) {
  const oldQs = qs.parse(window.location.search.substring(1));
  const newQs = qs.stringify({ ...(!clear && oldQs), ...queryString });
  return window.location.pathname + '?' + newQs;
}
