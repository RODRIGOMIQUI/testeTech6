import axios from 'axios';

const URL = 'http://localhost:3003/api/todos';

export const onChangeDescription = (event) => ({
    type: 'DESCRIPTION_CHANGED',
    payload: event.target.value
});

export const searchAction = () => {
    return (dispatch, getState) => {
        const description = getState().appRedux.description
        const search = description ? `&description__regex=/${description}/` : ''
        const request = axios.get(`${URL}?sort=-createdAt${search}`)
            .then(resp => dispatch({ type: 'USER_SEARCHED', payload: resp.data }))     
    }
}
