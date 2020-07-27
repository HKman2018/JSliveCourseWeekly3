export default {
    template: `<div class="modal-dialog">
                <div class="modal-content">
                    <div class="modal-header">
                        <h5 class="modal-title text-info" id="exampleModalLabel">建立新產品</h5>
                        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                             <span aria-hidden="true">&times;</span>
                           </button>
                    </div>
                    <div class="modal-body">
                        <div class="row">
                            <div class="col-4">
                                <div class="form-group">
                                    <label for="imageUrl" class="text-info">輸入圖片網址</label>
                                    <!-- //v-model=imageUrl -->
                                    <input type="text" id="imageUrl" v-model="tempData.imageUrl[0]" class="form-control" placeholder="請輸入圖片連結">     
                                </div>
                                <img :src="tempData.imageUrl" class="img-fluid">
                            </div>
                            <!-- //col-4 -->
                            <div class="col-8">
                                <div class="form-group">
                                    <label for="title" class="text-info">標題</label>
                                    <!-- //v-model=title -->
                                    <input type="text" id="title" v-model="tempData.title" class="form-control" placeholder="請輸入標題">
                                </div>

                                <div class="form-row">
                                    <div class="form-group col-md-6">
                                        <label for="category" class="text-info">分類</label>
                                        <!-- //v-model=categroy-->
                                        <input id="category" type="text" v-model="tempData.category" class="form-control" placeholder="請輸入分類">
                                    </div>
                                    <div class="form-group col-md-6">
                                        <label for="price" class="text-info">單位</label>
                                        <!-- //v-model=unit-->
                                        <input id="unit" type="text" v-model="tempData.unit" class="form-control" placeholder="請輸入單位">
                                    </div>
                                </div>
                                <div class="form-row">
                                    <div class="form-group col-md-6">
                                        <label for="origin_price" class="text-info">原價</label>
                                        <!-- //v-model=origin_price-->
                                        <input id="origin_price" type="text" v-model="tempData.origin_price" class="form-control" placeholder="請輸入原價">
                                    </div>
                                    <div class="form-group col-md-6">
                                        <label for="price" class="text-info">售價</label>
                                        <!-- //v-model=price-->
                                        <input id="price" type="text" v-model="tempData.price" class="form-control" placeholder="請輸入售價">
                                    </div>
                                </div>
                                <div class="form-group">
                                    <label for="description" class="text-info">產品描述</label>
                                    <!-- //v-model=descriptioin-->
                                    <textarea type="text" id="description" v-model="tempData.description" class="form-control" placeholder="請輸入產品描述"></textarea>
                                </div>
                                <div class="form-group">
                                    <label for="content" class="text-info">說明內容</label>
                                    <!-- //v-model=content -->
                                    <textarea type="text" id="content" v-model="tempData.content" class="form-control" placeholder="請輸入說明內容"></textarea>
                                </div>
                                <div class="form-group">
                                    <div class="form-check">
                                        <!-- //v-model=is_enabled-->
                                        <input id="is_enabled" v-model="tempData.enabled" class="form-check-input" type="checkbox" :true-value="1" :false-value="0">
                                        <label class="form-check-label text-info" for="is_enabled">是否啟用</label>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <!--/moda-body -->
                    <div class="modal-footer">
                        <button type="button" class="btn btn-secondary" data-dismiss="modal">取消</button>
                        <button type="button" class="btn btn-primary"v-if="tempData.id" @click="updateData">確認</button>
                         <button type="button" class="btn btn-primary"v-else @click="createProduct">確認</button>
                    </div>
                </div>
            </div>`,
    data() {
        return {
            // tempData: {},
        }
    },
    props: ['tempData', 'api'],
    methods: {
        updateData() {
            console.log(1)
            const url = `${this.api.path}api/${this.api.uuid}/admin/ec/product/${this.tempData.id}`
            axios.patch(url, this.tempData).then(res => {
                this.$emit('update')
            })
        },
        createProduct() {
            const url = `${this.api.path}api/${this.api.uuid}/admin/ec/product`
            axios.post(url, this.tempData).then(res => {
                this.$emit('update')
                $('#exampleModal').modal('hide')
            })
        }
    }
}