import { createNamespacedHelpers } from "vuex";
const { mapState, mapActions }  = createNamespacedHelpers('patient')
export default {
  computed: {
    ...mapState({
        patient: state => state.patient
    })
  },
  methods: {
    ...mapActions([
        'setPatient'
    ])
  }
};