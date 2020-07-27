import modal from './modal.js';
import tables from './table.js';
import Pages from './currentPage.js';


Vue.component('tables', tables);
Vue.component('modal', modal);
Vue.component('Pages', Pages);
new Vue({
    el: '#app',
    data: {
        products: [],
        result: [],
        list: [],
        minPage: '',
        maxPage: '',
        currentPage: '',
        tempProduct: {
            imageUrl: [],
        },
        delProduct: {
            imageUrl: [],
        },
        api: {
            uuid: 'bca2f4d5-83d8-453e-9147-f6acccce5c07',
            path: 'https://course-ec-api.hexschool.io/'
        },
        token: 'pq01eg4d5bDkkv5RFn9kH3r3o3HzrA8OmD9bxp4H1sETDeNzL4UYppZK9o6F',
    },
    methods: {
        newProduct() {
            this.tempProduct = {
                imageUrl: [],
            };
        },
        editData(item) {

            const url = `${this.api.path}api/${this.api.uuid}/admin/ec/product/${item}`
            axios.get(url).then(res => {
                this.tempProduct = res.data.data
            })
        },
        deleteData(item) {
            console.log(item)
            const url = `${this.api.path}api/${this.api.uuid}/admin/ec/product/${item}`
            axios.get(url).then(res => {
                console.log(res.data.data)
                this.delProduct = res.data.data
                console.log(this.delProduct)

            })
        },
        removeDone(item) {
            console.log(item)
            const url = `${this.api.path}api/${this.api.uuid}/admin/ec/product/${item}`
            axios.delete(url).then(res => {
                this.delProduct = {
                    imageUrl: [],
                }
                $('#deleteModal').modal('hide');
                this.getProduct()
            })

        },
        getProduct(num = 1) {
            const url = `${this.api.path}api/${this.api.uuid}/admin/ec/products`
            axios.get(url)
                .then(res => {
                    this.products = []; //消空之前取出得筆數
                    this.result = res.data.data
                    this.currentPage = res.data.meta.pagination //分頁pagination帶進
                    this.currentPage.per_page = 10 //每頁十筆
                    this.currentPage.current_page = num //把當前頁數載入
                    this.currentPage.total_pages = Math.ceil(this.currentPage.count / this.currentPage.per_page) //總頁數
                    this.minPage = (this.currentPage.per_page * num) - this.currentPage.per_page + 1 //當頁數第一筆
                    this.maxPage = this.currentPage.per_page * num //當前數最一筆
                    this.result.filter((item, i) => {
                        let index = i + 1
                        if (index >= this.minPage && index <= this.maxPage) {
                            this.products.push(item) //取出當前第一筆到最後一筆
                        }
                    })


                    if (this.tempProduct.id) {
                        this.tempProduct = {
                            imageUrl: [],
                        };
                        $('#exampleModal').modal('hide');
                    }
                })
        },
    },
    created() {
        axios.defaults.headers['Authorization'] = `Bearer ${this.token}`; //通過驗證
        this.getProduct();
    },
})