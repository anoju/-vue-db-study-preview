export default {
  install(Vue) {
    const requires = require.context('@/components/global', false, /\w+\.vue$/);
    requires.keys().forEach((key) => {
      const component = requires(key).default;
      Vue.component(component.name, component);
    });
  },
};
