export const createProject = (project) => {
    return (dispatch, getState, { getFirestore }) => {
     // make async call to db
     const firestore = getFirestore(getState);
     firestore.collection('projects').add({
         ...project, 
         authorFirstName: 'Mama', 
         authorLastName: 'Sarah', 
         authorId: 54321,
         createdAt: new Date()
     }).then(() => {
        dispatch({ type: 'CREATE_PROJECT_SUCCESS', project});
     }).catch(err => {
         dispatch({type: 'CREATE_PROJECT_ERROR', err})
     })
          
    }
}