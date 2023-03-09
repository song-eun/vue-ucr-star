<template>
  <vl-map
    :load-tiles-while-animating="true"
    :load-tiles-while-interacting="true"
  >
    <vl-view
      :zoom.sync="zoom"
      :center.sync="center"
      :rotation.sync="rotation"
    ></vl-view>

    <vl-layer-tile>
      <vl-source-xyz :attributions="attributions" :url="url" :maxZoom="maxZoom">
      </vl-source-xyz>
    </vl-layer-tile>
  </vl-map>
</template>

<script>
export default {
  data() {
    return {
      zoom: 2,
      center: [0, 0],
      rotation: 0,

      attributions:
        '&copy; <a href="https://www.openstreetmap.org/copyright" target="_blank">OpenStreetMap</a> contributors.',
      //   url: "http://xdworld.vworld.kr:8080/2d/Base/service/{z}/{x}/{y}.png",
      url: "https://{a-c}.tile.openstreetmap.org/{z}/{x}/{y}.png",
      maxZoom: 19,
    };
  },
};
</script>
