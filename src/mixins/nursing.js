import { createNamespacedHelpers } from "vuex";
const { mapState, mapActions }  = createNamespacedHelpers('nursing')
export default {
  computed: {
    ...mapState({
        position: state => state.position,
    })
  },
  methods: {
    ...mapActions([
        'setPosition'
    ])
  }
};