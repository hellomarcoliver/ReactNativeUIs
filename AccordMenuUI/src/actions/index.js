//Invoke some change in our app

//The function here is an action creator
//they are functions that return applications
//actions are objects with a type property
//e.g.inform the reducer that we make a new selection
export const selectLibrary = (libraryId) => {
  return {
    type: 'select_library',
    payload: libraryId
  };
};

//side note: when exporting many elements from a single file, I
//just use export without 'default' and use '*' in the other file
