<template>
  <q-page class="bg-page">
    <div class="q-pa-md row bg-search" style="padding: 30px">
      <div class="col-md-3" id="search-column1">
        <input
          type="radio"
          id="one"
          value="One"
          v-model="picked"
          @click="
            (livePaper1 = true), (livePaper2 = false), (livePaper3 = false)
          "
        />
        <label for="one">ค้นหาตามใบแจ้งหน้าใบสั่งขาย</label>
        <div class="row">
          <input
            type="radio"
            id="two"
            value="Two"
            v-model="picked"
            @click="
              (livePaper1 = false), (livePaper2 = true), (livePaper3 = false)
            "
          />
          <label for="two">ค้นหาตามวันที่</label>
        </div>

        <div class="row">
          <input
            type="radio"
            id="three"
            value="Three"
            v-model="picked"
            @click="
              (livePaper1 = false), (livePaper2 = false), (livePaper3 = true)
            "
          />
          <label for="three">ค้นหาตามรหัสลูกค้า</label>
        </div>
      </div>
      <div
        class="col-md-3 items-center justify-st"
        id="search-column2"
        style="padding: 1px"
      >
        <span v-if="livePaper1">
          <div class="group">
            <svg class="icon" aria-hidden="true" viewBox="0 0 24 24">
              <g>
                <path
                  d="M21.53 20.47l-3.66-3.66C19.195 15.24 20 13.214 20 11c0-4.97-4.03-9-9-9s-9 4.03-9 9 4.03 9 9 9c2.215 0 4.24-.804 5.808-2.13l3.66 3.66c.147.146.34.22.53.22s.385-.073.53-.22c.295-.293.295-.767.002-1.06zM3.5 11c0-4.135 3.365-7.5 7.5-7.5s7.5 3.365 7.5 7.5-3.365 7.5-7.5 7.5-7.5-3.365-7.5-7.5z"
                ></path>
              </g>
            </svg>
            <input
              placeholder="Search"
              type="search"
              class="input"
              style="width: 229px"
            />
          </div>
          <div class="row">
            <q-select
              v-model="model"
              :options="linksData"
              :option-value="`id`"
              :option-label="`item`"
              class="select-input"
              @input="test5"
            />
          </div>
        </span>

        <span v-else-if="livePaper2">
          <div class="q-pa-md" style="padding: 1px; max-width: 250px">
            <q-input
              filled
              v-model="datenow"
              mask="date"
              :rules="['date']"
              readonly
            >
              <template v-slot:append>
                <q-icon name="event" class="cursor-pointer">
                  <q-popup-proxy
                    ref="qDateProxy"
                    transition-show="scale"
                    transition-hide="scale"
                  >
                    <q-date v-model="datefuture">
                      <div class="row items-center justify-start">
                        <q-btn
                          v-close-popup
                          label="Close"
                          color="primary"
                          flat
                        />
                      </div>
                    </q-date>
                  </q-popup-proxy>
                </q-icon>
              </template>
            </q-input>
          </div>

          <div class="q-pa-md" style="padding: 1px; max-width: 250px">
            <q-input
              filled
              v-model="datefuture"
              mask="date"
              :rules="['date']"
              readonly
            >
              <template v-slot:append>
                <q-icon name="event" class="cursor-pointer">
                  <q-popup-proxy
                    ref="qDateProxy"
                    transition-show="scale"
                    transition-hide="scale"
                  >
                    <q-date v-model="datefuture">
                      <div class="row items-center justify-end">
                        <q-btn
                          v-close-popup
                          label="Close"
                          color="primary"
                          flat
                        />
                      </div>
                    </q-date>
                  </q-popup-proxy>
                </q-icon>
              </template>
            </q-input>
          </div>
        </span>

        <span v-else-if="livePaper3">
          <div class="group">
            <svg class="icon" aria-hidden="true" viewBox="0 0 24 24">
              <g>
                <path
                  d="M21.53 20.47l-3.66-3.66C19.195 15.24 20 13.214 20 11c0-4.97-4.03-9-9-9s-9 4.03-9 9 4.03 9 9 9c2.215 0 4.24-.804 5.808-2.13l3.66 3.66c.147.146.34.22.53.22s.385-.073.53-.22c.295-.293.295-.767.002-1.06zM3.5 11c0-4.135 3.365-7.5 7.5-7.5s7.5 3.365 7.5 7.5-3.365 7.5-7.5 7.5-7.5-3.365-7.5-7.5z"
                ></path>
              </g>
            </svg>
            <input
              placeholder="Search"
              type="search"
              class="input"
              style="width: 229px"
            />
          </div>
          <q-select
            v-model="model"
            :options="linksData"
            :option-value="`id`"
            :option-label="`item`"
            class="select-input"
        /></span>
      </div>

      <div class="col-md-3" id="search-column3">
        <span v-if="livePaper2">
          <q-select
            v-model="model"
            :options="linksData"
            :option-value="`id`"
            :option-label="`item`"
            class="select-input"
            style="margin-bottom: 20px"
          />
          <div class="group">
            <svg class="icon" aria-hidden="true" viewBox="0 0 24 24">
              <g>
                <path
                  d="M21.53 20.47l-3.66-3.66C19.195 15.24 20 13.214 20 11c0-4.97-4.03-9-9-9s-9 4.03-9 9 4.03 9 9 9c2.215 0 4.24-.804 5.808-2.13l3.66 3.66c.147.146.34.22.53.22s.385-.073.53-.22c.295-.293.295-.767.002-1.06zM3.5 11c0-4.135 3.365-7.5 7.5-7.5s7.5 3.365 7.5 7.5-3.365 7.5-7.5 7.5-7.5-3.365-7.5-7.5z"
                ></path>
              </g>
            </svg>
            <input placeholder="ค้นหา" type="search" class="input" />
          </div>
        </span>
        <span v-if="livePaper3">
          <div class="q-pa-md" style="padding: 1px; max-width: 250px">
            <q-input
              filled
              v-model="datenow"
              mask="date"
              :rules="['date']"
              readonly
            >
              <template v-slot:append>
                <q-icon name="event" class="cursor-pointer">
                  <q-popup-proxy
                    ref="qDateProxy"
                    transition-show="scale"
                    transition-hide="scale"
                  >
                    <q-date v-model="datefuture">
                      <div class="row items-center justify-end">
                        <q-btn
                          v-close-popup
                          label="Close"
                          color="primary"
                          flat
                        />
                      </div>
                    </q-date>
                  </q-popup-proxy>
                </q-icon>
              </template>
            </q-input>
          </div>
          <div class="q-pa-md" style="padding: 1px; max-width: 250px">
            <q-input
              filled
              v-model="datefuture"
              mask="date"
              :rules="['date']"
              readonly
            >
              <template v-slot:append>
                <q-icon name="event" class="cursor-pointer">
                  <q-popup-proxy
                    ref="qDateProxy"
                    transition-show="scale"
                    transition-hide="scale"
                  >
                    <q-date v-model="datefuture">
                      <div class="row items-center justify-end">
                        <q-btn
                          v-close-popup
                          label="Close"
                          color="primary"
                          flat
                        />
                      </div>
                    </q-date>
                  </q-popup-proxy>
                </q-icon>
              </template>
            </q-input>
          </div>
        </span>
        <span v-if="livePaper1">
          <button class="button-s">ค้นหา</button>
        </span>
      </div>

      <div class="col-md-3" id="search-column4">
        <span v-if="livePaper2 || livePaper3">
          <button class="button-s">ค้นหา</button>
        </span>
      </div>
    </div>
  </q-page>
