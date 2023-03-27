import { configureStore } from '@reduxjs/toolkit';
import filterslice from '../features/filter/filterslice';
import Relatedslice from '../features/Related/Relatedslice';
import Singleslice from '../features/Single/Singleslice';
import Tagslice from '../features/Tag/Tagslice';
import Videosslice from '../features/videos/Videosslice';

export const store = configureStore({
  reducer: {
    videos:Videosslice,
    tags:Tagslice,
    single:Singleslice,
    related:Relatedslice,
    filter:filterslice,
  },
});
