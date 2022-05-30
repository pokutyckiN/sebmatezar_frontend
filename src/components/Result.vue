<template>
    <div>
        <div class="container">
            <div class="child" style="margin-top: 3px;">
                <h3 style="text-align:left;">SEBMATEZAR</h3>
                <p style="text-align:left;">US ATLANTA CRIME SEARCH ENGINE</p>
            </div>
            <input class="form-control search-crime child" type="text" placeholder="auto theft"
                style="margin-top: 3px;">
            <router-link class="child" to="/about" style="margin-top: 3px; margin-left: 5px;">
                <button type="button" class="btn btn-primary">Search</button>
            </router-link>
        </div>
        <div id="map" style="padding: 50px">
            <l-map style="height: 550px" :zoom="zoom" :center="center">
                <l-tile-layer :url="url" :attribution="attribution"></l-tile-layer>
                <l-marker :lat-lng="markerLatLng"></l-marker>
            </l-map>
        </div>
        <div class="container">
            <div>
                <label for="formControlRange">Start date</label>
                <Datepicker class="child" style="width: 200px;"></Datepicker>
            </div>
            <div style="padding-top: 50px;">
                <input type="range" class="form-control-range child" id="formControlRange" style="width: 1000px;">
            </div>
            <div>
                <label for="formControlRange">End date</label>
                <Datepicker class="child" style="width: 200px;"></Datepicker>
            </div>

        </div>
    </div>
</template>

<script>
import { LMap, LTileLayer, LMarker } from "@vue-leaflet/vue-leaflet";
import Datepicker from "./DatePicker.vue";
export default {
    name: 'ResultPage',
    components: {
        LMap,
        LTileLayer,
        LMarker,
        Datepicker
    },
    data() {
        return {
            url: "https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png",
            attribution:
                '&copy; <a target="_blank" href="http://osm.org/copyright">OpenStreetMap</a> contributors',
            zoom: 15,
            center: [51.505, -0.159],
            markerLatLng: [51.504, -0.159],
        };
    },
}
</script>

<style scoped>
div.container {
    display: flex;
}

div.child {
    flex: 30%;
    margin: 10px;
}

.search-crime {
    width: 750px;
    display: block;
    margin-right: auto;
    margin-left: auto;
}
</style>
