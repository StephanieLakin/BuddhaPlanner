const initState = {  
    //dummy data
    // projects: [
    //     {id: '1', title: 'Peace on Earth', content: 'Teachings of the Buddha'},
    //     {id: '2', title: 'One with Nature', content: 'Teachings of Lao Tsu'},
    //     {id: '3', title: 'One with the Universe', content:'Vedic thoughts on consciousness'}        
    // ]
}

const projectReducer = (state = initState, action) => {
    // eslint-disable-next-line default-case
    switch  (action.type) {
        case 'CREATE_PROJECT_SUCCESS':
        console.log('create project', action.project);
        return state;
        case 'CREATE_PROJECT_ERROR':
            console.log('create project error', action.err);
            return state;
            default: 
            return state;
    }
}

export default projectReducer