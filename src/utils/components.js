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
    san: () => import("@/components/NursingList/san"),
    // 护理单编辑form表单组件
    SingleSelect: () => import("@/components/NursingList/SingleSelect"),
    PopupInput: () => import("@/components/NursingList/PopupInput"),
    CheckboxNursing: () => import("@/components/NursingList/CheckboxNursing"),
    RadioNursing: () => import("@/components/NursingList/RadioNursing"),
    SelectSearchNursing: () => import("@/components/NursingList/SelectSearchNursing"),
    NuminputNursing: () => import("@/components/NursingList/NuminputNursing"),
    InputNursing: () => import("@/components/NursingList/InputNursing"),
    // CascaderModel: () => import("@/components/BusinessSearchComponents/CascaderModel")
};