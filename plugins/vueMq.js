import Vue from 'vue';
import VueMq from 'vue-mq';

Vue.use(VueMq, {
  breakpoints: {
    xs: 600,
    sm: 960,
    md: 1264,
    lg: 1904,
    xl: Infinity
  },
  defaultBreakpoint: 'sm' // customize this for SSR
});
