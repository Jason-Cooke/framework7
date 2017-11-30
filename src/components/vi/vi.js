import $ from 'dom7';
import Device from '../../utils/device';
import ViAd from './vi-class';

export default {
  name: 'vi',
  params: {
    vi: {
      enabled: false,
      autoplay: true,
      fallbackOverlay: true,
      fallbackOverlayText: 'Please watch this ad',
      showMute: true,
      startMuted: (Device.ios || Device.android) && !Device.cordova,
      appId: null,
      appVer: null,
      language: null,
      width: null,
      height: null,
      placementId: null,
      videoSlot: null,
      showProgress: true,
      showBranding: true,
      os: null,
      osVersion: null,
      orientation: null,
      age: null,
      gender: null,
      advertiserId: null,
      latitude: null,
      longitude: null,
      accuracy: null,
      storeId: null,
      ip: null,
      manufacturer: null,
      model: null,
      connectionType: null,
      connectionProvider: null,
    },
  },
  create() {
    const app = this;
    app.vi = {
      sdkReady: false,
      createAd(adParams) {
        return new ViAd(app, adParams);
      },
      loadSdk() {
        if (app.vi.skdReady) return;
        const script = document.createElement('script');
        script.onload = function onload() {
          app.vi.skdReady = true;
        };
        script.src = 'http://sfiles.edgesuite.net/http_only/viadshtml/vi.min.js';
        $('head').append(script);
      },
    };
  },
  on: {
    init() {
      const app = this;
      if (app.params.vi.enabled) app.vi.loadSdk();
    },
  },
};