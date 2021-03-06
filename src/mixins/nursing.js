import { createNamespacedHelpers } from "vuex";
const { mapState, mapActions }  = createNamespacedHelpers('nursing')
export default {
  computed: {
    ...mapState({
        position: state => state.position,
        enterClick: state => state.enterClick,
        sanShow: state => state.sanshow,
        sanArray: state => state.sanArray,
        formData: state => state.formData
    })
  },
  methods: {
    ...mapActions([
        'setPosition',
        'setEnter',
        'setSanShow',
        'setSanArray',
        'setFormData'
    ])
  }
};