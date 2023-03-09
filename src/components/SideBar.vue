<template>
  <div class="icon-bar">
    <div>
      <img class="logo-image" src="https://star.cs.ucr.edu/images/logo_h.png" />
    </div>
    <div>{{ radioList.length }} Datasets</div>
    <!-- <input v-model="message" placeholder="Text search" class="text-search" /> -->
    <div class="datasets">
      <div v-for="(item, index) in radioList" :key="index" class="list-item">
        <input type="radio" :id="item.key" v-model="picked" :value="item" />
        <label :for="item.key" class="text">{{ item.key }}</label>
      </div>
    </div>
    <section class="detail">
      <p>선택한 dataset : {{ picked.key }}</p>
      <p>Size : {{ picked.size }}</p>
      <p>Number of records:</p>
      <p>Number of points:</p>
      <p>Format:</p>
      <p>Geometry type:</p>
      <p>Description:</p>
      <p>Attributes:</p>
    </section>
  </div>
</template>
<script>
export default {
  data() {
    return {
      radioList: [
        {
          key: "OSM2015/all_objects",
          size: "91.6 GB",
        },
        {
          key: "OSM2015/buildings",
          size: "29.8 GB",
        },
        {
          key: "OSM2015/all_nodes",
          size: "257.2 GB",
        },
        {
          key: "OSM2015/lakes",
          size: "7.4 GB",
        },
        {
          key: "OSM2015/postal_codes",
          size: "56.6 GB",
        },
        {
          key: "OSM2015/parks",
          size: "1.1 GB",
        },
        {
          key: "OSM2015/roads",
          size: "7,7 GB",
        },
        {
          key: "OSM2015/sports",
          size: "573.2 MB",
        },
        {
          key: "OSM2015/road-network",
          size: "183.6 GB",
        },
        {
          key: "Tweets",
          size: "2.7 GB",
        },
        {
          key: "Chicago Crimes",
          size: "4.1 GB",
        },
        {
          key: "NYCTaxi",
          size: "38.8 GB",
        },
        {
          key: "TDrive",
          size: "1.8 GB",
        },
      ],

      picked: "",
    };
  },
  mounted() {
    // radio data 초기 set
    this.picked = this.radioList[0];
  },
  watch: {
    picked() {
      console.log("watch : ", this.picked);
      this.getSearch();
    },
  },
  methods: {
    getSearch() {
      console.log("api getSearch!!!");
    },
  },
};
</script>

<style>
.icon-bar {
  color: white;
  height: 100%;
  width: 18rem;
  background-color: #555;
  position: fixed; /* Fixed Sidebar (stay in place on scroll) */
  /*z-index: 1;*/ /* Stay on top */
  top: 0; /* Stay at the top */
  left: 0;
  /* overflow-x: hidden; Disable horizontal scroll */
  padding-top: 0;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}

.logo-image {
  width: 100%;
}

.text-search {
  font-size: 1.2em;
}

label {
  display: block;
  cursor: pointer;
  /* width: 100%; */
  height: 100%;
}

.datasets {
  overflow-y: scroll;
  height: 20rem;
}

.detail {
  overflow-y: scroll;
  height: 20rem;
}

.list-item {
  border-width: 1px 0px 0px 0px;
  border-style: solid;
  border-color: black;
  display: flex;
  padding: 0.5rem;
}

.list-item:hover {
  background-color: grey;
}
</style>
