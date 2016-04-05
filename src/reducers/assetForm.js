import { fromJS } from 'immutable';

const initialState = fromJS({
  genreOptions: [
    {
      label: 'Fantasy',
      value: 'fantasy',
    },
    {
      label: 'Science Fiction',
      value: 'sci-fi',
    },
    {
      label: 'Noir',
      value: 'noir',
    },
    {
      label: 'Modern',
      value: 'modern',
    },
  ],
  typeOptions: [
    {
      label: 'Item',
      value: 'item',
    },
    {
      label: 'NPC',
      value: 'npc',
    },
    {
      label: 'Encounter',
      value: 'encounter',
    },
    {
      label: 'Location',
      value: 'location',
    },
  ],
  subtypeOptions: {
    item: [],
    npc: [],
    encounter: [],
    location: [],
  },
  tagOptions: [],
  moodOptions: [],
  rarityOptions: [],
});

export default function assetFormReducer(state = initialState, action) {
  if (action === undefined) {
    return state;
  }

  return state;
}
