import Vue from 'vue';

let tab = {
    'DialogPFHL': () => import("@/components/NursingList/DialogPFHL"),
    'DialogPFHLwww': () => import("@/components/NursingList/DialogPFHLwww"),
}

export default function create(ComponentName, props) {
    // 先创建实例
    const vm = new Vue({
        render(h) {
            // h就是createElement，它返回VNode
            return h(tab[ComponentName], {props})
        }
    }).$mount();

    // 手动挂载
    document.body.appendChild(vm.$el);

    // // 销毁方法
    // const comp1 = vm.$children[0];
    // comp1.remove = function() {
    //     document.body.removeChild(vm.$el);
    //     vm.$destroy();
    // }
    // return comp1;
}
