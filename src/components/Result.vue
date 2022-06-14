<template>
    <div>
        <div class="container">
            <div class="child" style="margin-top: 3px;">
                <h3 style="text-align:left;">SEBMATEZAR</h3>
                <p style="text-align:left;">US ATLANTA CRIME SEARCH ENGINE</p>
            </div>
            <input id="key-id" class="form-control search-crime child" type="text" placeholder="auto theft"
                style="margin-top: 3px;" v-model="key">
            <button type="button" class="btn btn-primary child" @click="this.getCrimes()"
                style="margin-top: 3px; margin-left: 5px; height: 35px;">Search</button>
        </div>
        <div id="map" style="padding: 50px">
            <l-map style="height: 550px" :zoom="zoom" :center="center">
                <l-tile-layer :url="url" :attribution="attribution"></l-tile-layer>
                <l-marker v-for="marker, index in markers" :lat-lng="marker" :key="index">
                    <l-popup>{{ popup[index] }}</l-popup>
                </l-marker>
            </l-map>
        </div>
        <div>
            <label for="formControlRange">Date range</label>
            <Datepicker range style="width: 700px; display: block; margin-right: auto; margin-left: auto;"
                @closed="findForDate()" />
        </div>
    </div>
</template>

<script>
import { LMap, LTileLayer, LMarker, LPopup } from "@vue-leaflet/vue-leaflet";
import Datepicker from "./DatePicker.vue";
import axios from 'axios';
export default {
    name: 'ResultPage',
    components: {
        LMap,
        LTileLayer,
        LMarker,
        LPopup,
        Datepicker
    },
    data() {
        return {
            url: "https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png",
            attribution:
                '&copy; <a target="_blank" href="http://osm.org/copyright">OpenStreetMap</a> contributors',
            zoom: 13,
            center: [33.753746, -84.386330],
            markers: [],
            key: '',
            popup: [],
        };
    },
    methods: {
        getCrimes: function () {
            const vm = this
            const body = {
                "query": this.key,
                // "start": "2017-02-01",
                // "end": "2017-02-28"
            }
            console.log(this.key)
            axios.post("https://460e-2a02-a317-e343-ad80-4df1-2331-f1ac-6dd8.ngrok.io/api/elasticsearch", body)
                .then(function (response) {
                    console.log(response)
                    for (const element of response.data) {
                        vm.popup.push('Crime: ' + element.crime + ', date: ' + element.date + ', location: ' + element.location + ', number: ' + element.number)
                        vm.markers.push([element.lat, element.long]);
                    }

                })
                .catch(error => {
                    console.log(error)
                })
        },
        findForDate() {
            const vm = this
            this.popup = []
            this.markers = []
            const body = {
                "query": 'agg assault', 
                "start": "2009-07-01",
                "end": "2019-07-01"
            }
            console.log(body)
             axios.post("https://460e-2a02-a317-e343-ad80-4df1-2331-f1ac-6dd8.ngrok.io/api/elasticsearch", body)
                .then(function (response) {
                    console.log(response)
                    for (const element of response.data) {
                        vm.popup.push('Crime: ' + element.crime + ', date: ' + element.date + ', location: ' + element.location + ', number: ' + element.number)
                        vm.markers.push([element.lat, element.long]);
                    }

                })
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
