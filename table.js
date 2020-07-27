export default {
    template: `<table class="table">
                  <thead class="thead-light">
                    <tr >
                      <th width="120">分類</th>
                      <th >產品名稱</th>
                      <th width="120">原價</th>
                      <th width="120">售價</th>
                      <th width="150">是否啟用</th>
                      <th width="200">編輯</th>
                    </tr>
                  </thead>
  <!-- ------呈顯資料-------- -->
          <tbody>
            <tr v-for="item in indexPage":key="item.id">
              <th scope="row">{{item.category}}</th>
              <td >{{item.title}}</td>
              <td>{{item.origin_price}}</td>
              <td>{{item.price}}</td>         
              <td>
                <span v-if="item.enabled"class="text-success">啟用</span>
                <span v-else>未啟用</span>
              </td>
              <td>
                <div class="btn-group">
                <button type="button" class="btn btn-primary mr-3"data-toggle="modal" data-target="#exampleModal"@click="editModal(item.id)">編輯</button>
                <button type="button" class="btn btn-danger"data-toggle="modal" data-target="#deleteModal" @click="removeData(item.id)">刪除</button>
                </div>
              </td>
            </tr>
            </tbody>
          </table> `,
    data() {
        return {

        }
    },
    props: ['indexPage'],
    methods: {
        editModal(item) {
            console.log(item)
            this.$emit('edit', item)
        },
        removeData(item) {
            console.log(item)
            this.$emit('remove', item)
        }
    }
}