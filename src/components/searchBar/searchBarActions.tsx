
import axios from 'axios';

const URL = 'http://localhost:3003/api/';

export const onChangeDescription = (event) => ({
    type: 'DESCRIPTION_CHANGED',
    payload: event.target.value
});

export const searchBarActions = () => {
    return (dispatch, getState) => {
        
        const description = getState().search.description;
        const searchDescription = description ? `&description__regex=/${description}/` : ''

        const request = axios.get(`${URL}?sort=-createdAt${searchDescription}`)
            .then(resp => dispatch({ type: 'USER_SEARCHED', payload: resp.data }))     
    }
}
