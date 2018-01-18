import { isAudio, isVideo } from '../utils/dom';

/**
 *
 * @class NativeMedia
 * @description Class that wraps the native HTML5 video/audio tags
 */
class NativeMedia {
    /**
     * Creates an instance of NativeMedia.
     *
     * @param {HTMLElement} element
     * @param {object} mediaFile
     * @returns {NativeMedia}
     * @memberof NativeMedia
     */
    constructor(element, mediaFile) {
        if (!isAudio(element) && !isVideo(element)) {
            throw new TypeError('Native method only supports video/audio tags');
        }
        this.element = element;
        this.media = mediaFile;
        this.promise = new Promise(resolve => {
            resolve();
        });
        return this;
    }
    /**
     *
     *
     * @param {string} mimeType
     * @returns {boolean}
     * @memberof NativeMedia
     */
    canPlayType(mimeType) {
        return !!(this.element.canPlayType(mimeType).replace('no', ''));
    }

    load() {
        this.element.load();
    }

    play() {
        this.element.play();
    }

    pause() {
        this.element.pause();
    }
}

export default NativeMedia;
