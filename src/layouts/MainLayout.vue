<template>
  <q-layout view="lHh Lpr lFf">
    <q-header elevated>
      <q-toolbar class="bg-toolbar">
        <q-btn
          flat
          dense
          round
          icon="menu"
          aria-label="Menu"
          @click="leftDrawerOpen = !leftDrawerOpen"
        />

        <q-toolbar-title> Quasar App </q-toolbar-title>

        <q-btn round color="warning" icon="logout" />
      </q-toolbar>
    </q-header>

    <q-drawer
      v-model="leftDrawerOpen"
      show-if-above
      bordered
      content-class="bg-menu"
    >
      <q-list>
        <q-item-label header class="menu-items">
          <div row>
            Report Delivery
            <q-img src="../assets/images/delivery.png" height="10px" />
          </div>
        </q-item-label>
        <q-li>
          <router-link
            v-for="link in essentialLinks"
            :to ="link.path"
            :key="link.title"
            v-bind="link"

            class="button"
          >
            {{ link.title }}</router-link
          >
        </q-li>
      </q-list>
    </q-drawer>

    <q-page-container class="bg-page">
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script>
const linksData = [
  {
    title: "ประวัติการส่ง",
    icon: "history",
    path: "DeliveryHistory",
  },
  {
    title: "รายงานเวลารอบส่ง",
    icon: "flag",
    path: "SumDlvHistory",
  },
  {
    title: "รายงานมูลค่า",
    icon: "paid",
    path: "ReportCommission",
  },
  {
    title: "บิลไม่แสดงในแผนที่",
    icon: "not_listed_location",
    path: "InvoiceIgnored",
  },
  {
    title: "ตำแหน่งส่งของลูกค้า",
    icon: "place",
    path: "Custmap",
  },
];

export default {
  name: "MainLayout",

  data() {
    return {
      leftDrawerOpen: false,
      essentialLinks: linksData,
    };
  },
};
</script>
<style scoped>
@import url("../css/style.css");
</style>
