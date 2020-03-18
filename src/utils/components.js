module.exports = {
    RadioList: () => import("@/components/BusinessSearchComponents/RadioList"),
    CheckboxList: () => import("@/components/BusinessSearchComponents/CheckboxList"),
    DateTemplate: () => import("@/components/BusinessSearchComponents/DateTemplate"),
    InputTemplate: () => import("@/components/BusinessSearchComponents/InputTemplate"),
    SelectTemplate: () => import("@/components/BusinessSearchComponents/SelectTemplate"),
    SelectRemoteModel: () => import("@/components/BusinessSearchComponents/SelectRemoteModel"),
    ButtonTemplate: () => import("@/components/BusinessSearchComponents/ButtonTemplate"),
    NuminputTemplate: () => import("@/components/BusinessSearchComponents/NuminputTemplate"),
    SearchForm: () => import("@/components/BusinessSearchComponents/SearchForm"),
    BusinessTable: () => import("@/components/BusinessSearchComponents/SettingBusinessTable"),
    Pagination: () => import("@/components/BusinessSearchComponents/Pagination"),
    NursingTime: () => import("@/components/NursingList/NursingTime"),
    SingleSelect: () => import("@/components/NursingList/SingleSelect")
    // CascaderModel: () => import("@/components/BusinessSearchComponents/CascaderModel")
};