</template>
<script>
import { date } from "quasar";
const timeStamp = Date.now();
const today = date.formatDate(timeStamp, "YYYY/MM/DD");
const addDate = date.addToDate(timeStamp, { days: 5, months: 0 });
const futureDate = date.formatDate(addDate, "YYYY/MM/DD");

export default {
  name: "DeliveryHistory",

  data() {
    return {
      picked: "One",
      datee: { start: today, end: futureDate },
      fulldate: today + "-" + futureDate,
      model: "",
      livePaper1: true,
      livePaper2: false,
      livePaper3: false,
      linksData: [
        { item: "ท้ังหมด", id: 111 },
        { item: "อื่นๆ", id: 1 },
        { item: "รับทั้งหมด", id: 2 },
        { item: "รับบางส่วน", id: 3 },
        { item: "ไม่รับทั้งหมด", id: 4 },
        { item: "ไม่พบลูกค้า", id: 5 },
      ],

      test: "",
      datenow: today,
      datefuture: futureDate,
      proxyDate: "2019/03/01",
    };
  },
  methods: {
    updateProxy() {
      this.proxyDate = this.date;
    },

    save() {
      this.date = this.proxyDate;
    },
    test5() {
      console.log(this.linksData.id);
    },
  },
};
</script>

<style lang="sass" scoped>
.column
  background: linear-gradient(90deg, rgba(93,16,73,1) 0%, rgba(209,209,233,1) 0%)
.column > div
  padding: 10px 15px
  background: linear-gradient(90deg, rgba(93,16,73,1) 0%, rgba(209,209,233,1) 0%)

.column + .column
  margin-top: 1rem
</style>
<style scoped>
@import url("../css/style.css");
</style>
