import { fetchUtils } from "react-admin";
import { stringify } from "query-string";

const apiUrl = "https://sheetdb.io/api/v1";
const httpClient = fetchUtils.fetchJson;
var url = ``;

export const dataProvider = {
  getList: (resource, params) => {
    const { page, perPage } = params.pagination;
    const { field, order } = params.sort;
    const query = {
      sort_by: field,
      sort_order: order,
      start: (page - 1) * perPage,
      end: page * perPage,
    };

    if (`${resource}` === "list") {
      url = `${apiUrl}/6incv6iu935ko?${stringify(query)}`;
    } else {
      url = `${apiUrl}/gsrchgx4jlsiv?${stringify(query)}`;
    }

    return httpClient(url).then(({ headers, json }) => ({
      data: json,
      total: parseInt(headers.get("content-range")),
    }));
  },

  getOne: (resource, params) =>
    httpClient(`${apiUrl}`).then(({ json }) => ({
      data: json,
    })),

  getMany: (resource, params) => {
    const query = {
      filter: { id: params.ids },
    };

    if (`${resource}` === "list") {
      url = `${apiUrl}/6incv6iu935ko?${stringify(query)}`;
    } else {
      url = `${apiUrl}/gsrchgx4jlsiv?${stringify(query)}`;
    }

    return httpClient(url).then(({ json }) => ({ data: json }));
  },

  getManyReference: (resource, params) => {
    const { page, perPage } = params.pagination;
    const { field, order } = params.sort;
    const query = {
      sort: [field, order],
      range: [(page - 1) * perPage, page * perPage - 1],
    };

    if (`${resource}` === "list") {
      url = `${apiUrl}/6incv6iu935ko?${stringify(query)}`;
    } else {
      url = `${apiUrl}/gsrchgx4jlsiv?${stringify(query)}`;
    }

    return httpClient(url).then(({ headers, json }) => ({
      data: json,
      total: parseInt(headers.get("content-range")),
    }));
  },

  update: (resource, params) =>
    httpClient(`${apiUrl}/${resource}/${params.id}`, {
      method: "PUT",
      body: JSON.stringify(params.data),
    }).then(({ json }) => ({ data: json })),

  updateMany: (resource, params) => {
    const query = {
      filter: JSON.stringify({ id: params.ids }),
    };

    if (`${resource}` === "list") {
      return httpClient(`${apiUrl}/6incv6iu935ko?${stringify(query)}`, {
        method: "PUT",
        body: JSON.stringify(params.data),
      }).then(({ json }) => ({ data: json }));
    } else {
      return httpClient(`${apiUrl}/gsrchgx4jlsiv?${stringify(query)}`, {
        method: "PUT",
        body: JSON.stringify(params.data),
      }).then(({ json }) => ({ data: json }));
    }
  },

  create: (resource, params) =>
    httpClient(`${apiUrl}/gsrchgx4jlsiv`, {
      method: "POST",
      body: JSON.stringify(params.data),
    }).then(({ json }) => ({
      data: { ...params.data, id: json.id },
    })),

  delete: (resource, params) =>
    httpClient(`${apiUrl}/${resource}/${params.id}`, {
      method: "DELETE",
    }).then(({ json }) => ({ data: json })),

  deleteMany: (resource, params) => {
    const query = {
      filter: JSON.stringify({ id: params.ids }),
    };
    return httpClient(`${apiUrl}/${resource}?${stringify(query)}`, {
      method: "DELETE",
    }).then(({ json }) => ({ data: json }));
  },
};

export default dataProvider;
