<template>
    <div>
        <div class="container">
            <div class="child" style="margin-top: 3px;">
                <h3 style="text-align:left;">SEBMATEZAR</h3>
                <p style="text-align:left;">US ATLANTA CRIME SEARCH ENGINE</p>
            </div>
            <input class="form-control search-crime child" type="text" placeholder="auto theft"
                style="margin-top: 3px;">
            <button type="button" class="btn btn-primary child" @click="this.getCrimes()"
                style="margin-top: 3px; margin-left: 5px; height: 35px;">Search</button>
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
import axios from 'axios';
export default {
    name: 'ResultPage',
    props: ['keyphrase'],
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
            zoom: 13,
            center: [33.753746, -84.386330],
            markerLatLng: [33.753746, -84.386330],
        };
    },
    methods: {
        getCrimes: function () {
            // const body = {
            //     "query": "auto theft",
            // "start": "2017-02-01",
            // "end": "2017-02-28"
            // }
            // const headers = {
            //     "Access-Control-Allow-Origin": "*"
            // };
            axios.post("https://460e-2a02-a317-e343-ad80-4df1-2331-f1ac-6dd8.ngrok.io/api/elasticsearch", { "query": 'auto theft' })
                .then(response => console.log(response))
                .catch(error => {
                    console.log(error)
                })
        }
    },
    beforeMount() {
        this.getCrimes({ "query": 'auto theft' })
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
