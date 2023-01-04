import { defineStore } from "pinia";

export const useVideoStore = defineStore("video", {
  state: () => ({ status: false }),
  actions: {
    play() {
      this.play = true;
    },
    pause() {
      this.play = false;
    },
    playPause() {
      this.status = this.status ? false : true;
    },
  },
});
