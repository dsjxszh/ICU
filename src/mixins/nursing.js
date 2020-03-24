import { createNamespacedHelpers } from "vuex";
const { mapState, mapActions }  = createNamespacedHelpers('nursing')
export default {
  computed: {
    ...mapState({
        position: state => state.position,
        enterClick: state => state.enterClick,
        sanShow: state => state.sanshow,
        currentComIsSan: state => state.currentComIsSan
    })
  },
  methods: {
    ...mapActions([
        'setPosition',
        'setEnter',
        'setSanShow',
        'setCurrentCom'
    ])
  }
};12