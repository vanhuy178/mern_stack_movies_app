const favoriteUtils = {
  check: ({ listFavorites, mediaId }) => listFavorites && listFavorites.find(e => e.mediaId.toString() === mediaId.toString()) !== undefined
};

export default favoriteUtils;


export const MOVIES_WATCHING = 'Movies Watching'

export const TOP_NAV = {
  Favorite_List_Page: 'Favorite List Page',
  Home_Pages: 'Home Pages',
  Media_Detail_Page: 'Media Detail Page',
  Media_List_Page: 'Media List Page',
  Media_Search_Page: 'Media Search Page',
  Detailed_Person_Page: 'Detailed Person Page',
  Review_List_Page: 'Review List Page'
}