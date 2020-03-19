import { createNamespacedHelpers } from "vuex";
const {mapState,mapActions}  = createNamespacedHelpers('layout')
export default {
  computed: {
    ...mapState({
        editableTabs: state => state.editableTabs,
        currentTab: state => state.currentTab,
        closable: state => state.closable,
        pages: state => state.pages
    })
  },
  methods: {
    ...mapActions([
        'setTab',
        'removeTab',
        'changeCurrentTab',
        'addNewRouter'
    ])
  }
};