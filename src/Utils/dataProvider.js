
import { stringify } from 'query-string';
import axiosFetch from '../Axios'




const dataProvider = {
    getList: (resource, params) => {
        // const { page, perPage } = params.pagination;
        // const { field, order } = params.sort;
        // const query = {
        //     sort: JSON.stringify([field, order]),
        //     range: JSON.stringify([(page - 1) * perPage, page * perPage - 1]),
        //     filter: JSON.stringify(params.filter),
        // };
        
        return axiosFetch().get(`${resource}`).then(({ data}) => ({
            data: data,
            
        }));
    },

    getOne: (resource, params) =>{

        return axiosFetch().get(`${resource}/${params.id}`).then(({ data}) => ({
            data: data,
        }));
    },

    getMany: (resource, params) => {
        const query = {
            filter: JSON.stringify({ id: params.ids }),
        };

        return axiosFetch().get(`${resource}?${stringify(query)}`).then(({ data}) => ({
            data: data,
        }));
    },

    getManyReference: (resource, params) => {
        const { page, perPage } = params.pagination;
        const { field, order } = params.sort;
        const query = {
            sort: JSON.stringify([field, order]),
            range: JSON.stringify([(page - 1) * perPage, page * perPage - 1]),
            filter: JSON.stringify({
                ...params.filter,
                [params.target]: params.id,
            }),
        };
        return axiosFetch().get(`${resource}?${stringify(query)}`).then(({ data}) => ({
            data: data,
        }));

        
    },

    update: (resource, params) =>{

        return axiosFetch().put(`${resource}/${params.id}`,params.data).then(({ data}) => ({
            data: data,
        }));
    },
        
    updateMany: (resource, params) => {
        const query = {
            filter: JSON.stringify({ id: params.ids}),
        };
        
        return axiosFetch().put(`${resource}?${query}`,JSON.stringify(params.data)).then(({ data}) => ({
            data: data,
        }));
    },

    create: (resource, params) =>{
        
        return axiosFetch().post(`${resource}/${params.id}`,JSON.stringify(params.data)).then(({ data}) => ({
            data: data,
        }));
    }
        ,

    delete: (resource, params) =>{
        
        return axiosFetch().delete(`${resource}/${params.id}`,JSON.stringify(params.data)).then(({ data}) => ({
            data: data,
        }));
    }
        ,

    deleteMany: (resource, params) => {
        const query = {
            filter: JSON.stringify({ id: params.ids}),
        };

        return axiosFetch().delete(`${resource}?${stringify(query)}`,JSON.stringify(params.data)).then(({ data}) => ({
            data: data,
        }));
    }
    
};

export default dataProvider