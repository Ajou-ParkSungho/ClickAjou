
<template>

  <div class="gmap">
    <gmap-map
      :center="center"
      :zoom="17"
      :options="{scrollwheel: false}"
      style="width:100%;  height: 800px;"
    >
      <gmap-marker
        :key="index"
        v-for="(m, index) in markers"
        :position="m.position"
        @click="goRouting(m)"
        @mouseover="toggleInfoWindow(m,index)"
        @mouseout="infoWinOpen=false"
      ></gmap-marker>

      <gmap-info-window
        :options="infoOptions"
        :position="infoWindowPos"
        :opened="infoWinOpen"
      ><div v-html="infoContent"></div></gmap-info-window>
    </gmap-map>
    
  </div>
</template>

<script>
export default {
  name: "GoogleMap",
  data() {
    return {
      map: null,
      infoContent: '',
      infoWindowPos: {
        lat: 0,
        lng: 0
      },
      infoWinOpen: false,
      currentMidx: null,
      //optional: offset infowindow so it visually sits nicely on top of our marker
      infoOptions: {
        pixelOffset: {
          width: 0,
          height: -40
        }
      },
      center: { lat:37.282505, lng:127.045221 },
      markers: [
        {name:"체육관", position: {lat:37.279958, lng:127.045427}, src: require('../assets/facilities/체육관.jpg')}, //체육관
        {name:"운동장", position: {lat:37.280495, lng:127.044468}, src: require('../assets/facilities/운동장.jpg')}, //운동장
        {name:"다산관", position: {lat:37.282757, lng:127.047322}, src: require('../assets/facilities/다산관.jpg')}, //다산관
        {name:"서관", position: {lat:37.283670, lng:127.042730}, src: require('../assets/facilities/서관.jpg')}, //서관
        {name:"성호관", position: {lat:37.282791, lng:127.045208}, src: require('../assets/facilities/성호관.jpg')}, //성호관
        {name:"원천관", position: {lat:37.282953, lng:127.043566}, src: require('../assets/facilities/원천관.jpg')}, //원천관
        {name:"율곡관", position: {lat:37.282108, lng:127.046355}, src: require('../assets/facilities/율곡관.jpg')}, //율곡관
        {name:"종합관", position: {lat:37.282202, lng:127.047696}, src: require('../assets/facilities/종합관.jpg')}, //종합관
        {name:"신학생회관", position: {lat:37.283714, lng:127.045628}, src: require('../assets/facilities/신학생회관.jpg')},  //신학생회관
        {name:"원천정보관", position: {lat:37.283438, lng:127.043780}, src: require('../assets/facilities/원천정보관.jpg')}
      ],
      places: [],
      currentPlace: null
    };
  },

  mounted() {
    this.geolocate();
  },

  methods: {
    // receives a place object via the autocomplete component
    setPlace(place) {
      this.currentPlace = place;
    },
    addMarker() {
      if (this.currentPlace) {
        const marker = {
          lat: this.currentPlace.geometry.location.lat(),
          lng: this.currentPlace.geometry.location.lng()
        };
        this.markers.push({ position: marker });
        this.places.push(this.currentPlace);
        this.center = marker;
        this.currentPlace = null;
      }
    },
    geolocate: function() {
      navigator.geolocation.getCurrentPosition(() => {
        this.center = {
          lat:37.281745, lng:127.045143
        };
      });
    },

    toggleInfoWindow: function (marker, idx) {
        this.infoWindowPos = marker.position;
        this.infoContent = this.getInfoWindowContent(marker)
        //check if its the same marker that was selected if yes toggle
        if (this.currentMidx == idx) {
          this.infoWinOpen = !this.infoWinOpen;
        }
        //if different marker set infowindow to open and reset current marker index
        else {
          this.infoWinOpen = true;
          this.currentMidx = idx;
        }
      },
      getInfoWindowContent: function (marker) {
        
        return (`<h3> ${marker.name} </h3>
          <div class="image">
          <img src="${marker.src}" alt="${marker.name}" style="width:400px; height:200px;">
                    </div>`);
      },
      goRouting: function (marker) {
        this.$router.push({ path: '/menu/faclist/' + marker.name })
        
      }
  }
};
</script>