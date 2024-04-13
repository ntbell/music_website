/**
 * @fileoverview The songs that we can play in the visualizer.
 *
 * When adding a song, update these constants.
 * Then, update the id of "cactus-wrapper" with the filename.
 */

/**
 * Name of the songs' .mp3 file.
 */
export const SONG_NAMES = {
  THIS_TOWN: "thisTown",
  // BREAKING_HEART: "breakingHeart",
  // FADING_OUT: "fadingOut",
};

/**
 * Name of the song, corresponding to its relative file location
 */
export const SONG_LINKS_BY_NAME = {
  [SONG_NAMES.THIS_TOWN]: "../../music/thisTown.mp3",
  // [SONG_NAMES.BREAKING_HEART]: "../../music/breakingHeart.mp3",
  // [SONG_NAMES.FADING_OUT]: "../../music/fadingOut.mp3",
};
